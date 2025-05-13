import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

interface Props {
    children:React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-sky-50 pb-12">
      <Header />
      <div className="relative flex flex-1 ">
        <Menu />
        <main className="flex-1 py-6 lg:ml-12 mt-8 overflow-auto  ">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
