import { useContext } from 'react';
import Context from './context';

const Preloader = () => {
  const { isPreloaderMounted, setIsLoading } = useContext(Context);

  const handleTransitionEnd = () => {
    if (!isPreloaderMounted) {
      setIsLoading(false);
    }
  };

  const classNames = isPreloaderMounted
    ? 'eddy-spinner mounted'
    : 'eddy-spinner';

  return (
    <svg
      className={classNames}
      width="80"
      height="80"
      onTransitionEnd={handleTransitionEnd}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="eddy-spinner__ring" cx="40" cy="40" r="36" />
      <circle className="eddy-spinner__ring" cx="40" cy="40" r="36" />
    </svg>
  );
};

export { Preloader as default };

// < !DOCTYPE html >
//   <html lang="en-AU">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Spinner Demo</title>
//       <style>

//       /* End spinner styles */
//       </style>
//     </head>
//     <body>
//       <main class="demo__outer">
//         <div class="demo__inner">
//           <!-- Start spinner markup -->

//           <!-- End spinner markup -->
//         </div>
//       </main>
//     </body>
//   </html>
