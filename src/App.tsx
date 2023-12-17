import { FC } from 'react';

import './style.css';
import { Button } from './ui/button';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Button typeof="submit">button </Button>
      <h1> {name}!</h1>
    </div>
  );
};
