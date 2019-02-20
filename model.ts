import {
  EntityType,
  EntityPropertyModel,
  EntityModel
} from "./entity-model/entity-model";

export default function model<Properties extends EntityPropertyModel>(
  properties: Properties
): EntityModel<Properties, EntityType<Properties>> {
  return {
    properties
  };
}
