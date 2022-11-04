import React, { useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

interface ProductQuantityFormProps {
  max: number;
}

const ProductQuantityForm = ({ max }: ProductQuantityFormProps) => {
  const [qty, setQty] = useState(1);

  // Change Quantity
  const changeQtyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value && value !== 0 && value <= max) {
      setQty(value);
    }

    if (value > max) {
      setQty(max);
    }
  };

  return (
    <div className='flex flex-col items-stretch my-12 space-y-3 lg:flex-row lg:space-y-0'>
      {/* Input Container */}
      <div className='flex justify-between w-full text-sm bg-white border lg:w-52 border-stone-300 text-stone-500'>
        <span className='px-3 py-4'>تعداد</span>

        {/* Counter Container */}
        <div className='flex items-center pl-3 space-between space-s-2'>
          <AiOutlineCaretRight
            className='cursor-pointer'
            onClick={() => setQty(qty - 1 || 1)}
          />
          <input
            type='text'
            value={qty}
            onChange={changeQtyHandler}
            className='w-6 h-full text-center outline-none focus:bg-stone-100'
          />
          <AiOutlineCaretLeft
            className='cursor-pointer'
            onClick={() => setQty((currQty) => (currQty < max ? qty + 1 : qty))}
          />
        </div>
      </div>
      {/* Button */}
      <button className='px-10 py-4 text-white transition bg-black whitespace-nowrap hover:bg-black/80'>
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default ProductQuantityForm;
