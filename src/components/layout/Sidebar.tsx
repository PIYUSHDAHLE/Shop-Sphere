import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth.slice";
import { RootState, AppDispatch } from "../../store";
import AppButton from "../common/AppButton";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Top */}
      <div>
        <div className="px-6 py-5 text-xl font-bold border-b border-gray-700">
          Shop Sphere
        </div>

        <nav className="flex flex-col gap-2 px-4 py-6">
          <Link className="hover:bg-gray-800 px-3 py-2 rounded" to="/">
            Home
          </Link>
          <Link className="hover:bg-gray-800 px-3 py-2 rounded" to="/products">
            Products
          </Link>
          <Link className="hover:bg-gray-800 px-3 py-2 rounded" to="/users">
            Users
          </Link>
          <Link className="hover:bg-gray-800 px-3 py-2 rounded" to="/carts">
            Carts
          </Link>
        </nav>
      </div>

      {/* Bottom Auth Button */}
      <div className="px-4 py-6 border-t border-gray-700">
        {!token ? (
          <AppButton fullWidth onClick={() => navigate("/login")}>
            Login
          </AppButton>
        ) : (
          <AppButton
            fullWidth
            color="danger"
            onClick={handleLogout}
          >
            Logout
          </AppButton>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
