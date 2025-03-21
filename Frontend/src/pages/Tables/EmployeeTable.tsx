import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import EmployeeList from "../../components/tables/BasicTables/EmployeeList";

export default function EmployeeTable() {
  return (
    <>
      <PageMeta
        title="React.js Employee Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Employee Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Employees" />
      <div className="space-y-6">
        <ComponentCard title="Employee Table ">
          <EmployeeList />
        </ComponentCard>
      </div>
    </>
  );
}
