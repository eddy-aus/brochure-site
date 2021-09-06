import { useContext } from 'react';
import Context from '../components/context';

const Contact = () => {
  const { isPageMounted } = useContext(Context);
  // const classNames = `eddy-heading${isPageMounted ? ' mounted' : ''}`;

  return (
    <>
      {/* <h1 className={classNames}>Contact</h1> */}
      <iframe
        height="577"
        title="Embedded Wufoo Form"
        allowtransparency="true"
        frameBorder="0"
        scrolling="no"
        src="https://eddyonline.wufoo.com/embed/m1ezq4pq1mm075w/"
      ></iframe>
    </>
  );
};

export { Contact as default };
