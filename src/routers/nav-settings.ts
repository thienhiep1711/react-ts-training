const BASE_PATH = '/'

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
      fullPath: "/todo-list",
      name: "Todo List",
    },
    {
      path: "pokemon",
      name: "Pokemon",
      fullPath: "/pokemon",
    }
  ]
}

export { navSettings }
