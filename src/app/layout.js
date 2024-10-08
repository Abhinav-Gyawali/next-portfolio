import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Abhinav G'",
  description: 'I&apos;m Abhinav Gyawali, a 16-year-old developer with a passion for coding and technology. I specialize in React and Django, and I love building innovative web solutions. I&apos;m always eager to learn, improve my skills, and take on new challenges in the tech world.',
  author:'Abhinav Gyawali',
  keyword:'Abhinav, next, Gyawali, Abhinav Gyawali, web dev, fontend',
  viewport:'width=device-width initial-scale:1',
  themeColor:'#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
