import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";

export function Navbar() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="py-4 w-full px-2 bg-rose-300">
      <div className=" px-4 flex flex-col items-center justify-center min-[1024px]:items-center min-[1024px]:flex-row min-[1024px]:justify-between">
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
              <div id="btn">
                <li><button onClick={handleLogout}>sair</button></li>

              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}