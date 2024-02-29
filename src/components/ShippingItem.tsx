import { FC } from "react";
import { Shipment } from "../types/Shipment";
import { formatDate } from "../utils/date";

type ShipmentItemProps = {
  shipment: Shipment;
  onSelect: (shipment: Shipment) => void;
};

export const ShipmentItem: FC<ShipmentItemProps> = ({ shipment, onSelect }) => {
  return (
    <div
      className="px-4 py-2 border-t grid grid-cols-2 border-slate-300"
      onClick={() => onSelect(shipment)}
      tabIndex={0}
      role="button"
    >
      <div key={shipment.id} className="">
        <div className="font-bold">{shipment.trackingId}</div>
        <div className="text-xs">Created {formatDate(shipment.lastUpdate)}</div>
      </div>
      <div>
        <div
          className={`py-1 px-2 rounded-md inline-block border-2 ${
            shipment.status === "Delivered"
              ? "border-green-700 text-green-700"
              : "border-red-700 text-red-700"
          } `}
          key={shipment.id + "x"}
        >
          {shipment.status}
        </div>
      </div>
    </div>
  );
};
