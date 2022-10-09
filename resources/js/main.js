"use strick";

fetch("resources/data/movelist/movelist_00.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });
