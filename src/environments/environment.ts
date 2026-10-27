export const environment = {
  production: true,
  apiUrl: 'https://api.supreme-network.site/api/v1',
  viaCepApi: 'https://viacep.com.br/ws/',
  keycloakConfig: {
    url: 'https://auth.supreme-network.site',
    realm: 'MY_KEYCLOAK',
    clientId: 'SUPREME_NETWORK_CLIENT_APP',
    urlAccount:
      'https://auth.supreme-network.site/realms/MY_KEYCLOAK/account/',
  },
};