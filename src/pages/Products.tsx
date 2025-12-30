import { useEffect, useState } from "react";
import { Input, Select, SelectItem, Card, CardBody } from "@heroui/react";
import { Link } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
} from "../api/products.api";
import Loader from "../components/common/Loader";
import PageTitle from "../components/common/PageTitle";
import AppButton from "../components/common/AppButton";
import MainLayout from "../layouts/MainLayout";
const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
      setFiltered(res.data);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    let data = [...products];

    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }
    setFiltered(data);
  }, [search, category, products]);
  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };
  if (loading) return <Loader />;
  return (
    <MainLayout>
      <PageTitle title="Products" />
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          selectedKeys={[category]}
          onSelectionChange={(keys) =>
            setCategory(Array.from(keys)[0] as string)
          }
        >
          <SelectItem key="all">All</SelectItem>
          <SelectItem key="electronics">Electronics</SelectItem>
          <SelectItem key="jewelery">Jewelery</SelectItem>
          <SelectItem key="men's clothing">Men's Clothing</SelectItem>
          <SelectItem key="women's clothing">Women's Clothing</SelectItem>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <Card key={p.id}>
            <CardBody className="space-y-2">
              <img
                src={p.image}
                className="h-32 mx-auto object-contain"
              />
              <h3 className="text-sm font-medium line-clamp-2">
                {p.title}
              </h3>
              <p className="font-semibold">${p.price}</p>
              <div className="flex justify-between gap-2">
                <Link to={`/products/${p.id}`}>
                  <AppButton size="sm">View</AppButton>
                </Link>
                <AppButton
                  size="sm"
                  color="danger"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </AppButton>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
};
export default Products;
