import dotenv from "dotenv";
dotenv.config();

export const config = {
  apikey: 'a33711d99464018a9b6004a91e440c84',
  apisecretkey: '35f96433ef49a04afdcb64e67cf681c5',
  mongodburl: 'mongodb+srv://anushkatyagi:anushka1234@cluster0.pxnnr4n.mongodb.net/crud?retryWrites=true&w=majority',
  redirecturl: 'https://5891-125-63-123-171.ngrok-free.app/auth/callback',
  appurl: 'https://5891-125-63-123-171.ngrok-free.app',
  apiversion: '2023-10',
  port:'3000',
  scopes: 'write_script_tags,write_customers,read_customers,read_script_tags',
};

console.log("line 16",config);

