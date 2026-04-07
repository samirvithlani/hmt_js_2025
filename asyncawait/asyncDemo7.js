const order = () => {
  console.log("order has been processing");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("order has been placed..");
    }, 3000);
  });

  return promise;
};
const payment = () => {
  console.log("payment has been processing");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("payment done...");
      reject("payment failed..")
    }, 6000);
  });

  return promise;
};

const place = async () => {
  try {
    const [o, p] = await Promise.all([order(), payment()]);
    console.log("order data..", o);
    console.log("payment data", p);
  } catch (err) {
    console.log(err);
  }
};

place();
