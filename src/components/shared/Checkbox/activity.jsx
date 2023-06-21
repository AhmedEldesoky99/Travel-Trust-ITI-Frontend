/* eslint-disable react/prop-types */
import { Checkbox } from 'antd';

const FilterCheckbox = ({ data, onChange }) => {
  const checkboxes = data?.data?.map((option) => (
    <div key={option._id} className='flex gap-1'>
      <Checkbox value={option.name} onChange={onChange} />
      <p className='text-xl'>{option.name}</p> {/* Display option.name instead of option */}
    </div>
  ));
  console.log(data?.data[0].name);
  return <>{checkboxes}</>;
};

export default FilterCheckbox;