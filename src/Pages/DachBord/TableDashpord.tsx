import type { Iprop } from "@/Interfaces";
import { useGetPrudactApiQuery } from "../../app/service/ApiSlice";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import AlertDilog from "../../Shared/AlertDilog";
import { useState } from "react";

export function TableDashpord() {
  const [openModal, setOpenModal] = useState(false);
  const { data, isLoading } = useGetPrudactApiQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Id</TableHeadCell>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Thumbnail</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Stock</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {data?.data?.map((product: Iprop) => (
            <TableRow
              key={product.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.category?.title}</TableCell>
              {/* الصورة */}
              <TableCell>
                <img
                  src={`${import.meta.env.VITE_SERVER_URL}${
                    product.thumbnail?.[0]?.url
                  }`}
                  alt={product.title}
                  className="h-12 w-12 object-cover rounded"
                />
              </TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.stoke}</TableCell> {/* ✅ صححنا الاسم */}
              <Button onClick={() => setOpenModal(!openModal)}>
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Edit
                </a>
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AlertDilog
        openModal={openModal}
        setOpenModal={setOpenModal}
        No={"Yes"}
        Yes={"No"}
        TExt="Are You sure Delet This Prudact ? "
      />
    </div>
  );
}

export default TableDashpord;
