import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6 bg-gray-50">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
