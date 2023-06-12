/* eslint-disable react/prop-types */
import Pen  from '../../../assets/images/FAQ/Pen.svg';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const AccordionFAQ = ({question,answer}) => {
  return (
    <>
      <Collapse
        expandIconPosition='end'
        className='w-[100%] bg-white mb-6'
      >
        <Panel header={
        <div className='flex flex-row items-center mb-1'>
        <img src={Pen}
        className='h-7 w-7 mr-4'
        onClick={(event) => {
        event.stopPropagation();
        }}/>
        <span className='text-2xl'>{question}</span>
        </div>
        }>
          <div><span className='text-lg'>{answer}</span></div>
        </Panel>
      </Collapse>
    </>
  );
};
export default AccordionFAQ;