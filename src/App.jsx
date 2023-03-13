import AboutUpwork from "./components/AboutUpworkSection/AboutUpwork";
import FindWork from "./components/FindWorkSection/FindWork";
import ForClient from "./components/ForClientSection/ForClient";
import ForUcraine from "./components/ForUcraineSection";
import GoodCompanies from "./components/GoodCompaniesSection";
import JoinSection from "./components/JoinSection/JoinSection";
import SkilsCatalog from "./components/SkilsCatalogSection";
import Slider from "./components/SliderWrapperSection/SliderWrapper";
import TalentCategory from "./components/TalentCategorySection/TalentCategory";
import WelcomeSection from "./components/WelcomeSection";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";

const App = () => {
  return (
    <BaseLayout>
      <WelcomeSection />
      <JoinSection />
      <TalentCategory />
      <GoodCompanies />
      <ForClient />
      <AboutUpwork />
      <FindWork />
      <Slider />
      <ForUcraine />
      <SkilsCatalog />
    </BaseLayout>
  );
};

export default App;
