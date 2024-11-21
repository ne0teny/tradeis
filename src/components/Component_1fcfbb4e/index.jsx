import Component_34fa91cb from "../Component_34fa91cb";
import Component_50b9d6f0 from "../Component_50b9d6f0";
import Component_b2266934 from "../Component_b2266934";
import Component_eb95f1fb from "../Component_eb95f1fb";
import Component_a05a0564 from "../Component_a05a0564";
import Component_b0d8391b from "../Component_b0d8391b";
import Component_b9485202 from "../Component_b9485202";
import "./style.css";

function Component_1fcfbb4e({ loop_19d03ad6, loop_33ebb975, loop_4e073814 }) {
  return (
    <div className="div-style-ae8965f9">
      <div className="div-style-f8764eca">
        <div className="div-style-985abbe8">
          <div className="div-style-8bd129e7">
            <p className="p-style-c29965f3">first Step </p>
            <div className="div-style-cff2e1e0">
              <p className="p-style-d6c2c4a4">1 step, 5 minimum days traded, intraday unrealized PNL trailing drawdown. </p>
              <p className="p-style-269e39b8">See all rules.</p>
            </div>
          </div>
        </div>
        <div className="div-style-2134829e">
          <Component_34fa91cb />
          <Component_50b9d6f0 />
          <Component_b2266934 />
        </div>
        <Component_eb95f1fb />
        <div className="div-style-34e3003">
          <Component_a05a0564 loop_19d03ad6={loop_19d03ad6} />
          <Component_b0d8391b loop_33ebb975={loop_33ebb975} />
          <Component_b9485202 loop_4e073814={loop_4e073814} />
        </div>
      </div>
    </div>
  );
}

export default Component_1fcfbb4e;
