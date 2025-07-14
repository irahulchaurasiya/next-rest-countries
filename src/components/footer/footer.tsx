import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] dark:bg-[#59545480] text-black dark:text-white flex justify-center items-center section-padding-x w-full py-[20px] lg:py-[40px] text-base">
      <div className="max-w-[1920px]">
        Made with <FavoriteOutlinedIcon className="text-red-500" /> by{" "}
        <a
          href="https://github.com/irahulchaurasiya"
          className="text-blue-500"
        >
          Rahul Chaurasiya
        </a>
      </div>
    </div>
  );
};

export default Footer;
