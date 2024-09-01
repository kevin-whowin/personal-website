declare module 'eva-icons' {
  interface ReplaceOptions {
    fill?: string;
    animation?: string;
    width?: string | number;
    height?: string | number;
  }

  export function replace(options?: ReplaceOptions): void;
}
