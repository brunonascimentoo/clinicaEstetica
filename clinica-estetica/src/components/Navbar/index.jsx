import { Link } from "react-router-dom"

export function Navbar() {

  return (
    <div className="py-6 w-full h-[90px] bg-rose-200">
      <div className="min-[320px]:flex min-[320px]:flex-col min-[320px]:items-center min-[320px]:justify-center min-[1024px]:items-center min-[1024px]:flex-row min-[1024px]:justify-between px-6">
        <div>
          <Link to={"/"}>
            <h1 className="whitespace-nowrap text-lg font-bold text-rose-600 cursor-pointer">Saúde em Foco</h1>
          </Link>
        </div>
        <div className="">
          <nav className="">
            <ul className="min-[640px]:gap-12 gap-6 flex cursor-pointer text-md text-rose-400">
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