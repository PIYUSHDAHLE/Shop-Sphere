import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 flex flex-col min-h-screen">
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
