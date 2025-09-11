import React, { useState } from 'react'
import Button from '../Button'

const ViewDetails = ( { product, onBack }) => {
    const [amount, setAmount] = useState(product.price)
    const [count, setCount] = useState(1)
    const incPrice = (() => {
        setAmount ( prev => prev * 2)
        setCount (prev => prev + 1)
    })
    const decPrice = (() => {
        setAmount ( prev => (prev > product.price ? prev / 2 : product.price))
        setCount (prev => prev - 1)
    })
  return (
    <>
        <div className="flex">
            <div className="flex-1">
                <Button onClick={onBack} text={'Back'} />
                <img src={product.images[0]} alt="" />
            </div>
            <div className="flex-1">
                <h1 className='font-semibold mb-4 text-2xl'>{product.title}</h1>
                <p>{product.description}</p>
                <p className='font-bold text-lg mt-4'>$ {amount}</p>

                <div className="flex max-w-[150px] border border-amber-300 rounded-md px-4 py-1">
                    <div onClick={decPrice} className="minus cursor-pointer text-2xl">-</div>
                    <input type="text" className='focus-within:outline-0 text-center w-auto max-w-[100px] font-bold' value={count} />
                    <div onClick={incPrice} className="inc cursor-pointer text-xl">+</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewDetails