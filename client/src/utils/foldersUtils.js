export const foldersLoader = async () => {
  const query = `query Query {
      folders {
        id
        name
        createAt
      }
    }`;

  const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await res.json();
  console.log({ data });
  return data;
};
