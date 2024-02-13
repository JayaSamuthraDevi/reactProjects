import axios from 'axios';
import { toast } from 'react-toastify';
import {
  logout,
  updateAccessToken,
  updateRefreshToken,
  updateUserInfo,
} from '../slices/apiTokenSlice';

export const userLogin = async (
  Token: any,
  dispatch: any,
  navigate: any,
  profileObj: any
) => {
  console.log(Token, 'in auth');

  try {
    const response = await axios.post(
      '/admin/login',
      {},
      {
        headers: {
          Authorization: Token,
        },
        withCredentials: true,
      }
    );

    const data: any = await response.data;

    const accessToken = data.content['access_token'];
    const refreshToken = data.content['refresh_token'];

    if (accessToken && refreshToken) {
      console.log('Access token ==>', accessToken);
      console.log('Refresh token ==>', refreshToken);

      dispatch(updateAccessToken(accessToken));
      dispatch(updateRefreshToken(refreshToken));
      dispatch(updateUserInfo(profileObj));
      navigate('/dashboard');
      toast.success('Successfully logged!');
    } else {
      toast.error('Error logging !');
    }
  } catch (err) {
    console.log(err);

    toast.error('Error!!');
  }
};

export const userLogout = async (dispatch: any, navigate: any) => {
  try {
    await axios.post(
      '/admin/logout',
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(logout());
    navigate('/');
    toast.success('Successfully logged out');
  } catch (err) {
    toast.error('Error logging out');
  }
};
