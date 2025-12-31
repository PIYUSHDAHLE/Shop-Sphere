import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@heroui/react";
import { MdInventory, MdCategory, MdAttachMoney, MdShoppingCart } from "react-icons/md";
import AppButton from "../components/common/AppButton";
import MainLayout from "../layouts/MainLayout";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500 text-sm">
          Welcome back! Here’s an overview of your store performance.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Products" value="120" icon={<MdInventory />} />
        <StatCard title="Categories" value="6" icon={<MdCategory />} />
        <StatCard title="Orders" value="248" icon={<MdShoppingCart />} />
        <StatCard title="Revenue" value="$12,430" icon={<MdAttachMoney />} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardBody className="space-y-3">
            <h3 className="text-lg font-semibold">Manage Products</h3>
            <p className="text-gray-600 text-sm">
              View, add, edit, or remove products from your store inventory.
            </p>
            <AppButton onClick={() => navigate("/products")}>
              Go to Products
            </AppButton>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="space-y-3">
            <h3 className="text-lg font-semibold">Track Orders</h3>
            <p className="text-gray-600 text-sm">
              Monitor recent orders and manage order statuses efficiently.
            </p>
            <AppButton onClick={() => navigate("/orders")}>View Orders</AppButton>
          </CardBody>
        </Card>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card>
          <CardBody className="space-y-3 text-sm text-gray-700">
            <p>✔ New product added: <strong>Wireless Headphones</strong></p>
            <p>✔ Order #1023 has been placed</p>
            <p>✔ Product <strong>Leather Wallet</strong> was updated</p>
          </CardBody>
        </Card>
      </div>
    </MainLayout>
  );
};
const StatCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <Card>
    <CardBody className="flex items-center gap-4">
      <div className="text-3xl text-purple-700">{icon}</div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </CardBody>
  </Card>
);
export default Dashboard;