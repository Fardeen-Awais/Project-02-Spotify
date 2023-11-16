import Sidebar from './components/Sidebar'
import './globals.css'
import { Poppins } from 'next/font/google'
import SupabaseProvider from './providers/SupabaseProvider'
import UserProvider from './providers/UserProvider'
import ModalProvider from './providers/ModalProvider'
import ToasterProvider from './providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const inter = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Spotify by fardeen',
  description: 'Spotify clone with supabase',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId()
  return (
    <html lang="en">
      <body className={inter.className}> 
      <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/> {/* Showing the modal provider */}
          <Sidebar songs={userSongs}> {/* Bejh rhay hai data ko sidebar mai dikhanay k liay*/}
            {children}
          </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
