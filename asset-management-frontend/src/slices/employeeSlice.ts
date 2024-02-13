import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { EmployeeStateProps } from '../types/exployee';

const initialState: EmployeeStateProps = {
  employeeData: {},
  status: 'idle',
  error: null,
  currentPage: 1,
  pageSize: null,
  perPage: 5,
};

export const fetchEmployeeData = createAsyncThunk<
  any,
  { page: any; perPage: any }
>('employee/fetchEmployeeData', async ({ page, perPage }) => {
  try {
    const response = await axios.get('/employee/employee_details', {
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
  name: 'employee',
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
      .addCase(fetchEmployeeData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployeeData.fulfilled, (state, action: any) => {
        state.status = 'succeeded';
        console.log(action.payload);
        
        state.employeeData = action.payload.Employee_details;
        state.pageSize = action.payload.Page_size;
        state.error = null;
      })
      .addCase(fetchEmployeeData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});
export const { setCurrentPage, setPerPage } = employeeSlice.actions;
export default employeeSlice.reducer;
