export const db = {
  todos: [
    {
      id: 1,
      name: "tuto graphQL",
      content: "terminer module Query",
      status: "IN_PROGRESS",
      userId: 1,
      
    },
    {
      id: 2,
      name: "Correction",
      content: "Corriger les fautes de syntaxe",
      status: "DONE",
      userId: 3
    },
    {
      id: 3,
      name: "HTML/CSS",
      content: "commencer formation web",
      status: "CANCELLED",
      userId: 2
    }
  ],
  users: [
    {
      id: 1,
      name: "fabezio",
      email: "fabezio@outlook.fr",
      todos: [1, 3]
    },
    {
      id: 2,
      name: "ano",
      email: "anonyme@gmail.com",
    },
    {
      id: 3,
      name: "Formateur",
      email: "formateur@ai-teaching.org",
      todos: [1,2]
    },
  ]
}
  