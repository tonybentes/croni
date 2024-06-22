export const styledModal = {
  container: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '& .MuiDialogContent-root': {
      padding: '0px',
    },
  },
  context: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    display: 'flex',
    width: '40px',
    height: '40px',
    backgroundColor: '#ffff',
    '&:hover': {
      bgcolor: '#f27474',
    },
  },
};
