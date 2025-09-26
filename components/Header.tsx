import Link from 'next/link';
import Image from 'next/image';

import NavItems from '@/components/NavItems';
import UserDropdown from './UserDropdown';

function Header() {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            className="w-auto h-8 cursor-pointer"
            src="/assets/icons/logo.svg"
            width={140}
            height={32}
            alt="logo"
          />
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdown />
      </div>
    </header>
  );
}

export default Header;
