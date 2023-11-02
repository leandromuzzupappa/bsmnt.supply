import { IconNames } from "@/data/enums/Icons";
import { IconProp } from "@/data/interfaces/Icons";

import AlertIcon from "./Alert";
import BasementIcon from "./Basement";
import EyeIcon from "./EyeIcon";
import FavIcon from "./Favicon";
import HDIcon from "./HD";
import HeroThing0Icon from "./HeroThin0";
import HeroThing1Icon from "./HeroThing1";
import RadioIcon from "./Radio";
import UHDIcon from "./UHD";
import WorldIcon from "./World";
import FooterIcon from "./FooterThing";

export const Icon = ({ className, name, selfRef }: IconProp) => {
  const icons = {
    [IconNames.ALERT]: AlertIcon,
    [IconNames.BASEMENT]: BasementIcon,
    [IconNames.EYE]: EyeIcon,
    [IconNames.FAVICON]: FavIcon,
    [IconNames.HD]: HDIcon,
    [IconNames.HEROTHING0]: HeroThing0Icon,
    [IconNames.HEROTHING1]: HeroThing1Icon,
    [IconNames.RADIO]: RadioIcon,
    [IconNames.UHD]: UHDIcon,
    [IconNames.WORLD]: WorldIcon,
    [IconNames.FOOTER]: FooterIcon,
  };

  const IconComponent = icons[name];

  return <IconComponent className={className} selfRef={selfRef} />;
};
