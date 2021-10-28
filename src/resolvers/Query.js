export const Query = {
  hello: (_, { name }) => `Hello ${name || "World"}! What's up?`,
  getTodos: (parent, args, {db}, info) =>  db.todos,
  getTodoById: (parent, { id }, {db}, info) => {
    console.log(id);
    const todo = db.todos.find((todo) => todo.id === id);
    if (!todo) throw new Error(`Todo n°${id} non répertorié`)
    else return todo
  },
  getUsers: (parent, args, {db}, info) => db.users,
  getUserById: (parent, { id }, {db}, info) => {
    console.log(id);
    const user = db.users.find((user) => user.id === id);
    if (!user) throw new Error(`Utilisatseur n°${id} non répertorié`)
    else return user
    
  }
};
