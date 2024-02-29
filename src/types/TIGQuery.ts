import { Shipment } from "./Shipment";
import { TrackingEvent } from "./TrackingEvent";

export type TIGQuery = {
    shipments: Shipment[];
    trackingEvents: TrackingEvent[];
  };
  
