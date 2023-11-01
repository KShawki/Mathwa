'use client';

import Header from './componets/Header';
import Search from './componets/Search';
import Card from './componets/Card';
import Data from "./componets/Data"

export default function Home() {
  return (
    <>
      <Header />
      <div className='xl:flex xl:flex-1 xl:overflow-y-hidden'>
        <Search />
        <main className='px-4 py-6 xl:overflow-x-hidden xl:w-full '>
          {Data.map((item, index) => (
            <div key={index}>
              <div className='px-2'>
                <h3 className='text-gray-900 font-medium text-xl'>{item.title}</h3>
                <p className='text-gray-500 mt-1'>{item.description}</p>
              </div>
              <div className='mt-6 sm:overflow-x-auto'>
                <div className='sm:flex sm:gap-4 sm:px-2 sm:-mx-2'>
                  {
                  item.hotels.map((info, index) => (
                      <Card key={index} info={info} />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
