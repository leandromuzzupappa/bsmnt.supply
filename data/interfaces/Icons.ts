import { IconNames } from "@data/enums/Icons";

export interface IconsProps {
  className?: string;
  selfRef?: React.RefObject<HTMLSpanElement>;
}

export interface IconProp extends IconsProps {
  name: IconNames;
}
