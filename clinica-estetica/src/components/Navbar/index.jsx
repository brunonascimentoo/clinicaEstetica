import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.png'

export function Navbar() {

  return (
    <div className="py-6 w-full px-2 bg-rose-300">
      <div className="min-[320px]:flex min-[320px]:flex-col min-[320px]:items-center min-[320px]:justify-center min-[1024px]:items-center min-[1024px]:flex-row min-[1024px]:justify-between px-6">
        <div>
          <Link to={"/"}>
            <img className="w-20" src={logo} />
          </Link>
        </div>
        <div className="">
          <nav className="">
            <ul className="min-[640px]:gap-12 gap-6 flex cursor-pointer text-md text-white font-bold">
              <Link to={"/cadastro"}>Cadastro</Link>
              <Link to={"/compras"}>Compras</Link>
              <Link to={"/vendas"}>Vendas</Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}