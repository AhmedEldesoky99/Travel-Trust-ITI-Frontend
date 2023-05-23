import React from "react";

const Icon = ({ name, color }) => {
  const iconsObj = {
    userAdd: (
      <svg
        className={color}
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 16.6735H17M14 13.7347V19.6122M1 18.6327V16.6735C1 15.6343 1.42143 14.6376 2.17157 13.9028C2.92172 13.1679 3.93913 12.7551 5 12.7551H9M3 4.91837C3 5.95758 3.42143 6.95424 4.17157 7.68907C4.92172 8.42391 5.93913 8.83673 7 8.83673C8.06087 8.83673 9.07828 8.42391 9.82843 7.68907C10.5786 6.95424 11 5.95758 11 4.91837C11 3.87915 10.5786 2.8825 9.82843 2.14766C9.07828 1.41283 8.06087 1 7 1C5.93913 1 4.92172 1.41283 4.17157 2.14766C3.42143 2.8825 3 3.87915 3 4.91837Z"
          stroke="#009EB7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    userDelete: (
      <svg
        className={color}
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 18.6327V16.6735C1 15.6343 1.42143 14.6376 2.17157 13.9028C2.92172 13.1679 3.93913 12.7551 5 12.7551H9C9.348 12.7551 9.686 12.7992 10.009 12.8805M11 16.6735H17M3 4.91837C3 5.95758 3.42143 6.95423 4.17157 7.68907C4.92172 8.42391 5.93913 8.83673 7 8.83673C8.06087 8.83673 9.07828 8.42391 9.82843 7.68907C10.5786 6.95423 11 5.95758 11 4.91837C11 3.87915 10.5786 2.8825 9.82843 2.14766C9.07828 1.41283 8.06087 1 7 1C5.93913 1 4.92172 1.41283 4.17157 2.14766C3.42143 2.8825 3 3.87915 3 4.91837Z"
          stroke="#C74C4D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    delete: (
      <svg
        className={color}
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3858 19.5522H5.61659C5.20856 19.5522 4.81725 19.3953 4.52873 19.116C4.24021 18.8367 4.07812 18.4579 4.07812 18.0629V4.65918H17.9243V18.0629C17.9243 18.4579 17.7622 18.8367 17.4737 19.116C17.1852 19.3953 16.7938 19.5522 16.3858 19.5522Z"
          stroke="#585858"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.69141 15.0844V9.1272"
          stroke="#585858"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3086 15.0844V9.1272"
          stroke="#585858"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 4.65918H21"
          stroke="#585858"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3101 1.68066H8.69471C8.28669 1.68066 7.89537 1.83757 7.60685 2.11687C7.31834 2.39617 7.15625 2.77498 7.15625 3.16997V4.65927H14.8486V3.16997C14.8486 2.77498 14.6865 2.39617 14.398 2.11687C14.1094 1.83757 13.7181 1.68066 13.3101 1.68066Z"
          stroke="#585858"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };

  return iconsObj[name];
};

export default Icon;
