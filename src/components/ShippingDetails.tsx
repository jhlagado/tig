import { FC } from "react";
import { Shipment } from "../types/Shipment";
import { TrackingEventList } from "./TrackingEventList";

type ShipmentDetailsProps ={
  shipment: Shipment;
}

export const ShipmentDetails: FC<ShipmentDetailsProps> = ({ shipment }) => {
  return (
    <>
      <h2 className="text-sm uppercase py-4 text-gray-500 font-bold">Shipment</h2>
      <dl className="grid grid-cols-2 gap-4">
        <dt className="text-gray-500">Status</dt>
        <dd>{shipment.status}</dd>
        <dt className="text-gray-500">Delivered time</dt>
        <dd>{shipment.deliveredTime}</dd>
        <dt className="text-gray-500">Delivery address</dt>
        <dd>{shipment.deliveryAddress}</dd>
        <dt className="text-gray-500">Last updated</dt>
        <dd>{shipment.lastUpdate}</dd>
        <dt className="text-gray-500">Total transit time</dt>
        <dd>{shipment.totalTransit}</dd>
      </dl>
      <h2 className="text-sm uppercase mt-4 py-4 text-gray-500 font-bold ">Tracking History</h2>
      <TrackingEventList trackingId={shipment.trackingId}></TrackingEventList>
    </>
  );
};
