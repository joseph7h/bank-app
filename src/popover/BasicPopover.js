import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ProviderCard from '../care-provider/ProviderCard';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} size='small' color="inherit" variant="outlined" onClick={handleClick}>
        Help
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ProviderCard/>
      </Popover>
    </div>
  );
}
