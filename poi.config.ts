import { Options } from 'poi'

const options: Options = {
  entry: './components/index.jsx',
  presets: [
    require('poi-preset-react')(),
    require('poi-preset-typescript')()
  ]
}

export default options
