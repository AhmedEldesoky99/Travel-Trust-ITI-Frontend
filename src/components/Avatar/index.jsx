import { Link } from "react-router-dom";

const Avatar = ({ name, image }) => {
  return (
    // <div className="flex justify-strat items-center">
    //   <div className="w-10 h-10 rounded-full bg-primary-green bg-signup-admin bg-cover"></div>
    //   <p className="ml-2 capitalize">{name}</p>
    // </div>

    <div className="flex items-center ">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <Link to="">
            <img src={image} />
          </Link>
        </div>
      </div>

      <p className="ml-2 capitalize">
        <Link to="" className="hover:text-primary-green">
          {name}
        </Link>
      </p>
    </div>
  );
};

export default Avatar;
