const DELETED_ITEMS = global.DELETED_ITEMS;

JEIEvents.hideItems(event => {
  DELETED_ITEMS.forEach(item => event.hide(item))
})