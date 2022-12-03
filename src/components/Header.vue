<template>
  <header class="pb-5 flex gap-3">
    <RouterLink class="link" :to="{name: $routeNames.jobOpenings}">Job Openings</RouterLink>
    <RouterLink class="link" :to="{name: $routeNames.contacts}">Contacts</RouterLink>
  </header>
</template>

<style scoped lang="scss">
  .link {
    @apply p-2 bg-gray-light hover:underline;
    &.exact {
      @apply font-bold hover:no-underline;
    }
  }
</style>
