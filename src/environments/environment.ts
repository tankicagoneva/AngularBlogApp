import { env } from 'src/environments/environment.localhost_default';

export const environment = {
  production: false,
  spaceId: env.spaceId,
  accessToken: env.accessToken,
};
