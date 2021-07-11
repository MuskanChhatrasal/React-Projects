import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const [isModalOpen,setModalOpen]=useState(false);

    const openSidebar =()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar =()=>{
        setIsSidebarOpen(false)
    }
    const openModal =()=>{
        setModalOpen(true)
    }
    const closeModal =()=>{
        setModalOpen(false)
    }
   return(
       <AppContext.Provider value={{isModalOpen,isSidebarOpen,openSidebar,closeSidebar,openModal,closeModal}}>
         {children}
       </AppContext.Provider>
   )
}
//custom hook
export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider} 
