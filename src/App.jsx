import JoinSection from './components/JoinSection/JoinSection';
import WelcomeSection from './components/WelcomeSection';
import BaseLayout from './layouts/BaseLayout/BaseLayout';

const App = () => {
  return (
    <BaseLayout>
      <WelcomeSection />
      <JoinSection />
    </BaseLayout>
  );
};

export default App;
