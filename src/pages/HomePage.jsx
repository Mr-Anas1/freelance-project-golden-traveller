import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar"
import AboutUS from "./AboutUs"
import Contact from './Contact';

const Home = () => {
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsShown(true);
    }, []);

    const handleSelectChange = (event) => {
        const selectedCountry = event.target.value;
        if (selectedCountry) {
            navigate(`/visa-requirements/${selectedCountry}`);
        }
    };

    return (
        <>
            <div className={`home-container ${isShown ? 'show' : ''}`}>
                <div className="home-left">
                    <h1>
                        Book with us and enjoy your <span className="highlight">Journey!</span>
                    </h1>
                    <p>
                        Our team is always ready to give you the best travel memories in your life.
                    </p>
                    <div className="emb">
                        <label htmlFor="embassies">Select Your Embassy</label>
                        <select name="embassies" id="embassies" onChange={handleSelectChange}>
                            {/* List of countries */}
                            {/* ... (same as provided earlier) */}
							<option value="">Select your country</option>
							<option value="Argentina">Argentina</option>
							<option value="Australia">Australia</option>
							<option value="Austria">Austria</option>
							<option value="Azerbaijan">Azerbaijan</option>
							<option value="Bahrain">Bahrain</option>
							<option value="Bangladesh">Bangladesh</option>
							<option value="Belgium">Belgium</option>
							<option value="Brazil">Brazil</option>
							<option value="Brunei">Brunei</option>
							<option value="Canada">Canada</option>
							<option value="China_HongKong">China & HongKong</option>
							<option value="Cuba">Cuba</option>
							<option value="Cyprus">Cyprus</option>
							<option value="Czech Republic">Czech Republic</option>
							<option value="Denmark">Denmark</option>
							<option value="Egypt">Egypt</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="France">France</option>
							<option value="Finland">Finland</option>
							<option value="Germany">Germany</option>
							<option value="Ghana">Ghana</option>
							<option value="Greece">Greece</option>
							<option value="Hungary">Hungary</option>
							<option value="India">India</option>
							<option value="Indonesia">Indonesia</option>
							<option value="Iran">Iran</option>
							<option value="Ireland">Ireland</option>
							<option value="Italy">Italy</option>
							<option value="Jamaica">Jamaica</option>
							<option value="Japan">Japan</option>
							<option value="Jordan">Jordan</option>
							<option value="Kenya">Kenya</option>
							<option value="Kazakhstan">Kazakhstan</option>
							<option value="Korea">Korea</option>
							<option value="Lebanon">Lebanon</option>
							<option value="Malaysia">Malaysia</option>
							<option value="Mexico">Mexico</option>
							<option value="Morocco">Morocco</option>
							<option value="Nepal">Nepal</option>
							<option value="Netherlands">Netherlands</option>
							<option value="New Zealand">New Zealand</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Norway">Norway</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Philippines">Philippines</option>
							<option value="Poland">Poland</option>
							<option value="Portugal">Portugal</option>
							<option value="Romania">Romania</option>
							<option value="Russia">Russia</option>
							<option value="Singapore">Singapore</option>
							<option value="South Africa">South Africa</option>
							<option value="Spain">Spain</option>
							<option value="Sri Lanka">Sri Lanka</option>
							<option value="Sudan">Sudan</option>
							<option value="Sweden">Sweden</option>
							<option value="Switzerland">Switzerland</option>
							<option value="Syria">Syria</option>
							<option value="Taiwan">Taiwan</option>
							<option value="Tanzania">Tanzania</option>
							<option value="Tajikistan">Tajikistan</option>
							<option value="Thailand">Thailand</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="UAE ">
								UAE 
							</option>
							<option value="Uganda">Uganda</option>
							<option value="UK">UK (United Kingdom)</option>
							<option value="Ukraine">Ukraine</option>
							<option value="Uruguay">Uruguay</option>
							<option value="USA">
								USA 
							</option>
							<option value="Venezuela">Venezuela</option>
							<option value="Vietnam">Vietnam</option>
							<option value="Yemen">Yemen</option>
                        </select>
                    </div>
                </div>
                <div className="home-right">
                    <img
                        src="https://img.freepik.com/free-photo/portrait-woman-visiting-luxurious-city-dubai_23-2151328516.jpg"
                        alt=""
                    />
                </div>
            </div>
			<AboutUS />
			<Contact />
        </>
    );
};

export default Home;
