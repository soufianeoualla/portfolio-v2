import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex flex-col  justify-center items-center gap-y-2 mt-20 mb-10">
        <div className="logo text-xl">
        SOUFIANECODE
      </div>
      <nav>
        <ul className="flex items-center gap-x-16 text-lg  text-bright-gray/70 ">
          <li className="hover:text-white">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/"}>Work</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
