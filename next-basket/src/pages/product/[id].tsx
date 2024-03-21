import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
const ProductPage: React.FC = () => {
  const breadcrumbs = [<span>Home</span>, <span>Shop</span>];
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div>
      <div className="product-top-details">
        <div className="breadcrumbs-div">
          <Breadcrumbs
            separator={
              <Image
                height="14"
                width="8"
                alt="phone"
                className="ms-2 me-2"
                unoptimized
                src={"/assets/arrow-grey.png"}
              />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </div>
    </div>
  );
};

export default ProductPage;
