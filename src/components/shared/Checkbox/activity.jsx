import { Checkbox } from 'antd';
const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const Options = ['Cruise', 'Hiking', 'Food','Art','Religion','Diving','Medical','History'];

const FilterCheckbox = () => {
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
export default FilterCheckbox;