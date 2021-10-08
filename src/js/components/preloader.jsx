// import { useContext } from 'react';
// import Context from './context';
import { BEM } from '../utils';

const { block, element } = BEM('preloader');

const Preloader = () => {
  // const { isReady, setIsLoading } = useContext(Context);
  // const classNames = block() + (isReady ? ' ready' : '');

  // const handleTransitionEnd = () => {
  //   if (!isReady) setIsLoading(false);
  // };

  return (
    <svg
      // className={classNames}
      className={block() + ' ready'}
      width="80"
      height="80"
      // onTransitionEnd={handleTransitionEnd}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={element('ring')} cx="40" cy="40" r="36" />
      <circle className={element('ring')} cx="40" cy="40" r="36" />
    </svg>
  );
};

export { Preloader as default };
