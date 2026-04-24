import { useQuery } from '@tanstack/react-query';
import { GraphTable } from './component';
import { fetchData } from '../../api';
import { useEffect } from 'react';
import { useItemsStore } from '../../store/useItems';
import { QueryNames } from '../../types/queries';
import { ItemGraph } from '../ItemGraph/component';
import styles from './styles.module.scss';

export const GraphTableContainer = () => {
  const setItems = useItemsStore((state) => state.setItems);

  const { data } = useQuery({
    queryKey: [QueryNames.ItemData],
    queryFn: fetchData,
  });

  useEffect(() => {
    // Проверяем, что данные пришли (Axios возвращает их в поле .data)
    if (data?.data) {
      setItems(data.data);
    }
  }, [data, setItems]);

  return (
    data && (
      <div className={styles.root}>
        <GraphTable data={data?.data} />
        <ItemGraph />
      </div>
    )
  );
};
