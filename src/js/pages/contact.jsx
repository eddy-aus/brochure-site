import { useContext, useEffect } from 'react';
import Context from '../components/context';

const Contact = () => {
  const { setIsReady } = useContext(Context);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      {/* <iframe
        allowtransparency="true"
        frameBorder="0"
        src="https://eddyonline.wufoo.com/embed/m1ezq4pq1mm075w/"
      ></iframe> */}
    </>
  );
};

export { Contact as default };
