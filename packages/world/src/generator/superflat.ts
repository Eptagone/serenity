import { BlockPermutation } from "../block";
import { BlockIdentifier } from "../enums";

import { TerrainGenerator } from "./generator";

import type { Chunk } from "../chunk";

class Superflat extends TerrainGenerator {
	public constructor() {
		super(0);
	}

	/**
	 * Generates a chunk.
	 *
	 */
	public apply(chunk: Chunk): Chunk {
		const bedrock = BlockPermutation.resolve(BlockIdentifier.Bedrock);
		const dirt = BlockPermutation.resolve(BlockIdentifier.Dirt);
		const grass = BlockPermutation.resolve(BlockIdentifier.GrassBlock);

		for (let x = 0; x < 16; x++) {
			for (let z = 0; z < 16; z++) {
				for (let y = -64; y < -60; y++) {
					if (y === -64) {
						chunk.setPermutation(x, y, z, bedrock);
					} else if (y === -63 || y === -62) {
						chunk.setPermutation(x, y, z, dirt);
					} else {
						chunk.setPermutation(x, y, z, grass);
					}
				}
			}
		}

		// Return the chunk.
		return chunk;
	}
}

export { Superflat };
