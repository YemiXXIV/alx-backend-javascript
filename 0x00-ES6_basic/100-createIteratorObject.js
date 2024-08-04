export default function createIteratorObject(report) {
  const everyone = [];
  for (const employee in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, employee)) {
      everyone.push(...report.allEmployees[employee]);
    }
  }
  return everyone;
}
