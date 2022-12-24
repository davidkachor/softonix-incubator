# Section #10 - Performance optimization

### Goal
When we build software products our goal is not just to make them work, they should work as fast as possible providing amazing user experience. In this section we will cover all key parts of website page speed optimization as well as understanding of how to debug bottlenecks in performance.

### Tech plan
- Google Pagespeed Insights tool
- Describe key items of performance optimization checklist
- Bundle analyzer check
- **Homework**: implement component for lazy loading images: `<LazyImg />`

### Materials for the section
- **Read**: [Web vitals](https://web.dev/vitals/)
- **Read**: [Vue.js performance best practices](https://vuejs.org/guide/best-practices/performance.html)
- **Read**: [Router lazy loading](https://router.vuejs.org/guide/advanced/lazy-loading.html)
- **Practice**: [Rollup plugin visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer)
- **Practice**: [Google page speed insights](https://pagespeed.web.dev/)

### Video Material
[Youtube link](https://youtu.be/fciI7n4vkQc)

### Section Playground
- Branch name: [`section-10-performance`](https://github.com/Softonix/softonix-incubator/tree/section-10-performance)
- Tag1: `#section-10-performance-start`
  - Analyze Softonix website using google page speed tool.
  - Installed package: rollup plugin visualizer
  - Preapared AsyncExample component

- Tag2: `#section-10-performance-end`
  - Implemented required optimizations.
  - Analyze Softonix website using google page speed tool.
  - Images (Small size of each image, relevant pixel size, lazy loading via JS, lazy loading attribute, on mobile we should not download images that are hidden on mobile)
  - Fonts (Small amount, preload, inline in CSS)
  - CSS (Small amount, use PurgeCSS to remove unused CSS or Tailwind JIT).
  - Layout Shifts (Min-height CSS for blocks, override fonts).
  - Internal JS (TreeShaking, Lazy Loading, WhenInView components)
  - 3rd party JS (TreeShaking, Postpone if possible, use new PartyTown as experiment, remove language packages like in moment.js)
  - Vue Optimization (VirtualLists for rendering, Promise.all for API, Not make reactive variables for huge nested objects).
  - **Infrastructure optimization** (Implement gzip/brotli compression, caching of static assets)

### Homework
This section includes homework. You need to fork this repo, finish homework in your repo, push your changes to origin and send URL with your forked repo and completed task to related person.

- Task #1. Implement component for lazy loading images: `<LazyImg />`. Component should start loading of the img only when user's viewport is 300px above the img or less. Component should render the skeleton animation during the img loading and has error handling - when image fails to load, it should render placeholder image instead of broken one.