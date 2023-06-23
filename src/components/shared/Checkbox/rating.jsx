/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Checkbox } from "antd";

const Options = ["0 Star", "1 Star", "2 Star", "3 Star", "4 Star", "5 Star"];
const RatingCheckbox = ({ statsData, onChange }) => {
  
  const checkboxes = statsData
    ? Object.entries(statsData).map(([key, value], index) => {
        const option = `${key} Star`;
        const ratingValue = value;
        return (
          <div key={index} className="flex justify-between">
            <div className="flex gap-1">
              <Checkbox options={option} onChange={()=>onChange(index)} /> <p>{option}</p>
            </div>
            <span>{ratingValue}</span>
          </div>
        );
      })
    : Options.map((option, index) => {
        const ratingValue = 0;
        return (
          <div key={index} className="flex justify-between">
            <div className="flex gap-1">
              <Checkbox options={option} onChange={onChange} /> <p>{option}</p>
            </div>
            <span>{ratingValue}</span>
          </div>
        );
      });

  return <>{checkboxes}</>;
};
export default RatingCheckbox;

// const FilterCheckbox = ({ data, onChange, stat }) => {
//   const checkboxes = data?.data?.map((option) => (
//     <div key={option._id} className='flex justify-between'>
//       <div className='flex gap-1 '>
//         <Checkbox value={option.name} onChange={() => onChange(option._id)} />
//         <p className='text-xl'>{option.name}</p>
//       </div>
//       <span className=''>{stat?.data?.categories?.hasOwnProperty(option.name) ? stat?.data?.categories[option.name] : '0'}</span>
//     </div>
//   ));
