export type ProjectCategory = 'branding' | 'motion' | 'video' | 'editorial';

export interface ProjectGalleryFrame {
  url: string;
  alt: string;
  caption: string;
}

export interface PortfolioProject {
  id: string;
  featured: boolean;
  categories: ProjectCategory[];
  dateLabel: string;
  badgeLabel: string;
  eyebrow: string;
  kicker: string;
  title: string;
  subtitle: string;
  disciplineLabel: string;
  role: string;
  client: string;
  period: string;
  tools: string;
  desc: string;
  coverImage: string;
  coverAlt: string;
  modalActionIcon: 'play' | 'view';
  gallery: ProjectGalleryFrame[];
}

export interface VisionPillar {
  index: string;
  symbol: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string;
}

export interface DisciplineMetric {
  label: string;
  value: number;
  tone: 'primary' | 'secondary';
}

export interface TimelineEntry {
  period: string;
  location?: string;
  title: string;
  subtitle: string;
}

export const HERO_ATMOSPHERE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC_F-0Ax7jqnvAq4mxJFCwtol5CuSvKMOgEIdxlpFB8-HZ8vwVoLOn0JyKmR9olTvyL72l-MRyiTLvmjsHATumuMIQSgReimvp0RPIGmdlR-EFz4fltEe738KpIEUbL-wTdFuXmTkqMu5GSQoCNVQ9Y9kH8b9BvJOjxP7ZyyY0E28pI7YZpvaHKT0UDAXOBS2_5WfM5pkntH46CIC9UkGcXuNeDcwgs7b36EyvLf9I';

export const VISION_ATELIER_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBcFVebJn_5Yph_GcHWr8e0hADbfinFYtzC7-tbnkof6YDn2g4P9quCUMjFGJ-4uvPlWIxOteEgdigZP7WmFyPerif-nDF_SPnpGLnue-f4lO8I8wy8qfzf2mkkNsTK9CBIFYSf65MEbgRcsp2MlzsmzBasDkTtstbrrl8-uYqsmVjwJhJ-Q2olv59CH4RYVuxxsIWej8FZRqW0y6mcc_rl-VBcMyCj8Jmfl2I-MQM';

export const PORTRAIT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBtJej8wZluCL78M5WiM21_taNZcf6AWgdMVa6XeWzCnCTAOPoQ34VsgIyvmUZtG-MHhCKNPBNhR5xKJAa2Lzgbou5DG-LPGWjyagkRqbAzHTS7UBxHGNNd0iLPEAgYOO98BiJQRcLer7hbACbhoSBS5tTZAb4KMefK6b9RqyaVHFOYfA2q5RCKVYAD-B0gQHvdek_U96OG5FUoHAlVrrQouwfBSu9ZtuxGkKqPKrE';

const EXCALIBUR_FRAMES: ProjectGalleryFrame[] = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIMOB0pBFkPwgiHbG4g1rC2zyhccEYIWIBKbKTEWzi5eql_prjJgYpywC8T_Hxbkrl0rrGoQHEGj9Yll9dflC8UJuOxk0daGzbi5w7Gzb_OMSa2CjvkS30tjmLfFCvJWa3RI2rT_8Mt63bmXJRE8hatsy7M48dxjqic3zMgpbm3HNQ6T9TSAPv5YwfgXi7gItLwTI4hLs8xiME8W-kr9CM3b32AM37_cdWb3eyjXw',
    alt: 'Hard-bound blue book cover with vintage Joseon Dynasty regional boundary map and Korean typography',
    caption: '01 · Hardcover Boundary Map Edition',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnMVCrhAbJ4KL7qINhD6M1owpMXEdW_ZI27jIq1tLyFcJLo-Lz1EM22AANcbo_sX_lX7yRa63IFcSIltj2mmA9W82DsqcLi1lx-bIru4l6CYrG92zHMgTvff8c7jFE5dFPZwLAK7oqePmHqlryS6G_AZrRNNem_yg-rjyUPFCwLcxZCMK4QQAikmMq0Sr7pg7DoPzaxRH4yD-aipa1mt28VZQ_6crjUNWhlLWjVYs',
    alt: 'Monograph series book open spread showing delicate editorial typography and archival layout system',
    caption: '02 · Editorial Typography Spread',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzX6angicGw0Da-qtJzPIq_-C4x6VxzZO6icqOtRMmqSXyA0HHvVtxtxiyeOPeckQricGGGbOZrC8045Q-ettU-vHHLPfK-hBt1rHQ3Yw3kYdhNkEvzmfWvKbvM6jLhat3vWJtWfTK9Wly31e1ftAuk0A7WgVuQil1yXP1ZgBoyEFIz2jidVKBak6jFKfkD-eo0st-cVZoBZjWRo3HY2RReA8iOp0XQZSIGWIDntY',
    alt: 'Close-up detail of book spine embossed gold leaf lettering and fine binding thread',
    caption: '03 · Spine Foil & Thread Binding',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmRvW-DjFyLcsMo9qHiw1lkddVPsJoRQqMh810MiOjTFFwhGsiq9_WtSV4SX2NJUm6IIyHT4nbX6Tl4tayyTqxi6gdnlTexSgEy5HViRd4iSdy4RV-Do0pdLQh_GI9Aan9ii-6Lg-lIDvzPWIGCDd42SqiDhBw_VCMxOMl49VEPgdG1sk-3TfBB10x2QNxy7G-o1anPOxr_1fO0uor_CWIij3NekijJBtAn4Lctkc',
    alt: 'Multiple book copies arranged in geometric grid pattern on raw concrete surface',
    caption: '04 · Three-Volume Monograph Set',
  },
];

const LUMEN_COVER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCk3pTyJRbbkbMPlo08mGTSMB5aAfGf2xI7dPFO-T-NBKpzV3fach0cGqSEb9McPyvFqMpbv3oJZX_9HAobca4OfyM9CTNae1H7WC7BSUYPHxbhgKkI5BQe1KgfTVL-Akrcf0D8tNEiRnRiNjd7A0DyyQpFSHMNierDYejQsU-B2fr4Elk7ksJXGs5t8PhVnigqtPSa8FhPGEnNXLfR-FVXcReM0ZXHBxKZRnhZ4_E';
const ATELIER_COVER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCURAV48sAwkk6_D7R9ovvftBQYWRi6iSHmtPN-lMrHKExU_KraXC827is99y75ci-YwI7dDpDpXS8ug8PwJ2aYNWZvu3b92Ru1-J-839pMVby7bkcG6xjL1GAQ-SDWtKE2KUsQteAGlM37HGA7OAsp3-4QsNIVF0mSKRHx7wxLVK23UhkOAh0vkr5ooiLAXh0EXAEAoK2QmtHhXX6HAe8uTFFRTz1T6pTMTO9N8kk';
const JOSEON_COVER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCrGVO_7l7myZX3kNz9ZSlFaYr1cyjzjHV-WjzF_6V_TVvl_CAFY02aO0EVAMYjEkmYe-937Ydc8xbkjOqZ2BiP3lqLKoDR8UYFb5-nes-YacXa_ZREaSiJ-5fzaTKSwed0YY4f7H6Onlk5Y2x_kEIdDyHSWXWRqXUexFaMTE82FXRPNxfsAwr0NRoJ04sykEvQBAFgQUYheU_BsMX661HxF7O5NGizV9uZst24mDA';
const EXCALIBUR_COVER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDUwrZm4q7_LPhClAK2AF5ZMWrsKg45PwaSC5poW3o0skj4QvOJ91Hs96S8jhjSLni3QfPDak1mi1DtihkfoEvkZDUj0nE5PD3z618V6Itguc6YKuD8tcGIz8CcogWjzJ_GTeZkh9W3SOZxOD35LozkzrRtT0W6b9OBcbXMFODZpkBwpc-4-EmBzlrgf-8v0wxK_h4pkDRBdREeN3HzBAIuJDLPfi0UCm4VH80WLNo';
const SPACE_COVER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB02AGWqTfItD8GcpHoENGAD-tx-gR8PrOONtGajuwMt4NoA7TDK4JIBKAPY8GH4UwElfy1Jm4Dt6yBMdaTxVnC6ZmQC7O_7RRpT3fsR6KEr3U6Y-c34ZifBeAO7sHIJSXCuVby60odd7Meekg8mcotWVN907rQBKzcqJQ79IhL6CqxoyZ9eZEv3qkACQufeG2JsT20fNYjj65y8gKpilkqASatgrB7ERoR-2mbkcE';
const KINETIC_COVER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDKHAgI05LTZAHdlrFrAU1GIJ9Edsi84jIGNzcObPFZynBCBIjDpDotVoaLEX5EcguNp_BmByCCe8WDn_WgwOJZJyUnqBYQFitD0ttqERAYFxWmZYmo78GsZigNIYr-iFE7b7NF7kFnCUtBXcXSvnpM-wSHw31j4ixbxgBC977LNTC4AX5yCDtaw1Md21sv-jNaNv18J1d7IUL44e66E-0ICxLlqYLrNWoqXaZXQVo';

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'lumen',
    featured: true,
    categories: ['motion', 'video', 'branding'],
    dateLabel: '2026.04',
    badgeLabel: '2026.04 · Brand Film',
    eyebrow: '브랜드 필름 & 아이덴티티 / 2026.04',
    kicker: '2026.04 · Brand Film',
    title: '2026 LUMEN 브랜드 필름 & 아이덴티티',
    subtitle: 'Visual Architecture, Motion Graphics & Identity System',
    disciplineLabel: 'Motion · Film · Identity',
    role: '크리에이티브 디렉션 · 모션 디자인 · 사운드 믹싱',
    client: 'LUMEN Audio Systems',
    period: '2026.01 – 2026.04',
    tools: 'After Effects · Premiere Pro · Cinema 4D · Figma',
    desc: '미래형 음향 브랜드 LUMEN의 론칭을 위한 플래그십 비주얼 필름 및 인터랙티브 모션 아이덴티티 시스템을 총괄 기획·제작했습니다.',
    coverImage: LUMEN_COVER,
    coverAlt:
      'Cinematic brand film still showing glowing typography, sleek futuristic geometry, deep dark olive and amber light spill',
    modalActionIcon: 'play',
    gallery: [
      {
        url: LUMEN_COVER,
        alt: 'LUMEN flagship brand film title frame',
        caption: '01 · Keynote Film Opening Sequence',
      },
      {
        url: KINETIC_COVER,
        alt: 'LUMEN kinetic typographic motion study',
        caption: '02 · Acoustic Kinetic Type System',
      },
      {
        url: VISION_ATELIER_IMAGE,
        alt: 'LUMEN spatial installation lighting test',
        caption: '03 · Spatial Sound Gallery Light Study',
      },
      {
        url: HERO_ATMOSPHERE_IMAGE,
        alt: 'LUMEN atmospheric horizon backdrop frame',
        caption: '04 · Ambient Horizon Mood Frame',
      },
    ],
  },
  {
    id: 'atelier',
    featured: true,
    categories: ['branding', 'editorial'],
    dateLabel: '2026.02',
    badgeLabel: '2026.02 · Identity Design',
    eyebrow: '비주얼 아이덴티티 / 2026.02',
    kicker: '2026.02 · Identity Design',
    title: '아틀리에 베르그 (Atelier Berg) 시각 브랜딩',
    subtitle: 'Spatial Narrative, Custom Logotype & Brand Book',
    disciplineLabel: 'Branding · Stationery',
    role: '브랜드 전략 · 로고타입 디렉션 · 어플리케이션 시스템',
    client: 'Atelier Berg Architectural Studio',
    period: '2025.10 – 2026.02',
    tools: 'Illustrator · Photoshop · InDesign',
    desc: '스위스 알프스의 견고한 미학에서 영감을 받은 건축 스튜디오를 위해 절제된 타이포그래피와 자연 소재를 결합한 브랜드 경험을 완성했습니다.',
    coverImage: ATELIER_COVER,
    coverAlt:
      'High-end stationery mockup for Atelier Berg with embossed parchment paper, olive green envelopes, and brass paperweights',
    modalActionIcon: 'view',
    gallery: [
      {
        url: ATELIER_COVER,
        alt: 'Atelier Berg tactile stationery suite',
        caption: '01 · Embossed Parchment Stationery',
      },
      {
        url: SPACE_COVER,
        alt: 'Atelier Berg architectural monograph spread',
        caption: '02 · Studio Monograph Grid',
      },
      {
        url: VISION_ATELIER_IMAGE,
        alt: 'Atelier Berg concrete interior daylight study',
        caption: '03 · Spatial Materiality Study',
      },
      {
        url: EXCALIBUR_FRAMES[1].url,
        alt: 'Atelier Berg archival paper specification',
        caption: '04 · Brand Book Specification',
      },
    ],
  },
  {
    id: 'joseon',
    featured: false,
    categories: ['editorial'],
    dateLabel: '2025.11',
    badgeLabel: '2025.11',
    eyebrow: '기록 도서 편집 / 2025.11',
    kicker: '도서 · 편집 디렉션',
    title: '조선왕조 궁중의례 아카이브 북',
    subtitle: 'Editorial Grid & Historical Preservation',
    disciplineLabel: 'Editorial Grid',
    role: '표지 디자인 · 고문서 디지털 복원 · 본문 레이아웃',
    client: '전통문화연구재단',
    period: '2025.07 – 2025.11',
    tools: 'Photoshop · Illustrator · InDesign',
    desc: '수백 년 역사의 궁중 의례도를 현대 독자가 직관적으로 감상할 수 있도록 정교한 타이포그래픽 여백과 컬러 인덱스를 적용했습니다.',
    coverImage: JOSEON_COVER,
    coverAlt:
      'Editorial book cover photography of historical Korean royal court records with dark royal blue binding and gold hanja typography',
    modalActionIcon: 'view',
    gallery: [
      {
        url: JOSEON_COVER,
        alt: 'Royal court records hardcover exterior',
        caption: '01 · Royal Indigo Cloth Binding',
      },
      ...EXCALIBUR_FRAMES.slice(1),
    ],
  },
  {
    id: 'excalibur',
    featured: false,
    categories: ['branding', 'editorial'],
    dateLabel: '2026.05',
    badgeLabel: 'Featured',
    eyebrow: '시리즈 책 / 2026.05',
    kicker: '비주얼 시스템 · 시리즈 책',
    title: '2027 EXCALIBUR 브랜드 리뉴얼',
    subtitle: 'Series Monograph & Archival System',
    disciplineLabel: 'Series · Layout',
    role: '표지 디자인 · 내지 편집 · 레이아웃',
    client: '유니온 출판사 / 연구소',
    period: '2025.08 – 2026.05',
    tools: 'hwp(한글) · Illustrator · Photoshop',
    desc: '방대한 역사 연구 사료와 고지도를 바탕으로 웅장한 코발트 블루 컬러와 절제된 폰트 조판을 결합한 3권 1세트 아카이브 시리즈입니다.',
    coverImage: EXCALIBUR_COVER,
    coverAlt:
      'Monograph series book set on studio background, deep cobalt blue covers with white Korean typography and vintage territory maps',
    modalActionIcon: 'view',
    gallery: EXCALIBUR_FRAMES,
  },
  {
    id: 'space',
    featured: false,
    categories: ['editorial'],
    dateLabel: '2025.05',
    badgeLabel: '2025.05',
    eyebrow: '건축 매거진 / 2025.05',
    kicker: '건축 매거진 · 에디토리얼',
    title: '공간과 형태: 건축 에디토리얼',
    subtitle: 'Swiss 12-Column Architectural Mook',
    disciplineLabel: 'Spatial Design',
    role: '아트 디렉션 · 포토 큐레이션 · 편집 그리드',
    client: '월간 공간 건축 포럼',
    period: '2025.02 – 2025.05',
    tools: 'InDesign · Photoshop · Lightroom',
    desc: '콘크리트 구조물의 텍스처와 빛의 조응을 12컬럼의 스위스 그리드로 환원해 시각적 침묵을 연출한 독립 건축 무크지입니다.',
    coverImage: SPACE_COVER,
    coverAlt:
      'Contemporary architecture monograph open spread showing clean concrete structures and asymmetrical editorial magazine layout',
    modalActionIcon: 'view',
    gallery: [
      {
        url: SPACE_COVER,
        alt: 'Architecture monograph open spread',
        caption: '01 · 12-Column Swiss Spread',
      },
      {
        url: VISION_ATELIER_IMAGE,
        alt: 'Minimalist concrete interior photography',
        caption: '02 · Daylight Concrete Plate',
      },
      {
        url: ATELIER_COVER,
        alt: 'Editorial print material pairing',
        caption: '03 · Uncoated Paper Stock Study',
      },
      {
        url: EXCALIBUR_FRAMES[1].url,
        alt: 'Margin proportion study',
        caption: '04 · Typographic Margin Spec',
      },
    ],
  },
  {
    id: 'kinetic',
    featured: false,
    categories: ['motion', 'branding'],
    dateLabel: '2025.03',
    badgeLabel: '2025.03',
    eyebrow: '실험 포스터 아트 / 2025.03',
    kicker: '그래픽 아트 · 모션 포스터',
    title: 'KINETIC RESONANCE 포스터',
    subtitle: 'Experimental Liquid Chrome Typography',
    disciplineLabel: 'Kinetic Typography',
    role: '모션 그래픽스 · 타이포그래피 실험 · 사운드 싱크',
    client: 'Seoul Graphic Design Week',
    period: '2025.01 – 2025.03',
    tools: 'After Effects · Cinema 4D · Illustrator',
    desc: '유동적인 메탈릭 타이포그래피와 키네틱 리듬을 활용하여 관객의 인터랙션에 반응하는 실험적 디지털 포스터 전시작입니다.',
    coverImage: KINETIC_COVER,
    coverAlt:
      'Experimental kinetic typography poster with liquid chrome letters and deep olive green gradient backdrop',
    modalActionIcon: 'play',
    gallery: [
      {
        url: KINETIC_COVER,
        alt: 'Kinetic Resonance main poster',
        caption: '01 · Exhibition Key Visual',
      },
      {
        url: LUMEN_COVER,
        alt: 'Kinetic light refraction study',
        caption: '02 · Motion Frame Breakdown',
      },
      {
        url: HERO_ATMOSPHERE_IMAGE,
        alt: 'Olive tonal texture baseline',
        caption: '03 · Olive Gradient Calibration',
      },
      {
        url: SPACE_COVER,
        alt: 'Exhibition wall layout',
        caption: '04 · Gallery Wall Scale Mockup',
      },
    ],
  },
];

export const VISION_PILLARS: VisionPillar[] = [
  {
    index: '01',
    symbol: '∗',
    title: 'CREATE',
    subtitle: 'Discovery & Core Aesthetics',
    description:
      '새로운 시각으로 브랜드의 잠재된 본질과 독창적인 가능성을 발견하고, 감도 높은 조형 언어로 형상화합니다.',
    tags: 'Exploration · Form',
  },
  {
    index: '02',
    symbol: '↗',
    title: 'CONNECT',
    subtitle: 'Resonance & Kinetic Flow',
    description:
      '정지된 프레임과 유기적 움직임을 정교하게 연결하여, 관객의 시선을 머물게 하고 깊은 정서적 공감을 이끌어냅니다.',
    tags: 'Narrative · Motion',
  },
  {
    index: '03',
    symbol: '✦',
    title: 'GROW',
    subtitle: 'Evolution & Lasting Impact',
    description:
      '단발성 시각 효과에 머무르지 않고, 브랜드의 지속 가능한 시스템을 구축하여 장기적인 비즈니스 임팩트를 견인합니다.',
    tags: 'Ecosystem · Scale',
  },
];

export const TOOLS_LIST = [
  'Figma',
  'Illustrator',
  'Photoshop',
  'After Effects',
  'Premiere Pro',
  'Cinema 4D',
];

export const DISCIPLINE_METRICS: DisciplineMetric[] = [
  {label: 'Brand Identity', value: 95, tone: 'primary'},
  {label: 'Motion Graphics', value: 90, tone: 'secondary'},
  {label: 'Typography & Editorial', value: 92, tone: 'primary'},
  {label: 'Art Direction', value: 88, tone: 'secondary'},
];

export const EXPERIENCE_TIMELINE: TimelineEntry[] = [
  {
    period: '2024.03 – PRESENT',
    location: 'SEOUL',
    title: '스튜디오 에이치 (Studio H)',
    subtitle: '리드 비주얼 & 브랜드 디자이너',
  },
  {
    period: '2021.06 – 2024.02',
    location: 'SEOUL',
    title: '(주)크리에이티브랩',
    subtitle: '모션 & 브랜드 디자이너',
  },
  {
    period: '2019.03 – 2021.05',
    location: 'SEOUL',
    title: '아틀리에 모노 (Atelier Mono)',
    subtitle: '그래픽 & 에디토리얼 디자이너',
  },
];

export const CERTIFICATIONS_LIST: TimelineEntry[] = [
  {
    period: '2025.10',
    title: 'GTQi 그래픽기술자격 1급',
    subtitle: '한국생산성본부 (KPC)',
  },
  {
    period: '2023.08',
    title: '시각디자인기사',
    subtitle: '한국산업인력공단',
  },
  {
    period: '2022.04',
    title: 'ACA Premiere & After Effects Professional',
    subtitle: 'Adobe Certified Associate',
  },
];
