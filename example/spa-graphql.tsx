import React, { useState } from "react";
import { Provider, createClient, useQuery } from "urql";
import { client } from "../src/lib/urqlClient";

export const findResultByNameQuery = `
  query FindAllResults {
    findResultsByName(name: "shunichiro") {
      data {
        _id
        date
        label
        name
        result
      }
    }
  }
`;

function Countries() {
  const [res] = useQuery({
    query: findResultByNameQuery,
  });

  const [result, setResult] = useState(null);

  if (res.fetching) {
    return <div>...loading</div>;
  }

  if (res.error) {
    return <div>error: {res.error.message}</div>;
  }

  return (
    <div>
      <div>
        {res.data.findResultsByName.data.map((c) => (
          <div key={c.code} onClick={() => setResult(c.code)}>
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider value={client}>
      <div className="App">
        <h1>Urql example</h1>
        <Countries />
      </div>
    </Provider>
  );
}
