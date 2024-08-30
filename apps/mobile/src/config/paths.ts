const TABS_PREFIX = "(tabs)";
const AUTH_PREFIX = "/auth";

const pathsConfig = {
  index: "/",
  tabs: {
    auth: {
      login: `/${TABS_PREFIX}${AUTH_PREFIX}/login`,
      register: `/${TABS_PREFIX}${AUTH_PREFIX}/register`,
    },
    billing: `/${TABS_PREFIX}/billing`,
    blog: `/${TABS_PREFIX}/blog`,
  },
} as const;

export { pathsConfig, TABS_PREFIX };
