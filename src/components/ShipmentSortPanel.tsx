import { ArrowUpDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { FC } from "react";

type ShipmentSortPanelProps = {
  onDateSorting: () => void;
  onStatusSorting: () => void;
};

export const ShipmentSortPanel: FC<ShipmentSortPanelProps> = ({ onDateSorting, onStatusSorting }) => {
  return (
    <div className="grid grid-cols-2">
      <Button
        onClick={onDateSorting}
        variant="ghost"
        justifyContent="flex-start"
      >
        <div className="text-sm text-left font-normal">Shipment</div>
        <ArrowUpDownIcon boxSize={2} marginTop="4px" marginLeft="4px" />
      </Button>
      <Button
        onClick={onStatusSorting}
        variant="ghost"
        justifyContent="flex-start"
      >
        <div className="text-sm text-left font-normal">Status</div>
        <ArrowUpDownIcon boxSize={2} marginTop="4px" marginLeft="4px" />
      </Button>
    </div>
  );
};
