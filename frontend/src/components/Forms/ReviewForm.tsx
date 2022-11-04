import React, { useState } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);

  const ratingHandler = (e: React.MouseEvent) => {
    const element = (e.target as Element).closest('div') as HTMLElement;
    const value = parseInt(element.dataset.value ?? '1');

    setRating(value); 
  };

  return (
    <form>
      <h5 className='text-lg mb-5 font-bold'>ثبت بازخورد</h5>

      {/* Rating */}
      <div className='space-y-3'>
        <label htmlFor='' className='block'>
          رتبـــــه *
        </label>
        <div className='inline-flex items-center space-s-2 text-sm'>
          <div
            className='cursor-pointer'
            onClick={ratingHandler}
            data-value='1'
          >
            {rating >= 1 ? <BsStarFill /> : <BsStar />}
          </div>
          <div
            className='cursor-pointer'
            onClick={ratingHandler}
            data-value='2'
          >
            {rating >= 2 ? <BsStarFill /> : <BsStar />}
          </div>
          <div
            className='cursor-pointer'
            onClick={ratingHandler}
            data-value='3'
          >
            {rating >= 3 ? <BsStarFill /> : <BsStar />}
          </div>
          <div
            className='cursor-pointer'
            onClick={ratingHandler}
            data-value='4'
          >
            {rating >= 4 ? <BsStarFill /> : <BsStar />}
          </div>
          <div
            className='cursor-pointer'
            onClick={ratingHandler}
            data-value='5'
          >
            {rating >= 5 ? <BsStarFill /> : <BsStar />}
          </div>
        </div>
      </div>

      {/* Review */}
      <div className='mt-4 space-y-3 w-full max-w-2xl'>
        <label htmlFor='' className='block'>
          نظر شما *
        </label>
        <textarea className='w-full border border-gray-300 focus:outline-none focus:bg-gray-50 py-4 px-5 text-gray-500 h-60'></textarea>
      </div>

      {/* Submit Button */}
      <button className='mt-3 bg-black text-white px-10 py-3 hover:bg-black/75 duration-300'>
        ثبت نظر
      </button>
    </form>
  );
};

export default ReviewForm;
