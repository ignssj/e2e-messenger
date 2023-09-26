import * as create from './create';
import * as getAll from './getAll' 
import * as getById from './getById'

export const UsersController = {
    ...create,
    ...getAll,
    ...getById,
}
