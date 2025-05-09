import gsap from "gsap";
import { useEffect, useRef } from "react";
import Btn from "../other/btn";
import images from "../theme/imagesPath";
import { useGSAP } from "@gsap/react";

const ExpandableServicesBox = ({
  index,
  title,
  content,
  description,
  isActive,
  activeIndex,
  onClick,
  backgroundImage,
  shouldShrink,
}) => {
  const boxRef = useRef();
  const contentRef = useRef();
  const titleRef = useRef();
  const boxBgColors = ["#fafafa", "#8DC74B", "#2F98D0"];
  const badgeRef = useRef();

  const shouldHide = activeIndex !== null && index > activeIndex;

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut", duration: 0.4 }, // smoother default
    });

    if (isActive) {
      tl.to(boxRef.current, {
        flexBasis: "100%",
        padding: "20px",
        duration: 0.5,
      })
        .to(
          titleRef.current,
          {
            rotate: 0,
            x: 0,
            y: 0,
            top: "1rem",
            left: "1.5rem",
            width: "fit-content",
            position: "absolute",
            duration: 0.5,
            ease: "power2.out",
          },
          "<" // keep title animating with box
        )
        .to(contentRef.current, { opacity: 1 }, "-=0.2") // fade in content slightly before badge
        .set(badgeRef.current, { display: "flex", opacity:0 }) // make badge visible
        .to(badgeRef.current, {
          opacity: 1,
          rotate: "180deg",
          duration: 0.4,
          ease: "power2.out",
        }); // badge comes in LAST
    } else if (activeIndex !== null && index < activeIndex) {
      tl.to(boxRef.current, {
        flexBasis: "10%",
        padding: "10px",
        duration: 0.4,
        ease: "power2.inOut",
      })
        .to(contentRef.current, { opacity: 0 }, 0)
        .to(badgeRef.current, { opacity: 0 })
        .set(badgeRef.current, { display: "none" });
    } else {
      tl.to(boxRef.current, {
        flexBasis: "15.5%",
        padding: "20px",
        display: "flex",
        duration: 0.4,
      })
        .to(
          titleRef.current,
          {
            rotate: -90,
            x: "10%",
            y: 0,
            left: 0,
            top: "65%",
            duration: 0.5,
            ease: "power2.out",
            width: "300px",
          },
          0
        )
        .to(contentRef.current, { opacity: 0 }, 0)
        .set(badgeRef.current, { display: "flex" })
        .to(
          badgeRef.current,
          { opacity: 1, rotate: "0deg", ease: "power2.out", duration: 0.4 },
          "<"
        );
    }
  }, [isActive, shouldShrink]);

  useEffect(() => {
    if (shouldHide) {
      const tl = gsap.timeline();
      tl.to(boxRef.current, {
        flexBasis: "0%",
        padding: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power1.inOut", // smoother hide
        onComplete: () => {
          boxRef.current.style.display = "none";
        },
      });
    }
  }, [shouldHide]);

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
      }
    : {
        backgroundColor: boxBgColors[index % boxBgColors.length],
        backgroundSize: "cover",
        backgroundPosition: "center",
        color:
          boxBgColors[index % boxBgColors.length] === "#fafafa"
            ? "#000"
            : "#fff",
      };

  return (
    <div
      ref={boxRef}
      className="expandable-box-2 relative overflow-hidden"
      onClick={onClick}
      style={{
        ...backgroundStyle,
      }}
    >
      {backgroundImage && (
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add an overlay for darkening the background image
          }}
        />
      )}
      <div style={{ zIndex: 1 }}>
        <h3 ref={titleRef} className="box-title-service">
          {title}
        </h3>
      </div>

      <div
        ref={badgeRef}
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

      <div
        ref={contentRef}
        className="box-content-service"
        style={{ opacity: 0, zIndex: 1 }}
      >
        <p
          className="mb-3"
          style={{
            color: backgroundImage
              ? "#fff"
              : boxBgColors[index % boxBgColors.length] === "#fafafa"
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
