import type { ReactNode } from 'react';

export interface CharacterItem {
  name: string;
  subName: string;
  themeColor: string;
  bgColor: string;
  description: string;
  keywords: string[];
  icon: ReactNode;
}

export const sajuCharacters: Record<string, CharacterItem> = {
  '갑': {
    name: '갑목 (甲木)',
    subName: '곧게 뻗은 푸른 소나무',
    themeColor: '#2b8a3e',
    bgColor: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    keywords: ['리더십', '우직함', '독립심', '추진력'],
    description: '어려움 속에서도 꺾이지 않고 하늘을 향해 곧게 자라나는 낙락장송과 같은 우직함을 가졌습니다. 명예를 중시하고 리더십이 뛰어나며 늘 시작을 주도하는 힘이 돋보입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-gab" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-gab)" opacity="0.15" />
        <path d="M50 15 L70 50 L58 50 L75 75 L25 75 L42 50 L30 50 Z" fill="url(#grad-gab)" />
        <rect x="47" y="75" width="6" height="15" fill="#78350f" />
        <circle cx="50" cy="15" r="3" fill="#fbbf24" />
      </svg>
    )
  },
  '을': {
    name: '을목 (乙木)',
    subName: '생명력 넘치는 푸른 넝쿨',
    themeColor: '#40c057',
    bgColor: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
    keywords: ['유연성', '생활력', '친화력', '적응력'],
    description: '모진 비바람에도 부러지지 않고 유연하게 흔들리며 담장을 타고 올라가는 담쟁이덩굴처럼 강인한 생명력을 품고 있습니다. 친화력이 뛰어나며 실리를 잘 챙기는 지혜가 있습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-eul" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-eul)" opacity="0.15" />
        <path d="M50 85 C40 70, 30 65, 35 50 C40 35, 60 40, 50 25 C45 18, 55 10, 60 22 C65 35, 45 40, 52 55 C58 70, 60 75, 50 85 Z" fill="none" stroke="url(#grad-eul)" strokeWidth="4" />
        <path d="M35 50 Q30 45 25 52 Q30 58 35 50 Z" fill="url(#grad-eul)" />
        <path d="M50 25 Q58 20 62 28 Q52 32 50 25 Z" fill="url(#grad-eul)" />
        <path d="M52 55 Q60 52 65 60 Q55 65 52 55 Z" fill="url(#grad-eul)" />
      </svg>
    )
  },
  '병': {
    name: '병화 (丙火)',
    subName: '세상을 비추는 정열의 태양',
    themeColor: '#fa5252',
    bgColor: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
    keywords: ['정직함', '열정', '표현력', '화끈함'],
    description: '하늘에 떠서 대지를 골고루 비추는 태양처럼 정직하고 솔직한 기운입니다. 숨김없이 화끈하게 나를 표현하며, 만인을 이끌어 활기를 불어넣는 긍정적인 파워가 가득합니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-byeong" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-byeong)" opacity="0.15" />
        <circle cx="50" cy="50" r="20" fill="url(#grad-byeong)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <path
            key={angle}
            d="M50 18 L46 28 L54 28 Z"
            fill="url(#grad-byeong)"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </svg>
    )
  },
  '정': {
    name: '정화 (丁火)',
    subName: '어둠을 밝히는 은은한 촛불',
    themeColor: '#e03131',
    bgColor: 'linear-gradient(135deg, #f87171 0%, #b91c1c 100%)',
    keywords: ['따뜻함', '세심함', '예술성', '은근한 고집'],
    description: '어두운 길을 밝혀주는 촛불이나 추위를 녹여주는 따뜻한 모닥불의 기운입니다. 겉으론 조용하고 예의 바르지만, 내면에 누구보다 뜨거운 창의성과 예술적인 열망을 은근하게 지니고 있습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-jeong" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-jeong)" opacity="0.15" />
        <rect x="47" y="65" width="6" height="20" rx="3" fill="#cbd5e1" />
        <path d="M50 20 C42 40, 38 52, 42 62 C46 70, 54 70, 58 62 C62 52, 58 40, 50 20 Z" fill="url(#grad-jeong)" />
        <path d="M50 35 C46 45, 44 50, 46 56 C48 60, 52 60, 54 56 C56 50, 54 45, 50 35 Z" fill="#facc15" />
      </svg>
    )
  },
  '무': {
    name: '무토 (戊土)',
    subName: '믿음직하고 웅장한 황금 태산',
    themeColor: '#e8590c',
    bgColor: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
    keywords: ['신뢰감', '포용력', '중용', '묵직함'],
    description: '사소한 일에 동요하지 않고 넓고 묵직하게 자리를 지키는 거대한 산과 같습니다. 신용이 두텁고 대인관계의 갈등을 묵묵하게 조율하며, 만인을 넓은 가슴으로 품는 듬직한 중재자입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-mu" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-mu)" opacity="0.15" />
        <path d="M50 20 L85 80 L15 80 Z" fill="url(#grad-mu)" />
        <path d="M35 45 L60 80 L10 80 Z" fill="#a16207" opacity="0.7" />
        <circle cx="25" cy="30" r="5" fill="#fef08a" />
      </svg>
    )
  },
  '기': {
    name: '기토 (己土)',
    subName: '어머니처럼 비옥한 논밭',
    themeColor: '#f76707',
    bgColor: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
    keywords: ['자애로움', '교육과 육성', '현실감각', '내실'],
    description: '생명들이 싹을 틔우고 열매를 맺게 돕는 영양가 넘치는 농토와 같습니다. 모성애와 배려심이 강하고 현실적인 감각이 뛰어나며, 사람들을 교육하고 소중하게 길러내는 조력의 재능을 보입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-gi" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-gi)" opacity="0.15" />
        <ellipse cx="50" cy="70" rx="35" ry="12" fill="url(#grad-gi)" />
        <path d="M50 70 V40 C45 35 40 38 40 38 M50 55 C55 50 60 52 60 52" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
        <path d="M40 38 C38 30 45 30 50 40 Z" fill="#4ade80" />
        <path d="M60 52 C62 45 55 45 50 55 Z" fill="#4ade80" />
      </svg>
    )
  },
  '경': {
    name: '경금 (庚金)',
    subName: '의리 있고 단단한 은빛 원석',
    themeColor: '#495057',
    bgColor: 'linear-gradient(135deg, #94a3b8 0%, #475569 100%)',
    keywords: ['의리', '결단력', '정의감', '추진력'],
    description: '가공되지 않아 단단하고 굳건한 바위나 철광석의 굳센 기운을 지녔습니다. 불의를 참지 않는 정의감이 있고 의리를 목숨처럼 지키며, 한번 결단한 일은 거침없이 끌고 가는 뚝심이 있습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-gyeong" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-gyeong)" opacity="0.15" />
        <path d="M50 20 L80 40 L65 80 L35 80 L20 40 Z" fill="url(#grad-gyeong)" />
        <path d="M50 20 L35 80 L50 80 Z" fill="#1e293b" opacity="0.3" />
        <path d="M80 40 L50 80 L65 80 Z" fill="#ffffff" opacity="0.2" />
      </svg>
    )
  },
  '신': {
    name: '신금 (辛金)',
    subName: '예리하고 아름다운 은빛 보석',
    themeColor: '#7048e8',
    bgColor: 'linear-gradient(135deg, #a78bfa 0%, #6d28d9 100%)',
    keywords: ['완벽주의', '섬세함', '미적감각', '날카로움'],
    description: '뜨거운 불을 거치며 아름답게 다듬어진 보석이자 예리하게 벼려진 칼날의 기운입니다. 미적 감각이 매우 발달했으며, 깔끔하게 정리정돈된 완벽을 추구하고 칼같이 섬세하게 일 처리합니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-sin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ddd6fe" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-sin)" opacity="0.15" />
        <path d="M50 15 L75 40 L50 85 L25 40 Z" fill="url(#grad-sin)" />
        <path d="M50 15 L25 40 L50 40 Z" fill="#ffffff" opacity="0.4" />
        <path d="M50 40 L25 40 L50 85 Z" fill="#1e1b4b" opacity="0.3" />
        <line x1="50" y1="15" x2="50" y2="85" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  '임': {
    name: '임수 (壬水)',
    subName: '지혜를 품고 흐르는 깊은 바다',
    themeColor: '#1c7ed6',
    bgColor: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    keywords: ['지혜', '포용력', '유연성', '스케일'],
    description: '도도하게 굽이쳐 흘러 생명을 키우는 거대한 강과 바다와 같습니다. 생각이 깊고 통찰력과 지혜가 뛰어나며, 어디로든 유연하게 흘러 적응할 줄 아는 포용력을 품은 호걸 타입입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-im" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-im)" opacity="0.15" />
        <path d="M15 50 Q32.5 35 50 50 T85 50 L85 80 L15 80 Z" fill="url(#grad-im)" />
        <path d="M15 62 Q32.5 50 50 62 T85 62 L85 80 L15 80 Z" fill="#172554" opacity="0.5" />
        <circle cx="70" cy="28" r="6" fill="#fef08a" />
      </svg>
    )
  },
  '계': {
    name: '계수 (癸水)',
    subName: '영롱하게 피어나는 맑은 이슬',
    themeColor: '#22b8cf',
    bgColor: 'linear-gradient(135deg, #67e8f9 0%, #0369a1 100%)',
    keywords: ['센스', '직관력', '아이디어', '수용성'],
    description: '대지를 촉촉히 적셔 초목을 깨우는 영롱한 봄비나 맑은 아침 이슬의 기운을 담았습니다. 재치와 감각이 매우 발달했고, 상대방의 마음을 기민하게 포착하는 총명한 직관력의 소유자입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-gye" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-gye)" opacity="0.15" />
        <path d="M50 20 C62 45, 68 55, 68 68 C68 78, 60 85, 50 85 C40 85, 32 78, 32 68 C32 55, 38 45, 50 20 Z" fill="url(#grad-gye)" />
        <circle cx="43" cy="60" r="3" fill="#ffffff" opacity="0.7" />
        <path d="M35 30 L40 25 M65 30 L60 25 M50 15 L50 8" stroke="url(#grad-gye)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
};

export const mbtiCharacters: Record<string, CharacterItem> = {
  'INTJ': {
    name: 'INTJ',
    subName: '독립적인 지혜의 호랑이',
    themeColor: '#5c7cfa',
    bgColor: 'linear-gradient(135deg, #3b82f6 0%, #1e4ed8 100%)',
    keywords: ['전략가', '독립적', '완벽주의', '논리적'],
    description: '혼자 깊이 탐색하며 문제를 해결하는 고독한 호랑이입니다. 철저한 분석과 체계적인 계획으로 한 번 정한 목표는 끝까지 수행해 내는 카리스마를 갖추고 있습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#3b82f6" opacity="0.15" />
        {/* Tigers stripes and outline stylization */}
        <path d="M30 40 Q50 32 70 40 L75 60 Q50 78 25 60 Z" fill="#3b82f6" />
        <path d="M35 48 L45 52 L35 56 M65 48 L55 52 L65 56" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <polygon points="50,58 45,63 55,63" fill="#f43f5e" />
        <path d="M48 68 Q50 72 52 68" stroke="#ffffff" strokeWidth="2" fill="none" />
      </svg>
    )
  },
  'INTP': {
    name: 'INTP',
    subName: '사색하는 밤의 부엉이',
    themeColor: '#748ffc',
    bgColor: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    keywords: ['아이디어', '호기심', '논리주의', '비판적'],
    description: '어두운 밤 고요히 앉아 우주의 논리를 사색하는 부엉이입니다. 상상력이 매우 풍부하고 비논리적인 관습을 거부하며, 깊이 있는 이론 연구에 최적의 역량을 지닙니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#6366f1" opacity="0.15" />
        <path d="M50 25 C38 25, 32 35, 32 55 C32 70, 42 78, 50 78 C58 78, 68 70, 68 55 C68 35, 62 25, 50 25 Z" fill="#6366f1" />
        <circle cx="42" cy="48" r="8" fill="#ffffff" />
        <circle cx="58" cy="48" r="8" fill="#ffffff" />
        <circle cx="42" cy="48" r="3" fill="#1e1b4b" />
        <circle cx="58" cy="48" r="3" fill="#1e1b4b" />
        <polygon points="50,54 47,60 53,60" fill="#f59e0b" />
      </svg>
    )
  },
  'ENTJ': {
    name: 'ENTJ',
    subName: '카리스마 넘치는 숲의 사자',
    themeColor: '#4c6ef5',
    bgColor: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    keywords: ['통솔자', '효율주의', '카리스마', '결단력'],
    description: '위엄 넘치는 태도로 군중을 지휘하여 승리로 이끄는 사자입니다. 철저한 목표지향형이며 추진력과 결단력을 겸비하여, 어느 집단에서나 최고의 권위와 효율을 끌어냅니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#2563eb" opacity="0.15" />
        <path d="M30 45 Q50 25 70 45 C75 60, 65 78, 50 78 C35 78, 25 60, 30 45 Z" fill="#eab308" />
        <path d="M35 50 Q50 35 65 50 C68 62, 60 74, 50 74 C40 74, 32 62, 35 50 Z" fill="#2563eb" />
        <polygon points="50,58 46,64 54,64" fill="#1e1b4b" />
        <polygon points="50,22 45,30 55,30" fill="#eab308" />
      </svg>
    )
  },
  'ENTP': {
    name: 'ENTP',
    subName: '재치 있고 영리한 붉은 여우',
    themeColor: '#3b5bdb',
    bgColor: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
    keywords: ['발명가', '재치꾼', '도전정신', '토론형'],
    description: '뛰어난 직관과 유쾌한 화술로 새로운 아이디어를 쏟아내는 여우입니다. 고정관념에 도전하는 토론을 즐기고, 위기 상황에서도 천재적인 순발력으로 길을 열어냅니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#4f46e5" opacity="0.15" />
        <path d="M50 78 L25 45 L32 25 L50 45 L68 25 L75 45 Z" fill="#f97316" />
        <polygon points="50,78 44,70 56,70" fill="#1e1b4b" />
        <circle cx="42" cy="48" r="4" fill="#ffffff" />
        <circle cx="58" cy="48" r="4" fill="#ffffff" />
        <path d="M38 25 L25 10 L30 30 Z" fill="#ea580c" />
        <path d="M62 25 L75 10 L70 30 Z" fill="#ea580c" />
      </svg>
    )
  },
  'INFJ': {
    name: 'INFJ',
    subName: '신념을 품은 고고한 늑대',
    themeColor: '#099268',
    bgColor: 'linear-gradient(135deg, #10b981 0%, #065f46 100%)',
    keywords: ['예언자', '깊은신념', '이타주의', '통찰력'],
    description: '달빛이 비치는 절벽 위에서 무리의 조화와 나아갈 미래를 내다보는 신비한 늑대입니다. 영적인 직관력이 강하며 내면에 굳건한 평화의 이념을 품어 타인을 따뜻이 돕습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#10b981" opacity="0.15" />
        <path d="M50 25 L35 48 L45 50 L38 78 L62 78 L55 50 L65 48 Z" fill="#64748b" />
        <polygon points="50,60 46,65 54,65" fill="#1e293b" />
        <path d="M35 48 L22 35 L30 42 Z" fill="#475569" />
        <path d="M65 48 L78 35 L70 42 Z" fill="#475569" />
      </svg>
    )
  },
  'INFP': {
    name: 'INFP',
    subName: '감수성이 영롱한 하얀 토끼',
    themeColor: '#12b886',
    bgColor: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
    keywords: ['중재자', '풍부한감성', '이상주의', '예술가'],
    description: '풀잎 뒤에 숨어 별자리를 보며 순수하고 맑은 이상을 꿈꾸는 토끼입니다. 매우 감수성이 깊고 다정다감하며, 세상의 아픔에 진심 어린 공감을 나눌 줄 아는 따뜻한 예술가입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#34d399" opacity="0.15" />
        <circle cx="50" cy="62" r="22" fill="#e2e8f0" />
        <path d="M38 45 C38 25, 43 15, 43 45 Z" fill="#f1f5f9" />
        <path d="M62 45 C62 25, 57 15, 57 45 Z" fill="#f1f5f9" />
        <circle cx="43" cy="58" r="2.5" fill="#e11d48" />
        <circle cx="57" cy="58" r="2.5" fill="#e11d48" />
        <path d="M48 65 Q50 67 52 65" stroke="#94a3b8" strokeWidth="2" fill="none" />
      </svg>
    )
  },
  'ENFJ': {
    name: 'ENFJ',
    subName: '골든 리트리버와 같은 인도자',
    themeColor: '#20c997',
    bgColor: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    keywords: ['지도자', '이타적', '사교성', '공동체'],
    description: '언제나 꼬리를 흔들며 상대를 반겨주고 화합을 유도하는 골든 리트리버처럼 다정한 조력자입니다. 강한 이타심과 추진력으로 공동체의 성장을 위해 리더십을 유감없이 보여줍니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#059669" opacity="0.15" />
        <path d="M32 40 Q50 35 68 40 C75 50, 72 70, 50 72 C28 72, 25 50, 32 40 Z" fill="#eab308" />
        <path d="M26 42 Q30 65 34 68 Z" fill="#ca8a04" />
        <path d="M74 42 Q70 65 66 68 Z" fill="#ca8a04" />
        <circle cx="42" cy="50" r="3" fill="#1e1b4b" />
        <circle cx="58" cy="50" r="3" fill="#1e1b4b" />
        <path d="M46 60 Q50 64 54 60" stroke="#1e1b4b" strokeWidth="2" fill="none" />
      </svg>
    )
  },
  'ENFP': {
    name: 'ENFP',
    subName: '유쾌하게 도약하는 맑은 돌고래',
    themeColor: '#15aabf',
    bgColor: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    keywords: ['활동가', '긍정요정', '아이디어', '자유주의'],
    description: '푸른 파도를 차고 오르며 세상에 긍정적인 흥을 전파하는 활기찬 돌고래입니다. 호기심이 대단하며 사교적이고 참신한 아이디어로 분위기를 유쾌하게 리드합니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#06b6d4" opacity="0.15" />
        <path d="M20 65 Q45 20 80 40 Q70 60 55 60 Q35 70 20 65 Z" fill="#06b6d4" />
        <path d="M45 42 Q40 55 25 58 Z" fill="#0891b2" />
        <circle cx="65" cy="40" r="2.5" fill="#ffffff" />
      </svg>
    )
  },
  'ISTJ': {
    name: 'ISTJ',
    subName: '약속을 책임지는 성실한 비버',
    themeColor: '#e64980',
    bgColor: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
    keywords: ['현실주의자', '원칙준수', '책임감', '철두철미'],
    description: '흐르는 강물에도 끄떡없는 정교한 댐을 한 조각씩 묵묵히 쌓아 올리는 비버입니다. 원칙과 전통을 존중하며 강한 책임감과 성실함으로 매사에 철두철미한 안정을 보장합니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#f43f5e" opacity="0.15" />
        <ellipse cx="50" cy="55" rx="20" ry="18" fill="#a16207" />
        <rect x="44" y="60" width="12" height="10" fill="#ffffff" />
        <line x1="50" y1="60" x2="50" y2="70" stroke="#1e293b" strokeWidth="1" />
        <circle cx="43" cy="48" r="2.5" fill="#1e293b" />
        <circle cx="57" cy="48" r="2.5" fill="#1e293b" />
      </svg>
    )
  },
  'ISFJ': {
    name: 'ISFJ',
    subName: '헌신적이고 상냥한 수호 펭귄',
    themeColor: '#f783ac',
    bgColor: 'linear-gradient(135deg, #fda4af 0%, #e11d48 100%)',
    keywords: ['수호자', '내조형', '세심함', '안정지향'],
    description: '칼바람이 부는 혹한기에도 내 무리와 가정을 따뜻하게 품어주는 펭귄과 같은 조력자입니다. 상냥하고 배려심이 크며 꼼꼼하게 주변 사람의 안전과 살림을 보살핍니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#fda4af" opacity="0.15" />
        <ellipse cx="50" cy="55" rx="22" ry="24" fill="#1e293b" />
        <ellipse cx="50" cy="58" rx="14" ry="18" fill="#ffffff" />
        <polygon points="50,50 46,45 54,45" fill="#f59e0b" />
        <circle cx="44" cy="40" r="2" fill="#1e293b" />
        <circle cx="56" cy="40" r="2" fill="#1e293b" />
      </svg>
    )
  },
  'ESTJ': {
    name: 'ESTJ',
    subName: '체계를 세우는 냉철한 매/독수리',
    themeColor: '#f03e3e',
    bgColor: 'linear-gradient(135deg, #e11d48 0%, #9f1239 100%)',
    keywords: ['사무관', '체계적', '효율극대화', '현실적'],
    description: '상공을 선회하며 예리한 눈으로 영역을 지휘하고 질서를 정립하는 독수리입니다. 사실과 규정을 중시하며 조직을 체계적으로 설계하고 강력한 리더십으로 목표를 이룹니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#e11d48" opacity="0.15" />
        <path d="M30 40 L50 20 L70 40 L65 72 L35 72 Z" fill="#64748b" />
        <path d="M50 35 L40 50 L50 48 L60 50 Z" fill="#f59e0b" />
        <circle cx="43" cy="38" r="2" fill="#1e293b" />
        <circle cx="57" cy="38" r="2" fill="#1e293b" />
      </svg>
    )
  },
  'ESFJ': {
    name: 'ESFJ',
    subName: '온화하고 친밀한 아기 코끼리',
    themeColor: '#d6336c',
    bgColor: 'linear-gradient(135deg, #f43f5e 0%, #9f1239 100%)',
    keywords: ['사교가', '조화로운', '적극적봉사', '다정함'],
    description: '커다란 귀로 만인의 이야기를 경청하고 친근하게 코를 뻗어 악수하는 아기 코끼리입니다. 인맥이 넓고 타인의 복지와 화합에 힘쓰며 사교적인 모임을 적극 이끕니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#f43f5e" opacity="0.15" />
        <circle cx="50" cy="55" r="18" fill="#94a3b8" />
        <path d="M35 40 Q25 45 35 60 Z" fill="#64748b" />
        <path d="M65 40 Q75 45 65 60 Z" fill="#64748b" />
        <path d="M50 55 C50 68 45 78 43 78" fill="none" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
        <circle cx="44" cy="48" r="2" fill="#1e293b" />
        <circle cx="56" cy="48" r="2" fill="#1e293b" />
      </svg>
    )
  },
  'ISTP': {
    name: 'ISTP',
    subName: '날렵하게 움직이는 고요한 표범',
    themeColor: '#ae3ec9',
    bgColor: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
    keywords: ['재주꾼', '유연함', '도구사용', '이성적'],
    description: '풀숲에 조용히 숨어 예리한 순발력으로 위기나 기회를 낚아채는 고고한 표범입니다. 백마디 말보다 직관적인 도구 다루기나 임기응변에 강하며 자유분방한 개척자입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#a855f7" opacity="0.15" />
        <path d="M30 40 Q50 30 70 40 L74 65 Q50 78 26 65 Z" fill="#475569" />
        <circle cx="42" cy="48" r="2" fill="#facc15" />
        <circle cx="58" cy="48" r="2" fill="#facc15" />
        <polygon points="50,56 46,62 54,62" fill="#1e293b" />
        {/* leopard spots representation */}
        <circle cx="36" cy="58" r="2" fill="#1e293b" />
        <circle cx="64" cy="58" r="2" fill="#1e293b" />
      </svg>
    )
  },
  'ISFP': {
    name: 'ISFP',
    subName: '평온하고 예술적인 아기 고양이',
    themeColor: '#cc5de8',
    bgColor: 'linear-gradient(135deg, #c084fc 0%, #6b21a8 100%)',
    keywords: ['예술가', '자유주의', '온화함', '미적감성'],
    description: '따사로운 햇살 아래 누워 삶의 질감을 한 폭의 예술로 감상하는 귀여운 고양이입니다. 타인의 강요를 극도로 꺼리며 매사를 예술적 안목과 자유로움으로 채워나갑니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#c084fc" opacity="0.15" />
        <path d="M30 48 Q50 35 70 48 L72 70 Q50 78 28 70 Z" fill="#f97316" />
        <polygon points="30,48 24,30 38,40" fill="#ea580c" />
        <polygon points="70,48 76,30 62,40" fill="#ea580c" />
        <ellipse cx="44" cy="58" rx="2" ry="3" fill="#1e293b" />
        <ellipse cx="56" cy="58" rx="2" ry="3" fill="#1e293b" />
        <polygon points="50,65 47,69 53,69" fill="#fda4af" />
        <path d="M36 62 H24 M64 62 H76" stroke="#1e293b" strokeWidth="1.5" />
      </svg>
    )
  },
  'ESTP': {
    name: 'ESTP',
    subName: '도전을 즐기는 역동적인 치타',
    themeColor: '#f76707',
    bgColor: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)',
    keywords: ['수완가', '실행력갑', '모험선호', '활동적'],
    description: '생각보다 행동이 세 박자 빠르며, 거침없이 장애물을 돌파해 달리는 야생 치타입니다. 빠른 판단력과 엄청난 추진력으로 매번 모험적인 결과물을 획득하는 승부사 기질을 갖췄습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#f97316" opacity="0.15" />
        <path d="M30 38 L45 28 L55 28 L70 38 L65 68 L35 68 Z" fill="#facc15" />
        <circle cx="40" cy="45" r="2.5" fill="#1e293b" />
        <circle cx="60" cy="45" r="2.5" fill="#1e293b" />
        <path d="M42 55 L48 58 L52 58 L58 55" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* spots */}
        <circle cx="45" cy="62" r="2" fill="#1e293b" />
        <circle cx="55" cy="62" r="2" fill="#1e293b" />
      </svg>
    )
  },
  'ESFP': {
    name: 'ESFP',
    subName: '축제를 리드하는 화려한 공작새',
    themeColor: '#ff922b',
    bgColor: 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
    keywords: ['연예인', '스타성', '낙천적', '친화력'],
    description: '아름다운 깃털을 활짝 펴고 무대 위에서 화려한 조명을 받으며 사람들을 흥겹게 해주는 공작새입니다. 천성적인 낙천성과 사교감으로 주변의 우울함을 지우는 해피 바이러스 리더입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <circle cx="50" cy="50" r="45" fill="#fb923c" opacity="0.15" />
        <path d="M50 35 C42 35, 38 45, 38 60 C38 75, 45 78, 50 78 C55 78, 62 75, 62 60 C62 45, 58 35, 50 35 Z" fill="#0284c7" />
        {/* feather tail back decorations */}
        <circle cx="28" cy="42" r="4" fill="#059669" />
        <circle cx="72" cy="42" r="4" fill="#059669" />
        <circle cx="35" cy="28" r="4" fill="#eab308" />
        <circle cx="65" cy="28" r="4" fill="#eab308" />
        <circle cx="50" cy="22" r="4" fill="#ca8a04" />
        <line x1="50" y1="35" x2="50" y2="22" stroke="#0284c7" strokeWidth="2" />
        <polygon points="50,50 47,56 53,56" fill="#f59e0b" />
      </svg>
    )
  }
};
