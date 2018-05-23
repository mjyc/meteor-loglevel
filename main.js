import log from 'meteor/mjyc:loglevel';

const logging = Meteor.isServer ? Meteor.settings.logging : Meteor.settings.public.logging;
if (logging) {
  if (logging.default) log.setDefaultLevel(logging.default);
  if (logging.levels) {
    for (let name in logging.levels) {
      log.getLogger(name).setLevel(logging.levels[name]);
    }
  }
}

export default log;
