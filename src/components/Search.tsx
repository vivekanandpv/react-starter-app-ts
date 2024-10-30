import * as React from "react";

interface SearchProps {}

const Search = (props: SearchProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <h3>Search here...</h3>
      <input type="text" className="form-control mt-5" ref={inputRef} />
    </>
  );
};

export default Search;
