import * as React from "react";
import {
  PlasmicTest,
  DefaultTestProps
} from "./plasmic/website_starter/PlasmicTest";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Custom props can be added as needed. 
// Here, we extend DefaultTestProps and add customProp.
export interface TestProps extends DefaultTestProps {
  customProp?: string;  // Example of a custom prop you may want to add
}

function Test_(props: TestProps, ref: HTMLElementRefOf<"div">) {
  // If you need to manage state or add custom behavior, you can do so here.
  // Example: Using customProp in your component
  const { customProp, ...rest } = props;

  // You can also add your custom logic here, for example, setting dynamic styles
  const customStyles = customProp
    ? { backgroundColor: 'lightblue' } // Example: conditional styling based on customProp
    : {};

  // Use PlasmicTest to render the component as per your Plasmic design
  return (
    <PlasmicTest
      root={{ ref }}
      {...rest}
      style={customStyles}  // Applying custom styles or props to the root element
    />
  );
}

// Wrapping with React.forwardRef to forward refs to the root div element
const Test = React.forwardRef(Test_);
export default Test;
