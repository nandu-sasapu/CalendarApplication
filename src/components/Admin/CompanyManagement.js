import React, { useState } from "react";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({ name: "", location: "", linkedIn: "", emails: "", phoneNumbers: "", comments: "", periodicity: "" });

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setCompanies([...companies, form]);
    setForm({ name: "", location: "", linkedIn: "", emails: "", phoneNumbers: "", comments: "", periodicity: "" });
  };

  return (
    <div>
      <h2>Company Management</h2>
      <form>
        <input name="name" value={form.name} onChange={handleInputChange} placeholder="Company Name" />
        <input name="location" value={form.location} onChange={handleInputChange} placeholder="Location" />
        <input name="linkedIn" value={form.linkedIn} onChange={handleInputChange} placeholder="LinkedIn Profile" />
        <input name="emails" value={form.emails} onChange={handleInputChange} placeholder="Emails (comma-separated)" />
        <input name="phoneNumbers" value={form.phoneNumbers} onChange={handleInputChange} placeholder="Phone Numbers (comma-separated)" />
        <input name="comments" value={form.comments} onChange={handleInputChange} placeholder="Comments" />
        <input name="periodicity" value={form.periodicity} onChange={handleInputChange} placeholder="Periodicity (e.g., 2 weeks)" />
        <button type="button" onClick={handleSubmit}>Add Company</button>
      </form>
      <ul>
        {companies.map((c, index) => (
          <li key={index}>{c.name} - {c.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
