import { Link } from 'react-router-dom';

const Orders = () => {
  return (
    <div>
      {/* No Orders Yet Message */}
      <div className='flex items-center justify-between space-s-4 border border-stone-200 px-7 py-3 text-lightGray'>
        <span>هنوز هیچ سفارشی ثبت نشده است.</span>
        {/* Browse Product Button */}
        <Link to='/' className='btn'>
          رفتن به فروشگاه
        </Link>
      </div>
    </div>
  );
};

export default Orders;
