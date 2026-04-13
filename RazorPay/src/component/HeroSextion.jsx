import React from 'react'
import heroSection from '../assets/heroSection.webp'

const HeroSextion = () => {
  return (
    <div>
       <section class="relative bg-deep-blue ">

        <div class="flex w-10/12 max-w-[1080px] flex-col lg:flex-row justify-between items-center mx-auto  ">
            {/* <------LeftPart----------> */}
            <div class="space-y-6">
                <h1 class=" font-serif font-bold text-[40px] leading-[1.2] text-white">Power your finance, grow your business</h1>
                 
                <p class="font-serif text-[18px] leading--7 opacity-70 text-white">Accept payments from customers. Automate payouts to vendors & employees. Never run o of working capital.</p>\
                <button class="bg-light-blue text-white rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 cursor-pointer py-3 px-4 ">Sign Up Now</button>
                            
            </div>
            {/* <------RightPart----------> */}
            <img src={heroSection} alt="" class="max-w-[680px] max-h-[500px] rounded-3xl my-8" />
        </div>

        <div>
            <img src="" alt="" />
        </div>

       </section>
    </div>
  )
}

export default HeroSextion
