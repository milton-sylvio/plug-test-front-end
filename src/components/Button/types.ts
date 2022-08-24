import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  isLoading?: boolean
  children: React.ReactNode
}
