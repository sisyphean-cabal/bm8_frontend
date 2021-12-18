import React from 'react'
import {
    Formik,
    Form,
    Field,
} from 'formik';
import styles from '../styles/Login.module.css'
import { useMutation } from 'react-query'
import axios, { AxiosError } from 'axios';


interface LoginFormValues {
    email: string;
    password: string;
}

const Login: React.FC<{}> = () => {
    const initialValues: LoginFormValues = { email: '', password: '' };
    const login = useMutation<ReturnType<typeof axios.post>, AxiosError, LoginFormValues>(data => axios.post('http://localhost:8000/api/account/authenticate', {
        ...data
    }))
    return (
        <main className={styles.page}>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, actions) => {
                    actions.setSubmitting(true);
                    await login.mutateAsync(values)
                    await new Promise((res) => setTimeout(res, 10000))
                    actions.setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
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
                        <button className={styles.submit} type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        </main>
    );
};

export default Login
