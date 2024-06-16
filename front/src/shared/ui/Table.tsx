import { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import MuiTable from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

type Props = { children: ReactNode; columns: string[] };

const Table = ({ children, columns }: Props) => (
  <TableContainer component={Paper}>
    <MuiTable>
      <TableHead>
        <TableRow>
          {columns.map((name) => (
            <TableCell key={name} sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
              {name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>{children}</TableBody>
    </MuiTable>
  </TableContainer>
);

export default Table;
