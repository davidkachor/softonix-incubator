# Section #8 - Element Plus

### Goal
The goal of this section is to introduce you Element Plus ui library, install and configure it in conjunction with Softonix guidelines.


### Tech plan
- Setup and configure Element Plus library
- Create login page using Element Plus components
- Add validation to the login form
- Add custom composable for Element Plus form
- **Home Work**: 
  - Rewrite all the components using Element Plus
  - Create 2 different views of the contacts list (card, table)

### Materials for the section
- **Practice**: [`Element Plus library`](https://element-plus.org/en-US/)
- **Read**: [`unplugin-vue-components resolvers`](https://github.com/antfu/unplugin-vue-components#importing-from-ui-libraries)

### Video Material
[Youtube link](https://youtu.be/Mn4vzc5eHbI)

### Section Playground
- Branch name: [`section-8-element-plus`](https://github.com/Softonix/softonix-incubator/tree/section-8-element-plus)
- Tag1: `#section-8-element-plus-start`
  - Represents an application from previous lecture #7
- Tag2: `#section-8-element-plus-end`
  - Installed and configured Element Plus library
  - Added login page with form validation
  - Added composable for Element Plus form component


### Homework
- Task 1:
  Rewrite all the components (button, input, card, etc) using Element Plus library.
- Task 2:
  On the contacts page create 2 tabs which will contain different views of the contacts list. 
  - First tab should have a card view (as we currently have)
  - Second tab should have a table view.
  - Please use Element Plus library to complete the task
  - For tabs representation use Tabs (el-tabs) component
  - For the table view use Table (el-table) component
  - Table view should have 4 columns (image, name, description, actions)
  - Buttons edit, delete, cancel, save should be fixed to the right of the table
  - Table view should work similarly to the card view
    - By clicking on the edit button you should show 2 inputs for name and description of an exact column
    - Clicking save, cancel, delete should work exactly the same as in the card view
    - By clicking on a table row you should be redirected to the UpsertContact page
