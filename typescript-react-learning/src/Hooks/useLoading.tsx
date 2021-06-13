import React from "react";
export function useLoading() {
  const [isLoading, setState] = React.useState(false);
  const load = (aPromise: Promise<unknown>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };

  return [isLoading, load] as const;
}
