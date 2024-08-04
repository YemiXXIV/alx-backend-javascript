export default function createReportObject(employeeslist) {
  const getNumberOfDepartments = (departments) => {
    const numOfDept = Object.keys(departments).length;
    return numOfDept;
  };
  return { allEmployees: employeeslist, getNumberOfDepartments };
}
