import { useState, useContext } from "react"
import { AuthContext } from "../../Contexts/Auth";

export function Signin() {
  const { authenticated, login } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", { email, password })
    login(email, password);
  }

  return (
    <div className="w-full h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center gap-10 w-[90%] max-w-[500px] h-[80vh] p-6 bg-rose-300 rounded-md shadow-cardShadow">
        <dir className="w-full p-0">
          <h1 className=" text-gray-100 text-md text-center uppercase">Acessar o Sistema</h1>
        </dir>
        <div className="w-full max-w-lg">
          <form autoComplete="nope" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="text-gray-50" htmlFor="user">E-mail</label>
              <input className="w-full outline-none px-2 py-1 rounded-md text-[12px]"
                id="email"
                type="text"
                name="user"
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="text-gray-50" htmlFor="password">Senha</label>
              <input className="outline-none px-2 py-1 rounded-md w-full"
                id="password"
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="w-full text-center">
              <div className="w-full bg-white text-rose-300 font-bold rounded-md p-2 cursor-pointer">
                <button className="outline-none w-full">Entrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}