import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft, faArrowRight, faArrowRightArrowLeft, faArrowTurnDown, faAward, faBars, faBolt,
  faBook, faBookBookmark, faBookOpen, faBookmark, faCheck, faCheckCircle,
  faChevronRight, faCircle, faCircleExclamation, faCircleInfo, faClock,
  faCode, faCopy, faDesktop, faEnvelope, faExclamationTriangle, faEye,
  faEyeSlash, faFileLines, faFire, faForward, faGaugeHigh, faHeadphones,
  faHouse, faKeyboard, faLayerGroup, faLightbulb, faList, faMagnifyingGlass,
  faMicrochip, faMoon, faPalette, faPause, faPen, faPlay, faQuestionCircle,
  faQuoteLeft, faRotateLeft, faRss, faSlidersH, faSpinner, faSquare, faStop,
  faSun, faTableColumns, faTextHeight, faTrash, faVolumeHigh, faWandMagicSparkles,
  faXmark, faBackward, faBullseye, faSliders, faGear,
} from '@fortawesome/free-solid-svg-icons'
// Both sun variants read as a gear at header size — the rays are too fine to
// resolve. faCircleHalfStroke is unambiguous and is the conventional
// light/dark toggle glyph, so it is used for the mode switch instead.
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

/**
 * Icon registry.
 *
 * Content files reference icons by string name so they stay pure data with no
 * imports from the UI layer. Components look names up here.
 */
export const ICONS = {
  // Courses
  brain: faMicrochip,
  robot: faLayerGroup,
  sparkles: faWandMagicSparkles,
  book: faBook,
  code: faCode,
  chart: faGaugeHigh,

  // Content blocks
  definition: faBookBookmark,
  analogy: faLightbulb,
  exercise: faPen,
  recap: faBackward,
  keyPoints: faBolt,
  quiz: faQuestionCircle,
  quote: faQuoteLeft,
  compare: faArrowRightArrowLeft,

  // Callouts
  info: faCircleInfo,
  tip: faLightbulb,
  warning: faExclamationTriangle,
  danger: faCircleExclamation,
  success: faCheckCircle,

  // UI
  search: faMagnifyingGlass,
  close: faXmark,
  menu: faBars,
  check: faCheck,
  circle: faCircle,
  chevronRight: faChevronRight,
  arrowLeft: faArrowLeft,
  arrowRight: faArrowRight,
  /** "Press enter to open" affordance in the search dialog. */
  enter: faArrowTurnDown,
  clock: faClock,
  bookOpen: faBookOpen,
  bookmark: faBookmark,
  list: faList,
  copy: faCopy,
  trash: faTrash,
  reset: faRotateLeft,
  filters: faSlidersH,
  sliders: faSliders,
  settings: faGear,
  home: faHouse,
  file: faFileLines,
  target: faBullseye,
  award: faAward,
  fire: faFire,
  eye: faEye,
  eyeSlash: faEyeSlash,
  spinner: faSpinner,
  table: faTableColumns,
  keyboard: faKeyboard,

  // Theme
  /** Header light/dark switch — legible at 16px, unlike a sun. */
  themeToggle: faCircleHalfStroke,
  /** Used in the labelled mode picker, where size and label disambiguate. */
  sun: faSun,
  moon: faMoon,
  desktop: faDesktop,
  palette: faPalette,
  textSize: faTextHeight,

  // Audio
  headphones: faHeadphones,
  play: faPlay,
  pause: faPause,
  stop: faStop,
  forward: faForward,
  backward: faBackward,
  volume: faVolumeHigh,
  square: faSquare,

  // Social
  mail: faEnvelope,
  rss: faRss,
} as const satisfies Record<string, IconDefinition>

export type IconName = keyof typeof ICONS

export const getIcon = (name: IconName): IconDefinition => ICONS[name]
