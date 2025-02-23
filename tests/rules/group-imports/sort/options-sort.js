export const optionsSortAsc = [{
  groups: [
    {
      name: "Core Imports",
      patterns: [
        {
          exact: "vue",
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
          includes: ".vue",
        },
      ],
      sort: "asc",
    },
    {
      name: "Directives",
      patterns: [
        {
          includes: "directives",
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

export const optionsSortDesc = [{
  groups: [
    {
      name: "Core Imports",
      patterns: [
        {
          exact: "vue",
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
          includes: ".vue",
        },
      ],
      sort: "desc",
    },
    {
      name: "Directives",
      patterns: [
        {
          includes: "directives",
        },
      ],
      sort: "desc",
    },
    {
      name: "Third-Party Libraries",
      patterns: [
        {
          exact: "_rest_",
          sort: "desc",
        },
        {
          exact: "lodash-es",
        },
      ],
    },
  ],
  emptyLinesBetweenGroups: 1,
}];