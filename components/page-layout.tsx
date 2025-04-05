import React from 'react';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">{children}</main>
    </div>
  );
};

export default PageLayout;
