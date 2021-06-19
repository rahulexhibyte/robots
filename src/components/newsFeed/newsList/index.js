import { useState } from "react";
import image1 from "../../../assets/images/detail_image_1.jpeg";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ShareIcon from "@material-ui/icons/Share";
const NewsList = ({ image, desc }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: 15,
        }}
      >
        <div
          style={{
            padding: 10,
            display: "flex",
            alignItems: "start",
            margin: 10,
          }}
        >
          <img
            alt="News Feed"
            src={image}
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
          <div style={{ marginLeft: 10 }}>
            <p>
              {isReadMore ? desc.slice(0, 150) : desc}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={handleReadMore}
              >
                {isReadMore ? " ...Read More" : " Read Less"}
              </span>
            </p>
            <div style={{ marginLeft: "auto" }}>
              <span
                style={{
                  backgroundColor: "black",
                  padding: "5px 1rem",
                  marginLeft: 5,
                  borderRadius: 20,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Like
              </span>
              <span
                style={{
                  backgroundColor: "black",
                  padding: "5px 1rem",
                  marginLeft: 5,
                  borderRadius: 20,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Share
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
