import '@angular/compiler';

import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'keycloak-user-mf': 'https://app-keycloak-integration.supreme-network.site/remoteEntry.json',
})
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
