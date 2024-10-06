import { FormControl, Rating, Stack, Chip } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../../business/types";
import { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentSatisfiedIcon color="success" />,
    label: "headacheRating1",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="warning" />,
    label: "headacheRating2",
  },
  3: {
    icon: <SentimentDissatisfiedIcon color="warning" />,
    label: "headacheRating3",
  },
  4: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "headacheRating4",
  },
  5: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "headacheRating5",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export const FormCustomRating: React.FC<FormInputProps> = ({
  name,
  control,
}) => {
  const [hover, setHover] = React.useState<number>(-1);
  const { t } = useTranslation();
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, ref, value } }) => (
          <Stack direction="row" alignItems="center">
            <Rating
              value={value}
              onChange={onChange}
              onChangeActive={(_event, newHover) => {
                setHover(newHover);
              }}
              ref={ref}
              onBlur={onBlur}
              size="large"
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => t(customIcons[value].label)}
              highlightSelectedOnly
            />
            {
              <Chip
                variant={hover > 0 ? "outlined" : "filled"}
                color="warning"
                size="medium"
                sx={{ ml: 1 }}
                label={
                  hover > 0 ? (
                    <Trans t={t}>{customIcons[hover].label}</Trans>
                  ) : value > 0 ? (
                    <Trans t={t}>{customIcons[hover].label}</Trans>
                  ) : (
                    "?"
                  )
                }
              />
            }
          </Stack>
        )}
      />
    </FormControl>
  );
};
