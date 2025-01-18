//////////// async/await寫法練習 /////////////

function doHomework(subject, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 2000) {
        reject(`${subject} 功課花太多時間了！`);
      } else {
        resolve(`完成了 ${subject} 功課！`);
      }
    }, time);
  });
}

async function doHomeworks(){
  try{
    const result1 = await doHomework('數學', 1000);
    console.log(result1)
    const result2 = await doHomework("國文", 1500);
    console.log(result2);
    const result3 = await doHomework("英文", 3000);
    console.log(result3)
  }catch (e) {
    console.error("發生錯誤:", e)
  }
}

doHomeworks();

//////////// Promise.all() /////////////
function cookDish(dish, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 2500) {
        reject(`${dish} 太久了，晚餐取消！`);
      } else {
        resolve(`完成了 ${dish}！`);
      }
    }, time);
  });
}

async function prepareDinner(menu) {
  try {
    // 在這裡用 Promise.all 等待所有菜完成
    const result = await Promise.all(menu);
    console.log(result)
  } catch (error) {
    console.error(error);
  }
}
const menu = [
  cookDish("煎魚", 1000), 
  cookDish("炒菜", 500), 
  cookDish("燉湯", 3000)
];
prepareDinner(menu);

/////////////// resolve/reject ////////////////////
function playGame(playerChoice) {
  // 作業
  return new Promise ((resolve, reject) => {
    if (playerChoice == "布"){
      return reject("玩家贏了");
    } else {
      return resolve("你輸了");
    } 
  })
}

async function startGame() {
  try {
    const result = await playGame("布"); // 測試 "剪刀"、"石頭" 或 "布"
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

startGame();

///////////////  Sleep  //////////////////
function sleep(seconds) {
  // 作業：實作 sleep 函數
  return new Promise((resolve, reject) => {
    if (seconds < 0){
      reject('請輸入有效時間');
    } else {
      setTimeout(resolve, seconds * 1000);
    }
  })
}

async function test() {
  try {
    console.log("開始");
    await sleep(5);  // 暫停 5 秒
    console.log("5 秒後");
  } catch(e) {
    console.log(e)
  }
  
}

test();