import { useRouter } from "expo-router";
import { useUser } from "../../hooks/use-user";
import { useEffect } from "react";
import ThemeLoader from "../themeloader";

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login");
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    return <ThemeLoader />;
  }

  return children;
};

export default UserOnly;
