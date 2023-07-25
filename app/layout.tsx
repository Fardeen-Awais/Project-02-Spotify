import Sidebar from './components/Sidebar'
import './globals.css'
import { Poppins } from 'next/font/google'
import SupabaseProvider from './providers/SupabaseProvider'
import UserProvider from './providers/UserProvider'
import ModalProvider from './providers/ModalProvider'
import ToasterProvider from './providers/ToasterProvider'

const inter = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Spotify by fardeen',
  description: 'Spotify clone with supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/> {/* Showing the modal provider */}
          <Sidebar>
            {children}
          </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
