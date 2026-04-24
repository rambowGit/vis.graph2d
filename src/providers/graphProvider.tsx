import { useCallback, useState, type ReactNode } from 'react';
import type { Graph2d } from 'vis-timeline';
import { GraphContext } from '../contexts/graphContext';

interface Props {
  children: ReactNode;
}

export const GraphProvider = ({ children }: Props) => {
  const [graph, setGraph] = useState<Graph2d | null>(null);

  const fitGraph = useCallback((): void => {
    graph?.fit();
  }, [graph]);

  return (
    <GraphContext.Provider value={{ graph, setGraph, fitGraph }}>
      {children}
    </GraphContext.Provider>
  );
};
