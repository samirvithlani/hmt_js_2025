const paytm = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("payment by paytm..");
    }, 5000);
  });

  return promise;
};
const phonepe = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("payment by phonepe..");
    }, 3000);
  });

  return promise;
};
const gapy = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("payment by gpay..");
      //reject("payment declain..")
    }, 2000);
  });

  return promise;
};

const paynow = async () => {
  try {
    const pay = await Promise.race([paytm(), phonepe(), gapy()]);
    console.log("pay...", pay);
  } catch (err) {
    console.log("err.", err);
  }
};
paynow()
