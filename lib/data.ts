export interface Chapter {
  id: string;
  name: string;
  title: string;
  description: string;
  facts: string[];
  symbol: string;
  alignment: "left" | "right";
}

export const chapters: Chapter[] = [
  {
    id: "muses",
    name: "The Muses",
    title: "Invocation",
    description: "Sing in me, Muse, and through me tell the story of that man skilled in all ways of contending, the wanderer, harried for years on end...",
    facts: [
      "The Muses were the nine daughters of Zeus and Mnemosyne (Memory).",
      "Calliope, the Muse of epic poetry, is the one invoked in The Odyssey.",
      "They resided on Mount Helicon and were the source of all artistic inspiration."
    ],
    symbol: "Lyre",
    alignment: "left"
  },
  {
    id: "athena",
    name: "Athena",
    title: "The Grey-Eyed Goddess",
    description: "Daughter of Zeus, goddess of wisdom and war strategy. She is Odysseus' most powerful patron, guiding him with divine counsel and disguises throughout his journey.",
    facts: [
      "Athena was born fully armed from the forehead of Zeus.",
      "She often appeared to Odysseus in disguise, notably as Mentor.",
      "Her symbol, the owl, represents wisdom and the ability to see in the dark."
    ],
    symbol: "Owl",
    alignment: "right"
  },
  {
    id: "poseidon",
    name: "Poseidon",
    title: "Earth-Shaker",
    description: "God of the sea, storms, and earthquakes. The relentless antagonist who curses Odysseus to wander for ten years after the blinding of his son, the Cyclops Polyphemus.",
    facts: [
      "Poseidon's trident could shatter rocks and call forth storms.",
      "He is also the god of horses, having created the first horse.",
      "His palace was said to be made of coral and gems deep within the ocean."
    ],
    symbol: "Trident",
    alignment: "left"
  },
  {
    id: "circe",
    name: "Circe",
    title: "The Sorceress",
    description: "A minor goddess of magic who lived on the island of Aeaea. She transformed Odysseus' crew into swine but later became his lover and advisor, guiding him to the Underworld.",
    facts: [
      "Circe was the daughter of the sun god Helios.",
      "She used a wand and magical potions to enchant her visitors.",
      "She taught Odysseus how to safely pass the Sirens and Scylla."
    ],
    symbol: "Chalice",
    alignment: "right"
  },
  {
    id: "calypso",
    name: "Calypso",
    title: "The Nymph",
    description: "The nymph who detained Odysseus on the island of Ogygia for seven years, offering him immortality if he would stay. Yet, his heart remained with Penelope and Ithaca.",
    facts: [
      "Her name, Kalypso, means 'to conceal' or 'to hide'.",
      "She was the daughter of the Titan Atlas.",
      "Hermes was sent by Zeus to command her to release Odysseus."
    ],
    symbol: "Island",
    alignment: "left"
  },
  {
    id: "hermes",
    name: "Hermes",
    title: "The Messenger",
    description: "The giant-killer and messenger of the gods. He aided Odysseus by giving him the moly plant to resist Circe's magic and delivering Zeus' command to Calypso.",
    facts: [
      "Hermes is the conductor of souls to the afterlife (Psychopomp).",
      "He invented the lyre from a tortoise shell on the day of his birth.",
      "His winged sandals, Talaria, allowed him to move with the speed of wind."
    ],
    symbol: "Caduceus",
    alignment: "right"
  },
  {
    id: "ithaca",
    name: "Ithaca",
    title: "The Return",
    description: "The rocky island kingdom of Odysseus. After twenty years of war and wandering, the king returns to reclaim his throne, his wife Penelope, and his son Telemachus.",
    facts: [
      "Ithaca is a real island in the Ionian Sea.",
      "Odysseus had to string his great bow to prove his identity.",
      "The bed of Odysseus was built around a living olive tree, a symbol of stability."
    ],
    symbol: "Olive Tree",
    alignment: "left"
  },
  {
    id: "zeus",
    name: "Zeus",
    title: "King of Gods",
    description: "Ruler of Mount Olympus, god of the sky and thunder. His will shapes the fate of mortals and gods alike, often intervening in Odysseus' journey through omens and decrees.",
    facts: [
      "Zeus defeated his father Cronus to seize power.",
      "His weapon is the thunderbolt, forged by the Cyclopes.",
      "He is the keeper of oaths and hospitality (Xenia)."
    ],
    symbol: "Thunderbolt",
    alignment: "right"
  },
  {
    id: "hera",
    name: "Hera",
    title: "Queen of Heaven",
    description: "Goddess of marriage and family, and the jealous wife of Zeus. While less directly involved in the Odyssey, her influence over the pantheon is undeniable.",
    facts: [
      "Hera is one of the twelve Olympians and sister-wife to Zeus.",
      "Her sacred animal is the peacock, whose feathers represent the eyes of Argus.",
      "She fiercely persecuted the heroes born of Zeus's affairs."
    ],
    symbol: "Peacock",
    alignment: "left"
  },
  {
    id: "ares",
    name: "Ares",
    title: "God of War",
    description: "The embodiment of the chaotic and violent aspect of war. Unlike Athena's strategic warfare, Ares represents the sheer brutality of battle.",
    facts: [
      "Ares was often humiliated by other gods, notably Hephaestus.",
      "He is the son of Zeus and Hera, though both were said to detest him.",
      "His companions include Phobos (Fear) and Deimos (Terror)."
    ],
    symbol: "Spear",
    alignment: "right"
  },
  {
    id: "apollo",
    name: "Apollo",
    title: "The Archer",
    description: "God of music, prophecy, healing, and the sun. It is on his feast day that Odysseus enacts his revenge against the suitors.",
    facts: [
      "Apollo established the Oracle at Delphi.",
      "He is the twin brother of Artemis.",
      "His arrows could bring plague or sudden death."
    ],
    symbol: "Sun",
    alignment: "left"
  },
  {
    id: "artemis",
    name: "Artemis",
    title: "The Huntress",
    description: "Goddess of the hunt, wilderness, and chastity. She roams the forests with her band of nymphs, fiercely protecting the wild.",
    facts: [
      "Artemis helped her mother Leto deliver her twin brother Apollo.",
      "She turned Actaeon into a stag for seeing her bathe.",
      "The cypress tree and deer are sacred to her."
    ],
    symbol: "Bow",
    alignment: "right"
  },
  {
    id: "hephaestus",
    name: "Hephaestus",
    title: "The Smith",
    description: "God of fire, metalworking, and crafts. The only ugly god, he forged the magnificent weapons and palaces of the Olympians.",
    facts: [
      "Hephaestus was cast off Mount Olympus by Hera due to his deformity.",
      "He created Pandora, the first woman.",
      "His workshop was believed to be under a volcano."
    ],
    symbol: "Anvil",
    alignment: "left"
  },
  {
    id: "aphrodite",
    name: "Aphrodite",
    title: "Goddess of Love",
    description: "Born from the sea foam, she represents beauty, love, and desire. Her influence sparked the Trojan War, the catalyst for Odysseus' long journey.",
    facts: [
      "She won the Golden Apple of Discord, leading to the Trojan War.",
      "She is married to Hephaestus but had a famous affair with Ares.",
      "Her chariot is drawn by doves."
    ],
    symbol: "Dove",
    alignment: "right"
  },
  {
    id: "dionysus",
    name: "Dionysus",
    title: "God of Wine",
    description: "God of the vine, grape-harvest, winemaking, and ecstasy. He represents the wild, irrational side of nature and the human psyche.",
    facts: [
      "Dionysus was born from the thigh of Zeus.",
      "He wandered the world spreading the culture of the vine.",
      "His followers, the Maenads, were known for their frenzied rituals."
    ],
    symbol: "Grapes",
    alignment: "left"
  }
];
