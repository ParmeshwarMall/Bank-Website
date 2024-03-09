import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from "react"
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import '../public/CSS/Body.css'

let isAdLog = false
let isUserLog = false
export default function Body() {

    let [user, setUser] = useState({
        id: "", password: "", username: "", userpassword: ""
    })
    let name, value;

    const handleInputs = (e) => {
        e.preventDefault;
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const history = useNavigate();

    const adsubmit = async (event) => {

        event.preventDefault();
        try {
            const { id, password, username, userpassword } = user;

            if (id == "admin" && password == 1234) {
                isAdLog = true;
                alert("Login successfully")
                history('/admdashboard');
            }
            else {
                alert("Invalid id or password");
            }
        }
        catch (e) {
            console.log(e)
        }
    }


    const ussubmit = async (event) => {

        event.preventDefault();
        const { id, password, username, userpassword } = user;
        await axios.post("http://localhost:8000/", user)
            .then((res) => {
                if (res.data == "exist") {
                    isUserLog = true;
                    alert("Login Successfully");
                    history('/userdashboard')
                }
                else {
                    alert(res.data)
                }
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        AOS.init({
            // Initialize AOS options here
        });
    }, []);


    return (
        <div>
            <div className='container1'>
                <h1 className='mainhed'>Welcome To Bharat Bank</h1>
            </div>


            <div className="login">
                <div className='container2' style={{height:'21rem'}}>
                    <h2 className='heading' style={{ fontSize: '25px' }}>For Admin Only</h2>
                    <form onSubmit={adsubmit}>
                        <div class="mb-3">
                            <label for="name" class="form-label">ID: </label>
                            <input type="name" name="id" class="form-control" id="name" value={user.id} autoComplete="off" onChange={handleInputs} required />
                            <div id="emailHelp" class="form-text">We'll never share your ID with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password: </label>
                            <input type="password" name="password" class="form-control" id="password" autoComplete="off" value={user.password} onChange={handleInputs} required />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                    <hr />
                </div>

                <div className='container2' style={{height:'21rem'}}>
                    <h2 className='heading' style={{ fontSize: '25px' }}>For User Only</h2>
                    <form onSubmit={ussubmit}>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username: </label>
                            <input type="name" name="username" class="form-control" id="username" value={user.username} autoComplete="off" onChange={handleInputs} required />
                            <div id="emailHelp" class="form-text">We'll never share your ID with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="userpassword" class="form-label">Password: </label>
                            <input type="password" name="userpassword" class="form-control" id="userpassword" autoComplete="off" value={user.userpassword} onChange={handleInputs} required />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>

            <div className="iconcontainer1">
                <i class="fa-solid fa-address-book icons fa-2x"></i>
                <i class="fa-brands fa-whatsapp icons fa-2x"></i>
                <i class="fa-brands fa-square-instagram icons fa-2x"></i>
                <i class="fa-brands fa-linkedin icons fa-2x"></i>
                <i class="fa-brands fa-youtube icons fa-2x"></i>

            </div>
            <div className="iconcontainer2">
                <i class="fa-solid fa-envelope icons fa-2x"></i>
                <i class="fa-solid fa-location-dot icons fa-2x"></i>
                <i class="fa-brands fa-twitter icons fa-2x"></i>
                <i class="fa-solid fa-cloud icons fa-2x"></i>
                <i class="fa-solid fa-user icons fa-2x"></i>

            </div>

            <div className="container4">
                <div class="card">
                    <img src="./img1.jpg" class="card-img-top" alt="..." style={{ height: '250px' }} />
                    <div class="card-body">
                        <p class="card-text">Pradhan Mantri Jan Dhan Yojana is a National Mission on Financial Inclusion which has an integrated approach to bring about comprehensive financial inclusion and provide banking services to all households in the country.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./img2.jpg" class="card-img-top" alt="..." style={{ height: '250px' }} />
                    <div class="card-body">
                        <p class="card-text">Earlier, under the scheme, financial benefit has been provided to all Small and Marginal landholder farmer families with total cultivable holding upto 2 hectares with a benefit of Rs. 6000 per annum per family payable in three equal installments, every four months.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./img3.jpg" class="card-img-top" alt="..." style={{ height: '250px' }} />
                    <div class="card-body">
                        <p class="card-text">The Sukanya Samriddhi Yojana (SSY) is a small deposit scheme by the Ministry of Finance exclusively for a girl child. SSY was launched by the Hon'ble Prime Minister on 22nd January 2015 as a part of the Beti Bachao Beti Padhao campaign.</p>
                    </div>
                </div>
            </div>

            <div className="container5" data-aos="fade-up">

                <div className="infoCont">
                    <h3 className='aboutImg'>Retail</h3>
                    <img src="retails-img.jpg" alt="" class="retailImage" />

                    <div className="imgInfo">
                        <button type="button" class="btn btn-outline-info imgBtn">Housing Loan</button>
                        <button type="button" class="btn btn-outline-info imgBtn">Vehicle Loan</button>
                        <button type="button" class="btn btn-outline-info imgBtn">Education Loan</button>
                        <button type="button" class="btn btn-outline-info imgBtn">Loan to Senior Citizens</button>
                    </div>
                </div>


                <div id="carouselExample" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="img4.jpg" class="w-100" alt="First slide" height="300px" />
                        </div>
                        <div class="carousel-item active">
                            <img src="img5.jpg" class="w-100" alt="Second slide" height="300px" />
                        </div>
                        <div class="carousel-item">
                            <img src="img6.jpg" class="w-100" alt="Third slide" height="300px" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>


                <div className="infoCont">
                    <h3 className='aboutImg'>MSME</h3>
                    <img src="MSME-img_0.jpg" alt="" class="retailImage" />

                    <div className="imgInfo">
                        <button type="button" class="btn btn-outline-info imgBtn">MSME Banking</button>
                        <button type="button" class="btn btn-outline-info imgBtn">Govt Sponsered Scheme</button>
                        <button type="button" class="btn btn-outline-info imgBtn">MSE Loan Policy</button>
                        <button type="button" class="btn btn-outline-info imgBtn">Read More</button>
                    </div>
                </div>

            </div>

            <div className="container4" data-aos="fade-up">
                <div class="card">
                    <img src="./img8.jpg" class="card-img-top" alt="..." style={{ height: '250px' }} />
                    <div class="card-body">
                        <p class="card-text">The PM Kisan Credit Cards have now been linked to the Pradhan Mantri Kisan Samman Nidhi Yojana. Farmers can seek a loan from KCC for up to Rs. 3 lakh at 4% interest rate. Now it is also easier for PM Kisan beneficiaries to apply for KCC.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./img9.jpg" class="card-img-top" alt="..." style={{ height: '250px' }} />
                    <div class="card-body">
                        <p class="card-text">A savings account is a type of deposit account provided by banks and financial institutions. It allows individuals to deposit and store their money while earning a certain rate of interest on the deposited amount.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./img10.jpg" class="card-img-top" alt="..." style={{ height: '250px' }} />
                    <div class="card-body">
                        <p class="card-text">Bitcoin (abbreviation: BTC or XBT; sign: ₿) is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger, called a blockchain, without central oversight.</p>
                    </div>
                </div>
            </div>

            <div className="container5" data-aos="fade-up">

                <div className="infoCont">
                    <img src="img11.jpg" alt="" class="bankimg" />
                </div>


                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="img12.jpg" class="d-block w-100" alt="..." style={{ height: '300px' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="img13.jpg" class="d-block w-100" alt="..." style={{ height: '300px' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="img14.jpg" class="d-block w-100" alt="..." style={{ height: '300px' }} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="infoCont">
                    <img src="img7.jpg" alt="" class="bankimg" />
                </div>

            </div>

        </div>
    )
}

export { isAdLog, isUserLog }

