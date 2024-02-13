import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AssetStateProps } from '../types/asset';

const initialState: AssetStateProps = {
  assetData: {},
  status: 'idle',
  error: null,
  currentPage: 1,
  pageSize: null,
  perPage: 5,
};

export const fetchAssetData = createAsyncThunk<
  any,
  { page: any; perPage: any }
>('assetSlice/fetchAssetData', async ({ page, perPage }) => {
  try {
    const response = await axios.get('/asset/assets_details', {
      headers: {
        'current-page': page,
        'per-page': perPage,
      },
      withCredentials: true,
    });
    return response.data.content;
  } catch (error) {
    throw new Error('Failed to fetch employee data');
  }
});

const employeeSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setPerPage(state, action) {
      state.perPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAssetData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAssetData.fulfilled, (state, action: any) => {
        state.status = 'succeeded';
        console.log(action.payload);

        state.assetData = action.payload.Employee_details;
        state.pageSize = action.payload.Page_size;
        state.error = null;
      })
      .addCase(fetchAssetData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});
export const { setCurrentPage, setPerPage } = employeeSlice.actions;
export default employeeSlice.reducer;
