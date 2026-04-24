import { ActionIcon, Tooltip } from '@mantine/core';

import type { Item } from '../../types/types';
import styles from './styles.module.scss';
import { PlusIcon, ResizeIcon, TrashSimpleIcon } from '@phosphor-icons/react';
import { useGraph } from '../../hooks/useGraph';

type Props = {
  data: Item[];
};

const mainColor = '#C9C9C9';

export const GraphTable = ({ data }: Props) => {
  const { fitGraph } = useGraph();
  return (
    <div>
      <div className={styles.controls}>
        <h2>Graph</h2>
        <Tooltip label="Добавить item">
          <ActionIcon variant="filled" color="indigo" aria-label="Add">
            <PlusIcon size={32} color={mainColor} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Показать все элементы на графике">
          <ActionIcon>
            <ResizeIcon size={32} color={mainColor} onClick={fitGraph} />
          </ActionIcon>
        </Tooltip>
      </div>
      <div>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              <div className={styles.listItem}>
                <div className={styles.data}>
                  {item.x} : {item.y}
                </div>
                <ActionIcon
                  className={styles.btnDecriment}
                  variant="subtle"
                  aria-label="Delete"
                >
                  <TrashSimpleIcon size={32} color={mainColor} />
                </ActionIcon>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
