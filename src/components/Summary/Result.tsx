import { Alert, Typography } from "@mui/material";

export const Result = () => {
  return (
    <div style={{ padding: "16px 0", borderBottom: "2px solid #88888877" }}>
      <Typography
        style={{
          textAlign: "left",
          paddingBottom: "10px",
        }}>
        Ocena danych
      </Typography>
      <Alert severity="error" style={{ textAlign: "left" }}>
        <Typography style={{ fontWeight: "500" }}>
          Wyniki wymagają pilnej konsultacji z lekarzem.
        </Typography>
        Prosimy o natychmiastowy kontakt z placówką medyczną w celu uzyskania
        profesjonalnej oceny i pomocy. Poinformuj lekarza o wyniku HGB, ALT oraz
        AST.
      </Alert>
    </div>
  );
};
