export const addCompany = (company) => {
    return {
      type: "ADD_COMPANY",
      payload: company,
    };
  };
  
  export const deleteCompany = (companyId) => {
    return {
      type: "DELETE_COMPANY",
      payload: companyId,
    };
  };
  