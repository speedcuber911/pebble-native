import * as React from "react";

type Selected = string | number | (string | number)[];

export interface ControlsProps {
  type?: "radio" | "checkbox";
  selected?: Selected;
  data: any[];
  keyExtractor?: (item: any) => string | number;
  renderElement?: (
    args: {
      item: any;
      isSelected: boolean;
    },
    props: ControlsProps
  ) => JSX.Element | number | string;
  allowToggle?: boolean;
  onChange: (
    args: {
      selected: Selected;
    },
    props: ControlsProps
  ) => void;
  style?: any;
  ripple?: boolean;
  disabled?: boolean | (string | number)[];
  name?: React.ReactText;
}
