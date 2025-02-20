import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {

  return  <div className="flex justify-center">
  <div className="max-w-screen-xl">{children}</div>
  </div>
};

export default Container;
