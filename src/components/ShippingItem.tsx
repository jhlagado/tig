import { FC } from "react";
import { Shipment } from "../types/Shipment";

type ShipmentItemProps = {
  shipment: Shipment;
  onSelect: (shipment: Shipment) => void;
};

export const ShipmentItem: FC<ShipmentItemProps> = ({ shipment, onSelect }) => {
  return (
    <div
      className="px-4 py-2 border-t border-slate-300"
      onClick={() => onSelect(shipment)}
    >
      <div>{shipment.id}</div>
      <div>Created {shipment.lastUpdate}</div>
      <div>{shipment.status}</div>
    </div>
  );
};
