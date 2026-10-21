import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileDropdown = ({
    isOpen,
    onToggle,
    avatar,
    companyname,
    email,
    onLogout
}) => {
    
    const Navigate = useNavigate()

  return (
    <div className='relative '>
      <button onClick={onToggle} className='flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200'>
        {avatar ?( 
        <img src={avatar} alt="Avatar" className='w-9 h-9 object-cover rounded-xl'/>
        )
        :   (
            <div className='h-8 w-8 bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-center rounded-xl'>
                <span className='text-white font-semibold text-sm'>
                {companyname?.charAt(0).toUpperCase()}
                </span>
            </div>
        )}
        <div className='hidden sm:block text-left'>
            <div className="text-sm font-medium text-gray-900">{companyname}</div>
            <div className="text-xs text-gray-500">{email}</div>
        </div>
        <ChevronDown className='w-4 h-4 text-gray-400'/>

      </button>

      {isOpen && 
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 ">
            <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{companyname}</p>
                <p className="text-xs text-gray-500">{email}</p>
            </div>

            <a onClick={()=> Navigate('/profile')}
                className='block px-4 py-2 text-sm bg-gary-700 hover:bg-gray-50 transition-colors cursor-pointer'
                >View Profile</a>
            <div className="border-t border-gray-100 mt-2 pt-2">
                <a href="#" onClick={onLogout}
                className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors'
                >Sign Out</a>
            </div>
        </div>
      }

    </div>
    
    
  )
}

export default ProfileDropdown
