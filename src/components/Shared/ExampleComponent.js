import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCompany } from "../../redux/actions/companyActions";

const ExampleComponent = () => {
  const companies = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  const handleAddCompany = () => {
    const newCompany = { id: Date.now(), name: "New Company" };
    dispatch(addCompany(newCompany));
  };

  return (
    <div>
      <button onClick={handleAddCompany}>Add Company</button>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
