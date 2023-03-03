import { Dispatch, ReactNode } from 'react'

export type TariffTypes = {
  id: number
  icon: ReactNode
  title: string
  price: number
  year: number
  check: ReactNode
  advantage: Array<string>
  popular: boolean
  sale: boolean
}

export type CardsType = {
  tariff: TariffTypes
  isOn: boolean
  cardId: number
  activeCard: number | null
  setActiveCard: Dispatch<any>
}

export type PComponentType = {
  isOn: boolean
}
