import { useEffect, useMemo, useState, useRef } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import html2canvas from 'html2canvas'
import Layout from '../components/Layout'
import AdSense from '../components/AdSense'
import '../styles/saju-page.css'

type BloodType = 'A' | 'B' | 'O' | 'AB' | 'unknown'
type ZodiacSign = string


type ElementKey = '목' | '화' | '토' | '금' | '수'

type HideGanItem = { hanja: string; hangul: string; element: ElementKey }

type PillarValue = {
  stem: string
  stemHanja: string
  stemElement: ElementKey
  branch: string
  branchHanja: string
  branchElement: ElementKey
  symbol: string
  hideGan: HideGanItem[]
}

type FourPillars = {
  year: PillarValue
  month: PillarValue
  day: PillarValue
  hour: PillarValue | { unknown: true; label: string }
}

type ReportResponse = {
  reportMarkdown?: string
  meta?: {
    fourPillars?: FourPillars
    fiveElements?: Record<string, { count?: number; strength?: string }>
    generatedAt?: string
  }
  error?: string
  detail?: string
}

const STORAGE_KEY = 'sajuReport:last'
type FiveElementsMeta = Record<ElementKey, { count: number; strength: string }>

/**
 * Calculates Western Zodiac sign based on month and day
 */
const getZodiacSign = (month: number, day: number, lang: string): string => {
  const isKo = lang === 'ko';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return isKo ? "물병자리" : "Aquarius"; // 물병자리
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return isKo ? "물고기자리" : "Pisces";   // 물고기자리
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return isKo ? "양자리" : "Aries";    // 양자리
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return isKo ? "황소자리" : "Taurus";   // 황소자리
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return isKo ? "쌍둥이자리" : "Gemini";   // 쌍둥이자리
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return isKo ? "게자리" : "Cancer";   // 게자리
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return isKo ? "사자자리" : "Leo";      // 사자자리
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return isKo ? "처녀자리" : "Virgo";    // 처녀자리
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return isKo ? "천칭자리" : "Libra";   // 천칭자리
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return isKo ? "전갈자리" : "Scorpio"; // 전갈자리
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return isKo ? "사수자리" : "Sagittarius"; // 사수자리
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return isKo ? "염소자리" : "Capricorn"; // 염소자리
  return isKo ? "염소자리" : "Capricorn"; 
}

function normalizeFiveElements(
  raw: Record<string, { count?: number; strength?: string }> | undefined,
): FiveElementsMeta | null {
  if (!raw) return null
  const keys: ElementKey[] = ['목', '화', '토', '금', '수']
  const result = {} as FiveElementsMeta
  for (const key of keys) {
    const item = raw[key]
    if (!item || typeof item.count !== 'number' || typeof item.strength !== 'string') {
      return null
    }
    result[key] = { count: item.count, strength: item.strength }
  }
  return result
}

const getElementClass = (element: string) => {
  switch (element) {
    case '목': return 'wood'
    case '화': return 'fire'
    case '토': return 'earth'
    case '금': return 'metal'
    case '수': return 'water'
    default: return ''
  }
}

function HanjaSpan({ hanja, element }: { hanja: string; element: string }) {
  const colorClass = getElementClass(element)
  return <span className={`hanja-styled ${colorClass}`}>{hanja}</span>
}

function SajuWongukTable({ fourPillars, lang }: { fourPillars: FourPillars; lang: 'ko' | 'en' }) {
  const pillars = [
    { label: lang === 'ko' ? '시주' : 'Hour', value: fourPillars.hour },
    { label: lang === 'ko' ? '일주' : 'Day', value: fourPillars.day },
    { label: lang === 'ko' ? '월주' : 'Month', value: fourPillars.month },
    { label: lang === 'ko' ? '년주' : 'Year', value: fourPillars.year },
  ]

  return (
    <div className="saju-wonguk-container">
      <h3>{lang === 'ko' ? '1. 사주원국 (四柱元局)' : '1. Four Pillars Grid'}</h3>
      <table className="saju-wonguk-table">
        <thead>
          <tr>
            {pillars.map((p) => (
              <th key={p.label}>{p.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {pillars.map((p, i) => {
              if ('unknown' in p.value) {
                return <td key={i} rowSpan={2} className="unknown-cell">{p.value.label}</td>
              }
              return (
                <td key={i} className={`bg-${getElementClass(p.value.stemElement)}`}>
                  <div className="saju-wonguk-cell">
                    <span className="saju-hanja">{p.value.stemHanja}</span>
                    <span className="saju-hangul">{p.value.stem}</span>
                  </div>
                </td>
              )
            })}
          </tr>
          <tr>
            {pillars.map((p, i) => {
              if ('unknown' in p.value) return null
              return (
                <td key={i} className={`bg-${getElementClass(p.value.branchElement)}`}>
                  <div className="saju-wonguk-cell">
                    <span className="saju-hanja">{p.value.branchHanja}</span>
                    <span className="saju-hangul">{p.value.branch}</span>
                  </div>
                </td>
              )
            })}
          </tr>
          <tr>
            {pillars.map((p, i) => {
              if ('unknown' in p.value) return <td key={i} className="unknown-cell">-</td>
              return (
                <td key={i}>
                  <div className="saju-hide-gan-list">
                    {p.value.hideGan.map((hg, idx) => (
                      <HanjaSpan key={idx} hanja={hg.hanja} element={hg.element} />
                    ))}
                  </div>
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function SajuInfo({ lang }: { lang: 'ko' | 'en' }) {
  if (lang === 'ko') {
    return (
      <section className="saju-info-section">
        <div className="info-card">
          <h3>☯️ 사주팔자란 무엇인가요?</h3>
          <p>
            사주(四柱)는 사람이 태어난 년, 월, 일, 시의 네 기둥을 말하며, 각 기둥은 천간과 지지 두 글자로 이루어져 총 8글자가 됩니다. 이를 '사주팔자'라고 부릅니다. 
            음양오행의 원리를 통해 타고난 기운과 성격, 운의 흐름을 분석하는 전통 동양 철학입니다.
          </p>
        </div>
        <div className="info-card">
          <h3>✨ Fately AI의 분석 방식</h3>
          <p>
            Fately는 정통 명리학 알고리즘을 사용하여 당신의 사주 원국을 정확히 도출합니다. 
            그 후, 최신 AI 기술이 오행의 강약, 십신의 조화, 그리고 현대적인 관점에서의 성격과 적성을 종합적으로 해석하여 리포트를 생성합니다.
          </p>
        </div>
        <div className="info-card">
          <h3>🛡️ 개인정보 보호</h3>
          <p>
            입력하신 생년월일과 정보는 리포트 생성을 위해서만 사용되며, 별도의 서버에 저장되지 않습니다. 
            익명성을 보장하며 안전하게 서비스를 이용하실 수 있습니다.
          </p>
        </div>
      </section>
    )
  }
  return (
    <section className="saju-info-section">
      <div className="info-card">
        <h3>☯️ What is Saju?</h3>
        <p>
          Saju (Four Pillars of Destiny) is a traditional East Asian philosophical system that analyzes a person's destiny based on the year, month, day, and time of their birth. 
          By examining the balance of Yin-Yang and the Five Elements, it provides insights into one's personality and life path.
        </p>
      </div>
      <div className="info-card">
        <h3>✨ How Fately AI Works</h3>
        <p>
          Fately combines authentic Saju algorithms with advanced AI to deliver personalized reports. 
          We calculate your Four Pillars precisely and use AI to interpret complex patterns into easy-to-understand modern language.
        </p>
      </div>
    </section>
  )
}

export default function SajuPage() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko')
  const [clientName, setClientName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [birthTime, setBirthTime] = useState('11:20')
  const [timeUnknown, setTimeUnknown] = useState(false)
  const [calendarType, setCalendarType] = useState<'solar' | 'lunar'>('solar')
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male')
  const [timezone] = useState('Asia/Seoul')
  const [notes, setNotes] = useState('')
  const [bloodType, setBloodType] = useState<BloodType>('unknown')
  const [zodiacSign, setZodiacSign] = useState<ZodiacSign>('auto')
  const [hobby, setHobby] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [reportMarkdown, setReportMarkdown] = useState('')
  const [fiveElements, setFiveElements] = useState<FiveElementsMeta | null>(null)
  const [fourPillars, setFourPillars] = useState<FourPillars | null>(null)
  
  const [copied, setCopied] = useState(false)
  const [isCapturing, setIsCapturing] = useState(false)

  // Split Date/Time States
  const [birthYear, setBirthYear] = useState('1995')
  const [birthMonth, setBirthMonth] = useState('05')
  const [birthDay, setBirthDay] = useState('05')
  const [birthHourBranch, setBirthHourBranch] = useState<string>('오') // Default mid-day

  const years = useMemo(() => Array.from({ length: 121 }, (_, i) => String(2026 - i)), [])
  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')), [])
  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0')), [])
  const branches = useMemo(() => ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'], [])
  
  const branchTimeMap: Record<string, string> = {
    '자': '00:00', '축': '02:00', '인': '04:00', '묘': '06:00', '진': '08:00', '사': '10:00',
    '오': '12:00', '미': '14:00', '신': '16:00', '유': '18:00', '술': '20:00', '해': '22:00'
  }

  const branchIntervalMap: Record<string, string> = {
    '자': '23:30 ~ 01:29', '축': '01:30 ~ 03:29', '인': '03:30 ~ 05:29', '묘': '05:30 ~ 07:29',
    '진': '07:30 ~ 09:29', '사': '09:30 ~ 11:29', '오': '11:30 ~ 13:29', '미': '13:30 ~ 15:29',
    '신': '15:30 ~ 17:29', '유': '17:30 ~ 19:29', '술': '19:30 ~ 21:29', '해': '21:30 ~ 23:29'
  }

  useEffect(() => {
    setBirthDate(`${birthYear}-${birthMonth}-${birthDay}`)
  }, [birthYear, birthMonth, birthDay])

  useEffect(() => {
    setBirthTime(branchTimeMap[birthHourBranch] || '12:00')
  }, [birthHourBranch])

  // Auto-calculate Zodiac sign when month or day changes
  useEffect(() => {
    const month = parseInt(birthMonth);
    const day = parseInt(birthDay);
    if (!isNaN(month) && !isNaN(day)) {
      setZodiacSign(getZodiacSign(month, day, lang));
    }
  }, [birthMonth, birthDay, lang]);

  const reportRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cached = localStorage.getItem(STORAGE_KEY)
    if (!cached) return
    try {
      const parsed = JSON.parse(cached) as {
        reportMarkdown?: string
        fiveElements?: Record<string, { count?: number; strength?: string }>
        fourPillars?: FourPillars
      }
      if (parsed.reportMarkdown) {
        setReportMarkdown(parsed.reportMarkdown)
      }
      setFiveElements(normalizeFiveElements(parsed.fiveElements))
      if (parsed.fourPillars) {
        setFourPillars(parsed.fourPillars)
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  const birthTimeValue = useMemo(() => (timeUnknown ? null : birthTime), [timeUnknown, birthTime])

  const renderedMarkdown = useMemo(() => {
    if (!reportMarkdown) return ''
    const html = marked.parse(reportMarkdown) as string
    return DOMPurify.sanitize(html)
  }, [reportMarkdown])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')
    setCopied(false)

    try {
      const response = await fetch('/api/saju-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lang,
          clientName,
          birthDate,
          birthTime: birthTimeValue,
          timeUnknown,
          calendarType,
          gender,
          timezone,
          notes,
          bloodType,
          zodiacSign,
          hobby,
        }),
      })

      const raw = await response.text()
      let data: ReportResponse = {}
      if (raw) {
        try {
          data = JSON.parse(raw) as ReportResponse
        } catch {
          data = { error: raw.slice(0, 400) }
        }
      }

      if (!response.ok || !data.reportMarkdown) {
        throw new Error(
          data.error ||
            data.detail ||
            `리포트 생성에 실패했습니다. (status: ${response.status})`,
        )
      }

      setReportMarkdown(data.reportMarkdown)
      const normalizedFiveElements = normalizeFiveElements(data.meta?.fiveElements)
      setFiveElements(normalizedFiveElements)
      if (data.meta?.fourPillars) {
        setFourPillars(data.meta.fourPillars)
      }
      
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          reportMarkdown: data.reportMarkdown,
          fiveElements: normalizedFiveElements,
          fourPillars: data.meta?.fourPillars,
          savedAt: new Date().toISOString(),
        }),
      )
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : '요청 실패')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!reportMarkdown) return
    await navigator.clipboard.writeText(reportMarkdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  const handleDownloadImage = async () => {
    if (!reportRef.current || !reportMarkdown) return
    setIsCapturing(true)
    try {
      const canvas = await html2canvas(reportRef.current, {
        backgroundColor: '#f2e7d2',
        scale: 2,
        useCORS: true,
        logging: false,
        ignoreElements: (element) => {
          return (
            element.tagName === 'IFRAME' || 
            element.tagName === 'INS' || 
            element.classList.contains('adsbygoogle')
          )
        },
        onclone: (clonedDoc) => {
          const el = clonedDoc.querySelector('.report-panel') as HTMLElement
          if (el) {
            el.style.padding = '40px'
            el.style.borderRadius = '0'
          }
        },
      })
      const image = canvas.toDataURL('image/png')
      const res = await fetch(image)
      const blob = await res.blob()

      try {
        if ('showSaveFilePicker' in window) {
          const handle = await (window as any).showSaveFilePicker({
            suggestedName: `fately-saju-${clientName || 'result'}.png`,
            types: [{
              description: 'PNG Image',
              accept: { 'image/png': ['.png'] },
            }],
          });
          const writable = await handle.createWritable();
          await writable.write(blob);
          await writable.close();
          return;
        }
      } catch (e: any) {
        if (e.name === 'AbortError') return;
        console.warn('File System Access API failed, falling back...', e);
      }

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `fately-saju-${clientName || 'result'}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => URL.revokeObjectURL(url), 10000)
    } catch (err) {
      console.error('Capture failed:', err)
      setError(lang === 'ko' ? '이미지 생성 중 오류가 발생했습니다.' : 'Error generating image.')
    } finally {
      setIsCapturing(false)
    }
  }

  return (
    <Layout>
      <div className="saju-page">
        <main className="saju-wrap">
          <section className="saju-hero">
            <div className="hero-image-container">
              <img 
                src="/oh_saju_branding.png" 
                alt="오선생님의 사주해석 브랜드 이미지" 
                className="hero-branding-img"
              />
            </div>
            <h1 className="saju-title">오선생님의 사주해석</h1>
            <p className="saju-subtitle">명리학 기반으로 사주를 분석하고, 혈액형·별자리 성향을 종합하여 MBTI를 추정합니다.</p>
            
            <div className="lang-toggle" role="group" aria-label="Language" style={{ marginTop: '24px' }}>
              <button
                type="button"
                className={lang === 'ko' ? 'active' : ''}
                onClick={() => setLang('ko')}
              >
                한국어
              </button>
              <button
                type="button"
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
              >
                English
              </button>
            </div>
          </section>

          <div className={`saju-main-grid ${!reportMarkdown ? 'centered' : ''}`}>
            <div className="grid-left">
              {error ? <p className="error" style={{marginBottom: '16px'}}>{error}</p> : null}
              <section className="saju-card">
                <form className="saju-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="full">
                      <span>{lang === 'ko' ? '이름' : 'Name'}</span>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(event) => setClientName(event.target.value)}
                        placeholder={lang === 'ko' ? "예: 김민준" : "e.g. John Doe"}
                        required
                      />
                    </label>

                    <div className="input-row">
                      <label>
                        <span>{lang === 'ko' ? '성별' : 'Gender'}</span>
                        <select
                          value={gender}
                          onChange={(event) => setGender(event.target.value as 'male' | 'female' | 'other')}
                        >
                          <option value="male">{lang === 'ko' ? '남성' : 'Male'}</option>
                          <option value="female">{lang === 'ko' ? '여성' : 'Female'}</option>
                          <option value="other">{lang === 'ko' ? '기타' : 'Other'}</option>
                        </select>
                      </label>
                      <label>
                        <span>{lang === 'ko' ? '달력' : 'Calendar'}</span>
                        <select
                          value={calendarType}
                          onChange={(event) => setCalendarType(event.target.value as 'solar' | 'lunar')}
                        >
                          <option value="solar">{lang === 'ko' ? '양력' : 'Solar'}</option>
                          <option value="lunar">{lang === 'ko' ? '음력' : 'Lunar'}</option>
                        </select>
                      </label>
                    </div>

                    <div className="birth-split-container">
                      <span className="label-text">{lang === 'ko' ? '생년월일' : 'Birth Date'}</span>
                      <div className="split-inputs">
                        <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
                          {years.map(y => <option key={y} value={y}>{y}{lang === 'ko' ? '년' : ''}</option>)}
                        </select>
                        <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
                          {months.map(m => <option key={m} value={m}>{m}{lang === 'ko' ? '월' : ''}</option>)}
                        </select>
                        <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
                          {days.map(d => <option key={d} value={d}>{d}{lang === 'ko' ? '일' : ''}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="input-row">
                      <div className="birth-split-container">
                        <span className="label-text">{lang === 'ko' ? '출생시간' : 'Birth Time'}</span>
                        <div className="split-inputs time-inputs">
                          <select value={birthHourBranch} onChange={(e) => setBirthHourBranch(e.target.value)} disabled={timeUnknown}>
                            {branches.map(b => (
                              <option key={b} value={b}>
                                {b}시 ({branchIntervalMap[b]})
                              </option>
                            ))}
                          </select>
                          <label className="checkbox-line compact">
                            <input
                              type="checkbox"
                              checked={timeUnknown}
                              onChange={(event) => setTimeUnknown(event.target.checked)}
                            />
                            <span>{lang === 'ko' ? '모름' : 'N/A'}</span>
                          </label>
                        </div>
                      </div>
                      <label>
                        <span>{lang === 'ko' ? '혈액형' : 'Blood Type'}</span>
                        <select
                          value={bloodType}
                          onChange={(event) => setBloodType(event.target.value as BloodType)}
                        >
                          <option value="unknown">{lang === 'ko' ? '모름' : 'Unknown'}</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="O">O</option>
                          <option value="AB">AB</option>
                        </select>
                      </label>
                    </div>

                    <div className="input-row">
                      <label>
                        <span>{lang === 'ko' ? '별자리(자동)' : 'Zodiac (Auto)'}</span>
                        <input
                          type="text"
                          value={zodiacSign}
                          readOnly
                          className="read-only-input"
                          style={{ background: 'rgba(0,0,0,0.05)', cursor: 'not-allowed' }}
                        />
                      </label>
                      <label>
                        <span>{lang === 'ko' ? '취미' : 'Hobby'}</span>
                        <input
                          type="text"
                          value={hobby}
                          onChange={(event) => setHobby(event.target.value)}
                          placeholder={lang === 'ko' ? "예: 골프, 테니스" : "e.g. Golf"}
                        />
                      </label>
                    </div>

                    <label className="full">
                      <span>{lang === 'ko' ? '추가 질문' : 'Additional Questions'}</span>
                      <input
                        type="text"
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        placeholder={lang === 'ko' ? "예: 2026년 이직운" : "e.g. Career in 2026"}
                      />
                    </label>

                    <div className="actions">
                      <button type="submit" disabled={isLoading} className={isLoading ? 'loading' : 'btn-primary'}>
                        {isLoading ? (lang === 'ko' ? '🔄 생성 중...' : '🔄 Generating...') : (lang === 'ko' ? '✨ 분석 보고서 생성' : '✨ Generate Report')}
                      </button>
                      <div className="sub-actions">
                        <button type="button" className="ghost" onClick={handleDownloadImage} disabled={!reportMarkdown || isCapturing}>
                          {isCapturing ? '📸' : '🖼️ 이미지'}
                        </button>
                        <button type="button" className="ghost" onClick={handleCopy} disabled={!reportMarkdown}>
                          {copied ? '✅' : '📋 복사'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>

              <SajuInfo lang={lang} />
            </div>

            <div className="grid-right">

              <section className="report-panel" ref={reportRef}>
                <h2>{lang === 'ko' ? '사주 분석 리포트' : 'Analysis Report'}</h2>
            
                {reportMarkdown && <AdSense client="ca-pub-8118093904469504" slot="1122334455" />}

                <div className="report-content">
                  {fourPillars ? <SajuWongukTable fourPillars={fourPillars} lang={lang} /> : null}

              {fiveElements ? (
                <div className="elements-bar" aria-label="오행 분포 색상 요약">
                  {(
                    [
                      ['목', 'wood'],
                      ['화', 'fire'],
                      ['토', 'earth'],
                      ['금', 'metal'],
                      ['수', 'water'],
                    ] as Array<[ElementKey, string]>
                  ).map(([key, klass]) => (
                    <div key={key} className={`element-chip ${klass}`}>
                      <strong>{key}</strong>
                      <span>
                        {fiveElements[key].count} / {fiveElements[key].strength}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}

              {renderedMarkdown ? (
                <div 
                  className="markdown-body" 
                  dangerouslySetInnerHTML={{ __html: renderedMarkdown }} 
                />
              ) : (
                <div className="no-report-placeholder">
                  <p>{lang === 'ko' ? '위의 양식을 작성하고 리포트 생성 버튼을 눌러주세요.' : 'Fill out the form above and click Generate Report.'}</p>
                </div>
              )}
            </div>
          </section>
          
              {reportMarkdown && <AdSense client="ca-pub-8118093904469504" slot="5544332211" />}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
