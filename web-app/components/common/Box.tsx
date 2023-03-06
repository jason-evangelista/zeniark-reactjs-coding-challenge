import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Box: FC<Props> = ({ children }) => {
  return (
    <div className="w-[90%] md:w-[50%]  max-h-[90vh] min-h-[30rem] shadow-md mx-auto rounded-md bg-white p-4 z-10 overflow-x-hidden overflow-y-auto">
      {children}
    </div>
  );
};

export default Box;
