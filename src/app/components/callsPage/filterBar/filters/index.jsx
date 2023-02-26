import React from "react";
import CallsFilter from "./callsFilter";
import MarksFilter from "./marksFilter";
import MistakesFilter from "./mistakesFilter";
import SourcesFilter from "./sourcesFilter";
import TypesFilter from "./typesFilter";
import WorkersFilter from "./workersFilter";

const Filters = () => {
  return (
    <>
      <TypesFilter />
      <WorkersFilter />
      <CallsFilter />
      <SourcesFilter />
      <MarksFilter />
      <MistakesFilter />
    </>
  );
};

export default Filters;
