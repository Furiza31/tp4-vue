// file src/lib/microsoftGraph.js
import * as msal from '@azure/msal-browser'

// tes scopes, instance, etc.
const requestedScopes = { scopes: ['User.Read'] }

export const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
  },
  cache: {
    cacheLocation: 'sessionStorage'
  }
})

export async function signInAndGetUser() {
  // ① initialise MSAL (par ex. récupère les éventuels callbacks redirect)
  await msalInstance.initialize()

  // ② lance la popup de connexion
  const authResult = await msalInstance.loginPopup(requestedScopes)

  // ③ stocke puis renvoie le compte
  msalInstance.setActiveAccount(authResult.account)
  return authResult.account
}