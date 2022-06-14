module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blogs",
      handler: "blog.find",
      config: { policies: [] },
    },
    {
      method: "GET",
      path: "/blogs/:id",
      handler: "blog.findOne",
      config: { policies: [] },
    },
    {
      method: "POST",
      path: "/blogs",
      handler: "blog.create",
      config: { policies: [] },
    },
    {
      method: "PUT",
      path: "/blogs/:id",
      handler: "blog.update",
      config: { policies: [] },
    },
    {
      method: "DELETE",
      path: "/blogs/:id",
      handler: "blog.delete",
      config: { policies: [] },
    },
  ],
};
