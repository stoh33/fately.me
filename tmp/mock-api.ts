import { createServer } from 'http';
import { computeSaju, getSexagenaryYear, getZodiacSign } from '../functions/lib/saju-calculator';
import { readFileSync } from 'fs';

// Load env vars from .dev.vars
const devVars = readFileSync('.dev.vars', 'utf-8');
const OPENAI_API_KEY = devVars.match(/OPENAI_API_KEY=(.*)/)?.[1]?.trim();

const server = createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/saju-report') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        console.log('Received request for:', data.clientName);

        const computed = computeSaju({
          birthDate: data.birthDate,
          birthTime: data.timeUnknown ? null : data.birthTime,
          timeUnknown: !!data.timeUnknown,
          calendarType: data.calendarType || 'solar',
          timezone: data.timezone || 'Asia/Seoul',
        });

        const currentYear = new Date().getFullYear();
        const zodiacData = getZodiacSign(data.birthDate, data.calendarType || 'solar');
        
        // Mock OpenAI response for speed, or call it if key exists
        let reportMarkdown = '';
        if (OPENAI_API_KEY) {
          const systemInstruction = `당신은 전문 사주 분석가입니다. 마크다운 형식으로 고도의 전문성을 갖춘 보고서를 작성하세요. 
보고서는 반드시 다음 섹션들을 포함해야 합니다:
1. 종합 사주 분석 (성격, 기질, 전반적인 운의 흐름)
2. 2026년 병오년 토정비결 (상세한 신년 운세)
3. 월별 상세 운세 (1월~12월 각각에 대한 조언)
4. 사주와 혈액형(${data.bloodType}) 교차 분석
5. 사주와 별자리(${zodiacData.ko}) 교차 분석
6. 사주 기반 MBTI 추정 및 이유
7. 취미(${data.hobby}) 활동 시 사주 기반 맞춤형 조언 및 주의점
8. 사용자의 추가 질문/메모에 대한 분석 및 답변 (notes 섹션)`;
          const userPrompt = `${data.clientName}님의 상세 사주 분석 보고서를 작성해줘. 
입력 데이터: ${JSON.stringify(computed)}
별자리: ${zodiacData.ko} (계산기 패키지 결과)
혈액형: ${data.bloodType}, 취미 ${data.hobby || '없음'}, 메모 ${data.notes || '없음'}`;
          
          const openAiRes = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${OPENAI_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [
                { role: 'system', content: systemInstruction },
                { role: 'user', content: userPrompt },
              ],
            }),
          });
          const openAiData = await openAiRes.json() as any;
          reportMarkdown = openAiData?.choices?.[0]?.message?.content || '리포트 생성 실패';
        } else {
          reportMarkdown = `## ${data.clientName}님의 사주 분석 리포트 (MOCK)

이 부분은 OpenAI API 키가 없는 경우 표시되는 목업 데이터입니다.

### 1. 종합 사주 분석
- 생년월일: ${data.birthDate} ${data.birthTime || ''} (${data.calendarType === 'solar' ? '양력' : '음력'})
- 당신은 ${computed.year.symbol}과 ${computed.day.symbol}의 기운을 타고났습니다.

### 2. 2026년 병오년 토정비결
- 올해는 뜨거운 화(火)의 기운이 강한 해로, ${data.clientName}님에게는 새로운 도전의 기회가 될 것입니다.

### 3. 월별 상세 운세
- **1월~4월**: 기반을 다지는 시기
- **5월~8월**: 성과가 나타나는 시기
- **9월~12월**: 결실을 맺고 마무리하는 시기

### 4. 교차 분석
- **혈액형(${data.bloodType}) 분석**: 사주의 기운과 ${data.bloodType}형의 특징이 조화를 이룹니다.
- **별자리(${data.zodiacSign}) 분석**: 사주의 기질이 서양 별자리 ${data.zodiacSign}의 성향을 보완해줍니다.

### 5. MBTI 추정
- 사주 분석 결과, 당신은 **ENTJ** 성향이 강할 것으로 추정됩니다.

### 6. 취미(${data.hobby}) 조언
- ${data.hobby} 활동 시에는 평정심을 유지하는 것이 중요하며, 특히 오후 시간대가 행운을 가져다줄 것입니다.

${data.notes ? `### 7. 추가 질문 답변
- 질문/메모 내용: "${data.notes}"
- 조언: 현재 운의 기운을 보았을 때, 이 문제는 시간을 두고 해결하는 것이 길합니다.` : ''}`;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          reportMarkdown,
          meta: {
            fourPillars: { year: computed.year, month: computed.month, day: computed.day, hour: computed.hour },
            fiveElements: computed.fiveElements,
            generatedAt: new Date().toISOString(),
          }
        }));
      } catch (err) {
        console.error(err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: String(err) }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const PORT = 8788;
server.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
});
