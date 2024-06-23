import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Card, Avatar, Typography, CardContent, CardActionArea } from '@mui/material';

interface cardProps {
  handleActionCard: () => void;
}

export function ActionCard({ handleActionCard }: cardProps) {
  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea onClick={handleActionCard}>
        <CardContent>
          <Box sx={styledCard.contentCard}>
            <Avatar sx={styledCard.avatar}>
              <AddCircleIcon />
            </Avatar>
            <Typography variant="body2" color="text.secondary">
              Adicionar
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export const styledCard = {
  contentCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    width: 56,
    height: 56,
    bgcolor: '#009FF7',
  },
};
