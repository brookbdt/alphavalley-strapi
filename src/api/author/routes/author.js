module.exports = {
  routes: [
    {
      method: "GET",
      path: "/authors",
      handler: "author.find",
      config: { policies: [] },
    },
    {
      method: "GET",
      path: "/authors/:id",
      handler: "author.findOne",
      config: { policies: [] },
    },
    {
      method: "POST",
      path: "/authors",
      handler: "author.create",
      config: { policies: [] },
    },
    {
      method: "PUT",
      path: "/authors/:id",
      handler: "author.update",
      config: { policies: [] },
    },
    {
      method: "DELETE",
      path: "/authors/:id",
      handler: "author.delete",
      config: { policies: [] },
    },
  ],
};
