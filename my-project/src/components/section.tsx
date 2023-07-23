import React, { ReactNode } from "react";

interface CustomComponentProps {
  children: ReactNode;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ children }) => {
  return (
    <div className="w-100" style={{ borderTop: "solid 3px #d1d1d1" }}>
      {children}
    </div>
  );
};

export default CustomComponent;
