import { createContext } from 'react';
import type { Graph2d } from 'vis-timeline';

// Описываем, что именно будет лежать в хранилище
interface GraphContextType {
  graph: Graph2d | null;
  setGraph: (graph: Graph2d) => void;
  fitGraph: () => void;
}

// Создаем контекст. null по умолчанию — это норма,
// если мы гарантируем наличие провайдера выше по дереву.
export const GraphContext = createContext<GraphContextType | null>(null);
