import { ReactNode } from 'react';
import { TableRow as MuiTableRow } from '@mui/material';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const TableRow = ({ children, ...props }: Props) => (
  <MuiTableRow
    sx={({ palette }) => ({
      cursor: 'pointer',
      //   transition: 'background-color 0.1s linear',
      '&:last-child td, &:last-child th': { border: 0 },
      '&:hover': { backgroundColor: palette.primary.light },
    })}
    {...props}
  >
    {children}
  </MuiTableRow>
);

export default TableRow;
