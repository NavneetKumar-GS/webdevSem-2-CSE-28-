import React from 'react'
import Computer from '../assets/Computer.png'
import Bluebg from '../assets/Bluebg.png'
const CTA = () => {
  return (
    <section style={{ backgroundImage: `url(${Bluebg})` }}  className="w-full h-full bg-no-repeat bg-cover relative ">
        {/* <------MainContent--------> */}
        <div
        class="w:11/12 max-w-[1080px] relative flex flex-row items-center justify-between mx-auto space-x-20 py-10 ">       
         {/* <------LeftPart--------> */}
        <div class="flex flex-col gap-5 mt-12 max-w-[600px]">
            <h2 class="font-serif font-bold text-white text-2xl">Supercharge your business with Razorpay</h2>
            <div class="w-6 h-1 bg-green-light"></div>
            <p class="text-white font-serif">  Sign up now to experience the future of payments and offer <br/> your customers the best checkout experience.</p>
            <ul class="flex gap-1 space-y-2 flex-wrap ">
                <li class="font-serif text-white">
                    <i class="fa-solid fa-check text-green-light pr-6"></i>
                Quick Onboarding
                </li  >
                <li class="font-serif text-white">
                    <i class="fa-solid fa-check text-green-light pr-6"></i>
                Access to entire product suite
                </li>
                <li class="font-serif text-white">
                    <i class="fa-solid fa-check text-green-light pr-6"></i>
                API excess
                </li>
                
                <li class="font-serif text-white">
                    <i class="fa-solid fa-check text-green-light pr-6"></i>
                24x7 support
                </li>
                
            </ul>
            
                <button class="place-self-start min-w-[32px] font-mullish text-sm font-bold bg-white text-light-blue-300 border flex rounded-sm items-center hover:text-light-blue-500 transition-all duration-200 py-3 px-4 cursor-pointer"> Sign Up <i class=" w-5 h-5 text-light-blue transition-all duration-200 fa-solid fa-chevron-right"></i> </button>
                 
            
            

           
        </div>
         {/* <------RightImage--------> */}
            <img src={Computer} alt="CTA" class="hidden md:block" width="340px" height="382px" />
        </div>
    </section>
  )
}

export default CTA
