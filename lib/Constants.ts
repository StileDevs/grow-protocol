/** @module Constants */

export const TANK_HEADER_SIZE = 60;

/**
 * Defines the types of packets that can be sent between client and server
 */
export enum PacketTypes {
  /** Initial connection packet */
  HELLO = 1,

  /** String data packet */
  STR = 2,

  /** Action/interaction packet */
  ACTION = 3,

  /** Tank/game state packet */
  TANK = 4
}

/**
 * Variant data types used in the game.
 */
export enum VariantTypes {
  /** Represents no data */
  NONE,

  /** Represents an array of one floating point numbers*/
  FLOAT_1,

  /** Represents a string value */
  STRING,

  /** Represents an array of two floating point numbers */
  FLOAT_2,

  /** Represents an array of three floating point numbers */
  FLOAT_3,

  /** Represents a single unsigned integer */
  UNSIGNED_INT,

  /** Represents an single signed integers */
  SIGNED_INT = 0x9
}

/**
 * Defines the different types of wearable clothing slots
 */
export enum ClothTypes {
  HAIR = 0,
  SHIRT = 1,
  PANTS = 2,
  FEET = 3,
  FACE = 4,
  HAND = 5,
  BACK = 6,
  MASK = 7,
  NECKLACE = 8,
  ANCES = 9
}

/**
 * Represents various game state and action packets used for synchronizing game state between client and server.
 */
export enum TankTypes {
  STATE = 0,
  CALL_FUNCTION = 1,
  UPDATE_STATUS = 2,
  TILE_CHANGE_REQUEST = 3,
  SEND_MAP_DATA = 4,
  SEND_TILE_UPDATE_DATA = 5,
  SEND_TILE_UPDATE_DATA_MULTIPLE = 6,
  TILE_ACTIVATE_REQUEST = 7,
  TILE_APPLY_DAMAGE = 8,
  SEND_INVENTORY_STATE = 9,
  ITEM_ACTIVATE_REQUEST = 10,
  ITEM_ACTIVATE_OBJECT_REQUEST = 11,
  SEND_TILE_TREE_STATE = 12,
  MODIFY_ITEM_INVENTORY = 13,
  ITEM_CHANGE_OBJECT = 14,
  SEND_LOCK = 15,
  SEND_ITEM_DATABASE_DATA = 16,
  SEND_PARTICLE_EFFECT = 17,
  SET_ICON_STATE = 18,
  ITEM_EFFECT = 19,
  SET_CHARACTER_STATE = 20,
  PING_REPLY = 21,
  PING_REQUEST = 22,
  GOT_PUNCHED = 23,
  APP_CHECK_RESPONSE = 24,
  APP_INTEGRITY_FAIL = 25,
  DISCONNECT = 26,
  BATTLE_JOIN = 27,
  BATTLE_EVEN = 28,
  USE_DOOR = 29,
  SEND_PARENTAL = 30,
  GONE_FISHIN = 31,
  STEAM = 32,
  PET_BATTLE = 33,
  NPC = 34,
  SPECIAL = 35,
  SEND_PARTICLE_EFFECT_V2 = 36,
  ACTIVE_ARROW_TO_ITEM = 37,
  SELECT_TILE_INDEX = 38,
  SEND_PLAYER_TRIBUTE_DATA = 39
}

/**
 * Enum representing various flags that define tile states and properties
 */
export enum TileFlags {
  /** Additional tile data/properties */
  TILEEXTRA = 1 << 0,

  /** Tile is (world) locked and cannot be modified */
  LOCKED = 1 << 1,

  /** Tile is a seed */
  SEED = 1 << 4,

  /** Combined tree properties  */
  TREE = (1 << 0) | (1 << 3) | (1 << 4),

  /** Tile is horizontally flipped  */
  FLIPPED = 1 << 5,

  /** Tile is rotated left */
  ROTATED_LEFT = (1 << 4) | (1 << 5),

  /** Tile is in open state (House Entrance, Portcullis, Dragon Gate, etc) */
  OPEN = 1 << 6,

  /** Tile is publicly accessible (Could punch treasure-like gate) */
  PUBLIC = 1 << 7,

  /** Tile sound effects are muted (Music box) */
  SILENCED = 1 << 9,

  /** Tile has water state */
  WATER = 1 << 10,

  /** Tile has fire state */
  FIRE = 1 << 12,

  /** Red coloring state */
  RED = 1 << 13,

  /** Blue coloring state */
  BLUE = 1 << 15,

  /** Green coloring state */
  GREEN = 1 << 14,

  /** Yellow color combination (RED | GREEN) */
  YELLOW = (1 << 13) | (1 << 14),

  /** Purple color combination (RED | BLUE) */
  PURPLE = (1 << 13) | (1 << 15)
}

/**
 * Defines additional tile data types that can be associated with special tiles that have extra functionality.
 */
export enum TileExtraTypes {
  NONE = 0,
  DOOR = 1,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  MAIN_DOOR = 1,
  SIGN = 2,
  LOCK = 3,
  SEED = 4,
  MAILBOX = 6,
  BULLETIN = 7,
  DICE = 8,
  PROVIDER = 9,
  ACHIEVEMENT = 10,
  HEART_MONITOR = 11,
  DONATION_BLOCK = 12,
  TOYBOX = 13,
  MANNEQUIN = 14,
  MAGIC_EGG = 15,
  GAME_RESOURCES = 16,
  GAME_GENERATOR = 17,
  XENONITE = 18,
  DESSUP = 19,
  CRYSTAL = 20,
  BURGLAR = 21,
  SPOTLIGHT = 22,
  DISPLAY_BLOCK = 23,
  VENDING_MACHINE = 24,
  FISHTANK = 25,
  SOLAR = 26,
  FORGE = 27,
  GIVING_TREE = 28,
  GIVING_TREE_STUMP = 29,
  STEAM_ORGAN = 30,
  TAMAGOTCHI = 31,
  SWING = 32,
  FLAG = 33,
  LOBSTER_TRAP = 34,
  ART_CANVAS = 35,
  BATTLE_CAGE = 36,
  PET_TRAINER = 37,
  STEAM_ENGINE = 38,
  LOCKBOT = 39,
  WEATHER_SPECIAL = 40,
  SPIRIT_STORAGE = 41,
  UNKNOWN_1 = 42,
  DISPLAY_SHELF = 43,
  VIP_ENTRANCE = 44,
  CHALLENGE_TIMER = 45,
  CHALLENGE_FLAG = 46,
  FISH_MOUNT = 47,
  PORTRAIT = 48,
  WEATHER_SPECIAL2 = 49,
  FOSSIL_PREP = 50,
  DNA_MACHINE = 51,

  MAGPLANT = 62,
  GROWSCAN = 66,
  TESSERACT_MANIPULATOR = 69,
  GAIA_HEART = 70,
  TECHNO_ORGANIC_ENGINE = 71,
  WEATHER_INFINITY = 77,
  KRANKEN_GALACTIC = 80
}

/**
 * Specifies how players and objects interact with tiles in terms of collision behavior.
 */
export enum TileCollisionTypes {
  NONE = 0,
  NORMAL = 1,
  JUMP_THROUGH = 2,
  GATEWAY = 3,
  IF_OFF = 4,
  ONE_WAY = 5,
  VIP = 6,
  WATERFALL = 7,
  ADVENTURE = 8,
  IF_ON = 9,
  TEAM_ENTRANCE = 10,
  GUILD = 11,
  CLOUD = 12,
  FRIEND_ENTRANCE = 13
}

/**
 * Defines the different types of interactions and actions that can be performed with tiles and objects.
 */
export enum ActionTypes {
  FIST = 0,
  WRENCH = 1,
  DOOR = 2,
  LOCK = 3,
  GEMS = 4,
  TREASURE = 5,
  DEADLY_BLOCK = 6,
  TRAMPOLINE = 7,
  CONSUMABLE = 8,
  GATEWAY = 9,
  SIGN = 10,
  SFX_WITH_EXTRA_FRAME = 11,
  BOOMBOX = 12,
  MAIN_DOOR = 13,
  PLATFORM = 14,
  BEDROCK = 15,
  LAVA = 16,
  FOREGROUND = 17,
  BACKGROUND = 18,
  SEED = 19,
  CLOTHES = 20,
  FOREGROUND_WITH_EXTRA_FRAME = 21,
  BACKGD_SFX_EXTRA_FRAME = 22,
  BACK_BOOMBOX = 23,
  BOUNCY = 24,
  POINTY = 25,
  PORTAL = 26,
  CHECKPOINT = 27,
  SHEET_MUSIC = 28,
  ICE = 29,
  SWITCHEROO = 31,
  CHEST = 32,
  MAILBOX = 33,
  BULLETIN = 34,
  PINATA = 35,
  DICE = 36,
  CHEMICAL = 37,
  PROVIDER = 38,
  LAB = 39,
  ACHIEVEMENT = 40,
  WEATHER_MACHINE = 41,
  SCORE_BOARD = 42,
  SUNGATE = 43,
  PROFILE = 44,
  DEADLY_IF_ON = 45,
  HEART_MONITOR = 46,
  DONATION_BOX = 47,
  TOYBOX = 48,
  MANNEQUIN = 49,
  SECURITY_CAMERA = 50,
  MAGIC_EGG = 51,
  GAME_RESOURCES = 52,
  GAME_GENERATOR = 53,
  XENONITE = 54,
  DRESSUP = 55,
  CRYSTAL = 56,
  BURGLAR = 57,
  COMPACTOR = 58,
  SPOTLIGHT = 59,
  WIND = 60,
  DISPLAY_BLOCK = 61,
  VENDING_MACHINE = 62,
  FISHTANK = 63,
  PETFISH = 64,
  SOLAR = 65,
  FORGE = 66,
  GIVING_TREE = 67,
  GIVING_TREE_STUMP = 68,
  STEAMPUNK = 69,
  STEAM_LAVA_IF_ON = 70,
  STEAM_ORGAN = 71,
  TAMAGOTCHI = 72,
  SWING = 73,
  FLAG = 74,
  LOBSTER_TRAP = 75,
  ART_CANVAS = 76,
  BATTLE_CAGE = 77,
  PET_TRAINER = 78,
  STEAM_ENGINE = 79,
  LOCKBOT = 80,
  WEATHER_SPECIAL = 81,
  SPIRIT_STORAGE = 82,
  DISPLAY_SHELF = 83,
  VIP_ENTRANCE = 84,
  CHALLENGE_TIMER = 85,
  CHALLENGE_FLAG = 86,
  FISH_MOUNT = 87,
  PORTRAIT = 88,
  WEATHER_SPECIAL2 = 89,
  FOSSIL = 90,
  FOSSIL_PREP = 91,
  DNA_MACHINE = 92,
  BLASTER = 93,
  VALHOWLA = 94,
  CHEMSYNTH = 95,
  CHEMTANK = 96,
  STORAGE = 97,
  OVEN = 98,
  SUPER_MUSIC = 99,
  GEIGER_CHARGER = 100,
  ADVENTURE_RESET = 101,
  TOMB_ROBBER = 102,
  FACTION = 103,
  RED_FACTION = 104,
  GREEN_FACTION = 105,
  BLUE_FACTION = 106,
  ANCES = 107,
  FISHGOTCHI_TANK = 109,
  FISHING_BLOCK = 110,
  ITEM_SUCKER = 111,
  ITEM_PLANTER = 112,
  ROBOT = 113,
  COMMAND = 114,
  TICKET = 115,
  STATS_BLOCK = 116,
  FIELD_NODE = 117,
  OUIJA_BOARD = 118,
  ARCHITECT_MACHINE = 119,
  STARSHIP = 120,
  AUTODELETE = 121,
  GREEN_FOUNTAIN = 122,
  AUTO_ACTION_BREAK = 123,
  AUTO_ACTION_HARVEST = 124,
  AUTO_ACTION_HARVEST_SUCK = 125,
  LIGHTNING_IF_ON = 126,
  PHASED_BLOCK = 127,
  MUD = 128,
  ROOT_CUTTING = 129,
  PASSWORD_STORAGE = 130,
  PHASED_BLOCK_2 = 131,
  BOMB = 132,
  WEATHER_INFINITY = 134,
  SLIME = 135,
  UNK1 = 136,
  COMPLETIONIST = 137,
  UNK3 = 138,
  FEEDING_BLOCK = 140,
  KRANKENS_BLOCK = 141,
  FRIENDS_ENTRANCE = 142
}

/**
 * Flags that define block properties and behavior
 */
export enum BlockFlags {
  /** Block can be placed in multiple orientations */
  MULTI_FACING = 1 << 0,

  /** Block can be wrenchable */
  WRENCHABLE = 1 << 1,

  /** Block never drops any seeds */
  SEEDLESS = 1 << 2,

  /** Block cannot be removed or modified */
  PERMANENT = 1 << 3,

  /** Block does not drop anything when broken */
  DROPLESS = 1 << 4,

  /** Block cannot be used on the player themselves */
  NO_SELF = 1 << 5,

  /** Block renders without a shadow */
  NO_SHADOW = 1 << 6,

  /** Block can only be used in worlds with an active World Lock */
  WORLD_LOCKED = 1 << 7,

  /** Block is marked as beta content */
  BETA = 1 << 8,

  /** Block returns to inventory when broken if there's space */
  AUTO_PICKUP = 1 << 9,

  /** Block might be mod only */
  MOD = 1 << 10,

  /** Tree can produce unexpected fruit types */
  RANDOM_GROW = 1 << 11,

  /** Block can be broken by anyone even when locked */
  PUBLIC = 1 << 12,

  /** Block is placed in the foreground layer */
  FOREGROUND = 1 << 13,

  /** Block is only available during WinterFest event */
  HOLIDAY = 1 << 14,

  /** Block cannot be dropped or traded between players */
  UNTRADEABLE = 1 << 15
}
/**
 * Representing various visual and gameplay states that can be applied to characters.
 */
export enum CharacterState {
  /** Allows character to phase through blocks */
  WALK_IN_BLOCKS = 1 << 0,

  /** Enables double jumping ability */
  DOUBLE_JUMP = 1 << 1,

  /** Makes the character invisible */
  IS_INVISIBLE = 1 << 2,

  /** Removes character's hands */
  NO_HANDS = 1 << 3,

  /** Removes character's eyes */
  NO_EYES = 1 << 4,

  /** Makes character body invisible */
  NO_BODY = 1 << 5,

  /** Displays devil horns on character head */
  DEVIL_HORNS = 1 << 6,

  /** Displays golden halo on character head */
  GOLDEN_HALO = 1 << 7,

  /** Freezes character movement */
  IS_FROZEN = 1 << 11,

  /** Applies curse effect to character */
  IS_CURSED = 1 << 12,

  /** Applies duct tape effect */
  IS_DUCTAPED = 1 << 13,

  /** Shows character smoking a cigar effect */
  HAVE_CIGAR = 1 << 14,

  /** Makes character emit circle light */
  IS_SHINING = 1 << 15,

  /** Applies zombie effect to character */
  IS_ZOMBIE = 1 << 16,

  /** Shows lava damage effect */
  IS_HIT_BY_LAVA = 1 << 17,

  /** Shows haunted shadow effects */
  HAVE_HAUNTED_SHADOWS = 1 << 18,

  /** Shows radiation effects from Geiger counter */
  HAVE_GEIGER_RADIATION = 1 << 19,

  /** Shows reflector effect */
  HAVE_REFLECTOR = 1 << 20,

  /** Shows egg effect on character */
  IS_EGGED = 1 << 21,

  /** Shows floating pineapple effect */
  HAVE_PINEAPPLE_FLOAT = 1 << 22,

  /** Shows flying pineapple effect */
  HAVE_FLYING_PINEAPPLE = 1 << 23,

  /** Displays super supporter name (large name size) */
  HAVE_SUPER_SUPPORTER_NAME = 1 << 24,

  /** Shows super pineapple effect */
  HAVE_SUPER_PINEAPPLE = 1 << 25
}

/**
 * Tracking various event and state flags in the game system.
 */
export enum StateFlags {
  /** No flags set */
  NONE = 0,

  /** Unknown/reserved flag */
  UNK = 1 << 1,

  /** Reset visual state to default */
  RESET_VISUAL_STATE = 1 << 2,

  /** Object is in extended state */
  EXTENDED = 1 << 3,

  /** Object is rotated left */
  ROTATE_LEFT = 1 << 4,

  /** Object is on solid ground */
  ON_SOLID = 1 << 5,

  /** Taking fire damage */
  ON_FIRE_DAMAGE = 1 << 6,

  /** Jumping state */
  ON_JUMP = 1 << 7,

  /** Death state */
  ON_KILLED = 1 << 8,

  /** Punching action state */
  ON_PUNCHED = 1 << 9,

  /** Block placement state */
  ON_PLACED = 1 << 10,

  /** Tile interaction state */
  ON_TILE_ACTION = 1 << 11,

  /** Received punch state */
  ON_GOT_PUNCHED = 1 << 12,

  /** Respawn state */
  ON_RESPAWNED = 1 << 13,

  /** Item collection state */
  ON_COLLECT_OBJECT = 1 << 14,

  /** Trampoline bounce state */
  ON_TRAMPOLINE = 1 << 15,

  /** Taking damage state */
  ON_DAMAGE = 1 << 16,

  /** Sliding state */
  ON_SLIDE = 1 << 17,

  /** Wall hanging state */
  ON_WALL_HANG = 1 << 21,

  /** Taking acid damage state */
  ON_ACID_DAMAGE = 1 << 26

  // MAX = 31
}
