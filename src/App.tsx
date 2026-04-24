import { GraphTableContainer } from './components/Graph/container';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { GraphProvider } from './providers/graphProvider';

export function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <GraphProvider>
        <GraphTableContainer />
      </GraphProvider>
    </MantineProvider>
  );
}
