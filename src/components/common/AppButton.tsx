import { Button } from "@heroui/react";

const AppButton = ({ children, ...props }: any) => (
  <Button color="primary" radius="sm" {...props}>
    {children}
  </Button>
);

export default AppButton;
