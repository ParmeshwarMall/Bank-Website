import * as React from 'react';
import axios from 'axios';
import '../public/CSS/DetaiForm.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function DetailForm() {

    let [user, setUser] = useState({
        name: "", fname: "", dob: "", email: "", username: "", password: "", amount:"", add: ""
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/admdashboard');

        const {name,fname,dob,email,username,password,amount,add}=user;
        await axios.post("http://localhost:8000/form",user)
        .then(res=>alert(res.data))
        .catch(err=>console.log(err))

        setUser(
            {name: "", fname: "", dob: "", email: "", username: "", password: "", amount:"", add: ""}
        )
    };


    return (
        <div className="container6">
            <div className="heading">
                <h2>Fill Form For Account Opening</h2>
            </div>
            <br />
            <form onSubmit={handleSubmit} className="formInfo">
                <div className="info1">
                    <label for="exampleFormControlInput1" class="form-label">Name: </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="name" name="name" class="form-control form1" id="exampleFormControlInput1" autoComplete="off" value={user.name} onChange={handleInputs} required/>
                </div>
                <div className="info1">
                    <label for="exampleFormControlInput2" class="form-label">Father' name: </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="name" name="fname" class="form-control form1" id="exampleFormControlInput2" autoComplete="off" value={user.fname} onChange={handleInputs} required/>
                </div>
                <div className="info1">
                    <label for="exampleFormControlInput3" class="form-label">DOB: </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="date" name="dob" class="form-control form1" id="exampleFormControlInput3" autoComplete="off" value={user.dob} onChange={handleInputs} required/>
                </div>
                <div className="info1">
                    <label for="exampleFormControlInput4" class="form-label">Email: </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="email" name="email" class="form-control form1" id="exampleFormControlInput4" autoComplete="off" value={user.email} onChange={handleInputs} required/>
                </div>
                <div className="checkBox">
                    <h6 className='form-label'>Gender: </h6>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label class="form-check-label">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label">
                            Female
                        </label>
                    </div>
                </div>
                <div className="info1">
                    <label for="exampleFormControlInput5" class="form-label">UserName: </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="username" class="form-control form1" id="exampleFormControlInput5" autoComplete="off" value={user.username} onChange={handleInputs} required/>
                </div>
                <div className="info1">
                    <label for="exampleFormControlInput6" class="form-label">Password:  </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="password" name="password" class="form-control form1" id="exampleFormControlInput6" autoComplete="off" value={user.password} onChange={handleInputs} required/>
                </div>
                <div className="info1">
                    <label for="exampleFormControlInput6" class="form-label">Enter amount:  </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="number" name="amount" class="form-control form1" id="exampleFormControlInput6" autoComplete="off" value={user.amount} onChange={handleInputs} required/>
                </div>
                <div className="info1">
                    <label for="exampleFormControlInput7" class="form-label">Address:  </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="add" class="form-control form1" id="exampleFormControlInput7" autoComplete="off" value={user.add} onChange={handleInputs} required/>
                </div>

                <button type="submit" class="btn btn-primary subBtn">Submit</button>
            </form>
        </div>
    )
}