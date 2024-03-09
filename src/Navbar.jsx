import Button from '@mui/material/Button';
import '../public/CSS/Navbar.css'

export default function Navbar() {
    return (
        <div className="navBar">
            <img src="/logo.jpg" alt="" class="logo-poster" />
            <div className="items">
                <a class="navbar-brand" href="#"><i class="far fa-snowflake"></i>
                    <Button variant="outlined" size="small" href="/" id="btn">Home</Button>
                    <Button variant="outlined" size="small" href="/about" id="btn">About us</Button>
                    <Button variant="outlined" size="small" href="/services" id="btn">Services</Button>
                    <Button variant="outlined" size="small" href="/contact" id="btn">Contact us</Button>
                    <i class="far fa-snowflake"></i></a>
            </div>
            <img src="/logo2.png" alt="" className='logoposter2' />
        </div>
    )
}