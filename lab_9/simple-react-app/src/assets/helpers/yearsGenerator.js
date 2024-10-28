export const generateYearsSelectOptions = (startYear = 2000, endYear = null) => {
  const endDate = endYear ? endYear : new Date().getFullYear();
  let years = [];

  for (let i = startYear; i <= endDate; i++) {
    years.push({
      value: i,
      label: i
    });
  }

  return years;
}
