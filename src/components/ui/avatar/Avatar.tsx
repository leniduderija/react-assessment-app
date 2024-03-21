import React, { AllHTMLAttributes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

interface AvatarProps extends AllHTMLAttributes<HTMLDivElement> {
  image?: string;
}

export const BaseAvatar = styled.div<{
  image?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-color: gray;
`;
export const Avatar = ({ image, className }: AvatarProps) => {
  return (
    <BaseAvatar
      className={cn('Avatar', className)}
      data-testid="Avatar"
      image={image || '/images/profile_placeholder.svg'}
    />
  );
};
