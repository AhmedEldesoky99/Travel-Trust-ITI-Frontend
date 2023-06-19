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

const FilterCheckbox = ({ options, onChange }) => {
  const checkboxes = options.map((option, index) => (
    <div key={index} className='flex gap-1'>
      <Checkbox value={option} onChange={onChange} />
      <p className='text-xl'>{option}</p>
    </div>
  ));

  return <>{checkboxes}</>;
};

export default FilterCheckbox;