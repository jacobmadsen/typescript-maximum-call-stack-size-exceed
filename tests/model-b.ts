import model from "../model";
import ModelA from './model-a'

export default model('ModelB', {
  a: {
    type: 'has-one',
    entity: ModelA,
  }
} as const)