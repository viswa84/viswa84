import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, SetSearchParams] = useSearchParams();
  const [sortBy , SetSortby]=useState(searchParams.get("sortBy") || "")
  let x = searchParams.getAll("genre") || [];
  const [categary, Setcatatgery] = useState(x);

const handleSortby =(e)=>{
    SetSortby(e.target.value)
}
  const handleFilter = (e) => {
    const option = e.target.value;

    let newCategory = [...categary];
    if (newCategory.includes(option)) {
      /// removoe from array
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    Setcatatgery(newCategory);
  };
  // console.log(categary)

  useEffect(() => {
    const params = {};
    categary && (params.genre = categary);
    sortBy && (params.sortBy=sortBy);
    SetSearchParams(params);
  }, [categary, SetSearchParams,sortBy]);
  return (
    <div>
      FilterSort
      <h2>Filter</h2>
      <div>
        <input
          type="checkbox"
          value="K-Pop"
          onChange={handleFilter}
          defaultChecked={categary.includes("K-Pop")}
        />
        <label>K-Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Country"
          onChange={handleFilter}
          defaultChecked={categary.includes("Country")}
        />
        <label>Country</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Pop"
          onChange={handleFilter}
          defaultChecked={categary.includes("Pop")}
        />
        <label>Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Heavy Metal"
          onChange={handleFilter}
          defaultChecked={categary.includes("Heavy Metal")}
        />
        <label>Heavy Metal</label>
      </div>
      <h2>Sort</h2>
      <div onChange={handleSortby}>
        <div>
            <input type="radio" value='asc' name="sortBy" defaultChecked={sortBy ==="asc"}  />
            <label >Ascending</label>
        </div>
        <div>
            <input type="radio" value='desc' name="sortBy" defaultChecked={sortBy === 'desc'} />
            <label >Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
