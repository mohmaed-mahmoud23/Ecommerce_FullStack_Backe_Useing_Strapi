import type { AppDispatch } from "@/app/store";
import { decremint, Increiment, RemoveItem } from "../app/Fetcher/Cart";
import type { Iprop } from "@/Interfaces";
import { Card, Button, Footer } from "flowbite-react";
import { useDispatch } from "react-redux";

const CartDrowerItem = (props: Iprop) => {
  const { desecription, quantity, price, stoke, thumbnail, title, url } = props;

  const imageSrc = `${import.meta.env.VITE_SERVER_URL}${thumbnail?.[0]?.url}`;

  const dispatch = useDispatch<AppDispatch>();

  const IncreimentAction = () => {
    dispatch(Increiment(props.id));
  };

  const decremintAction = () => {
    dispatch(decremint(props.id));
  };

  const RemovedCation = () => {
    dispatch(RemoveItem(props.id));
  };
  return (
    <div>
      <Card className="flex flex-row items-center gap-4 p-4 shadow-md">
        {/* صورة المنتج */}
        <img
          src={imageSrc}
          alt={title}
          className="w-20 h-20 object-cover rounded-lg border"
        />

        {/* التفاصيل */}
        <div className="flex-1">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="text-sm text-gray-500 line-clamp-2">{desecription}</p>
          <p className="text-xs text-gray-400">Stock: {stoke}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              View Product
            </a>
          )}
        </div>

        {/* السعر + الكمية + أزرار */}
        <div className="flex flex-col items-end gap-2">
          <span className="text-base font-bold text-gray-900">${price}</span>
          <div className="flex items-center gap-2">
            <Button size="xs" color="white" onClick={decremintAction}>
              -
            </Button>
            <span className="text-sm">{quantity}</span>
            <Button size="xs" color="white" onClick={IncreimentAction}>
              +
            </Button>
          </div>
          <Button size="xs" color="red" onClick={RemovedCation}>
            Remove
          </Button>
        </div>
      </Card>
      <Footer container className="bg-gray-900 text-white"></Footer>
    </div>
  );
};

export default CartDrowerItem;
