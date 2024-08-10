const DELETED_ITEMS = ['alexscaves:raygun'];

const WOOD_TYPES = ['acacia', 'oak', 'spruce', 'birch', 'dark_oak', 'jungle']
WOOD_TYPES.forEach(type => DELETED_ITEMS.push(`iceandfire:podium_${type}`));

const ICE_AND_FIRE_TOOLS = () => {
  const TOOL_TYPES = ['shovel', 'pickaxe', 'axe'];
  const ELEMENTS = ['ice', 'fire', 'lightning'];
  const ITEMS = [];

  ELEMENTS.forEach(element => {
      TOOL_TYPES.forEach(tool_type => {
          const ITEM_NAME = `iceandfire:dragonsteel_${element}_${tool_type}`;
          ITEMS.push(ITEM_NAME);
      })
  })

  return ITEMS;
}

DELETED_ITEMS.concat(ICE_AND_FIRE_TOOLS());

ServerEvents.recipes(event => {
  DELETED_ITEMS.forEach(item => event.remove({output: item}))
})

global.DELETED_ITEMS = DELETED_ITEMS;