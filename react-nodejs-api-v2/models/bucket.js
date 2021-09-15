const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucket = Schema({
  b_id: String,
  b_title: String,
  b_start_date: String,
  b_flag: Number,
  b_end_date: String,
  b_end_check: Boolean,
  b_cancel: Boolean,
});

// bucket : Collection 이름
// 실제 DB에 저장될때는 buckets 라는 이름으로 등록된다
module.exports = mongoose.model("bucket", bucket);
