export const User = {
  todos: ({id}, args, {db}, info) => {
    console.log("parent:", id)
    return db.users.filter((todo) => todo.userId === id)
  }
} 