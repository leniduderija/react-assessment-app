import React from "react";
import "./ErrorFallback.css";
import { Button } from "../ui";

export const ErrorFallback = () => {
  return (
    <div className="ErrorFallback" role="alert" data-testid="ErrorFallback">
      <h2 className="text-lg font-semibold">Something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};
