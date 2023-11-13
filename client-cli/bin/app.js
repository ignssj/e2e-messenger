#!/usr/bin/env node
const yargs = require('yargs');
const { addContact, getAllContacts, removeContact, login, logout, createUser, sendMessage, readMessages} = require('./controller');

yargs
  .usage('Usage: $0 <command> [options]')


  yargs.command('signup <username> <password>', 'Creates a new user', (yargs) => {
    yargs
      .positional('username', {
        describe: 'New user\'s name',
        type: 'string'
      })
      .positional('password', {
        describe: 'New user\'s password',
        type: 'string'
      });
  }, (argv) => {
    createUser(argv.username, argv.password);
  })
  .help('h')
  .alias('h', 'help')


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

yargs.command('login <username> <password>', 'Authenticates an user', (yargs) => {
    yargs
      .positional('username', {
        describe: 'Your username',
        type: 'string'
      })
      .positional('password', {
        describe: 'Your password',
        type: 'string'
      });
  }, (argv) => {
    login(argv.username, argv.password);
  })
  .help('h')
  .alias('h', 'help')

yargs.command('send <name> <message>', 'Sends an encrypted message', (yargs) => {
    yargs
      .positional('name', {
        describe: 'Your contact\'s name',
        type: 'string'
      })
      .positional('message', {
        describe: 'Your message',
        type: 'string'
      });
  }, (argv) => {
    sendMessage(argv.name, argv.message);
  })
  .help('h')
  .alias('h', 'help')

yargs.command('read <name>', 'Read messages from a contact', (yargs) => {
    yargs
      .positional('name', {
        describe: 'Your contact\'s name',
        type: 'string'
      });
  }, (argv) => {
    readMessages(argv.name);
  })
  .help('h')
  .alias('h', 'help')

yargs.command('logout', 'Logout from your account', {}, () => {
    logout();
  })
  .help('h')
  .alias('h', 'help')
  

yargs.command('clist', 'Prints your contact list', {}, () => {
  getAllContacts();
})
.help('h')
.alias('h', 'help')

yargs.argv;
