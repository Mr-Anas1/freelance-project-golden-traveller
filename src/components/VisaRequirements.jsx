import React from 'react';
import { useParams } from 'react-router-dom';
import visaRequirementsData from './visaRequirementsData';
import Navbar from './Navbar';

const VisaRequirements = () => {
    const { country } = useParams();
    const requirements = visaRequirementsData[country];

    if (!requirements) return <p>No visa requirements found for {country}</p>;

    return (
        <>
            <div className="visa-requirements">
            <h2>Visa Requirements for {country}</h2>
            <ul>
                {Array.isArray(requirements) ? (
                    requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))
                ) : (
                    Object.entries(requirements).map(([key, value]) => (
                        <div key={key}>
                            <h3>{key}</h3>
                            <ul>
                                {value.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </ul>
        </div>
        </>
        
    );
};

export default VisaRequirements;
