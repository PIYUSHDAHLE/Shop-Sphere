import { useEffect, useState } from "react";
import { Input, Card, CardBody } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/auth.slice";
import AppButton from "../components/common/AppButton";
import { RootState, AppDispatch } from "../store";
const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector(
    (state: RootState) => state.auth
  );
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[360px]">
        <CardBody className="space-y-4">
          <h1 className="text-2xl font-bold text-center">
            Shop Sphere
          </h1>
          <p className="text-center text-gray-500 text-sm">
            Login to continue
          </p>
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}
          <AppButton
            fullWidth
            onClick={handleLogin}
            isLoading={loading}
          >
            Login
          </AppButton>
        </CardBody>
      </Card>
    </div>
  );
};
export default Login;
