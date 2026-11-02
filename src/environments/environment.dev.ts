export const environment = {
  production: false,
  apiUrl: 'http://localhost:8084/api/v1',
  viaCepApi: 'https://viacep.com.br/ws/',
  keycloakConfig: {
    url: 'https://auth.supreme-network.site',
    realm: 'MY_KEYCLOAK',
    clientId: 'SUPREME_NETWORK_CLIENT_APP',
    urlAccount: 'https://auth.supreme-network.site/realms/MY_KEYCLOAK/account/',
  },
};
