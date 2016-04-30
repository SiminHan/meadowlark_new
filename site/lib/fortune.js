/**
 * Created by simin on 2016/4/30.
 */

var fortuneCookies=[
    "fortunes1~",
    "fortunes2~",
    "fortunes3~",
    "fortunes4~"
];

exports.getFortune=function(){
  var idx=Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
};