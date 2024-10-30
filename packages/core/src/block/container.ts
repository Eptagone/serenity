import {
  ContainerId,
  ContainerOpenPacket,
  ContainerType
} from "@serenityjs/protocol";

import { Container } from "../container";
import { ItemStack } from "../item";
import { Player } from "../entity";

import { Block } from "./block";

class BlockContainer extends Container {
  /**
   * The block that this container is attached to.
   */
  public readonly block: Block;

  public constructor(
    block: Block,
    type: ContainerType,
    identifier: ContainerId,
    size: number
  ) {
    super(type, identifier, size);
    this.block = block;
  }

  public setItem(slot: number, itemStack: ItemStack): void {
    // Call the original setItem method
    super.setItem(slot, itemStack);

    // Set the world in the item stack if it doesn't exist
    if (!itemStack.world) itemStack.world = this.block.getWorld();
    itemStack.initialize();
  }

  public show(player: Player): void {
    // Call the original show method
    super.show(player);

    // Create a new ContainerOpenPacket
    const packet = new ContainerOpenPacket();

    // Assign the properties
    packet.identifier = this.identifier;
    packet.type = this.type;
    packet.position = this.block.position;
    packet.uniqueId =
      this.type === ContainerType.Container ? -1n : player.uniqueId;

    // Send the packet to the player
    player.send(packet);

    // Update the container
    this.update();
  }
}

export { BlockContainer };