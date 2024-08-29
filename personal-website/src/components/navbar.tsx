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
        <button type="button" onClick={() => router.push('/projects')}>
         Projects
        </button>     
        <button type="button" onClick={() => router.push('/aboutme')}>
          About Me
        </button>

    </div>
    </nav>
  );
};

export default Navbar;
