import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


interface Props {
    children:React.ReactNode
}

export default function Layout({children}:Props) {
  return (
    <div className='flex  bg-[#E0E0E0] flex-col min-h-screen'>
        <Header></Header>
        <div>{children}</div>
        <Footer></Footer>
    </div>
  )
}
