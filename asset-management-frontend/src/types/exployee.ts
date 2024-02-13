export interface TablePropsType {
  data?: any;
  searchinput?: string;
  columns: string[];
  actions: string[];
  currentPage: number;
  perPage: number;
  pageSize: number | null;
  handlePerPageEntities: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePrevious: () => void;
  handlePages: (index: number) => void;
  handleNext: () => void;
}

export interface EmployeeStateProps {
  employeeData: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  perPage: number;
  pageSize: number | null;
}

export interface PaginationProps {
  currentPage: number;
  perPage: number;
  pageSize: number | null;
  handlePerPageEntities: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePrevious: () => void;
  handlePages: (index: number) => void;
  handleNext: () => void;
}
