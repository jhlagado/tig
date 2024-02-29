import { useQuery } from "@apollo/client";
import { FC } from "react";
import { shipmentsQuery } from "../graphql/shipmentsQuery";
import { Shipment } from "../types/Shipment";
import { ShipmentItem } from "./ShippingItem";
import { TIGQuery } from "../types/TIGQuery";

interface ShipmentListProps {
  onSelect: (shipment: Shipment) => void;
}

export const ShipmentList: FC<ShipmentListProps> = ({ onSelect }) => {
  const { loading, error, data } = useQuery<TIGQuery>(shipmentsQuery);
  if (error) {
    return "error";
  }
  if (loading) {
    return "loading";
  }
  if (!data) return null;
  return data.shipments.map((shipment) => (
    <div key={shipment.id}>
      <ShipmentItem shipment={shipment} onSelect={onSelect} />
    </div>
  ));
};
