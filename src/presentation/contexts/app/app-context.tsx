import { Account } from '@/domain/models'
import { createContext } from 'react'
import { useContext } from 'react'

type Props = {
  setCurrentSession?: (session_id: string | null) => void
  getCurrentSession?: () => string
  setCurrentAccount?: (account: Account.Current | null) => void
  getCurrentAccount?: () => Account.Current
  setRequestToken?: (session_id: string | null) => void
  getRequestToken?: () => string
}

const Context = createContext<Props>({})

export const { Provider: AppProvider } = Context

export const useAppContext = (): Props => {
  const context = useContext(Context)

  return context
}
