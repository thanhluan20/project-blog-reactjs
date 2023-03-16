import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useIsAuthenticated } from '../hooks/useIsAuthenticated';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import './LoginPage/login.css';
import { actRegisterAsync } from '../store/user/action';

function ChangePassword() {
  useIsAuthenticated();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    nickname: '',
    username: '',
    email: '',
    password: '',
  });

  function handleChangeValue(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    dispatch(actRegisterAsync(formData)).then((res) => {
      if (!res.ok) {
        setFormError(res.message);
        setLoading(false);
      }
    });
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đổi mật khẩu</h1>
            <div className="form-login-register">
              {formError && <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>}
              <form autoComplete="off" onSubmit={handleSubmit}>
              <Input
                  name="password"
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  value={formData.password}
                  autoComplete="new-password"
                  onChange={handleChangeValue}
                />
                <Input
                  name="password"
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  value={formData.password}
                  autoComplete="new-password"
                  onChange={handleChangeValue}
                />
                <Input
                  name="password"
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  value={formData.password}
                  autoComplete="new-password"
                  onChange={handleChangeValue}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>
                    Đăng ký
                  </Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default ChangePassword;
