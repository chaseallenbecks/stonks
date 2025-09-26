'use client';

import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavItems() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-10 p-2 font-medium">
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href}>
          <Link
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href) ? 'text-gray-100' : ''
            }`}
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
