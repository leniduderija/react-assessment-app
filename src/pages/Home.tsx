import React, { useEffect, useState } from "react";
import { FlowerDto } from "../core/domain/flowers/flowers";
import { flowersService } from "../core/domain/flowers/flowers.service";
import { useBoolean } from "../utils/hooks/use-boolean";
import {
  FetchingDataComponent,
  FetchingFailedComponent,
} from "../components/fetching-components";

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

  if (isFetching) {
    return <FetchingDataComponent />;
  }

  if (isError) {
    return <FetchingFailedComponent />;
  }

  return (
    <div className="Home">
      {flowers?.map((flower) => <div key={flower.id}>{flower.name}</div>)}
    </div>
  );
}

export default Home;
