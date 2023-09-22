import { useContext } from "react";
import { SidebarContext } from "../context/SidebarProvider.context";

export const useSidebar = () => useContext(SidebarContext);
