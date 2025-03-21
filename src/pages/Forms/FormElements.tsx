import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import DropzoneComponent from "../../components/form/form-elements/DropZone";
import users from "../../services/User/user.service";

export default function FormElements() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [formData, setFormData] = useState({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_phone_number: "",
    user_pass: "",
    role_id: 2,
    active_user_status: 1,
  });

  const [errors, setErrors] = useState({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_phone_number: "",
    user_pass: "",
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const regex =
      /^\+?[0-9]{1,4}?[-.\s]?\(?[0-9]{1,3}?\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;
    return regex.test(phoneNumber);
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      user_first_name: "",
      user_last_name: "",
      user_email: "",
      user_phone_number: "",
      user_pass: "",
    };

    if (!formData.user_first_name) {
      newErrors.user_first_name = "First name is required";
      isValid = false;
    }

    if (!formData.user_last_name) {
      newErrors.user_last_name = "Last name is required";
      isValid = false;
    }

    if (!formData.user_email) {
      newErrors.user_email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
      isValid = false;
    }

    if (!formData.user_phone_number) {
      newErrors.user_phone_number = "Phone number is required";
      isValid = false;
    } else if (!validatePhoneNumber(formData.user_phone_number)) {
      newErrors.user_phone_number = "Invalid phone number format";
      isValid = false;
    }

    if (!formData.user_pass) {
      newErrors.user_pass = "Password is required";
      isValid = false;
    } else if (!validatePassword(formData.user_pass)) {
      newErrors.user_pass =
        "Password must be at least 8 characters long and contain at least one letter and one number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const data = { ...formData, user_img: imageUrl };

    try {
      await users.addUser(data);
      resetForm();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      user_first_name: "",
      user_last_name: "",
      user_email: "",
      user_phone_number: "",
      user_pass: "",
      role_id: 2,
      active_user_status: 1,
    });
    setImageUrl("");
    setErrors({
      user_first_name: "",
      user_last_name: "",
      user_email: "",
      user_phone_number: "",
      user_pass: "",
    });
  };

  const handleImageUpload = (url: string) => {
    setImageUrl(url);
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Add Employee" />
      <div>
        <div>
          <DefaultInputs
            formData={formData}
            onInputChange={handleInputChange}
            onSelectChange={handleSelectChange}
            errors={errors}
          />
          <DropzoneComponent onImageUpload={handleImageUpload} />
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              onClick={resetForm}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
