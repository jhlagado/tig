import { FC } from "react";
import { trackingEventsQuery } from "../graphql/trackingEventsQuery";
import { useQuery } from "@apollo/client";
import { TIGQuery } from "../types/TIGQuery";
import { TrackingEventItem } from "./TrackingEventItem";

interface TrackingEventListProps {
  trackingId: string;
}

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
  return data.trackingEvents.map((trackingEvent) => (
    <div key={trackingEvent.id}>
      <TrackingEventItem trackingEvent={trackingEvent} />
    </div>
  ));

  return "TrackingEventList:" + JSON.stringify(trackingId);
};
