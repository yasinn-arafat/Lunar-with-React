import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="testimonal">
        <div className="container">
          <h2 className="testimonial__heading">Our Testimonials</h2>

          <div className="testimonial__body">
            <div className="testimonial__img">
              <picture>
                <img
                  src="/src/assets/Base.png"
                  alt="/src/assets/Base.png"
                  className="base__img"
                />
              </picture>
            </div>
            <div className="testimoinial__text">
              <h3 className="testimonial__lunar">
                Lunar Strategy helped us with our digital marketing for 4 months
                now and still helps us. Great service and highly recommended.
              </h3>
              <p className="testimonial__details">
                — Kimmo Hakonen - Skrum Master at DaGear AB
              </p>
              <div className="testimonial__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.39705 15.6786L9.17753 14.8981C9.51501 14.5641 9.50801 14.0192 9.16345 13.6923L4.92713 9.65633H15.031C15.4986 9.65633 15.8748 9.28015 15.8748 8.81258V7.68758C15.8748 7.22001 15.4986 6.84384 15.031 6.84384H4.92713L9.16345 2.80792C9.50447 2.48097 9.51151 1.93605 9.17753 1.60207L8.39705 0.821592C8.07011 0.49111 7.53573 0.49111 7.20528 0.821592L0.370908 7.65593C0.0404264 7.98291 0.0404264 8.51726 0.370908 8.84774L7.20528 15.6786C7.53223 16.0091 8.06661 16.0091 8.39705 15.6786Z"
                    fill="#959EAD"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.7945 15.6786L15.6289 8.84424C15.9594 8.51726 15.9594 7.98291 15.6289 7.65243L8.7945 0.821592C8.46755 0.49111 7.93317 0.49111 7.60272 0.821592L6.82225 1.60207C6.48476 1.93605 6.49177 2.48097 6.83633 2.80792L11.0726 6.84384H0.968748C0.501178 6.84384 0.125 7.22001 0.125 7.68758V8.81258C0.125 9.28015 0.501178 9.65633 0.968748 9.65633H11.0726L6.83633 13.6923C6.4953 14.0192 6.48827 14.5641 6.82225 14.8981L7.60272 15.6786C7.92967 16.0091 8.46405 16.0091 8.7945 15.6786Z"
                    fill="#32046B"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
