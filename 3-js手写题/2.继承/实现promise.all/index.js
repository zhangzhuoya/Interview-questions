const pro = new Promise((res, rej) => {
  res(1);
});
const pro1 = new Promise((res, rej) => {
  rej(2);
});
// Promise.all([pro,pro1]).then(res=>{
//     console.log(res,'eeeee');
// })
Promise.myAll = function (proArr) {
  if (Array.isArray(proArr)) {
    return new Promise((res, rej) => {
      const arr = [];
      let count = 0;
      fullifedCount = 0;
      for (const val of proArr) {
        let i = count;
        count++;
        Promise.resolve(val).then((data) => {
          fullifedCount++;
          console.log(count, fullifedCount, "lllll");
          arr[i] = data;
          if (count === fullifedCount) {
            res(arr);
          }
        },()=>{
            rej();
        });
      }
    });
  } else {
    throw new Error("please input a array pro");
  }
};
Promise.myAll([pro, pro1]).then((res) => {
  console.log(res, "kkkkk");
},rej=>{
    console.log(rej,'pppp');
});
