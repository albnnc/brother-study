declare module "react-responsive-masonry" {
  import * as React from "react";

  const Masonry: React.FC<
    {
      columnsCount?: number;
      gutter?: string;
      children?: React.ReactNode;
    } & React.HTMLAttributes<HTMLDivElement>
  >;

  export const ResponsiveMasonry: React.FC<
    {
      columnsCountBreakPoints?: Record<number, number>;
      children?: React.ReactNode;
    } & React.HTMLAttributes<HTMLDivElement>
  >;

  export default Masonry;
}
