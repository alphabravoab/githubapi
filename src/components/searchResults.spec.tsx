import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import SearchResults from "./SearchResults ";
vi.mock("./Result", () => ({
    default: () => {
        return <div className="result-mock" />
    },
}))
describe("The search results", () => {
    it("Renders no more then 10 results", () => {
        const { container } = render(<SearchResults search="bla" results={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} />)
        fireEvent.click(container.querySelector("div") as HTMLDivElement)
        expect(container.querySelectorAll(".result-mock")).toHaveLength(10)
    })
})
