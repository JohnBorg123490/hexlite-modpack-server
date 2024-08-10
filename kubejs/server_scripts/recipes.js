// File: kubejs/server_scripts/terrasteel_ingot_recipe.js

ServerEvents.recipes(event => {
    // Remove all existing Terrasteel Ingot recipes
    event.remove({output: 'botania:terrasteel_ingot', type: 'botania:terra_plate'})
  
      // Remove existing dragonsteel ingot recipes
    event.remove({output: 'iceandfire:dragonsteel_fire_ingot'})
    event.remove({output: 'iceandfire:dragonsteel_ice_ingot'})
    event.remove({output: 'iceandfire:dragonsteel_lightning_ingot'})

    event.remove({output: 'lifesteal:heart_crystal'})
    event.remove({output: 'cataclysm:ignitium_upgrade_smithing_template'})

    // Add the new Terrasteel Ingot recipe using Netherite instead of Manasteel
    event.custom({
      type: 'botania:terra_plate',
      ingredients: [
        {
          item: 'minecraft:netherite_ingot'
        },
        {
          item: 'botania:mana_pearl'
        },
        {
          item: 'botania:mana_diamond'
        }
      ],
      result: {
        item: 'botania:terrasteel_ingot'
      },
      mana: 500000
    })

  function createRunicAltarRecipe(output, ingredients, mana) {
    return {
      type: 'botania:runic_altar',
      output: {
        item: output,
        count: 1
      },
      mana: mana,
      ingredients: ingredients.map(item => ({item: item}))
    }
  }



  // Add new fire dragonsteel ingot recipe
  event.custom(createRunicAltarRecipe(
    'iceandfire:dragonsteel_fire_ingot',
    [
      'botania:terrasteel_ingot',
      'iceandfire:fire_dragon_blood',
      'iceandfire:dragonbone',
      'iceandfire:fire_dragon_heart',
      'irons_spellbooks:fire_rune',
      'botania:rune_wrath',
      'botania:rune_pride',
    ],
    500000
  ))

  event.custom(createRunicAltarRecipe(
    'lifesteal:heart_crystal',
    [
      'lifesteal:crystal_block',
       'iceandfire:dragonsteel_ice_ingot',
      'iceandfire:dragonsteel_fire_ingot',
      'iceandfire:dragonsteel_lightning_ingot',
      'lifesteal:crystal_block',
      'minecraft:nether_star',
      'botania:life_essence',
      'botania:rune_mana',
    ],
    1000000
  ))

  // Add new ice dragonsteel ingot recipe
  event.custom(createRunicAltarRecipe(
    'iceandfire:dragonsteel_ice_ingot',
    [
      'botania:terrasteel_ingot',
      'iceandfire:ice_dragon_blood',
      'iceandfire:dragonbone',
      'iceandfire:ice_dragon_heart',
      'irons_spellbooks:ice_rune',
      'botania:rune_envy',
      'botania:rune_sloth',
    ],
    500000
  ))


  event.recipes.occultism.ritual(
    'catacylsm:ignitium_upgrade_smithing_template',
    [
      'botania:gaia_ingot',
      'iceandfire:dragonbone',
      'botania:gaia_ingot',
      'iceandfire:dragonbone'
    ],
    'occultism:book_of_binding_bound_djinni',
    'occultism:summon_djinni'
  )
    .duration(3600)
    .dummy('occultism:ritual_dummy/custom_ritual')

  // Add new lightning dragonsteel ingot recipe
  event.custom(createRunicAltarRecipe(
    'iceandfire:dragonsteel_lightning_ingot',
    [
      'botania:terrasteel_ingot',
      'iceandfire:lightning_dragon_blood',
      'iceandfire:dragonbone',
      'iceandfire:lightning_dragon_heart',
      'irons_spellbooks:lightning_rune',
      'botania:rune_greed',
      'botania:rune_lust',
    ],
    500000
  ))

  event.custom({
    type: 'botania:terra_plate',
    ingredients: [
      {
        item: 'botania:gaia_ingot'
      },
      {
        item: 'iceandfire:dragonbone'
      },
      {
        item: 'botania:mana_diamond_block'
      },
      {
        item: 'iceandfire:dragonbone'
      },
    ],
    result: {
      item: 'cataclysm:ignitium_upgrade_smithing_template'
    },
    mana: 2000000
  })
  
    
  })