import React from 'react'
import CEO from '../assets/CEO.jpg'
import comma from '../assets/comma.png'
import fakeCompany from '../assets/fakeCompany.jpg'

const Testimonial = () => {
  return (
    <section class="relative mb-10">
        <div class="w-11/12 max-w-[1300px] mx-auto relative py-15">
            {/* <img src="" alt="" /> */}
            <h2 class="font-serif font-extrabold text-2xl text-deepBlueHead text-center">An Experience <br/>People Love to Talk About</h2>
            <div class="w-6 h-1 bg-green-light mx-auto my-4"></div>
        </div>

        {/* <-----LeftButton-----> */}
        <button class="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-50 top-90 flex justify-center items-center rotate-180">
            <div class="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full mix-blend-multiply flex justify-center items-center">
               <i class="fa-solid fa-chevron-right text-[#1f325266] text-2xl"></i>
            </div>
        </button>

           {/* <-----MainContent-----> */}
            <div class="flex md:flex-row flex-col max-w-[960px]  items-center mx-auto mb-10 md:space-x-[10rem]">
                   {/* <-----LeftImage-----> */}
                   <img src={CEO} alt="CEO" height="320px" width="320px" class="rounded-xl" />

                      {/* <-----RightButton-----> */}
                      <div class="max-w-[400px]">
                        <img src={comma} alt="Commas" width="35px" height="40px"  />
                        <p class="font-serif text-3xl font-extralight">Readymade Closed Wallet Solution For Quick Refunds</p>
                        <a href="#" class="text-gray-text italic underline">Learn More</a>
                        <h3 class="font-serif text-2xl font-extrabold">Lorem Ipsum</h3>
                        <p class="font-serif font-medium">CEO, XYZ Engineering Company</p>
                        <img src={fakeCompany} alt="Conpany" width="80px" height="40px" />
                      </div>
            </div>

               {/* <-----6 dot wala div-----> */}

               <div class="w-full flex flex-row mx-auto space-x-2 justify-center">
                <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                <div class="h-[10px] w-[10px] bg-light-blue-300 rounded-full"></div>
                <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
                <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
               </div>
        
        {/* <-----RightButton-----> */}
        <button class="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-50 top-90 flex justify-center items-center">
            <div class="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full mix-blend-multiply flex justify-center items-center">
                <i class="fa-solid fa-chevron-right text-[#1f325266] text-2xl"></i>
            </div>
        </button>



    </section>
  )
}

export default Testimonial
