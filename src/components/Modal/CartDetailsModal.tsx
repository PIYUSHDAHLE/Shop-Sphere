import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import AppButton from "../common/AppButton";
interface Props {
  open: boolean;
  onClose: () => void;
  cart: any;
}
const CartDetailsModal = ({ open, onClose, cart }: Props) => {
  if (!cart) return null;
  return (
    <Modal isOpen={open} onClose={onClose} size="lg">
      <ModalContent>
        <ModalHeader>Cart Details</ModalHeader>
        <ModalBody className="space-y-2 text-sm">
          <p><b>Cart ID:</b> {cart.id}</p>
          <p><b>User ID:</b> {cart.userId}</p>
          <p><b>Date:</b> {cart.date}</p>
          <div>
            <b>Products:</b>
            {cart.products.map((p: any, index: number) => (
              <p key={index}>
                Product #{p.productId} — Qty: {p.quantity}
              </p>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <AppButton onClick={onClose} fullWidth>
            Close
          </AppButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CartDetailsModal;
