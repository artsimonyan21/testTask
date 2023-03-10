import firstSectonData from "../data/welcom_section.json";
import JoinSectonData from "../data/join-section.json";
import talent_section from "../data/talante_section.json";
import good_companies from "../data/good_companies.json";
import for_client from "../data/for_client.json";

export const getSectionData = (section) => {
  switch (section) {
    case "section_1":
      return firstSectonData;
    case "join_section":
      return JoinSectonData;
    case "category_section":
      return talent_section;
    case "good_companies":
      return good_companies;
    case "for_client":
      return for_client;
    default:
      return {};
  }
};
