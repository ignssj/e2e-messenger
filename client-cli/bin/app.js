#!/usr/bin/env node
const yargs = require('yargs');
const { addContact, getAllContacts, removeContact} = require('./controller');

yargs
  .usage('Usage: $0 <command> [options]')

yargs.command('add <name> <id>', 'Adds a new contact to your list', (yargs) => {
  yargs
    .positional('name', {
      describe: 'Your contact\'s name',
      type: 'string'
    })
    .positional('id', {
      describe: 'Your contact\'s id',
      type: 'string'
    });
}, (argv) => {
  addContact(argv.name, argv.id);
})
.help('h')
.alias('h', 'help')

yargs.command('rm <name>', 'Removes a contact of your list', (yargs) => {
  yargs
    .positional('id', {
      describe: 'Your contact\'s id',
      type: 'string'
    });
}, (argv) => {
  removeContact(argv.id);
})
.help('h')
.alias('h', 'help')

yargs.command('clist', 'Prints your contact list', {}, () => {
  getAllContacts();
})
.help('h')
.alias('h', 'help')

yargs.argv;
