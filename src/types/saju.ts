export type ElementKeyKo = '목' | '화' | '토' | '금' | '수';
export type ElementKeyEn = 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';

export type HideGanItem = {
  hanja: string;
  hangul: string;
  element: ElementKeyKo;
};

export type PillarValue = {
  stem: string;
  stemHanja: string;
  stemElement: ElementKeyKo;
  branch: string;
  branchHanja: string;
  branchElement: ElementKeyKo;
  symbol: string;
  hideGan: HideGanItem[];
};

export type FourPillars = {
  year: PillarValue;
  month: PillarValue;
  day: PillarValue;
  hour: PillarValue | { unknown: true; label: string };
};

export type FiveElementsMeta = Record<ElementKeyKo, { count: number; strength: string }>;

export type ReportResponse = {
  reportMarkdown?: string;
  meta?: {
    fourPillars?: FourPillars;
    fiveElements?: Record<string, { count?: number; strength?: string }>;
    generatedAt?: string;
  };
  error?: string;
  detail?: string;
};

export type ApiResponse = {
  report?: string;
  meta?: {
    fourPillars?: FourPillars;
    fiveElements?: Record<string, { count?: number; strength?: string }>;
    generatedAt?: string;
  };
  error?: string;
  detail?: string;
};

export type Pillar = {
  gan: string;
  ji: string;
  hidden?: string[];
  element: string;
};

export type SajuChartData = {
  pillars: {
    year: Pillar;
    month: Pillar;
    day: Pillar;
    hour: Pillar;
  };
  fiveElements: Record<string, number>;
  yongsin: string;
  gisin: string;
  daewoon: Array<{ age: number; gan: string; ji: string; current?: boolean }>;
  lifeSeason: string;
  lifeSeasonAge: {
    spring: [number, number];
    summer: [number, number];
    autumn: [number, number];
    winter: [number, number];
  };
};

export type BloodType = 'A' | 'B' | 'O' | 'AB' | 'unknown';
export type ZodiacSign = string;
export type CalendarType = 'solar' | 'lunar';
export type Gender = 'male' | 'female' | 'other';
