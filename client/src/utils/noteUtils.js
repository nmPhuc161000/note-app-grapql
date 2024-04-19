export const noteLoader = async ({ params: { folderId } }) => {
  const query = `query Folder($folderId: String) {
      folder(folderId: $folderId) {
        id
        name
        notes {
          id
          content
        }
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
      variables: {
        folderId: folderId,
      },
    }),
  });
  const { data } = await res.json();
  console.log("[note]", { data });
  return data;
};
