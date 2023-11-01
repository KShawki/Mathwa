import { AiFillStar } from 'react-icons/ai';


const Card = ({info}) => {
  return (
    <div
      className='mb-6 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2 sm:pb-8 sm:mb-0'>
      <div className='aspect-6x5'>
        <img
          className='absolute inset-0 h-full rounded-lg shadow-md object-cover'
          src={info.imageUrl}
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
            {info.title}
          </h4>
          <div>
            <span className='text-gray-900 text-lg'>${info.price}</span>
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
  )
}

export default Card;