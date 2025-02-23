export const optionsPreserveNonImportCodeTrue = [{
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
    },
    {
      name: "Directives",
      patterns: [
        {
          includes: "directives",
        },
      ],
    },
    {
      name: "Third-Party Libraries",
      patterns: [
        {
          exact: "_rest_",
        },
        {
          exact: "lodash-es",
        },
      ],
    },
  ],
  emptyLinesBetweenGroups: 1,
  preserveNonImportCode: true,
}];

export const optionsPreserveNonImportCodeFalse = [{
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
    },
    {
      name: "Directives",
      patterns: [
        {
          includes: "directives",
        },
      ],
    },
    {
      name: "Third-Party Libraries",
      patterns: [
        {
          exact: "_rest_",
        },
        {
          exact: "lodash-es",
        },
      ],
    },
  ],
  emptyLinesBetweenGroups: 1,
  preserveNonImportCode: false,
}];