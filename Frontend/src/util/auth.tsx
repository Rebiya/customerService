// Define the types for Employee and DecodedToken
interface Employee {
  employee_token: string;
  employee_role?: string;
  employee_id?: string;
  employee_first_name?: string;
  employee_last_name?: string;
  employee_email?: string;
  employee_phone?: string;
}

interface DecodedToken {
  employee_role: string;
  employee_id: string;
  employee_first_name: string;
  employee_last_name: string;
  employee_email: string;
  employee_phone: string;
}

// Function to read the data from the user's local storage
const getAuth = async (): Promise<Employee> => {
  const employeeString = localStorage.getItem("employee");
  if (!employeeString) {
    return { employee_token: "" }; // Ensures the return type is always Employee
  }

  const employee: Employee = JSON.parse(employeeString);

  if (employee?.employee_token) {
    const decodedToken = await decodeTokenPayload(employee.employee_token);
    return { ...employee, ...decodedToken };
  }

  return { employee_token: "" }; // Default Employee object
};

// Function to decode the payload from the token
const decodeTokenPayload = (token: string): DecodedToken => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export default getAuth;
