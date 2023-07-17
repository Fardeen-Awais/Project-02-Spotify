'use client'
import { useEffect, useState } from "react"

const ModalProvider = () => {
    const [isMounted, setIsMouted] = useState(false)

    useEffect(()=>{
        setIsMouted(true)
    }, [])

    if(!isMounted){
        return null; 
    }
    return (
        <>Modals ...</>
    )
}

export default ModalProvider