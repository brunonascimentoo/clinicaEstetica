import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/Home'
import { Cadastro } from './pages/Cadastro'
import { Compras } from './pages/Compras'
import { Vendas } from './pages/Vendas'
import { Signin } from './pages/Signin'
import { AuthProvider, AuthContext } from './Contexts/Auth'

export const AppRoutes = () => {

  const Private = ({ children }) => {
    const { authenticated, load } = useContext(AuthContext);

    if (load) {
      return <div className="flex justify-center items-center w-full h-[500px]"><h1>Carregando...</h1></div>
    }

    if (!authenticated) {
      return <Navigate to={'/login'} />
    }

    return children;
  }

  return (

    <AuthProvider>
      <Routes>

        <Route path='/' element={<Private><Home /> </Private>} />
        <Route path='/login' element={<Signin />} />
        <Route path='/cadastro' element={<Private><Cadastro /></Private>} />
        <Route path='/compras' element={<Private><Compras /> </Private>} />
        <Route path='/vendas' element={<Private><Vendas /> </Private>} />

      </Routes>
    </AuthProvider>

  )
}