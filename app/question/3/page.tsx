import Link from 'next/link';
import Question3 from '../../components/questions/Question3';
import Answer3 from '../../components/answers/Answer3';

export default function Question3Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Question 3</h1>
        <Question3 />
        <Answer3 />
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