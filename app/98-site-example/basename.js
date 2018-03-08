import path from 'path';

export const basename = '/' + path.basename(path.dirname(__dirname)) + '/' + path.basename(__dirname);
