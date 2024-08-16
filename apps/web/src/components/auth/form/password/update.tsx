"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { updatePasswordSchema } from "@turbostarter/shared/validators";
import { Icons } from "@turbostarter/ui";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@turbostarter/ui/web";

import { pathsConfig } from "~/config/paths";
import { updateUser } from "~/lib/actions";
import { onPromise } from "~/utils";

import type { UpdatePasswordData } from "@turbostarter/shared/validators";

export const UpdatePasswordForm = memo(() => {
  const router = useRouter();
  const form = useForm<UpdatePasswordData>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit = async (data: UpdatePasswordData) => {
    const loadingToast = toast.loading("Updating password...");
    const { success, message } = await updateUser(data);

    console.log({ success, message });

    if (!success) {
      return toast.error(message, { id: loadingToast });
    }

    toast.success("Success! Now you can login with your new password!", {
      id: loadingToast,
    });

    router.replace(pathsConfig.auth.login);
  };

  return (
    <Form {...form} key="idle">
      <motion.form
        onSubmit={onPromise(form.handleSubmit(onSubmit))}
        className="space-y-6"
        exit={{ opacity: 0 }}
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  disabled={form.formState.isSubmitting}
                  autoComplete="new-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Icons.Loader2 className="animate-spin" />
          ) : (
            "Update password"
          )}
        </Button>
      </motion.form>
    </Form>
  );
});

UpdatePasswordForm.displayName = "UpdatePasswordForm";
