import {
  RelationshipPropertyDeclaration,
  RelationshipPropertyType
} from "./relationship-property";

export type EntityModel<Properties, Entity> = {
  properties: Properties;
};

export type EntityPropertyModel = {
  [Key: string]: RelationshipPropertyDeclaration;
};

export type Entity<T> = {} & { [Key in keyof T]: T[Key] };

export type PropertyType<T> = T extends RelationshipPropertyDeclaration
  ? RelationshipPropertyType<T>
  : never;

export type EntityType<Properties> = Entity<
  { [Key in keyof Properties]: PropertyType<Properties[Key]> }
>;
