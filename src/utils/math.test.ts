import { add } from "./math";

describe("math", () => {
  it("add should return 4 when passed 1 and 3", () => {
    // arrange

    // act
    const result = add(1, 3);

    // assert
    expect(result).toEqual(4);
  });
});
