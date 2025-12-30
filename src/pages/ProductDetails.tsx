import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardBody, Chip } from "@heroui/react";
import { getProduct, updateProduct } from "../api/products.api";
import Loader from "../components/common/Loader";
import AppButton from "../components/common/AppButton";
import MainLayout from "../layouts/MainLayout";
const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    getProduct(Number(id))
      .then((res) => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);
  const handleUpdate = async () => {
    const updated = {
      ...product,
      price: product.price + 10,
    };
    const res = await updateProduct(product.id, updated);
    setProduct(res.data);
  };
  if (loading) return <Loader />;
  if (!product)
    return (
      <MainLayout>
        <p className="text-center text-gray-500">
          Product not found
        </p>
      </MainLayout>
    );
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 mx-auto object-contain"
            />
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">
                {product.title}
              </h2>
              <Chip color="primary">{product.category}</Chip>
              <p className="text-gray-600">
                {product.description}
              </p>
              <p className="text-lg font-bold">
                ${product.price}
              </p>
              <div className="flex gap-3">
                <AppButton onClick={handleUpdate}>
                  Update Price
                </AppButton>
                <AppButton
                  variant="bordered"
                  onClick={() => navigate(-1)}
                >
                  Back
                </AppButton>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </MainLayout>
  );
};
export default ProductDetails;
