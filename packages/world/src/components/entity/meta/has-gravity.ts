import { MetadataFlags, MetadataKey, MetadataType } from "@serenityjs/protocol";

import { EntityMetadataComponent } from "./meta";

import type { Entity } from "../../../entity";

class EntityHasGravityComponent extends EntityMetadataComponent {
	public static readonly identifier = "minecraft:has_gravity";

	public readonly key = MetadataKey.Flags;

	public readonly flag = MetadataFlags.AffectedByGravity;

	public readonly type = MetadataType.Long;

	public defaultValue = true;

	/**
	 * Creates a new entity has gravity component.
	 *
	 * @param entity The entity the component is binded to.
	 * @returns A new entity has gravity component.
	 */
	public constructor(entity: Entity) {
		super(entity, EntityHasGravityComponent.identifier);

		// Check if the entity contains the gravity flag
		this.setCurrentValue(this.defaultValue, false);
	}

	/**
	 * Gets the current value of the entity has gravity component.
	 * @returns The current value of the entity has gravity component.
	 */
	public getCurrentValue(): boolean {
		return super.getCurrentValue() as boolean;
	}

	/**
	 * Sets the current value of the entity has gravity component.
	 *
	 * @param value The new value of the entity has gravity component.
	 * @param sync Whether to synchronize the entity has gravity component.
	 */
	public setCurrentValue(value: boolean, sync?: boolean): void {
		super.setCurrentValue(value, sync);
	}
}

export { EntityHasGravityComponent };
