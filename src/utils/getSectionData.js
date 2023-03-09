import firstSectonData from '../data/welcom_section.json';
import JoinSectonData from '../data/join-section.json';

export const getSectionData = (section) => {
  switch (section) {
    case 'section_1':
      return firstSectonData;
    case 'join_section':
      return JoinSectonData;
    default:
      return {};
  }
};
