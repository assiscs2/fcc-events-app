import { Inter } from "next/font/google"
import { MainLayout } from "../components/layout/main-layout"
import "./../styles/general.sass"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Events App",
  description: "Created by Gustavo Assis",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="layout">
      <MainLayout>
        <body className={inter.className}>{children}</body>
      </MainLayout>
    </html>
  )
}
