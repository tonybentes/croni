import type { IconContainerProps } from '@mui/material/Rating';

import * as React from 'react';

import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Com raiva',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Triste',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutro',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Alegre',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Feliz',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return (
    <span style={{ padding: '10px' }} {...other}>
      {customIcons[value].icon}
    </span>
  );
}

export default function RadioGroupRating() {
  const [hover, setHover] = React.useState(-1);
  const [values, setValue] = React.useState<number | null>(0);

  return (
    <>
      <StyledRating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        getLabelText={(value: number) => customIcons[value].label}
        highlightSelectedOnly
      />
      {hover !== -1 ? (
        <Typography variant="subtitle2">{customIcons[hover].label}</Typography>
      ) : values !== 0 && values ? (
        <Typography variant="subtitle2">{customIcons[values].label}</Typography>
      ) : (
        <></>
      )}
    </>
  );
}
