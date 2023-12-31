import { BiSearchAlt2 } from 'react-icons/bi';
import { useState, useEffect } from 'react';

const Search = () => {
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setFilter(false);
      } else {
        setFilter(true); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='bg-gray-800'>
      <div className='flex justify-between px-4 py-3 xl:hidden'>
        <div className='relative max-w-sm  w-full '>
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <BiSearchAlt2 className='fill-current text-gray-500 h-6 w-6' />
          </div>
          <input
            placeholder='هل تبحث عن شيء ما؟'
            className='block bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 text-white rounded-lg pr-10 w-full py-2'
          />
        </div>

        <button
          className={`mr-4 inline-flex px-4 py-2 justify-center ${
            filter ? 'bg-gray-900' : 'bg-gray-700'
          } rounded-lg shadow hover:bg-gray-600`}
          onClick={() => setFilter(!filter)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 fill-current text-gray-500'
            width='24'
            height='24'
            fill='none'>
            <path
              fill='#A0AEC0'
              fillRule='evenodd'
              d='M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z'
              clipRule='evenodd'
            />
          </svg>
          <span className='text-white mr-1 font-medium'>التصنيفات</span>
        </button>
      </div>

      {/* Start Fillters Options */}
      {filter && (
        <form className='xl:flex xl:flex-col xl:justify-between xl:w-72' style={{height: '100%'}}>
          <div className='lg:flex xl:flex-col'>
            <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full '>
              {/* ---------------------- */}
              <div className='flex flex-wrap sm:items-center -mx-2'>
                {/* Rooms & Pathrooms */}
                <label className='block w-1/2 px-2 sm:w-1/4 lg:w-1/2'>
                  <span className='font-semibold text-sm text-gray-500'>
                    عدد الغرف
                  </span>
                  <select className='form-select w-full mt-1 block bg-gray-700 px-2 text-white shadow rounded-lg py-1 focus:bg-gray-600 focus:border-transparent'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </label>
                <label className='block w-1/2 px-2 sm:w-1/4 lg:w-1/2'>
                  <span className='font-semibold text-sm text-gray-500'>
                    دورات المياة
                  </span>
                  <select className='form-select w-full mt-1 block bg-gray-700 px-2 text-white shadow rounded-lg py-1 focus:bg-gray-600 focus:border-transparent'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </label>
                {/* Price Range */}
                <label className='block w-full px-2 mt-4 sm:w-1/2 sm:mt-0 lg:mt-4 lg:w-full'>
                  <span className='font-semibold text-sm text-gray-500'>
                    متوسط السعر
                  </span>
                  <select className='form-select w-full mt-1 block bg-gray-700 px-2 text-white shadow rounded-lg py-1 focus:bg-gray-600 focus:border-transparent'>
                    <option value='1'>تصل الى ٢٠٠٠ ر.س. /اسبوع</option>
                    <option value='1'>تصل الى ٣٠٠٠ ر.س. /اسبوع</option>
                    <option value='1'>تصل الى ٤٠٠٠ ر.س. /اسبوع</option>
                    <option value='1'>تصل الى ٥٠٠٠ ر.س. /اسبوع</option>
                  </select>
                </label>
              </div>
              {/* ---------------------- */}
            </div>

            <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full lg:border-r'>
              <span className='block text-gray-500 text-sm text-semibold'>
                نوع المسكن
              </span>
              <div className='sm:flex sm:-mx-2 lg:block lg:mx-0'>
                <label className='flex items-center sm:w-1/4 sm:px-2 text-white mt-3 lg:w-full lg:px-0'>
                  <input
                    className='form-radio ml-2 bg-gray-900'
                    type='radio'
                    name='propertyType'
                    value='house'
                  />
                  منزل
                </label>
                <label className='flex items-center sm:w-1/4 sm:px-2 text-white mt-3 lg:w-full lg:px-0'>
                  <input
                    className='form-radio ml-2 bg-gray-900'
                    type='radio'
                    name='propertyType'
                    value='apartemnt'
                  />
                  شقة
                </label>
                <label className='flex items-center sm:w-1/4 sm:px-2 text-white mt-3 lg:w-full lg:px-0'>
                  <input
                    className='form-radio ml-2 bg-gray-900'
                    type='radio'
                    name='propertyType'
                    value='townHouse'
                  />
                  فندق
                </label>
                <label className='flex items-center sm:w-1/4 sm:px-2 text-white mt-3 lg:w-full lg:px-0'>
                  <input
                    className='form-radio ml-2 bg-gray-900'
                    type='radio'
                    name='propertyType'
                    value='shareRoom'
                  />
                  غرفة مشتركة
                </label>
              </div>
            </div>

            <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full lg:border-r'>
              <span className='block text-gray-500 text-sm text-semibold'>
                المرافق
              </span>
              <div className='sm:flex sm:-mx-2 sm:flex-wrap lg:pr-2'>
                <label className='flex items-center mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full'>
                  <input
                    type='checkbox'
                    className='form-checkbox ml-2'
                    name='propertyType'
                    value='house'
                  />
                  بلكونة
                </label>
                <label className='flex items-center mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full'>
                  <input
                    type='checkbox'
                    className='form-checkbox ml-2'
                    name='propertyType'
                    value='apartemnt'
                  />
                  حمام سباحة
                </label>
                <label className='flex items-center mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full'>
                  <input
                    type='checkbox'
                    className='form-checkbox ml-2'
                    name='propertyType'
                    value='townHouse'
                  />
                  شاطئ
                </label>
                <label className='flex items-center mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full'>
                  <input
                    type='checkbox'
                    className='form-checkbox ml-2'
                    name='propertyType'
                    value='shareRoom'
                  />
                  حديقة اطفال
                </label>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className='bg-gray-900 p-4 sm:mt-4 xl:mt-0'>
            <button className='block w-full bg-indigo-500 px-4 hover:bg-indigo-400 text-white py-2 font-semibold rounded-lg sm:w-auto sm:inline-block xl:w-full xl:block'>
              تحديث البيانات
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Search;
