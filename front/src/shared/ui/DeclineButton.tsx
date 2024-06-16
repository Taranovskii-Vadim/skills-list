import { Button, ButtonProps } from '@mui/material';

type Props = { disabled?: ButtonProps['disabled']; onClick: ButtonProps['onClick'] };

const DeclineButton = (props: Props) => (
  <Button variant="outlined" {...props}>
    Отмена
  </Button>
);

export default DeclineButton;
