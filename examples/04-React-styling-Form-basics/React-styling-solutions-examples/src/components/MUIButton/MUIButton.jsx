/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function MUIButton({ children }) {
  return (
    <Button variant="contained" endIcon={<SendIcon />}>
        { children }
    </Button>
  );
}