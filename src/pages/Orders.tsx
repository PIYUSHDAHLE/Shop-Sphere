import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { getCarts, deleteCart } from "../api/carts.api";
import MainLayout from "../layouts/MainLayout";
import PageTitle from "../components/common/PageTitle";
import Loader from "../components/common/Loader";
import AppButton from "../components/common/AppButton";
import CartDetailsModal from "../components/Modal/CartDetailsModal";
const Carts = () => {
  const [carts, setCarts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCart, setSelectedCart] = useState<any>(null);
  const [openView, setOpenView] = useState(false);
  useEffect(() => {
    getCarts()
      .then((res) => setCarts(res.data))
      .finally(() => setLoading(false));
  }, []);
  const handleDelete = async (id: number) => {
    await deleteCart(id);
    setCarts((prev) => prev.filter((c) => c.id !== id));
  };
  if (loading) return <Loader />;
  return (
    <MainLayout>
      <PageTitle title="Orders" />
      <div className="hidden md:block overflow-x-auto">
        <Table aria-label="Carts Table" removeWrapper>
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>User ID</TableColumn>
            <TableColumn>Date</TableColumn>
            <TableColumn>Products</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody items={carts}>
            {(cart: any) => (
              <TableRow key={cart.id}>
                <TableCell>{cart.id}</TableCell>
                <TableCell>{cart.userId}</TableCell>
                <TableCell>{cart.date}</TableCell>
                <TableCell>{cart.products.length}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <AppButton
                      size="sm"
                      onClick={() => {
                        setSelectedCart(cart);
                        setOpenView(true);
                      }}
                    >
                      View
                    </AppButton>

                    <AppButton
                      size="sm"
                      color="danger"
                      onClick={() => handleDelete(cart.id)}
                    >
                      Delete
                    </AppButton>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="grid gap-4 md:hidden">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="bg-white p-4 rounded shadow space-y-2"
          >
            <p><b>Order ID:</b> {cart.id}</p>
            <p><b>User ID:</b> {cart.userId}</p>
            <p><b>Date:</b> {cart.date}</p>
            <p><b>Products:</b> {cart.products.length}</p>
            <div className="flex gap-2 pt-2">
              <AppButton
                size="sm"
                onClick={() => {
                  setSelectedCart(cart);
                  setOpenView(true);
                }}
              >
                View
              </AppButton>
              <AppButton
                size="sm"
                color="danger"
                onClick={() => handleDelete(cart.id)}
              >
                Delete
              </AppButton>
            </div>
          </div>
        ))}
      </div>
      <CartDetailsModal
        open={openView}
        onClose={() => setOpenView(false)}
        cart={selectedCart}
      />
    </MainLayout>
  );
};
export default Carts;