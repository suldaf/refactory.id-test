const data = require("./data.json");

// Find users who don't have any phone numbers.
function noPhoneNumber(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    if (el.profile.phones.length === 0) {
      output.push(el);
    }
  }
  return output;
}

// Find users who have articles
function haveArticle(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    if (el["articles:"].length !== 0) {
      output.push(el);
    }
  }
  return output;
}

// Find users who have "annis" on their name.
function haveNameAnnis(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    if (el.profile["full_name"].toLowerCase().search("annis") !== -1) {
      output.push(el);
    }
  }
  return output;
}

// Find users who have articles on the year 2020.
function haveArticlesOn2020(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    for (let j = 0; j < el["articles:"].length; j++) {
      const ele = el["articles:"][j];
      const date = new Date(ele["published_at"]);
      if (date.getFullYear() === 2020) {
        output.push(el);
      }
    }
  }
  return output;
}

// Find users who are born in 1986.
function bornIn1986(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    const date = new Date(el.profile.birthday);
    if (date.getFullYear() === 1986) {
      output.push(el);
    }
  }
  return output;
}

// Find articles that contain "tips" on the title.
function haveTipsOnTitle(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    for (let j = 0; j < el["articles:"].length; j++) {
      const ele = el["articles:"][j];
      if (ele.title.search(/tips/i) !== -1) {
        output.push(ele);
      }
    }
  }
  return output;
}

// Find articles published before August 2019.
function publishedBeforeAugust2019(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    for (let j = 0; j < el["articles:"].length; j++) {
      const ele = el["articles:"][j];
      const date = new Date(ele["published_at"]);
      if (date.getFullYear() <= 2019 && date.getMonth() < 7) {
        output.push(ele);
      }
    }
  }
  return output;
}

// Find users who don't have any phone numbers.
console.log(noPhoneNumber(data));

// Find users who have articles
console.log(haveArticle(data));

// Find users who have "annis" on their name.
console.log(haveNameAnnis(data));

// Find users who are born in 1986.
console.log(bornIn1986(data));

// Find articles that contain "tips" on the title.
console.log(haveTipsOnTitle(data));

// Find users who have articles on the year 2020.
console.log(haveArticlesOn2020(data));

// Find articles published before August 2019.
console.log(publishedBeforeAugust2019(data));
