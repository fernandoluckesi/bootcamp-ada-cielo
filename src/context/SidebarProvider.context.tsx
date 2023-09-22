import { createContext, ReactNode, useState } from "react";

interface SidebarProviderProps {
  children: ReactNode;
}

interface SidebarContextProps {
  handleSidebarStatus: (status: boolean) => void;
  open: boolean;
}

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleSidebarStatus = (status: boolean) => {
    setOpen(status);
  };

  return (
    <SidebarContext.Provider
      value={{
        handleSidebarStatus,
        open,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
