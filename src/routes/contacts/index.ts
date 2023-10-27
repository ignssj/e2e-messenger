import express from 'express'
import { ContactsController } from '../../controllers';

const router = express.Router();
const { addContact, addValidation } = ContactsController;

router.post('', addValidation, addContact);

export default router;