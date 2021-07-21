import React from "react";
import Head from "./HeadComp";

const SearchView = ({ keyword, searchResults }) => {
  const heading = `Search results for ${keyword}`;
  const htmlresults = searchResults.map((obj, i) => {
    return <div key={i}>{obj.original_title}</div>;
  });

  return (
    <div>
      <Head text={heading} />;
      {htmlresults}
    </div>
  );
};

export default SearchView;
