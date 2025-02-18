import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar({ isLoggedIn }) {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex items-center justify-between sticky top-0 z-50">
      <div className="text-xl font-bold flex items-center flex-1">
        Travel Site Name
        <Image
          src="/images/logo.png" // Route of the image file
          height={55} // Desired size with correct aspect ratio
          width={55} // Desired size with correct aspect ratio
          alt="Airplane Logo"
          className="ml-4"
        />
      </div>

      <ul className="flex space-x-6 text-lg">
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/">About</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/">Servieses</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/">Contact</Link>
        </li>
      </ul>

      <div className="flex-1 flex justify-end">
        {isLoggedIn ? (
          <div>pfp</div>
        ) : (
          <Button className="w-24 rounded-full bg-blue-600 hover:bg-blue-500">
            Log In
          </Button>
        )}
      </div>
    </nav>
  );
}
