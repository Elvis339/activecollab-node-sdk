import { API, API_VERSION } from './constants';

type AccountType = 'cloud' | 'selfHosted';

interface Args {
  type: AccountType;
  path: string;
  url?: string;
  accountId?: string;
}

export const buildUrl = (args: Args) => {
  const { type = 'cloud' } = args;
  let path = args.path;

  if (type === 'cloud' && args.accountId === undefined) {
    throw new Error(`cloud accounts require account id`);
  }

  if (path.charAt(0) !== '/') {
    path = '/' + path;
  }

  if (type === 'selfHosted') {
    if (args.url === undefined) {
      throw new Error(`url argument is required for self-hosted accounts`);
    }
    const url = args.url.charAt(args.url.length - 1) !== '/' ? args.url + '/' : args.url;
    return url + API_VERSION + path;
  }

  return API.BASE_URL + '/' + args.accountId + '/' + API_VERSION + path;
};
