# Section #7 - Vue.js part 3

### Goal
The purpose of this section is to introduce you a Softonix guidelines that are used for every project 
and refactor a current state of the 'contacts' app by using them.


### Tech plan
- Look through Softonix guidelines repo
- Explain folders structure and file names patterns
- Explain the workflow with router using predefined routes names
- Introduce auto-imports
- Refactor contacts application using Softonix guidelines.

### Materials for the section
- **Read**: Look through [Softonix guidelines](https://github.com/Softonix/frontend-guidelines)
- **Read**: [Vue composables](https://vuejs.org/guide/reusability/composables.html#composables)
- **Read**: [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- **Read**: [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- **Look through**: [Vueuse library](https://vueuse.org/)
- **Look through**: [Vite bundler](https://vitejs.dev/)

### Note
- Please install exact version 0.11.2 of unplugin-auto-import during viewing the video material to make autoimports properly work

### Video Material
[Youtube link](https://youtu.be/j1Um1sW9c58)

### Section Playground
- Branch name: [`section-7-vue-part-3`](https://github.com/Softonix/softonix-incubator/tree/section-7-vue-part-3)
- Tag1: `#section-7-vue-part-3-start`
  - Represents an application from previous lecture #6
- Tag2: `#section-7-vue-part-3-end`
  - Represents refactored application using Softonix guidelines

### Homework
This section includes homework. You need to fork this repo, finish homework in your repo, push your changes to origin and send URL with your forked repo and completed task to related person.

Main idea of the task is to group job openings items (coming from `jobOpeningsService.fetchJobOpenings()` method) by departments key. All available departments are coming from `jobOpeningsService.fetchDepartments()`.


### Finished task video overview
[Youtube link](https://youtu.be/m_S8UrGM-Hs)

### Details
- Use _homework folder to get needed data
- Create a new page called JobOpenings.
- Create a header with navigation that should have the following links: Contacts, Job openings
- You need to implement filtering of all job openings groups using value from multi-select component and its v-model: `selectedDepartments` with `OR` logic.
- Filter dropdown options should include only departments which has job openings inside of it.
- If job opening doesn't have any departments, it should be grouped into `Other` group. `Other` group should be also available in departments dropdown.
- If jo opening has a department which doesn't exist in all departments list - ignore this job opening.
- Group should render only 5 job openings.
- Show see more button only in case group has more than 5 job openings.
- Dynamically show 2 values of currently filtered items and all items in the copy example: `'Showing 200 out of 1092 job openings'`
- Sort all departments in rendered tree alphabetically.
- Task should be implemented with all Vue.js best practices in scope of performance and rendering.