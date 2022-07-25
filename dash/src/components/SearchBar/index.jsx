import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { TextField } from "@mui/material";

const CLIENTS_QUERY = gql`
  query($term: String!) {
    clients(term: $term) {
      name
      clientNumber
    }
  }
`

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [getClients, { data, loading, error }] = useLazyQuery(CLIENTS_QUERY, {
    variables: { term: searchTerm }
  }) ;
  
  if (error) {
    return <p>Error :(</p>
  }

  return (
    <>
      <TextField
        id="outlined-=basic"
        variant="outlined"
        onChange={(event) => {
          setSearchTerm(event.target.value);
          getClients();
        }}
      />
      { loading && 'Searching...'}
      { searchTerm && data && data.clients.map((client) => <>
          <p key={client.name}>{client.name}</p>
          <p key={client.clientNumber}>{client.clientNumber}</p>
        </>
      ) }
    </>
  );
};

export { SearchBar };
