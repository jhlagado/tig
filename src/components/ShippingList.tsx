import { useQuery } from "@apollo/client";
import { FC, useState } from "react";
import { shipmentsQuery } from "../graphql/shipmentsQuery";
import { Shipment } from "../types/Shipment";
import { ShipmentItem } from "./ShippingItem";
import { TIGQuery } from "../types/TIGQuery";
import { SortValues } from "../types/types";
import { ShipmentSortPanel } from "./ShipmentSortPanel";

type ShipmentListProps = {
  onSelect: (shipment: Shipment) => void;
};

export const ShipmentList: FC<ShipmentListProps> = ({ onSelect }) => {
  const { loading, error, data } = useQuery<TIGQuery>(shipmentsQuery);
  const [sortField, setSortField] = useState<SortValues>("none");
  const [ascending, setAscending] = useState(false);

  const handleSort = (field: SortValues) => {
    setSortField(field);
    setAscending(!ascending);
  };

  const sortComparator = (a: Shipment, b: Shipment) => {
    if (sortField === "none") return 0;
    let x = Number(a[sortField] ?? "0");
    let y = Number(b[sortField] ?? "0");
    return ascending ? y - x : x - y;
  };

  if (error) {
    return "error";
  }
  if (loading) {
    return "loading";
  }
  if (!data) return null;
  let shipments = data.shipments.sort(sortComparator);
  return (
    <div className="grid grid-cols-[30%_70%]">
      <ShipmentSortPanel onSort={handleSort} />
      {shipments.map((shipment) => (
        <div key={shipment.id}>
          <ShipmentItem shipment={shipment} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
};
