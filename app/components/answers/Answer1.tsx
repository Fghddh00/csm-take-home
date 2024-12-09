import Link from 'next/link';
import React from 'react';

const Answer1: React.FC = () => {
  return (
    <div>
      <h2>Answer: </h2>
      <p className="text-lg mb-4">
        React and Next.js have a lot of similarities. Of course since Next.js is built upon React it has the capability of using a lot of the libraries from it. They both are component based frameworks. And allow the use of state management.
      </p>
      <p className="text-lg mb-4">
        Where React and Next.js differ is how they render things. React uses client side rendering while next.js has static rendering (or SSG) and Server side rendering (SSR) which will be able to help improve speed and performance. When it comes to routing, this also is where they differ because React uses outside sources for routing but Next.js has built in routing using a file system. You can use page routing or App routing, Lastly React does not have built in api routes but Next allows for APIs to be used as serverless functions.
      </p>
      <div className="mt-4">
        <Link href='https://radixweb.com/blog/nextjs-vs-react' className="text-blue-500 hover:text-blue-700 mr-4">
          React vs Next
        </Link>
        <Link href='https://nextjs.org/docs/pages/building-your-application/rendering' className="text-blue-500 hover:text-blue-700">
          Rendering
        </Link>
      </div>
    </div>
  );
};

export default Answer1;