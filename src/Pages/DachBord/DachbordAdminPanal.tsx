import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { Link, NavLink, Outlet } from "react-router-dom";

export const DachbordAdminPanal = () => {
  return (
    <>
      <div className="flex">
        <Sidebar
          aria-label="Sidebar   multi-level dropdown example"
          className="[&>div]:bg-gradient-to-b  min-w-min [&>div]:p-0 h-dvh"
        >
          <div className="flex h-full  flex-col justify-start py-2">
            <div>
              <form className="pb-3 md:hidden">
                <TextInput
                  icon={HiSearch}
                  type="search"
                  placeholder="Search"
                  required
                  size={32}
                />
              </form>
              <SidebarItems>
                <SidebarItemGroup>
                  <NavLink as={Link} to="" icon={HiChartPie}>
                    Dashboard
                  </NavLink>
                  <SidebarItem
                    as={Link}
                    to="/dashBord/Prudact"
                    icon={HiShoppingBag}
                  >
                    Products
                  </SidebarItem>
                  <SidebarItem as={Link} to="/dashBord/catigory" icon={HiUsers}>
                    catigory
                  </SidebarItem>
                  <SidebarItem href="/authentication/sign-in" icon={HiLogin}>
                    Sign in
                  </SidebarItem>
                  <SidebarItem href="/authentication/sign-up" icon={HiPencil}>
                    Sign up
                  </SidebarItem>
                </SidebarItemGroup>
                <SidebarItemGroup>
                  <SidebarItem
                    href="https://github.com/themesberg/flowbite-react/"
                    icon={HiClipboard}
                  >
                    Docs
                  </SidebarItem>
                  <SidebarItem
                    href="https://flowbite-react.com/"
                    icon={HiCollection}
                  >
                    Components
                  </SidebarItem>
                  <SidebarItem
                    href="https://github.com/themesberg/flowbite-react/issues"
                    icon={HiInformationCircle}
                  >
                    Help
                  </SidebarItem>
                </SidebarItemGroup>
              </SidebarItems>
            </div>
          </div>
        </Sidebar>
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};
