function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function foo() {
  let i = 0
  while (true) {
    await sleep(2000);
    i += 1
    console.log(i);
  }
}

let a = setTimeout(foo(), 1)
clearTimeout(5001)
