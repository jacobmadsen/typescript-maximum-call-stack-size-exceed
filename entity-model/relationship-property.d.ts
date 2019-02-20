import { EntityModel, Entity } from "./entity-model";

export type TrimRelationshipKey<Entity> = {
  [Key in keyof Entity]: Entity[Key] extends undefined ? never : Key
}[keyof Entity];

export type RelationshipDeclaration<T extends string> = {
  type: T;
  entity: EntityModel<any, any>;
};

export type GetRelationshipEntity<
  T extends RelationshipDeclaration<any>
> = T["entity"] extends EntityModel<any, infer E>
  ? Entity<Pick<E, TrimRelationshipKey<E>>>
  : never;

export type RelationshipPropertyDeclaration = RelationshipDeclaration<
  "has-one"
>;

export type RelationshipPropertyType<
  Declaration extends RelationshipPropertyDeclaration
> = Declaration extends RelationshipDeclaration<"has-one">
  ? GetRelationshipEntity<Declaration>
  : never;
