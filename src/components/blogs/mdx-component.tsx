import type { ComponentProps } from "react";
import { Callout } from "./callout";
export const components = {
  h1: ({ children, ...props }: ComponentProps<"h1">) => (
    <h1
      className="my-7 mb-5 scroll-m-20 text-3xl font-bold tracking-tight first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2
      id={
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined
      }
      className="my-5 mb-3 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentProps<"h3">) => (
    <h3
      className="my-5 mb-3 scroll-m-20 text-lg font-medium tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: ComponentProps<"h4">) => (
    <h4
      className="my-5 mb-3 scroll-m-20 text-lg font-semibold tracking-tighter"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }: ComponentProps<"p">) => (
    <p className="my-3" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: ComponentProps<"ul">) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentProps<"ol">) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentProps<"li">) => (
    <li className="" {...props}>
      {children}
    </li>
  ),
  table: ({ children, ...props }: ComponentProps<"table">) => (
    <div className="table-container my-6 w-full overflow-y-auto rounded-lg border border-border">
      <table className="table-container my-0 w-full overflow-hidden" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: ComponentProps<"th">) => (
    <th
      className="text-balance border-r border-border bg-neutral-50 px-6 py-3 text-left font-mono text-sm font-semibold tracking-tight text-secondary-foreground last:border-r-0 dark:bg-neutral-900"
      {...props}
    >
      {children}
    </th>
  ),
  tr: ({ children, ...props }: ComponentProps<"tr">) => (
    <tr
      className="border-b last:border-b-0 odd:bg-background even:bg-background/50"
      {...props}
    >
      {children}
    </tr>
  ),
  td: ({ children, ...props }: ComponentProps<"td">) => (
    <td
      className="border-r border-border px-6 py-4 text-sm text-secondary-foreground last:border-r-0"
      {...props}
    >
      {children}
    </td>
  ),
  pre: ({ children, ...props }: ComponentProps<"pre">) => (
    <pre
      className="flex h-fit items-center justify-start gap-x-2 overflow-x-auto rounded-md border border-border bg-primary/5 px-2 py-1 font-mono text-sm text-secondary-foreground"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: ComponentProps<"code">) => (
    <code
      className="rounded-md bg-primary/5 px-2 py-1 font-mono text-sm text-secondary-foreground"
      {...props}
    >
      {children}
    </code>
  ),
  img: ({ children, ...props }: ComponentProps<"img">) => (
    <img className="my-2 rounded-xl border border-border" {...props} />
  ),
  a: ({ children, ...props }: ComponentProps<"a">) => {
    const linkText = typeof children === "string" ? children : "Link";
    const autoTitle = props.href ? `Visit ${props.href}` : `Go to ${linkText}`;

    return (
      <a
        className="text-primary underline underline-offset-4"
        title={props.title || autoTitle}
        {...props}
      >
        {children}
      </a>
    );
  },
  Callout,
};
