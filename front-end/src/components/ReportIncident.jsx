import { useState } from "react"

export default function ReportIncident({ addIncident }) {

    const [formData, setFormData] = useState({
        incidenttitle:'',
        fullname:'',
        email:'',
        contactnumber:'',
        date:'',
        locationtype:'',
        latitude:'',
        longitude:'',
        incidenttype:'',
        description:'',
        environmentalconditions:'',
        daytime:'',
        severity:'',
        environmentalimpact:'',
        incidentImage:'',
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

        const lat = parseFloat(formData.latitude);
        if (!formData.latitude.trim() || isNaN(lat) || lat < -90 || lat > 90) {
            alert("Invalid latitude. Must be between -90 and +90.");
            return false;
        }

        const lng = parseFloat(formData.longitude);
        if (!formData.longitude.trim() || isNaN(lng) || lng < -180 || lng > 180) {
            alert("Invalid longitude. Must be between -180 and +180.");
            return false;
        }

        if ((!formData.incidenttitle.trim()) ||
                (!formData.fullname.trim()) ||
                (!formData.email.trim()) ||
                (!formData.contactnumber.trim()) ||
                (!formData.date.trim()) ||
                (!formData.locationtype.trim()) ||
                (!formData.incidenttype.trim()) ||
                (!formData.description.trim()) ||
                (!formData.environmentalconditions.trim()) ||
                (!formData.daytime.trim()) ||
                (!formData.severity.trim()) ||
                (!formData.environmentalimpact.trim())){
                    alert("Please fill in all the data");
                    return false;
        } else if (!formData.email.match(emailformat)){
            alert("Invalid email. Please enter your email again");
            return false;
        } else {
            formValid = true;
        }

        return formValid;

    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const dataToSend = (({ incidenttitle, fullname, email, contactnumber, date, locationtype, latitude, longitude, incidenttype, description, environmentalconditions, daytime, severity, environmentalimpact }) => ({ incidenttitle, fullname, email, contactnumber, date, locationtype, latitude, longitude, incidenttype, description, environmentalconditions, daytime, severity, environmentalimpact}))(formData);

        if (validateForm()) {
            addIncident(dataToSend); // Send to App
            alert("Incident reported successfully");
        }
    }

    return (
        <>
            <div className="incident-report-container">
                <h2>Report an Incident</h2>
            <form className="register-form" no validate onSubmit={handleSubmit}>

            <label className="labelText">Incident Title</label>
            <input type="text" className="inputText" id="incidenttitle" name="incidenttitle" value={formData.incidenttitle} onChange={handleChangeText} required autoComplete="off" />
            <br /><br />

            <label className="labelText">FullName</label>
            <input type="text" className="inputText" id="fullname" name="fullname" value={formData.fullname} onChange={handleChangeText} required autoComplete="off" />
            <br /><br />

            <label className="labelText">Email</label>
            <input type="email" className="inputText" placeholder="youremail@gmail.com" id="email" name="email" value={formData.email} onChange={handleChangeText} required autoComplete="off" />
            <br /><br />

            <label className="labelText" htmlFor="contactnumber">Contact Number:</label>
            <input type="tel" className="inputText" id="contactnumber" name="contactnumber" value={formData.contactnumber} onChange={handleChangeText} minLength="8" required />
            <br /><br />

            <label className="labelText" htmlFor="date">Incident Date:</label>
            <input type="date" className="inputText" id="date" name="date" value={formData.date} onChange={handleChangeText} required />
            <br /><br />

            <label className="labelText" htmlFor="locationtype">Location:</label>
            <select className="filter-combobox" id="locationtype" name="locationtype" value={formData.locationtype} onChange={handleChangeText} required >
                <option value="">Select the location</option>
                <option value="Inland Waters (eg. River, estuary, lake, dam)">Inland Waters (eg. River, estuary, lake, dam)</option>
                <option value="Inshore Waters (up to 3 nm offshore)">Inshore Waters (up to 3 nm offshore)</option>
                <option value="Enclosed Waters (eg. Bay/Harbour)">Enclosed Waters (eg. Bay/Harbour)</option>
                <option value="Offshore Waters (more than 3 nm offshore)">Offshore Waters (more than 3 nm offshore)</option>
            </select>
            <br /><br />

            <label className="labelText" htmlFor="latitude">Latitude:</label>
            <input type="text" className="inputText" id="latitude" name="latitude" placeholder="Enter latitude" value={formData.latitude} onChange={handleChangeText} required />
            <br /><br />

            <label className="labelText" htmlFor="longitude">Longitude:</label>
            <input type="text" className="inputText" id="longitude" name="longitude" placeholder="Enter longitude" value={formData.longitude} onChange={handleChangeText} required />
            <br /><br />



            <label className="labelText" htmlFor="incidenttype">Incident Type:</label>
            <select className="filter-combobox" id="incidenttype" name="incidenttype" value={formData.incidenttype} onChange={handleChangeText} required >
                <option value="">Select incident type</option>
                <option value="Collision of Vessel">Collision of Vessel</option>
                <option value="Collision with a fixed object">Collision with a fixed object</option>
                <option value="ollision with a floating object">Collision with a floating object</option>
                <option value="Structural Failure">Structural Failure</option>
                <option value="Fire">Fire</option>
                <option value="Explosion">Explosion</option>
                <option value="Littering">Littering</option>
            </select>
            <br /><br />

            <label className="labelText" htmlFor="desciption">Incident Description:</label>
            <textarea className="description-textarea" id="description" name="description" value={formData.description || ''} onChange={handleChangeText} placeholder="Provide detailed description of the incident" rows="5" required />
            <br /><br />

            <label className="labelText" htmlFor="environmentalconditions">Environmental Conditions:</label>
            <select className="filter-combobox" id="environmentalconditions" name="environmentalconditions" value={formData.environmentalconditions} onChange={handleChangeText} required >
                <option value="">Select the environmental condition</option>
                <option value="Clear">Clear</option>
                <option value="Hazy">Hazy</option>
                <option value="Cloudy">Cloudy</option>
                <option value="Rain">Rain</option>
                <option value="Flood">Flood</option>
                <option value="Fog">Fog</option>
            </select>
            <br /><br />

            <label className="labelText" htmlFor="daytime">Time of the day:</label>
            <select className="filter-combobox" id="daytime" name="daytime" value={formData.daytime} onChange={handleChangeText} required >
                <option value="">Select the time of the day</option>
                <option value="Night">Night</option>
                <option value="Day">Day</option>
                <option value="Sunrise">Sunrise</option>
                <option value="Twilight">Twilight</option>
            </select>
            <br /><br />

            <label className="labelText" htmlFor="severity">Severity:</label>
            <select className="filter-combobox" id="severity" name="severity" value={formData.severity} onChange={handleChangeText} required >
                <option value="">Select the severity</option>
                <option value="Fatal incident">Fatal incident</option>
                <option value="Major damage">Major damage</option>
                <option value="Moderate damage">Moderate damage</option>
                <option value="Rain">Rain</option>
                <option value="No damage">No damage</option>
            </select>
            <br /><br />

            <label className="labelText" htmlFor="environmentalimpact">Environmental Impact:</label>
            <select className="filter-combobox" id="environmentalimpact" name="environmentalimpact" value={formData.environmentalimpact} onChange={handleChangeText} required >
                <option value="">Select the environmental impact</option>
                <option value="Immediate Effects">Immediate Effects</option>
                <option value="Long-Term Effects">Long-Term Effects</option>
            </select>
            <br /><br />

            <label className="labelText" htmlFor="incidentimage">Incident Photo:</label>
            <input type="file" className="inputText" id="incidentimage" name="incidentimage" accept="image/*" onChange={handleChangeText} />
            <br /><br />

            <button type="submit">Submit</button>

            </form>

        </div>
        </>

    )
}