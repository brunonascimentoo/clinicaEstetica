import { Navbar } from "../../components/Navbar"

export function Vendas() {
  return (
    <>
      <Navbar />
      <div className="w-full p-4 mt-14">
        <form action="#">
          <div className="w-full flex flex-col">
            <div className="flex flex-wrap min-[540px]:justify-between mb-4">
              <label className="mt-1" htmlFor="produto">ID venda</label>
              <input className="w-full min-[540px]:w-[400px] min-[540px]:ml-2 max-[540px]:mt-4 min-[820px]:w-[640px] min-[1024px]:w-[935px] outline-none border border-solid border-rose-200 rounded-sm" type="text" id="produto" name="produto" />
            </div>
          </div>
          <div className="flex flex-wrap min-[540px]:justify-between">
            <label className="mt-2" htmlFor="quantidade">Cliente</label>
            <input className="w-full min-[540px]:w-[400px] min-[540px]:ml-2 max-[540px]:mt-4 min-[820px]:w-[640px] min-[1024px]:w-[935px] outline-none border border-solid border-rose-200 rounded-sm" type="text" id="quantidade" name="quantidade" />
          </div>
          <div className="mt-4 flex flex-wrap min-[540px]:justify-between">
            <label className="mt-2" htmlFor="custo">Valor total venda</label>
            <input className="w-full min-[540px]:w-[400px] min-[540px]:ml-2 max-[540px]:mt-4 min-[820px]:w-[640px] min-[1024px]:w-[935px] outline-none border border-solid border-rose-200 rounded-sm" type="text" id="custo" name="custo" />
          </div>
          <div className=" flex justify-between w-full flex-wrap min-[540px]:flex-nowrap py-6">
            <div>
              <p>Forma Pagamento</p>
            </div>
            <div className="flex gap-2 pt-4 pr-4 text-[14px] min-[540px]:pt-0 min-[540px]:gap-4 min-[820px]:gap-12  min-[1024px]:mr-10 min-[1024px]:gap-20">
              <label htmlFor="avon">Débito</label>
              <input type="checkbox" id="avon" name="avon" />
              <label htmlFor="natura">Crédito</label>
              <input type="checkbox" id="natura" name="natura" />
              <label htmlFor="boticario">Pix</label>
              <input type="checkbox" id="boticario" name="boticario" />
              <label htmlFor="jequiti">Dinheiro</label>
              <input type="checkbox" id="jequiti" name="jequiti" />
            </div>

          </div>
        </form>
      </div>
    </>
  )

}