import { HeroUIProvider } from "@heroui/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ReduxProvider>
  );
};
export default Provider;
