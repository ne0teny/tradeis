import Component_71549cb8 from "../Component_71549cb8";
import "./style.css";

function Component_b2af76f1({ loop_d4826f38 }) {
  return (
    <div className="div-style-93cc034">
      {loop_d4826f38.map((data, index) => {
        return <Component_71549cb8 {...data} key={index} />;
      })}
    </div>
  );
}

export default Component_b2af76f1;
