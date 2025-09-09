import {
  CartselectorDrower,
  onocloseCardDeowerAction,
} from "../app/Fetcher/GlopalSlice";
import type { AppDispatch } from "@/app/store";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Footer,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import CartDrowerItem from "./CartDrowerItem";
import { Cartselector, RemoveAllCArt } from "../app/Fetcher/Cart";
import type { Iprop } from "@/Interfaces";

export const CardDrower = (props: Iprop) => {
  const {...} = props; 
  const { isopenCardDeower } = useSelector(CartselectorDrower);
  const { cart } = useSelector(Cartselector);

  const disbatch = useDispatch<AppDispatch>();

  const close = () => {
    disbatch(onocloseCardDeowerAction());
  };

  const Removeall = () => {
    disbatch(RemoveAllCArt(props.id));
  };
  return (
    <>
      <Drawer open={isopenCardDeower} onClose={close} position="right">
        <div className="flex flex-col h-full">
          <DrawerHeader title="Drawer" />

          {/* العناصر تعمل scroll */}
          <DrawerItems className="flex-1 overflow-y-auto">
            {cart.length ? (
              cart.map((item: Iprop) => (
                <CartDrowerItem key={item.id} {...item} />
              ))
            ) : (
              <p>Cart Not Found Item</p>
            )}
          </DrawerItems>

          {/* الفوتر ثابت تحت */}
          <Footer
            container
            className="bg-gray-900 text-white sticky bottom-0 left-0 w-full"
          >
            <div className="w-full flex justify-center items-center">
              <Button color="red" onClick={Removeall}>
                Remove All
              </Button>
            </div>
          </Footer>
        </div>
      </Drawer>
    </>
  );
};
