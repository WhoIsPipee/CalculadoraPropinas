import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>> 
    tip: number
}
export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-4xl">Propina: </h3>

            <form className="">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="group relative mt-6">
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            className="peer hidden"
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                        <label
                            htmlFor={tipOption.id}
                            className="
                                block 
                                cursor-pointer 
                                rounded-xl 
                                border 
                                border-gray-300 
                                bg-white 
                                px-5 py-3 
                                text-center 
                                text-gray-800 
                                font-semibold 
                                shadow-sm 
                                transition 
                                duration-300 
                                hover:border-emerald-500 
                                hover:shadow-md 
                                peer-checked:border-emerald-600 
                                peer-checked:bg-emerald-50 
                                peer-checked:text-emerald-800
                                                                "
                        >
                            {tipOption.label}
                        </label>
                    </div>

                ))}


            </form>
        </div>
    )
}
