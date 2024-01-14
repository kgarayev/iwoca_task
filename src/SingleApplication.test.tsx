import { describe, it, expect } from "vitest";
import { formatCurrency, formatDate } from "./SingleApplication";

describe("SingleApplication component utilities", () => {
  // testing the currency format
  it("formats currency correctly", () => {
    const amount = 1000;
    const formattedAmount = formatCurrency(amount);
    expect(formattedAmount).toBe("£1,000");
  });

  //   testing the date format
  it("formats date correctly", () => {
    const dateString = "2021-04-18T12:16:46.612Z";
    const formattedDate = formatDate(dateString);

    // needed format dd-mm-yyyy
    expect(formattedDate).toBe("18-04-2021");
  });
});
