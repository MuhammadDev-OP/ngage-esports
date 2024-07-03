import React, { FC, ReactNode } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-[1100px] mx-auto px-2">{children}</div>;
};

export default Wrapper;
