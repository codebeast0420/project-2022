import { useState, createContext } from 'react';
type SidebarContext = {
  sidebarToggle: any;
  rightSidebarToggle: any;
  toggleSidebar: () => void;
  toggleRightSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

export const SidebarProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const [rightSidebarToggle, setRightSidebarToggle] = useState(false);
  const toggleRightSidebar = () => {
    setRightSidebarToggle(!rightSidebarToggle);
  };

  return (
    <SidebarContext.Provider
      value={{
        sidebarToggle,
        toggleSidebar,
        rightSidebarToggle,
        toggleRightSidebar
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
