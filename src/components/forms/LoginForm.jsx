import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
 Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

/** Slices imports */
import { login } from '../../store/slices/auth';
import { clearMessage } from '../../store/slices/message';

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        props.history.push('/profile');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/admin/usuarios" />;
  }

    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="form-group">
              <label className="form-control-label">Usuario</label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label">Contraseña</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="col-lg-12 loginbttm">
              <div className="col-lg-6 login-btm login-text">
                {/* <!-- Error Message --> */}
              </div>
              <div className="col-lg-6 login-btm login-button">
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                  {loading && (
                  <p>Loading...</p>
                )}
                  <span>Login</span>
                </button>
              </div>
            </div>
          </Form>
        </Formik>
        {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
      </>
    );
};

export default LoginForm;
