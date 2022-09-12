import React, { useState } from 'react'
import { useLoginFormValidator } from "../hooks/useLoginFormValidator";
import clsx from "clsx";
import styles from "../styles/login.css";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";

const Login = () => {
    const [name, setName] = useLocalStorage("username", "");
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        email: "",
    });
    const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

    const onUpdateField = e => {
        const field = e.target.name;

        const nextFormState = {
            ...form,
            [field]: e.target.value,
        };
        setForm(nextFormState);
        if (errors[field].dirty)
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
        if (e.target.name === 'username') {
            setName(e.target.value)
        }
    };

    const onSubmitForm = e => {
        e.preventDefault();
        const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
        if (!isValid) return;
        console.log(JSON.stringify(form, null, 2));
        navigate('/main', { replace: true });
    };
    return (
        <form className="flex flex-col mt-4" onSubmit={onSubmitForm}>
            <h3>Login Here</h3>

            <input
                type="text"
                name="username"
                className={clsx(
                    styles.formField,
                    errors.username.dirty && errors.username.error && styles.formFieldError
                )}
                value={form.username}
                onChange={onUpdateField}
                onBlur={onBlurField}
                placeholder="Username"
            />

            <input
                type="email"
                name="email"
                className={clsx(
                    styles.formField,
                    errors.email.dirty && errors.email.error && styles.formFieldError
                )}
                value={form.email}
                onChange={onUpdateField}
                onBlur={onBlurField}
                placeholder="Email address"
            />
            {errors.email.dirty && errors.email.error ? (
                <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
            ) : null}


            <button className='log-button' type="submit">Login</button>
        </form>
    )
}

export default Login