import Link from "next/link"
import Image from "next/image"
import "./../../styles/general.sass"
import logoAR from "../../../public/logo_black.png"

export function Header() {
  return (
    <header>
      <div className="navWrapper">
        <div className="topNav">
          <Image alt="logo" src={logoAR} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>Lorem ipsum dolor sit</h1>
      </div>
    </header>
  )
}
