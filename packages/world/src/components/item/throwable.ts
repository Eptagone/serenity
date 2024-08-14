import { ItemUseCause } from "../../enums";

import { ItemComponent } from "./item-component";

import type { EntityIdentifier } from "@serenityjs/entity";
import type { Player } from "../../player";
import type { Items } from "@serenityjs/item";

class ItemThrowableComponent<T extends keyof Items> extends ItemComponent<T> {
	public static readonly identifier: string = "minecraft:throwable";

	// Optional identifier for the projectile entity to spawn.
	public projectile?: EntityIdentifier;

	// The power with which the projectile is launched.
	public launchPower: number = 1.5;

	/**
	 * Handles the usage of the item, causing the associated projectile to be launched.
	 *
	 * @param player - The player using the item.
	 * @param cause - The cause for the item use (e.g., Use, Place).
	 * @return True if the projectile was successfully launched; otherwise, false.
	 */
	public onUse(player: Player, cause: ItemUseCause): boolean {
		// Check if the item is used in the correct context.
		if (cause !== ItemUseCause.Use) return false;
		if (!this.projectile) return false; // Ensure there is a projectile to launch.

		// Determine the direction the player is looking.
		const direction = player.getViewDirection();

		// Spawn the projectile entity in the player's dimension at their position.
		const projectileEntity = player.dimension.spawnEntity(
			this.projectile,
			player.position
		);

		// Get the projectile component from the newly spawned entity.
		const projectileComponent = projectileEntity.getComponent(
			"minecraft:projectile"
		);

		// Set the player as the owner of the projectile.
		projectileComponent.owner = player;

		// Launch the projectile with the specified power.
		projectileComponent.shoot(direction.multiply(this.launchPower));

		return true; // Indicate that the item use was successful.
	}

	/**
	 * Sets the identifier for the projectile entity to be used.
	 *
	 * @param entityIdentifier - The identifier for the projectile entity.
	 * @return The current ItemThrowableComponent instance for chaining.
	 */
	public setProjectile(entityIdentifier: EntityIdentifier): this {
		this.projectile = entityIdentifier;
		return this;
	}

	/**
	 * Sets the launch power for the projectile.
	 *
	 * @param power - The power with which to launch the projectile.
	 * @return The current ItemThrowableComponent instance for chaining.
	 */
	public setLaunchPower(power: number): this {
		this.launchPower = power;
		return this;
	}
}

export { ItemThrowableComponent };