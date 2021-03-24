import React from "react";
import { css } from "@emotion/core";
import { PuffLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ color }) => {
  return <PuffLoader color={color} css={override} size={100} />;
};

export default Spinner;
