import { useState } from "react";

const BookMeetingForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    employees: "",
    address: "",
    fullName: "",
    contactNo: "",
    email: "",
    contactOn: "",
    contactFrom: "",
    contactTo: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:bookings@g-travel.com.sa?subject=Book%20A%20Meeting&body=
      Company Name: ${formData.companyName}%0D%0A
      No Of Employees: ${formData.employees}%0D%0A
      Company Address: ${formData.address}%0D%0A
      Full Name: ${formData.fullName}%0D%0A
      Contact No: ${formData.contactNo}%0D%0A
      Email: ${formData.email}%0D%0A
      Contact On: ${formData.contactOn}%0D%0A
      Contact Between: ${formData.contactFrom} - ${formData.contactTo}%0D%0A
      Note: ${formData.note}
    `;

    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h1>Book A Meeting</h1>

      <label>Company Name</label>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        required
      />

      <label>No Of Employees</label>
      <input
        type="number"
        name="employees"
        value={formData.employees}
        onChange={handleChange}
        required
      />

      <label>Company Address</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <label>Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <label>Contact No</label>
      <input
        type="tel"
        name="contactNo"
        value={formData.contactNo}
        onChange={handleChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Contact On</label>
      <input
        type="date"
        name="contactOn"
        value={formData.contactOn}
        onChange={handleChange}
        required
      />

      <label>Contact Between</label>
      <div className="contact-between">
        <input
          type="time"
          name="contactFrom"
          value={formData.contactFrom}
          onChange={handleChange}
          required
        />
        <span>to</span>
        <input
          type="time"
          name="contactTo"
          value={formData.contactTo}
          onChange={handleChange}
          required
        />
      </div>

      <label>Note</label>
      <textarea name="note" value={formData.note} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookMeetingForm;
