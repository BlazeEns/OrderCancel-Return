import jwt from 'jsonwebtoken'
import axios from 'axios';
import {config} from '../../..//utils/config/index'
const {apikey,apisecretkey,appurl,apiversion,scopes} = config


//callback middleware
export const jwtToken = async(shop)=>{
    try {
        return jwt.sign( {
            jwttoken: shop,
          },
          "secret",
          { expiresIn: "24h" });
    } catch (error) {
        console.log("jwt error ",error)
    }
}
export const getToken = async(code,shop)=>{
try {
    return await axios({
      url: `https://${shop}/admin/oauth/access_token`,
      method: "POST",
      data: {
        client_id:apikey,
        client_secret:apisecretkey,
        code
      }
    })
} catch (error) {
    console.log("get token error ",error);
}
}
export const uninstallWebhook = async(access_token,shop)=>{
try {
    console.log("uninstallWebhook =>>>>>>>>>>>>>", { shop, access_token })
    return await axios({
      url: `https://${shop}/admin/api/${apiversion}/webhooks.json`,
      method: "POST",
      headers: {
        "X-Shopify-Access-Token": access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        webhook: {
          topic: "app/uninstalled",
          address: `${appurl}/webhook/app/uninstall`,
          format: "json",
        },
      },
    });
    
} catch (error) {
    console.log("unstalled webhook error",error);
}
}
export const createScript = async (access_token, shop) => {
    try {
      console.log("createScript ===>>>>>>>>>>>>>", { shop, access_token });
      return await axios({
        url: `https://${shop}/admin/api/${apiversion}/script_tags.json`,
        method: "POST",
        headers: {
          "X-Shopify-Access-Token": access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          script_tag: {
            event: "onload",
            src: `${appurl}/server`,
          },
        },
      });
    } catch (error) {
      console.log("error from here", error);
      return false;
    }
  }
