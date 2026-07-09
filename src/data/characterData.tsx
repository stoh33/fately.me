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
    subName: '꺾이지 않는 마이웨이 소나무 🌲',
    themeColor: '#10b981',
    bgColor: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
    keywords: ['리더십', '마이웨이', '독립심', '우직함'],
    description: '모진 풍파 속에서도 꺾이지 않고 하늘을 향해 곧게 뻗어 나가는 낙락장송입니다. 명예를 중시하고 리더십이 뛰어나며, 늘 남의 눈치 보지 않고 꿋꿋하게 본인의 길을 개척하는 스타일입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-gab-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-gab-mz)" opacity="0.12" />
        {/* Cute Tree Character with face */}
        <g filter="url(#shadow)">
          <path d="M50 12 L72 45 H28 Z" fill="url(#grad-gab-mz)" />
          <path d="M50 32 L78 65 H22 Z" fill="url(#grad-gab-mz)" />
          <rect x="46" y="65" width="8" height="22" rx="3" fill="#78350f" />
        </g>
        {/* Star highlights */}
        <path d="M80 25 L82 30 L87 31 L82 32 L80 37 L78 32 L73 31 L78 30 Z" fill="#facc15" />
        <path d="M22 20 L23 23 L26 24 L23 25 L22 28 L21 25 L18 24 L21 23 Z" fill="#facc15" opacity="0.8" />
        {/* Eyes & blush */}
        <circle cx="45" cy="52" r="3.5" fill="#ffffff" />
        <circle cx="55" cy="52" r="3.5" fill="#ffffff" />
        <circle cx="45" cy="52" r="1.5" fill="#064e3b" />
        <circle cx="55" cy="52" r="1.5" fill="#064e3b" />
        <ellipse cx="38" cy="56" rx="3" ry="1.5" fill="#f43f5e" opacity="0.5" />
        <ellipse cx="62" cy="56" rx="3" ry="1.5" fill="#f43f5e" opacity="0.5" />
        <path d="M47 57 Q50 59 53 57" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  '을': {
    name: '을목 (乙木)',
    subName: '적응력 만렙 인싸 넝쿨이 🌿',
    themeColor: '#34d399',
    bgColor: 'linear-gradient(135deg, #34d399 0%, #065f46 100%)',
    keywords: ['생활력', '친화력', '적응력', '센스쟁이'],
    description: '척박한 환경에서도 유연하게 담벼락을 타고 넘어가 기어이 꽃을 피워내는 넝쿨의 생명력을 가졌습니다. 어떤 집단에서도 스며드는 친화력이 발군이며, 실리와 조화를 함께 챙기는 스마트함을 갖췄습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-eul-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-eul-mz)" opacity="0.12" />
        {/* Vine curly paths */}
        <path d="M50 85 C42 68, 30 60, 36 45 C42 30, 58 35, 52 20" fill="none" stroke="url(#grad-eul-mz)" strokeWidth="6" strokeLinecap="round" />
        {/* Heart shaped leaf with face */}
        <g transform="translate(48, 26)">
          <path d="M12 0 C12 -6, 2 -12, 0 -12 C-2 -12, -12 -6, -12 0 C-12 6, -6 12, 0 16 C6 12, 12 6, 12 0 Z" fill="url(#grad-eul-mz)" />
          {/* Eyes & smile */}
          <circle cx="-4" cy="-2" r="1.5" fill="#ffffff" />
          <circle cx="4" cy="-2" r="1.5" fill="#ffffff" />
          <path d="M-2 2 Q0 4 2 2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>
        {/* Small leaves */}
        <path d="M35 52 C25 50, 20 40, 32 42 Z" fill="#6ee7b7" />
        <path d="M54 58 C64 56, 70 48, 58 48 Z" fill="#10b981" />
        {/* Sparkle */}
        <path d="M25 25 L29 27 L25 29 L23 25 Z" fill="#fbbf24" />
        <path d="M72 70 L75 72 L72 74 L70 70 Z" fill="#fbbf24" />
      </svg>
    )
  },
  '병': {
    name: '병화 (丙火)',
    subName: '에너지 뿜뿜 인간 태양 ☀️',
    themeColor: '#f87171',
    bgColor: 'linear-gradient(135deg, #f87171 0%, #b91c1c 100%)',
    keywords: ['화끈함', '에너지', '파워인싸', '솔직함'],
    description: '하늘에 뜬 눈부신 태양처럼 숨김이 없고 에너지가 차고 넘치는 솔직한 타입입니다. 화끈한 긍정 에너지로 주변을 물들이며, 어디에서든 시선을 한 몸에 받는 힙한 스타성을 내재하고 있습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-byeong-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-byeong-mz)" opacity="0.12" />
        {/* Sun body */}
        <g transform="translate(50, 50)">
          {/* Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path
              key={angle}
              d="M-6 -26 L6 -26 L0 -38 Z"
              fill="url(#grad-byeong-mz)"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="22" fill="url(#grad-byeong-mz)" />
          {/* Cool Sunglasses for MZ vibes */}
          <path d="M-15 -6 H15 L11 4 H-11 Z" fill="#0f172a" />
          <line x1="-15" y1="-3" x2="15" y2="-3" stroke="#94a3b8" strokeWidth="1" />
          {/* Cheerful mouth */}
          <path d="M-5 8 Q0 14 5 8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Blush */}
          <circle cx="-13" cy="8" r="3.5" fill="#f43f5e" opacity="0.6" />
          <circle cx="13" cy="8" r="3.5" fill="#f43f5e" opacity="0.6" />
        </g>
      </svg>
    )
  },
  '정': {
    name: '정화 (丁火)',
    subName: '속은 뜨거운 감성 모닥불 🔥',
    themeColor: '#ef4444',
    bgColor: 'linear-gradient(135deg, #fb923c 0%, #dc2626 100%)',
    keywords: ['은근광기', '세심함', '예술성', '감성파'],
    description: '어둠 속을 고요히 비춰주는 은은한 등대이자, 따스함을 나르는 모닥불입니다. 겉보기엔 조용하고 예의 바르지만, 마음속 깊은 곳에는 누구보다 강한 신념과 은근한 광기의 예술적인 정열이 타오릅니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-jeong-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-jeong-mz)" opacity="0.12" />
        {/* Firewood */}
        <g stroke="#78350f" strokeWidth="5" strokeLinecap="round">
          <line x1="32" y1="78" x2="68" y2="70" />
          <line x1="68" y1="78" x2="32" y2="70" />
        </g>
        {/* Flamy character */}
        <path d="M50 18 C40 38, 32 48, 34 65 C36 76, 64 76, 66 65 C68 48, 60 38, 50 18 Z" fill="url(#grad-jeong-mz)" />
        <path d="M50 35 C45 46, 40 52, 42 62 C44 68, 56 68, 58 62 C60 52, 55 46, 50 35 Z" fill="#facc15" />
        {/* Face */}
        <circle cx="44" cy="55" r="2.5" fill="#7f1d1d" />
        <circle cx="56" cy="55" r="2.5" fill="#7f1d1d" />
        <path d="M48 61 Q50 63 52 61" stroke="#7f1d1d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Blushing cheeks */}
        <circle cx="39" cy="58" r="2.5" fill="#ef4444" opacity="0.7" />
        <circle cx="61" cy="58" r="2.5" fill="#ef4444" opacity="0.7" />
      </svg>
    )
  },
  '무': {
    name: '무토 (戊土)',
    subName: '든든보스 평화 수호 바위산 ⛰️',
    themeColor: '#fbbf24',
    bgColor: 'linear-gradient(135deg, #fbbf24 0%, #92400e 100%)',
    keywords: ['든든함', '포용력', '묵직함', '중재자'],
    description: '온갖 비바람과 세월의 흐름을 묵묵하게 이겨내며 굳건히 자리 잡은 황금 산입니다. 포용력이 대단하여 어지간한 고민거리는 모두 들어주고 갈등을 듬직하게 정리해 주는 최고의 멘토형 성정입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-mu-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="60%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-mu-mz)" opacity="0.12" />
        {/* Mountain character */}
        <path d="M50 20 L88 78 H12 Z" fill="url(#grad-mu-mz)" />
        {/* Shadowed side */}
        <path d="M50 20 L50 78 H12 Z" fill="#78350f" opacity="0.2" />
        {/* Cute cloud helper */}
        <ellipse cx="30" cy="35" rx="8" ry="5" fill="#ffffff" opacity="0.9" />
        <circle cx="26" cy="32" r="5" fill="#ffffff" opacity="0.9" />
        <circle cx="34" cy="32" r="5" fill="#ffffff" opacity="0.9" />
        {/* Face on the mountain */}
        <path d="M44 54 Q47 50 50 54" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M50 54 Q53 50 56 54" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M48 62 Q50 64 52 62" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="40" cy="58" r="3.5" fill="#ef4444" opacity="0.6" />
        <circle cx="60" cy="58" r="3.5" fill="#ef4444" opacity="0.6" />
      </svg>
    )
  },
  '기': {
    name: '기토 (己土)',
    subName: '다 퍼주는 힐러 논밭 🌱',
    themeColor: '#f59e0b',
    bgColor: 'linear-gradient(135deg, #f59e0b 0%, #78350f 100%)',
    keywords: ['자애로움', '성장도우미', '배려심', '현실감각'],
    description: '작은 씨앗이 싹트고 자라 풍요로운 열매를 맺도록 아낌없이 영양분을 나눠주는 비옥한 텃밭입니다. 기본적으로 모성애와 이타심이 넘치고, 타인의 잠재력을 발견해 성장을 도와주는 숨은 능력자입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-gi-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-gi-mz)" opacity="0.12" />
        {/* Rounded Earth Mound */}
        <ellipse cx="50" cy="65" rx="36" ry="18" fill="url(#grad-gi-mz)" />
        {/* Sprouting Cute Seedling */}
        <path d="M50 54 V34 C44 26 36 32 36 32" fill="none" stroke="#22c55e" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M36 32 C34 22 45 22 50 34 C55 22 66 22 64 32 C64 42 50 42 50 34" fill="#4ade80" />
        {/* Face on the Mound */}
        <circle cx="42" cy="62" r="2.5" fill="#ffffff" />
        <circle cx="58" cy="62" r="2.5" fill="#ffffff" />
        <path d="M47 66 Q50 68 53 66" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  '경': {
    name: '경금 (庚金)',
    subName: '겉바속촉 의리왕 무쇠원석 🪨',
    themeColor: '#94a3b8',
    bgColor: 'linear-gradient(135deg, #94a3b8 0%, #334155 100%)',
    keywords: ['의리파', '뚝심', '단호함', '추진력'],
    description: '아직 가공되지 않아 거칠고 투박하지만, 내면은 어떤 타협도 허락하지 않을 만큼 곧고 정의로운 원석입니다. 신념과 의리를 최우선으로 생각하며, 한 번 결심한 목표는 부러질지언정 밀고 나갑니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-gyeong-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-gyeong-mz)" opacity="0.12" />
        {/* Geometric Ore with glow edges */}
        <polygon points="50,15 82,38 72,82 28,82 18,38" fill="url(#grad-gyeong-mz)" stroke="#cbd5e1" strokeWidth="2" />
        <polygon points="50,15 28,82 50,82" fill="#1e293b" opacity="0.25" />
        <polygon points="82,38 50,82 72,82" fill="#ffffff" opacity="0.15" />
        {/* Cool safety glasses / Goggles */}
        <rect x="30" y="42" width="40" height="8" rx="2" fill="#38bdf8" />
        <line x1="30" y1="46" x2="70" y2="46" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        <circle cx="42" cy="46" r="1.5" fill="#ffffff" />
        <circle cx="58" cy="46" r="1.5" fill="#ffffff" />
        {/* Resolute Smile */}
        <path d="M46 64 H54" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  },
  '신': {
    name: '신금 (辛金)',
    subName: '완벽주의 엣지 보석 💎',
    themeColor: '#a78bfa',
    bgColor: 'linear-gradient(135deg, #c084fc 0%, #4c1d95 100%)',
    keywords: ['시크함', '미적감각', '완벽주의', '섬세함'],
    description: '뜨거운 불과 오랜 세공 과정을 견뎌내고 비로소 영롱하게 빛나는 에메랄드 컷 다이아몬드입니다. 섬세하고 직관적인 미적 안목이 있으며, 철두철미하고 정확하게 일을 처리하여 완벽을 자부합니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-sin-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-sin-mz)" opacity="0.12" />
        {/* Diamond jewel with shine lines */}
        <polygon points="50,15 80,42 50,85 20,42" fill="url(#grad-sin-mz)" stroke="#f3e8ff" strokeWidth="1.5" />
        <polygon points="50,15 20,42 50,42" fill="#ffffff" opacity="0.45" />
        <polygon points="50,42 20,42 50,85" fill="#3b0764" opacity="0.25" />
        {/* Little Crown on top */}
        <path d="M40 18 L44 8 L50 14 L56 8 L60 18 Z" fill="#facc15" />
        <circle cx="44" cy="7" r="1" fill="#facc15" />
        <circle cx="50" cy="13" r="1" fill="#facc15" />
        <circle cx="56" cy="7" r="1" fill="#facc15" />
        {/* Winking Cute Face */}
        <circle cx="43" cy="50" r="2.5" fill="#ffffff" />
        <path d="M53 50 Q56 47 58 50" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M46 59 Q50 62 54 59" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  '임': {
    name: '임수 (壬水)',
    subName: '생각 깊은 프리스타일 바다 🌊',
    themeColor: '#3b82f6',
    bgColor: 'linear-gradient(135deg, #60a5fa 0%, #1e3a8a 100%)',
    keywords: ['유연성', '스케일', '지혜', '자유영혼'],
    description: '모든 물줄기를 끌어안고 끝없이 굽이쳐 흐르는 거대한 밤의 바다입니다. 겉으로는 조용하고 유연해 보이지만 내면은 헤아릴 수 없이 깊은 지혜가 숨 쉬고 있으며, 스케일이 웅장한 호걸 성정입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-im-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-im-mz)" opacity="0.12" />
        {/* Surfer wave style */}
        <path d="M15 65 C25 55, 35 55, 50 65 C65 75, 75 75, 85 65 L85 85 H15 Z" fill="url(#grad-im-mz)" />
        <path d="M15 50 C28 42, 38 42, 50 50 C62 58, 72 58, 85 50 L85 85 H15 Z" fill="#1d4ed8" opacity="0.4" />
        {/* Yellow Duck swimming */}
        <g transform="translate(42, 28)">
          <path d="M12 12 C12 6, 2 0, 0 0 C-2 0, -8 4, -8 10 C-8 16, 2 18, 8 18 C14 18, 12 12, 12 12 Z" fill="#facc15" />
          <circle cx="6" cy="10" r="6" fill="#facc15" />
          <polygon points="12,8 16,10 12,12" fill="#f97316" />
          <circle cx="6" cy="8" r="1" fill="#0f172a" />
        </g>
      </svg>
    )
  },
  '계': {
    name: '계수 (癸水)',
    subName: '아이디어 톡톡 요정 빗방울 💧',
    themeColor: '#06b6d4',
    bgColor: 'linear-gradient(135deg, #67e8f9 0%, #0891b2 100%)',
    keywords: ['센스쟁이', '촉이좋음', '아이디어', '수용성'],
    description: '메마른 대지를 싱그럽게 적셔주는 아침 이슬이자 봄비의 생명력을 닮았습니다. 직관력과 재치가 뛰어나 상대방의 내면을 예리하게 간파하며, 톡톡 튀는 신선한 창의성이 주무기입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-gye-mz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad-gye-mz)" opacity="0.12" />
        {/* Droplet character with baby face */}
        <path d="M50 16 C65 42, 70 52, 70 66 C70 77, 61 84, 50 84 C39 84, 30 77, 30 66 C30 52, 35 42, 50 16 Z" fill="url(#grad-gye-mz)" />
        {/* Sparkly big eyes */}
        <circle cx="43" cy="60" r="4" fill="#ffffff" />
        <circle cx="57" cy="60" r="4" fill="#ffffff" />
        <circle cx="44" cy="59" r="1.5" fill="#0891b2" />
        <circle cx="56" cy="59" r="1.5" fill="#0891b2" />
        <circle cx="42" cy="61" r="1" fill="#ffffff" />
        <circle cx="58" cy="61" r="1" fill="#ffffff" />
        {/* Happy mouth */}
        <path d="M47 68 Q50 71 53 68" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Cute blush */}
        <circle cx="36" cy="64" r="3.5" fill="#f43f5e" opacity="0.6" />
        <circle cx="64" cy="64" r="3.5" fill="#f43f5e" opacity="0.6" />
      </svg>
    )
  }
};

export const mbtiCharacters: Record<string, CharacterItem> = {
  'INTJ': {
    name: 'INTJ',
    subName: '뇌섹 카리스마 호랑이 🐯',
    themeColor: '#3b82f6',
    bgColor: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    keywords: ['전략가', '독립적', '완벽주의', '논리적'],
    description: '혼자 깊이 탐색하며 문제를 해결하는 고독한 호랑이입니다. 철저한 분석과 체계적인 계획으로 한 번 정한 목표는 끝까지 수행해 내는 카리스마를 갖추고 있습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-intj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#3b82f6" opacity="0.12" />
        {/* Tiger base */}
        <path d="M26 38 C26 28, 74 28, 74 38 C74 54, 66 74, 50 74 C34 74, 26 54, 26 38 Z" fill="url(#grad-intj)" />
        {/* Ears */}
        <polygon points="26,32 16,18 36,25" fill="#1e3a8a" />
        <polygon points="74,32 84,18 64,25" fill="#1e3a8a" />
        {/* Cyberpunk Glasses for MZ style */}
        <rect x="24" y="40" width="52" height="10" rx="3" fill="#3b82f6" opacity="0.9" />
        <line x1="24" y1="45" x2="76" y2="45" stroke="#ffffff" strokeWidth="1" />
        {/* Tiger stripes */}
        <path d="M26 48 H36 M74 48 H64 M50 32 V40" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" />
        {/* Snout */}
        <ellipse cx="50" cy="60" rx="8" ry="6" fill="#ffffff" />
        <polygon points="50,56 46,60 54,60" fill="#1e1b4b" />
        <path d="M48 64 Q50 66 52 64" stroke="#1e1b4b" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  'INTP': {
    name: 'INTP',
    subName: '방구석 천재 부엉이 🦉',
    themeColor: '#6366f1',
    bgColor: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    keywords: ['아이디어', '호기심', '논리주의', '비판적'],
    description: '어두운 밤 고요히 앉아 우주의 논리를 사색하는 부엉이입니다. 상상력이 매우 풍부하고 비논리적인 관습을 거부하며, 깊이 있는 이론 연구에 최적의 역량을 지닙니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-intp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#6366f1" opacity="0.12" />
        {/* Owl body */}
        <path d="M50 22 C35 22, 28 32, 28 55 C28 72, 38 78, 50 78 C62 78, 72 72, 72 55 C72 32, 65 22, 50 22 Z" fill="url(#grad-intp)" />
        {/* Glasses representing thinker */}
        <circle cx="40" cy="46" r="10" stroke="#facc15" strokeWidth="2.5" fill="none" />
        <circle cx="60" cy="46" r="10" stroke="#facc15" strokeWidth="2.5" fill="none" />
        <line x1="50" y1="46" x2="50" y2="46" stroke="#facc15" strokeWidth="3" />
        <circle cx="40" cy="46" r="2.5" fill="#1e1b4b" />
        <circle cx="60" cy="46" r="2.5" fill="#1e1b4b" />
        {/* Cute beak */}
        <polygon points="50,54 46,60 54,60" fill="#f97316" />
        {/* Thought bubble decoration */}
        <path d="M74 25 C78 22, 85 24, 82 28 C85 30, 80 34, 76 31 Z" fill="#ffffff" opacity="0.8" />
      </svg>
    )
  },
  'ENTJ': {
    name: 'ENTJ',
    subName: '갓생 살기 대장 사자 🦁',
    themeColor: '#2563eb',
    bgColor: 'linear-gradient(135deg, #3b82f6 0%, #1e4ed8 100%)',
    keywords: ['통솔자', '효율주의', '카리스마', '결단력'],
    description: '위엄 넘치는 태도로 군중을 지휘하여 승리로 이끄는 사자입니다. 철저한 목표지향형이며 추진력과 결단력을 겸비하여, 어느 집단에서나 최고의 권위와 효율을 끌어냅니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-entj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#2563eb" opacity="0.12" />
        {/* Lion mane */}
        <circle cx="50" cy="52" r="28" fill="url(#grad-entj)" />
        {/* Face */}
        <circle cx="50" cy="54" r="20" fill="#fcd34d" />
        {/* Crown for leader */}
        <path d="M40 26 L44 14 L50 20 L56 14 L60 26 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        {/* Eyes & nose */}
        <circle cx="43" cy="48" r="2.5" fill="#1e1b4b" />
        <circle cx="57" cy="48" r="2.5" fill="#1e1b4b" />
        <polygon points="50,56 46,62 54,62" fill="#78350f" />
        <path d="M48 66 Q50 68 52 66" stroke="#78350f" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  'ENTP': {
    name: 'ENTP',
    subName: '킹받는 매력의 붉은 여우 🦊',
    themeColor: '#4f46e5',
    bgColor: 'linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)',
    keywords: ['도전자', '재치꾼', '도전정신', '토론형'],
    description: '뛰어난 직관과 유쾌한 화술로 새로운 아이디어를 쏟아내는 여우입니다. 고정관념에 도전하는 토론을 즐기고, 위기 상황에서도 천재적인 순발력으로 길을 열어냅니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-entp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#4f46e5" opacity="0.12" />
        {/* Fox head */}
        <path d="M50 78 L22 42 C22 28, 78 28, 78 42 Z" fill="url(#grad-entp)" />
        {/* Big triangular ears */}
        <polygon points="24,34 10,12 30,22" fill="#ea580c" />
        <polygon points="76,34 90,12 70,22" fill="#ea580c" />
        <polygon points="24,34 16,18 26,24" fill="#ffedd5" />
        <polygon points="76,34 84,18 74,24" fill="#ffedd5" />
        {/* Wink cheek face */}
        <circle cx="36" cy="45" r="3" fill="#1e1b4b" />
        <path d="M58 43 Q62 40 66 43" stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Cheerful tongue out (representing 킹받는) */}
        <ellipse cx="50" cy="66" rx="3" ry="5" fill="#f43f5e" />
        <polygon points="50,78 44,66 56,66" fill="#1e1b4b" />
      </svg>
    )
  },
  'INFJ': {
    name: 'INFJ',
    subName: '감성 충만 낭만 늑대 🐺',
    themeColor: '#10b981',
    bgColor: 'linear-gradient(135deg, #34d399 0%, #065f46 100%)',
    keywords: ['통찰가', '깊은신념', '이타주의', '낭만파'],
    description: '달빛이 비치는 절벽 위에서 무리의 조화와 나아갈 미래를 내다보는 신비한 늑대입니다. 영적인 직관력이 강하며 내면에 굳건한 평화의 이념을 품어 타인을 따뜻이 돕습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-infj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#10b981" opacity="0.12" />
        {/* Moon backdrop */}
        <circle cx="70" cy="30" r="12" fill="#fef08a" opacity="0.8" />
        {/* Wolf face */}
        <path d="M50 25 L28 45 L38 48 L35 78 H65 L62 48 L72 45 Z" fill="url(#grad-infj)" />
        <polygon points="35,42 22,25 38,34" fill="#334155" />
        <polygon points="65,42 78,25 62,34" fill="#334155" />
        {/* Mystic starry eyes */}
        <path d="M40 46 L42 49 L40 52 L38 49 Z" fill="#67e8f9" />
        <path d="M60 46 L62 49 L60 52 L58 49 Z" fill="#67e8f9" />
        <polygon points="50,60 46,65 54,65" fill="#0f172a" />
        <path d="M46 70 Q50 73 54 70" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  'INFP': {
    name: 'INFP',
    subName: '눈물 많은 유리멘탈 토끼 🐰',
    themeColor: '#34d399',
    bgColor: 'linear-gradient(135deg, #a7f3d0 0%, #047857 100%)',
    keywords: ['예술가', '과몰입러', '이상주의', '유리멘탈'],
    description: '풀잎 뒤에 숨어 별자리를 보며 순수하고 맑은 이상을 꿈꾸는 토끼입니다. 매우 감수성이 깊고 다정다감하며, 세상의 아픔에 진심 어린 공감을 나눌 줄 아는 따뜻한 예술가입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-infp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#34d399" opacity="0.12" />
        {/* Bunny ears */}
        <path d="M35 45 C30 18, 42 12, 42 45 Z" fill="#ffffff" stroke="#fda4af" strokeWidth="1.5" />
        <path d="M65 45 C70 18, 58 12, 58 45 Z" fill="#ffffff" stroke="#fda4af" strokeWidth="1.5" />
        {/* Body */}
        <circle cx="50" cy="62" r="22" fill="url(#grad-infp)" />
        {/* Crying eyes (유리멘탈) */}
        <ellipse cx="42" cy="56" rx="2.5" ry="3.5" fill="#1e293b" />
        <ellipse cx="58" cy="56" rx="2.5" ry="3.5" fill="#1e293b" />
        <path d="M42 60 C42 64, 40 66, 40 68" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Blush & mouth */}
        <circle cx="36" cy="60" r="3" fill="#f43f5e" opacity="0.5" />
        <circle cx="64" cy="60" r="3" fill="#f43f5e" opacity="0.5" />
        <path d="M47 62 Q50 60 53 62" stroke="#fda4af" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  'ENFJ': {
    name: 'ENFJ',
    subName: '인류애 맥스 리트리버 🦮',
    themeColor: '#059669',
    bgColor: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
    keywords: ['지도자', '이타적', '사교성', '공동체'],
    description: '언제나 꼬리를 흔들며 상대를 반겨주고 화합을 유도하는 골든 리트리버처럼 다정한 조력자입니다. 강한 이타심과 추진력으로 공동체의 성장을 위해 리더십을 유감없이 보여줍니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-enfj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#059669" opacity="0.12" />
        {/* Dog head */}
        <path d="M30 40 C30 30, 70 30, 70 40 C70 55, 65 72, 50 72 C35 72, 30 55, 30 40 Z" fill="url(#grad-enfj)" />
        {/* Floppy ears */}
        <path d="M26 40 Q18 55, 26 66 Z" fill="#a16207" />
        <path d="M74 40 Q82 55, 74 66 Z" fill="#a16207" />
        {/* Loving Eyes & heart nose */}
        <path d="M42 46 A3 3 0 0 1 45 49" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M58 46 A3 3 0 0 0 55 49" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M50 54 C50 54, 46 50, 44 52 C42 54, 50 60, 50 60 C50 60, 58 54, 56 52 C54 50, 50 54, 50 54 Z" fill="#f43f5e" />
        {/* Smiling mouth */}
        <path d="M46 62 Q50 66 54 62" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  'ENFP': {
    name: 'ENFP',
    subName: '텐션 폭발 긍정 돌고래 🐬',
    themeColor: '#06b6d4',
    bgColor: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
    keywords: ['활동가', '긍정요정', '아이디어', '자유주의'],
    description: '푸른 파도를 차고 오르며 세상에 긍정적인 흥을 전파하는 활기찬 돌고래입니다. 호기심이 대단하며 사교적이고 참신한 아이디어로 분위기를 유쾌하게 리드합니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-enfp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#06b6d4" opacity="0.12" />
        {/* Jumping dolphin shape with stars */}
        <path d="M15 68 C35 52, 50 25, 78 36 C72 48, 62 50, 50 50 C36 56, 25 74, 15 68 Z" fill="url(#grad-enfp)" />
        <path d="M50 36 C42 46, 32 50, 24 52 Z" fill="#0e7490" />
        {/* Sparkle eyes */}
        <circle cx="65" cy="38" r="2" fill="#ffffff" />
        <path d="M82 20 L84 24 L88 25 L84 26 L82 30 L80 26 L76 25 L80 24 Z" fill="#facc15" />
      </svg>
    )
  },
  'ISTJ': {
    name: 'ISTJ',
    subName: '계획에 살고 죽는 갓생 비버 🦫',
    themeColor: '#f43f5e',
    bgColor: 'linear-gradient(135deg, #fda4af 0%, #be123c 100%)',
    keywords: ['현실주의', '계획맨', '책임감', '철두철미'],
    description: '흐르는 강물에도 끄떡없는 정교한 댐을 한 조각씩 묵묵히 쌓아 올리는 비버입니다. 원칙과 전통을 존중하며 강한 책임감과 성실함으로 매사에 철두철미한 안정을 보장합니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-istj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#f43f5e" opacity="0.12" />
        {/* Beaver face */}
        <ellipse cx="50" cy="55" rx="22" ry="20" fill="url(#grad-istj)" />
        {/* Smart Glasses */}
        <rect x="30" y="44" width="40" height="8" rx="2" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
        <line x1="50" y1="48" x2="50" y2="48" stroke="#e2e8f0" strokeWidth="3" />
        <circle cx="40" cy="48" r="2" fill="#1e293b" />
        <circle cx="60" cy="48" r="2" fill="#1e293b" />
        {/* Buck teeth */}
        <rect x="46" y="60" width="8" height="8" fill="#ffffff" />
        <line x1="50" y1="60" x2="50" y2="68" stroke="#78350f" strokeWidth="1" />
        <ellipse cx="50" cy="58" rx="3.5" ry="2" fill="#78350f" />
      </svg>
    )
  },
  'ISFJ': {
    name: 'ISFJ',
    subName: '천사표 수호요정 펭귄 🐧',
    themeColor: '#fda4af',
    bgColor: 'linear-gradient(135deg, #fda4af 0%, #9f1239 100%)',
    keywords: ['수호자', '배려심', '세심함', '안정지향'],
    description: '칼바람이 부는 혹한기에도 내 무리와 가정을 따뜻하게 품어주는 펭귄과 같은 조력자입니다. 상냥하고 배려심이 크며 꼼꼼하게 주변 사람의 안전과 살림을 보살칩니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-isfj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#fda4af" opacity="0.12" />
        {/* Penguin base */}
        <ellipse cx="50" cy="55" rx="23" ry="25" fill="url(#grad-isfj)" />
        <ellipse cx="50" cy="58" rx="14" ry="19" fill="#ffffff" />
        {/* Scarf for warm MZ look */}
        <path d="M34 62 H66 V66 H34 Z" fill="#ef4444" rx="2" />
        <rect x="58" y="66" width="6" height="12" fill="#b91c1c" rx="1" />
        {/* Beak & eyes */}
        <polygon points="50,52 46,47 54,47" fill="#f59e0b" />
        <circle cx="43" cy="42" r="2.5" fill="#0f172a" />
        <circle cx="57" cy="42" r="2.5" fill="#0f172a" />
      </svg>
    )
  },
  'ESTJ': {
    name: 'ESTJ',
    subName: '효율 끝판왕 대왕독수리 🦅',
    themeColor: '#e11d48',
    bgColor: 'linear-gradient(135deg, #fda4af 0%, #9f1239 100%)',
    keywords: ['사무관', '체계적', '효율극대', '현실적'],
    description: '상공을 선회하며 예리한 눈으로 영역을 지휘하고 질서를 정립하는 독수리입니다. 사실과 규정을 중시하며 조직을 체계적으로 설계하고 강력한 리더십으로 목표를 이룹니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-estj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#e11d48" opacity="0.12" />
        {/* Eagle head with Pilot Goggles */}
        <path d="M30 40 L50 18 L70 40 L64 74 H36 Z" fill="url(#grad-estj)" />
        <path d="M50 34 L38 48 H62 Z" fill="#facc15" />
        {/* Goggles */}
        <rect x="32" y="30" width="36" height="8" rx="2" fill="#0f172a" />
        <circle cx="40" cy="34" r="2" fill="#38bdf8" />
        <circle cx="60" cy="34" r="2" fill="#38bdf8" />
      </svg>
    )
  },
  'ESFJ': {
    name: 'ESFJ',
    subName: '인싸들의 힐러 아기 코끼리 🐘',
    themeColor: '#f43f5e',
    bgColor: 'linear-gradient(135deg, #f43f5e 0%, #881337 100%)',
    keywords: ['사교가', '조화로운', '적극적봉사', '다정함'],
    description: '커다란 귀로 만인의 이야기를 경청하고 친근하게 코를 뻗어 악수하는 아기 코끼리입니다. 인맥이 넓고 타인의 복지와 화합에 힘쓰며 사교적인 모임을 적극 이끕니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-esfj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#f43f5e" opacity="0.12" />
        {/* Large ears */}
        <ellipse cx="28" cy="52" rx="14" ry="20" fill="#64748b" />
        <ellipse cx="72" cy="52" rx="14" ry="20" fill="#64748b" />
        {/* Head */}
        <circle cx="50" cy="54" r="20" fill="url(#grad-esfj)" />
        {/* Heart blush */}
        <path d="M38 52 C38 52 35 48 33 50 C31 52 38 58 38 58 C38 58 45 52 43 50 C41 48 38 52 38 52 Z" fill="#ef4444" opacity="0.6" />
        <path d="M62 52 C62 52 59 48 57 50 C55 52 62 58 62 58 C62 58 69 52 67 50 C65 48 62 52 62 52 Z" fill="#ef4444" opacity="0.6" />
        {/* Trunk & eyes */}
        <path d="M50 56 Q52 74 46 76" fill="none" stroke="#64748b" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="44" cy="46" r="2" fill="#0f172a" />
        <circle cx="56" cy="46" r="2" fill="#0f172a" />
      </svg>
    )
  },
  'ISTP': {
    name: 'ISTP',
    subName: '마이웨이 시크 표범 🐆',
    themeColor: '#a855f7',
    bgColor: 'linear-gradient(135deg, #c084fc 0%, #581c87 100%)',
    keywords: ['재주꾼', '유연함', '도구능숙', '이성적'],
    description: '풀숲에 조용히 숨어 예리한 순발력으로 위기나 기회를 낚아채는 고고한 표범입니다. 백마디 말보다 직관적인 도구 다루기나 임기응변에 강하며 자유분방한 개척자입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-istp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#a855f7" opacity="0.12" />
        {/* Leopard head with spots */}
        <path d="M30 40 C30 30, 70 30, 70 40 C70 55, 64 70, 50 70 C36 70, 30 55, 30 40 Z" fill="url(#grad-istp)" />
        <circle cx="42" cy="46" r="2.5" fill="#1e293b" />
        <circle cx="58" cy="46" r="2.5" fill="#1e293b" />
        <polygon points="50,52 46,58 54,58" fill="#1e293b" />
        {/* Leopard spots */}
        <circle cx="36" cy="58" r="2" fill="#000000" opacity="0.5" />
        <circle cx="64" cy="58" r="2" fill="#000000" opacity="0.5" />
        <circle cx="50" cy="34" r="2.5" fill="#000000" opacity="0.5" />
      </svg>
    )
  },
  'ISFP': {
    name: 'ISFP',
    subName: '누워있기 만렙 뒹굴 고양이 🐱',
    themeColor: '#c084fc',
    bgColor: 'linear-gradient(135deg, #e9d5ff 0%, #6b21a8 100%)',
    keywords: ['예술가', '자유주의', '누워있기', '미적감각'],
    description: '따사로운 햇살 아래 누워 삶의 질감을 한 폭의 예술로 감상하는 귀여운 고양이입니다. 타인의 강요를 극도로 꺼리며 매사를 예술적 안목과 자유로움으로 채워나갑니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-isfp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#c084fc" opacity="0.12" />
        {/* Sleeping Cat (누워있기 만렙) */}
        <path d="M28 46 Q50 30 72 46 L74 68 H26 Z" fill="url(#grad-isfp)" />
        <polygon points="28,46 20,28 36,38" fill="#ea580c" />
        <polygon points="72,46 80,28 64,38" fill="#ea580c" />
        {/* Closed cute eyes */}
        <path d="M38 52 Q42 55 46 52" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M54 52 Q58 55 62 52" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <polygon points="50,59 47,63 53,63" fill="#fda4af" />
        {/* Whiskers */}
        <line x1="32" y1="58" x2="22" y2="58" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="68" y1="58" x2="78" y2="58" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    )
  },
  'ESTP': {
    name: 'ESTP',
    subName: '스릴 중독 야생 치타 🐆',
    themeColor: '#f97316',
    bgColor: 'linear-gradient(135deg, #fdba74 0%, #ea580c 100%)',
    keywords: ['활동가', '실행력갑', '스릴러', '도전선호'],
    description: '생각보다 행동이 세 박자 빠르며, 거침없이 장애물을 돌파해 달리는 야생 치타입니다. 빠른 판단력과 엄청난 추진력으로 매번 모험적인 결과물을 획득하는 승부사 기질을 갖췄습니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-estp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#f97316" opacity="0.12" />
        {/* Running cheetah style (Goggles & Spots) */}
        <path d="M30 38 L45 26 H55 L70 38 L65 72 H35 Z" fill="url(#grad-estp)" />
        {/* Goggles for speed */}
        <rect x="34" y="38" width="32" height="8" rx="2" fill="#0f172a" />
        <circle cx="42" cy="42" r="1.5" fill="#facc15" />
        <circle cx="58" cy="42" r="1.5" fill="#facc15" />
        {/* Snout & spots */}
        <polygon points="50,56 46,62 54,62" fill="#1e293b" />
        <circle cx="42" cy="66" r="2.5" fill="#000000" opacity="0.4" />
        <circle cx="58" cy="66" r="2.5" fill="#000000" opacity="0.4" />
      </svg>
    )
  },
  'ESFP': {
    name: 'ESFP',
    subName: '투머치 텐션 공작새 🦚',
    themeColor: '#fb923c',
    bgColor: 'linear-gradient(135deg, #ffedd5 0%, #ea580c 100%)',
    keywords: ['스타성', '낙천적', '인싸파', '분위기메이커'],
    description: '아름다운 깃털을 활짝 펴고 무대 위에서 화려한 조명을 받으며 사람들을 흥겹게 해주는 공작새입니다. 천성적인 낙천성과 사교감으로 주변의 우울함을 지우는 해피 바이러스 리더입니다.',
    icon: (
      <svg viewBox="0 0 100 100" className="char-svg">
        <defs>
          <linearGradient id="grad-esfp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#fb923c" opacity="0.12" />
        {/* Mirrorball & colorful feathers */}
        <circle cx="25" cy="38" r="4.5" fill="#d946ef" />
        <circle cx="75" cy="38" r="4.5" fill="#3b82f6" />
        <circle cx="34" cy="24" r="4.5" fill="#facc15" />
        <circle cx="66" cy="24" r="4.5" fill="#facc15" />
        {/* Peacock main body */}
        <path d="M50 35 C42 35, 38 45, 38 62 C38 78, 44 80, 50 80 C56 80, 62 78, 62 62 C62 45, 58 35, 50 35 Z" fill="url(#grad-esfp)" />
        {/* Crown feathers */}
        <line x1="50" y1="35" x2="50" y2="20" stroke="#0ea5e9" strokeWidth="2.5" />
        <circle cx="50" cy="18" r="3.5" fill="#facc15" />
        <polygon points="50,54 46,60 54,60" fill="#f97316" />
        {/* Sparkle eyes */}
        <circle cx="44" cy="46" r="2" fill="#ffffff" />
        <circle cx="56" cy="46" r="2" fill="#ffffff" />
      </svg>
    )
  }
};
