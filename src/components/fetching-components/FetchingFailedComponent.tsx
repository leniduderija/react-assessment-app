import { Button } from "../ui";

export const FetchingFailedComponent = () => {
  return (
    <div>
      Failed to fetch posts, try again.
      <br />
      <br />
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};
