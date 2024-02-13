export type MenuContainerType = {
  icon: React.ReactNode;
  name: string;
  submenu?: string[];
};
export type SidebarType = {
  logo: string;
  menu: MenuContainerType[];
  logout: MenuContainerType;
};

export type SubMenuType = {
  subPages: string[];
};

export type MenuType = {
  captions: MenuContainerType;
  states: {
    menuDisplay: boolean;
    setMenuDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export type ArrowType = {
  menuDisplay: boolean;
};

export type contextProviderValue = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  subPage: string;
  setSubPage: React.Dispatch<React.SetStateAction<string>>;
};

export type contextType = {
  children: React.ReactNode;
};

export type graphDataType = {
  name: string;
  windows: number;
  mac: number;
  linux: number;
};
export type graphType = graphDataType[];
export type VendorDetails = {
  [vendor: string]: osDetails;
};
export type osDetails = {
  [mac: string]: number;
  windows: number;
  linux: number;
  desktop: number;
  imac: number;
};
export type dataType = {
  [typeofitem: string]: number;
};
export type doughnutType = {
  data: dataType;
  itemType: string;
};
export type datasetType = {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
};

export type doughDataType = (
  labels: string[],
  values: number[]
) => { labels: string[]; datasets: datasetType[] };

export type CenterTextPluginOptions = {
  text: string;
  color?: string;
  fontStyle?: string;
  sidePadding?: number;
  fontSize?: number;
};
