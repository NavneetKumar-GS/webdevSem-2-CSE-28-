import React from 'react'
import razorpay from '../assets/razorpay.png'
import steps from '../assets/steps.png'

const LowerFeature = () => {
  return (
    <section class="bg-deep-blue pt-[6rem] pb-[250px] mt-10">
        <div class="w-10/12 max-w-[1080px] mx-auto relative pt-4">

            <h2 class=" text-white font-serif text-2xl text-center leading-1.2 font-bold">Explore Razorpay Business Banking</h2>
            <div class="w-6 h-1 bg-green-light mx-auto mt-4 mb-6"></div>      


            {/* <-----MainFeatureBox-------> */}

            <div >

            {/* <!-- content box--> */}

            <div class="w-full min-h-[440] bg-deep-blue flex border  border-slate-700 rounded-md relative mt-29 p-7 py-12 pt-14  ">
                {/* <!-- Left Part--> */}
                <div class="flex flex-col justify-between items-center w-full border  " >
                    <h3 class="font-serif text-[28px] leading-10 font-bold max-w-[500px] text-white text-center" >Manage your company's finances with
                        <img src={razorpay} alt="Razorpay-Logo" width="168" height="32px" class="inline px-2 " />
                        <span class=" text-green-light">Business Banking</span>
                    </h3>
                    <ul class="space-y-2 mb-10 mt-5">
                       <li class="font-serif flex items-center space-x-2 text-white">
                            <i class="fa-solid fa-check text-green-light "></i> 
                            <span> Open a fully digital current account </span> 
                        </li>

                        
                       <li class="font-serif flex items-center space-x-2 text-white">
                            <i class="fa-solid fa-check text-green-light"></i> 
                            <span> Automate payables & compliment payments </span> 
                        </li>

                       <li class="font-serif flex items-center space-x-2 text-white">
                            <i class="fa-solid fa-check text-green-light"></i> 
                            <span> Simplify and track spends with Corporate cards </span> 
                        </li>

                       <li class="font-serif flex items-center space-x-2 text-white">
                            <i class="fa-solid fa-check text-green-light"></i> 
                            <span> View financial insights at a glance </span> 
                        </li>


                    </ul>

                    <div class="flex flex-col-reverse md:flex-row items-center space-x-4">
            <button class="bg-light-blue relative justify-start text-white flex items-center rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 cursor-pointer gap-2 px-[22px] self-stretch md:w-fit">Sign Up
                <div class="w-12 h-[60px] bg-green-light flex absolue right-6 skew-x-[20deg] justify-center items-center">
                    <i class="fa-solid fa-arrow-down skew-y-[20deg] rotate-[-90deg]"></i>
                </div>
            </button>
            <div class="flex items-center cursor-pointer group">
              <a class="font-mullish font-bold text-light-blue group-hover:text-grayBlue transition-all duration-200" href="#">Know More</a>
             <i class=" w-5 h-5 text-light-blue transition-all duration-200 fa-solid fa-chevron-right"></i>
            </div>
          </div>
                </div>
                <img class="max-w-[530px] abolute bottom-0 right-0 pl-8 hidden md:max-w-[400px] md:block lg:max-w-[600px] lg:block" src={steps} alt="steps" loading='lazy' />
                
            </div>
           
                {/* <-------CardBox-------> */}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 my-12">
                    {/* <-------Box1-------> */}
                    <div class="relative bg-deep-blue border border-gray-800 rounded-sm p-6 flex flex-col justify-between min-h-[220px]">
      
      <div class="absolute top-6 right-6 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      </div>

      <div class="pr-12">
        <h3 class="text-[#1a233a] text-lg font-bold text-white mb-3">Current Accounts</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-6">
          Current accounts for fast-growing businesses, supported by the best-in- class technology
        </p>
      </div>

      <div>
        <a href="#" class="inline-flex items-center text-light-blue font-semibold text-sm hover:text-blue-800 transition-colors">
          Know More
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      
    </div>

                    {/* <-------Box2-------> */}
                    <div class="relative bg-deep-blue border border-gray-800 rounded-sm p-6 flex flex-col justify-between min-h-[220px]">
      
      <div class="absolute top-6 right-6 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      </div>

      <div class="pr-12">
        <h3 class="text-[#1a233a] text-lg font-bold text-white mb-3">Capital & Credit</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-6">
          Instant additional cash and corporate cards designed for growing businesses
        </p>
      </div>

      <div>
        <a href="#" class="inline-flex items-center text-light-blue font-semibold text-sm hover:text-blue-800 transition-colors">
          Know More
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      
    </div>
                    {/* <-------Box3-------> */}
                    <div class="relative bg-deep-blue border border-gray-800 rounded-sm p-6 flex flex-col justify-between min-h-[220px]">
      
      <div class="absolute top-6 right-6 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      </div>

      <div class="pr-12">
        <h3 class="text-[#1a233a] text-lg font-bold text-white mb-3">Payouts</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-6">
          Make simple, reliable & secure payouts to bank accounts, UPI IDs or wallets
        </p>
      </div>

      <div>
        <a href="#" class="inline-flex items-center text-light-blue font-semibold text-sm hover:text-blue-800 transition-colors">
          Know More
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      
    </div>
                </div>
            {/* <----demoSection------> */}
            <div class="w-full flex lg:flex-row lg:flex md:flex-col md:block hidden py-6 px-10 items-center justify-between relative gap-5  border border-slate-700">
                <p class="text-white font-serif text-xl">Check out the live demo to learn how RazorpayX works. <span class="font-bold"> No sign-up required!</span></p>

                <button class="bg-light-blue relative text-white flex items-center rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 cursor-pointer gap-2 px-[22px]  ">Check out the demo
                <div class="w-12 h-[60px] bg-green-light flex absolue right-6 skew-x-[20deg] justify-center items-center">
                    <i class="fa-solid fa-arrow-down skew-y-[20deg] rotate-[-90deg]"></i>
                </div>
            </button>
            </div>

            </div>        
        </div>
    </section>
  )
}

export default LowerFeature
