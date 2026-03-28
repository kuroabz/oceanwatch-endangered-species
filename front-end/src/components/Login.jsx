import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Login() {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const handleChangeText = (event) => {
        const {name, value} = event.target

        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))

    }

    const validateForm = () => {
        let formValid = false;
        console.log(formData)

        var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if ((!formData.email.trim()) || (!formData.password.trim())){
                    alert("Please fill in all the data");
        } else if (!formData.email.match(emailformat)){
            alert("Invalid email. Please enter your email again");
        } else {
            formValid = true;
        }

        return formValid;

    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const dataToSend = (({ email, password}) => ({email, password}))(formData);

        if (validateForm()) {
            alert("Login Successfully");
        }
    }

    return (
        <>

            <div className="auth-form-container">
                <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <label className="labelText">Email</label>
            <input type="email" className="inputText" placeholder="youremail@gmail.com" id="email" name="email" value={formData.email} onChange={handleChangeText} required  />

            <label className="labelText">Password</label>
            <input type="password" className="inputText" id="password" name="password" value={formData.password} onChange={handleChangeText} required />
            <br /><br />

            <button onClick={handleSubmit}>Login</button>

            </form>
            <br /><br />
            <Link to="/register">
            <button className="link-btn">Don't have an account? Register</button>
            </Link>

            </div>

        </>
    )
}