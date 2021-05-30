import { useEffect } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { useRouter } from "next/router";

export const useRequireLogin = (redirectUrl?: string): void => {
  const { isLogin, isFetched } = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    if (!isFetched) return;
    if (!isLogin) {
      router.push(redirectUrl ?? "/");
    }
  }, [isLogin, isFetched, router, redirectUrl]);
};
