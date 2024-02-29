import { FC } from "react";
import { Shipment } from "../types/Shipment";

interface ShipmentItemProps {
  shipment: Shipment;
  onSelect: (shipment: Shipment) => void;
}

export const ShipmentItem: FC<ShipmentItemProps> = ({ shipment, onSelect }) => {
  return (
    <div onClick={() => onSelect(shipment)}>
      <div>{shipment.id}</div>
      <div>Created {shipment.lastUpdate}</div>
      <div>{shipment.status}</div>
    </div>
  );
};
