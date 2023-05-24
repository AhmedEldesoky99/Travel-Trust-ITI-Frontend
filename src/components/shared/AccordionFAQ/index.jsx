import Pen  from '../../../assets/images/FAQ/Pen.svg';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const AccordionFAQ = () => {
  const onChange = (key) => {
    console.log(key);
  }
  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition='end'
      >
        <Panel header={
        <div className='flex flex-row items-center'>
        <img src={Pen}
        className='h-7 w-7 mr-4'
        onClick={(event) => {
        event.stopPropagation();
        }}/>
        <span>This is panel header 1</span>
        </div>
        } key="1">
          <div>{text}</div>
        </Panel>
        <Panel header={
        <div className='flex flex-row items-center'>
        <img src={Pen}
        className='h-7 w-7 mr-4'
        onClick={(event) => {
        event.stopPropagation();
        }}/>
        <span>This is panel header 2</span>
        </div>
        } key="2">
          <div>{text}</div>
        </Panel>
        <Panel header={
        <div className='flex flex-row items-center'>
        <img src={Pen}
        className='h-7 w-7 mr-4'
        onClick={(event) => {
        event.stopPropagation();
        }}/>
        <span>This is panel header 3</span>
        </div>
        } key="3">
          <div>{text}</div>
        </Panel>
      </Collapse>
      <br />
    </>
  );
};
export default AccordionFAQ;