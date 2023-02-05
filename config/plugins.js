const crypto = require('crypto');

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_3233') || crypto.randomBytes(16).toString('base64'),
    },
  },
});
