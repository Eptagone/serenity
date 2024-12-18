import { VarString, ZigZag } from "@serenityjs/binarystream";
import { Proto, Serialize } from "@serenityjs/raknet";

import {
  Packet,
  type ViolationSeverity,
  type ViolationType
} from "../../enums";

import { DataPacket } from "./data-packet";

@Proto(Packet.PacketViolationWarning)
class PacketViolationWarningPacket extends DataPacket {
  @Serialize(ZigZag) public type!: ViolationType;
  @Serialize(ZigZag) public severity!: ViolationSeverity;
  @Serialize(ZigZag) public packet!: Packet;
  @Serialize(VarString) public context!: string;
}

export { PacketViolationWarningPacket };
