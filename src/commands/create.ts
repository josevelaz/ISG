import { GluegunToolbox, filesystem, print } from 'gluegun'
module.exports = {
  name: 'create',
  alias: ['c'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { colors, info },
      prompt,
      iconGenerator,
      parameters
    } = toolbox
    const svgsFolder = parameters.first || './svgs'

    let spinner = print.spin('Searching for SVGs 🕵🏽‍♂')
    // Look for svgs directory
    const findDir = filesystem.exists(svgsFolder)

    // if svgs exists, and if its a directory
    if (findDir && findDir === 'dir') {
      // filter all files that are svgs
      const filteredSVGS = filesystem
        .list(svgsFolder)
        .filter(file => file.indexOf('.svg') !== -1)
      // Announce there there has been an x ammount of files dound
      spinner.succeed(`There is ${filteredSVGS.length} svg files`)
      // List all file names
      filteredSVGS.map(file => {
        const splitFileName = file.split(' ')
        info(
          // if the filename contains a space, bold and give it a yellow color becuase itll cause an error with SVGR
          splitFileName.length > 1
            ? colors.warning(colors.bold(`• ${file}`))
            : `• ${file}`
        )
      })
      print.info(
        colors.dim(
          `All svgs with the color ${colors.warning(
            'orange'
          )} have invalid names.\nAll spaces and special character have been removed for the component name.\ni.e. Account Info.svg ➡️  AccountInfo\n`
        )
      )
      const dimensionQuestions = [
        {
          type: 'input',
          name: 'height',
          message: 'What is the height of your svgs?'
        },
        {
          type: 'input',
          name: 'width',
          message: 'What is the width of your svgs?'
        }
      ]

      try {
        const confirm = await prompt.confirm('Are these all the SVG files?')
        const dimensions = await prompt.ask(dimensionQuestions)
        if (confirm) {
          const { framework, language } = await prompt.ask([
            {
              type: 'select',
              name: 'framework',
              message: 'What framework are you using?',
              choices: ['React', 'React Native']
            },
            {
              type: 'select',
              name: 'language',
              message: 'What language are you using?',
              choices: ['Typescript(RECOMMEDED)', 'Javascript']
            }
          ])
          spinner = print.spin('Creating React Component \uFE0F')
          iconGenerator.create(
            filteredSVGS,
            { framework, language },
            dimensions
          )
          spinner.succeed('Component Succesfully Created')

          print.info(filesystem.file('Icons'))
        }
      } catch (error) {
        print.error('Unable to load SVGs')
      }
    } else {
      spinner.stop()
      print.error(
        'It seems we couldnt locate the svgs folder, or an invalid name'
      )
      print.info(
        colors.green.bold(
          `isg  ${colors.yellow('[c | create]')} ${colors.italic.cyan(
            '[FOLDER_NAME]'
          )}`
        )
      )
    }
  }
}
