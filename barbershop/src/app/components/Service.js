import React from 'react';
import image1 from '../Images/servicesImage1.jpg'
import image2 from '../Images/servicesImageCropped.jpg'
import image3 from '../Images/servicesImage3.jpg'
import Image from 'next/image';
function Service() {
  return (
    <div className=' w-full lg:h-[1600px] bg-headerBg bg-auto md:bg-cover
    object-fit bg-center bg-transparent bg-no-repeat'>
     <div className='h-full  opacity-[98%] bg-serviceSection'>
     
     <div className=''>
     <p className='py-4 px-12 w-1/2 ml-6 lg:ml-[200px] text-[2rem] lg:text-[3.05rem] text-[#A6A6A6] font-roboto'>Services</p>

      {/* Grid cards */}
      <div className='border-2 border-red-300 grid px-2 lg:px-4 grid-cols-1 '>
            <p className='font-roboto text-center text-white text-lg'> Popular Services </p>

            <div className='grid grid-cols-3 w-[85%] lg:w-[70%] pt-4 mx-auto gap-5 lg:gap-8 mb-32'>
                <div className='col-start-1 col-span-1'>
                  <div>
                    <Image src={image1} className='mb-2'  alt='Barber'/>

                    <div className='py-4 font-roboto border-[1px] border-white'>
                      <p className='pl-2 pb-2 text-white text-md'>Adult | Children</p>
                      <p className='pl-2 text-white text-sm lg:text-lg'>Skin Fade with haircut</p>
                      <p className='pl-2 text-white text-sm lg:text-md'>£20 | £15</p>
                    </div>
                  </div>
                </div>
                <div className='col-start-2 col-span-1'>
                  <div className=''>
                  <Image  src={image2} className='mb-2' alt='Barber' />
                  <div className='py-4 font-roboto border-[1px] border-white'>
                      <p className='pl-2 pb-2 text-white text-md'>Adult</p>
                      <p className='pl-2 text-white text-sm lg:text-lg'>Quality Beard Trim</p>
                      <p className='pl-2 text-white text-sm lg:text-md'>£15</p>
                    </div>
                  </div>
               
              </div>
              <div className='col-start-3 col-span-1'>
              <Image src={image2} className='mb-2'  alt='Barber'/>
              <div className='py-4 font-roboto border-[1px] border-white'>
                      <p className='pl-2 pb-2 text-white text-md'>Adult </p>
                      <p className='pl-2 text-white text-sm lg:text-lg'>Skin Fade & Beard</p>
                      <p className='pl-2 text-white text-sm lg:text-md'>£38</p>
                    </div>
             </div>
            </div>

            {/**Other Services Section */}

            <div className='grid grid-cols-1 w-[85%] lg:w-[70%] mt mx-auto '>
              <p className='font-roboto text-center  text-white text-lg mb-4'>Other Services</p>

              <div className=' mx-auto w-full text-sm lg:text-base  lg:w-5/6 grid grid-cols-2 gap-8 '>
                <div className='col-start-1 col-span-1 font-roboto text-white'>
                <div className='flex border-b-[1px] mb-2 justify-evenly'>
                        <p>Hair + Beard </p>
                        <p>£38 </p>
                    </div>

                    <div className='flex border-b-[1px] mb-2 justify-evenly'>
                        <p>Hair + Beard </p>
                        <p>£38 </p>
                    </div>

                    <div className='flex border-b-[1px] mb-2 justify-evenly'>
                        <p>Hair + Beard </p>
                        <p>£38 </p>
                    </div>

                    <div className='flex border-b-[1px] mb-2 justify-evenly'>
                        <p>Hair + Beard </p>
                        <p>£38 </p>
                    </div>
                </div>




                <div className='col-start-2 text-white font-roboto col-span-1 '>
                    <div className='flex border-b-[1px] mb-2 justify-evenly'>
                        <p>Hair + Beard </p>
                        <p>£38 </p>
                    </div>

                    <div className='flex border-b-[1px] mb-2 justify-evenly'>
                        <p>Hair + Beard </p>
                        <p>£38 </p>
                    </div>

                    <div className='flex border-b-[1px] mb-2 justify-evenly'>
                        <p>Hair + Beard </p>
                        <p>£38 </p>
                    </div>

                    <div className='flex border-b-[1px] mb-2 justify-evenly'>
                        <p>Hair + Beard </p>
                        <p>£38 </p>
                    </div>
                </div>
              </div>


              <button className='mx-auto py-1 mb-4 lg:py-2 mt-10 px-12 lg:px-16 text-white font-roboto rounded-md bg-[#2A3562]'> Book Now</button>
        
            </div>


      </div>

     </div>
    
     </div>
     
    </div>
  )
}

export default Service
