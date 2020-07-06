import { andThen, pipe } from 'ramda';

import { toModel, toDoc } from '../lib/db/mongodb';
import { findAllInMainDb, findInMainDbBy, findInMainDbByObjectId, upsertInMainDb } from '../lib/db/mongodb/main';

const collectionName = 'users';

export const allUsers = pipe(() => findAllInMainDb(collectionName), andThen(toModel));

export const usersBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(toModel));

export const userById = pipe((id) => findInMainDbByObjectId(collectionName, id), andThen(toModel));

export const saveUser = pipe((user) => upsertInMainDb(collectionName, toDoc(user)), andThen(toModel));
