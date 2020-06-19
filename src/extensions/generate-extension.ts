import { GluegunToolbox, filesystem } from 'gluegun'
import svgr from '@svgr/core'

module.exports = (toolbox: GluegunToolbox) => {
  const { template, parameters } = toolbox
  async function create(files, { framework, language }, dimensions) {
    const lang = language.replace(/(\([^.]+$)/gi, '')

    const svgsFolder = parameters.first || './svgs'

    const converted = []
    files.forEach(async file => {
      const svgrConfig = {
        native: framework === 'React Native',
        typescript: lang === 'Typescript',
        svgProps: {
          width: `{props.width || ${dimensions.width}}`,
          height: `{props.height || ${dimensions.height}}`
        },
        template: require('../utils/svgrTemplate'),
        plugins: ['@svgr/plugin-jsx']
      }
      const svg = filesystem.read(`${svgsFolder}/${file}`)
      const reactSVG = svgr.sync(svg, svgrConfig, {
        componentName: file.replace(/[^A-Z0-9]+|\b(\w*svg\w*)\b/gi, '')
      })
      converted.push({
        name: file.replace(/(\.[^.]+$)/gi, '').replace(/[^A-Z0-9]+/gi, '-'),
        svg: reactSVG
      })
    })

    await template.generate({
      template: lang === 'Typescript' ? 'Icons.tsx.ejs' : 'Icons.js.ejs',
      target: lang === 'Typescript' ? 'Icons.tsx' : 'Icons.js',
      props: { converted, framework, dimensions }
    })
  }

  toolbox.iconGenerator = { create }
}
