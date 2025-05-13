
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import * as apiQueries from '../apiQueries/api_queries'
import { useForm } from 'react-hook-form'
import {useTheContext} from "../Contexts/appContext"


export type USERtype  = {
    email:string;
    password:string;
    terms:boolean
}


function Login() {

    const {showToast} = useTheContext()
    const {register , handleSubmit , formState:{errors}} = useForm<USERtype>()

    const {mutate} = useMutation({mutationFn: apiQueries.LoginQ ,
        onSuccess(data){
            console.log(data);
            showToast({message:"logged in " ,  type:"SUCCESS" })
        },
        onError(error) {
        showToast({message:error.message,  type:"ERROR" })
      }
    })
    const onSubmit = handleSubmit((data:USERtype)=>{
        mutate(data)
    })

  return (
    <section className=" ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  ">
        
        <div className="w-full bg-white rounded-lg shadow dark:border   sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Welcome back !
                </h1>
                <form onSubmit={onSubmit} className="space-y-4 md:space-y-6" >
                  
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email"  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                        {...register("email" , {required:true})}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password"  id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("password" , {required:true})}
                        />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          {...register("terms" , {required:true})}
                           />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>

                    {(errors.terms || errors.email || errors.password) &&  <p className="text-sm font-light text-red-500 w-full m-auto text-center "> invalide credentials </p>
                    }
                    { (errors.email && errors.terms)  &&  <p className="text-sm font-light text-red-500 w-full m-auto text-center "> accept Terms and conditions </p>
                    }
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Dont have an account? <Link to={'/Sign_up'}> <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</a></Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Login