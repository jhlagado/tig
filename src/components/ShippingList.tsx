import { useQuery } from "@apollo/client";
import { FC, useState } from "react";
import { shipmentsQuery } from "../graphql/shipmentsQuery";
import { Shipment } from "../types/Shipment";
import { ShipmentItem } from "./ShippingItem";
import { TIGQuery } from "../types/TIGQuery";
import { SortValues } from "../types/types";
import { ShipmentSortPanel } from "./ShipmentSortPanel";

const sortShipments = (
  shipments: Shipment[],
  dateSorting: SortValues,
  statusSorting: SortValues
) => {
  let sortedShipments = [...shipments];

  switch (dateSorting) {
    case "ascending":
      return sortedShipments.sort((a, b) =>
        a?.trackingId?.localeCompare(b?.trackingId)
      );
    case "descending":
      return sortedShipments.sort((a, b) =>
        b?.trackingId?.localeCompare(a?.trackingId)
      );
  }

  switch (statusSorting) {
    case "ascending":
      return sortedShipments.sort((a) => (a?.status === "Delivered" ? 1 : -1));
    case "descending":
      return sortedShipments.sort((a) => (a?.status === "Delivered" ? -1 : 1));
  }
  return sortedShipments;
};

type ShipmentListProps = {
  onSelect: (shipment: Shipment) => void;
};

export const ShipmentList: FC<ShipmentListProps> = ({ onSelect }) => {
  const { loading, error, data } = useQuery<TIGQuery>(shipmentsQuery);
  const [dateSorting, setDateSorting] = useState<SortValues>("none");
  const [statusSorting, setStatusSorting] = useState<SortValues>("none");

  const handleDateSorting = () => {
    setStatusSorting("none");
    setDateSorting((oldValue) => {
      switch (oldValue) {
        case "ascending":
          return "descending";
        case "descending":
          return "none";
        default:
          return "ascending";
      }
    });
  };

  const handleStatusSorting = () => {
    setStatusSorting((oldValue) => {
      setDateSorting("none");
      switch (oldValue) {
        case "ascending":
          return "descending";
        case "descending":
          return "none";
        default:
          return "ascending";
      }
    });
  };

  if (error) {
    return "error";
  }
  if (loading) {
    return "loading";
  }
  if (!data) return null;
  let shipments = sortShipments(data.shipments, dateSorting, statusSorting);

  return (
    <div className="">
      <ShipmentSortPanel
        onDateSorting={handleDateSorting}
        onStatusSorting={handleStatusSorting}
      />
      {shipments.map((shipment) => (
        <ShipmentItem key={shipment.id} shipment={shipment} onSelect={onSelect} />
      ))}
    </div>
  );
};
