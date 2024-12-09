import Link from 'next/link';
import Question2 from '../../components/questions/Question2';
import Answer2 from '../../components/answers/Answer2';

export default function Question2Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Question 2</h1>
        <Question2 />
        <Answer2 />
      </div>
      <Link 
        href="/" 
        className="mt-8 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-bold py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
}