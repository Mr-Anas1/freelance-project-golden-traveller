import React from 'react';
import visaRequirementsData from './visaRequirementsData';

const VisaRequirements = ({ country }) => {
    const requirements = visaRequirementsData[country];

    if (!requirements) return null;

    return (
        <div className="visa-requirements">
            <h2>Visa Requirements for {country}</h2>
            <ul>
                {Array.isArray(requirements) ? (
                    // If requirements is an array, map over its elements
                    requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))
                ) : (
                    // If requirements is an object, iterate over its keys
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
    );
};

export default VisaRequirements;
