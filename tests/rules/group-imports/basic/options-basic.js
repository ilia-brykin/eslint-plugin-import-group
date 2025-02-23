export const optionsBasic = [{
  groups: [
    {
      name: "Core Imports",
      patterns: [
        {
          exact: "vue",
        },
        {
          exact: "vue-router",
        },
        {
          exact: "aloha-vue",
        },
      ],
    },
    {
      name: "Components",
      patterns: [
        {
          regex: ".vue$",
        },
      ],
      sort: "asc",
    },
    {
      name: "Third-Party Libraries",
      patterns: [
        {
          exact: "_rest_",
          sort: "asc",
        },
        {
          exact: "lodash-es",
        },
      ],
    },
  ],
  emptyLinesBetweenGroups: 1,
}];
