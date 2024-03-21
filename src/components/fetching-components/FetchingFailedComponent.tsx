import { Button } from '../ui/button/Button';

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
