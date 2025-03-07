export interface Employee {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    department: string;
    team: string;
    joinDate: string;
    status: 'active' | 'inactive' | 'onleave';
  }
  
  export interface EmployeeGroup {
    id: number;
    name: string;
    count: number;
  }