import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Checkbox, { CheckBoxLabel, Item } from "../UI/Checkbox";
import Container from "../UI/Container";
import FilterBox from "../UI/FilterBox";
import H6 from "../UI/H6";

const Filters: React.FC = () => {
  // State with list of all checked item
  const [checked, setChecked] = useState<string | null>(null);
  const checkList = [
    "Price low to high",
    "Price high to low",
    "New to old",
    "Old to new",
  ];

  // Add/Remove checked item from list
  const handleCheck = (event: any) => {
    console.log("hhdja");
    var updatedChecked = checked;
    if (event.target.checked) {
      updatedChecked = event.target.value;
    } else {
      updatedChecked = null;
    }
    setChecked(updatedChecked);
  };

  return (
    <>
      <H6>Filters</H6>
      <div className="app">
        <div className="checkList">
          <FilterBox>
            Sorts
            <div className="list-container">
              {checkList.map((item, index) => (
                <label style={{ display: "block" }} key={index}>
                  {/* <input
                    value={item}
                    type="checkbox"
                    onChange={handleCheck}
                    checked={checked === item}
                  />
                  {item} */}
                  {/* <label>
                    <Checkbox
                      checked={checked === item}
                      onChange={handleCheck}
                    />
                    <span style={{ marginLeft: 8 }}>{item}</span>
                  </label> */}
                  <Item>
                    <Checkbox
                      type="radio"
                      name="radio"
                      value={item}
                      checked={checked === item}
                      onChange={handleCheck}
                    />
                    <CheckBoxLabel />
                    <div>{item}</div>
                  </Item>
                </label>
              ))}
              <h1>{checked}</h1>
            </div>
          </FilterBox>
        </div>
      </div>
    </>
  );
};

export default Filters;
