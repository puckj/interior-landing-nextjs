import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white">
      <Link href="/">
        <Image src={"/logo.svg"} width={133} height={50} alt="Interno Logo" />
      </Link>
    </nav>
  );
};

export default NavBar;
