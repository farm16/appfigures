import React from 'react';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';
const shortid = require('shortid');

function SingleReview({ reviews, errors }) {
  console.log(errors);

  return reviews.length === 0 ? (
    <div className="d-flex h-75 w-100">
      <div className="row justify-content-center align-self-center m-auto text-white rounded">
        {' '}
        <CircularProgress className="m-auto" />
      </div>
    </div>
  ) : (
    <div className="container bg-dark ">
      <div className="row ">
        {reviews.map(tile => (
          <div
            key={shortid.generate()}
            className=" col-lg-4 col-md-4 col-sm-12 col-12 m-md-auto m-sm-0  m-0 ">
            <div
              className="container  shadow-sm rounded-lg bg-white my-2"
              style={{ height: '350px' }}>
              <div className="row h-25">
                <div className="col-md-12">
                  <Rating
                    className="py-2"
                    value={parseInt(tile.stars)}
                    readOnly
                  />
                  <p className="h5 font-weight-bold">
                    {tile.original_title
                      .split(' ')
                      .slice(0, 6)
                      .join(' ')}
                  </p>
                </div>
              </div>
              <div className="row h-50 ">
                <div className="col-md-12">
                  <p>
                    {tile.original_review.split('').length > 160
                      ? `${tile.original_review
                          .split('')
                          .slice(0, 160)
                          .join('')}
                          ...`
                      : tile.original_review}
                  </p>
                </div>
              </div>{' '}
              <div className="row h-25">
                <div className="col-md-12 text-muted ">
                  <p className="p-0 m-0">By : {tile.author}</p>
                  <p className="p-0 m-0">
                    Date : {tile.date.split('T')[0]}
                  </p>{' '}
                  <p className="p-0  m-0">Origin : {tile.iso}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  reviews: state.reviews,
  errors: state.errors
});
export default connect(
  mapStateToProps
  // { loginUser, registerGoogle, registerFacebook, sendTwilio, activateAccount }
)(SingleReview);
