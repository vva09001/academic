import React from "react";

const Gender = ({ onChange, maleCheck, femaleCheck }) => {
  return (
    <div className="formItem gender">
      <label>Giới tính:</label>
      <input
        type="radio"
        value="M"
        name="gender"
        onChange={onChange}
        defaultChecked={maleCheck}
      />
      <span>Nam</span>
      <input
        type="radio"
        value="F"
        name="gender"
        onChange={onChange}
        defaultChecked={femaleCheck}
      />
      <span>Nữ</span>
    </div>
  );
};

export default Gender;
