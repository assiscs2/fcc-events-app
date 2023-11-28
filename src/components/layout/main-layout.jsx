import React from "react"
import { Footer } from "../footer/footer"
import { Header } from "../header/header"

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
