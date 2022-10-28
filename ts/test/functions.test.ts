import range from "../functions/range";
import { describe, it, expect } from 'vitest';


describe("range function",() => {
  it("should spread numbers form start to finsh",() => {
    var arr: number[] = [] 
    for (let n of range(0, 5)) {
      arr.push(n)
    }
    console.log(arr);
    expect(arr).toStrictEqual([1,2,3,4,5]);
  })
})