import firstSectonData from "../data/welcom_section.json";
import JoinSectonData from "../data/join-section.json";
import talent_section from "../data/talante_section.json";
import good_companies from "../data/good_companies.json";
import for_client from "../data/for_client.json";
import about_upwork from "../data/about_upwork.json";
import find_work from "../data/find_work.json";
import for_ucraine from "../data/for_ucraine.json";
import skils_catalog from "../data/skils_catalog.json";
import footer from "../data/footer.json";
import header_find_work_section from "../data/header_find_work_section.json";

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
    case "about_upwork":
      return about_upwork;
    case "find_work":
      return find_work;
    case "for_ucraine":
      return for_ucraine;
    case "skils_catalog":
      return skils_catalog;
    case "footer":
      return footer;
    case "header_find_work_section":
      return header_find_work_section;
    default:
      return {};
  }
};
