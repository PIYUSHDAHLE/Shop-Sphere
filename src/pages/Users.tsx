import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { getUsers, deleteUser } from "../api/users.api";
import Loader from "../components/common/Loader";
import PageTitle from "../components/common/PageTitle";
import AppButton from "../components/common/AppButton";
import MainLayout from "../layouts/MainLayout";
import UserDetailsModal from "../components/Modal/UserDetailsModal";
const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);
  const handleDelete = async (id: number) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };
  const handleView = (user: any) => {
    setSelectedUser(user);
    setOpenModal(true);
  };
  if (loading) return <Loader />;
  return (
    <MainLayout>
      <PageTitle title="Users" />
      <div className="hidden md:block overflow-x-auto">
        <Table aria-label="Users Table" removeWrapper>
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Username</TableColumn>
            <TableColumn>Phone</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody items={users}>
            {(user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  {user.name.firstname} {user.name.lastname}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <AppButton
                      size="sm"
                      onClick={() => handleView(user)}
                    >
                      View
                    </AppButton>
                    <AppButton
                      size="sm"
                      color="danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </AppButton>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="grid gap-4 md:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded shadow space-y-2"
          >
            <p><b>ID:</b> {user.id}</p>
            <p>
              <b>Name:</b> {user.name.firstname} {user.name.lastname}
            </p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <div className="flex gap-2 pt-2">
              <AppButton
                size="sm"
                onClick={() => handleView(user)}
              >
                View
              </AppButton>
              <AppButton
                size="sm"
                color="danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </AppButton>
            </div>
          </div>
        ))}
      </div>
      <UserDetailsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        user={selectedUser}
      />
    </MainLayout>
  );
};
export default Users;
