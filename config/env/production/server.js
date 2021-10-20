// From https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html

module.exports = ({ env }) => ({
    url: env('PRODUCTION_URL'),
});