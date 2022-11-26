# Section #5 - intro to Vue

### Goal
In this section we will take a look at the basic tools of Vue. We will split our code into components, 
connect a reactivity to our data, add some interaction to the page and many more.


### Tech plan
- Rewrite static cards created during the previous lecture using Vue.js tools
- Split HTML into components, pass props and emit events
- Connect list rendering and conditional rendering
- Implement input data binding
- Add reactivity
- Add edit mode for specific contact and logic to delete it
- Add template ref to have a direct connection to our input DOM element

- **Home Work**: Create a custom input component
- **Home Work**: Create an html form with validation

### Materials for the section
- **Read**: [script setup (composition api)](https://vuejs.org/api/sfc-script-setup.html)
- **Read**: [Components Basics](https://vuejs.org/guide/essentials/component-basics.html)
- **Read**: [Conditional rendering](https://vuejs.org/guide/essentials/conditional.html)
- **Read**: [List Rendering](https://vuejs.org/guide/essentials/list.html)
- **Read**: [Event Handling](https://vuejs.org/guide/essentials/event-handling.html)
- **Read**: [Reactivity core](https://vuejs.org/api/reactivity-core.html)
- **Read**: [Form Input Bindings](https://vuejs.org/guide/essentials/forms.html)
- **Read**: [Computed Properties](https://vuejs.org/guide/essentials/computed.html#computed-properties)
- **Read**: [Template Refs](https://vuejs.org/guide/essentials/template-refs.html)
- **Read**: [nextTick](https://vuejs.org/api/general.html#nexttick)
- **Read**: [TypeScript with Composition API](https://vuejs.org/guide/typescript/composition-api.html#typing-reactive)
- **Practice**: Read all the sections above and try them on your own

### Video Material
[Youtube link](https://youtu.be/ihDn1HvgFZ8)

### Section Playground
- Branch name: [`section-5-intro-to-vue`](https://github.com/Softonix/softonix-incubator/tree/section-5-intro-to-vue)
- Tag1: `#section-5-intro-to-vue-start`
    - Prepared page with all the code from the previous lecture
- Tag2: `#section-5-intro-to-vue-end`
    - Split the code into components
    - Added list rendering
    - Added conditional rendering
    - Added event handlers
    - Added reactivity
    - Added two way data binding to the inputs
    - Added template refs

### Homework
This section includes homework. You need to fork this repo, finish homework in your repo, push your changes to origin and send URL with your forked repo and completed task to related person.

- Implement contact validation during editMode
  - If either name or description field are not filled in, you should not be able to save a contact. Save button should be greyed out and not clickable.
- Implement contact creation.
  - Add ‘Add contact’ button next to the page title.
  - By clicking on the ‘Add contact’ button the new empty contact card should be inserted at the beginning of the list.
  - The new contact form should include name, description and image fields.
  - By clicking on a cancel button during a contact creation, it should be removed from the list.
  - Validation should work for both creating and editing a contact

