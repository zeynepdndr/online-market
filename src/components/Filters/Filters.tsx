import React, {  useState } from "react";
import Checkbox, { CheckBoxLabel, Item } from "components/UI/Checkbox";
import FilterBox from "components/UI/FilterBox";
import H6 from "components/UI/H6";

const Filters: React.FC = () => {
  const [checked, setChecked] = useState<string | null>(null);
  const checkList = [
    "Price low to high",
    "Price high to low",
    "New to old",
    "Old to new",
  ];

  const handleCheck = (event: any) => {
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
          <FilterBox>
            <H6>Sorting</H6>
              {checkList.map((item, index) => (
                  <Item key={index}>
                    <Checkbox
                      type="radio"
                      name="radio"
                      value={item}
                      checked={checked === item}
                      onChange={handleCheck}
                    />
                    <CheckBoxLabel>{item}</CheckBoxLabel>
                  </Item>
              ))}
              <h1>{checked}</h1>
          </FilterBox>

    </>
  );
};

export default Filters;
