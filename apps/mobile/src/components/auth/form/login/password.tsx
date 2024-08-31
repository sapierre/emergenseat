import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { Alert, View } from "react-native";

import { passwordLoginSchema } from "@turbostarter/shared/validators";
import { Button } from "@turbostarter/ui-mobile/button";
import {
  Form,
  FormField,
  FormInput,
  FormItem,
} from "@turbostarter/ui-mobile/form";
import { Icons } from "@turbostarter/ui-mobile/icons";
import { Text } from "@turbostarter/ui-mobile/text";

import { pathsConfig } from "~/config/paths";
import { api } from "~/lib/api/trpc";
import { auth } from "~/lib/auth";

import type { PasswordLoginData } from "@turbostarter/shared/validators";

export const PasswordLoginForm = memo(() => {
  const utils = api.useUtils();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: PasswordLoginData) => auth().signInWithPassword(data),
    onSettled: async (data) => {
      const error = data?.error;

      if (error) {
        return Alert.alert("Something went wrong!", error.message);
      }

      await utils.user.get.invalidate();
      return router.navigate(pathsConfig.tabs.settings);
    },
  });

  const form = useForm<PasswordLoginData>({
    resolver: zodResolver(passwordLoginSchema),
  });

  const onSubmit = (data: PasswordLoginData) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <View className="gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormInput
                label="Email"
                autoCapitalize="none"
                autoComplete="email"
                {...field}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormInput
                label="Password"
                secureTextEntry
                autoComplete="password"
                {...field}
              />
            </FormItem>
          )}
        />

        <Button
          className="w-full"
          size="lg"
          onPress={form.handleSubmit(onSubmit)}
          disabled={isPending}
        >
          {isPending ? (
            <Icons.Loader2 className="animate-spin text-primary-foreground" />
          ) : (
            <Text>Sign in</Text>
          )}
        </Button>

        <View className="items-center justify-center pt-2">
          <View className="flex-row">
            <Text className="text-sm text-muted-foreground">
              Don&apos;t have an account yet?
            </Text>
            <Link
              href={pathsConfig.tabs.auth.register}
              className="pl-2 text-sm text-muted-foreground underline hover:text-primary"
            >
              Sign up!
            </Link>
          </View>
        </View>
      </View>
    </Form>
  );
});

PasswordLoginForm.displayName = "PasswordLoginForm";
