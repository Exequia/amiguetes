export interface Section {
  id: number
  key: string
  routerLink: string
  items: Array<Item>
}

export interface Item {
  id: string
  date: Date
  title: string
  link: string
  summary: string
}
