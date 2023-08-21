import React, { useState } from 'react';
import dummyData from './dummy.json';
export const Temp = () => {
  const [data, setData] = useState(dummyData);

  console.log(data);
  return (
    <div>
      <form>
        {(Array.isArray(data.data) ? data.data : []).map((elm) => {
          return (
            <div key={elm.id}>
              <label>{elm.name}</label>
              <input
                defaultValue={elm.defaultValue}
                type={elm.fieldType.toLowerCase()}
                maxlength={elm.maxLength}
                minlength={elm.minLength}
                required={elm.required}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};
