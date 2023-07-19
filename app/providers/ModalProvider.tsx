'use client'
import { useEffect, useState } from "react"
import Modal from "../components/Modal"
import Authmodal from "../components/AuthModal"

const ModalProvider = () => {
    const [isMounted, setIsMouted] = useState(false)

    useEffect(()=>{
        setIsMouted(true)
    }, [])

    if(!isMounted){
        return null; 
    }
    return (
        <Authmodal/>
    )
}

export default ModalProvider //This modal provider we show in our layout.tsx