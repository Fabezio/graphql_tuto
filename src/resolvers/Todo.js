import { db } from "../db/db.js";

export const Todo = {
  user: ({userId}, args, context, info) => {
    console.log("parent:", userId)
    return db.users.find((user) => user.id === userId)
  }
} 