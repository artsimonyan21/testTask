import "./for_client.css";
import Utils from "../../utils";

const ForClient = () => {
  const data = Utils.getSectionData("for_client");

  return (
    <section className='for_client_section'>
      <p>{data.for_clients}</p>
      <h2 className='for_client_titles'>
        <span>{data.title_1}</span>
        <br />
        <span>{data.title_2}</span>
      </h2>
      <div>
        <p>{}</p>
      </div>
    </section>
  );
};

export default ForClient;
