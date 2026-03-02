import {useState, useContext, createContext} from 'react'

const AuthContext  = createContext()
export const AuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('access'))
  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
export {AuthContext};