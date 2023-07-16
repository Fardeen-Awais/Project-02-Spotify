import Sidebar from './components/Sidebar'
import './globals.css'
import { Poppins } from 'next/font/google'
import SupabaseProvider from './providers/SupabaseProvider'

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
        <SupabaseProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  )
}
