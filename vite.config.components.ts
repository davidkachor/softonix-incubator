import { readdirSync } from 'fs'
import { join as pathJoin } from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/* CONFIGURATION FOR COMPONENTS AUTO-IMPORT */
export const ComponentsBuilder = () => Components({
  dts: './dts/components.d.ts',
  dirs: [
    './src/components',
    ...buildViewsComponents()
  ],
  resolvers: [
    ElementPlusResolver({ importStyle: false })
  ]
})

function buildViewsComponents () {
  const componentsDirs: string[] = []
  function getComponentsDirs (dirName: string) {
    try {
      const dirs = readdirSync(dirName, { withFileTypes: true }).filter(dirent => dirent.isDirectory())
      dirs.forEach((dir) => {
        const dirPath = pathJoin(dirName, dir.name)
        const path = dirPath.split('\\')
        if (path.includes('components')) {
          componentsDirs.push(dirPath)
        }
        getComponentsDirs((dirPath))
      })
    } catch {
      console.warn(`No such file or directory, ${dirName}`)
    }
  }
  getComponentsDirs('./src/views')
  return componentsDirs
}
