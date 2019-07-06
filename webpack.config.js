const config = require('webpack-config-github');

module.exports = env => {
    let configuration = config(env, {template: 'src/template.html'});
    configuration.output.library = ['github-relay'];
    configuration.output.libraryTarget = 'umd';
    return configuration;
}

