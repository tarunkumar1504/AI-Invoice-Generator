import React, { useState } from 'react'
import { FAQS } from '../../utils/data'
import { ChevronDown } from 'lucide-react'

const FaqItem= ({faq,isOpen , onClick})=>(
    <div className="border border-gray-200 rounded-xl overflow-hidden  ">
        <button className='w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200' onClick={onClick} >
            <span className="text-lg font-medium text-gray-900 pr-4 text-left ">{faq.question}</span>
            <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180 ': ''} `}  />

        </button>
        {isOpen && 
        <div className="px-6 pt-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 ">
            {faq.answer}
        </div>
        }
    </div>
)

const Faqs = () => {

    const [openIndex, setOpenIndex] = useState(null)

    const handleClick = (idx) =>{
        setOpenIndex(openIndex===idx ? null : idx)
    } 

  return (
    <section id='faq' className='py-20 lg:py-28 bg-white'>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 ">
                <h2 className='text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4'>Frequently Asked Questions</h2>
                <p className='text-xl max-w-3xl mx-auto text-gray-600'>Everything you need to know about billing and product.</p>
            </div>
            <div className="space-y-4">
                {FAQS.map((faq,idx)=>(
                    <FaqItem 
                    key={idx}
                    faq={faq}
                    isOpen={openIndex===idx}
                    onClick={()=> handleClick(idx)}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Faqs