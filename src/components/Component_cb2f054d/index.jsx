import { forwardRef } from "react";
import { Select, Option } from "@mui/base";
import "./style.css";

function Component_cb2f054d() {
  return (
    <div className="div-style-22dfcfc">
      <div className="div-style-42f7a38">
        <p className="p-style-b739de24">
          Questions not listed above?
          <br />
          Send us a message and we&apos;ll get back to you
        </p>
        <div className="div-style-5cb885ab">
          {/* Select Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Select
            slotProps={{
              listbox: {
                style: {
                  listStyle: "none",
                  minHeight: "300px",
                  minWidth: "250px",
                  boxSizing: "border-box",
                  border: "1px solid",
                  borderRadius: "12px",
                },
              },
            }}
            slots={{
              root: forwardRef((props, ref) => {
                const { ownerState, className, ...rest } = props;
                return (
                  <div {...rest} ref={ref} className={`div-style-1102a4a5 Select-style-f77e6334 ${className}`}>
                    {props.children}
                  </div>
                );
              }),
            }}
            renderValue={() => (
              <>
                <div className="div-style-7fa98a5">
                  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
                    <path
                      id="Vector_16"
                      d="M3.06,4.2033c-0.57,0.03 -1.06,0.22 -1.46,0.57c-0.37,0.38 -0.57,0.84 -0.6,1.38c0.03,0.65 0.3,1.16 0.82,1.54l9.36,6.66c0.55,0.33 1.09,0.33 1.64,0l9.36,-6.66c0.52,-0.38 0.79,-0.89 0.82,-1.54c-0.03,-0.54 -0.23,-1 -0.6,-1.38c-0.4,-0.35 -0.89,-0.54 -1.46,-0.57zM1,8.7533v8.44c0.03,0.74 0.3,1.34 0.82,1.83c0.51,0.49 1.16,0.75 1.93,0.77h16.5c0.77,-0.02 1.42,-0.28 1.93,-0.77c0.52,-0.49 0.79,-1.09 0.82,-1.83v-8.44l-9.37,6.62c-0.48,0.35 -1.03,0.53 -1.63,0.53c-0.6,0 -1.15,-0.18 -1.63,-0.53z"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                      data-node-id="26:173"
                    />
                  </svg>
                </div>
                <p className="p-style-c8202291">Contact Us</p>
              </>
            )}
          >
            <Option>Add your options here!</Option>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Component_cb2f054d;
