import { useSession, useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import useAuthModal from "../hooks/useAuthmodal"
import { useEffect } from "react"

const Authmodal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const { session } = useSessionContext()
    const {onClose, isOpen} = useAuthModal()

    useEffect(() => {
      if(session){
        router.refresh();
        onClose()
      }
    }, [session,router,onClose])
    

    const onChange = (open:boolean)=>{
        if(!open){
            onClose()
        }

    }

    return (
        <Modal  title="Welcome back" description="Login to your account" isOpen={isOpen} onChange={onChange}>
            <Auth supabaseClient={supabaseClient} magicLink providers={['github']} theme="dark" appearance={{
                theme: ThemeSupa, variables: {
                    default: { colors: { brand: '#404040', brandAccent: '#22c55e' } }}
            }} localization={{
                variables: {
                  "sign_in": {
                    email_label: 'Email',
                    password_label: 'Password',
                    button_label: "Log in",
                    "link_text": "Already have an account? Sign in"
                  },
                  "sign_up": {
                    email_label: 'Email',
                    password_label: 'Password',
                    button_label: "Create an account",
                  },
                },
              }}/>
        </Modal>
    )
}

export default Authmodal
