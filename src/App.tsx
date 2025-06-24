import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import userOrder from "./hooks/useOrder"


function App() {
  
  const {order, addItem, removeItem, tip, setTip, placerOrder } = userOrder()


  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black font-mono"> <span className="text-white ">Calculadora</span> de propinas y consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black transition duration-200 ease-in-out hover:text-orange-500"> menú </h2>
          <div className="space-y-2 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-x-10">
          <OrderContents
            order ={order}
            removeItem = {removeItem}
          />
          <TipPercentageForm
            setTip = {setTip}
            tip={tip}
          
          />
          <OrderTotals
            order = {order}
            tip = {tip}
            placerOrder={placerOrder}

          />

          
        </div>


      </main>
    </>
  )
}

export default App
