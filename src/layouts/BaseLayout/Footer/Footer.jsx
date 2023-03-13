import "./footer.css";

import Utils from "../../../utils";

import { ReactComponent as Faceboock } from "../../../assets/faceboock.svg";
import { ReactComponent as Linkedin } from "../../../assets/linkedin.svg";
import { ReactComponent as Tvitter } from "../../../assets/tvitter.svg";
import { ReactComponent as Youtube } from "../../../assets/youtube.svg";
import { ReactComponent as Instagaram } from "../../../assets/instagram.svg";
import { ReactComponent as AppStore } from "../../../assets/appStore.svg";
import { ReactComponent as PlayMarket } from "../../../assets/playMarket.svg";

const Footer = () => {
  const data = Utils.getSectionData("footer");
  console.log("data", data);

  console.log("data.colum_4", data.colum_4);

  return (
    <section className="footer_section">
      <div className="footer_section_content">
        <div className="footer_columes_wrapper">
          <div>
            <div className="footer_colum_title">{data.colum_1_title}</div>
            <ul className="footer_colum_content">
              {data.colum_1?.map((el, index) => {
                return (
                  <li key={index}>
                    <a href="#"> {el}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_columes">
            <div className="footer_colum_title">{data.colum_2_title}</div>
            <ul className="footer_colum_content">
              {data.colum_2?.map((el, index) => {
                return (
                  <li key={index}>
                    <a href="#"> {el}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_columes">
            <div className="footer_colum_title">{data.colum_3_title}</div>
            <ul className="footer_colum_content">
              {data.colum_3?.map((el, index) => {
                return (
                  <li key={index}>
                    <a href="#"> {el}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_columes">
            <div className="footer_colum_title">{data.colum_4_title}</div>
            <ul className="footer_colum_content">
              {data.colum_4?.map((el, index) => {
                return (
                  <li key={index}>
                    <a href="#"> {el}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer_icons">
          <div>
            <div>{data.follow_us}</div>
            <a href="#">
              <Faceboock />
            </a>
            <a href="#">
              <Linkedin />
            </a>
            <a href="#">
              <Tvitter />
            </a>
            <a href="#">
              <Youtube />
            </a>
            <a href="#">
              <Instagaram />
            </a>
          </div>

          <div>
            <div>{data.mobile_app}</div>
            <a href="#">
              <AppStore />
            </a>
            <a href="#">
              <PlayMarket />
            </a>
          </div>
        </div>
        <div className="footer_year_about">
          <p>{data.upwork_year}</p>
          {data?.bottom_descrip.map((el, index) => {
            return (
              <a href="#" key={index}>
                {el}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
