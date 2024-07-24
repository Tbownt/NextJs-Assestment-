import { usePathname } from "next/navigation";

export const useGetPathName = () => {
  const pathname = usePathname();

  const checkPathName = (URLName: string) => {
    if (URLName === "/") {
      return "HOME";
    } else if (URLName === "/Marketplace") {
      return "MARKETPLACE";
    }
  };
  return checkPathName(pathname);
};
