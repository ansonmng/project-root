import { v4 } from 'uuid';
import { redis } from '../../redis';
import { confirmUserPrefix } from '../constants/redixPrefixes';

export const createConfirmationUrl = (userId: number) => {
    const token = v4();
    redis.set(confirmUserPrefix + token, userId);

    return `http://localhost:3000/confirm/${confirmUserPrefix}${token}`;
}