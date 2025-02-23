export const optionsIncludes = [{
  groups: [
    {
      name: "Core Imports",
      patterns: [
        {
          exact: "vue",
        },
        {
          includes: "aloha-vue",
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
      name: "Third-Party Libraries",
      patterns: [
        {
          exact: "_rest_",
        },
      ],
    },
  ],
  newlineBetweenGroups: 1,
}];
