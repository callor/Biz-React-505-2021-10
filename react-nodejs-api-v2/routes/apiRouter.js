const express = require("express");
const router = express.Router();

const BUCKET = require("../models/bucket");
/**
 * RESTFul
 * 클라이언트에서 요청을 할때
 * 할일을 프로토콜 method로 분리하기
 * 		CREATE(Insert) : POST로 요청을 하고
 * 		READ(Select) : GET 요청을 하고
 * 		UPDATE : PUT으로 요청을 하고
 * 		DELETE : DELETE 로 요청을 하고
 *
 * 자원의 명확한 지정
 * 		localhost:3000/book/delete?id=12345 보통 요청을 수행하는데
 * 		localhost:3000/book/12345/delete : RESTFul 에서 할일, 자원을 명확하게
 * 			설정하기
 *
 * RESTFul 요청을 처리하기 위해서는
 * 표준 HTML 코드 만으로는 연결이 불가능하다
 * 		표준 HTML에서는 POST와 GET은 지원을 하지만
 * 		PUT과 DELETE는 지원을 하지 않는다
 * 		PUT과 DELETE를 사용하기 위해서는 Aajx(fetch)와 같은
 * 		별도의 도구를 사용해 한다.
 *
 * React와 API 연동을 할때는 RESTFul 4가지 method를 사용하여 서버를
 * 구축한다.
 *
 * POST, PUT : 데이터를 body에 담아서 전송
 * GET, DELETE : 단순히 URL요청만 수행하거나 pathVarriable 방식으로
 * 		데이터를 전송하여 처리를 수행한다
 *
 * client에서 요청을 할때
 * 같은 URL을 통하여 요청을 하여도 method가 다르면 서로다른 역할을
 * 수행할수 있기 때문에 서버 코딩을 하는데 다소 부담이 덜 할 수 있다
 * 	  GET localhost:3000/book/delete 를 수행하면
 * 		- 도서정보에서 삭제된 데이터를 나에게 보여달라
 *      router.get("/book/delete") 로 서버 설정하고
 * 	  DELETE localhost:3000/book/delete?id=1 를 수행하면
 * 		- 도서정보에서 어떤 ID값이 1인 데이터 삭제하라 라고 요청을 할 수 있다
 *      router.delete("/book/delete")
 *
 *
 */

/**
 * POST 로 받는 데이터는 주로 form 에 담긴 데이터이다
 * API Server에서는 fetch() 통하여 데이터를 전달받을때도 사용한다
 * request의 body에 담겨서 전달되기 때문에
 * req.body 에서 데이터를 추출하면 된다
 */
router.post("/bucket", async (req, res) => {
  const body = req.body;
  const result = await BUCKET.create(body);
  console.log("데이터 추가하기", result);
  console.log(body);
  res.json({ result: "OK" });
});

router.put("/bucket", async (req, res) => {
  const body = req.body;
  await BUCKET.findOneAndUpdate({ b_id: body.b_id }, body);
  res.json({ result: "OK" });
});

/**
 *
 * 3 Tier ( 3layer App )
 * react -> node -> atlas
 * atlas -> node -> react
 *
 * findOne() 이 return하는 doc가 성능상 문제로
 * null 값이 되어 overrwrite() 가 비정상 작동되므로
 * 사용하지 말자!!
 */
router.put("/bucket/over", async (req, res) => {
  const body = req.body;
  // DB에서 b_id 값이 body.b_id와 같은 데이터를 SELECT 하기
  const doc = await BUCKET.findOne({ b_id: body.b_id });
  console.log(doc);
  // select 한 model 객체의 모든 요소 데이터를
  // body로 받은 데이터로 변경하라
  // doc = {...doc, b_id:body.b_id, b_title : body.b_title }
  await doc.overwrite(body);
  // 변경된 데이터를 DB update 하라
  await doc.save();

  await console.log("데이터 업데이트 하기");
  await console.table(body);
});

// localhost:3000/api/get
router.get("/get", async (req, res) => {
  const buckets = await BUCKET.find({});
  console.log("전체 리스트 요청하기");
  res.json(buckets);
});
// localhost:3000/api/1/get
router.get("/:id/get", (req, res) => {
  console.log("개별 데이터 요청하기");
  res.json(retData[0]);
});

router.get("/update/:id/:title", (req, res) => {
  const id = req.params.id;
  const title = req.params.title;
  console.log("수신된 데이터", id, title);
  // res.status(200).end("끝")
  /**
   * Http Status Code
   * 2xx : 정상처리가 되고 데이터를 보낼 준비를 하고 있으니 기다려라
   * 3xx : 조금전에 보내준 결과와 변함이 없으니 그대로 써라, redirect
   * 4xx : 보낸 요청에 문제가 있다
   * 	404 : Not found
   *    401, 403 : 권한이 없다
   *    405 : method 잘 못되었다
   *    400 : 보낸 데이터가 문제가 있다
   * 5xx : Server Internal Error
   */

  res.send("끝");
});
router.put("/update", (req, res) => {});
router.delete("/cancel/:id", (req, res) => {
  const id = req.params.id;
  console.log("수신된 데이터", id);

  // res.end("끝")
  res.json({ title: "끝" });
});

module.exports = router;
