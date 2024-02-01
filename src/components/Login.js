import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Login = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='form-body'>
      <h2 style={{color: "goldenrod", textAlign: "center"}}>Login Page</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
          <label htmlFor="fName">First name: </label>
          <input
            id="fName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          </div>
          {formik.errors.firstName && formik.touched.firstName? <div style={{ color: "red", fontSize: "0.7rem" }}>{formik.errors.firstName}</div> : null}
        </div>
        <div>
          <div>
          <label htmlFor="lName">Last name: </label>
          <input
            id="lName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          </div>
          {formik.errors.lastName && formik.touched.lastName? <div style={{ color: "red", fontSize: "0.7rem" }}>{formik.errors.lastName}</div> : null}
        </div>
        <div>
          <div>
          <label htmlFor="email">Email Address: </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          </div>
          {formik.errors.email && formik.touched.email? <div style={{ color: "red", fontSize: "0.7rem" }}>{formik.errors.email}</div> : null}

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;