# Section #6 - Vue.js part 2

### Goal
In this section we will continue developing our contacts application and take a look on a couple more Vue.js features 
like slots and custom v-model. We will also see how to connect vue-router for app navigation and pinia for state managing.


### Tech plan
- Install vue-router and connect it to our app
- Split the app by different pages
- Create a page for creating a new contact that later with be used to update it as well
- Create an input component with custom v-model.
- Create a button component
- Create a card component
- Connect pinia for state managing
- Rewrite logic using state manager
- App improvements
- **Home Work**: Implement filtering and sorting of the contacts

### Materials for the section
- **Read**: [Events with v-model](https://vuejs.org/guide/components/events.html#usage-with-v-model)
- **Read**: [Computed Properties](https://vuejs.org/guide/essentials/computed.html#computed-properties)
- **Read**: [Slots](https://vuejs.org/guide/components/slots.html#slots)
- **Read**: [Vue Router](https://router.vuejs.org/)
- **Read**: [Pinia](https://pinia.vuejs.org/)
- **Practice**: Read all the sections above and try them on your own

### Video Material
[Youtube link](https://youtu.be/K8VNAF72Xc4)

### Section Playground
- Branch name: [`section-6-vue-part-2`](https://github.com/Softonix/softonix-incubator/tree/section-6-vue-part-2)
- Tag1: `#section-6-vue-part-2-start`
  - Represents an application from previous lecture with some optimization
- Tag2: `#section-6-vue-part-2-end`
  - Represents an extension to the app from previous lecture covered by tech plan. 

### Homework
This section includes homework. You need to fork this repo, finish homework in your repo, push your changes to origin and send URL with your forked repo and completed task to related person.

- Create 'roles' variable in the contacts.store.ts and describe it as string[].
- Add 'role' field to the contacts. It should be string
- Implement searching of contacts by name and description fields.
- Search field should be a custom input component. It should work with v-model.
- Implement filtering of contacts by role field.
- Roles filter field should be a custom multi-select component. It should receive a list as a prop and work with v-model
- Implement sorting of contacts by name field. Sorting should work in 3 ways: default, ascending, descending
