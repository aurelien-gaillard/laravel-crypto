import React, { useState } from "react";

const Register = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const allowed_names = [
                "name",
                "email",
                "password",
                "password_confirmation"
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return { ...prev_values, [name]: value };
            });
        }
    };

    const handleSumbit = async e => {
        e.preventDefault();

        const response = await fetch("/register", {
            method: "post",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content")
            }
        });
        const response_data = await response.json();

        if (response_data.errors) {
            setErrors(response_data.errors);
        }
        console.log(response_data);
    };

    return (
        <form
            action="/register"
            className="register-form"
            onSubmit={handleSumbit}
        >
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password_confirmation">
                    Password confirmation
                </label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={values.password_confirmation}
                    onChange={handleChange}
                />
            </div>
            <button>Register</button>
        </form>
    );
};

export default Register;
