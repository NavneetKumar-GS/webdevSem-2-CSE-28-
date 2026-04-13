import React from 'react'
import razorpay from '../assets/razorpay.png'
import control from '../assets/control.jpg'
import PCI from '../assets/PCI.png'

const Contact = () => {
  return (
    <footer className="bg-[#eef9fe] py-14">
      {/* Changed to 5 columns. Left section takes 2 spans for correct width ratio */}
      <div className="w-10/12 md:w-11/12 max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* <-----DIV1 (Logo & Text)------> */}
        <div className="flex flex-col gap-4 md:col-span-2 text-sm text-gray-600">
          <img src={razorpay} alt="Razorpay" className="w-[120px]" />

          <p>Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.</p>

          <p>RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.</p>

          <p>Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.</p>

          <p >Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered account is provided by our partner bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.</p>

          <h3 className="font-bold text-gray-800 text-lg mt-4">SUBSCRIBE TO OUR <br/>NEWSLETTER</h3>

          <div className="flex items-center max-w-sm border bg-white rounded-md shadow-sm">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 text-sm bg-transparent outline-none"
            />
            <button className="flex items-center gap-2 px-4 py-2 text-blue-500 font-bold hover:bg-blue-50 transition-all">
              Subscribe <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="flex gap-4 mt-2">
            <img src={PCI} alt="PCI Certification" className="h-10 object-contain" />
            <img src={control} alt="Control Case" className="h-10 object-contain" />
          </div>
        </div>

        {/* <-----DIV2 (Banking, Lending, Risk, etc.)------> */}
        <div className="flex flex-col gap-6 text-sm text-gray-600">
          <div>
            <h2 className="font-bold text-gray-800 mb-3">BANKING PLUS</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">RazorpayX</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Current accounts</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Payouts</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Payout Links</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Corporate credit card</a></li>
              <li><a href="#" className="hover:text-blue-500 flex items-center gap-1 transition-all">View live demo <span className="bg-green-500 text-white text-[11px] font-bold px-1 ">New</span></a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">LENDING</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Razorpay Capital</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Instant Settlements</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Working Capital Loans</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Marketplace instant settlements</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">RISK & FRAUD</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Third watch</a></li>
              <li><a href="#" className="text-blue-500 font-semibold flex items-center gap-1 transition-all">PrePay CoD <span className="bg-green-500 text-white text-[11px] font-bold px-1 ">New</span></a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">BECOME A PARTNER</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Refer and Earn</a></li>
              <li><a href="#" className="text-blue-500 font-semibold flex items-center gap-1 transition-all">Onboarding APIs <span className="bg-green-500 text-white text-[11px] font-bold px-1 ">New</span></a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">MORE</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Route</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Invoices</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Freelancer Payments</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">International</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Flash Checkouts</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">APIs</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">ePOS</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Checkout Demo</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">RazorpayXPayroll</a></li>
            </ul>
          </div>
        </div>

        {/* <-----DIV3 (Accept Payments, Developers, etc.)------> */}
        <div className="flex flex-col gap-6 text-sm text-gray-600">
          <div>
            <h2 className="font-bold text-gray-800 mb-3">ACCEPT PAYMENTS</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Payment Gateway</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Payment Pages</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Freelance Links</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">QR Codes</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Subscription</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Smart Collect</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">DEVELOPERS</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Docs</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Integrations</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">RESOURCES</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Blog</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Customer Stories</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Events</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Chargeback Guide</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Settlement Guide</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">SOLUTIONS</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Education</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">E-commerce</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">SaaS</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">BFSI</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">FREE TOOLS</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">GST Calculator</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Online TDS Payment</a></li>
              <li><a href="#" className="text-blue-500 font-semibold transition-all flex items-center gap-1">GST Number Search <span className="bg-green-500 text-white text-[11px] font-bold px-1 ">New</span></a></li>
            </ul>
          </div>
        </div>

        {/* <-----DIV4 (Companies, Support, Contact)------> */}
        <div className="flex flex-col gap-6 text-sm text-gray-600">
          <div>
            <h2 className="font-bold text-gray-800 mb-3">COMPANY</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">About Us</a></li>
              <li><a href="#" className="text-blue-500 font-semibold flex items-center gap-1 transition-all">Careers <span className="bg-green-500 text-white text-[11px] font-bold px-1 ">We're hiring!</span></a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Terms of Use</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Grievance Redressal</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Responsible Disclosure</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Partners</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">White Papers</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Corporate Information</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">HELP & SUPPORT</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-blue-500 font-semibold">Support</a></li>
              <li><a href="#" className="text-blue-500 font-semibold">Knowledge base</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-3">FIND US ONLINE</h2>
            {/* Added Flex Row here to stop them from stacking vertically */}
            <ul className="flex flex-row gap-4">
              <li><a href="#" className="hover:text-blue-500 text-lg transition-all"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#" className="hover:text-blue-500 text-lg transition-all"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="#" className="hover:text-blue-500 text-lg transition-all"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#" className="hover:text-blue-500 text-lg transition-all"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="#" className="hover:text-blue-500 text-lg transition-all"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>

          <div className="text-gray-500 text-xs flex flex-col gap-3 mt-4">
            <p className="font-bold">REGD. OFFICE ADDRESS</p>
            <p>Razorpay Software Private Limited,<br/> 1st Floor, SJR Cyber,<br/> 22 Laskar Hosur Road, Adugodi,<br/> Bengaluru, 560030,<br/>Karnataka, India<br/>CIN: U72200KA2013PTC097389</p>
            <p>&copy; Razorpay 2022<br/>All Rights Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Contact