import { FC } from "react";
import { TrackingEvent } from "../types/TrackingEvent";

type TrackingEventItemProps = {
  trackingEvent: TrackingEvent;
};

export const TrackingEventItem: FC<TrackingEventItemProps> = ({
  trackingEvent,
}) => {
  return (
    <>
      <h1>{trackingEvent.id}</h1>
      <dl>
        <dt>tracking id</dt>
        <dd>{trackingEvent.trackingId}</dd>
        <dt>status</dt>
        <dd>{trackingEvent.status}</dd>
        <dt>statusSeverity</dt>
        <dd>{trackingEvent.statusSeverity}</dd>
        <dt>timestamp</dt>
        <dd>{trackingEvent.timestamp}</dd>
        <dt>location</dt>
        <dd>{trackingEvent.location}</dd>
      </dl>
    </>
  );
};
