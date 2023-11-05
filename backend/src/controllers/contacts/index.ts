import * as add from './create';
import * as getAll from './getAll';
import * as deleteById from './deleteById'
import * as get from './getById'
import * as update from './updateById'

export const ContactsController = {
    ...add,
    ...getAll,
    ...get,
    ...update,
    ...deleteById,
}
