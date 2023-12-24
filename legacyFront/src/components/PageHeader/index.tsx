import { Box, Button, Typography } from "@mui/material";

type Props = {
  title: string;
  onClick?: () => void;
};

const PageHeader = ({ title, onClick }: Props) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 3,
    }}
  >
    <Typography variant="h4">{title}</Typography>
    {onClick ? (
      <Button variant="contained" onClick={onClick}>
        Добавить
      </Button>
    ) : null}
  </Box>
);

export default PageHeader;
