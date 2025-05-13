import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div className='flex w-full sticky top-0 z-50 text-white font-semibold text-lg  justify-between h-[70px] rounded-br-xl rounded-bl-xl bg-sky-900 pl-8 pr-2 items-center'>
       <Link to={"/"}> <button> Tefrija </button></Link>
        <div className='flex w-64 justify-between  items-center'>
        <Link to={'/Sign_in'}> <button>Sign in</button></Link>
          <Link to={'/Sign_up'}> <button>Sign up </button></Link>
            <button className='w-[70px] h-[50px] bg-[#C19696] rounded-xl flex items-center'> </button>
        </div>
    </div>
  )
}