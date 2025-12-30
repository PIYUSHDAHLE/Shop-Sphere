import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@heroui/react";
import { useState } from "react";
import AppButton from "../common/AppButton";

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (data: any) => void;
}

const AddCartModal = ({ open, onClose, onAdd }: Props) => {
  const [userId, setUserId] = useState("");

  const handleSubmit = () => {
    onAdd({
      userId: Number(userId),
      date: new Date().toISOString(),
      products: [{ productId: 1, quantity: 1 }],
    });
    setUserId("");
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Add New Cart</ModalHeader>

        <ModalBody>
          <Input
            label="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <AppButton onClick={handleSubmit} fullWidth>
            Add Cart
          </AppButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCartModal;
