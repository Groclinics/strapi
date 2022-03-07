module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e9ef9d912d3d349c9bb9fc4d4c234b5f'),
  },
});
