import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import Box from "./Box";

type Props = PropsWithChildren;

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <main className="h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-full">
        <div className="relative w-full h-full">
          <Image
            src="/bg.png"
            alt="Background image"
            loading="lazy"
            layout="fill"
            objectFit="cover"
            className="-z-10"
            sizes="100%"
          />
        </div>
      </div>
      <Box>{children}</Box>
    </main>
  );
};

export default MainLayout;
