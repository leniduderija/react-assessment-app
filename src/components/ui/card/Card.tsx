import React, { AllHTMLAttributes } from "react";
import cn from "classnames";
import styled from "styled-components";

interface CardProps extends AllHTMLAttributes<HTMLDivElement> {}

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 15px 30px 0px #0000000d;
  overflow: hidden;
`;

export const Card = ({ children, className }: CardProps) => {
  return (
    <StyledCard className={cn("Card", className)} data-testid="Card">
      {children}
    </StyledCard>
  );
};
