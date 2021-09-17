import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../components/context';
import Footer from '../components/footer';
import Logo from '../components/logo';
import Section from '../components/section';
import { namespace as ns } from '../../config';

const Home = () => {
  const { setIsReady } = useContext(Context);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <main>
        <h1
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        >
          Home
        </h1>
        <div
          className={ns + '-banner'}
          style={{
            backgroundImage: 'url("/images/eddy-hero.jpg")',
          }}
        >
          <Logo className={ns + '-banner__logo'} />
        </div>
        <Section heading="Meet eddy" image="/images/meet-eddy.png">
          <p>
            Eddy is a breakthrough Edtech solution, enabling universities and
            the wider education sector to deliver online learning that prepares
            the learners of today for the job, challenges and opportunities of
            tomorrow.
          </p>
          <p>
            Through its proprietary technology and data platform, eddy enables
            our educators to deliver high quality and meaningful online
            programmes spanning degrees, diplomas and certificates.​
          </p>
          <Link className={ns + '-link'} to="/Contact">
            Get in touch
          </Link>
        </Section>
        <Section
          heading="More Than a Technology Solution"
          image="/images/more-than-a-tech-solution.png"
        >
          <p>
            Enabling quality online offerings requires more than stand-alone
            technology solutions. eddy provides universities and the wider
            education sector the ability to quickly enter the online market by
            providing end-to-end solutions led by global industry heavyweights,
            therefore, solving the challenge of capacity and capability
            constraints.
          </p>
        </Section>
        <Section
          heading="Powered By People"
          image="/images/powered-by-people.jpg"
          type="image"
        >
          <p>
            Technology is an enabler, not a solution. Our digitally capable
            workforce drive the success of our partnerships and most
            importantly, student outcomes at scale.
          </p>
        </Section>
        <Section
          heading="Market Expansion"
          image="/images/market-expansion.png"
        >
          <p>
            Our acquisition team enables partners to expand their market through
            best in breed digital marketing driving prospective students to have
            conversations with our teams to provide partners with the right
            students in the right courses at scale.​
          </p>
        </Section>
        <Section
          heading="Product Development"
          image="/images/product-development.png"
        >
          <p>
            Our product development team are experts in online development. We
            design and build engaging online materials designed for mobile
            consumption coupled with a robust and innovative assessment to
            industry-ready student outcomes.​
          </p>
        </Section>
        <Section
          heading="Technology Enablers"
          image="/images/technology-enablers.png"
        >
          <p>
            Our technology team are agile and are constantly delivering to the
            needs of our students, staff and partners. Unlike off the shelf
            products, our technology designs and delivers new features and
            solutions that cater to the unique needs of your students and
            institution quickly.​
          </p>
        </Section>
      </main>
      <Footer copyrightYear={2021} />
    </>
  );
};

export { Home as default };
