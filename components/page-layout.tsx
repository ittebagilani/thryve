import React from 'react';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default PageLayout;
