'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}
              className={`text-white hover:text-gray-300 ${
                pathname === item.path ? 'font-bold' : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
