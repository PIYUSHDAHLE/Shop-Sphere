// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Users from "./pages/Users";
// import Carts from "./pages/Carts";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Auth */}
//         <Route path="/login" element={<Login />} />

//         {/* Main Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/carts" element={<Carts />} />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Users from "./pages/Users";
import Carts from "./pages/Carts";

const App = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />

      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/users" element={<Users />} />
      <Route path="/carts" element={<Carts />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
