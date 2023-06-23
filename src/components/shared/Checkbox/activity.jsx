/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { Checkbox } from 'antd';

const FilterCheckbox = ({ data, onChange, stat }) => {
  const checkboxes = data?.data?.map((option) => (
    <div key={option._id} className='flex justify-between'>
      <div className='flex gap-1 '>
        <Checkbox value={option.name} onChange={() => onChange(option._id)} />
        <p className='text-xl'>{option.name}</p>
      </div>
      <span className=''>{stat?.data?.categories?.hasOwnProperty(option.name) ? stat?.data?.categories[option.name] : '0'}</span>
    </div>
  ));
  return <>{checkboxes}</>;
};

export default FilterCheckbox;