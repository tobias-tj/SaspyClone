import { CircleUserIcon } from 'lucide-react';
import { ModeToggle } from '../ModeToggle';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {

  return (
    <div className="navbar h-20 bg-primary-color">
      <div className="wrapper max-w-screen-xl mx-auto flex items-center justify-between h-full">

        <Sidebar />
        
        <span className="text-blue dark:text-white font-bold text-3xl tracking-[10px]">
          <span className="hidden md:block">SasPy</span>
        </span>
        <div className="buttonOption flex items-center gap-4">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full bg-secondary-color text-blue dark:text-white" size="icon" variant="secondary">
                <CircleUserIcon className="h-10 w-10" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
