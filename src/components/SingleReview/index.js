import React from 'react';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';

const shortid = require('shortid');

function SingleReview({ reviews, errors }) {
  // console.log(errors);
  return reviews.length === 0 ? (
    <div className="d-flex h-75 w-100">
      <div className="row justify-content-center align-self-center m-auto text-white rounded">
        <CircularProgress className="m-auto" />
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="row ">
        {reviews.map(tile => (
          <div
            key={shortid.generate()}
            className=" col-lg-4 col-md-6 col-sm-12 col-12 m-md-auto m-sm-0  m-0 ">
            <div
              className="container  shadow-sm rounded-lg bg-white my-2"
              style={{ height: '350px' }}>
              <div className="row ">
                <div className="col-md-12">
                  <Rating
                    className="py-2"
                    value={parseInt(tile.stars)}
                    readOnly
                  />
                  <p
                    className="h5 font-weight-bold"
                    style={{ color: '#1A1626' }}>
                    {tile.original_title}
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
              </div>
              <div className="row h-25">
                <div className="col-md-12 text-muted ">
                  <p className="py-0 my-0">By : {tile.author}</p>
                </div>
                <div className="col-md-6 col-sm-6 col-6 text-muted ">
                  <p className="py-0 my-0">{tile.date.split('T')[0]} </p>
                </div>
                <div className="col-md-6 col-sm-6 col-6 text-muted ">
                  <p className="py-0 my-0 float-right">Origin : {tile.iso}</p>
                </div>
                <div className="col-md-12 text-muted ">
                  {tile.hasResponded ? (
                    <div className="btn float-right btn-sm btn-success">
                      Responded
                    </div>
                  ) : (
                    <div className="btn float-right btn-sm btn-danger">
                      Not Responded
                    </div>
                  )}
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
export default connect(mapStateToProps)(SingleReview);
