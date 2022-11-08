import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Cadastro } from './pages/Cadastro'
import { Compras } from './pages/Compras'
import { Vendas } from './pages/Vendas'
import { Home } from './pages/Home'

export function App() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </section>
      <main>
        <section>
          <Routes>
            <Route path={'/cadastro'} element={<Cadastro />} />
          </Routes>
        </section>
        <section>
          <Routes>
            <Route path={'/compras'} element={<Compras />} />
          </Routes>
        </section>
        <section>
          <Routes>
            <Route path={'/vendas'} element={<Vendas />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}