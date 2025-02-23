export const optionsLines2Components3Rest = [{
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
      emptyLinesBeforeGroup: 2,
    },
    {
      name: "Rest",
      patterns: [
        {
          exact: "_rest_",
        },
      ],
      emptyLinesBeforeGroup: 3,
    },
  ],
  emptyLinesBetweenGroups: 1,
}];

export const optionsLines2Components = [{
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
      emptyLinesBeforeGroup: 2,
    },
    {
      name: "Rest",
      patterns: [
        {
          exact: "_rest_",
        },
      ],
    },
  ],
  emptyLinesBetweenGroups: 1,
}];