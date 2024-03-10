import { PageContainer } from "@features/layout";
import { Select } from "@features/ui";
import type { NextPage } from "next";

const AlertsPage: NextPage = () => {
  const option1 = [
    "Olivia Rhye",
    "David Smith",
    "Johnnie Courtney",
    "Lauren Tristen",
    "Taylor Noel",
  ];

  return (
    <PageContainer
      title="Alerts"
      info="Set up alerts to received notifications for certain issues or thresholds"
    >
      This page has yet to be implemented
      <Select
        name="select"
        label="Team Member"
        placeholder="Select Team Member"
        options={option1}
      />
      <Select
        name="select1"
        label="Team Member"
        placeholder="Select Team Member"
        hint="This is a hint text to help user."
        options={option1}
      />
      <Select
        name="select2"
        label="Team Member"
        placeholder="Select Team Member"
        iconSrc="/icons/react.svg"
        hint="This is a hint text to help user."
        options={option1}
        disabled
      />
      <Select
        name="select3"
        label="Team Member"
        placeholder="Select Team Member"
        hint="This is a hint text to help user."
        options={option1}
        error
        errorMessage="This is a error message."
      />
    </PageContainer>
  );
};

export default AlertsPage;
