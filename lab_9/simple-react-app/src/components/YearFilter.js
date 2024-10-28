import React from 'react';
import { Select } from 'antd';
import { generateYearsSelectOptions } from '../assets/helpers/yearsGenerator';

function YearFilter({ selectedYear, onChangeYear }) {
  return (
    <div className='year-filter'>
      <label className='year-filter__title'>Filter by year</label>
      <Select 
        options={generateYearsSelectOptions()} 
        placeholder="Select Year"
        defaultValue={selectedYear}
        onChange={(year) => onChangeYear(year)}
      />
    </div>
  );
}

export default YearFilter;
