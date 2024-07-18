const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2더하기 2는 4", () => {
  expect(2 + 2).toBe(4);
});

test("객체 할당 테스트", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("양수 더하기", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// test("zero", () => {
//   const z = 0;
//   expect(n).not.toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect();
});

test("there I no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("but there is a 'stop' in Christoph", () => {
  expect("Christoph").toMatch(/stop/);
});

// test("the shopping list has milk on it", () => {
//   expect(shoppingList).toContain("milk");
//   expect(new Set(shoppingList)).toContain("milk");
// });

async function fetchData() {
  return "peanut butter";
}

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the fetch fails", async () => {
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

function initializeCityDatabase() {}

function clearCityDatabase() {}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

function isCity(city) {
  return city === "Vienna";
}

test;
