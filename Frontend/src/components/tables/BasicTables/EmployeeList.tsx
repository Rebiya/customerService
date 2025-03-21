import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import users from "../../../services/User/user.service";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal, TextField, Button } from "@mui/material";
interface Employee {
  user_id: number;
  user_email: string;
  user_first_name: string;
  user_last_name: string;
  user_phone_number: string;
  role_id: number;
  user_img: string | null;
  active_user_status: number;
  uuid: string;
}

export default function BasicTableOne() {
  const [Employees, setEmployees] = useState<Employee[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<Employee | null>(null);
  const [formData, setFormData] = useState<any>({});

  // Fetch Employees data on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const fetchedEmployees = await users.getEmployees();
        const formattedData = fetchedEmployees.map((Employee: any) => ({
          user_id: Employee.user_id,
          user_email: Employee.user_email,
          user_first_name: Employee.user_first_name,
          user_last_name: Employee.user_last_name,
          user_phone_number: Employee.user_phone_number,
          role_id: Employee.role_id,
          user_img: Employee.user_img || null,
          active_user_status: Employee.active_user_status,
          uuid: Employee.uuid,
        }));
        setEmployees(formattedData);
      } catch (error) {
        // console.error("Error fetching Employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  // Handler for editing a Employee (opens the modal)
  const handleEdit = (user: Employee) => {
    setSelectedUser(user);
    setFormData({
      ...user,
      active_user_status: user.active_user_status === 1 ? "Active" : "Inactive",
    });
    setIsModalOpen(true);
  };

  // Handler for closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setFormData({});
  };

  // Handler for updating a user (submitting the form)
  const handleUpdate = async () => {
    try {
      const updatedData = {
        ...formData,
        active_user_status: formData.active_user_status === "Active" ? 1 : 0,
      };
      await users.editUser(selectedUser!.uuid, updatedData);
      // Update the local state with the new user data
      setEmployees((prevEmployees) =>
        prevEmployees.map((Employee) =>
          Employee.uuid === selectedUser!.uuid
            ? { ...Employee, ...updatedData }
            : Employee
        )
      );
      closeModal();
    } catch (error) {
      // console.error("Error updating user:", error);
    }
  };

  // Handler for deleting a Employee
  const handleDelete = async (uuid: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await users.deleteUser(uuid); // Use uuid for the API call
        // Remove the user from the list
        setEmployees((prevEmployees) =>
          prevEmployees.filter((Employee) => Employee.uuid !== uuid)
        );
      } catch (error) {
        // console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              {/* User Column */}
              <TableCell
                isHeader
                className="px-4 py-2 font-medium text-gray-500 text-start text-sm dark:text-gray-400"
              >
                User
              </TableCell>
              {/* Email Column */}
              <TableCell
                isHeader
                className="hidden sm:table-cell px-4 py-2 font-medium text-gray-500 text-start text-sm dark:text-gray-400"
              >
                Email
              </TableCell>
              {/* Phone Number Column */}
              <TableCell
                isHeader
                className="hidden sm:table-cell px-4 py-2 font-medium text-gray-500 text-start text-sm dark:text-gray-400"
              >
                Phone Number
              </TableCell>
              {/* Role Column */}
              <TableCell
                isHeader
                className="hidden sm:table-cell px-4 py-2 font-medium text-gray-500 text-start text-sm dark:text-gray-400"
              >
                Role
              </TableCell>
              {/* Image Column */}
              <TableCell
                isHeader
                className="hidden sm:table-cell px-4 py-2 font-medium text-gray-500 text-start text-sm dark:text-gray-400"
              >
                Image
              </TableCell>
              {/* Status Column */}
              <TableCell
                isHeader
                className="hidden sm:table-cell px-4 py-2 font-medium text-gray-500 text-start text-sm dark:text-gray-400"
              >
                Status
              </TableCell>
              {/* Actions Column */}
              <TableCell
                isHeader
                className="pr-6 px-4 font-medium text-gray-500 text-end text-sm dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {Employees.map((Employee) => (
              <TableRow key={Employee.user_id}>
                {/* User Column */}
                <TableCell className="px-4 py-3 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      {Employee.user_img ? (
                        <img
                          width={40}
                          height={40}
                          src={Employee.user_img}
                          alt={`${Employee.user_first_name} ${Employee.user_last_name}`}
                          className="rounded-full"
                        />
                      ) : (
                        <Avatar className="w-10 h-10">
                          {Employee.user_first_name[0]}
                          {Employee.user_last_name[0]}
                        </Avatar>
                      )}
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-sm dark:text-white/90">
                        {Employee.user_first_name} {Employee.user_last_name}
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Email Column */}
                <TableCell className="hidden sm:table-cell px-4 py-2 text-gray-500 text-sm dark:text-gray-400">
                  {Employee.user_email}
                </TableCell>

                {/* Phone Number Column */}
                <TableCell className="hidden sm:table-cell px-4 py-2 text-gray-500 text-sm dark:text-gray-400">
                  {Employee.user_phone_number}
                </TableCell>

                {/* Role Column */}
                <TableCell className="hidden sm:table-cell px-4 py-2 text-gray-500 text-sm dark:text-gray-400">
                  {Employee.role_id === 1 ? "Employee" : "Employee"}
                </TableCell>

                {/* Image Column */}
                <TableCell className="hidden sm:table-cell px-4 py-2 text-gray-500 text-sm dark:text-gray-400">
                  {Employee.user_img ? (
                    <img
                      width={40}
                      height={40}
                      src={Employee.user_img}
                      alt="User Image"
                      className="w-10 h-10 rounded-full object-cover" // Ensures the image is square and fits in the circle
                    />
                  ) : (
                    <Avatar className="w-10 h-10">
                      {Employee.user_first_name[0]}
                      {Employee.user_last_name[0]}
                    </Avatar>
                  )}
                </TableCell>

                {/* Status Column */}
                <TableCell className="hidden sm:table-cell px-4 py-2 text-start">
                  <span
                    className={`${
                      Employee.active_user_status === 1
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    } px-3 py-1 rounded-full text-sm`}
                  >
                    {Employee.active_user_status === 1 ? "Active" : "Inactive"}
                  </span>
                </TableCell>

                {/* Actions Column */}
                <TableCell className="px-4 py-3 text-gray-500 text-sm text-start dark:text-gray-400">
                  <div className="flex justify-end gap-3">
                    <EditIcon
                      onClick={() => handleEdit(Employee)}
                      className="cursor-pointer text-blue-500"
                    />
                    <DeleteIcon
                      onClick={() => handleDelete(Employee.uuid)} // Pass uuid here
                      className="cursor-pointer text-red-500"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Modal for editing user */}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="edit-user-modal"
        aria-describedby="modal-to-edit-user-details"
      >
        <div className="modal-content p-4 max-w-md mx-auto bg-white rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Edit User</h2>
          <div className="flex flex-col gap-4">
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              value={formData.user_first_name}
              onChange={(e) =>
                setFormData({ ...formData, user_first_name: e.target.value })
              }
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={formData.user_last_name}
              onChange={(e) =>
                setFormData({ ...formData, user_last_name: e.target.value })
              }
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.user_email}
              onChange={(e) =>
                setFormData({ ...formData, user_email: e.target.value })
              }
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={formData.user_phone_number}
              onChange={(e) =>
                setFormData({ ...formData, user_phone_number: e.target.value })
              }
            />
            <TextField
              label="Status"
              variant="outlined"
              fullWidth
              select
              value={formData.active_user_status}
              onChange={(e) =>
                setFormData({ ...formData, active_user_status: e.target.value })
              }
              SelectProps={{
                native: true,
              }}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </TextField>
            <div className="flex justify-end gap-4 mt-4">
              <Button onClick={closeModal} color="secondary">
                Cancel
              </Button>
              <Button onClick={handleUpdate} color="primary">
                Update
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
