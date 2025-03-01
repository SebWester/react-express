import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/simpleFetch";

const TestFetch = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setData(data.ok);
      } catch (err) {
        setError("Something went wrong fetching data");
      }
    };
    getData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <h3>{data}</h3>
    </div>
  );
};

export default TestFetch;
