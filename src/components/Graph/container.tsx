import { useQuery } from '@tanstack/react-query';
import { Graph } from './component';
import { fetchData } from '../../api/intex';

export const GraphContainer = () => {
  const { data } = useQuery({ queryKey: ['itemData'], queryFn: fetchData });

  return data && <Graph data={data?.data.items} />;
};
