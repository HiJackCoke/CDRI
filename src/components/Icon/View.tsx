import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import { IconViewProps } from "./type";

const IconView = (
  { svg, ...props }: IconViewProps,
  ref: ForwardedRef<HTMLSpanElement>
) => {
  return (
    <StyledIcon
      {...props}
      ref={ref}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default forwardRef(IconView);

const StyledIcon = styled.span<Pick<IconViewProps, "width" | "height">>`
  /* display: inline-block; */
  display: flex;

  width: ${(props) => (props.width ? `${props.width}rem` : "1rem")};
  height: ${(props) => (props.height ? `${props.height}rem` : "1rem")};
  //margin: 0.1rem;
  box-sizing: border-box;

  svg {
    pointer-events: none;
    width: 100%;
    height: 100%;
    fill: ${({ color }) => color || "currentcolor"};

    path {
      fill: ${({ color }) => color || "currentcolor"};
    }
  }
`;
