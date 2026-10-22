import React from 'react'
import { Link } from 'react-router-dom'
import Hero_IMG from '../../assets/Hero_IMG.png'


const Hero = () => {
    const isAuthenticated =true

  return (
    <section className='relative  bg-[#fbfbfb] overflow-hidden min-h-screen'>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32">
                <div className="text-center max-w-4xl mx-auto">

                    <h1 className='text-3xl sm:text-4xl lg:text-6xl font-extrabold text-blue-950 leading-tight mb-6'>BillPilot - The Smarter Way to Manage Your Invoices</h1>


                    <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-8 mx-auto max-w-3xl">Create professional invoices in seconds, automate payment reminders, and gain smart financial insights — all in one place with BillPilot. </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {isAuthenticated ? 
                        (
                            <Link to="/Dashboard" className='bg-gradient-to-r from-blue-950 to-blue-900 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-900 transition-all duration-200 hover:scale-105 hover:shadow-2xl transform '>
                            Go to Dashboard
                            </Link>
                        )
                        : (
                            <Link to="/signup" className='bg-gradient-to-r from-blue-950 to-blue-900 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-900 transition-all duration-200 hover:scale-105 hover:shadow-2xl transform'>Get Started for Free</Link>
                        )}
                        <a href="#features" className="border-2 border-black text-black px-8 py-4 font-bold rounded-xl text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-200 hover:scale-105 ">Learn More</a>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 max-w-5xl mx-auto relative">
                <img src={Hero_IMG} alt="Invoice Website Screenshot" className="rounded-2xl shadow-2xl shadow-gray-300 border-4 border-gray-200/20" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero