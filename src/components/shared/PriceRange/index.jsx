import { Slider } from 'antd';
const PriceRange = () => {
  return (
    <>
      <Slider range defaultValue={[20, 50]} />
    </>
  );
};
export default PriceRange;