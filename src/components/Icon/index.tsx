import IconView from "./View";

import { IconProps } from "./type";

const Icon = ({ ref, icon, ...props }: IconProps) => {
  function getSrc(name: string) {
    const path = `./icons/${name}.svg`;
    const modules = import.meta.glob("./icons/*.svg", {
      as: "raw",
      eager: true,
    });

    return modules[path];
  }
  const svg = getSrc(icon);

  const viewProps = {
    svg,
    ...props,
  };

  return <IconView {...viewProps} ref={ref} />;
};

Icon.displayName = "Icon";

export default Icon;
