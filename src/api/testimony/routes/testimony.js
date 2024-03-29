module.exports = {
  routes: [
    {
      method: "GET",
      path: "/testimonies",
      handler: "testimony.find",
      config: { policies: [] },
    },
    {
      method: "GET",
      path: "/testimonies/:id",
      handler: "testimony.findOne",
      config: { policies: [] },
    },
    {
      method: "POST",
      path: "/testimonies",
      handler: "testimony.create",
      config: { policies: [] },
    },
    {
      method: "PUT",
      path: "/testimonies/:id",
      handler: "testimony.update",
      config: { policies: [] },
    },
    {
      method: "DELETE",
      path: "/testimonies/:id",
      handler: "testimony.delete",
      config: { policies: [] },
    },
  ],
};
