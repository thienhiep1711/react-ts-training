const BASE_PATH = '/react-ts-training'

const navSettings = {
  basePath: BASE_PATH,
  navItems: [
    {
      path: BASE_PATH,
      fullPath: BASE_PATH,
      name: "Dashboard",
    },
    {
      path: "todo-list",
      fullPath: BASE_PATH + "/todo-list",
      name: "Todo List",
    },
    {
      path: "pokemon",
      name: "Pokemon",
      fullPath: BASE_PATH + "/pokemon",
    }
  ]
}

export { navSettings }
