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
import { Link, NavLink } from "react-router-dom"; // ✅ استيراد React Router

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

              <DropdownDivider />
              <DropdownItem onClick={LogoutHandelr}>Sign out</DropdownItem>
            </Dropdown>
          </>
        ) : (
          <>
            {/* ✅ Login Link من غير refresh */}
            <NavbarLink as={Link} to="/Login">
              <Button color={"red"}> Login </Button>
            </NavbarLink>
          </>
        )}
        <NavbarToggle />
      </div>

      <NavbarCollapse className=" ml-9">
        {/* ✅ كل اللينكات باستخدام React Router */}
        <NavbarLink as={NavLink} to="/" end>
          Home
        </NavbarLink>
        <NavbarLink as={NavLink} to="/Prudact">
          Prudact
        </NavbarLink>

        <NavbarLink as={NavLink} to="/Login">
          Login
        </NavbarLink>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}

export default Navbar;
