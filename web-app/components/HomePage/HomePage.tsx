import { useRandomNumber } from "@hooks/useRandomNumber";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const HomePage: FC = () => {
  const randomNumber = useRandomNumber();

  return (
    <div className="flex flex-col items-center justify-center h-max gap-4">
      <div className="mt-10">
        <Image
          alt="Zeniark Logo"
          src="/zeniark-logo.png"
          layout="intrinsic"
          width={330}
          height={80}
          loading="lazy"
        />
      </div>
      <section
        className="flex flex-col items-center gap-1"
        aria-label="Welcome header"
      >
        <h1 className="font-bold text-4xl">Welcome to Trivia Challenge</h1>
        <p className="text-xl">
          You will be presented with 10 True or False questions.
        </p>
      </section>
      <div className="bg-primary rounded-md p-4 mt-10 w-2/4">
        <h1 className="text-3xl text-white font-semibold text-center">
          Can you score 10/10?
        </h1>
      </div>
      <Link passHref href={`/question/${randomNumber}`}>
        <a className="underline underline-offset-8 uppercase text-3xl font-bold text-primary mt-10">
          Let&apos;s start!
        </a>
      </Link>
    </div>
  );
};

export default HomePage;
