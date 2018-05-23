# Meteor Loglevel

Meteor package for [pimterry\'s loglevel](https://github.com/pimterry/loglevel).

For now, it is a thin wrapper around loglevel.

## Example

Configure your Meteor settings file, e.g.

```
  ...

  "public": {
    "logging": {  // client logging
      "default": "debug"
    }
  },

  ...

  "logging": {  // server logging
    "default": "debug",
    "levels": {
      "fixtures": "info"
    }
  }

  ...
```

and then use it! in your `server_file.js`:

```
import log from 'meteor/mjyc:loglevel';

logger = log.getLogger('my_meteor_methods');

...

logger.debug(`method was called with args! ${args}`);
```

and in your `client_file.jsx`:

```
import log from 'meteor/mjyc:loglevel';

logger = log.getLogger('MyReactComponent');

...

logger.warn(`MyReactComponent did not received props?! ${props}`);
```
