import { useState } from "react";
import { Shipment } from "../types/Shipment";
import { ShipmentList } from "./ShippingList";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ShipmentDetails } from "./ShippingDetails";

export const ShipmentPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedShipment, setSelectedShipment] = useState<Shipment>();

  const handleSelected = (shipment: Shipment) => {
    setSelectedShipment(shipment);
    onOpen();
  };

  return (
    <>
      <div className="bg-slate-500 text-left">
        <header className="uppercase font-bold text-xl bg-white p-4">
          Company Co.
        </header>
        <div className="bg-slate-200 p-4">
          <main className="bg-white rounded-md">
            <ShipmentList onSelect={handleSelected} />
          </main>
        </div>
      </div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{selectedShipment?.trackingId}</DrawerHeader>
          <DrawerBody>
            <ShipmentDetails shipment={selectedShipment!} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
