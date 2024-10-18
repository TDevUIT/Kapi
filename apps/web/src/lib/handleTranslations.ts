import { useTranslations } from "next-intl";

// Generic hook with type safety for translations
export function useHandleTranslations<T extends Record<string, string>>(namespace: string): T {
  const t = useTranslations(namespace);
  return new Proxy({} as T, {
    get: (_, key: string) => t(key),
  });
}
