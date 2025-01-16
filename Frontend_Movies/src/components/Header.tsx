import React from 'react'

export default function Header() {
  return (
    <div className='flex sticky top-0 z-0 text-white font-bold text-xl w-auto justify-between h-[70px] rounded-br-xl rounded-bl-xl bg-[#C2C2C2] pl-8 pr-2 items-center'>
        <button> Tefrija </button>
        <div className='flex w-64 justify-between  items-center'>
            <button>Sign in </button>
            <button>Sign up </button>
            <button className='w-[70px] h-[50px] bg-[#C19696] rounded-xl flex items-center'> </button>
        </div>
    </div>
  )
}