"use client"
import styles from "./menu.module.css"
import "./globals.css"
import Link from "next/link"
import { Montserrat, Montserrat_Alternates } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

const montserratAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
})

export const metadata = {
  title: "Assignment 5",
  description: "JS-Framework course",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} ${montserratAlt.className}`}
    >
      <body>
        <header className={montserratAlt.className}>
          <p className={styles.logotype}>What the Coke?!</p>
          <section className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/largeflasks">Large flasks</Link>
            <Link href="/smallflasks">Small flasks</Link>
            <Link href="/cans">Cans</Link>
          </section>
        </header>

        <main className={montserrat.className}>{children}</main>

        <footer>
          <h2>Timothy Karlsson</h2>
        </footer>
      </body>
    </html>
  )
}
