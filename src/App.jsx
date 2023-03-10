import ForClient from "./components/ForClientSection/ForClient";
import GoodCompanies from "./components/GoodCompaniesSection";
import JoinSection from "./components/JoinSection/JoinSection";
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
    </BaseLayout>
  );
};

export default App;
