export interface ProjectShort {
  title: string
  description: string
  image: string
  'development-tools': string[]
  role: string
  url?: string
  github?: string
  dateStart: string
  dateEnd?: string
  type: 'pet' | 'commercial' | 'training'
}