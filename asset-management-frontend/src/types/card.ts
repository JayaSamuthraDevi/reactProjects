export type profilecarditemtype = {
  Employeephoto: string;
  EmployeName: string;
  EmployeId: string;
};
export type CardProps = {
  profile?:string;
  dashboard?:string;
  assetswap?: boolean;
  vendor?: string;
  cardtype?:string;
};

export type dashboardcarditemstype = {
  category: string;
  total: number;
}[];

export type employeeAssetType = {
  name?: string;
  deviceConfiguration?: string;
  serialnumber?: string;
  date?: string;
  validity?: string;
};

export type listofemployeeassettype = employeeAssetType[];

export type vendortype = {
  vendorname: string;
  assetno: number;
};
