import './globals.css'
import { Playfair_Display, Poppins } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: "Katjri's Blog",
  description: 'Rookie in Cyber Security - CTF writeups and security research',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
