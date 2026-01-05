import type { ItemData } from '../../types/types';
import styles from './styles.module.scss';

type Props = {
  data: ItemData[];
};
export const Graph = ({ data }: Props) => {
  return (
    <div>
      <h2 className={styles.root}>Graph</h2>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            {item.x} : {item.y}
          </li>
        ))}
      </ul>
    </div>
  );
};
