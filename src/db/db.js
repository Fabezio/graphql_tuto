export const db = {
  todos: [
    {
      id: 1,
      name: "tuto graphQL",
      content: "terminer module Query",
      status: "IN_PROGRESS",
      userId:"st_1"
    },
    {
      id: 2,
      name: "Correction",
      content: "Corriger les fautes de syntaxe",
      status: "DONE",
      userId: "tc_2"
    },
    {
      id: 3,
      name: "HTML/CSS",
      content: "commencer formation web",
      status: "CANCELLED",
      userId: "st_2"
    }
  ],
  users: [
    {
      id: "st_1",
      name: "fabezio",
      email: "fabezio@outlook.fr"
    },
    {
      id: "st_2",
      name: "ano",
      email: "anonyme@gmail.com",
    },
    {
      id: "tc_2",
      name: "Formateur",
      email: "formateur@ai-teaching.org",
      todos: ["st_1","st_2"]
    },
  ]
}
  