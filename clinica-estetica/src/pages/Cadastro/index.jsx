export function Cadastro() {
  return (
    <>
      <div className="p-4">
        <div className="w-full h-[55vh] min-[1016px]:h-[55vh] min-[1036px]:h-[45vh] min-[1052px]:h-[35vh]">
          <form className="flex flex-col" action="#">
            <div className="">
              <div className="flex flex-wrap min-[640px]:justify-between">
                <label className="mt-2" htmlFor="produto">Produto</label>
                <input className="w-[900px] ml-1 mt-2 outline-none border border-solid border-rose-200 rounded-sm" type="text" id="produto" name="produto" />
              </div>
              <div className="flex flex-wrap min-[640px]:justify-between">
                <label className="mt-2" htmlFor="idProduto">ID Produto</label>
                <input className="w-[900px] ml-1 mt-2 outline-none border border-solid border-rose-200 rounded-sm" type="text" id="idProduto" name="idProduto" />
              </div>
              <div className="flex flex-wrap min-[640px]:justify-between">
                <label className="mt-2" htmlFor="quantidade">Quantidade</label>
                <input className="w-[900px] ml-1 mt-2 outline-none border border-solid border-rose-200 rounded-sm" type="text" id="quantidade" name="quantidade" />
              </div>
              <div className="flex flex-wrap min-[640px]:justify-between">
                <label className="mt-2" htmlFor="custo">Valor Custo</label>
                <input className="w-[900px] ml-1 mt-2 outline-none border border-solid border-rose-200 rounded-sm" type="text" id="custo" name="custo" />
              </div>
              <div className="flex flex-wrap min-[640px]:justify-between">
                <label className="mt-2" htmlFor="custoVenda">Valor Venda</label>
                <input className="w-[900px] ml-1 mt-2 outline-none border border-solid border-rose-200 rounded-sm" type="text" id="custoVenda" name="custoVenda" />
              </div>
            </div>
          </form>
        </div>
        <div className="w-full h-[45vh] ">
          <div className="flex gap-4">
            <button className="outline-none w-[100px] h-10 bg-rose-800 rounded-sm text-white text-[12px] font-bold min-[640px]:text-[14px]">Salvar</button>
            <button className="outline-none w-[100px] h-10 bg-gray-300 rounded-sm text-white text-[12px] font-bold min-[640px]:text-[14px]">Cancelar</button>
          </div>
          <div className="flex gap-4 py-4">
            <button className="outline-none w-[90px] h-10 bg-gray-300 rounded-sm text-white p-1 text-[12px] font-bold min-[640px]:text-[14px]">Pesquisar</button>
            <button className="outline-none w-[90px] h-10 bg-gray-300 rounded-sm text-white p-1 text-[12px] font-bold min-[640px]:text-[14px]">Novo</button>
            <button className="outline-none w-[90px] h-10 bg-gray-300 rounded-sm text-white p-1 text-[12px] font-bold min-[640px]:text-[14px]">Editar</button>
            <button className="outline-none w-[90px] h-10 bg-gray-300 rounded-sm text-white p-1 text-[12px] font-bold min-[640px]:text-[14px]">Deletar</button>
          </div>
          <div>
            <table className="border-collapse m-0 p-0 w-full justify-between">
              <thead className="text-left font-bold">
                <tr className="text-left border-b border-solid border-rose-200">
                  <th className="pr-1">id</th>
                  <th >produto</th>
                  <th >quantidade</th>
                  <th >custo</th>
                  <th >venda</th>
                  <th >tipo</th>
                </tr>
              </thead>
              <tbody className="border-b border-solid border-rose-200">
                <tr className="text-left ">
                  <td className="py-2">1</td>
                  <td className="py-2">ração</td>
                  <td className="py-2">20</td>
                  <td className="py-2">15.00</td>
                  <td className="py-2">30.00</td>
                  <td className="py-2">creme</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}