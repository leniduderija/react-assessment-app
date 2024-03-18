import React from "react";
import { FlowerDto } from "../../core/domain/flowers/flowers";
import {
  CardActionButton,
  CardBackground,
  CardBody,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
  StyledCard as Card,
} from "./FlowerCard.styled";
import { Button as UiButton, ButtonShape } from "../ui";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface FlowerCardProps {
  flower: FlowerDto;
  backgroundImage: string;
  onToggleFavorite: (id: number) => void;
}

const Button = styled(UiButton)`
  width: 30px;
  height: 30px;
  background: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlowerCard = ({
  flower,
  backgroundImage,
  onToggleFavorite,
}: FlowerCardProps) => {
  return (
    <Card>
      <CardBackground backgroundImage={backgroundImage} />
      <CardContent>
        <CardHeader>
          <Button
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(flower.id);
            }}
            shape={ButtonShape.Rounded}
          >
            <img src="/images/icon-star.png" alt="Favorite" />
          </Button>
        </CardHeader>
        <CardBody>
          <CardTitle>{flower.name}</CardTitle>
          <CardSubtitle>{flower.name}</CardSubtitle>
        </CardBody>
        <CardFooter>
          <Link to={`/sightings/${flower.id}`}>
            <CardActionButton>
              {flower.sightings}{" "}
              {flower.sightings === 1 ? "sighting" : "sightings"}
            </CardActionButton>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
