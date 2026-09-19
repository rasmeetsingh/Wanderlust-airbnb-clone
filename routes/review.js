const express = require("express")
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Review = require("../models/review");
const Listing = require("../models/listing");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware");

const reviewController = require("../controllers/review")

router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview)
);

router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
)

module.exports = router;