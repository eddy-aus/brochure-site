import SEO from '../components/seo';

const NotFound = () => (
  <>
    <SEO
      description={`${org} is a breakthrough Edtech solution, enabling the education sector to deliver online learning to prepare today's learners for tomorrow's opportunities.`}
      title="not found"
    />
    <h1>Uh-oh!</h1>
    <p>The page that you're looking for can't be found...</p>
  </>
);

export { NotFound as default };
