import { Uint8 } from "@serenityjs/binaryutils";
import { Proto, Serialize } from "@serenityjs/raknet";

import { Packet, ResourcePackResponse } from "../../enums";
import { ResourcePackIds } from "../types";

import { DataPacket } from "./data-packet";

@Proto(Packet.ResourcePackClientResponse)
class ResourcePackClientResponsePacket extends DataPacket {
	@Serialize(Uint8) public response!: ResourcePackResponse;
	@Serialize(ResourcePackIds) public packs!: Array<string>;
}

export { ResourcePackClientResponsePacket };
