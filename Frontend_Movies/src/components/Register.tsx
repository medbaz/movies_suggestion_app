import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import * as apiQuery from '../apiQueries/api_queries'
import { useTheContext } from '../Contexts/appContext'

export type formInputsTypes = {
  first_name:string ;
  last_name:string;
  email:string;
  password:string;
  confirm_password:string;
  terms:boolean

}
export default function Register() {
  
  const {showToast} = useTheContext()



  const {mutate} = useMutation({
    mutationFn:apiQuery.Register,
    onSuccess() {
      console.log("succefful login");
      showToast({type:"SUCCESS",message:"user successfully registered"})
    },
    onError(error) {
      console.log(error.message);
      showToast({message:error.message,type:"ERROR"})

    },
  })
  const {register,handleSubmit,watch,formState:{errors}} = useForm<formInputsTypes>()
  const onSubmit = (data:formInputsTypes)=>{
      mutate(data)
  }
  const password = watch("password")
  
  return (
    <section className=" ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  ">
        
        <div className="w-full bg-white rounded-lg shadow dark:border   sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>




                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)} action="#">
                  <div className='flex flex-col sm:flex-row gap-4  justify-between'>
                    <div className='flex-1 relative '>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input {...register("first_name" , {required:true} )} type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name" />
                        {errors.first_name && <span className='absolute bottom-[-20px] right-2 text-sm text-red-600 ' >first name required </span>} 
                    </div>
                    <div className='flex-1 relative'>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input {...register("last_name",{required:true})} type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last name" />
                        {errors.last_name && <span className='absolute bottom-[-20px] right-2 text-sm text-red-600 ' >last name required </span>} 
                    </div>
                    </div>
                    <div className='relative'>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input {...register("email",{required:true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                        {errors.email && <span className='absolute bottom-[-20px] right-2 text-sm text-red-600 ' >email required </span>} 
                        </div>
                    <div className='relative'>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input {...register("password",{required:true , min:8,
                          pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{4,}$/,
                            message: "Password must include at least one letter, one number, and one symbol",
                          }
                          })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.password && <span className='absolute bottom-[-20px] right-2 text-sm text-red-600 ' >invalid password </span>} 
                        </div>
                    <div className='relative'>
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input {...register("confirm_password",{required:true , min:8, validate:(value)=>{ return password === value || "password doesnt match" } })} type="confirm_password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.confirm_password && <span className='absolute bottom-[-20px] right-2 text-sm text-red-600 ' >please confirm your password </span>} 
                    </div>




                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input  id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          {...register("terms" , {required:true})} />
                          
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" className=" hover:bg-blue-500 w-full text-white bg-primary-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600  dark:focus:ring-primary-800">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to={'/Sign_in'}><a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a></Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}
