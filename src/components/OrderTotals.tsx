import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
    placerOrder: () => void
}

export default function OrderTotals({ order, tip, placerOrder }: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-md border border-gray-200 space-y-4">
                <h2 className="text-2xl font-extrabold text-gray-800 border-b pb-2">
                    Totales y propina
                </h2>

                <div className="flex justify-between text-gray-600">
                    <span>Subtotal a pagar:</span>
                    <span className="font-semibold text-gray-800">{formatCurrency(subtotalAmount)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                    <span>Propina:</span>
                    <span className="font-semibold text-emerald-600">{formatCurrency(tipAmount)}</span>
                </div>

                <div className="flex justify-between text-lg font-bold text-gray-800 pt-3 border-t">
                    <span>Total a pagar:</span>
                    <span className="text-emerald-700">{formatCurrency(totalAmount)}</span>
                </div>

                <div className="mt-6 ">
                    <button
                        className={`
                                w-full 
                                ${totalAmount === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg hover:scale-[1.02]'} 
                                uppercase 
                                font-bold 
                                tracking-wide 
                                py-3 
                                rounded-xl 
                                mt-6 
                                shadow-md 
                                transition-all 
                                duration-300 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-offset-2 
                                focus:ring-black
                            `}
                        disabled={totalAmount === 0}
                        onClick={placerOrder}
                    >
                        Guardar Orden
                    </button>

                </div>
            </div>
        </>
    )
}
