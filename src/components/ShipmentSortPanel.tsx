import { ArrowUpDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { SortValues } from "../types/types";

type ShipmentSortPanelProps = {
    onSort: (field: SortValues) => void;
  };
  
  export const ShipmentSortPanel: FC<ShipmentSortPanelProps> = ({ onSort }) => {
    return (
      <>
        <Button
          onClick={() => onSort("lastUpdate")}
          variant="ghost"
          justifyContent="flex-start"
        >
          <div className="text-sm text-left font-normal">Shipment</div>
          <ArrowUpDownIcon boxSize={2} marginTop="4px" marginLeft="4px" />
        </Button>
        <Button
          onClick={() => onSort('status')}
          variant="ghost"
          justifyContent="flex-start"
        >
          <div className="text-sm text-left font-normal">Status</div>
          <ArrowUpDownIcon boxSize={2} marginTop="4px" marginLeft="4px" />
        </Button>
      </>
    );
  };
  
  