import React from 'react'
import pos from '../assets/pos.jpg'


const Feature = () => {
  return (
    <div>
      <section class="relative">
      <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4 ">
       {/* <--------heading-------> */}
        <h2 class="font-serif text-2xl text-center leading-1.2 font-bold hidden md:block">Accept Payments with Razorpay Payment Suite</h2>
        <h2 class="font-serif text-5xl text-center leading-1.2 font-bold visible md:hidden">Explore Razorpay Payment Suite</h2>
        <div class=" mx-auto w-6 h-1 bg-green-light mt-4 mb-6"></div>

        {/* <--------content-box-------> */}
        <div class="w-full min-h-[520] bg-white flex rounded-md relative p-10 py-12 border">

        <div class="flex flex-col justify-between items-center w-full">
          <h3 class="font-serif text-[28px] leading-10 font-bold max-w-[500px]">Supercharge your business with the all-powerful <span class="text-light-blue">Payment Gateway</span></h3>
          <ul class="space-y-2 mb-10 mt-5">

          <li class="font-serif flex items-center space-x-2" >
            <i class="fa-solid fa-check text-green-light"></i>
             <span>100+ Payment Methods</span> 
             </li> 
        <li class="font-serif flex items-center space-x-2"> 
          <i class="fa-solid fa-check text-green-light"></i>
          <span> Industry Leading Success Rate </span> 
          </li> 
        <li class="font-serif flex items-center space-x-2"> 
          <i class="fa-solid fa-check text-green-light"></i>
          <span> Superior Checkout Experience </span> 
          </li> 
          <li class="font-serif flex items-center space-x-2">
            <i class="fa-solid fa-check text-green-light"></i> 
            <span> Easy to Integrate </span> 
          </li> 
          <li class="font-serif flex items-center space-x-2"> 
            <i class="fa-solid fa-check text-green-light"></i>
            <span> Instant Settlements from day 1 </span> 
            </li> 
            <li class="font-serif flex items-center space-x-2">
              <i class="fa-solid fa-check text-green-light"></i> 
              <span> In-depth Reporting and Insights </span> 
              </li>
          </ul>
          {/* <!-- for button and hyperlink-+> */}
          <div class="flex flex-col-reverse md:flex-row items-center space-x-4">
            <button class="bg-light-blue w-full md:w-fit items-stretch text-white rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 cursor-pointer py-3 px-4 ">Sign Up Now</button>
            <div class="flex self-start cursor-pointer group">
              <a class="font-mullish font-bold text-light-blue group-hover:text-grayBlue transition-all duration-200" href="#">Know More</a>
             <i class=" w-5 h-5 text-light-blue transition-all duration-200 fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <img class="max-w-[730px] abolute bottom-0 right-0 hidden md:max-w-[400px] lg:max-w-[680px] md:block lg:block" src={pos} alt="pos" loading='lazy' />
        </div>

      </div>

      </section>
    </div>
  )
}

export default Feature
