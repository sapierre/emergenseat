import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import * as React from "react";

export const Icons = {
  Logo: (props: React.ComponentProps<"svg">) => (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M356.368 51.8079C356.368 46.7584 360.461 42.665 365.511 42.665C370.56 42.665 374.654 46.7584 374.654 51.8079V144.806C374.654 158.076 368.888 170.691 358.854 179.374L343.367 192.776L363.343 212.752L393.81 201.428C404.554 197.435 411.682 187.181 411.682 175.718V91.4269C411.682 86.3775 415.776 82.2841 420.825 82.2841C425.875 82.2841 429.968 86.3775 429.968 91.4269V175.718C429.968 194.823 418.088 211.913 400.18 218.569L374.59 228.08C383.592 245.546 383.592 266.451 374.59 283.917L404.152 294.904C419.672 300.673 429.968 315.484 429.968 332.041V420.57C429.968 425.619 425.875 429.713 420.825 429.713C415.776 429.713 411.682 425.619 411.682 420.57V332.041C411.682 323.126 406.138 315.151 397.781 312.044L363.343 299.244L343.367 319.22L360.96 334.446C369.657 341.971 374.654 352.904 374.654 364.404V460.189C374.654 465.238 370.56 469.332 365.511 469.332C360.461 469.332 356.368 465.238 356.368 460.189V364.404C356.368 358.212 353.677 352.325 348.995 348.273L330.403 332.184L258.898 403.689C254.137 408.449 246.419 408.449 241.658 403.689L170.396 332.426L152.084 348.273C147.402 352.325 144.711 358.212 144.711 364.404V460.189C144.711 465.238 140.618 469.332 135.568 469.332C130.519 469.332 126.425 465.238 126.425 460.189V364.404C126.425 352.904 131.422 341.971 140.118 334.446L157.432 319.463L137.355 299.386L103.297 312.044C94.9406 315.151 89.3966 323.126 89.3966 332.041V420.57C89.3966 425.619 85.3032 429.713 80.2537 429.713C75.2042 429.713 71.1108 425.619 71.1108 420.57V332.041C71.1108 315.484 81.407 300.673 96.9268 294.904L126.051 284.08C116.937 266.527 116.937 245.47 126.051 227.917L100.899 218.569C82.991 211.913 71.1108 194.823 71.1108 175.718V91.4269C71.1108 86.3775 75.2042 82.2841 80.2537 82.2841C85.3032 82.2841 89.3966 86.3775 89.3966 91.4269V175.718C89.3966 187.181 96.5246 197.435 107.269 201.428L137.355 212.611L157.432 192.534L142.225 179.374C132.191 170.691 126.425 158.076 126.425 144.806V51.8079C126.425 46.7584 130.519 42.665 135.568 42.665C140.618 42.665 144.711 46.7584 144.711 51.8079V144.806C144.711 152.768 148.17 160.337 154.191 165.547L170.396 179.571L241.658 108.308C246.419 103.547 254.138 103.547 258.898 108.308L330.403 179.813L346.888 165.547C352.908 160.337 356.368 152.768 356.368 144.806V51.8079ZM259.5 181.638C263.93 177.179 271.393 181.531 269.692 187.583L260.896 218.889C259.257 224.721 263.64 230.505 269.698 230.505H302.675C316.226 230.505 323.036 246.868 313.486 256.482L240.793 329.665C236.363 334.125 228.9 329.773 230.601 323.721L239.397 292.415C241.036 286.583 236.653 280.799 230.595 280.799H197.618C184.067 280.799 177.257 264.436 186.806 254.822L259.5 181.638Z"
        fill="currentColor"
      />
    </svg>
  ),
  Github: (props: React.ComponentProps<"svg">) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
        fill="black"
      />
    </svg>
  ),
  Google: (props: React.ComponentProps<"svg">) => (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M43.611 20.083H42V20H24V28H35.303C33.654 32.657 29.223 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24C4 35.045 12.955 44 24 44C35.045 44 44 35.045 44 24C44 22.659 43.862 21.35 43.611 20.083Z"
        fill="#FFC107"
      />
      <path
        d="M6.30603 14.691L12.877 19.51C14.655 15.108 18.961 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C16.318 4 9.65603 8.337 6.30603 14.691Z"
        fill="#FF3D00"
      />
      <path
        d="M23.9999 44C29.1659 44 33.8599 42.023 37.4089 38.808L31.2189 33.57C29.1435 35.1483 26.6074 36.002 23.9999 36C18.7979 36 14.3809 32.683 12.7169 28.054L6.19495 33.079C9.50495 39.556 16.2269 44 23.9999 44Z"
        fill="#4CAF50"
      />
      <path
        d="M43.611 20.083H42V20H24V28H35.303C34.5142 30.2164 33.0934 32.1532 31.216 33.571L31.219 33.569L37.409 38.807C36.971 39.205 44 34 44 24C44 22.659 43.862 21.35 43.611 20.083Z"
        fill="#1976D2"
      />
    </svg>
  ),
  Twitter: (props: React.ComponentProps<"svg">) => (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.751 5H22.818L16.118 12.625L24 23H17.828L12.995 16.707L7.464 23H4.394L11.561 14.845L4 5H10.328L14.698 10.752L19.751 5ZM18.675 21.172H20.375L9.404 6.732H7.58L18.675 21.172Z"
        fill="black"
      />
    </svg>
  ),
  ArrowRight,
  Loader2,
  CheckCircle2,
};
