import React from 'react'
import {
  Formik,
  Form,
  Field,
} from 'formik';
import styles from '../styles/registration.module.css'
import {useMutation} from 'react-query'
import axios, { AxiosError } from 'axios';


interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Registration: React.FC<{}> = () => {
  const initialValues: RegistrationFormValues = { firstName: '', lastName: '', email: '', password: '', passwordConfirmation: '' };
  const register = useMutation<ReturnType<typeof axios.post>, AxiosError, RegistrationFormValues>(data => axios.post('http://localhost:8000/api/account/register', {
    ...data
  }))
  return (
    <main className={styles.page}>
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          await register.mutateAsync(values)
          await new Promise((res) => setTimeout(res, 10000))
          actions.setSubmitting(false);
        }}
        validate={(values) => {
          const errors: Partial<RegistrationFormValues> = {}
          if (values.password != values.passwordConfirmation) {
            errors.passwordConfirmation = "Passwords don't match"
          }
          return errors
        }}
      >
        {({errors, touched}) => (
          <Form className={styles.form}>
            <div className={`${styles.inputWrapper} ${styles.firstName}`}>
              <label htmlFor="firstName" >First Name</label>
              <Field id="firstName" type="text" name="firstName" placeholder="First Name" />
            </div>
            <div className={`${styles.inputWrapper} ${styles.lastName}`}>
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" type="text" name="lastName" placeholder="Last Name (optional)" />
            </div>
            <div className={`${styles.inputWrapper} ${styles.email}`}>
              <label htmlFor="email">Email</label>
              <Field id="email" type="email" name="email" placeholder="Email@email.com" />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div className={`${styles.inputWrapper} ${styles.password}`}>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" placeholder="*****" />
              {errors.password && touched.password && <div>{errors.password}</div>}
            </div>
            <div className={`${styles.inputWrapper} ${styles.passwordConfirmation}`}>
              <label htmlFor="passwordConfirmation">Confirm Password</label>
              <Field type="password" id="passwordConfirmation" name="passwordConfirmation" placeholder="*****" />
              {errors.passwordConfirmation && touched.passwordConfirmation && <div>{errors.passwordConfirmation}</div>}
            </div>
            <button className={styles.submit} type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Registration
