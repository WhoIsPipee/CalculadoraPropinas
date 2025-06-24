import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
  order: OrderItem[]
  removeItem: (id : MenuItem['id']) => void

}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <h2 className="text-4xl font-black text-gray-800 transition duration-200 ease-in-out hover:text-orange-500">
        Consumo
      </h2>

      <div className="space-y-4 mt-6">
        {order.length === 0 ? (
          <p className="text-center text-gray-500 italic">La orden está vacía</p>
        ) : (
          order.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.name}
                    <span className="ml-2 text-sm text-gray-500">
                      {formatCurrency(item.price)}
                    </span>
                  </p>
                  <p className="text-base text-gray-700 mt-1">
                    <span className="font-bold text-gray-900">Cantidad:</span> {item.quantity}
                    <span className="ml-2 text-emerald-600 font-semibold">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </p>
                </div>

                <button
                  className="
                    bg-red-500 
                    hover:bg-red-600 
                    text-white 
                    px-4 py-1 
                    rounded-full 
                    text-sm 
                    font-semibold 
                    shadow 
                    transition-all 
                    duration-200 
                    hover:scale-105 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-red-300"
                    onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>

  )
}
