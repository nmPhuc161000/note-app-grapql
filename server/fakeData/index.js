export default {
  authors: [
    {
      id: 123,
      name: "phuc",
    },
    {
        id: 1,
        name: "hphuc"
    }
  ],
  folders: [
    {
      id: "1",
      name: "A",
      createAt: "03/12/2002",
      authorId: 123,
    },
    {
      id: "2",
      name: "B",
      createAt: "04/12/2002",
      authorId: 1,
    },
    {
      id: "3",
      name: "C",
      createAt: "05/12/2002",
      authorId: 123,
    },
  ],
  notes: [
    {
      id: "113",
      content: "<p>Go to supermarket</p>",
      folderId: "1"
    },
    {
      id: "123",
      content: "<p>Go to park</p>",
      folderId: "2"
    },
    {
      id: "133",
      content: "<p>Go to school</p>",
      folderId: "2"
    },
  ]
};
