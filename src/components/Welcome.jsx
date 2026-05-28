import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `"wght" ${baseWeight}`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return ()=>{};

  const letters = container.querySelectorAll("span");
  const { max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `"wght" ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();

      const distance = Math.abs(mouseX - (l + w / 2));

      const intensity = Math.exp(-(distance ** 2) / 20000);

      animateLetter(letter, base + (max - base) * intensity);
    });
  };
 
  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base, 0.3));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
};

const Welcome = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
  const titleCleanup =  setupTextHover(titleRef.current, "title");
  const subtitleCleanup =  setupTextHover(subtitleRef.current, "subtitle");

  return () => {
    titleCleanup();
    subtitleCleanup();
  };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Ayush! Welcome to my ",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText(
          "Portfolio",
          "text-9xl italic font-georama"
        )}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screens only</p>
      </div>
    </section>
  );
};

export default Welcome;