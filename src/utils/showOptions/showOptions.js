import { Link } from "react-router-dom";

import options from "./options";

import { ImageOption, Option, Options, TextOption } from "./style";

const showOptions = (
  <Options>
    {options.map((item, index) => (
      <Link key={index} to={item.link}>
        <Option>
          <ImageOption>{item.img}</ImageOption>
          <TextOption>{item.text}</TextOption>
        </Option>
      </Link>
    ))}
  </Options>
);

export default showOptions;
