import { getaccounts } from "./metamask_connection";
async function test(){
let a=await getaccounts();

console.log(a[0]);
}
test();