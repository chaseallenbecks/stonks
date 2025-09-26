'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import NavItems from './NavItems';

function UserDropdown() {
  const router = useRouter();

  async function handleSignOut() {
    router.push('/sign-in');
  }

  const user = {
    name: 'Chase Allen',
    email: 'chase@aol.com',
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
          variant="ghost"
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-yellow-500 text-yellow-500 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="hidden md:flex flex-col items-start leading-none">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          {' '}
          <div className="relative flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-yellow-500 text-yellow-500 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>

              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600" />

        <DropdownMenuItem
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor:pointer"
          onClick={() => handleSignOut}
        >
          <LogOut className="hidden sm:block h-4 w-4 mr-2" />
          Log Out
        </DropdownMenuItem>

        <DropdownMenuSeparator className="sm:hidden bg-gray-600" />

        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
