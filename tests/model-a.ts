import model from "../model";
import ModelB from './model-b'

export default model('ModelA', {
  b: {
    type: 'has-one',
    entity: ModelB,
  }
} as const)