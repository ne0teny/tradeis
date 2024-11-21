import Component_f16c923 from "../Component_f16c923";
import { theme } from "../../theme";
import "./style.css";

function Component_6d863561({ loop_19d03ad6 }) {
  const style_6d919744 = [
    { style_p_width_ba32: theme.others.WIDTH_5F18319A, style_p_box_sizing_ba32: theme.others.BOX_SIZING_6CB470AA },
    { style_p_width_ba32: theme.others.WIDTH_5F18319A, style_p_box_sizing_ba32: theme.others.BOX_SIZING_6CB470AA },
    {},
  ];
  const condition_2bccbb73 = (index) => {
    return { div_63b07716: [0, 1].includes(index) };
  };

  return (
    <div className="div-style-9e74fd0c">
      {loop_19d03ad6.map((data, index) => {
        return <Component_f16c923 {...condition_2bccbb73(index)} {...data} key={index} {...style_6d919744[index]} />;
      })}
    </div>
  );
}

export default Component_6d863561;
