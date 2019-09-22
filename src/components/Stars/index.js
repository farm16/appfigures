import React, { useState } from 'react';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const shortid = require('shortid');

export default function Stars() {
  const [check, setCheck] = useState();

  const getData = e => {
    e.preventDefault();
    setCheck(e.target.value);
    console.log(e.target.value);
  };

  function starIcons() {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      stars.push(
        <FormControlLabel
          key={shortid.generate()}
          style={{ width: '20%', margin: 0, padding: 0 }}
          control={
            <Checkbox
              className="m-auto"
              onChange={getData}
              checked={check >= i ? true : false}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              value={i}
            />
          }
        />
      );
    }
    return stars;
  }

  return (
    <div className="constainer p-0 m-0 w-100">
      <div className="row m-auto my-0 py-0">
        <p className="p-0 m-0 text-muted">Filter by Rating</p>
      </div>
      <div className="row"> {starIcons()}</div>
    </div>
  );
}
