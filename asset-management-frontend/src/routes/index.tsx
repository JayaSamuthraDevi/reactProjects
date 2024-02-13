import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Layout from '../layout/Index';
import EmployeeDetails from '../pages/employee';
import Vendor from '../pages/vendor';
import Accessories from '../pages/accessories';
import ErrorPage from '../pages/error';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import AssetDetails from '../pages/asset/assetDetails';

const AppRoutes = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  return (
    <Routes>
      <Route
        path='/'
        element={
          userInfo.length > 0 ? (
            <Navigate to='/dashboard' />
          ) : (
            <Navigate to='/login' />
          )
        }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/dashboard'
        element={userInfo.length > 0 ? <Layout /> : <Navigate to='/login' />}
      >
        <Route index element={<Home />} />
        <Route path='divum' element={<Home />} />
        <Route path='employee' element={<EmployeeDetails />} />
        <Route path='home' element={<Home />} />
        <Route path='vendor' element={<Vendor />} />
        <Route path='accessories' element={<Accessories />} />
        <Route path= 'assetDeatils' element={<AssetDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
