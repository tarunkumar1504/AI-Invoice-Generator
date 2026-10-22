import React, { useState } from 'react'
import { FAQS } from '../../utils/data'

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