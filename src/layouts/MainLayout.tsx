import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="md:ml-64 flex flex-col min-h-screen">
        <main className="flex-1 p-4 md:p-6 overflow-y-auto pt-20 md:pt-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
