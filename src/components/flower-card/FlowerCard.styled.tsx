import styled, { css } from 'styled-components';
import { Button } from '../ui/button/Button';
import { Card } from '../ui/card/Card';

export const CardBackground = styled.div<{
  backgroundImage: string;
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  background-image: ${(props) => props.backgroundImage};

  ${(props) =>
    props.backgroundImage &&
    css`
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.0001) 0%,
          rgba(0, 0, 0, 0.7) 89.5%
        ),
        url(${props.backgroundImage});
    `}
`;

export const StyledCard = styled(Card)`
  width: 280px;
  height: 350px;
  justify-content: flex-end;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 224px;
    height: 280px;
    padding: 16px;
  }
`;

export const CardContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CardBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CardTitle = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardSubtitle = styled(CardTitle)`
  font-style: italic;
  font-size: 12px;
  line-height: 18px;
  opacity: 0.7;

  @media (max-width: 767px) {
    font-size: 10px;
    line-height: 20px;
  }
`;

export const CardActionButton = styled(Button)`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 12px;
  padding: 9px 15px;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 767px) {
    font-size: 10px;
    line-height: 20px;
  }
`;
