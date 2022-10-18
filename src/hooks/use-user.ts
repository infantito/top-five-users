import * as React from 'react'
import { useParams } from 'react-router-dom'

import type { User } from 'typings'

type UseUserState = {
  status: 'loading' | 'success' | 'error'
  user: User
}

const useUser = () => {
  const { username } = useParams()

  const [state, setState] = React.useState<UseUserState>({
    status: 'loading',
    user: null,
  })

  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
      })

      const user = await response.json()

      setState({
        status: 'success',
        user,
      })
    } catch {
      setState({
        status: 'error',
        user: null,
      })
    }
  }

  React.useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export default useUser
