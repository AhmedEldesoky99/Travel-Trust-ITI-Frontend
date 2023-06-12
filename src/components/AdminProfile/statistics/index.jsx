/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const Statistics = props => {

  const {stat, num, duration = 2 } = props;

  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(num.substring(0,3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + num.substring(3))
      if (start === end) clearInterval(timer)
    }, incrementTime);

    // dependency array
  }, [num, duration]);


  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl text-primary-green">{count}</h2>
        <p className="max-w-[68px] text-center">{stat}</p>
      </div>
    </>
  );
};

export default Statistics;

