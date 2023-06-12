import { Checkbox } from 'antd';
const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const Options = ['5 Star', '4 Star', '3 Star','2 Star','1 Star'];

const RatingCheckbox = () => {
    const checkboxes = Array.from({ length: Options.length }, (_, index) => (
        <div key={index} className='flex gap-1'>
            <Checkbox options={Options[index]} onChange={onChange}/> <p>{Options[index]}</p>
        </div>
      ));
    return (
        <>
            {checkboxes}
        </>
    );
}
export default RatingCheckbox;