import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import AppButton from "../common/AppButton";
interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  user: any;
}
const UserDetailsModal = ({
  open,
  onClose,
  user,
}: UserDetailsModalProps) => {
  if (!user) return null;
  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      size="lg"
      backdrop="blur"
    >
      <ModalContent>
        <ModalHeader className="text-lg font-semibold">
          User Details
        </ModalHeader>
        <ModalBody className="space-y-3 text-sm">
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong>{" "}
            {user.name.firstname} {user.name.lastname}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <div>
            <strong>Address:</strong>
            <p>
              {user.address.number}, {user.address.street}
            </p>
            <p>
              {user.address.city} - {user.address.zipcode}
            </p>
          </div>
          <div>
            <strong>Geo Location:</strong>
            <p>
              Lat: {user.address.geolocation.lat}, Long:{" "}
              {user.address.geolocation.long}
            </p>
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
export default UserDetailsModal;
