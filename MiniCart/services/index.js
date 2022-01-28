export const getProductData = async () => {
  try {
    const res = await fetch(
      "https://dnc0cmt2n557n.cloudfront.net/products.json"
    )
    const string = await res.json();
    console.log(string);
      //const json = string === "" ? {} : JSON.parse(string);
      return string;
    //await console.log(res.json());

  } catch (error) {
    console.log(error);
  }
};
