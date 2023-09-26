import React, { useEffect , useState } from "react"
import './App.css'
// import Form from './component/Form'

const App2 = () => {
    const [data, setData] = useState([]);

    const [Fname, setFName] = useState("");
    const [Lname, setLname] = useState("");
    const [Dateofbirth, setDateofbirth] = useState("");
    const [Email, setEmail] = useState("");
    const [Website, setWebsite] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [Province, setProvince] = useState("");
    const [Country, setCountry] = useState("");
    const [Summary, setSummary] = useState("");
    const [Education, setEducation] = useState("");

   
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked")
        updateValues();

    }
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
      }, [data]);

    //   localStorage.setItem('dataKey', JSON.stringify(data));


    const fname = (e)=>{
        setFName(e.target.value)
    }
    const lname = (e)=>{
        setLname(e.target.value)
    }
    const dateofbirth = (e)=>{
        setDateofbirth(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value); // Assuming you have a state variable named 'Email'
    }
    
    const changeWebsite = (e) => {
        setWebsite(e.target.value); // Assuming you have a state variable named 'Website'
    }
    
    const currentAddress = (e) => {
        setAddress(e.target.value); // Assuming you have a state variable named 'Address'
    }
    
    const city = (e) => {
        setCity(e.target.value); // Assuming you have a state variable named 'City'
    }
    
    const province = (e) => {
        setProvince(e.target.value); // Assuming you have a state variable named 'Province'
    }
    
    const country = (e) => {
        setCountry(e.target.value); // Assuming you have a state variable named 'Country'
    }
    
    const summary = (e) => {
        setSummary(e.target.value); // Assuming you have a state variable named 'Summary'
    }
    
    const education = (e) => {
        setEducation(e.target.value); // Assuming you have a state variable named 'Education'
    }
    const updateValues = (e) => {
       
    
    setData([ ...data, {City,Address,Website,Email,Dateofbirth,Lname,Fname,Education,Summary,Country,Province} ]);
    };
    

    return (<div>
        <div className='container'>
            <div className='main-form'>
                <h2>Application Form</h2>
                <form onSubmit={onSubmit}>
    <label id='first-name'>First Name
        <input name="Fname" id='first-name' onChange={fname} placeholder='Enter First Name'></input>
    </label>
    <label id='Last-Name'>Last Name
        <input name="Lname" id='Last-Name' onChange={lname} placeholder='Enter Last Name'></input>
    </label>
    <label id='Date-of-Birth'>Date of Birth
        <input name="Dateofbirth" onChange={dateofbirth} type='date'></input>
    </label>
    <label>Enter your Email
        <input name="Email" type='email' onChange={changeEmail} placeholder='Enter Email'></input>
    </label>
    <label>Enter your Website
        <input name="Website" type='text' onChange={changeWebsite} placeholder='Enter Website'></input>
    </label>
    <label id='Current-Address'>Current Address
        <input name="Address" onChange={currentAddress} id='Current-Address' placeholder='Enter Current Address'></input>
    </label>
    <label id='City'>City
        <input name="City" onChange={city} id='City' placeholder='Enter City'></input>
    </label>
    <label id='Province'>Province
        <input name="Province" onChange={province} id='Province' placeholder='Enter Province'></input>
    </label>
    <label>Country
        <select name="Country" onChange={country}>
            <option>Pakistan</option>
            <option>Afghanistan</option>
            <option>Turkey</option>
        </select>
    </label>
    <label>
        <h2>Summary</h2>
        <textarea name="Summary" onChange={summary} rows="8" cols="80" placeholder="Write a brief summary about yourself, highlighting your skills, experience, and career goals."></textarea>
    </label>
    <label for="education">Degree, Major - University Name, Year
        <select name="Education" onChange={education}>
            <option>BS Computer Science</option>
            <option>BS Information Technology</option>
            <option>BS media Science</option>
            <option>BS Cyber Security</option>
        </select>
    </label>
    <div><button type="submit">Submit</button></div>
</form>
    <div className="Entries">
        <h2>Data Entries</h2>
        {data.map((x, index) => (
      <p className="main-entries"
        key={index}
        style={{ fontSize: '14px' }}
      >
      <span style={{ color: 'red' , border:'2px solid seagreen' }} > {index} </span > | 
      <span style={{ color: 'blue' }}> FIRST-NAME: <span style={{ color: 'black',textDecoration:'Underline' }}>{x.Fname} </span></span> | 
      < span style={{ color: 'blue' }}> LAst-Name: <span style={{ color: 'black',textDecoration:'Underline' }}>{x.Lname}</span> </span> | 
      <span style={{ color: 'blue' }}> Email:<span style={{ color: 'black',textDecoration:'Underline' }}> {x.Email} </span></span> 
      <span style={{ color: 'blue' }}> City:<span style={{ color: 'black',textDecoration:'Underline' }}> {x.City} </span></span> 
      <span style={{ color: 'blue' }}> Address:<span style={{ color: 'black',textDecoration:'Underline' }}> {x.Address} </span></span> 

      </p>
    ))}
    </div>

            </div>
            
        </div>
    </div>)
}

export default App2