import { BiMenu, BiSearchAlt2 } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <header className='bg-gray-900 px-4 py-3 flex justify-between'>
        <svg
          className='h-8 w-auto'
          xmlns='http://www.w3.org/2000/svg'
          width='178'
          height='33'
          fill='none'>
          <path
            fill='#A3BFFA'
            fillRule='evenodd'
            d='m176.323 13.157-8.311-4.798v22.287h9.716v2.16H130.23v-2.16h4.318v-13.73l-4.024 1.006-.524-2.095 22.766-5.691h3.371a10.342 10.342 0 0 0-.735 2.762l-.52 4.29 5.574-3.218v16.676h5.397V8.361l-8.308 4.796a8.1 8.1 0 0 1 2.77-5.18h-4.447a8.084 8.084 0 0 1 7.174-3.21l-6.036-3.485a8.082 8.082 0 0 1 7.228.434 8.052 8.052 0 0 1 2.7 2.534 8.049 8.049 0 0 1 2.699-2.534 8.086 8.086 0 0 1 7.23-.434l-6.038 3.486A8.084 8.084 0 0 1 178 7.977h-4.448a8.098 8.098 0 0 1 2.771 5.18Zm-20.185 17.49V19.85h-6.477v10.795h6.477Zm-11.875-8.637a2.159 2.159 0 1 1-4.317 0 2.159 2.159 0 0 1 4.317 0Z'
            clipRule='evenodd'
          />
          <g clipPath='url(#a)'>
            <path
              fill='#A3BFFA'
              d='M118.266 12.38c-.494-1.365-1.437-2.42-2.843-3.162-1.398-.744-3.399-1.115-6.002-1.115-1.638 0-3.129.121-4.466.371-1.336.25-2.348.531-3.028.857-.355 1.138-.672 2.488-.95 4.05-.278 1.562-.417 3.026-.417 4.383 0 1.358.177 2.935.533 4.717h-11.58V8.436h-5.076v14.045h-34.03v4.535H119v-9.29c0-2.206-.247-3.988-.742-5.354l.008.008Zm-4.334 10.109h-7.91a24.255 24.255 0 0 1-.364-2.139c-.115-.88-.17-1.736-.17-2.586 0-1.41.178-3.048.534-4.906a14.204 14.204 0 0 1 2.873-.296c1.97 0 3.299.41 3.994 1.229.696.819 1.043 2.093 1.043 3.83v4.868Z'
            />
            <path
              fill='#A3BFFA'
              d='M73.127 11.584h-1.545c-1.28 0-2.317 1.018-2.317 2.275v1.517c0 1.256 1.037 2.275 2.317 2.275h1.545c1.28 0 2.318-1.019 2.318-2.275v-1.517c0-1.257-1.038-2.275-2.318-2.275ZM65.402 11.584h-1.545c-1.28 0-2.318 1.018-2.318 2.275v1.517c0 1.256 1.038 2.275 2.318 2.275h1.545c1.28 0 2.318-1.019 2.318-2.275v-1.517c0-1.257-1.038-2.275-2.318-2.275ZM69.265 4H67.72c-1.28 0-2.318 1.019-2.318 2.275v1.517c0 1.256 1.038 2.275 2.318 2.275h1.545c1.28 0 2.317-1.019 2.317-2.275V6.275C71.582 5.02 70.545 4 69.265 4Z'
            />
            <path
              fill='#fff'
              d='M27.857 17.696c-.958-.591-2.31-1.168-4.048-1.706-1.614-.493-2.765-.872-3.445-1.13-.68-.258-1.252-.592-1.7-.986-.456-.394-.68-.902-.68-1.524 0-1.782 1.375-2.677 4.126-2.677 1.56 0 4.07.197 7.532.591l.417-4.05c-2.248-.394-3.948-.66-5.114-.796a28.863 28.863 0 0 0-3.368-.205c-2.774 0-4.937.63-6.474 1.896-1.537 1.267-2.31 3.132-2.31 5.612 0 1.365.255 2.503.773 3.42.517.918 1.351 1.707 2.495 2.382 1.15.667 2.72 1.274 4.712 1.82 1.669.47 2.85.917 3.562 1.335.703.424 1.058 1.076 1.058 1.971 0 1.805-.325 3.064-.966 3.77-.64.705-1.66 1.061-3.043 1.061H10.939c-1.159 0-2.186-.22-3.067-.667-.88-.448-1.568-1.054-2.063-1.82a4.633 4.633 0 0 1-.741-2.564c0-.523.07-1.38.208-2.586.14-1.198.294-2.32.472-3.36l-4.728-.742a71.012 71.012 0 0 0-.703 3.973c-.217 1.441-.325 2.587-.325 3.459 0 1.933.564 3.564 1.684 4.906 1.12 1.335 2.542 2.328 4.257 2.973a14.64 14.64 0 0 0 5.184.963h10.56c2.804 0 4.983-.781 6.551-2.343 1.56-1.562 2.349-4.012 2.349-7.356 0-1.388-.217-2.518-.642-3.398-.432-.88-1.12-1.615-2.085-2.214l.007-.008ZM47.734 4.743c-1.637-.19-3.19-.28-4.658-.28-1.993 0-3.6.265-4.828.796-1.22.53-2.171 1.57-2.835 3.102-.672 1.54-1.005 3.776-1.005 6.726 0 5.794 2.611 8.699 7.834 8.699h4.388c0 1.236-.108 2.191-.325 2.859-.216.667-.548 1.137-1.004 1.41-.456.273-1.082.41-1.893.41-1.058 0-3.105-.22-6.134-.667v4.497c3.029.47 5.223.705 6.59.705 4.697 0 7.316-3.071 7.872-9.214l.116-4.535V5.395c-1.112-.25-2.488-.462-4.125-.652h.007Zm-.942 14.508h-3.144c-1.669 0-2.774-.425-3.33-1.282s-.834-1.911-.834-3.177c0-1.639.177-2.867.533-3.701.355-.827.842-1.388 1.475-1.676.634-.288 1.476-.425 2.534-.425.881 0 1.8.06 2.766.19v10.07Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              {' '}
              <path fill='#fff' d='M0 4h119v29H0z' />
            </clipPath>
          </defs>
        </svg>

        <button className='h-8 w-8 flex items-center justify-center'>
          <BiMenu className='text-gray-400' style={{ fontSize: '1.8rem' }} />
        </button>
      </header>
      {/* search */}
      <section className='flex justify-between bg-gray-800 px-4 py-3'>
        <div className='relative'>
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <BiSearchAlt2 className='fill-current text-gray-500 h-6 w-6' />
          </div>
          <input
            placeholder='هل تبحث عن شيء ما؟'
            className='bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 text-white rounded-lg w-auto sm:w-80 pr-10  py-2'
          />
        </div>

        <button className='inline-flex px-4 py-2 justify-center bg-gray-700 rounded-lg shadow hover:bg-gray-600 '>
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
      </section>
      <main className='px-4 py-6'>
        <h3 className='text-gray-900 font-medium text-xl'>قرطبة</h3>
        <p className='text-gray-500 mt-1'>
          عش حياة الرفاهية في أفخم الفنادق على منتجعات البحر الأبيض المتوسط
          الساحرة
        </p>

        <div className='mt-5'>
          <div>
            <div>
              <img
                className='rounded-lg shadow-md h-64'
                src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
            <div className='px-3 -mt-16 relative'>
              <div className='bg-white rounded-lg p-4 shadow-lg'>
                <div className='flex items-center '>
                  <span className=' inline-block bg-teal-200 text-teal-800 px-2 py-0.5 leading-none font-bold text-[14px] rounded-full uppercase tracking-wide'>
                    سوبـر
                  </span>
                  <div className='mr-2 text-[14px] text-gray-600 font-semibold tracking-wide'>
                    ٣ سرير &bull; ٢ حمام
                  </div>
                </div>
                <h4 className='my-1 font-bold text-gray-900 text-lg'>
                  منزل عصري في وسط المدينة
                </h4>
                <div>
                  <span className='text-gray-900 text-lg'>$1,400</span>
                  <span className='text-gray-600 text-sm mr-1'>ريال سعودي</span>
                </div>
                <div className='text-gray-600 text-sm flex items-center'>
                  {/* <AiFillStar className='text-red-600 fill-current' /> */}
                  {Array(5)
                    .fill(1)
                    .map((_, index) => (
                      <AiFillStar
                        key={index}
                        className='text-teal-600 h-6 fill-current'
                        size={15}
                      />
                    ))}

                  <span className='mr-1 my-1 text-gray-600'>٣٤ تقييم</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
