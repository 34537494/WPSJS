import { handleFetch } from "../components/WebAddinCommon";
import { apiPublicPath } from "../settings";

export async function getruleset(data) {
  return handleFetch(`${apiPublicPath}users/getUserWebOpt`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
export async function setruleset(data) {
  handleFetch(`${apiPublicPath}users/setUserWebOpt`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
 
