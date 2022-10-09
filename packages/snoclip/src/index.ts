// import clipboard from "clipboardy";
// import cw from 'clipboard-watch' //need python

// cw.watcher(function(){
//     // console.log(await clipboard.read())
//     console.log('asdf');

// });
// //end watcher clipboard change
// // cw.unwatcher();

var cw = require("clipboard-watch");
//start watcher clipboard change
cw.watcher(function () {
  //you can get clipboard data by NWjs API or Electron API
  console.log("change");
});
//end watcher clipboard change
cw.unwatcher();
