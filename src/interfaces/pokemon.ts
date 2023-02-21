export interface PokemonsResponseInterface {
  count: number
  next: string | null
  previous: string | null
  results: PokemonsInterface[]
}

export interface PokemonsInterface {
  abilities: Ability2[]
  base_experience: number
  forms: Ability[]
  game_indices: Gameindex[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  url: string
  order: number
  past_types: any[]
  species: Ability
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

interface Type {
  slot: number
  type: Ability
}

interface Stat {
  base_stat: number
  effort: number
  stat: Ability
}

interface Sprites {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
  other: Other
  versions: Versions
}

interface Versions {
  'generation-i': Generationi
  'generation-ii': Generationii
  'generation-iii': Generationiii
  'generation-iv': Generationiv
  'generation-v': Generationv
  'generation-vi': Generationvi
  'generation-vii': Generationvii
  'generation-viii': Generationviii
}

interface Generationviii {
  icons: Dreamworld
}

interface Generationvii {
  icons: Dreamworld
  'ultra-sun-ultra-moon': Home
}

interface Generationvi {
  'omegaruby-alphasapphire': Home
  'x-y': Home
}

interface Generationv {
  'black-white': Blackwhite
}

interface Blackwhite {
  animated: Diamondpearl
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

interface Generationiv {
  'diamond-pearl': Diamondpearl
  'heartgold-soulsilver': Diamondpearl
  platinum: Diamondpearl
}

interface Diamondpearl {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

interface Generationiii {
  emerald: Officialartwork
  'firered-leafgreen': Fireredleafgreen
  'ruby-sapphire': Fireredleafgreen
}

interface Fireredleafgreen {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

interface Generationii {
  crystal: Crystal
  gold: Gold
  silver: Gold
}

interface Gold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

interface Crystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

interface Generationi {
  'red-blue': Redblue
  yellow: Redblue
}

interface Redblue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

interface Other {
  dream_world: Dreamworld
  home: Home
  'official-artwork': Officialartwork
}

interface Officialartwork {
  front_default: string
  front_shiny: string
}

interface Home {
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

interface Dreamworld {
  front_default: string
  front_female?: any
}

interface Move {
  move: Ability
  version_group_details: Versiongroupdetail[]
}

interface Versiongroupdetail {
  level_learned_at: number
  move_learn_method: Ability
  version_group: Ability
}

interface Gameindex {
  game_index: number
  version: Ability
}

interface Ability2 {
  ability: Ability
  is_hidden: boolean
  slot: number
}

interface Ability {
  name: string
  url: string
}

export interface MovesResponseInterface {
  count: number
  results: MoveInterface[]
}

export interface MoveInterface {
  accuracy: number
  contest_combos: Contestcombos
  contest_effect: Contesteffect
  contest_type: Usebefore
  damage_class: Usebefore
  effect_chance?: any
  effect_changes: any[]
  effect_entries: Effectentry[]
  flavor_text_entries: Flavortextentry[]
  generation: Usebefore
  id: number
  learned_by_pokemon: Usebefore[]
  machines: any[]
  meta: Meta
  name: string
  url: string
  names: Name[]
  past_values: any[]
  power: number
  pp: number
  priority: number
  stat_changes: any[]
  super_contest_effect: Contesteffect
  target: Usebefore
  type: Usebefore
}

interface Name {
  language: Usebefore
  name: string
}

interface Meta {
  ailment: Usebefore
  ailment_chance: number
  category: Usebefore
  crit_rate: number
  drain: number
  flinch_chance: number
  healing: number
  max_hits?: any
  max_turns?: any
  min_hits?: any
  min_turns?: any
  stat_chance: number
}

interface Flavortextentry {
  flavor_text: string
  language: Usebefore
  version_group: Usebefore
}

interface Effectentry {
  effect: string
  language: Usebefore
  short_effect: string
}

interface Contesteffect {
  url: string
}

interface Contestcombos {
  normal: Normal
  super: Super
}

interface Super {
  use_after?: any
  use_before?: any
}

interface Normal {
  use_after?: any
  use_before: Usebefore[]
}

interface Usebefore {
  name: string
  url: string
}