const data = require("./data.json");
const moment = require("moment");

// Find items in the Meeting Room.
function itemsInMeetingRoom(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    if (el.placement.name === "Meeting Room") {
      output.push(el);
    }
  }
  return output;
}

// Find all electronic devices.
function electronicDevices(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    if (el.type === "electronic") {
      output.push(el);
    }
  }
  return output;
}

// Find all the furniture.
function allFurniture(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    if (el.type === "furniture") {
      output.push(el);
    }
  }
  return output;
}

// Find all items were purchased on 16 Januari 2020.
function itemPurchasedOn16Jan2020(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    const date = moment.unix(el["purchased_at"]);
    if (date.dayOfYear() === 16 && date.month() === 0 && date.year() === 2020) {
      output.push(el);
    }
  }
  return output;
}

// Find all items with brown color.
function itemWithBrownColor(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    if (el.tags.some((e) => e === "brown")) {
      output.push(el);
    }
  }
  return output;
}

// Find items in the Meeting Room.
console.log(itemsInMeetingRoom(data));

// Find all electronic devices.
console.log(electronicDevices(data));

// Find all the furniture.
console.log(allFurniture(data));

// Find all items were purchased on 16 Januari 2020.
console.log(itemPurchasedOn16Jan2020(data));

// Find all items with brown color.
console.log(itemWithBrownColor(data));
