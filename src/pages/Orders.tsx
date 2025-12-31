import { SetStateAction, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import {
  getCarts,
  deleteCart,
} from "../api/carts.api";
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
      .then((res: { data: SetStateAction<any[]>; }) => setCarts(res.data))
      .finally(() => setLoading(false));
  }, []);
  const handleDelete = async (id: number) => {
    await deleteCart(id);
    setCarts((prev) => prev.filter((c) => c.id !== id));
  };
  if (loading) return <Loader />;
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-4">
        <PageTitle title="Orders" />
      </div>
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
      <CartDetailsModal
        open={openView}
        onClose={() => setOpenView(false)}
        cart={selectedCart}
      />
    </MainLayout>
  );
};
export default Carts;