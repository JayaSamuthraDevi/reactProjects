
export interface AssetStateProps {
  assetData: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  perPage: number;
  pageSize: number | null;
}
