// import type { NavigateOptions } from "react-router-dom";

// import { HeroUIProvider } from "@heroui/system";
// import { useHref, useNavigate } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";
// import { store } from "./store";

// declare module "@react-types/shared" {
//   interface RouterConfig {
//     routerOptions: NavigateOptions;
//   }
// }

// export function Provider({ children }: { children: React.ReactNode }) {
//   const navigate = useNavigate();

//   return (
//      <ReduxProvider store={store}>
//     <HeroUIProvider navigate={navigate} useHref={useHref}>
//       {children}
//     </HeroUIProvider>
//      </ReduxProvider>
//   );
// }

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
