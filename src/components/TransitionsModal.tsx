import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Backdrop,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { Trans, useTranslation } from "react-i18next";

type TransitionsModalProps = {
  open: boolean;
  onClose: () => void;
  onClickStart: () => void;
};

const BlurBackdrop = styled(Backdrop)({
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

export const TransitionsModal: React.FC<TransitionsModalProps> = ({
  open,
  onClose,
  onClickStart,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const getResponsiveStyle = () => {
    if (isSmallScreen) {
      return {
        width: "90%",
        p: 2,
      };
    } else if (isMediumScreen) {
      return {
        width: "75%",
        p: 3,
      };
    } else {
      return {
        width: 560,
        p: 4,
      };
    }
  };

  const { t } = useTranslation();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      BackdropComponent={BlurBackdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "8px",
          textAlign: "center",
          ...getResponsiveStyle(),
        }}
      >
        <Typography
          id="modal-title"
          variant="h2"
          lineHeight="50.4px"
          sx={{ mb: 1.5 }}
        >
          <Trans t={t} ns="ns1">
            transitionsPopupHeader
          </Trans>
        </Typography>
        <Typography id="modal-description" sx={{ mb: 5 }}>
          <Trans t={t} ns="ns1">
            transitionsPopupText
          </Trans>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ flex: 1 }}
            onClick={onClose}
          >
            <Trans t={t} ns="ns2">
              Resign
            </Trans>
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ flex: 1 }}
            onClick={onClickStart}
          >
            <Trans t={t} ns="ns2">
              Next
            </Trans>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
