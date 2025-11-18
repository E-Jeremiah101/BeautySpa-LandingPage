import { useEffect, useRef } from "react";
import Rooming from "../assets/images/review1.jpg";
import Mind from "../assets/images/review2.jpg";
import Cream from "../assets/images/review3.jpg";
import girlback from "../assets/images/African-beauty.jpg";
import girls from "../assets/images/review4.jpg";
import { Element } from "react-scroll";

const slides = [
  {
    url: Mind,
    title: "A Transformative Experience",
    description:
      "I left the spa feeling rejuvenated and revitalized. The massage was heavenly, and the staff was incredibly attentive.",
    mode: "Frequent time visitor",
  },
  {
    url: girlback,
    title: "Unparalleled Service",
    description:
      "The service at Spa is unmatched. I felt welcomed and pampered from the moment I walked in.",
    mode: "Second-time guest",
  },
  {
    url: Cream,
    title: "A Serene Retreat",
    description:
      "This spa is my go-to refuge. The tranquil atmosphere and skilled therapists make every visit a delight.",
    mode: "Frequent visitor",
  },
  {
    url: girls,
    title: "Good Customer Service",
    description:
      "The spa was a dream come true. I left feeling relaxed and pampered.",
    mode: "Frequent visitor",
  },
  {
    url: Rooming,
    title: "Amazing Spa Experience!",
    description:
      "Exceeded my expectations. The ambiance was calming and the staff were amazing.",
    mode: "First-time guest",
  },
];

const Testimonial = () => {
  const containerRef = useRef(null);

  // Duplicate slides to create infinite loop
  const infiniteSlides = [...slides, ...slides];

  useEffect(() => {
    let x = 0;

    function animate() {
      x -= 0.8; // speed: lower = slower

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${x}px)`;

        // When the scroll passes the full width, reset instantly
        if (Math.abs(x) >= containerRef.current.scrollWidth / 2) {
          x = 0;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <>
      <Element name="testimonial">
        <div className="flex justify-center mt-10">
          <span className="service active-service">Testimonials</span>
        </div>
      </Element>

      <div className="overflow-hidden w-full md:w py-10">
        <div ref={containerRef} className="flex gap-10">
          {infiniteSlides.map((slide, i) => (
            <div
              key={i}
              className="min-w-[350px] bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              <h3 className="font-semibold text-lg">{slide.title}</h3>
              <p className="text-gray-700 mt-2">{slide.description}</p>

              <p className="mt-3 text-gray-900 font-medium">~ {slide.mode}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export default Testimonial