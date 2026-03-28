import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Registration() {

    const [formData, setFormData] = useState({
        fullname:'',
        email:'',
        password:'',
        conpassword:'',
        usertype:'',
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

        if ((!formData.fullname.trim()) ||
                (!formData.email.trim()) ||
                (!formData.password.trim()) ||
                (!formData.conpassword.trim()) ||
                (!formData.usertype.trim())){
                    alert("Please fill in all the data");
        } else if (!formData.email.match(emailformat)){
            alert("Invalid email. Please enter your email again");
        } else if (formData.password.length < 8){
            alert("Password is too short. Please enter another password");
        } else if (formData.password != formData.conpassword){
            alert("Passwords do not match. Please retry");
        } else {
            formValid = true;
        }

        return formValid;

    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const dataToSend = (({ fullname, email, password, conpassword}) => ({ fullname, email, password, conpassword}))(formData);

        if (validateForm()) {
            alert("Account created successfully");
        }
    }

    return (
        <>
            <div className="reg-form-container">
                <h2>Register</h2>
            <form className="register-form"no validate>
            <label className="labelText">FullName</label>
            <input type="text" className="inputText" id="fullname" name="fullname" value={formData.fullname} onChange={handleChangeText} required autoComplete="off" />
            <br /><br />

            <label className="labelText">Email</label>
            <input type="email" className="inputText" placeholder="youremail@gmail.com" id="email" name="email" value={formData.email} onChange={handleChangeText} required autoComplete="off" />
            <br /><br />

            <label className="labelText">Password</label>
            <input type="password" className="inputText" id="password" name="password" value={formData.password} onChange={handleChangeText} required minLength="8" />
            <br /><br />

            <label className="labelText">Confirm Password</label>
            <input type="password" className="inputText" id="conpassword" name="conpassword" value={formData.conpassword} onChange={handleChangeText} required />
            <br /><br />

            <label className="labelText" htmlFor="usertype">User Type:</label>
            <select className="filter-combobox" id="usertype" name="usertype" value={formData.usertype} onChange={handleChangeText} required >
                <option value="">Select user type</option>
                <option value="Marine Specialist">Marine Specialist</option>
                <option value="Regular Enthusiast">Regular Enthusiast</option>
            </select>
            <br /><br />

            <button onClick={handleSubmit}>Submit</button>

            </form>
            <br /><br />
            <Link to="/login">
            <button className="link-btn">Already have an account? Login</button>
            </Link>

        </div>
        </>
    
    )
}