import { env } from 'src/environments/environment.localhost_default';

export const environment = {
  production: true,
  spaceId: env.spaceId,
  accessToken: env.accessToken,
};
