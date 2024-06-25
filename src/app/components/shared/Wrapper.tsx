import React, { FC, ReactNode } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-[1100px] mx-auto px-1">{children}</div>;
};

export default Wrapper;
