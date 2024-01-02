import { ButtonHTMLAttributes, FC } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
}

export const IconButton: FC<IconButtonProps> = ({ src, ...props }) => {
  return (
    <button {...props}>
      <img src={src} />
    </button>
  );
}
