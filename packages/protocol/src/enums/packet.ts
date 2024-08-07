// NOTE: Please try to put the packets in the order according to their id. Thx!

enum Packet {
	Login = 0x01, // 1
	PlayStatus = 0x02, // 2
	ServerToClientHandshake = 0x03, // 3
	// ClientToServerHandshake = 0x04, // 4
	Disconnect = 0x05, // 5
	ResourcePacksInfo = 0x06, // 6
	ResourcePackStack = 0x07, // 7
	ResourcePackClientResponse = 0x08, // 8
	Text = 0x09, // 9
	SetTime = 0x0a, // 10
	StartGame = 0x0b, // 11
	AddPlayer = 0x0c, // 12
	AddEntity = 0x0d, // 13 // TODO: Rename this to AddActor
	RemoveEntity = 0x0e, // 14 // TODO: Rename this to RemoveActor
	AddItemActor = 0x0f, // 15
	TakeItemActor = 0x11, // 17
	MoveActorAbsolute = 0x12, // 18
	MovePlayer = 0x13, // 19
	UpdateBlock = 0x15, // 21
	LevelEvent = 0x19, // 25
	ActorEvent = 0x1b, // 27
	MobEffect = 0x1c, // 28
	// TickSync = 0x17, // 23
	UpdateAttributes = 0x1d, // 29
	InventoryTransaction = 0x1e, // 30
	MobEquipment = 0x1f, // 31
	Interact = 0x21, // 33
	BlockPickRequest = 0x22, // 34
	PlayerAction = 0x24, // 36
	SetActorData = 0x27, // 39
	SetActorMotion = 0x28, // 40
	// SetSpawnPosition = 0x2b, // 43
	Animate = 0x2c, // 44
	Respawn = 0x2d, // 45
	ContainerOpen = 0x2e, // 46
	ContainerClose = 0x2f, // 47
	PlayerHotbar = 0x30, // 48
	InventoryContent = 0x31, // 49
	InventorySlot = 0x32, // 50
	ContainerSetData = 0x33, // 51
	CraftingData = 0x34, // 52
	BlockActorData = 0x38, // 56
	LevelChunk = 0x3a, // 58
	SetCommandsEnabled = 0x3b, // 59
	// SetDifficulty = 0x3c, // 60
	ChangeDimension = 0x3d, // 61
	SetPlayerGameType = 0x3e, // 62
	PlayerList = 0x3f, // 63
	RequestChunkRadius = 0x45, // 69
	ChunkRadiusUpdate = 0x46, // 70
	BossEvent = 0x4a, // 74
	AvailableCommands = 0x4c, // 76
	CommandRequest = 0x4d, // 77
	CommandOutput = 0x4f, // 79
	ResourcePackDataInfo = 0x52, // 82
	ResourcePackChunkData = 0x53, // 83
	ResourcePackChunkRequest = 0x54, // 84
	Transfer = 0x55, // 85
	SetTitle = 0x58, // 88
	PlayerSkin = 0x5d, // 93
	BookEdit = 0x61, // 97
	NpcRequest = 0x62, // 98
	ModalFormRequest = 0x64, // 100
	ModalFormResponse = 0x65, // 101
	RemoveObjective = 0x6a, // 106
	SetDisplayObjective = 0x6b, // 107
	SetScore = 0x6c, // 108
	SetScoreboardIdentity = 0x70, // 112
	SetLocalPlayerAsInitialized = 0x71, // 113
	NetworkStackLatency = 0x73, // 115
	SpawnParticleEffect = 0x76, // 118
	AvailableActorIdentifiers = 0x77, // 119
	NetworkChunkPublisherUpdate = 0x79, // 121
	BiomeDefinitionList = 0x7a, // 122
	LevelSoundEvent = 0x7b, // 123
	// ClientCacheStatus = 0x81, // 129
	Emote = 0x8a, // 138
	CompletedUsingItem = 0x8e, // 142
	NetworkSettings = 0x8f, // 143
	PlayerAuthInput = 0x90, // 144
	// PlayerAuthInput = 0x90, // 144
	CreativeContent = 0x91, // 145
	ItemStackRequest = 0x93, // 147
	ItemStackResponse = 0x94, // 148
	EmoteList = 0x98, // 152
	PacketViolationWarning = 0x9c, // 156
	AnimateEntity = 0x9e, // 158
	CameraShake = 0x9f, // 159
	ItemComponent = 0xa2, // 162
	NpcDialogue = 0xa9, // 169
	PlayerStartItemCooldown = 0xb0, // 176
	ScriptMessage = 0xb1, // 177
	ToastRequest = 0xba, // 186
	UpdateAbilities = 0xbb, // 187
	UpdateAdventureSettings = 0xbc, // 188
	DeathInfo = 0xbd, // 189
	RequestNetworkSettings = 0xc1, // 193
	CameraPresetsPacket = 0xc6, // 198
	CameraInstructions = 0x1_2c, // 300
	OpenSign = 0x1_2f, // 303
	SetPlayerInventoryOptions = 0x1_33, // 307
	SetHud = 0x1_34, // 308
	AwardAchievement = 0x1_35, // 309
	ClientboundCloseForm = 0x1_36, // 310
	ServerboundLoadingScreenPacket = 0x1_38 // 312
}

export { Packet };
