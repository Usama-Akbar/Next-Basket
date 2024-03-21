import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="poster-homepage">
      <div>
        {" "}
        <Image
          alt="poster"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          unoptimized
          src={"assets/image-1.png"}
        />
      </div>
      <div className="d-flex flex-column ms-3">
        <Image
          alt="poster"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          unoptimized
          src={"assets/image-2.png"}
        />
        <div className="d-flex mt-3">
          <Image
            alt="poster"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            unoptimized
            src={"assets/image-3.png"}
          />{" "}
          <Image
            alt="poster"
            className="ms-3"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            unoptimized
            src={"assets/image-4.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
