import { shallow } from "enzyme";
import App from "components/App";
import Cart from "components/Cart/Cart";
import Filters from "components/Filters/Filters";
import Products from "components/Shop/Products";

it("shows a filter box", ()=>{

    const component=shallow(<App/>)

    expect(component.find(Filters).length).toEqual(1)
})
it("shows a products section", ()=>{

    const component=shallow(<App/>)

    expect(component.find(Products).length).toEqual(1)
})
it("shows a cart box", ()=>{

    const component=shallow(<App/>)

    expect(component.find(Cart).length).toEqual(1)
})
