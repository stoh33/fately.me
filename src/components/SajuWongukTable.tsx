import type { FourPillars } from '../types/saju';

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

interface SajuWongukTableProps {
  fourPillars: FourPillars;
  lang: 'ko' | 'en';
}

export default function SajuWongukTable({ fourPillars, lang }: SajuWongukTableProps) {
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
                return <td key={i} rowSpan={2} className="unknown-cell">{lang === 'ko' ? p.value.label : 'Unknown'}</td>
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
