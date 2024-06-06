const runes = [
    { 
        name: 'El', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034289.jpg',
        clvl: 11,
        armourShieldBonus: "+15 Defense, +1 Light Radius",
        weaponBonus: "+50 Attack Rating, +1 Light Radius",
        cubeRecipe: "-" 
    },
    { 
        name: 'Eld', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034290.jpg',
        clvl: 11,
        armourShieldBonus: "Armour: Lowers stamina drain by 15%, Shield: +7% Block",
        weaponBonus: "+75 Damage vs. Undead, +50 Attack Rating vs. Undead",
        cubeRecipe: "3 x El" 
    },
    { 
        name: 'Tir', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034281.jpg', 
        clvl: 13,
        armourShieldBonus: "+2 Mana per Kill",
        weaponBonus: "+2 Mana per Kill",
        cubeRecipe: "3 x Eld" 
    },
    { 
        name: 'Nef', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034271.jpg', 
        clvl: 13,
        armourShieldBonus: "+30 Defense vs. Missile",
        weaponBonus: "Knockback",
        cubeRecipe: "3 x Tir" 
    },
    { 
        name: 'Eth', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034291.jpg', 
        clvl: 15,
        armourShieldBonus: "Regenerate Mana 15%",
        weaponBonus: "-25 Target DEF",
        cubeRecipe: "3 x Nef" 
    },
    { 
        name: 'Ith', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034264.jpg', 
        clvl: 15,
        armourShieldBonus: "15% damage taken goes to mana",
        weaponBonus: "+9 Maximum Damage",
        cubeRecipe: "3 x Eth"
    },
    { 
        name: 'Tal',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034279.jpg',
        clvl: 17,
        armourShieldBonus: "Armour: +30 Poison Resistance, Shield: +35% Poison Resistance",
        weaponBonus: "+75 Poison damage/5 sec",
        cubeRecipe: "3 x Ith"
    },
    { 
        name: 'Ral', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034275.jpg',
        clvl: 19,
        armourShieldBonus: "Armour: +30 Fire Resistance, Shield: +35% Fire Resistance",
        weaponBonus: "+5-30 Fire Damage",
        cubeRecipe: "3 x Tal"
    },
    { 
        name: 'Ort', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034273.jpg',
        clvl: 21,
        armourShieldBonus: "Armour: +30 Lightning Resistance, Shield: +35% Lightning Resistance",
        weaponBonus: "+1-50 Lightning Damage",
        cubeRecipe: "3 x Ral"
    },
    { 
        name: 'Thul', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034280.jpg',
        clvl: 23,
        armourShieldBonus: "Armour: +30 Cold Resistance, Shield: +35% Cold Resistance",
        weaponBonus: "+3-14 Cold damage - duration 3 sec",
        cubeRecipe: "3 x Ort"
    },
    { 
        name: 'Amn', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034285.jpg',
        clvl: 25,
        armourShieldBonus: "Attacker takes 14 damage",
        weaponBonus: "7% Life stolen per hit",
        cubeRecipe: "3 x Thul, 1 x Chipped Topaz"
    },
    { 
        name: 'Sol', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034277.jpg',
        clvl: 27,
        armourShieldBonus: "-7 damage taken",
        weaponBonus: "+9 Minimum damage",
        cubeRecipe: "3 x Amn, 1 x Chipped Amethyst"
    },
    { 
        name: 'Shael', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034276.jpg',
        clvl: 29,
        armourShieldBonus: "Armour: 20% Faster Hit Recovery, Shield: 20% Faster Block Rate",
        weaponBonus: "20% Increased Attack Speed",
        cubeRecipe: "3 x Sol, 1 x Chipped Sapphire"
    },
    { 
        name: 'Dol', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034288.jpg',
        clvl: 31,
        armourShieldBonus: "+7 Replenish Life",
        weaponBonus: "25% Chance Hit Causes Monster to Flee",
        cubeRecipe: "3 x Shael, 1 x Chipped Ruby"
    },
    { 
        name: 'Hel', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034294.jpg',
        clvl: 33,
        armourShieldBonus: "-15% Requirements",
        weaponBonus: "-20% Requirements",
        cubeRecipe: "3 x Dol, 1 x Chipped Emerald"
    },
    { 
        name: 'Io',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034295.jpg',
        clvl: 35,
        armourShieldBonus: "+10 Vitality",
        weaponBonus: "+10 Vitality",
        cubeRecipe: "3 x Hel, 1 x Chipped Diamond"
    },
    { 
        name: 'Lum',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034269.jpg',
        clvl: 37,
        armourShieldBonus: "+10 Energy",
        weaponBonus: "+10 Energy",
        cubeRecipe: "3 x Io, 1 x Flawed Topaz"
    },
    { 
        name: 'Ko',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034266.jpg',
        clvl: 39,
        armourShieldBonus: "+10 Dexterity",
        weaponBonus: "+10 Dexterity",
        cubeRecipe: "3 x Lum, 1 x Flawed Amethyst"
    },
    { 
        name: 'Fal', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034292.jpg',
        clvl: 41,
        armourShieldBonus: "+10 Strength",
        weaponBonus: "+10 Strength",
        cubeRecipe: "3 x Ko, 1 x Flawed Sapphire"
    },
    { 
        name: 'Lem',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034267.jpg',
        clvl: 43,
        armourShieldBonus: "+50% Extra Gold from Monsters",
        weaponBonus: "+75 Extra Gold from Monsters",
        cubeRecipe: "3 x Ko, 1 x Flawed Ruby"
    },
    { 
        name: 'Pul',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034274.jpg',
        clvl: 45,
        armourShieldBonus: "+30% Defense",
        weaponBonus: "+75% Damage to Demons, +100 Attack Rating against Demons",
        cubeRecipe: "3 x Lem, 1 x Flawed Emerald"
    },
    { 
        name: 'Um',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034282.jpg',
        clvl: 47,
        armourShieldBonus: "Armour: +15% Resist All, Shield: +22 Resist All",
        weaponBonus: "25% Chance of Open Wounds",
        cubeRecipe: "2 x Pul, 1 x Flawed Diamond"
    },
    { 
        name: 'Mal',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034270.jpg',
        clvl: 49,
        armourShieldBonus: "Reduce Magic Damage by 7",
        weaponBonus: "Prevent Monster Healing",
        cubeRecipe: "2 x Um, 1 x Topaz"
    },
    { 
        name: 'Ist',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034296.jpg',
        clvl: 51,
        armourShieldBonus: "+25% Better Chance of Finding Magical Items",
        weaponBonus: "+30% Better Chance of Finding Magical Items",
        cubeRecipe: "2 x Mal, 1 x Amethyst"
    },
    { 
        name: 'Gul', 
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034293.jpg',
        clvl: 53,
        armourShieldBonus: "+5% to Max Poison Resist",
        weaponBonus: "+20% Attack Rating",
        cubeRecipe: "2 x Ist, 1 x Sapphire"
    },
    { 
        name: 'Vex',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034283.jpg',
        clvl: 55,
        armourShieldBonus: "+5% to Max Fire Resist",
        weaponBonus: "7% Mana Leech",
        cubeRecipe: "2 x Gul, 1 x Ruby"
    },
    { 
        name: 'Ohm',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034272.jpg',
        clvl: 57,
        armourShieldBonus: "+5% to Max Cold Resist",
        weaponBonus: "+50% Damage",
        cubeRecipe: "2 x Vex, 1 x Emerald"
    },
    { 
        name: 'Lo',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034268.jpg',
        clvl: 59,
        armourShieldBonus: "+5% to Max Lightning Resist",
        weaponBonus: "20% Chance of Deadly Strike",
        cubeRecipe: "2 x Ohm, 1 x Diamond"
    },
    { 
        name: 'Sur',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034278.jpg',
        clvl: 61,
        armourShieldBonus: "Armour: +5% total Mana, Shield: +50 Mana",
        weaponBonus: "20% Chance on Hit to Blind Target",
        cubeRecipe: "2 x Lo, 1 x Flawless Topaz"
    },
    { 
        name: 'Ber',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034286.jpg',
        clvl: 63,
        armourShieldBonus: "Damage Reduced by 8%",
        weaponBonus: "20% Chance of Crushing Blow",
        cubeRecipe: "2 x Sur, 1 x Flawless Amethyst"
    },
    { 
        name: 'Jah',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034265.jpg',
        clvl: 65,
        armourShieldBonus: "Armour: +5% total Hit Points, Shield: +50 Hit Points",
        weaponBonus: "Ignores Target Defense",
        cubeRecipe: "2 x Ber, 1 x Flawless Sapphire"
    },
    { 
        name: 'Cham',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034287.jpg',
        clvl: 67,
        armourShieldBonus: "Cannot be Frozen",
        weaponBonus: "32% Chance of Hit Freezing Target for 3 seconds",
        cubeRecipe: "2 x Jah, 1 x Flawless Ruby"
    },
    { 
        name: 'Zod',
        img: 'https://wow.zamimg.com/uploads/screenshots/normal/1034284.jpg',
        clvl: 69,
        armourShieldBonus: "Indestructible",
        weaponBonus: "Indestructible",
        cubeRecipe: "2 x Cham, 1 x Flawless Emerald"
    }
];

const runewords = [
    {
        name: "Bulwark",
        runes: ["Shael", "Io", "Sol"],
        items: ["Helms"],
        level: 35,
        ladderOnly: true,
        properties: [
            "+20% Faster Hit Recovery",
            "+4-6% Life stolen per hit",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Replenish Life +30",
            "Damage Reduced by 7",
            "Physical Damage Received Reduced by 10-15%"
        ]
    },
    {
        name: "Hustle",
        runes: ["Shael", "Ko", "Eld"],
        items: ["Weapons", "Armour"],
        level: 39,
        ladderOnly: true,
        properties: [
            "Weapons:",
            "5% Chance to cast level 1 Burst of Speed on striking",
            "Level 1 Fanaticism Aura When Equipped",
            "+30% Increased Attack Speed",
            "+180-200% Enhanced Damage",
            "+75% Damage to Undead",
            "+50 to Attack Rating against Undead",
            "+10 to Dexterity",
            "",
            "Armour:",
            "+65% Faster Run/Walk",
            "+40% Increased Attack Speed",
            "+20% Faster Hit Recovery",
            "+6 to Evade",
            "+10 to Dexterity",
            "50% Slower Stamina Drain",
            "+All Resistances +10"
        ]
    },
    {
        name: "Chains of Honor",
        runes: ["Dol", "Um", "Ber", "Ist"],
        items: ["Armour"],
        level: 63,
        ladderOnly: false,
        properties: [
            "+2 To All Skills",
            "+200% Damage To Demons",
            "+100% Damage To Undead",
            "8% Life Stolen Per Hit",
            "+70% Enhanced Defense",
            "+20 To Strength",
            "Replenish Life +7",
            "All Resistances +65",
            "Damage Reduced By 8%",
            "25% Better Chance of Getting Magic Items"
        ]
    },
    {
        name: "Exile",
        runes: ["Vex", "Ohm", "Ist", "Dol"],
        items: ["Paladin Shields"],
        level: 57,
        ladderOnly: false,
        properties: [
            "15% Chance To Cast Level 5 Life Tap On Striking",
            "Level 13-16 Defiance Aura When Equipped",
            "+2 To Offensive Auras (Paladin Only)",
            "+30% Faster Block Rate",
            "Freezes Target",
            "+220-260% Enhanced Defense",
            "Replenish Life +7",
            "+5% To Maximum Cold Resist",
            "+5% To Maximum Fire Resist",
            "25% Better Chance of Getting Magic Items",
            "Repairs 1 Durability in 4 Seconds"
        ]
    },
    {
        name: "Oath",
        runes: ["Shael", "Pul", "Mal", "Lum"],
        items: ["Swords", "Axes", "Maces"],
        level: 49,
        ladderOnly: false,
        properties: [
            "30% Chance To Cast Level 20 Bone Spirit On Striking",
            "Indestructible",
            "+50% Increased Attack Speed",
            "+210-340% Enhanced Damage",
            "+75% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "Prevent Monster Heal",
            "+10 To Energy",
            "+10-15 Magic Absorb",
            "Level 16 Heart of Wolverine (20 Charges)",
            "Level 17 Iron Golem (14 Charges)"
        ]
    },
    {
        name: "Death",
        runes: ["Hel", "El", "Vex", "Ort", "Gul"],
        items: ["Swords", "Axes"],
        level: 55,
        ladderOnly: false,
        properties: [
            "100% Chance To Cast Level 44 Chain Lightning When You Die",
            "25% Chance To Cast Level 18 Glacial Spike On Attack",
            "Indestructible",
            "+300-385% Enhanced Damage",
            "20% Bonus To Attack Rating",
            "+50 To Attack Rating",
            "Adds 1-50 Lightning Damage",
            "7% Mana Stolen Per Hit",
            "50% Chance of Crushing Blow",
            "+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)",
            "+1 To Light RadiusLevel 17 Iron Golem (14 Charges)",
            "Level 22 Blood Golem (15 Charges)",
            "Requirements -20%"
        ]
    },
    {
        name: "Obedience",
        runes: ["Hel", "Ko", "Thul", "Eth", "Fal"],
        items: ["Polearms", "Spears"],
        level: 41,
        ladderOnly: false,
        properties: [
            "30% Chance To Cast Level 21 Enchant When You Kill An Enemy",
            "40% Faster Hit Recovery",
            "+370% Enhanced Damage",
            "-25% Target Defense",
            "Adds 3-14 Cold Damage 3 Second Duration",
            "-25% To Enemy Fire Resistance",
            "40% Chance of Crushing Blow",
            "+200-300 Defense",
            "+10 To Strength",
            "+10 To Dexterity",
            "All Resistances +20-30",
            "Requirements -20%"
        ]
    },
    {
        name: "Call To Arms",
        runes: ["Amn", "Ral", "Mal", "Ist", "Ohm"],
        items: ["Weapons"],
        level: 57,
        ladderOnly: false,
        properties: [
            "+1 To All Skills",
            "+40% Increased Attack Speed",
            "+250-290% Enhanced Damage",
            "Adds 5-30 Fire Damage",
            "7% Life Stolen Per Hit",
            "+2-6 To Battle Command",
            "+1-6 To Battle Orders",
            "+1-4 To Battle Cry",
            "Prevent Monster Heal",
            "Replenish Life +12",
            "30% Better Chance of Getting Magic Items"
        ]
    },
    {
        name: "Wisdom",
        runes: ["Pul", "Ith", "Eld"],
        items: ["Helms"],
        level: 45,
        ladderOnly: false,
        properties: [
            "+33% Piercing Attack",
            "+15-25% Bonus to Attack Rating",
            "4-8% Mana Stolen Per Hit",
            "+30% Enhanced Defense",
            "+10 Energy",
            "15% Slower Stamina Drain",
            "Cannot Be Frozen",
            "+5 Mana After Each Kill",
            "15% Damage Taken Goes to Mana"
        ]
    },
    {
        name: "Spirit",
        runes: ["Tal", "Thul", "Ort", "Amn"],
        items: ["Swords", "Shields"],
        level: 25,
        ladderOnly: false,
        properties: [
            "Swords:",
            "+2 To All Skills",
            "+25-35% Faster Cast Rate",
            "+55% Faster Hit Recovery",
            "Adds 1-50 Lightning Damage",
            "Adds 3-14 Cold Damage 3 Second Duration",
            "+75 Poison Damage Over 5 Seconds",
            "7% Life Stolen Per Hit",
            "+250 Defense Vs. Missile",
            "+22 To Vitality",
            "+89-112 To Mana",
            "+3-8 Magic Absorb",
            "",
            "Shields:",
            "+2 To All Skills",
            "+25-35% Faster Cast Rate",
            "+55% Faster Hit Recovery",
            "+250 Defense Vs. Missile",
            "+22 To Vitality",
            "+89-112 To Mana",
            "Cold Resist +35%",
            "Lightning Resist +35%",
            "Poison Resist +35%",
            "+3-8 Magic Absorb",
            "Attacker Takes Damage of 14"
        ]
    },
    {
        name: "Memory",
        runes: ["Lum", "Io", "Sol", "Eth"],
        items: ["Staves"],
        level: 37,
        ladderOnly: false,
        properties: [
            "+3 to Sorceress Skill Levels",
            "33% Faster Cast Rate",
            "Increase Maximum Mana 20%",
            "+3 Energy Shield (Sorceress Only)",
            "+2 Static Field (Sorceress Only)",
            "+10 To Energy",
            "+10 To Vitality",
            "+9 To Minimum Damage",
            "-25% Target Defense",
            "Magic Damage Reduced By 7",
            "+50% Enhanced Defense"
        ]
    },
    {
        name: "Bone",
        runes: ["Sol", "Um", "Um"],
        items: ["Armour"],
        level: 47,
        ladderOnly: false,
        properties: [
            "15% Chance To Cast level 10 Bone Armor When Struck",
            "15% Chance To Cast level 10 Bone Spear On Striking",
            "+2 To Necromancer Skill Levels",
            "+100-150 To Mana",
            "All Resistances +30",
            "Damage Reduced By 7"
        ]
    },
    {
        name: "Ancient's Pledge",
        runes: ["Ral", "Ort", "Tal"],
        items: ["Shields"],
        level: 21,
        ladderOnly: false,
        properties: [
            "+50% Enhanced Defense",
            "Cold Resist +43%",
            "Lightning Resist +48%",
            "Fire Resist +48%",
            "Poison Resist +48%",
            "10% Damage Taken Goes To Mana"
        ]
    },
    {
        name: "Infinity",
        runes: ["Ber", "Mal", "Ber", "Ist"],
        items: ["Polearms","Spears"],
        level: 63,
        ladderOnly: false,
        properties: [
            "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy",
            "Level 12 Conviction Aura When Equipped",
            "+35% Faster Run/Walk",
            "+255-325% Enhanced Damage",
            "-(45-55)% To Enemy Lightning Resistance",
            "40% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "0.5-49.5 To Vitality (Based on Character Level)",
            "30% Better Chance of Getting Magic Items",
            "Level 21 Cyclone Armor (30 Charges)"
        ]
    },
    {
        name: "Dream",
        runes: ["Io", "Jah", "Pul"],
        items: ["Helms", "Shields"],
        level: 65,
        ladderOnly: false,
        properties: [
            "10% Chance To Cast Level 15 Confuse When Struck",
            "Level 15 Holy Shock Aura When Equipped",
            "+20-30% Faster Hit Recovery",
            "+30% Enhanced Defense",
            "+150-220 Defense",
            "+10 To Vitality",
            "Increase Maximum Life 5% (Helms Only)",
            "+50 To Life (Shields Only)",
            "+0.625-61.875 To Mana (Based On Character Level)",
            "All Resistances +5-20",
            "12-25% Better Chance of Getting Magic Items"
        ]
    },
    {
        name: "Principle",
        runes: ["Ral", "Gul", "Eld"],
        items: ["Armour"],
        level: 53,
        ladderOnly: false,
        properties: [
            "100% Chance To Cast Level 5 Holy Bolt On Striking",
            "+2 To Paladin Skill Levels",
            "+50% Damage to Undead",
            "+100-150 To Life",
            "15% Slower Stamina Drain",
            "+5% To Maximum Poison Resist",
            "Fire Resist +30%"
        ]
    },
    {
        name: "Metamorphosis",
        runes: ["Io", "Cham", "Fal"],
        items: ["Helms"],
        level: 67,
        ladderOnly: true,
        properties: [
            "Werewolf strikes grant Mark for 180 seconds",
            "Mark of the Wolf:",
            "+30% Bonus to Attack Rating",
            "Increase Maximum Life 40%",
            "",
            "Werebear strikes grant Mark for 180 seconds",
            "Mark of the Bear:",
            "+25% Attack Speed",
            "Physical Damage Received Reduced by 20%",
            "",
            "+5 to Shape Shifting Skills (Druid only)",
            "+25% Chance of Crushing Blow",
            "+50-80% Enhanced Defense",
            "+10 to Strength",
            "+10 to Vitality",
            "All Resistances +10",
            "Cannot be Frozen"
        ]
    },
    {
        name: "Brand",
        runes: ["Jah", "Lo", "Mal", "Gul"],
        items: ["Missile Weapons"],
        level: 65,
        ladderOnly: false,
        properties: [
            "35% Chance To Cast Level 14 Amplify Damage When Struck",
            "100% Chance To Cast Level 18 Bone Spear On Striking",
            "+260-340% Enhanced Damage",
            "Ignores Target's Defense",
            "20% Bonus to Attack Rating",
            "+280-330% Damage To Demons",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "Knockback",
            "Fires Explosive Arrows or Bolts [level 15]"
        ]
    },
    {
        name: "Insight",
        runes: ["Ral", "Tir", "Tal", "Sol"],
        items: ["Polearms", "Staves", "Missile Weapons"],
        level: 27,
        ladderOnly: false,
        properties: [
            "Level 12-17 Meditation Aura When Equipped",
            "+35% Faster Cast Rate",
            "+200-260% Enhanced Damage",
            "+9 To Minimum Damage",
            "180-250% Bonus to Attack Rating",
            "Adds 5-30 Fire Damage",
            "+75 Poison Damage Over 5 Seconds",
            "+1-6 To Critical Strike",
            "+5 To All Attributes",
            "+2 To Mana After Each Kill",
            "23% Better Chance of Getting Magic Items"
        ]
    },
    {
        name: "Peace",
        runes: ["Shael", "Thul", "Amn"],
        items: ["Armour"],
        level: 29,
        ladderOnly: false,
        properties: [
            "4% Chance To Cast Level 5 Slow Missiles When Struck",
            "2% Chance To Cast level 15 Valkyrie On Striking",
            "+2 To Amazon Skill Levels",
            "+20% Faster Hit Recovery",
            "+2 To Critical Strike",
            "Cold Resist +30%",
            "Attacker Takes Damage of 14"
        ]
    },
    {
        name: "Kingslayer",
        runes: ["Mal", "Um", "Gul", "Fal"],
        items: ["Swords", "Axes"],
        level: 53,
        ladderOnly: false,
        properties: [
            "+30% Increased Attack Speed",
            "+230-270% Enhanced Damage",
            "-25% Target Defense",
            "20% Bonus To Attack Rating",
            "33% Chance of Crushing Blow",
            "50% Chance of Open Wounds",
            "+1 To Vengeance",
            "Prevent Monster Heal",
            "+10 To Strength",
            "40% Extra Gold From Monsters"
        ]
    },
    {
        name: "Black",
        runes: ["Thul", "Io", "Nef"],
        items: ["Clubs", "Hammers", "Maces"],
        level: 53,
        ladderOnly: false,
        properties: [
            "+120% Enhanced Damage",
            "40% Chance of Crushing Blow",
            "+200 to Attack Rating",
            "Adds 3-14 Cold Damage for 3 seconds",
            "+10 to Vitality",
            "15% increased Attack Speed",
            "Magic Damage Reduced by 2",
            "Level 4 Corpse Explosion (12 charges)",
            "Knockback"
        ]
    },
    {
        name: "White",
        runes: ["Dol", "Io"],
        items: ["Wand"],
        level: 35,
        ladderOnly: false,
        properties: [
            "Hit Causes Monster To Flee 25%",
            "+10 To Vitality",
            "+3 To Poison and Bone Spells (Necromancer Only)",
            "+3 To Bone Armor (Necromancer Only)",
            "+2 To Bone Spear (Necromancer Only)",
            "+4 To Skeleton Mastery (Necromancer Only)",
            "Magic Damage Reduced By 4",
            "20% Faster Cast Rate",
            "+13 To Mana"
        ]
    },
    {
        name: "Malice",
        runes: ["Ith", "El", "Eth"],
        items: ["Melee Weapons"],
        level: 15,
        ladderOnly: false,
        properties: [
            "+33% Enhanced Damage",
            "+9 To Maximum Damage",
            "100% Chance Of Open Wounds",
            "-25% Target Defense",
            "-100 To Monster Defense per Hit",
            "Prevent Monster Heal",
            "+50 To Attack Rating",
            "Drain Life -5",
        ]
    },
    {
        name: "Treachery",
        runes: ["Shael", "Thul", "Lem"],
        items: ["Armour"],
        level: 43,
        ladderOnly: false,
        properties: [
            "5% Chance To Cast Level 15 Fade When Struck",
            "25% Chance To Cast level 15 Venom On Striking",
            "+2 To Assassin Skill Levels",
            "+45% Increased Attack Speed",
            "+20% Faster Hit Recovery",
            "Cold Resist +30%",
            "50% Extra Gold From Monsters",
        ]
    },
    {
        name: "Obsession",
        runes: ["Zod", "Ist", "Lem", "Lum", "Io", "Nef"],
        items: ["Staves"],
        level: 69,
        ladderOnly: false,
        properties: [
            "Indestructible",
            "24% Chance to cast level 10 Weaken when struck",
            "+4 To All Skills",
            "+65% Faster Cast Rate",
            "+60% Faster Hit Recovery",
            "Knockback",
            "+10 To Vitality",
            "+10 To Energy",
            "Increase Maximum Life 15-25%",
            "Regenerate Mana 15-30%",
            "All Resistances +60-70",
            "75% Extra Gold from Monsters",
            "30% Better Chance of Getting Magic Items"
        ]
    },
    {
        name: "Strength",
        runes: ["Amn", "Tir"],
        items: ["Melee Weapons"],
        level: 25,
        ladderOnly: false,
        properties: [
            "35% Enhanced Damage",
            "25% Chance Of Crushing Blow",
            "7% Life Stolen Per Hit",
            "+2 To Mana After Each Kill",
            "+20 To Strength",
            "+10 To Vitality"
        ]
    },
    {
        name: "Beast",
        runes: ["Ber", "Tir", "Um", "Mal", "Lum"],
        items: ["Axes", "Scepters", "Hammers"],
        level: 63,
        ladderOnly: false,
        properties: [
            "Level 9 Fanaticism Aura When Equipped",
            "+40% Increased Attack Speed",
            "+240-270% Enhanced Damage",
            "20% Chance of Crushing Blow",
            "25% Chance of Open Wounds",
            "+3 To Werebear",
            "+3 To Lycanthropy",
            "Prevent Monster Heal",
            "+25-40 To Strength",
            "+10 To Energy",
            "+2 To Mana After Each Kill",
            "Level 13 Summon Grizzly (5 Charges)"
        ]
    },
    {
        name: "Breath of the Dying",
        runes: ["Vex", "Hel", "El", "Eld", "Zod", "Eth"],
        items: ["Weapons"],
        level: 69,
        ladderOnly: false,
        properties: [
            "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
            "Indestructible",
            "+60% Increased Attack Speed",
            "+350-400% Enhanced Damage",
            "+200% Damage To Undead",
            "-25% Target Defense",
            "+50 To Attack Rating",
            "+50 To Attack Rating Against Undead",
            "7% Mana Stolen per Hit",
            "12-15% Life Stolen per Hit",
            "Prevent Monster Heal",
            "+30 To All Attributes",
            "+1 To Light Radius",
            "Requirements -20%"
        ]
    },
    {
        name: "Grief",
        runes: ["Eth", "Tir", "Lo", "Mal", "Ral"],
        items: ["Axes", "Swords"],
        level: 59,
        ladderOnly: false,
        properties: [
            "35% Chance To Cast Level 15 Venom On Striking",
            "+30-40% Increased Attack Speed",
            "Damage +340-400",
            "Ignore Target's Defense",
            "-25% Target Defense",
            "+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level)",
            "Adds 5-30 Fire Damage",
            "-20-25% To Enemy Poison Resistance",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "+2 To Mana After Each Kill",
            "+10-15 Life After Each Kill"
        ]
    },
    {
        name: "Myth",
        runes: ["Hel", "Amn", "Nef"],
        items: ["Armour"],
        level: 25,
        ladderOnly: false,
        properties: [
            "3% Chance To Cast Level 1 Howl When Struck",
            "10% Chance To Cast Level 1 Taunt On Striking",
            "+2 To Barbarian Skill Levels",
            "+30 Defense Vs. Missile",
            "Replenish Life +10",
            "Attacker Takes Damage of 14",
            "Requirements -15%"
        ]
    },
    {
        name: "Plague",
        runes: ["Cham", "Shael", "Um"],
        items: ["Swords", "Katars", "Daggers"],
        level: 67,
        ladderOnly: false,
        properties: [
            "20% Chance To Cast Level 12 Lower Resist When Struck",
            "25% Chance to Cast Level 15 Poison Nova On Striking",
            "Level 13-17 Cleansing Aura When Equipped",
            "+1-2 To All Skills",
            "+20% Increased Attack Speed",
            "+220-320% Enhanced Damage",
            "-23% To Enemy Poison Resistance",
            "+0.3% (0-29.7) Deadly Strike (Based on Character Level)",
            "+25% Chance of Open Wounds",
            "Freezes Target +3"
        ]
    },
    {
        name: "Lawbringer",
        runes: ["Amn", "Lem", "Ko"],
        items: ["Swords", "Hammers", "Scepters"],
        level: 43,
        ladderOnly: false,
        properties: [
            "20% Chance To Cast Level 15 Decrepify On Striking",
            "Level 16-18 Sanctuary Aura When Equipped",
            "-50% Target Defense",
            "Adds 150-210 Fire Damage",
            "Adds 130-180 Cold Damage",
            "7% Life Stolen Per Hit",
            "Slain Monsters Rest In Peace",
            "+200-250 Defense Vs. Missile",
            "+10 To Dexterity",
            "75% Extra Gold From Monsters"
        ]
    },
    {
        name: "Pride",
        runes: ["Cham", "Sur", "Io", "Lo"],
        items: ["Polearms", "Spears"],
        level: 67,
        ladderOnly: false,
        properties: [
            "25% Chance To Cast Level 17 Fire Wall When Struck",
            "Level 16-20 Concentration Aura When Equipped",
            "260-300% Bonus To Attack Rating",
            "+1-99% Damage To Demons (Based on Character Level)",
            "Adds 50-280 Lightning Damage",
            "20% Deadly Strike",
            "Hit Blinds Target",
            "Freezes Target +3",
            "+10 To Vitality",
            "Replenish Life +8",
            "1.875-185.625% Extra Gold From Monsters (Based on Character Level)"
        ]
    },
    {
        name: "Last Wish",
        runes: ["Jah", "Mal", "Jah", "Sur", "Jah", "Ber"],
        items: ["Swords", "Hammers", "Axes"],
        level: 65,
        ladderOnly: false,
        properties: [
            "6% Chance To Cast Level 11 Fade When Struck",
            "10% Chance To Cast Level 18 Life Tap On Striking",
            "20% Chance To Cast Level 20 Charged Bolt On Attack",
            "Level 17 Might Aura When Equipped",
            "+330-375% Enhanced Damage",
            "Ignore Target's Defense",
            "60-70% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "Hit Blinds Target",
            "Replenish Life +8",
            "+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)"
        ]
    },
    {
        name: "Edge",
        runes: ["Tir", "Tal", "Amn"],
        items: ["Missile Weapons"],
        level: 25,
        ladderOnly: false,
        properties: [
            "Level 15 Thorns Aura When Equipped",
            "+35% Increased Attack Speed",
            "+320-380% Damage To Demons",
            "+280% Damage To Undead",
            "+75 Poison Damage Over 5 Seconds",
            "7% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+5-10 To All Attributes",
            "+2 To Mana After Each Kill",
            "Reduces All Vendor Prices 15%"
        ]
    },
    {
        name: "Phoenix",
        runes: ["Vex", "Vex", "Lo", "Jah"],
        items: ["Weapons", "Shields"],
        level: 65,
        ladderOnly: false,
        properties: [
            "Weapons:",
            "100% Chance To Cast level 40 Blaze When You Level Up",
            "40% Chance To Cast Level 22 Firestorm On Striking",
            "Level 10-15 Redemption Aura When Equipped",
            "+350-400% Enhanced Damage",
            "Ignores Target's Defense",
            "14% Mana Stolen Per Hit",
            "-28% To Enemy Fire Resistance",
            "20% Deadly Strike",
            "+350-400 Defense Vs. Missile",
            "+15-21 Fire Absorb",
            "",
            "Shields:",
            "100% Chance To Cast level 40 Blaze When You Level Up",
            "40% Chance To Cast Level 22 Firestorm On Striking",
            "Level 10-15 Redemption Aura When Equipped",
            "+350-400 Defense Vs. Missile",
            "+350-400% Enhanced Damage",
            "-28% To Enemy Fire Resistance",
            "+50 To Life",
            "+5% To Maximum Lightning Resist",
            "+10% To Maximum Fire Resist",
            "+15-21 Fire Absorb"
        ]
    },
    {
        name: "Fortitude",
        runes: ["El", "Sol", "Dol", "Lo"],
        items: ["Weapons", "Armour"],
        level: 59,
        ladderOnly: false,
        properties: [
            "Weapons:",
            "20% Chance To Cast Level 15 Chilling Armor when Struck",
            "+25% Faster Cast Rate",
            "+300% Enhanced Damage",
            "+9 To Minimum Damage",
            "+50 To Attack Rating",
            "20% Deadly Strike",
            "Hit Causes Monster To Flee 25%",
            "+200% Enhanced Defense",
            "+X To Life (Based on Character Level)",
            "All Resistances +25-30",
            "12% Damage Taken Goes To Mana",
            "+1 To Light Radius",
            "",
            "Armour:",
            "20% Chance To Cast Level 15 Chilling Armor when Struck",
            "+25% Faster Cast Rate",
            "+300% Enhanced Damage",
            "+200% Enhanced Defense",
            "+15 Defense",
            "+X To Life (Based on Character Level)",
            "Replenish Life +7",
            "+5% To Maximum Lightning Resist",
            "All Resistances +25-30",
            "Damage Reduced By 7",
            "12% Damage Taken Goes To Mana",
            "+1 To Light Radius"
        ]
    },
    {
        name: "Silence",
        runes: ["Dol", "Eld", "Hel", "Ist", "Tir", "Vex"],
        items: ["Weapons"],
        level: 55,
        ladderOnly: false,
        properties: [
            "200% Enhanced Damage",
            "+75% Damage To Undead",
            "Requirements -20%",
            "20% Increased Attack Speed",
            "+50 To Attack Rating Against Undead",
            "+2 To All Skills",
            "All Resistances +75",
            "20% Faster Hit Recovery",
            "11% Mana Stolen Per Hit",
            "Hit Causes Monster To Flee 25%",
            "Hit Blinds Target +33",
            "+2 To Mana After Each Kill",
            "30% Better Chance Of Getting Magic Items"
        ]
    },
    {
        name: "Ice",
        runes: ["Amn", "Shael", "Jah", "Lo"],
        items: ["Missile Weapons"],
        level: 65,
        ladderOnly: false,
        properties: [
            "100% Chance To Cast Level 40 Blizzard When You Level Up",
            "25% Chance To Cast Level 22 Frost Nova On Striking",
            "Level 18 Holy Freeze Aura When Equipped",
            "+20% Increased Attack Speed",
            "+140-210% Enhanced Damage",
            "Ignore Target's Defense",
            "+25-30% To Cold Skill Damage",
            "-20% To Enemy Cold Resistance",
            "7% Life Stolen Per Hit",
            "20% Deadly Strike",
            "3.125-309.375% Extra Gold From Monsters (Based on Character Level)"
        ]
    },
    {
        name: "Delirium",
        runes: ["Lem", "Ist", "Io"],
        items: ["Helms"],
        level: 51,
        ladderOnly: false,
        properties: [
            "1% Chance To Cast Level 50 Delirium (morph) When Struck",
            "6% Chance To Cast Level 14 Mind Blast When Struck",
            "14% Chance To Cast Level 13 Terror When Struck",
            "11% Chance To Cast Level 18 Confuse On Striking",
            "+2 To All Skills",
            "+261 Defense",
            "+10 To Vitality",
            "50% Extra Gold From Monsters",
            "25% Better Chance of Getting Magic Items",
            "Level 17 Attract (60 Charges)"
        ]
    },
    {
        name: "Mist",
        runes: ["Cham", "Shael", "Gul", "Thul", "Ith"],
        items: ["Missile Weapons"],
        level: 67,
        ladderOnly: false,
        properties: [
            "Level 8-12 Concentration Aura When Equipped",
            "+3 To All Skills",
            "+20% Increased Attack Speed",
            "+100% Piercing Attack",
            "+325-375% Enhanced Damage",
            "+9 To Maximum Damage",
            "20% Bonus to Attack Rating",
            "Adds 3-14 Cold Damage",
            "Freezes Target +3",
            "+24 to Vitality",
            "All Resistances +40"
        ]
    },
    {
        name: "Bramble",
        runes: ["Ral", "Ohm", "Sur", "Eth"],
        items: ["Armour"],
        level: 61,
        ladderOnly: false,
        properties: [
            "Level 15-21 Thorns Aura When Equipped",
            "+50% Faster Hit Recovery",
            "+25-50% To Poison Skill Damage",
            "+300 Defense",
            "Increase Maximum Mana 5%",
            "Regenerate Mana 15%",
            "+5% To Maximum Cold Resist",
            "Fire Resist +30%",
            "Poison Resist +100%",
            "+13 Life After Each Kill",
            "Level 13 Spirit of Barbs (33 Charges)"
        ]
    },
    {
        name: "Doom",
        runes: ["Hel", "Ohm", "Um", "Lo", "Cham"],
        items: ["Axes", "Polearms", "Hammers"],
        level: 67,
        ladderOnly: false,
        properties: [
            "5% Chance To Cast Level 18 Volcano On Striking",
            "Level 12 Holy Freeze Aura When Equipped",
            "+2 To All Skills",
            "+45% Increased Attack Speed",
            "+330-370% Enhanced Damage",
            "-(40-60)% To Enemy Cold Resistance",
            "20% Deadly Strike",
            "25% Chance of Open Wounds",
            "Prevent Monster Heal",
            "Freezes Target +3",
            "Requirements -20%"
        ]
    },
    {
        name: "Holy Thunder",
        runes: ["Eth", "Ral", "Ort", "Tal"],
        items: ["Scepters"],
        level: 21,
        ladderOnly: false,
        properties: [
            "+60% Enhanced Damage",
            "-25% Target Defense",
            "Adds 5-30 Fire Damage",
            "Adds 21-110 Lightning Damage",
            "+75 Poison Damage Over 5 Seconds",
            "+10 To Maximum Damage",
            "Lightning Resistance +60%",
            "+5 To Maximum Lightning Resistance",
            "+3 To Holy Shock (Paladin Only)",
            "Level 7 Chain Lightning (60 Charges)"
        ]
    },
    {
        name: "Rhyme",
        runes: ["Shael", "Eth"],
        items: ["Shields"],
        level: 29,
        ladderOnly: false,
        properties: [
            "20% Increased Chance of Blocking",
            "40% Faster Block Rate",
            "+25 to All Resistances",
            "Regenerate Mana 15%",
            "Cannot Be Frozen",
            "50% Extra Gold From Monsters",
            "25% Better Chance Of Getting Magic Items"
        ]
    },
    {
        name: "Voice of Reason",
        runes: ["Lem", "Ko", "El", "Eld"],
        items: ["Swords", "Maces"],
        level: 43,
        ladderOnly: false,
        properties: [
            "15% Chance To Cast Level 13 Frozen Orb On Striking",
            "18% Chance To Cast Level 20 Ice Blast On Striking",
            "+50 To Attack Rating",
            "+220-350% Damage To Demons",
            "+355-375% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "Adds 100-220 Cold Damage",
            "-24% To Enemy Cold Resistance",
            "+10 To Dexterity",
            "Cannot Be Frozen",
            "75% Extra Gold From Monsters",
            "+1 To Light Radius"
        ]
    },
    {
        name: "Unbending Will",
        runes: ["Fal", "Io", "Ith", "Eld", "El", "Hel"],
        items: ["Swords"],
        level: 41,
        ladderOnly: false,
        properties: [
            "18% Chance to Cast Level 18 Taunt On Striking",
            "+3 to Combat Skills (Barbarian Only)",
            "+20-30% Increased Attack Speed",
            "+300-350% Enhanced Damage",
            "+9 to Maximum Damage",
            "+50 to Attack Rating",
            "+75% Damage To Undead",
            "+50 Attack Rating Against Undead",
            "8-10% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+10 To Strength",
            "+10 To Vitality",
            "Damage Reduced by 8",
            "+1 To Light Radius",
            "Requirements -20%"
        ]
    },
    {
        name: "Mosaic",
        runes: ["Mal", "Gul", "Amn"],
        items: ["Katars"],
        level: 53,
        ladderOnly: true,
        properties: [
            "+50% chance for finishing moves to not consume charges",
            "When a finisher is executed this way, it now refreshes the expiration timer of the stack",
            "+2 to Martial Arts (Assassin only)",
            "+20% Increased Attack Speed",
            "+200-250% Enhanced Damage",
            "+20% Bonus to Attack Rating",
            "7% Life Steal",
            "+8-15% to Cold Skill Damage",
            "+8-15% to Lightning Skill Damage",
            "+8-15% to Fire Skill Damage",
            "Prevent Monster Heal"
        ]
    },
    {
        name: "Pattern",
        runes: ["Tal", "Ort", "Thul"],
        items: ["Katars"],
        level: 23,
        ladderOnly: false,
        properties: [
            "+30% Faster Block",
            "+40-80% Enhanced Damage",
            "10% Bonus to Attack Rating",
            "Adds 17-62 Fire Damage",
            "Adds 1-50 Lightning Damage",
            "Adds 3-14 Cold Damage",
            "+75 Poison Damage Over 5 Seconds",
            "+6 Strength",
            "+6 Dexterity",
            "All Resistances +15"
        ]
    },
    {
        name: "Cure",
        runes: ["Shael", "Io", "Tal"],
        items: ["Helms"],
        level: 35,
        ladderOnly: true,
        properties: [
            "Level 1 Cleansing Aura when Equipped",
            "+20% Faster Hit Recovery",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Poison Resist +40-60%",
            "Poison Length Reduced by 50%"
        ]
    },
    {
        name: "Hearth",
        runes: ["Shael", "Io", "Thul"],
        items: ["Helms"],
        level: 35,
        ladderOnly: true,
        properties: [
            "+20% Faster Hit Recovery",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Cold Resist +40-60%",
            "Cold Absorb +10-15%",
            "Cannot be Frozen"
        ]
    },
    {
        name: "Ground",
        runes: ["Shael", "Io", "Ort"],
        items: ["Helms"],
        level: 35,
        ladderOnly: true,
        properties: [
            "+20% Faster Hit Recovery",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Lightning Resist +40-60%",
            "Lightning Absorb +10-15%"
        ]
    },
    {
        name: "Temper",
        runes: ["Shael", "Io", "Ral"],
        items: ["Helms"],
        level: 35,
        ladderOnly: true,
        properties: [
            "+20% Faster Hit Recovery",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Fire Resist +40-60%",
            "Fire Absorb +10-15%"
        ]
    },
    {
        name: "Destruction",
        runes: ["Vex", "Lo", "Ber", "Jah", "Ko"],
        items: ["Polearms", "Swords"],
        level: 65,
        ladderOnly: false,
        properties: [
            "23% Chance To Cast Level 12 Volcano On Striking",
            "5% Chance To Cast Level 23 Molten Boulder On Striking",
            "100% Chance To Cast level 45 Meteor When You Die",
            "15% Chance To Cast Level 22 Nova On Attack",
            "+350% Enhanced Damage",
            "Ignore Target's Defense",
            "Adds 100-180 Magic Damage",
            "7% Mana Stolen Per Hit",
            "20% Chance Of Crushing Blow",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "+10 To Dexterity"
        ]
    },
    {
        name: "Flickering Flame",
        runes: ["Nef", "Pul", "Vex"],
        items: ["Helms"],
        level: 55,
        ladderOnly: false,
        properties: [
            "Level 4-8 Resist Fire Aura When Equipped",
            "+3 To Fire Skills",
            "-10-15% To Enemy Fire Resistance",
            "+30% Enhanced Defense",
            "+30 Defense vs. Missile",
            "+50-75 To Mana",
            "Half Freeze Duration",
            "+5% To Maximum Fire Resist",
            "Poison Length Reduced by 50%"
        ]
    },
    {
        name: "Leaf",
        runes: ["Tir", "Ral"],
        items: ["Staves"],
        level: 19,
        ladderOnly: false,
        properties: [
            "Adds 5-30 Fire Damaged",
            "+3 To Fire Skills",
            "+3 To Fire Bolt (Sorceress Only)",
            "+3 To Inferno (Sorceress Only)",
            "+3 To Warmth (Sorceress Only)",
            "+2 To Mana After Each Kill",
            "+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)",
            "Cold Resist +33%"
        ]
    },
    {
        name: "Famine",
        runes: ["Fal", "Ohm", "Ort", "Jah"],
        items: ["Axes", "Hammers"],
        level: 65,
        ladderOnly: false,
        properties: [
            "30% Increased Attack Speed",
            "+320-370% Enhanced Damage",
            "Ignore Target's Defense",
            "Adds 180-200 Magic Damage",
            "Adds 50-200 Fire Damage",
            "Adds 51-250 Lightning Damage",
            "Adds 50-200 Cold Damage",
            "12% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+10 To Strength"
        ]
    },
    {
        name: "Harmony",
        runes: ["Tir", "Ith", "Sol", "Ko"],
        items: ["Missile Weapons"],
        level: 39,
        ladderOnly: false,
        properties: [
            "Level 10 Vigor Aura When Equipped",
            "+200-275% Enhanced Damage",
            "+9 To Minimum Damage",
            "+9 To Maximum Damage",
            "Adds 55-160 Lightning Damage",
            "Adds 55-160 Fire Damage",
            "Adds 55-160 Cold Damage",
            "+2-6 To Valkyrie",
            "Regenerate Mana 20%",
            "+2 To Mana After Each Kill",
            "+2 To Light Radius",
            "Level 20 Revive (25 Charges)"
        ]
    },
    {
        name: "Melody",
        runes: ["Shael", "Ko", "Nef"],
        items: ["Missile Weapons"],
        level: 39,
        ladderOnly: false,
        properties: [
            "+50% Enhanced Damage",
            "+300% Damage To Undead",
            "+3 To Bow and Crossbow Skills (Amazon Only)",
            "+3 To Critical Strike (Amazon Only)",
            "+3 To Dodge (Amazon Only)",
            "+3 To Slow Missiles (Amazon Only)",
            "20% Increased Attack Speed",
            "+10 To Dexterity",
            "Knockback"
        ]
    },
    {
        name: "Wrath",
        runes: ["Pul", "Lum", "Ber","Mal"],
        items: ["Missile Weapons"],
        level: 63,
        ladderOnly: false,
        properties: [
            "30% Chance To Cast Level 1 Decrepify On Striking",
            "5% Chance To Cast Level 10 Life Tap On Striking",
            "+375% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "+250-300% Damage To Undead",
            "Adds 85-120 Magic Damage",
            "Adds 41-240 Lightning Damage",
            "20% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "+10 To Energy",
            "Cannot Be Frozen"
        ]
    },
    {
        name: "Enigma",
        runes: ["Jah", "Ith", "Ber"],
        items: ["Armour"],
        level: 65,
        ladderOnly: false,
        properties: [
            "+2 To All Skills",
            "+45% Faster Run/Walk",
            "+1 To Teleport",
            "+750-775 Defense",
            "+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)",
            "Increase Maximum Life 5%",
            "Damage Reduced By 8%",
            "+14 Life After Each Kill",
            "15% Damage Taken Goes To Mana",
            "+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)"
        ]
    },
    {
        name: "Duress",
        runes: ["Shael", "Um", "Thul"],
        items: ["Armour"],
        level: 47,
        ladderOnly: false,
        properties: [
            "+40% Faster Hit Recovery",
            "+10-20% Enhanced Damage",
            "Adds 37-133 Cold Damage 2 sec. Duration",
            "15% Chance of Crushing Blow",
            "33% Chance of Open Wounds",
            "+150-200% Enhanced Defense",
            "-20% Slower Stamina Drain",
            "Cold Resist +45%",
            "Lightning Resist +15%",
            "Fire Resist +15%",
            "Poison Resist +15%"
        ]
    },
    {
        name: "Crescent Moon",
        runes: ["Shael", "Um", "Tir"],
        items: ["Polearms", "Axes", "Swords"],
        level: 47,
        ladderOnly: false,
        properties: [
            "10% Chance To Cast Level 17 Chain Lightning On Striking",
            "7% Chance To Cast Level 13 Static Field On Striking",
            "+20% Increased Attack Speed",
            "+180-220% Enhanced Damage",
            "Ignore Target's Defense",
            "-35% To Enemy Lightning Resistance",
            "25% Chance of Open Wounds",
            "+9-11 Magic Absorb",
            "+2 To Mana After Each Kill",
            "Level 18 Summon Spirit Wolf (30 Charges)"
        ]
    },
    {
        name: "Splendor",
        runes: ["Eth", "Lum"],
        items: ["Shields"],
        level: 37,
        ladderOnly: false,
        properties: [
            "+1 To All Skills",
            "+10% Faster Cast Rate",
            "+20% Faster Block Rate",
            "+60-100% Enhanced Defense",
            "+10 To Energy",
            "Regenerate Mana 15%",
            "50% Extra Gold From Monsters",
            "20% Better Chance of Getting Magic Items",
            "+3 To Light Radius",
        ]
    },
    {
        name: "Lore",
        runes: ["Ort", "Sol"],
        items: ["Helms"],
        level: 27,
        ladderOnly: false,
        properties: [
            "+1 To All Skills",
            "+10 To Energy",
            "+2 To Mana After Each Kill",
            "Lightning Resist +30%",
            "Damage Reduced By 7",
            "+2 To Light Radius"
        ]
    },
    {
        name: "Wind",
        runes: ["Sur", "El"],
        items: ["Melee Weapons"],
        level: 27,
        ladderOnly: false,
        properties: [
            "10% Chance To Cast Level 9 Tornado On Striking",
            "+20% Faster Run/Walk",
            "+40% Increased Attack Speed",
            "+15% Faster Hit Recovery",
            "+120-160% Enhanced Damage",
            "-50% Target Defense",
            "+50 To Attack Rating",
            "Hit Blinds Target",
            "+1 To Light Radius",
            "Level 13 Twister (127 Charges)"
        ]
    },
    {
        name: "Rift",
        runes: ["Hel", "Ko", "Lem", "Gul"],
        items: ["Polearms", "Scepters"],
        level: 53,
        ladderOnly: false,
        properties: [
            "20% Chance To Cast Level 16 Tornado On Striking",
            "16% Chance To Cast Level 21 Frozen Orb On Attack",
            "20% Bonus To Attack Rating",
            "Adds 160-250 Magic Damage",
            "Adds 60-180 Fire Damage",
            "+5-10 To All Stats",
            "+10 To Dexterity",
            "38% Damage Taken Goes To Mana",
            "75% Extra Gold From Monsters",
            "Level 15 Iron Maiden (40 Charges)",
            "Requirements -20%"
        ]
    },
    {
        name: "Nadir",
        runes: ["Nef", "Tir"],
        items: ["Helms"],
        level: 13,
        ladderOnly: false,
        properties: [
            "+50% Enhanced Defense",
            "+10 Defense",
            "+30 Defense vs. Missile",
            "Level 13 Cloak of Shadows (9 Charges)",
            "+2 To Mana After Each Kill",
            "+5 To Strength",
            "-33% Extra Gold From Monsters",
            "-3 To Light Radius"
        ]
    },
    {
        name: "Stone",
        runes: ["Shael", "Um", "Pul", "Lum"],
        items: ["Armour"],
        level: 47,
        ladderOnly: false,
        properties: [
            "+60% Faster Hit Recovery",
            "+250-290% Enhanced Defense",
            "+300 Defense vs. Missile",
            "+16 To Strength",
            "+16 To Vitality",
            "All Resistances +15",
            "Level 16 Molten Boulder (80 Charges)",
            "Level 16 Clay Golem (16 Charges)"
        ]
    },
    {
        name: "Lionheart",
        runes: ["Hel", "Lum", "Fal"],
        items: ["Armour"],
        level: 41,
        ladderOnly: false,
        properties: [
            "+20% Enhanced Damage",
            "Requirements -15%",
            "+25 To Strength",
            "+10 To Energy",
            "+20 To Vitality",
            "+15 To Dexterity",
            "+50 To Life",
            "All Resistances +30"
        ]
    },
    {
        name: "Passion",
        runes: ["Dol", "Ort", "Eld", "Lem"],
        items: ["Weapons"],
        level: 43,
        ladderOnly: false,
        properties: [
            "+25% Increased Attack Speed",
            "+160-210% Enhanced Damage",
            "50-80% Bonus To Attack Rating",
            "+75% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "Adds 1-50 Lightning Damage",
            "+1 To Berserk",
            "+1 To Zeal",
            "Hit Blinds Target +10",
            "Hit Causes Monster To Flee 25%",
            "75% Extra Gold From Monsters",
            "Level 3 Heart of Wolverine (12 Charges)"
        ]
    },
    {
        name: "Chaos",
        runes: ["Fal", "Ohm", "Um"],
        items: ["Katars"],
        level: 57,
        ladderOnly: false,
        properties: [
            "9% Chance To Cast Level 11 Frozen Orb On Striking",
            "11% Chance To Cast Level 9 Charged Bolt On Striking",
            "+35% Increased Attack Speed",
            "+290-340% Enhanced Damage",
            "Adds 216-471 Magic Damage",
            "25% Chance of Open Wounds",
            "+1 To Whirlwind",
            "+10 To Strength",
            "+15 Life After Each Demon Kill"
        ]
    },
    {
        name: "Venom",
        runes: ["Tal", "Dol", "Mal"],
        items: ["Weapons"],
        level: 49,
        ladderOnly: false,
        properties: [
            "Hit Causes Monster To Flee 25%",
            "Prevent Monster Heal",
            "Ignore Target's Defense",
            "7% Mana Stolen Per Hit",
            "Level 15 Poison Explosion (27 Charges)",
            "Level 13 Poison Nova (11 Charges)",
            "+273 Poison Damage Over 6 seconds"
        ]
    },
    {
        name: "Radiance",
        runes: ["Nef", "Sol", "Ith"],
        items: ["Helms"],
        level: 27,
        ladderOnly: false,
        properties: [
            "+75% Enhanced Defense",
            "+30 Defense Vs. Missile",
            "+10 To Energy",
            "+10 To Vitality",
            "15% Damage Taken Goes To Mana",
            "Magic Damage Reduced By 3",
            "+33 To Mana",
            "Damage Reduced By 7",
            "+5 To Light Radius"
        ]
    },
    {
        name: "Rain",
        runes: ["Ort", "Mal", "Ith"],
        items: ["Armour"],
        level: 49,
        ladderOnly: false,
        properties: [
            "5% Chance To Cast Level 15 Cyclone Armor When Struck",
            "5% Chance To Cast Level 15 Twister On Striking",
            "+2 To Druid Skills",
            "+100-150 To Mana",
            "Lightning Resist +30%",
            "Magic Damage Reduced By 7",
            "15% Damage Taken Goes to Mana"
        ]
    },
    {
        name: "Sanctuary",
        runes: ["Ko", "Ko", "Mal"],
        items: ["Shields"],
        level: 49,
        ladderOnly: false,
        properties: [
            "+20% Faster Hit Recovery",
            "+20% Faster Block Rate",
            "20% Increased Chance of Blocking",
            "+130-160% Enhanced Defense",
            "+250 Defense vs. Missile",
            "+20 To Dexterity",
            "All Resistances +50-70",
            "Magic Damage Reduced By 7",
            "Level 12 Slow Missiles (60 Charges)"
        ]
    },
    {
        name: "Heart of the Oak",
        runes: ["Ko", "Vex", "Pul", "Thul"],
        items: ["Maces", "Staves"],
        level: 55,
        ladderOnly: false,
        properties: [
            "+3 To All Skills",
            "+40% Faster Cast Rate",
            "+75% Damage To Demons",
            "+100 To Attack Rating Against DemonsAdds 3-14 Cold Damage, 3 Sec. Duration",
            "7% Mana Stolen Per Hit",
            "+10 To Dexterity",
            "Replenish Life +20",
            "All Resistances +30-40",
            "Level 4 Oak Sage (25 Charges)",
            "Level 14 Raven (60 Charges)"
        ]
    },
    {
        name: "Steel",
        runes: ["Tir", "El"],
        items: ["Swords", "Axes", "Maces"],
        level: 13,
        ladderOnly: false,
        properties: [
            "20% Enhanced Damage",
            "+3 To Minimum Damage",
            "+3 To Maximum Damage",
            "+50 To Attack Rating",
            "50% Chance Of Open Wounds",
            "25% Increased Attack Speed",
            "+2 To Mana After Each Kill",
            "+1 To Light Radius"
        ]
    },
    {
        name: "Faith",
        runes: ["Ohm", "Jah", "Lem", "Eld"],
        items: ["Missile Weapons"],
        level: 65,
        ladderOnly: false,
        properties: [
            "Level 12-15 Fanaticism Aura When Equipped",
            "+1-2 To All Skills",
            "+330% Enhanced Damage",
            "Ignore Target's Defense",
            "300% Bonus To Attack Rating",
            "+75% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "+120 Fire Damage",
            "All Resistances +15",
            "10% Reanimate As: Returned",
            "75% Extra Gold From Monsters"
        ]
    },
    {
        name: "Eternity",
        runes: ["Amn", "Ber", "Ist", "Sol", "Sur"],
        items: ["Missile Weapons"],
        level: 63,
        ladderOnly: false,
        properties: [
            "Indestructible",
            "+260-310% Enhanced Damage",
            "+9 To Minimum Damage",
            "7% Life Stolen Per Hit",
            "20% Chance of Crushing Blow",
            "Hit Blinds Target",
            "Slows Target By 33%",
            "Regenerate Mana 16%",
            "Replenish Life +16",
            "Cannot Be Frozen",
            "30% Better Chance Of Getting Magic Items",
            "Level 8 Revive (88 Charges)"
        ]
    },
    {
        name: "Stealth",
        runes: ["Tal", "Eth"],
        items: ["Armour"],
        level: 17,
        ladderOnly: false,
        properties: [
            "Magic Damage Reduced By 3",
            "+6 To Dexterity",
            "+15 To Maximum Stamina",
            "Poison Resist +30%",
            "Regenerate Mana 15%",
            "25% Faster Run/Walk",
            "25% Faster Cast Rate",
            "25% Faster Hit Recovery"
        ]
    },
    {
        name: "Enlightenment",
        runes: ["Pul", "Ral", "Sol"],
        items: ["Armour"],
        level: 45,
        ladderOnly: false,
        properties: [
            "5% Chance To Cast Level 15 Blaze When Struck",
            "5% Chance To Cast level 15 Fire Ball On Striking",
            "+2 To Sorceress Skills",
            "+1 To Warmth",
            "+30% Enhanced Defense",
            "Fire Resist +30%",
            "Damage Reduced By 7"
        ]
    },
    {
        name: "Dragon",
        runes: ["Sur", "Lo", "Sol"],
        items: ["Armour", "Shields"],
        level: 61,
        ladderOnly: false,
        properties: [
            "20% Chance to Cast Level 18 Venom When Struck",
            "12% Chance To Cast Level 15 Hydra On Striking",
            "Level 14 Holy Fire Aura When Equipped",
            "+360 Defense",
            "+230 Defense vs. Missile",
            "+3-5 To All Attributes",
            "+0.375-37.125 To Strength (Based on Character Level)",
            "Increase Maximum Mana 5% (Armor Only)",
            "+50 To Mana (Shields Only)",
            "+5% To Maximum Lightning Resist",
            "Damage Reduced by 7"
        ]
    },
    {
        name: "Prudence",
        runes: ["Mal", "Tir"],
        items: ["Armour"],
        level: 49,
        ladderOnly: false,
        properties: [
            "+25% Faster Hit Recovery",
            "+140-170% Enhanced Defense",
            "All Resistances +25-35",
            "Damage Reduced by 3",
            "Magic Damage Reduced by 17",
            "+2 To Mana After Each Kill",
            "+1 To Light Radius",
            "Repairs Durability 1 In 4 Seconds"
        ]
    },
    {
        name: "Hand of Justice",
        runes: ["Sur", "Cham", "Amn", "Lo"],
        items: ["Weapons"],
        level: 67,
        ladderOnly: false,
        properties: [
            "100% Chance To Cast Level 36 Blaze When You Level Up",
            "100% Chance To Cast Level 48 Meteor When You Die",
            "Level 16 Holy Fire Aura When Equipped",
            "+33% Increased Attack Speed",
            "+280-330% Enhanced Damage",
            "Ignore Target's Defense",
            "7% Life Stolen Per Hit",
            "-20% To Enemy Fire Resistance",
            "20% Deadly Strike",
            "Hit Blinds Target",
            "Freezes Target +3"
        ]
    },
    {
        name: "Gloom",
        runes: ["Fal", "Uhm", "Pul"],
        items: ["Armour"],
        level: 47,
        ladderOnly: false,
        properties: [
            "15% Chance To Cast Level 3 Dim Vision When Struck",
            "+10% Faster Hit Recovery",
            "+200-260% Enhanced Defense",
            "+10 To Strength",
            "All Resistances +45",
            "Half Freeze Duration",
            "5% Damage Taken Goes To Mana",
            "-3 To Light Radius"
        ]
    },
    {
        name: "Zephyr",
        runes: ["Ort", "Eth"],
        items: ["Missile Weapons"],
        level: 21,
        ladderOnly: false,
        properties: [
            "+33% Enhanced Damage",
            "+66 To Attack Rating",
            "Adds 1-50 Lightning Damage",
            "-25% Target Defense",
            "+25 Defense",
            "25% Faster Run/Walk",
            "25% Increased Attack Speed",
            "7% Chance To Cast Level 1 Twister When Struck"
        ]
    },
    {
        name: "Wealth",
        runes: ["Lem", "Ko", "Tir"],
        items: ["Armour"],
        level: 43,
        ladderOnly: false,
        properties: [
            "300% Extra Gold From Monsters",
            "100% Better Chance Of Getting Magic Items",
            "+2 To Mana After Each Kill",
            "+10 To Dexterity"
        ]
    },
    {
        name: "Smoke",
        runes: ["Nef", "Lum"],
        items: ["Armour"],
        level: 37,
        ladderOnly: false,
        properties: [
            "+75% Enhanced Defense",
            "+280 Defense vs. Missiles",
            "All Resistances +50",
            "-20% Faster Hit Recovery",
            "Level 6 Weaken (18 Charges)",
            "+10 To Energy",
            "-1 To Light Radius"
        ]
    },
    {
        name: "King's Grace",
        runes: ["Amn", "Ral", "Thul"],
        items: ["Swords", "Scepters"],
        level: 25,
        ladderOnly: false,
        properties: [
            "+100% Enhanced Damage",
            "+100% Damage To Demons",
            "+50% Damage To Undead",
            "Adds 5-30 Fire Damage",
            "Adds 3-14 Cold Damage - 3 Second Duration",
            "+150 To Attack Rating",
            "+100 To Attack Rating Against Demons",
            "+100 To Attack Rating Against Undead",
            "7% Life Stolen Per Hit"
        ]
    },
    {
        name: "Honor",
        runes: ["Amn", "El", "Ith", "Tir", "Sol"],
        items: ["Melee Weapons"],
        level: 27,
        ladderOnly: false,
        properties: [
            "+160% Enhanced Damage",
            "+9 to Minimum Damage",
            "+9 to Maximum Damage",
            "25% Deadly Strike",
            "+250 to Attack Rating",
            "+1 to All Skills",
            "7% Life Stolen per Hit",
            "+10 Replenish Life",
            "+10 to Strength",
            "+1 to Light Radius",
            "+2 to Mana per Kill"
        ]
    },
    {
        name: "Fury",
        runes: ["Jah", "Gul", "Eth"],
        items: ["Melee Weapons"],
        level: 65,
        ladderOnly: false,
        properties: [
            "+209% Enhanced Damage",
            "40% Increased Attack Speed",
            "Prevent Monster Heal",
            "66% Chance of Open Wounds",
            "33% Chance of Deadly Strike",
            "-25% Target Defense",
            "20% to Attack Rating",
            "6% Life Stolen Per Hit",
            "Ignores Target Defense",
            "+5 to Frenzy (Barbarian only)"
        ]
    },
    // Add more runewords here with properties
];

document.addEventListener('DOMContentLoaded', () => {
    const runeContainer = document.getElementById('rune-container');
    const checkRunesButton = document.getElementById('check-runes');
    const runewordSuggestions = document.getElementById('runeword-suggestions');

    runes.forEach(rune => {
        const runeDiv = document.createElement('div');
        runeDiv.classList.add('rune-checkbox');
        runeDiv.innerHTML = `
            <img src="${rune.img}" alt="${rune.name}" title="cLvl: ${rune.clvl}\nArmor/Shield Bonus: ${rune.armourShieldBonus}\nWeapon Bonus: ${rune.weaponBonus}\nCube Recipe: ${rune.cubeRecipe}">
            <label>
                <input type="checkbox" value="${rune.name}">${rune.name}
            </label>
        `;
        runeContainer.appendChild(runeDiv);
    });

    checkRunesButton.addEventListener('click', () => {
        const selectedRunes = Array.from(document.querySelectorAll('#rune-container input:checked')).map(input => input.value);
        runewordSuggestions.innerHTML = '';

        runewords.forEach(runeword => {
            if (runeword.runes.every(rune => selectedRunes.includes(rune))) {
                const runewordItem = document.createElement('li');
                runewordItem.innerHTML = `
                    <strong>${runeword.name}</strong>
                    <div>${runeword.items.join(', ')}</div>
                    <div>Req level: ${runeword.level}</div>
                    <div>Ladder Only: ${runeword.ladderOnly ? 'Yes' : 'No'}</div>
                    <div>Runes: ${runeword.runes.join('')}</div>
                    <div class="rune-images">${runeword.runes.map(rune => {
                        const runeImage = runes.find(r => r.name === rune).img;
                        return `<img src="${runeImage}" alt="${rune}">`;
                    }).join('')}</div>
                    <div>
                        <strong>Properties:</strong>
                        <ul>
                            ${runeword.properties.map(prop => `<li>${prop}</li>`).join('')}
                        </ul>
                    </div>
                `;
                runewordSuggestions.appendChild(runewordItem);
            }
        });

    });
});