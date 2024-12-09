import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const questions = Array.from({ length: 8 }, (_, i) => `Question ${i + 1}`);

  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-4 left-4 border border-white text-white px-4 py-2 rounded-full text-sm">
        Digital Success Take Home Assignment Example
      </div>
      <main className="flex-grow flex flex-col items-center justify-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <div className="flex justify-between items-center mt-8 overflow-x-auto px-4">
        {questions.map((question, index) => (
          <Link 
            key={index} 
            href={`/question/${index + 1}`}
            className="text-white hover:text-blue-300 font-medium flex items-center transition-colors duration-200"
          >
            <span>{question}</span>
            <span className="ml-1">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
