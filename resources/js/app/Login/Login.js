import React, { useState } from "react";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
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

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch("/login", {
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
        console.log(response_data);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
