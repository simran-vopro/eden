import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Btn from "../other/btn";
import images from "../theme/imagesPath";

const ExpandableServicesBox = ({
  index,
  title,
  content,
  isActive,
  onClick,
}) => {
  const boxRef = useRef();
  const contentRef = useRef();
  const titleRef = useRef();
  const boxBgColors = ["#fafafa", "#8DC74B", "#2F98D0"];

  useEffect(() => {
    if (isActive) {
      // Expand width
      gsap.to(boxRef.current, {
        flexBasis: "90%",
        duration: 0.5,
        ease: "power2.out",
      });

      // Rotate title to normal and move to top
      gsap.to(titleRef.current, {
        rotate: 0,
        x: 0,
        y: 0,
        top: "1rem",
        left: "1.5rem",
        position: "absolute",
        duration: 0.5,
        ease: "power2.out",
      });

      // Reveal content
      gsap.to(contentRef.current, {
        opacity: 1,
        duration: 0.3,
        delay: 0.2,
        ease: "power2.out",
      });
    } else {
      // Collapse box
      gsap.to(boxRef.current, {
        flexBasis: "15.5%",
        duration: 0.4,
        ease: "power2.inOut",
      });

      // Rotate title back to vertical left
      gsap.to(titleRef.current, {
        rotate: -90,
        x: 0,
        y: 0,
        left: 0,
        bottom: "0%",
        top: "auto",
        duration: 0.5,
        ease: "power2.out",
      });

      // Hide content
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isActive]);

  return (
    <div
      ref={boxRef}
      className="expandable-box-2 relative overflow-hidden"
      onClick={onClick}
      style={{
        backgroundColor: boxBgColors[index % boxBgColors.length],
        backgroundSize: "cover",
        backgroundPosition: "center",
        color:
          boxBgColors[index % boxBgColors.length] === "#fafafa"
            ? "#000"
            : "#fff",
        height: "450px",
      }}
    >
      <div>
        <h3 ref={titleRef} className="box-title-service">
          {title}
        </h3>
      </div>
      <div
        className="index-badge-service"
        style={{
          backgroundColor:
            boxBgColors[index % boxBgColors.length] === "#fafafa"
              ? "#2F98D0"
              : "#fff",
          color:
            boxBgColors[index % boxBgColors.length] === "#fafafa"
              ? "#fff"
              : "#000",
        }}
      >
        {boxBgColors[index % boxBgColors.length] === "#fafafa" ? (
          <img src={images.icon_top_white} className="icon-top" alt="icon" />
        ) : (
          <img src={images.icon_top} className="icon-top" alt="icon" />
        )}
      </div>

      <div ref={contentRef} className="box-content" style={{ opacity: 0 }}>
        <p
          className="long-content"
          style={{
            color:
              boxBgColors[index % boxBgColors.length] === "#fafafa"
                ? "#828282"
                : "#fff",
          }}
        >
          {content}
        </p>

        <div className="box-btn">
          <Btn
            rightIconChildren={
              boxBgColors[index % boxBgColors.length] === "#fafafa" ? (
                <img src={images.icon_top} className="icon-top" alt="icon" />
              ) : (
                <img
                  src={images.icon_top_white}
                  className="icon-top"
                  alt="icon"
                />
              )
            }
            iconbackground={
              boxBgColors[index % boxBgColors.length] === "#8DC74B"
                ? "#8DC74B"
                : boxBgColors[index % boxBgColors.length] === "#2F98D0"
                ? "#2F98D0"
                : "#fff"
            }
            color={
              boxBgColors[index % boxBgColors.length] === "#8DC74B"
                ? "#8DC74B"
                : boxBgColors[index % boxBgColors.length] === "#2F98D0"
                ? "#2F98D0"
                : "#fff"
            }
            background={
              boxBgColors[index % boxBgColors.length] === "#fafafa"
                ? "linear-gradient(86.2deg, #2F98D0 8.59%, #47ADE3 89.8%)"
                : "linear-gradient(86.2deg,#ffffff 8.59%, #ffffff 89.8%)"
            }
            rightIcon
          >
            Learn More
          </Btn>
        </div>
      </div>

      <img src={images.pattern} alt="pattern" id="pattern" />
    </div>
  );
};

export default ExpandableServicesBox;
