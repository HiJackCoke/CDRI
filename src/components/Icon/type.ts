import { ComponentProps, ForwardedRef } from "react";

type CommonProps = ComponentProps<"span"> & {
  width?: number;
  height?: number;
};

export type IconProps = CommonProps & {
  ref?: ForwardedRef<HTMLSpanElement>;
  icon: string;
};

export type IconViewProps = CommonProps & {
  svg: TrustedHTML;
};
