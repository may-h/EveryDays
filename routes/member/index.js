const express = require("express");
const router = express.Router();

/* GET member/member 
    Request Param 
    1. 멤버 구하기 arg: member_no, company_code
    2. 멤버 구하기 arg: phone
*/
router.get("/member", (req, res, next) => {
  res.render();
});

/*
    GET member/members 
    1. 멤버 전체(리스트) 구하기 arg: company_code
*/
router.get("/members", (req, res, next) => {});

/* POST member/join  
    Request Body 
    1. 멤버 추가하기 arg: name, birthday, company_code, phone
*/
router.post("/join", (req, res, next) => {});

/*
    POST member/updqte 
    1. 멤버 정보 수정하기 
*/
router.post("/update", (req, res, next) => {});

/*
    POST member/signout
    1. 멤버 삭제(탈퇴) arg: member_no
*/
router.post("/signout", (req, res, next) => {});
