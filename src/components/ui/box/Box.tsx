import React, { AllHTMLAttributes } from "react";
import cn from "classnames";
import styled from "styled-components";

interface BoxProps extends AllHTMLAttributes<HTMLDivElement> {}

export const BaseBox = styled.div`
  display: flex;
`;
export const Box = ({ children, className }: BoxProps) => {
  return (
    <BaseBox className={cn("Box", className)} data-testid="Box">
      {children}
    </BaseBox>
  );
};
