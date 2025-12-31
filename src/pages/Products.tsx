import { SetStateAction, useEffect, useState } from "react";
import { Input, Select, SelectItem, Card, CardBody } from "@heroui/react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
} from "../api/products.api";
import Loader from "../components/common/Loader";
import PageTitle from "../components/common/PageTitle";
import MainLayout from "../layouts/MainLayout";
const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  useEffect(() => {
    getProducts().then((res: { data: SetStateAction<any[]>; }) => {
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
          <Card
  key={p.id}
  isPressable
  onPress={() => navigate(`/products/${p.id}`)}
>
            <CardBody className="space-y-2 p-5 flex flex-col gap-2 justify-between">
              <div className="flex flex-col gap-2">
              <img
                src={p.image}
                className="h-32 mx-auto object-contain"
                />
              <h3 className="text-sm font-medium line-clamp-2">
                {p.title}
              </h3>
              <p className="font-semibold">${p.price}</p>
                </div>
              <div className="flex justify-between gap-2">
                  <MdDelete className="w-6 h-6 text-purple-800"  onClick={(e) => {
          e.stopPropagation();
          handleDelete(p.id);
        }} />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
};
export default Products;
