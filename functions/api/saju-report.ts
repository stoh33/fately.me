import { computeSaju, getSexagenaryYear, getZodiacSign, type CalendarType } from '../lib/saju-calculator'

type PagesContext<Env> = {
  request: Request
  env: Env
}

type PagesFunction<Env = Record<string, unknown>> = (
  context: PagesContext<Env>,
) => Response | Promise<Response>

type Env = {
  OPENAI_API_KEY?: string
  OPENAI_MODEL?: string
  ALLOWED_ORIGINS?: string
}

const corsHeaders = {
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function buildCorsHeaders(origin: string | null, allowedOrigins?: string) {
  if (!allowedOrigins) return { 'Access-Control-Allow-Origin': '*' }
  const allowlist = new Set(allowedOrigins.split(',').map((item) => item.trim()).filter(Boolean))
  if (origin && allowlist.has(origin)) return { 'Access-Control-Allow-Origin': origin }
  return { 'Access-Control-Allow-Origin': 'null' }
}

function jsonResponse(status: number, body: Record<string, unknown>, origin: string | null, allowedOrigins?: string) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      ...buildCorsHeaders(origin, allowedOrigins),
      'content-type': 'application/json; charset=utf-8',
    },
  })
}



async function callOpenAI(apiKey: string, model: string, systemInstruction: string, userPrompt: string) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: model || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemInstruction },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
    }),
  })
  if (!response.ok) {
    const error = (await response.json()) as Record<string, Record<string, string>>
    throw new Error(error?.error?.message || 'OpenAI API request failed')
  }
  const data = (await response.json()) as Record<string, Array<Record<string, Record<string, string>>>>
  return data?.choices?.[0]?.message?.content?.trim() || ''
}

export const onRequestOptions: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get('Origin')
  return new Response(null, {
    status: 204,
    headers: { ...corsHeaders, ...buildCorsHeaders(origin, env.ALLOWED_ORIGINS) },
  })
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get('Origin')

  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return jsonResponse(400, { error: 'Invalid body' }, origin, env.ALLOWED_ORIGINS)
  }

  let computed: ReturnType<typeof computeSaju>
  try {
    computed = computeSaju({
      birthDate: body.birthDate,
      birthTime: body.timeUnknown ? null : body.birthTime,
      timeUnknown: !!body.timeUnknown,
      calendarType: (body.calendarType || 'solar') as CalendarType,
      timezone: body.timezone || 'Asia/Seoul',
    })
  } catch {
    return jsonResponse(400, { error: '사주 계산 실패' }, origin, env.ALLOWED_ORIGINS)
  }

  const apiKey = env.OPENAI_API_KEY;
  // If no API key, return a mock response for testing
  if (!apiKey) {
    const isEn = body.lang === 'en';
    const hobby = body.hobby || 'Golf';
    const zodiacSign = body.zodiacSign || 'auto';
    const bloodType = body.bloodType || 'unknown';
    
    const mockReport = isEn
      ? `## Analysis Report for ${body.clientName} (MOCK)
This is a mock report because no OPENAI_API_KEY is configured.

### 1. 2026 Yearly Outlook
- A bright year for ${body.clientName}!
### 2. Monthly Outlook
- 1-12: Great progress...
### 3. Cross-Analysis
- Blood Type: ${bloodType}
- Zodiac: ${zodiacSign}
### 4. MBTI
- Estimated: ENTJ
### 5. Hobby Advice
- Advice for ${hobby}...`
      : `## ${body.clientName}님의 사주 분석 리포트 (MOCK)
오픈AI API 키가 설정되지 않아 제공되는 테스트용 목업 리포트입니다.

### 1. 2026년 병오년 토정비결
- 올해는 뜨거운 화(火)의 기운이 강한 해로, ${body.clientName}님에게는 새로운 도전의 기회가 될 것입니다.

### 2. 월별 상세 운세
- **1월~4월**: 기반을 다지는 시기
- **5월~8월**: 성과가 나타나는 시기
- **9월~12월**: 결실을 맺고 마무리하는 시기

### 3. 교차 분석
- **혈액형(${bloodType}) 분석**: 사주의 기운과 ${bloodType}형의 특징이 조화를 이룹니다.
- **별자리(${zodiacSign}) 분석**: 사주의 기질이 서양 별자리 ${zodiacSign}의 성향을 보완해줍니다.

### 4. MBTI 추정
- 사주 분석 결과, ${body.clientName}님은 **ENTJ** 성향이 강할 것으로 추정됩니다.

### 5. 취미(${hobby}) 조언
- ${hobby} 활동 시에는 평정심을 유지하는 것이 중요하며, 특히 오후 시간대가 행운을 가져다줄 것입니다.

${body.notes ? `### 6. 추가 질문 답변
- 질문/메모 내용: "${body.notes}"
- 조언: 현재 운의 기운을 보았을 때, 이 문제는 시간을 두고 해결하는 것이 길합니다.` : ''}`;

    return jsonResponse(200, {
      reportMarkdown: mockReport,
      meta: {
        fourPillars: { year: computed.year, month: computed.month, day: computed.day, hour: computed.hour },
        fiveElements: computed.fiveElements,
        generatedAt: new Date().toISOString(),
        provider: 'mock',
      },
    }, origin, env.ALLOWED_ORIGINS);
  }

  const currentYear = new Date().getFullYear()
  const currentYearGanji = getSexagenaryYear(currentYear)
  
  const zodiacData = getZodiacSign(body.birthDate, (body.calendarType || 'solar') as CalendarType)
  const selectedZodiac =
    body.zodiacSign && body.zodiacSign !== 'auto' ? String(body.zodiacSign) : zodiacData.ko

  const isEn = body.lang === 'en'
  const hobby = body.hobby || (isEn ? 'Golf' : '골프')
  const systemInstruction = isEn
    ? `You are an expert Saju (Four Pillars of Destiny) analyst and astrology consultant.
       Write the report in English.
       Use Markdown formatting and separate sections with H2 (##) headers.
       Address user's notes/questions at the end of the report if provided.`.trim()
    : `당신은 전문 사주 분석가이자 점성술 상담사입니다.
       아래 출력 형식을 반드시 지키세요.
       - 마크다운 형식
       - 각 섹션은 H2(##) 제목 사용
       - 사용자의 추가 질문/메모('notes')에 대해서는 명리학적 관점에서 마지막에 상세히 답변할 것`.trim()

  const userPrompt = isEn
    ? `Write a personalized Saju analysis report for ${body.clientName || 'the client'}.
       Please address ${body.clientName || 'the client'} by name naturally in the introduction and throughout the report.
       
       Based on the following:
       - Name: ${body.clientName || 'Client'}
       - Birth: ${body.birthDate}
       - Gender: ${body.gender || 'Unknown'}, Blood Type: ${body.bloodType || 'Unknown'}
       - Zodiac Sign: ${selectedZodiac}
       - Saju Data: ${JSON.stringify(computed)}

       Follow this order:
       1) Core Saju Interpretation (Note: Visual table is provided in UI, don't list pillars as text list. Start with a warm greeting mentioning the name.)
       2) Five Elements Balance & Personality
       3) 2026 Yearly Outlook
       4) 2026 Monthly Outlook (1-12, short bullets)
       5) Zodiac Sign Analysis
       6) Saju & Zodiac Cross-Analysis
       7) Blood Type Personality
       8) Saju & Blood Type Cross-Analysis
       9) Integrated MBTI Estimation
       10) Saju-based ${hobby} Analysis (Strengths, Areas for Improvement, Recommended Styles)
       11) Answers to Additional Notes/Questions: "${body.notes || 'None'}"
       12) Conclusion (5 lines summary)`
    : `${body.clientName || '의뢰인'}님을 위한 개인화된 사주 분석 보고서를 작성해줘.
보고서 시작 부분에서 이름을 언급하며 따뜻한 인사를 건네고, 본문 전반에서 ${body.clientName || '의뢰인'}님의 이름을 자연스럽게 언급하며 설명해줘.

의뢰인 정보:
- 이름: ${body.clientName || '의뢰인'}
- 생년월일: ${body.birthDate}
- 성별: ${body.gender || '미상'}, 혈액형: ${body.bloodType || '미상'}
- 별자리: ${zodiacData.ko} (계산기 패키지 결과)
- 추가 질문/메모: ${body.notes || '없음'}
사주원국 데이터: 년(${computed.year.stem}${computed.year.branch}), 월(${computed.month.stem}${computed.month.branch}), 일(${computed.day.stem}${computed.day.branch}), 시(${'unknown' in computed.hour ? '미상' : `${computed.hour.stem}${computed.hour.branch}`})
오행 분포: 목(${computed.fiveElements.목.count}), 화(${computed.fiveElements.화.count}), 토(${computed.fiveElements.토.count}), 금(${computed.fiveElements.금.count}), 수(${computed.fiveElements.수.count})
- 관심 취미: ${hobby}

다음 내용을 상세히 포함해줘:
1. 사주원국 핵심 분석
   - 주의: 시각적 표는 UI에서 별도로 제공되므로, 텍스트로 년/월/일/시주를 나열하지 마세요. ${body.clientName || '의뢰인'}님에 대한 인사와 함께 바로 분석 내용(오행의 조화, 특이사항 등)으로 시작하세요.
2. 성격 및 기질 분석
3. 대운 및 2026년(${currentYearGanji}) 운세 상세
4. 올해 종합사주 (${currentYear}년 전체 흐름: 커리어/재물/관계/건강)
5. 올해 월별 사주 (${currentYear}년 1~12월)
   - 각 월마다 핵심 키워드, 기회, 주의점, 추천 행동을 2~3문장으로 작성
6. 건강, 재물, 관계 조언
7. 별자리(서양점성술) 핵심 성향 분석
8. 사주 결과와 별자리 교차분석
  - 공통점(최소 3개)
  - 차이점(최소 3개)
  - 보완점(행동 중심, 최소 5개)
9. 혈액형 성향 분석(일반적 경향)
10. 사주 결과와 혈액형 교차분석
  - 공통점(최소 2개)
  - 차이점(최소 2개)
  - 보완점(최소 3개)
11. 종합 분석 기반 추정 MBTI
  - 사주, 별자리, 혈액형의 성향을 통합적으로 분석하여 가장 가능성 높은 MBTI 유형 1가지를 제시하고 그 이유를 3~4줄로 설명
12. 사주 기반 ${hobby} 분석
  - 강점, 개선점, 추천 스타일 형태로 정리
13. 추가 메모 및 질문 답변
  - 질문 내용: "${body.notes || '없음'}"
  - 질문에 대한 명리학적 조언과 답변 제공

마지막에 "종합 요약" 섹션으로 핵심 5줄 요약을 추가해줘.`

  try {
    const reportMarkdown = await callOpenAI(
      apiKey,
      env.OPENAI_MODEL || 'gpt-4o-mini',
      systemInstruction,
      userPrompt,
    )
    if (!reportMarkdown) throw new Error('Empty response')

    return jsonResponse(
      200,
      {
        reportMarkdown,
        meta: {
          fourPillars: { year: computed.year, month: computed.month, day: computed.day, hour: computed.hour },
          fiveElements: computed.fiveElements,
          generatedAt: new Date().toISOString(),
          provider: 'openai',
        },
      },
      origin,
      env.ALLOWED_ORIGINS,
    )
  } catch (err: unknown) {
    const detail = err instanceof Error ? err.message : String(err)
    let msg = detail || 'OPENAI API 호출 중 오류가 발생했습니다.'
    if (detail.includes('429')) msg = 'API 할당량 초과되었습니다. 잠시 후 다시 시도하세요.'
    return jsonResponse(502, { error: msg, detail }, origin, env.ALLOWED_ORIGINS)
  }
}
