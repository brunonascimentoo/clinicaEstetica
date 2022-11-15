import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoad(false);
  }, [])

  const login = (email, password) => {
    console.log('login auth', { email, password })


    const loggedUser = {
      id: '123',
      email
    }

    localStorage.setItem("user", JSON.stringify(loggedUser))

    if (password === '123') {
      setUser(loggedUser)
      navigate('/')
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login')
    console.log('logout')
  }

  return (
    <AuthContext.Provider value={{
      authenticated:
        !!user, user, load, login, logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}