import { db } from "../db/db.js";

// const params=[parent, args, context, info]

export const Query = {
  hello: (_, { name }) => `Hello ${name || "World"}! What's up?`,
  getTodos: (parent, args, context, info) => {
    // console.log("parent:", parent)
    // console.log("arguments:", args)
    // console.log("contexte:", context)
    // console.log("info:", info)
    return db.todos;
  },
  getTodoById: (parent, { id }, context, info) => {
    console.log(id);
    const thisTodo = db.todos.find((todo) => todo.id === id);
    if (!thisTodo) throw new Error(`Todo n°${id} non répertorié`)
    else return thisTodo
  },
};
