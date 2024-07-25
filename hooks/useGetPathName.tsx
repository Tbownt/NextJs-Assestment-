import { usePathname } from "next/navigation";

export const useGetPathName = () => {
  const pathname = usePathname();

  const checkPathName = (URLName: string) => {
    if (URLName === "/") {
      return "HOME";
    } else if (URLName === "/Marketplace") {
      return "MARKETPLACE";
    } else {
      return `DETAIL NUMBER: ${URLName.slice(13, 15)}`;
    }
  };
  return checkPathName(pathname);
};
