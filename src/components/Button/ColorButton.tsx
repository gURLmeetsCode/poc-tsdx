import * as React from 'react';

export interface Props {
  color: string;
  onClick?: (color: string) => void;
}

export default ({ color, onClick }: Props) => {
  return (
    <button style={{ color }} onClick={() => onClick && onClick(color)}>
      Color Button
    </button>
  );
};
