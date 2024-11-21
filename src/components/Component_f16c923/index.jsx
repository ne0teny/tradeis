import "./style.css";

function Component_f16c923({ div_63b07716, p_1aa32, p_63fef36, p_75f2e437, style_p_box_sizing_ba32, style_p_width_ba32 }) {
  return (
    <div className="div-style-ce7cdab4 div-style-189bd17e">
      <p className="p-style-33c3a07" style={{ width: style_p_width_ba32, boxSizing: style_p_box_sizing_ba32 }}>
        {p_1aa32}
      </p>
      {div_63b07716 ? (
        <div className="div-style-9854692f">
          <p className="p-style-8cc24d7e" dangerouslySetInnerHTML={{ __html: p_75f2e437 }} />
        </div>
      ) : (
        <p className="p-style-d2b9f2c" dangerouslySetInnerHTML={{ __html: p_63fef36 }} />
      )}
    </div>
  );
}

export default Component_f16c923;
