import type { WorldEvent } from "../enums";
import type {
	BlockUpdateSignal,
	ChunkReadSignal,
	ChunkWriteSignal,
	EntityDespawnedSignal,
	EntityEffectAddSignal,
	EntityEffectRemoveSignal,
	EntitySpawnedSignal,
	EntityTeleportSignal,
	PlayerBreakBlockSignal,
	PlayerInteractWithBlockSignal,
	PlayerInteractWithEntitySignal,
	PlayerPlaceBlockSignal
} from "../events";

interface WorldEvents {
	[WorldEvent.EntitySpawned]: [EntitySpawnedSignal];
	[WorldEvent.EntityDespawned]: [EntityDespawnedSignal];
	[WorldEvent.EntityTeleport]: [EntityTeleportSignal];
	[WorldEvent.EntityEffectAdd]: [EntityEffectAddSignal];
	[WorldEvent.EntityEffectRemove]: [EntityEffectRemoveSignal];
	[WorldEvent.PlayerPlaceBlock]: [PlayerPlaceBlockSignal];
	[WorldEvent.PlayerBreakBlock]: [PlayerBreakBlockSignal];
	[WorldEvent.PlayerInteractWithEntity]: [PlayerInteractWithEntitySignal];
	[WorldEvent.PlayerInteractWithBlock]: [PlayerInteractWithBlockSignal];
	[WorldEvent.BlockUpdate]: [BlockUpdateSignal];
	[WorldEvent.ChunkRead]: [ChunkReadSignal];
	[WorldEvent.ChunkWrite]: [ChunkWriteSignal];
}

export { WorldEvents };
