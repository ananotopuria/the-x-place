declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      name?: string;
      src?: string;
      ios?: string;
      md?: string;
      [key: string]: any;
    };
  }
}
