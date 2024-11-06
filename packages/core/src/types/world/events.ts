import { WorldEvent } from "../../enums";
import {
  ChunkReadySignal,
  EffectAddEventSignal,
  EffectRemoveEventSignal,
  EntityAttributeUpdateSignal,
  EntityDespawnedSignal,
  EntityDimensionChangeSignal,
  EntityFlagUpdateSignal,
  EntityMetadataUpdateSignal,
  EntitySpawnedSignal,
  PlayerBreakBlockSignal,
  PlayerChatSignal,
  PlayerDropItemSignal,
  PlayerGamemodeChangeSignal,
  PlayerInteractWithBlockSignal,
  PlayerJoinSignal,
  PlayerLeaveSignal,
  PlayerPlaceBlockSignal,
  PlayerStartEmotingSignal,
  PlayerStartUsingItemSignal,
  PlayerStopEmotingSignal,
  PlayerStopUsingItemSignal,
  PlayerUseItemSignal,
  WorldInitializeSignal,
  WorldTickSignal
} from "../../events";

interface WorldEventSignals {
  [WorldEvent.WorldInitialize]: [WorldInitializeSignal];
  [WorldEvent.WorldTick]: [WorldTickSignal];
  [WorldEvent.ChunkReady]: [ChunkReadySignal];
  [WorldEvent.EntitySpawned]: [EntitySpawnedSignal];
  [WorldEvent.EntityDespawned]: [EntityDespawnedSignal];
  [WorldEvent.EntityFlagUpdate]: [EntityFlagUpdateSignal];
  [WorldEvent.EntityDimensionChange]: [EntityDimensionChangeSignal];
  [WorldEvent.EntityMetadataUpdate]: [EntityMetadataUpdateSignal];
  [WorldEvent.EntityAttributeUpdate]: [EntityAttributeUpdateSignal];
  [WorldEvent.EffectAdd]: [EffectAddEventSignal];
  [WorldEvent.EffectRemove]: [EffectRemoveEventSignal];
  [WorldEvent.PlayerJoin]: [PlayerJoinSignal];
  [WorldEvent.PlayerLeave]: [PlayerLeaveSignal];
  [WorldEvent.PlayerChat]: [PlayerChatSignal];
  [WorldEvent.PlayerPlaceBlock]: [PlayerPlaceBlockSignal];
  [WorldEvent.PlayerBreakBlock]: [PlayerBreakBlockSignal];
  [WorldEvent.PlayerDropItem]: [PlayerDropItemSignal];
  [WorldEvent.PlayerStartUsingItem]: [PlayerStartUsingItemSignal];
  [WorldEvent.PlayerInteractWithBlock]: [PlayerInteractWithBlockSignal];
  [WorldEvent.PlayerStopUsingItem]: [PlayerStopUsingItemSignal];
  [WorldEvent.PlayerUseItem]: [PlayerUseItemSignal];
  [WorldEvent.PlayerStartEmoting]: [PlayerStartEmotingSignal];
  [WorldEvent.PlayerStopEmoting]: [PlayerStopEmotingSignal];
  [WorldEvent.PlayerGamemodeChange]: [PlayerGamemodeChangeSignal];
  [WorldEvent.BlockUpdate]: [];
}

export { WorldEventSignals };
