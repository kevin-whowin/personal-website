'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="flex sticky top-0 z-50 bg-gray-800 text-white p-4">
      <div className="items-end flex space-x-4">
        <button type="button" onClick={() => router.push('/')}>
          Kevin
        </button>
        <div>
          <Link href="/projects" className="">
            <p className="inset-y-0 left-0 pl-24">
              Projectx
            </p>
          </Link>
        </div>
    </div>
    </nav>
  );
};

export default Navbar;
