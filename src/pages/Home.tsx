import MainLayout from "../layouts/MainLayout";
const Home = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Welcome to Shop Sphere</h1>
      <p className="mt-3 text-gray-600">
        Your one-stop shop powered by Fake Store API.
      </p>
    </MainLayout>
  );
};
export default Home;
