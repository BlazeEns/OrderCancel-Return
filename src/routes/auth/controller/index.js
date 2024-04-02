import shopModel from "../../../model/shopSchema";
import { getToken, jwtToken, uninstallWebhook, createScript } from "../helper";
import { config } from "../../../utils/config/index";
const { appurl, apikey, scopes } = config;

export const authCallback = async(req, res) => {
  try {
    const { code, shop } = req.query;
    console.log(">>>>>>>>>>code<<<<<<<<<<<<<<<<", code);
    console.log(">>>>>>>>>>shop<<<<<<<<<<<<<<<<", shop);
    const shopInfo = await shopModel.find({ shopName: shop });
    console.log(">>>>>>>>>shopInfo>>>>>>>>>>>11==============", shopInfo);
    if (shopInfo.length >= 1) {
      res.json({
        msg: "order cancel  app already installed",
        code: await jwtToken(shop),
      });
    } else {
      const {data: { access_token }} = await getToken(code, shop);
      await Promise.all([
        uninstallWebhook(access_token, shop),
        createScript(access_token, shop),
        shopModel.create({
          shopName: shop,
          access_token,
        }),
      ]);
      res.json({
        message: "order cancel app has been first time installed",
        code: await jwtToken(shop),
      });
    }
  } catch (error) {
    res.status(404).json({
      status: 404,
      msg: "auth installable code error 404 !",
    });
  }
}
export const shopify = async (req, res) => {
  try {
    const { shop } = req.query;
    console.log(
      "console shop name ======>>>>>>>>>>>>>>>>>>>>52<<<<<<<<<",
      shop
    );
    const redirectURL = `${appurl}/auth/callback`;
    console.log(redirectURL, ">>>>>>>>>>>>>>>>>>>54<<<<<<<<<<<<<<<<<<<");
    const shopifyURL = `https://${shop}/admin/oauth/authorize?client_id=${apikey}&scope=${scopes}&state=shopState&redirect_uri=${redirectURL}`;
    console.log("shopifyUrl============55=======", shopifyURL);
    res.redirect(shopifyURL);
  } catch (error) {
    console.log("error occured", error);
  }
};
