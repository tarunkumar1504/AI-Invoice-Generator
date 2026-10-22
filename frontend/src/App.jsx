import React from 'react'
import {Navigate, Route, Router,Routes} from 'react-router-dom'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import LandingPage from './pages/LandingPage/LandingPage'
import Signup from './pages/Auth/Signup'
import {Toaster} from 'react-hot-toast'
import ProtectedRoute from './components/auth/ProtectedRoute'
import AllInvoice from './pages/Invoice/AllInvoice'
import CreateInvoice from './pages/Invoice/CreateInvoice'
import InvoiceDetails from './pages/Invoice/InvoiceDetails'
import Profile from './pages/Profiles/Profile'

const App = () => {
  return (
    <div >
      
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            {/*Protected Routes */}
            <Route path='/' element={<ProtectedRoute/>}>
                <Route path='Dashboard' element={<Dashboard/>}/>
                <Route path='invoices' element={<AllInvoice/>}/>
                <Route path='invoices/new' element={<CreateInvoice/>}/>
                <Route path='invoice/:id' element={<InvoiceDetails/>}/>
                <Route path='profile' element={<Profile/>}/>
            </Route>

            {/*Catch all routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      

      <Toaster
        toastOptions={{
          className:"",
        style: {
          fontSize:"13px",
        }
      }}
      /> 
    </div>
  )
}

export default App
