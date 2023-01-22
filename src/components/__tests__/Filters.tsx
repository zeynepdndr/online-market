import { mount } from "enzyme";
import Filters from "components/Filters/Filters";
import Checkbox from "components/UI/Checkbox";
import H6 from "components/UI/H6";

let component: any;

beforeEach(() => { component = mount(<Filters />) })
afterEach(() => component.unmount())

it("has a title and selection options", () => {

    expect(component.find(H6).length).toEqual(2)
    expect(component.find(Checkbox).length).toEqual(4)
})
