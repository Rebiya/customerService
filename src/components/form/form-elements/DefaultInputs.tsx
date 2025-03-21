import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";

interface DefaultInputsProps {
  formData: {
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_phone_number: string;
    user_pass: string;
    role_id: number;
    active_user_status: number;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (name: string, value: string) => void;
  errors: {
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_phone_number: string;
    user_pass: string;
  };
}

export default function DefaultInputs({
  formData,
  onInputChange,
  onSelectChange,
  errors,
}: DefaultInputsProps) {
  const options = [
    { value: "1", label: "User" },
    { value: "2", label: "Employee" },
    { value: "3", label: "Admin" },
  ];
  const active = [
    { value: "1", label: "Active" },
    { value: "0", label: "Inactive" },
  ];

  return (
    <ComponentCard title="Form">
      <div className="space-y-6">
        <div>
          <Label htmlFor="user_first_name">First Name</Label>
          <Input
            type="text"
            id="user_first_name"
            name="user_first_name"
            value={formData.user_first_name}
            onChange={onInputChange}
            placeholder="Lily"
          />
          {errors.user_first_name && (
            <p className="text-red-500 text-sm">{errors.user_first_name}</p>
          )}
        </div>
        <div>
          <Label htmlFor="user_last_name">Last Name</Label>
          <Input
            type="text"
            id="user_last_name"
            name="user_last_name"
            value={formData.user_last_name}
            onChange={onInputChange}
            placeholder="Joe"
          />
          {errors.user_last_name && (
            <p className="text-red-500 text-sm">{errors.user_last_name}</p>
          )}
        </div>
        <div>
          <Label htmlFor="user_email">Email</Label>
          <Input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={onInputChange}
            placeholder="info@gmail.com"
          />
          {errors.user_email && (
            <p className="text-red-500 text-sm">{errors.user_email}</p>
          )}
        </div>
        <div>
          <Label htmlFor="user_phone_number">Phone Number</Label>
          <Input
            type="text"
            id="user_phone_number"
            name="user_phone_number"
            value={formData.user_phone_number}
            onChange={onInputChange}
            placeholder="+251 901 234 567"
          />
          {errors.user_phone_number && (
            <p className="text-red-500 text-sm">{errors.user_phone_number}</p>
          )}
        </div>
        <div>
          <Label htmlFor="user_pass">Password</Label>
          <Input
            type="password"
            id="password"
            name="user_pass"
            value={formData.user_pass}
            onChange={onInputChange}
            placeholder="Enter password"
          />
          {errors.user_pass && (
            <p className="text-red-500 text-sm">{errors.user_pass}</p>
          )}
        </div>
        <div>
          <Label>Employee Role</Label>
          <Select
            options={options}
            placeholder="Employee Role"
            onChange={(value) => onSelectChange("role_id", value)}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <Label>Employee Status</Label>
          <Select
            options={active}
            placeholder="Employee Active"
            onChange={(value) => onSelectChange("active_user_status", value)}
            className="dark:bg-dark-900"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
