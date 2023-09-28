import * as create from './create';
import { deleteById } from './deleteById';
import * as getAll from './getAll' 
import * as getById from './getById'
import { updateById } from './updateById';

export const UsersController = {
    ...create,
    ...getAll,
    ...getById,
    ...deleteById,
    ...updateById,
}
