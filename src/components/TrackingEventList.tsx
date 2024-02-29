import { FC } from "react";
import { trackingEventsQuery } from "../graphql/trackingEventsQuery";
import { useQuery } from "@apollo/client";
import { TIGQuery } from "../types/TIGQuery";
import { Step, StepIndicator, StepSeparator, Stepper } from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons";
import { formatDate } from "../utils/date";
import { formatTime } from "../utils/time";

type StatusIconProps = { status: string };

const StatusIcon: FC<StatusIconProps> = ({ status }) => {
  switch (status) {
    case "Warning":
      return <WarningIcon color="red" boxSize={4} />;
    case "Success":
      return <CheckCircleIcon color="green" boxSize={4} />;
    default:
      return <InfoIcon color="yellow" boxSize={4} />;
  }
};

type TrackingEventListProps = {
  trackingId: string;
};

export const TrackingEventList: FC<TrackingEventListProps> = ({
  trackingId,
}) => {
  const { loading, error, data } = useQuery<TIGQuery>(trackingEventsQuery, {
    variables: { trackingId: trackingId || "" },
    skip: !trackingId,
  });
  if (error) {
    return "error";
  }
  if (loading) {
    return "loading";
  }
  if (!data) return null;
  return (
    <>
      <div className="border border-gray-300 rounded-md px-2 py-4">
        <Stepper size="lg" orientation="vertical" gap={0} index={0}>
          {data.trackingEvents.map((event) => (
            <Step className="w-full" key={event.id}>
              <StepIndicator border={0}>
                <StatusIcon status={event.statusSeverity} />
              </StepIndicator>
              <div className="w-full grid grid-cols-2 items-center text-sm">
                <div className="py-2">
                  {event?.status}
                  <div className="text-gray-500">{event?.location}</div>
                </div>
                <div className="text-right">
                  <div>{formatDate(event.timestamp)}</div>
                  <div className="text-gray-500">
                    {formatTime(event.timestamp)}
                  </div>
                </div>
              </div>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </div>
    </>
  );
};
