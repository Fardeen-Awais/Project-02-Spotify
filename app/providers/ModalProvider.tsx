'use client'
import { useEffect, useState } from "react"
import Authmodal from "../components/AuthModal"
import UploadModal from "../components/UploadModal"

const ModalProvider = () => {
    const [isMounted, setIsMouted] = useState(false)

    useEffect(() => {
        setIsMouted(true)
    }, [])

    if (!isMounted) {
        return null;
    }
    return (
        <>        
            <Authmodal />
            <UploadModal />  {/*  // Now we are passing upload modal as well to our layout */}
        </>

    )
}

export default ModalProvider //This modal provider we show in our layout.tsx