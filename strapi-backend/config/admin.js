module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cdf1b36ad9d77a041f442a3d41da8f60'),
  },
});
