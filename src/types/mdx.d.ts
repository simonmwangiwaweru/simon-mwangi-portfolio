declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";

  export const meta: {
    title: string;
    date: string;
    summary: string;
  };

  export default function MDXContent(props: MDXProps): JSX.Element;
}
