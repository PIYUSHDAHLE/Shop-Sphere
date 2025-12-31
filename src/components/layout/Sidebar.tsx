import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth.slice";
import { RootState, AppDispatch } from "../../store";
import AppButton from "../common/AppButton";
import Logo from "../../assets/shop-sphere-logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isActive = (path: string) =>
    location.pathname === path;

  const linkClass = (path: string) =>
    `px-3 py-2 rounded transition ${
      isActive(path)
        ? "bg-[#2c1344b4] text-white font-semibold"
        : "hover:bg-[#2c1344b4] text-white"
    }`;

  return (
    <aside
      className="
        fixed left-0 top-0
        h-screen w-64
        bg-[#9252D2] text-white
        flex flex-col justify-between
        z-50
      "
    >
      <div>
        <div className="px-6 py-5 text-xl font-bold flex justify-start items-center gap-2">
          <img src={Logo} className="w-12 h-12" alt="logo" />
          <p className="">
          Shop Sphere
          </p>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6">
          <Link className={linkClass("/")} to="/">
            Home
          </Link>
          <Link className={linkClass("/products")} to="/products">
            Products
          </Link>
          <Link className={linkClass("/users")} to="/users">
            Users
          </Link>
          <Link className={linkClass("/carts")} to="/carts">
            Carts
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
  );
};

export default Sidebar;
