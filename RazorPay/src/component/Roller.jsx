import React from 'react'
import company from '../assets/company.png'

const roller = () => {
  return (
    <section class=" bg-[#f5f8fe] relative pt-10 pb-12 -mt-[00px] -z-[100 ] ">

      <div class="w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row  ">

         {/* <--------Left-box-------> */}
          <div class="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)]">
            
              <h2 class="font-serif text-2xl  text-black leading-1.2 font-bold">Join the 50,00,000+ businesses using Razorpay</h2>
              <div class="  w-6 h-1 bg-green-light mt-4 mb-6"></div>
              <p class=" py-4 font-serif text-black leading-1.8 ">We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users and simplify the online payment experience for your customers.</p>
              <p class="font-serif">Focus on your business while we handle the complexities of payments for you.</p>
            </div>

            {/* <--------Left-box-------> */}
            <div>
              <img src={company} alt="company" />
            </div>
            
              </div>

    </section>
  )
}

export default roller
