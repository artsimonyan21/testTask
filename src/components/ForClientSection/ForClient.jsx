import "./for_client.css";
import Utils from "../../utils";
import ForClientButton from "./Components/ForClientButton";

const ForClient = () => {
  const data = Utils.getSectionData("for_client");

  return (
    <section className="for_client_section">
      <p>{data.for_clients}</p>
      <h2 className="for_client_titles">
        <span>{data.title_1}</span>
        <br />
        <span>{data.title_2}</span>
      </h2>
      <div className="for_client_descriptiom_wrapper">
        <p>{data.description}</p>
      </div>
      <div className="for_client_buttons_wrapper">
        {data.client_buttons.map((el, index) => {
          return <ForClientButton {...el} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ForClient;
