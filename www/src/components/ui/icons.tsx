export type IconProps = React.ComponentProps<"svg">;
export type Icon = (props: IconProps) => React.JSX.Element;

export const Icons = {
  Sun: (props) => (
    <svg
      role="img"
      aria-label="Sun"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  Moon: (props) => (
    <svg
      role="img"
      aria-label="Moon"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z" />
    </svg>
  ),
  Laptop: (props) => (
    <svg
      role="img"
      aria-label="Laptop"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 16V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 01-.9 1.45H3.62a1 1 0 01-.9-1.45L4 16" />
    </svg>
  ),
  Wire: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m3.929 4.929l1.414 1.414A7.98 7.98 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.97 9.97 0 0 1 1 12a9.97 9.97 0 0 1 2.929-7.071m16.142 0A9.97 9.97 0 0 1 23 12a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-2.342-5.656zM13 5v6h3l-5 8v-6H8zM6.757 7.757l1.415 1.415A4 4 0 0 0 7 12c0 1.104.448 2.105 1.172 2.828l-1.415 1.415A5.98 5.98 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243m10.487.001A5.98 5.98 0 0 1 19 12a5.98 5.98 0 0 1-1.757 4.243l-1.415-1.415A4 4 0 0 0 17 12a4 4 0 0 0-1.17-2.827z"
      />
    </svg>
  ),
  UserHandsUp: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 23v-2h20v2zm2-3v-6q-.825-1.35-1.275-2.863t-.45-3.087q0-1.525.388-3t.912-2.9q.2-.525.65-.837t1-.313Q6 1 6.55 1.525T7 2.775L6.725 5.05q-.15 1.2.213 2.275t1.087 1.887t1.75 1.3T12 11q1.5 0 3.013.313t2.637.887t1.738 1.463T20 15.85V20H10v-.925q0-.85.575-1.463T12 17h4v-2h-4q-1.675 0-2.838 1.2T8 19.075V20zm8-10q-1.65 0-2.825-1.175T8 6t1.175-2.825T12 2t2.825 1.175T16 6t-1.175 2.825T12 10"
      />
    </svg>
  ),
  Email: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
      />
    </svg>
  ),
  Copy: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"
      />
    </svg>
  ),

  Chain: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M13.544 10.456a4.37 4.37 0 0 0-6.176 0l-3.089 3.088a4.367 4.367 0 1 0 6.177 6.177L12 18.177" />
        <path d="M10.456 13.544a4.37 4.37 0 0 0 6.176 0l3.089-3.088a4.367 4.367 0 1 0-6.177-6.177L12 5.823" />
      </g>
    </svg>
  ),
} as const satisfies Record<string, Icon>;
