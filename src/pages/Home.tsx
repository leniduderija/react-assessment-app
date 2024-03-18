import React, { useEffect, useState } from "react";
import { FlowerDto } from "../core/domain/flowers/flowers";
import { flowersService } from "../core/domain/flowers/flowers.service";
import { useBoolean } from "../utils/hooks/use-boolean";
import {
  FetchingDataComponent,
  FetchingFailedComponent,
} from "../components/fetching-components";
import styled from "styled-components";
import { FlowerCard } from "../components/flower-card/FlowerCard";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

function Home() {
  const [flowers, setFlowers] = useState<FlowerDto[]>([]);

  const [isFetching, setIsFetching] = useBoolean(false);
  const [isError, setIsError] = useBoolean(false);

  useEffect(() => {
    setIsFetching.on();
    const fetchData = async () => {
      const flowersResponse = await flowersService.getFlowers();
      setFlowers(flowersResponse.flowers);
    };

    fetchData()
      .catch((error) => {
        setIsError.on();
        console.error("Error fetching data", error);
      })
      .finally(setIsFetching.off);

    return () => {
      if (isFetching) {
        setFlowers([]);
        setIsFetching.off();
      }
    };
  }, [setIsError, setIsFetching]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleToggleFavorite = (id: number) => console.log("FAVORITE ID ", id);

  if (isFetching) {
    return <FetchingDataComponent />;
  }

  if (isError) {
    return <FetchingFailedComponent />;
  }

  return (
    <div className="Home">
      <Grid>
        {flowers?.map((flower, index) => (
          <Link key={flower.id} to={`/flowers/${flower.id}`}>
            <FlowerCard
              flower={flower}
              backgroundImage={
                index % 3 === 0 ? "/images/flower2.jpg" : "/images/flower1.jpg"
              }
              onToggleFavorite={handleToggleFavorite}
            />
          </Link>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
