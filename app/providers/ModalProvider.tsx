'use client'
import { useEffect, useState } from "react"
import Modal from "../components/Modal"

const ModalProvider = () => {
    const [isMounted, setIsMouted] = useState(false)

    useEffect(()=>{
        setIsMouted(true)
    }, [])

    if(!isMounted){
        return null; 
    }
    return (
        <Modal title="Test Modal" description="Test description" isOpen onChange={()=>{}}>Test children</Modal>
    )
}

export default ModalProvider //This modal provider we show in our layout.tsx