import { useContext, useEffect } from 'react';
import Context from '../components/context';
import Section from '../components/section';

const Home = () => {
  const { setIsReady } = useContext(Context);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      {/* <Section heading="Meet eddy" image="/">
        <p>eddy is a breakthrough Edtech solution, enabling universities and the wider education sector to deliver online learning that prepares the learners of today for the job, challenges and opportunities of tomorrow.</p>
        <p>Through its proprietary technology and data platform, eddy enables our educators to deliver high quality and meaningful online programmes spanning degrees, diplomas and certificates.​</p>
      </Section>
      <Section heading="More Than Just a Technology Solution" image="/">
        <p>Enabling quality online offerings requires more than stand-alone technology solutions. eddy provides universities and the wider education sector the ability to quickly enter the online market by providing end-to-end solutions led by global industry heavyweights, therefore, solving the challenge of capacity and capability constraints.</p>
      </Section> */}
    </>
  );
};

export { Home as default };
