import React from 'react'
import ProductThumbnail from '../../assets/product-thumbnail.png'
import Remove from '../../assets/remove.svg'
import Add from '../../assets/add.svg'

const CartCard = () => {
    return (
        <div className='flex p-6 bg-white rounded-md justify-between items-center drop-shadow-[0_0_8px_rgba(115,115,115,0.25)]'>


            <div className='flex gap-5'>
                <input type="checkbox" name="" id="" />
                <img className='size-16 rounded-md object-cover' src={ProductThumbnail} alt="" />
                <div className='flex flex-col gap-1 justify-center'>
                    <p className='font-medium text-base'>Men's formal suit - Black</p>
                    <p className=' font-normal text-xs text-[#9b9b9b]'>Zalora Cloth</p>
                </div>
            </div>

            <div className='flex gap-12 items-center'>
                <div className='flex gap-4 items-center'>
                    <img className='size-9' src={Remove} alt="" />
                    <p className='font-medium text-base text-[#222222]'>1</p>
                    <img className='size-9' src={Add} alt="" />
                </div>

                <p className='font-semibold text-base text-[#222222]'>$ 20.00</p>
            </div>
        </div>
    )
}

export default CartCard