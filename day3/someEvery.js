const widgets = [
  { id: 1, color: "blue" },
  { id: 2, color: "yellow" },
  { id: 3, color: "orange" },
  { id: 4, color: "blue" },
];

console.log(
  "some are blue",
  widgets.some((items) => {
    return items.color === "blue";
  })
);

console.log(
  "everyone is blue",
  widgets.every((items) => {
    return items.color === "blue";
  })
);
