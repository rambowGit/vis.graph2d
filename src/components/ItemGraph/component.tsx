import { useEffect, useRef } from 'react';
import { Graph2d, type Graph2dOptions } from 'vis-timeline/standalone';
import { DataSet } from 'vis-data';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import { useItemsStore } from '../../store/useItems';
import type { Item } from '../../types/types';
import { useGraph } from '../../hooks/useGraph';
import './vis.scss';

export const ItemGraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph2d | null>(null);
  const dataSetRef = useRef<DataSet<Item> | null>(null);
  const { setGraph } = useGraph();

  // Подписываемся на массив items из Zustand
  const items = useItemsStore((state) => state.items);

  // 1. Инициализация (СТРОГО ОДИН РАЗ)
  useEffect(() => {
    if (!containerRef.current) return;

    // Создаем пустой DataSet
    const dataset = new DataSet([]);
    dataSetRef.current = dataset;

    const options: Graph2dOptions = {
      barChart: {
        align: 'center',
      },
      style: 'bar',
      drawPoints: true,
      height: '300px',
      dataAxis: {
        icons: false,
      },
      orientation: 'bottom',
    };

    graphRef.current = new Graph2d(containerRef.current, dataset, options);
    setGraph(graphRef.current);

    return () => {
      graphRef.current?.destroy();
      graphRef.current = null;
    };
  }, [setGraph]);

  // 2. Синхронизация данных
  useEffect(() => {
    if (dataSetRef.current && graphRef.current) {
      dataSetRef.current.clear();
      dataSetRef.current.add(items);

      // Даем браузеру время отрисовать DOM, затем подгоняем масштаб
      setTimeout(() => {
        graphRef.current?.redraw(); // Принудительная перерисовка
        graphRef.current?.fit();
      }, 0);
    }
  }, [items]);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Графическое представление</h3>
      <div
        ref={containerRef}
        style={{ border: '1px solid #ddd', borderRadius: '4px' }}
      />
    </div>
  );
};
