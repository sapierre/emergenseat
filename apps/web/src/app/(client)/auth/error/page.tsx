import Link from "next/link";

import { GENERIC_ERROR_MESSAGE } from "@turbostarter/shared/constants";
import { Icons } from "@turbostarter/ui";

import { pathsConfig } from "~/config/paths";

const AuthError = ({ searchParams }: { searchParams: { code?: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Icons.CircleX className="size-24 text-destructive" strokeWidth={1.2} />
      <h1 className="text-center text-2xl font-semibold">
        {GENERIC_ERROR_MESSAGE}
      </h1>

      {searchParams.code && (
        <code className="rounded-md bg-muted px-2 py-0.5 font-mono">
          {searchParams.code}
        </code>
      )}

      <Link
        href={pathsConfig.auth.login}
        className="mt-3 text-sm text-muted-foreground underline hover:no-underline"
      >
        Go to login
      </Link>
    </div>
  );
};

export default AuthError;