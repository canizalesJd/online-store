import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import logo from '../assets/logo.svg';
import { UserIcon } from './icons/UserIcon';
import { HeartIcon } from './icons/HeartIcon';

export default function Header() {
  const menuItems = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src={logo} alt="Logo Ipsum" className="h-7" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarBrand className="hidden sm:flex" justify="center">
        <img src={logo} alt="Logo Ipsum" className="drag-none h-7" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly color="light" variant="transparent" aria-label="Take a photo">
            <HeartIcon className="text-2xl text-foreground" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly color="light" variant="transparent" aria-label="Take a photo">
            <UserIcon className="text-2xl text-foreground" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color={'foreground'} href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
