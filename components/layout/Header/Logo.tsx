import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="block transition-transform duration-300 hover:scale-105">
      <Image 
        src="/louvx_logo.svg" 
        alt="Louvx Logo" 
        width={180} 
        height={80}
        priority
        className="w-auto sm:h-14 lg:h-16"
      />
    </Link>
  )
}

export default Logo
