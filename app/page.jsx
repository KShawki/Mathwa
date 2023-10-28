'use client';

import Header from './componets/Header';
import Search from './componets/Search';
import { AiFillStar } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <Header />
      <div className='xl:flex xl:flex-1 xl:overflow-y-hidden'>
        <Search />
        <main className='px-4 py-6 xl:overflow-x-hidden xl:w-full '>
          <div>  
            <div className='px-2'>
              <h3 className='text-gray-900 font-medium text-xl'>قرطبة</h3>
              <p className='text-gray-500 mt-1'>
                عش حياة الرفاهية في أفخم الفنادق على منتجعات البحر الأبيض المتوسط
                الساحرة
              </p>
            </div>
            <div className='mt-6 sm:overflow-x-auto'>
              <div className='sm:flex sm:gap-4 sm:px-2 sm:-mx-2'>
                {Array(6)
                  .fill(1)
                  .map((item, index) => (
                    <div
                      key={index}
                      className='mb-6 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2 sm:pb-8 sm:mb-0'>
                      <div className='aspect-6x5'>
                        <img
                          className='absolute inset-0 h-full rounded-lg shadow-md object-cover'
                          src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />
                      </div>
                      <div className='relative px-3 -mt-16'>
                        <div className='bg-white  rounded-lg p-4 shadow-lg '>
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
                            <span className='text-gray-600 text-sm mr-1'>
                              ريال سعودي
                            </span>
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

                            <span className='mr-1 my-1 text-gray-600'>
                              ٣٤ تقييم
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <div className='px-2'>
              <h3 className='text-gray-900 font-medium text-xl'>قرطبة</h3>
              <p className='text-gray-500 mt-1'>
                عش حياة الرفاهية في أفخم الفنادق على منتجعات البحر الأبيض المتوسط
                الساحرة
              </p>
            </div>
            <div className='mt-6 sm:overflow-x-auto'>
              <div className='sm:flex sm:gap-4 sm:px-2 sm:-mx-2'>
                {Array(6)
                  .fill(1)
                  .map((item, index) => (
                    <div
                      key={index}
                      className='mb-6 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2 sm:pb-8 sm:mb-0'>
                      <div className='aspect-6x5'>
                        <img
                          className='absolute inset-0 h-full rounded-lg shadow-md object-cover'
                          src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />
                      </div>
                      <div className='relative px-3 -mt-16'>
                        <div className='bg-white  rounded-lg p-4 shadow-lg '>
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
                            <span className='text-gray-600 text-sm mr-1'>
                              ريال سعودي
                            </span>
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

                            <span className='mr-1 my-1 text-gray-600'>
                              ٣٤ تقييم
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <div className='px-2'>
              <h3 className='text-gray-900 font-medium text-xl'>قرطبة</h3>
              <p className='text-gray-500 mt-1'>
                عش حياة الرفاهية في أفخم الفنادق على منتجعات البحر الأبيض المتوسط
                الساحرة
              </p>
            </div>
            <div className='mt-6 sm:overflow-x-auto'>
              <div className='sm:flex sm:gap-4 sm:px-2 sm:-mx-2'>
                {Array(6)
                  .fill(1)
                  .map((item, index) => (
                    <div
                      key={index}
                      className='mb-6 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2 sm:pb-8 sm:mb-0'>
                      <div className='aspect-6x5'>
                        <img
                          className='absolute inset-0 h-full rounded-lg shadow-md object-cover'
                          src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />
                      </div>
                      <div className='relative px-3 -mt-16'>
                        <div className='bg-white  rounded-lg p-4 shadow-lg '>
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
                            <span className='text-gray-600 text-sm mr-1'>
                              ريال سعودي
                            </span>
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

                            <span className='mr-1 my-1 text-gray-600'>
                              ٣٤ تقييم
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
