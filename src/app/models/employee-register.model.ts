export interface EmployeeRegister {
  firstName: string;
  middleName: string;
  firstSurname: string;
  secondSurname: string;
  dateOfBirth: Date;
  numPhone: string;
  email: string;
  address: string;
  document: {
    documentTypeId: number;
    documentNumber: string;
  };
  roleId: number;
}
