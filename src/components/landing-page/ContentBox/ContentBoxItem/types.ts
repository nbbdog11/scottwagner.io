export enum ItemType {
  ACTIVE = "ACTIVE",
  DEFAULT = "DEFAULT",
  INACTIVE = "INACTIVE"
}

export type ContentBoxItemProps = {
  type: ItemType;
};
