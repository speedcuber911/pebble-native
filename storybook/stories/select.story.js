// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Select from "../../src/components/Select";

function noop() {}

const options = new Array(7)
  .fill({
    label: "Lorem ipsum dolor"
  })
  .map((x, i) => ({ ...x, id: i + 1 }));

storiesOf("Select", module)
  .add("basic", () => (
    <Select
      options={options}
      placeholder="Choose your option"
      onSelect={noop}
      selected={1}
      title="Travel Type"
      required
    />
  ))
  .add("Checkbox", () => (
    <Select
      options={options}
      placeholder="Choose your option"
      onSelect={noop}
      selected={[1]}
      type="checkbox"
      title="Travel Type"
      required
    />
  ));
