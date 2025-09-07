import { useDispatch, useSelector } from "react-redux";
import { Cartselector } from "../app/Fetcher/Cart";
import CookiServes from "../servers/CookiServes";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar as FlowbiteNavbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { isopenCardDeowerAction } from "../app/Fetcher/GlopalSlice";
import type { AppDispatch } from "@/app/store";
import { CardDrower } from "../Pages/CardDrower";

export function Navbar() {
  const token = CookiServes.get("jwt");
  const disbatch = useDispatch<AppDispatch>();

  const { cart } = useSelector(Cartselector);
  const Open = () => disbatch(isopenCardDeowerAction());

  const LogoutHandelr = () => {
    CookiServes.remove("jwt");
    window.location.reload();
  };
  return (
    <FlowbiteNavbar fluid rounded>
      <div className="flex md:order-2">
        <div className="flex items-center justify-center">
          <Button onClick={Open}>Cart[{cart.length}]</Button>
        </div>
        <CardDrower />
        {token ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <DropdownHeader>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </DropdownHeader>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownDivider />
              <DropdownItem onClick={LogoutHandelr}>Sign out</DropdownItem>{" "}
              {/* هنا مكانه الصحيح */}
            </Dropdown>
          </>
        ) : (
          <>
            <NavbarLink href="/Login">Login</NavbarLink> {/* لو مفيش توكن */}
          </>
        )}
        <NavbarToggle />
      </div>

      <NavbarCollapse className=" ml-9">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="/Prudact">Prudact</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="/Login">Login</NavbarLink>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}

export default Navbar;
