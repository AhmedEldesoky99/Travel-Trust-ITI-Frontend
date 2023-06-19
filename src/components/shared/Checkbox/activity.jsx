/* eslint-disable react/prop-types */
// import { Checkbox } from 'antd';


// const FilterCheckbox = () => {
//     const checkboxes = Array.from({ length: Options.length }, (_, index) => (
//         <div key={index} className='flex gap-1'>
//             <Checkbox options={Options[index]} onChange={onChange}/> <p className='text-xl'>{Options[index]}</p>
//         </div>
//       ));
//     return (
//         <>
//             {checkboxes}
//         </>
//     );
// }
// export default FilterCheckbox;

import { Checkbox } from 'antd';

const FilterCheckbox = ({ data, onChange }) => {
  console.log(data);
  const checkboxes = data?.data.map((option) => (
    <div key={option._id} className='flex gap-1'>
      <Checkbox value={option.name} onChange={onChange} />
      <p className='text-xl'>{option}</p>
    </div>
  ));

  return <>{checkboxes}</>;
};

export default FilterCheckbox;