import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";
// snapshot testing is usefull for elements that are static
describe("The nav", () => {
    it("Should match it's snapshot ", () => {
        const comp = render(
            <MemoryRouter initialEntries={["/"]}>
                <Nav />
            </MemoryRouter>
        )
        expect(comp).toMatchSnapshot()
    });
});
