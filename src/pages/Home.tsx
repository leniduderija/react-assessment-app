import React, { useEffect, useState } from 'react';
import { FlowerDto } from '../core/domain/flowers/flowers';
import { flowersService } from '../core/domain/flowers/flowers.service';
import { useBoolean } from '../utils/hooks/useBoolean';
import {
  FetchingDataComponent,
  FetchingFailedComponent,
} from '../components/fetching-components';
import styled from 'styled-components';
import { FlowerCard } from '../components/flower-card/FlowerCard';
import { Link } from 'react-router-dom';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
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
        console.error('Error fetching data', error);
      })
      .finally(setIsFetching.off);

    return () => {
      if (isFetching) {
        setFlowers([]);
        setIsFetching.off();
      }
    };
  }, [setIsError, setIsFetching]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleToggleFavorite = (id: number) => console.log('FAVORITE ID ', id);

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
          <StyledLink key={flower.id} to={`/flowers/${flower.id}`}>
            <FlowerCard
              flower={flower}
              backgroundImage={
                index % 3 === 0 ? '/images/flower2.jpg' : '/images/flower1.jpg'
              }
              onToggleFavorite={handleToggleFavorite}
            />
          </StyledLink>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
