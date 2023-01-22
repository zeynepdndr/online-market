import { shallow } from "enzyme";
import App from "components/App";
import Cart from "components/Cart/Cart";
import Filters from "components/Filters/Filters";
import Products from "components/Shop/Products";

let component: any;

beforeEach(() => { component = shallow(<App />) })

it("shows a filter box", () => {

    expect(component.find(Filters).length).toEqual(1)
})
it("shows a products section", () => {

    expect(component.find(Products).length).toEqual(1)
})
it("shows a cart box", () => {

    expect(component.find(Cart).length).toEqual(1)
})
