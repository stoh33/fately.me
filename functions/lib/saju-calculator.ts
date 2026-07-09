import { Solar, Lunar } from 'lunar-typescript'

export type CalendarType = 'solar' | 'lunar' | 'lunar-leap'

export type SajuInput = {
  birthDate: string
  birthTime?: string | null
  birthHourBranch?: string | null
  timeUnknown: boolean
  calendarType: CalendarType
  timezone: string
  bloodType?: string | null
  zodiac?: string | null
  mbtiSelfEI?: string | null
  mbtiSelfTF?: string | null
}

type ElementKey = '목' | '화' | '토' | '금' | '수'

export type PillarValue = {
  stem: string
  stemHanja: string
  stemElement: ElementKey
  branch: string
  branchHanja: string
  branchElement: ElementKey
  symbol: string
  hideGan: Array<{ hanja: string; hangul: string; element: ElementKey }>
}

export type SajuComputation = {
  adjustedBirthDate: string
  calendarAssumptionNote?: string
  year: PillarValue
  month: PillarValue
  day: PillarValue
  hour:
    | (PillarValue & {
        timeBranchLabel: string
      })
    | {
        unknown: true
        label: '미상'
      }
  fiveElements: Record<ElementKey, { count: number; strength: '강함' | '중간' | '약함' | '부족' }>
  yongsinSuggestion: ElementKey
  gisinSuggestion: ElementKey
  estimatedMBTI: string
}

const ELEMENT_SYMBOL: Record<ElementKey, string> = {
  목: '성장·확장',
  화: '표현·열정',
  토: '안정·중재',
  금: '원칙·결단',
  수: '지혜·유연',
}

const STEM_HANJA_TO_HANGUL: Record<string, string> = {
  '甲': '갑', '乙': '을', '丙': '병', '丁': '정', '戊': '무', 
  '己': '기', '庚': '경', '辛': '신', '壬': '임', '癸': '계'
}

const BRANCH_HANJA_TO_HANGUL: Record<string, string> = {
  '子': '자', '丑': '축', '寅': '인', '卯': '묘', '辰': '진', '巳': '사',
  '午': '오', '未': '미', '申': '신', '酉': '유', '戌': '술', '亥': '해'
}

const STEM_ELEMENT: Record<string, ElementKey> = {
  갑: '목', 을: '목', 병: '화', 정: '화', 무: '토', 기: '토', 경: '금', 신: '금', 임: '수', 계: '수',
}

const BRANCH_ELEMENT: Record<string, ElementKey> = {
  '子': '수', '丑': '토', '寅': '목', '卯': '목', '辰': '토', '巳': '화',
  '午': '화', '未': '토', '申': '금', '酉': '금', '戌': '토', '亥': '수'
}

// 간지 시간을 숫자로 매핑 (대표 시간값)
const BRANCH_TO_TIME: Record<string, string> = {
  '자': '00:00', '축': '02:00', '인': '04:00', '묘': '06:00', '진': '08:00', '사': '10:00',
  '오': '12:00', '미': '14:00', '신': '16:00', '유': '18:00', '술': '20:00', '해': '22:00'
}

export const BRANCHES = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'] as const

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function parseBirthDate(value: string) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!match) return null
  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
  }
}

function parseBirthTime(value: string | null) {
  if (!value) return { hour: 12, minute: 0 }
  const match = value.match(/^(\d{2}):(\d{2})$/)
  if (!match) return { hour: 12, minute: 0 }
  return {
    hour: Number(match[1]),
    minute: Number(match[2]),
  }
}

function getPillarValue(gan: string, zhi: string, hideGanList: string[]): PillarValue {
  const stem = STEM_HANJA_TO_HANGUL[gan]
  const branch = BRANCH_HANJA_TO_HANGUL[zhi]
  const stemElement = STEM_ELEMENT[stem]
  const branchElement = BRANCH_ELEMENT[zhi]
  
  const hideGan = hideGanList.map(hGan => {
    const hHangul = STEM_HANJA_TO_HANGUL[hGan]
    return {
      hanja: hGan,
      hangul: hHangul,
      element: STEM_ELEMENT[hHangul]
    }
  })

  return {
    stem,
    stemHanja: gan,
    stemElement,
    branch,
    branchHanja: zhi,
    branchElement,
    symbol: ELEMENT_SYMBOL[stemElement],
    hideGan
  }
}

function classifyStrength(count: number, total: number): '강함' | '중간' | '약함' | '부족' {
  const ratio = total > 0 ? count / total : 0
  if (ratio >= 0.3) return '강함'
  if (ratio >= 0.22) return '중간'
  if (ratio >= 0.14) return '약함'
  return '부족'
}

export function computeSaju(input: SajuInput): SajuComputation {
  const dateParts = parseBirthDate(input.birthDate)
  if (!dateParts) {
    throw new Error('Invalid birthDate format. Use YYYY-MM-DD.')
  }

  // birthTime이 없고 birthHourBranch(자,축,인..)만 있는 경우 시간 숫자로 변환
  let timeStr = input.birthTime
  if (!timeStr && input.birthHourBranch && BRANCH_TO_TIME[input.birthHourBranch]) {
    timeStr = BRANCH_TO_TIME[input.birthHourBranch]
  }

  let solar: Solar
  if (input.calendarType === 'lunar' || input.calendarType === 'lunar-leap') {
    const isLeap = input.calendarType === 'lunar-leap'
    const monthVal = isLeap ? -dateParts.month : dateParts.month
    try {
      const lunar = Lunar.fromYmd(dateParts.year, monthVal, dateParts.day)
      solar = lunar.getSolar()
    } catch (err) {
      if (err instanceof Error && err.message.includes('wrong lunar year') && err.message.includes('month -')) {
        throw new Error('INVALID_LEAP_MONTH')
      }
      throw err
    }
  } else {
    const time = parseBirthTime(timeStr || null)
    // Apply 30 minute offset for Korea (UTC+9 is 30 mins ahead of solar time at 127.5 longitude)
    let hour = time.hour
    let minute = time.minute - 30
    if (minute < 0) {
      minute += 60
      hour -= 1
    }
    solar = Solar.fromYmdHms(dateParts.year, dateParts.month, dateParts.day, hour, minute, 0)
  }

  const lunar = solar.getLunar()
  const eightChar = lunar.getEightChar()

  const yearPillar = getPillarValue(eightChar.getYearGan(), eightChar.getYearZhi(), eightChar.getYearHideGan())
  const monthPillar = getPillarValue(eightChar.getMonthGan(), eightChar.getMonthZhi(), eightChar.getMonthHideGan())
  const dayPillar = getPillarValue(eightChar.getDayGan(), eightChar.getDayZhi(), eightChar.getDayHideGan())
  
  let hourPillar: SajuComputation['hour']
  if (input.timeUnknown) {
    hourPillar = { unknown: true, label: '미상' }
  } else {
    const hGan = eightChar.getTimeGan()
    const hZhi = eightChar.getTimeZhi()
    const p = getPillarValue(hGan, hZhi, eightChar.getTimeHideGan())
    hourPillar = {
      ...p,
      timeBranchLabel: `${p.branch}시`,
    }
  }

  const elementCount: Record<ElementKey, number> = { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 }
  
  const addPillarElements = (gan: string, zhi: string) => {
    const stem = STEM_HANJA_TO_HANGUL[gan]
    elementCount[STEM_ELEMENT[stem]] += 1
    elementCount[BRANCH_ELEMENT[zhi]] += 1
  }

  addPillarElements(eightChar.getYearGan(), eightChar.getYearZhi())
  addPillarElements(eightChar.getMonthGan(), eightChar.getMonthZhi())
  addPillarElements(eightChar.getDayGan(), eightChar.getDayZhi())
  if (!('unknown' in hourPillar)) {
    addPillarElements(eightChar.getTimeGan(), eightChar.getTimeZhi())
  }

  const totalElementTokens = Object.values(elementCount).reduce((sum, value) => sum + value, 0)
  const fiveElements = {
    목: { count: elementCount.목, strength: classifyStrength(elementCount.목, totalElementTokens) },
    화: { count: elementCount.화, strength: classifyStrength(elementCount.화, totalElementTokens) },
    토: { count: elementCount.토, strength: classifyStrength(elementCount.토, totalElementTokens) },
    금: { count: elementCount.금, strength: classifyStrength(elementCount.금, totalElementTokens) },
    수: { count: elementCount.수, strength: classifyStrength(elementCount.수, totalElementTokens) },
  }

  const sortedElements = (Object.keys(elementCount) as ElementKey[]).sort(
    (a, b) => elementCount[a] - elementCount[b],
  )

  const elementsCount: Record<string, number> = {
    목: elementCount.목,
    화: elementCount.화,
    토: elementCount.토,
    금: elementCount.금,
    수: elementCount.수,
  }
  const dayMasterStem = dayPillar.stem
  const blood = input.bloodType || 'unknown'
  const zodiacKo = input.zodiac || getZodiacSign(input.birthDate, input.calendarType).ko

  const stems = [yearPillar.stem, monthPillar.stem, dayPillar.stem]
  const branches = [yearPillar.branch, monthPillar.branch, dayPillar.branch]
  if (!('unknown' in hourPillar)) {
    stems.push(hourPillar.stem)
    branches.push(hourPillar.branch)
  }

  const estimatedMBTI = estimateMBTI(
    elementsCount,
    dayMasterStem,
    blood,
    zodiacKo,
    { stems, branches },
    input.mbtiSelfEI,
    input.mbtiSelfTF
  )

  return {
    adjustedBirthDate: `${solar.getYear()}-${pad(solar.getMonth())}-${pad(solar.getDay())}`,
    calendarAssumptionNote: (input.calendarType === 'lunar' || input.calendarType === 'lunar-leap') ? `음력(${input.calendarType === 'lunar-leap' ? '윤달' : '평달'})은 양력으로 변환 후 계산되었습니다.` : undefined,
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar,
    fiveElements,
    yongsinSuggestion: sortedElements[0],
    gisinSuggestion: sortedElements[sortedElements.length - 1],
    estimatedMBTI,
  }
}

type YinYang = '양' | '음'
type ElementType = '목' | '화' | '토' | '금' | '수'

interface ElementInfo {
  element: ElementType
  polarity: YinYang
}

const STEM_DETAILS: Record<string, ElementInfo> = {
  '갑': { element: '목', polarity: '양' },
  '을': { element: '목', polarity: '음' },
  '병': { element: '화', polarity: '양' },
  '정': { element: '화', polarity: '음' },
  '무': { element: '토', polarity: '양' },
  '기': { element: '토', polarity: '음' },
  '경': { element: '금', polarity: '양' },
  '신': { element: '금', polarity: '음' },
  '임': { element: '수', polarity: '양' },
  '계': { element: '수', polarity: '음' },
}

const BRANCH_DETAILS: Record<string, ElementInfo> = {
  '자': { element: '수', polarity: '음' },
  '축': { element: '토', polarity: '음' },
  '인': { element: '목', polarity: '양' },
  '묘': { element: '목', polarity: '음' },
  '진': { element: '토', polarity: '양' },
  '사': { element: '화', polarity: '양' },
  '오': { element: '화', polarity: '음' },
  '미': { element: '토', polarity: '음' },
  '신': { element: '금', polarity: '양' },
  '유': { element: '금', polarity: '음' },
  '술': { element: '토', polarity: '양' },
  '해': { element: '수', polarity: '양' },
}

type ShiShen = '비견' | '겁재' | '식신' | '상관' | '편재' | '정재' | '편관' | '정관' | '편인' | '정인'

const ELEMENT_RELATIONS: Record<ElementType, { 生: ElementType; 剋: ElementType }> = {
  '목': { 生: '화', 剋: '토' },
  '화': { 生: '토', 剋: '금' },
  '토': { 生: '금', 剋: '수' },
  '금': { 生: '수', 剋: '목' },
  '수': { 生: '목', 剋: '화' },
}

function getShiShen(dayMaster: ElementInfo, target: ElementInfo): ShiShen {
  const dmEl = dayMaster.element
  const dmPol = dayMaster.polarity
  const tgEl = target.element
  const tgPol = target.polarity

  const samePolarity = dmPol === tgPol

  if (dmEl === tgEl) {
    return samePolarity ? '비견' : '겁재'
  }
  if (ELEMENT_RELATIONS[dmEl].生 === tgEl) {
    return samePolarity ? '식신' : '상관'
  }
  if (ELEMENT_RELATIONS[dmEl].剋 === tgEl) {
    return samePolarity ? '편재' : '정재'
  }
  if (ELEMENT_RELATIONS[tgEl].剋 === dmEl) {
    return samePolarity ? '편관' : '정관'
  }
  if (ELEMENT_RELATIONS[tgEl].生 === dmEl) {
    return samePolarity ? '편인' : '정인'
  }
  return '비견'
}

export function estimateMBTI(
  fiveElements: Record<string, number>,
  dayMasterStem: string,
  bloodType: string,
  zodiac: string,
  sajuStemsAndBranches: { stems: string[]; branches: string[] },
  mbtiSelfEI?: string | null,
  mbtiSelfTF?: string | null
): string {
  let eScore = 0
  let sScore = 0
  let tScore = 0
  let jScore = 0

  const wood = fiveElements['목'] || 0
  const fire = fiveElements['화'] || 0
  const earth = fiveElements['토'] || 0
  const metal = fiveElements['금'] || 0
  const water = fiveElements['수'] || 0

  // 1. 오행 기본 점수 (오행 고유의 성정 배정)
  eScore += (wood * 1.0) + (fire * 1.5) - (earth * 0.5) - (metal * 1.5) - (water * 0.5)
  sScore += (earth * 1.5) + (metal * 1.0) - (wood * 0.5) - (water * 1.5) - (fire * 0.5)
  tScore += (metal * 1.5) + (water * 0.5) - (wood * 0.5) - (fire * 1.5)
  jScore += (earth * 1.5) + (metal * 1.5) - (wood * 0.5) - (water * 1.5) - (fire * 0.5)

  // 2. 일간(Day Master) 가중치 보정
  if (['갑', '을'].includes(dayMasterStem)) {
    eScore += 1
    tScore -= 1
  } else if (['병', '정'].includes(dayMasterStem)) {
    eScore += 2
    tScore -= 2
  } else if (dayMasterStem === '무') {
    sScore += 1
    tScore += 1
  } else if (dayMasterStem === '기') {
    sScore += 1
    tScore -= 1
  } else if (['경', '신'].includes(dayMasterStem)) {
    eScore -= 2
    tScore += 2
    jScore += 1
  } else if (['임', '계'].includes(dayMasterStem)) {
    eScore -= 1
    tScore += 1
    jScore -= 1
  }

  // 3. 십성(十星) 계산 및 가중치 합산 (정밀 보정)
  const dmInfo = STEM_DETAILS[dayMasterStem]
  if (dmInfo) {
    const shishenCounts: Record<ShiShen, number> = {
      '비견': 0, '겁재': 0, '식신': 0, '상관': 0, '편재': 0,
      '정재': 0, '편관': 0, '정관': 0, '편인': 0, '정인': 0
    }

    // 천간 십성 계산 (일간 자신은 제외)
    sajuStemsAndBranches.stems.forEach((stem, idx) => {
      // 일간(3번째 글자, index 2)은 제외
      if (idx === 2) return
      const targetInfo = STEM_DETAILS[stem]
      if (targetInfo) {
        shishenCounts[getShiShen(dmInfo, targetInfo)] += 1
      }
    })

    // 지지 십성 계산
    sajuStemsAndBranches.branches.forEach((branch) => {
      const targetInfo = BRANCH_DETAILS[branch]
      if (targetInfo) {
        shishenCounts[getShiShen(dmInfo, targetInfo)] += 1
      }
    })

    // 십성별 MBTI 성향 가중치 결합
    // 비겁 (비견/겁재): 주체성, 강한 자아
    const bigeob = shishenCounts['비견'] + shishenCounts['겁재']
    eScore += bigeob * 1.5
    tScore += bigeob * 0.8

    // 식상 (식신/상관): 표현력, 자유로움, 예술성
    const sikshang = shishenCounts['식신'] + shishenCounts['상관']
    eScore += sikshang * 1.8
    sScore -= sikshang * 1.2 // N 성향
    jScore -= sikshang * 2.2 // P 성향

    // 재성 (편재/정재): 현실 감각, 실리성, 계획
    const jaeseong = shishenCounts['편재'] + shishenCounts['정재']
    sScore += jaeseong * 2.0
    jScore += jaeseong * 1.2

    // 관성 (편관/정관): 조직 규율, 통제, 책임감
    const gwanseong = shishenCounts['편관'] + shishenCounts['정관']
    tScore += gwanseong * 1.5
    jScore += gwanseong * 2.2

    // 인성 (편인/정인): 깊은 생각, 직관, 수용성
    const inseong = shishenCounts['편인'] + shishenCounts['정인']
    eScore -= inseong * 2.2 // I 성향
    sScore -= inseong * 1.8 // N 성향
    tScore -= shishenCounts['정인'] * 1.5 // 정인은 타인 공감 F 유도
    tScore += shishenCounts['편인'] * 0.5 // 편인은 의심/비판적 사고 T 유도
  }

  // 4. 혈액형 가중치 보정
  const bloodNormalized = bloodType.toUpperCase()
  if (bloodNormalized === 'O' || bloodNormalized === 'AB') eScore += 1.0
  if (bloodNormalized === 'A') jScore += 1.2
  if (bloodNormalized === 'B') jScore -= 1.2

  // 5. 별자리 가중치 보정
  const z = zodiac.replace('자리', '')
  if (['황소', '처녀', '염소'].includes(z)) {
    sScore += 1.0
    jScore += 1.0
  } else if (['양', '사자', '사수'].includes(z)) {
    eScore += 1.0
    tScore += 1.0
  } else if (['쌍둥이', '천칭', '물병'].includes(z)) {
    sScore -= 1.0
    jScore -= 1.0
  } else if (['게', '전갈', '물고기'].includes(z)) {
    eScore -= 1.0
    tScore -= 1.0
  }

  // 6. MBTI 자가진단(선택 질문) 보정 가중치 추가
  if (mbtiSelfEI === 'E') eScore += 5.0
  if (mbtiSelfEI === 'I') eScore -= 5.0
  if (mbtiSelfTF === 'T') tScore += 5.0
  if (mbtiSelfTF === 'F') tScore -= 5.0

  const E_I = eScore >= 0 ? 'E' : 'I'
  const S_N = sScore >= 0 ? 'S' : 'N'
  const T_F = tScore >= 0 ? 'T' : 'F'
  const J_P = jScore >= 0 ? 'J' : 'P'

  return E_I + S_N + T_F + J_P
}

export function getSexagenaryYear(year: number) {
  const lunar = Lunar.fromYmd(year, 1, 1)
  return lunar.getYearInGanZhi()
}



// Update mapping to handle the full name returned by getXingZuo() which usually includes '座'
const ZODIAC_FULL_MAP: Record<string, { en: string; ko: string }> = {
  '白羊座': { en: 'Aries', ko: '양자리' },
  '金牛座': { en: 'Taurus', ko: '황소자리' },
  '双子座': { en: 'Gemini', ko: '쌍둥이자리' },
  '巨蟹座': { en: 'Cancer', ko: '게자리' },
  '狮子座': { en: 'Leo', ko: '사자자리' },
  '处女座': { en: 'Virgo', ko: '처녀자리' },
  '天秤座': { en: 'Libra', ko: '천칭자리' },
  '天蝎座': { en: 'Scorpio', ko: '전갈자리' },
  '射手座': { en: 'Sagittarius', ko: '사수자리' },
  '摩羯座': { en: 'Capricorn', ko: '염소자리' },
  '水瓶座': { en: 'Aquarius', ko: '물병자리' },
  '双鱼座': { en: 'Pisces', ko: '물고기자리' },
}

export function getZodiacSign(birthDate: string, calendarType: CalendarType = 'solar'): { en: string; ko: string } {
  const parts = birthDate.split('-').map(Number)
  if (parts.length !== 3) return { en: 'Unknown', ko: '미상' }
  
  let solar: Solar
  if (calendarType === 'lunar' || calendarType === 'lunar-leap') {
    const isLeap = calendarType === 'lunar-leap'
    const monthVal = isLeap ? -parts[1] : parts[1]
    try {
      const lunar = Lunar.fromYmd(parts[0], monthVal, parts[2])
      solar = lunar.getSolar()
    } catch {
      solar = Solar.fromYmd(parts[0], parts[1], parts[2])
    }
  } else {
    solar = Solar.fromYmd(parts[0], parts[1], parts[2])
  }
  
  const xingZuo = solar.getXingZuo()
  return ZODIAC_FULL_MAP[xingZuo] || { en: xingZuo, ko: xingZuo }
}
