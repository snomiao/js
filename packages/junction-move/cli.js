#!/usr/bin/env node

// 
// Copyright © 2020 snomiao@gmail.com
// 
// this file is for compatiable to windows and linux and vscode run
// 

const main = require('./index.js')

// RUN cli
if (!module.parent) main().then(console.info).catch(console.error);
