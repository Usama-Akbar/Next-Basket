import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <div>
      <div className="header-main">
        <Image
          height="0"
          width="0"
          alt="phone"
          unoptimized
          src={"assets/phone.png"}
        />
      </div>
    </div>
  );
};

export default Header;
