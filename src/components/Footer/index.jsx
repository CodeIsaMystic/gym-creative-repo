import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import SectionHeader from "../SectionHeader";

import "./style.scss";

export default function Footer() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });
      // const splitParent = new SplitText("#location-text", {
      //   type: "lines",
      //   linesClass: "lineParent",
      // });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          // opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Location" />

      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        Loire s/ Rhône
      </h1>
    </section>
  );
}
