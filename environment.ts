export const environment = {
  production: false,
  serverUrl: '/api',
  keycloak: {
    issuer: 'http://localhost:8080/',     // Url of the Identity Provider
    realm: 'bookhaven',
    clientId: 'bookhaven-client',
  },
};
