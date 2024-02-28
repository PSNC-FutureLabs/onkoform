type ActiveStepProps = {
  activeStep: number;
};

export const ActiveStep = ({ activeStep }: ActiveStepProps) => {
  return <div>Active step is {activeStep}</div>;
};
