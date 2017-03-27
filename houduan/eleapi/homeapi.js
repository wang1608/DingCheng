/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider");
var express = require('express');
var router = express.Router();

router.get("/home",function(req,res,next){
    //回调函数
    spider("/api?c=index&a=home",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

// router.get("/hotsearch",function(req,res,next){
//     //回调函数
//     spider("/shopping/v3/hot_search_words?latitude=31.230416&longitude=121.473701",function (result) {
//         res.send(result); // 如果渲染模板 res.render("")
//     });
// })

// router.get("/index_entry",function(req,res,next){
//     //回调函数
//     spider("/v2/index_entry?geohash=wtw3sjq6q7s2&group_type=1&flags[]=F",function (result) {
//         res.send(result); // 如果渲染模板 res.render("")
//     });
// })
// router.get("/restaurant",function(req,res,next){
//     //回调函数
//     spider("/shopping/restaurant/81782?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=31.23037&longitude=121.473701",function (result) {
//         res.send(result); // 如果渲染模板 res.render("")
//     });
// })
// router.get("/restaurants",function(req,res,next){
//     //回调函数
//     spider("/shopping/restaurants?latitude=31.23037&longitude=121.473701&offset=80&limit=20&extras[]=activities&terminal=h5",function (result) {
//         res.send(result); // 如果渲染模板 res.render("")
//     });
// })

// router.post("/test", function (req,res,next) {
//     //获取post数据
//     console.log(req.body);
//     res.send({result:"ok"});
// })

module.exports = router;
