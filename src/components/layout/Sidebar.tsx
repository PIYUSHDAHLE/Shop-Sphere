import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth.slice";
import { RootState, AppDispatch } from "../../store";
import AppButton from "../common/AppButton";
import Logo from "../../assets/shop-sphere-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setMobileOpen(false);
  };
  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) =>
    `px-3 py-2 rounded transition ${
      isActive(path)
        ? "bg-[#2c1344b4] text-white font-semibold"
        : "hover:bg-[#2c1344b4] text-white"
    }`;
  return (
    <>
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-[#9252D2] text-white flex-col justify-between z-50">
        <div>
          <div className="px-6 py-5 text-xl font-bold flex items-center gap-2">
            <img src={Logo} className="w-12 h-12" alt="logo" />
            Shop Sphere
          </div>
          <nav className="flex flex-col gap-1 px-4 py-6">
            <Link className={linkClass("/")} to="/">
              Dashboard
            </Link>
            <Link className={linkClass("/products")} to="/products">
              Products
            </Link>
            <Link className={linkClass("/users")} to="/users">
              Users
            </Link>
            <Link className={linkClass("/orders")} to="/orders">
              Orders
            </Link>
          </nav>
        </div>
        <div className="px-4 py-6">
          {!token ? (
            <AppButton fullWidth onClick={() => navigate("/login")}>
              Login
            </AppButton>
          ) : (
            <AppButton fullWidth color="secondary" onClick={handleLogout}>
              Logout
            </AppButton>
          )}
        </div>
      </aside>
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#9252D2] text-white flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <img src={Logo} className="w-9 h-9" alt="logo" />
          Shop Sphere
        </div>
        <button onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </button>
      </header>
      <div
        className={`fixed inset-0 z-50 md:hidden transition ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-64 bg-[#9252D2] text-white flex flex-col justify-between transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-2 font-bold">
                <img src={Logo} className="w-10 h-10" alt="logo" />
                Shop Sphere
              </div>
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-4 py-6">
              <Link
                onClick={() => setMobileOpen(false)}
                className={linkClass("/")}
                to="/"
              >
                Dashboard
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                className={linkClass("/products")}
                to="/products"
              >
                Products
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                className={linkClass("/users")}
                to="/users"
              >
                Users
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                className={linkClass("/orders")}
                to="/orders"
              >
                Orders
              </Link>
            </nav>
          </div>
          <div className="px-4 py-6">
            {!token ? (
              <AppButton fullWidth onClick={() => navigate("/login")}>
                Login
              </AppButton>
            ) : (
              <AppButton fullWidth color="secondary" onClick={handleLogout}>
                Logout
              </AppButton>
            )}
          </div>
        </aside>
      </div>
    </>
  );
};
export default Sidebar;
