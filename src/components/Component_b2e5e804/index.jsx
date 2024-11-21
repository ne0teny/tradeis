import Component_5538e2ad from "../Component_5538e2ad";
import { theme } from "../../theme";
import "./style.css";

function Component_b2e5e804({ loop_33ebb975 }) {
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
      {loop_33ebb975.map((data, index) => {
        return <Component_5538e2ad {...condition_2bccbb73(index)} {...data} key={index} {...style_6d919744[index]} />;
      })}
    </div>
  );
}

export default Component_b2e5e804;
