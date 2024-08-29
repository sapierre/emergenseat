import * as SecureStore from "expo-secure-store";

import { createClient } from "@turbostarter/auth";

import "react-native-url-polyfill/auto";
import { env } from "~/lib/env";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
};

export const auth = () =>
  createClient(
    {
      url: env.EXPO_PUBLIC_SUPABASE_URL,
      key: env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
    {
      auth: {
        storage: ExpoSecureStoreAdapter,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: "pkce",
      },
    },
  );
