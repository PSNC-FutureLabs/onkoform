import Step0 from "../Step0";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";

type ActiveStepProps = {
  activeStep: number;
};

export default function ActiveStep({ activeStep }: Readonly<ActiveStepProps>) {
  switch (activeStep) {
    case 0:
      return <Step0 />;

    case 1:
      return <Step1 />;

    case 2:
      return <Step2 />;

    case 3:
      return <Step3 />;
  }
}
