import { toggleColor, TOGGLE_COLOR } from "./addFolderFormReducer";
import { IAction } from "../interfaces";

describe("ToggleColor function:", () => {
  test("should return object", () => {
    const result: IAction = { type: TOGGLE_COLOR, payload: "testId" };
    expect(toggleColor("testId")).toBeInstanceOf(Object);
    expect(toggleColor("testId")).toEqual(result);
  });
});
