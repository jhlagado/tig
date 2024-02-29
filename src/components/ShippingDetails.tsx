import { FC } from "react";
import { Shipment } from "../types/Shipment";
import { TrackingEventList } from "./TrackingEventList";

type ShipmentDetailsProps ={
  shipment: Shipment;
}

export const ShipmentDetails: FC<ShipmentDetailsProps> = ({ shipment }) => {
  return (
    <>
      <h1>{shipment.id}</h1>
      <h2>Shipment</h2>
      <dl>
        <dt>Status</dt>
        <dd>{shipment.status}</dd>
      </dl>
      <dl>
        <dt>Delivered time</dt>
        <dd>{shipment.deliveredTime}</dd>
      </dl>
      <dl>
        <dt>Delivery address</dt>
        <dd>{shipment.deliveryAddress}</dd>
      </dl>
      <dl>
        <dt>Last updated</dt>
        <dd>{shipment.lastUpdate}</dd>
      </dl>
      <dl>
        <dt>Total transit time</dt>
        <dd>{shipment.totalTransit}</dd>
      </dl>
      <h2>Tracking History</h2>
      <TrackingEventList trackingId={shipment.trackingId}></TrackingEventList>
    </>
  );
};
