import GoogleLogin from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../../actions/authAction';
import { icons } from '../../assets/index';
import { clientId } from '../../constants/id';
import styles from './index.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = async (res: any) => {
    try {
      const { accessToken, profileObj } = res;
      await userLogin(accessToken, dispatch, navigate, profileObj);
    } catch (error) {
      toast.error('Error in onSuccess');
    }
  };

  const onFailure = (error: any) => {
    toast.success('GoogleError');
  };

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={icons.Logo} alt='' className={styles.logo} />
        <div className={styles.innerBox}>
          <h1>Get Started! 👋</h1>
          <p>Welcome To Asset Management System</p>
          <h1>Admin Login</h1>
          <GoogleLogin
            clientId={clientId}
            buttonText='Login with Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            theme='dark'
            className={styles.google}
          />
        </div>
      </div>
      <div className={styles.right}>
        <img src={icons.assestLogo} alt='' className={styles.assetLogo} />
      </div>
    </div>
  );
};
export default Login;
