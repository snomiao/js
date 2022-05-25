/**
 * Copyright © 2020 snomiao@gmail.com
 */

const { exec, execFile, execSync } = require('child_process');
const { fstat } = require('fs');
const { promisify } = require('util');

if (!module.parent) main().then(console.log).catch(console.error);

async function main() {
    await promisify(exec)(`chcp 65001`);
    // READING PARAMS
    const argv = require('yargs')
        .usage('Usage: npx junction-move source_folder target_folder')
        .example('junction-move C:\\Go D:\\Go')
        .example('npx junction-move C:\\Go D:\\Go')
        .help('h').alias('h', 'help')
        .epilog('Copyright (c) 2020 snomiao@gmail.com')
        .argv;

    if (argv._.length !== 2) {
        console.error('Expected 2 arguments but got ', argv._.length, ", you can use -h to learn why.")
        console.error('Got arguments: ', argv._)
        console.error('Extra notice: npx junction-move ... dont support the path with spaces yet even you have included them in ".." ')
        console.error('If you want to solve that you can type "npm install junction-move -g" and then use just "junction-move source_folder target_folder" to handle this.')
        return 'FAIL'
    }

    const [source, target] = argv._
    try { execSync(`robocopy "${source}" "${target}" /MOVE /e `, { stdio: 'inherit' }) } catch (e) {
        console.error("robocopy FAILS, make sure you have the permission to access the source folder")
    }
    try { execSync(`mklink /J "${source}" "${target}"`, { stdio: 'inherit' }) } catch (e) {
        console.error("mklink FAILS, make sure you have the permission to access the source folder")
    }
    return 'done';
}
module.exports = main
