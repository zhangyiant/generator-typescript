var Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
    writing() {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                appname: path.basename(process.cwd())
            }
        );
        this.fs.copy(
            this.templatePath('tsconfig.json'),
            this.destinationPath('tsconfig.json')
        );
        this.fs.copy(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );
        return;
    }
};
