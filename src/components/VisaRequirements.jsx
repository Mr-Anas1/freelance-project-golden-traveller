import React from 'react';
import { useParams } from 'react-router-dom';
import visaRequirementsData from './visaRequirementsData';

const VisaRequirements = () => {
    const { country } = useParams();
    console.log("Country from URL params:", country); // Debug output
    const requirements = visaRequirementsData[country];

    if (!requirements) return <p>No visa requirements found for {country}</p>;

    const renderRequirements = (data) => {
        if (Array.isArray(data)) {
            return (
                <ul>
                    {data.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            );
        } else if (typeof data === 'object') {
            return (
                <div>
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <h3>{key.replace(/_/g, ' ')}</h3>
                            {renderRequirements(value)}
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div className="visa-requirements">
                <h2>Visa Requirements for {country}</h2>
                {renderRequirements(requirements)}
            </div>
        </>
    );
};

export default VisaRequirements;
