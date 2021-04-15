export enum ItemType {
  ACTIVE = "ACTIVE",
  DEFAULT = "DEFAULT",
  INACTIVE = "INACTIVE",
}

export type ContentBoxItemProps = {
  onMouseOver: () => void;
  onMouseOut: () => void;
  onFocus: () => void;
  onBlur: () => void;
  link: string;
  type: ItemType;
};
