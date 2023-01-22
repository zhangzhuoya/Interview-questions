"use strict";

var pro = new Promise(function (res, rej) {
  res(1);
});
var pro1 = new Promise(function (res, rej) {
  res(2);
}); // Promise.all([pro,pro1]).then(res=>{
//     console.log(res,'eeeee');
// })

Promise.myAll = function (proArr) {
  if (Array.isArray(proArr)) {
    return new Promise(function (res, rej) {
      var arr = [];
      var count = 0; // proArr.forEach((item,index)=>{
      //     item.then(itemRes=>{
      //         console.log(itemRes);
      //         arr.push(itemRes);
      //     })
      //     if(index===proArr.length-1) {
      //         console.log(arr);
      //     }
      // })

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = proArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var val = _step.value;
          console.log(val);
          count++;
          val.then(function (data) {
            console.log(data, 'llll'); // arr.push(itemRes);

            arr[count] = data;
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  } else {
    throw new Error('please input a array pro');
  }
};

Promise.myAll([pro, pro1]);