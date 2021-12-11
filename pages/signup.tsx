import React from 'react'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import styles from '../styles/registration.module.css'


interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// function Registration() {
//   return(
//     <main>
//       <Form
//     </main>
//   )
// }
const Registration: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '', lastName: '', email: '', password: '' };
  return (
    <main className={styles.page}>
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
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
          </div>
          <div className={`${styles.inputWrapper} ${styles.password}`}>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="*****" />
          </div>
          <button className={styles.submit} type="submit">Submit</button>
        </Form>
      </Formik>
    </main>
  );
};

export default Registration
