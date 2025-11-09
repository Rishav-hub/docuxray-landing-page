/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare namespace JSX {
  interface IntrinsicElements {
    'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src?: string;
      trigger?: string;
      delay?: string;
      colors?: string;
      style?: React.CSSProperties;
    }, HTMLElement>;
  }
}

