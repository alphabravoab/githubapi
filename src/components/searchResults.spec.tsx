import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import SearchResults from "./SearchResults ";
vi.mock("./Result", () => ({
    default: () => {
        return <result-mock />
    },
}))
describe("The search results", () => {
    it("Renders no more then 10 results", () => {
        const { container } = render(<SearchResults search="bla" results={[{ id: 1}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}]} />)
        fireEvent.click(container.querySelector("div") as HTMLDivElement)
        expect(container.querySelectorAll("result-mock")).toHaveLength(10)
    })
})
