import React from 'react'
import razorpay from '../assets/razorpay.png'
const Navbar = () => {
  return (
    <div>
       <nav class="bg-deep-blue">
        <div class="relative w-270 mx-auto flex items-centre justify-center">
           
      {/* logo */}

      <a href="/" class="cursor-pointer py-7 pr-7">
        <img src={razorpay}  width="125px" height="30px"alt="razorpay-logo" />
      </a>

       <ul class="flex gap-6">
        <li class="text-white py-7 hidden lg:block font-serif hover:text-light-blue cursor-pointer transition-all duration-200 relative group"><a href="#">Payments</a> 
        <div class="absolute bottom-0 w-full h-1 bg-light-blue hidden group-hover:block transition-all duration-200"></div>
        </li>
        
        
        <li class="text-white py-7 font-serif hover:text-light-blue cursor-pointer transition-all duration-200 relative group hidden lg:block"><a href="#">Banking</a> 
        <div class="absolute bottom-0 w-full h-1 bg-light-blue hidden group-hover:block transition-all duration-200"></div>
        </li>
        
        <li class="text-white py-7 font-serif hover:text-light-blue cursor-pointer transition-all duration-200 relative group hidden lg:block"><a href="#">Corporate Card</a> 
        
        </li>
        
        <li class="text-white py-7 font-serif hover:text-light-blue cursor-pointer transition-all duration-200 relative group hidden lg:block"><a href="#">Payroll</a> 
        
        </li>
        
        <li class="text-white py-7 font-serif hover:text-light-blue cursor-pointer transition-all duration-200 relative group hidden lg:block"><a href="#">Resources</a> 
        <div class="absolute bottom-0 w-full h-1 bg-light-blue hidden group-hover:block transition-all duration-200"></div>
        </li>
        
        <li class="text-white py-7 font-serif hover:text-light-blue cursor-pointer transition-all duration-200 relative group hidden lg:block"><a href="#">Support</a> 
        <div class="absolute bottom-0 w-full h-1 bg-light-blue hidden group-hover:block transition-all duration-200"></div>
        </li>
        
        <li class="text-white py-7 font-serif hover:text-light-blue cursor-pointer transition-all duration-200 relative group hidden lg:block"><a href="#">Pricing</a> 
        <div class="absolute bottom-0 w-full h-1 bg-light-blue hidden group-hover:block transition-all duration-200"></div>
        </li>
       </ul>

       <div class="flex space-x-3 mx-12   ">
        <button class=" my-4 px-6 font-serif border-light-blue border text-white rounded text-sm font-bold">
          Log in
        </button>
        <button class="bg-white text-light-blue px-5 my-4 text-sm font-bold rounded cursor-pointer font-serif transition-all duration-200 hover:text-light-blue-500 hidden lg:block">
          Sign Up
        </button>
       </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
