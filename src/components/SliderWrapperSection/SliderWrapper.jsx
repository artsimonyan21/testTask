import "./slider_wrapper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as NasdaqLogo } from "../../assets/nasdaq-light.svg";
import { ReactComponent as NextIcon } from "../../assets/swiper_next.svg";
import { ReactComponent as PrevIcon } from "../../assets/swiper_prev.svg";

import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const SliderWrapper = () => {
  return (
    <section className="slider_section">
      <h2>
        Trusted by leading <br /> brands and startups
      </h2>
      <div className="swipper_wrapper">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          className="slider_wrapper"
          navigation={{
            nextEl: ".swiper_button_next",
            prevEl: ".swiper_button_prev",
            disabledClass: "swiper_button_disabled",
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="swiper_first_item">
              <NasdaqLogo />
              <h4>
                “Upwork enables us to differentiate ourselves from our
                competitors and produce content at a higher caliber.”
              </h4>
              <p>Josh Machiz, Chief Digital Officer</p>
              <div className="swiper_result_section">Results</div>
              <div className="swiper_result_content">
                <div>
                  <h4>Emmy Winning</h4>
                  <p>Facebook Watch program</p>
                </div>
                <div>
                  <h4>Millions</h4>
                  <p>of impressions generated per client per IPO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_second_item">
              <img
                src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//general/logobar/colored/microsoft-lg-light.svg"
                alt=""
              />
              <h4>
                “One of the advantages of utilizing freelancers is finding
                talent with different skills quickly as our needs change.”
              </h4>
              <p>Carol Taylor, Director of Content Experience</p>
              <div className="swiper_result_section">Results</div>
              <div className="swiper_result_content">
                <div>
                  <h4>Emmy Winning</h4>
                  <p>Facebook Watch program</p>
                </div>
                <div>
                  <h4>Millions</h4>
                  <p>of impressions generated per client per IPO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_last_item">
              <div className="swiper_last_item_img">
                <img
                  src="https://res.cloudinary.com/upwork-cloud-stage/image/upload/v1650909071/general/logobar/colored/company-logos-cover.jpg"
                  alt=""
                />
              </div>
              <div className="swiper_last_item_description">
                <p>And many more</p>
                <div>
                  <img
                    className="nasdaq_img"
                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//general/logobar/colored/nasdaq-light.svg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//general/logobar/colored/automattic-light.svg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//general/logobar/colored/bissell-light.svg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//general/logobar/colored/coty-light.svg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//general/logobar/colored/rancher-v2-light.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <button className="swiper_button_prev swiper_button_base">
            <PrevIcon />
          </button>
          <button className="swiper_button_next swiper_button_base">
            <NextIcon />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderWrapper;
