const characters = [
    { id: 1, hero: "Invoker", voiceline: "You dare fight me?" },
    { id: 2, hero: "Juggernaut", voiceline: "A fine idea!" },
    { id: 3, hero: "Crystal Maiden", voiceline: "Swift as the wolves of Icewrack!" },
    { id: 4, hero: "Axe", voiceline: "Axe is all the reinforcement this army needs!" },
    { id: 5, hero: "Pudge", voiceline: "Get over here!" },
    // { hero: "Lina", voiceline: "Fire away!" },
    // { hero: "Sven", voiceline: "Good idea!" },
    // { hero: "Drow Ranger", voiceline: "Silent is the grave." },
    // { hero: "Shadow Fiend", voiceline: "Fear my presence." },
    // { hero: "Mirana", voiceline: "Since you command it." },
    // { hero: "Abaddon", voiceline: "All must be cast back into the crucible." },
    // { hero: "Alchemist", voiceline: "The enemy's middle tower has fallen!" },
    // { hero: "Ancient Apparition", voiceline: "You will know not to cross me." },
    // { hero: "Anti-Mage", voiceline: "Magic shall not prevail!" },
    // { hero: "Arc Warden", voiceline: "You are a means to an end." },
    // { hero: "Bane", voiceline: "Sleep, my sweet child." },
    // { hero: "Batrider", voiceline: "Hell yeah!" },
    // { hero: "Beastmaster", voiceline: "Roar!" },
    // { hero: "Bloodseeker", voiceline: "Your blood is mine!" },
    // { hero: "Bounty Hunter", voiceline: "I'll find them." },
    // { hero: "Brewmaster", voiceline: "Drink it up!" },
    // { hero: "Bristleback", voiceline: "Here we go!" },
    // { hero: "Broodmother", voiceline: "My brood grows!" },
    // { hero: "Centaur Warrunner", voiceline: "Hoo-ha!" },
    // { hero: "Chaos Knight", voiceline: "The chaos comes!" },
    // { hero: "Chen", voiceline: "For the greater good!" },
    // { hero: "Clinkz", voiceline: "None quicker!" },
    // { hero: "Clockwerk", voiceline: "The time has come." },
    // { hero: "Dark Seer", voiceline: "In preparation." },
    // { hero: "Dark Willow", voiceline: "Let's have some fun!" },
    // { hero: "Dazzle", voiceline: "Shadows come!" },
    // { hero: "Death Prophet", voiceline: "Death follows me." },
    // { hero: "Disruptor", voiceline: "Thunder rolls!" },
    // { hero: "Doom", voiceline: "Hell awaits!" },
    // { hero: "Dragon Knight", voiceline: "The dragon comes for war." },
    // { hero: "Earth Spirit", voiceline: "Stone forms at my will." },
    // { hero: "Earthshaker", voiceline: "Let the earth quake!" },
    // { hero: "Elder Titan", voiceline: "The earth trembles." },
    // { hero: "Ember Spirit", voiceline: "Fear not the flame." },
    // { hero: "Enchantress", voiceline: "Sprink!" },
    // { hero: "Enigma", voiceline: "None can resist the pull of the void." },
    // { hero: "Faceless Void", voiceline: "Time is the cruelest cut." },
    // { hero: "Grimstroke", voiceline: "Stroke of fate!" },
    // { hero: "Gyrocopter", voiceline: "Rattle and roll!" },
    // { hero: "Huskar", voiceline: "For the ancestors!" },
    // { hero: "Invoker", voiceline: "You dare fight me?" },
    // { hero: "Io", voiceline: "..." },
    // { hero: "Jakiro", voiceline: "Ice and fire!" },
    // { hero: "Juggernaut", voiceline: "A fine idea!" },
    // { hero: "Keeper of the Light", voiceline: "Shine on!" },
    // { hero: "Kunkka", voiceline: "Full sail ahead!" },
    // { hero: "Legion Commander", voiceline: "On my way!" },
    // { hero: "Leshrac", voiceline: "Despair!" },
    // { hero: "Lich", voiceline: "Feel the chill!" },
    // { hero: "Lifestealer", voiceline: "Hunger!" },
    // { hero: "Lina", voiceline: "Fire away!" },
    // { hero: "Lion", voiceline: "By the power of Goroth!" },
    // { hero: "Lone Druid", voiceline: "For the trees!" },
    // { hero: "Luna", voiceline: "The moon smiles upon me!" },
    // { hero: "Lycan", voiceline: "Wolf at your door!" },
    // { hero: "Magnus", voiceline: "Strength is mine!" },
    // { hero: "Mars", voiceline: "To battle!" },
    // { hero: "Medusa", voiceline: "Gaze upon Medusa's beauty!" },
    // { hero: "Meepo", voiceline: "It's all me!" },
    // { hero: "Mirana", voiceline: "Since you command it." },
    // { hero: "Monkey King", voiceline: "Let's get a move on!" },
    // { hero: "Morphling", voiceline: "Water's in the bag!" },
    // { hero: "Naga Siren", voiceline: "The sea calls." },
    // { hero: "Nature's Prophet", voiceline: "Green is good!" },
    // { hero: "Necrophos", voiceline: "I bring death!" },
    // { hero: "Night Stalker", voiceline: "Darkness stalks!" },
    // { hero: "Nyx Assassin", voiceline: "Nyx, Nyx!" },
    // { hero: "Ogre Magi", voiceline: "Ogre smash!" },
    // { hero: "Omniknight", voiceline: "Fear not my friends." },
    // { hero: "Oracle", voiceline: "Your fate is sealed." },
    // { hero: "Outworld Devourer", voiceline: "Bow before me!" },
    // { hero: "Pangolier", voiceline: "Have at them!" },
    // { hero: "Phantom Assassin", voiceline: "They'll never find your grave." },
    // { hero: "Phantom Lancer", voiceline: "We march!" },
    // { hero: "Phoenix", voiceline: "Burn bright!" },
    // { hero: "Puck", voiceline: "Don't run off!" },
    // { hero: "Pudge", voiceline: "Get over here!" },
    // { hero: "Pugna", voiceline: "Nether reaches out!" },
    // { hero: "Queen of Pain", voiceline: "Oh yes!" },
    // { hero: "Razor", voiceline: "Static charge!" },
    // { hero: "Riki", voiceline: "Silent as smoke." },
    // { hero: "Rubick", voiceline: "Such fascinating energies!" },
    // { hero: "Sand King", voiceline: "Sandstorm!" },
    // { hero: "Shadow Demon", voiceline: "Your soul will be crushed." },
    // { hero: "Shadow Fiend", voiceline: "Fear my presence." },
    // { hero: "Shadow Shaman", voiceline: "You are bound!" },
    // { hero: "Silencer", voiceline: "Quiet as a whisper." },
    // { hero: "Skywrath Mage", voiceline: "To a crisp!" },
    // { hero: "Slardar", voiceline: "Guard the deeps." },
    // { hero: "Slark", voiceline: "I'll sneak past." },
    // { hero: "Sniper", voiceline: "Boom! Headshot!" },
    // { hero: "Spectre", voiceline: "Haunting." },
    // { hero: "Spirit Breaker", voiceline: "Charge!" },
    // { hero: "Storm Spirit", voiceline: "Let's have a storm!" },
    // { hero: "Sven", voiceline: "Good idea!" },
    // { hero: "Techies", voiceline: "Bombs away!" },
    // { hero: "Templar Assassin", voiceline: "The truth is near." },
    // { hero: "Terrorblade", voiceline: "Terror comes for you!" },
    // { hero: "Tidehunter", voiceline: "Smash them!" },
    // { hero: "Timbersaw", voiceline: "Chop chop!" },
    // { hero: "Tinker", voiceline: "Think fast!" },
    // { hero: "Tiny", voiceline: "Rock solid!" },
    // { hero: "Treant Protector", voiceline: "Protect the green!" },
    // { hero: "Troll Warlord", voiceline: "Trolls rule!" },
    // { hero: "Tusk", voiceline: "Punch out!" },
    // { hero: "Underlord", voiceline: "Dark Rift!" },
    // { hero: "Undying", voiceline: "The dead hunger." },
    // { hero: "Ursa", voiceline: "For the forest!" },
    // { hero: "Vengeful Spirit", voiceline: "Vengeance is mine!" },
    // { hero: "Venomancer", voiceline: "Venomous!" },
    // { hero: "Viper", voiceline: "Poison burns." },
    // { hero: "Visage", voiceline: "From the grave." },
    // { hero: "Void Spirit", voiceline: "I walk the hidden path." },
    // { hero: "Warlock", voiceline: "By my demon staff!" },
    // { hero: "Weaver", voiceline: "Time to weave." },
    // { hero: "Windranger", voiceline: "Wind at my back." },
    // { hero: "Winter Wyvern", voiceline: "Feel the chill." },
    // { hero: "Witch Doctor", voiceline: "Voodoo restoration!" },
    // { hero: "Wraith King", voiceline: "Bow before your king!" },
    // { hero: "Zeus", voiceline: "Lightning strike!" }
];

export default characters;
