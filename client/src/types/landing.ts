import { LinkProps, Btn } from ".";

export interface ContactProps{
  header: string,
  content: string,
  image: string,
  contacts: string[][]
}


export interface Option{
  id: string,
  standard?: boolean,
  title: string,
  description: string, 
  image?: string,
  minimizeImage?: boolean,
  clickable?: boolean,
  charLimit?: number,
  button?: Btn
}

export interface SystemCheckProps {
  showHeader: true,
}

export interface CTAProps{
  mission: string,
  image: string,
  url: LinkProps
}

export interface SummaryProps {
  content: string,
   url: LinkProps
}

export interface OverviewItem{
  type: string,
  options: Option
}

export interface OverviewProps {
  overview: OverviewItem[]
}

export interface MemberProp{
    image: string,
    avatar: string,
    name: string,
    position: string,
    bio: string,
    responsibilities: string,
    manages: string 
}

export interface TimerPhase {
  active: boolean,
  label: string,
  tokenPrice: number,
}

export interface TimerProps {
  announcement: string,
  phases: TimerPhase[],
  date: Date
}

export interface TeamProps {
  header: string,
  members: MemberProp[]
}

export interface Samartchain {
  type: string,
  options: Option
}

export interface BlockchainProps{
  header: string,
  smartchain: Samartchain[]
}

export interface Button {
  text: string
}

export interface Distribution {
    allocation: string,
    percentage: number,
    color: string,
}

export interface ChartData {
  label: string,
  totalSupply: number,
  percentageArr: number[],
  allocationArr: string[],
  allocation: string[],
  distribution:  Distribution[]
}

export interface TokenOption{
  standard: boolean,
  chart: {
    type: string,
  },
  table: {
    type: string,
  },
}

export interface TokenAllocationProps {
  header: string,
  type: string,
  icons: string[],
  options: TokenOption
  body: string,
  button: Button
}

export interface Roadmap {
  timePeriod: string,
  months: string,
  description: string 
}

export interface RoadmapProps{
  header: string,
  roadmaps: Roadmap[]
}

export interface DownloadWhitepaperProps{
  type: string,
  options: Option
}

export interface MissionProps{
  header: string,
  content: string,
  phases: Option[]
}

export interface Landing{ 
  cta: CTAProps, 
  summary: SummaryProps, 
  overview: OverviewProps, 
  timer: TimerProps, 
  blockchain: BlockchainProps, 
  tokenAllocation: TokenAllocationProps, 
  downloadWhitepaper: DownloadWhitepaperProps, 
  team: TeamProps, 
  roadMap: RoadmapProps, 
  mission: MissionProps,
  contact: ContactProps
}

export interface LandingProps{
  landing: Landing,
  socialLinks: string[]
}