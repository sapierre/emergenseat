"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { forgotPasswordSchema } from "@turbostarter/shared/validators";
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
import { forgotPassword } from "~/lib/actions/auth";
import { onPromise } from "~/utils";

import type { ForgotPasswordData } from "@turbostarter/shared/validators";

type Status = "pending" | "success" | "error" | "idle";

export const ForgotPasswordForm = memo(() => {
  const [status, setStatus] = useState<Status>("idle");
  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    setStatus("pending");
    const loadingToast = toast.loading("Sending...");
    const { error } = await forgotPassword(data);

    if (error) {
      setStatus("error");
      return toast.error(`${error}!`, { id: loadingToast });
    }

    toast.success("Success! Now check your inbox!", {
      id: loadingToast,
    });

    return setStatus("success");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          className="mt-6 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key="success"
        >
          <Icons.CheckCircle2
            className="h-20 w-20 text-success"
            strokeWidth={1.2}
          />
          <h2 className="text-center text-2xl font-semibold">Success!</h2>
          <p className="text-center">
            We've sent you an email with a link to reset your password.
          </p>
          <Link
            href={pathsConfig.auth.login}
            className="-mt-1 text-sm text-muted-foreground underline hover:no-underline"
          >
            Sign in
          </Link>
        </motion.div>
      ) : (
        <Form {...form} key="idle">
          <motion.form
            onSubmit={onPromise(form.handleSubmit(onSubmit))}
            className="space-y-6"
            exit={{ opacity: 0 }}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      disabled={form.formState.isSubmitting}
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-end">
              <Link
                href={pathsConfig.auth.login}
                className="pl-2 text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                Back to sign in
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Icons.Loader2 className="animate-spin" />
              ) : (
                "Send reset link"
              )}
            </Button>
          </motion.form>
        </Form>
      )}
    </AnimatePresence>
  );
});

ForgotPasswordForm.displayName = "ForgotPasswordForm";