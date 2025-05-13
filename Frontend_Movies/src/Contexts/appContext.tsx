import React, { createContext, useContext, useState } from "react";
import Toast from "../components/Toast"



type ToastMessage = {
    message:string;
    type:"SUCCESS" | "ERROR";
}

type AppContext = {
    showToast:(toastMessage:ToastMessage)=> void

}

type childrenType = {
    children:React.ReactNode
}
const AppContext =createContext<AppContext | undefined>(undefined)

export const AppContextProvider = ({children}:childrenType)=>{
    const [toast,setToast] = useState<ToastMessage|undefined>(undefined)

    

        
    return (
        <AppContext.Provider value={{showToast:(toastMessage:ToastMessage)=> setToast(toastMessage) }}>
        {toast && <Toast   message={toast.message} type={toast.type} onClose={()=>{setToast(undefined)} }  />}
            {children}
        </AppContext.Provider>
    )
}



export const useTheContext = ()=>{
    const context = useContext(AppContext)
    return context  as ContextApp ;
}
