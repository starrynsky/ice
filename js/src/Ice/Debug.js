// **********************************************************************
//
// Copyright (c) 2003-2018 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************

/* eslint no-sync: "off" */
/* eslint no-process-exit: "off" */

const Ice = require("../Ice/ModuleRegistry").Ice;
const fs = require("fs");

class Debug
{
    static assert(b, msg)
    {
        if(!b)
        {
            fs.writeSync(process.stderr.fd, msg === undefined ? "assertion failed" : msg);
            fs.writeSync(process.stderr.fd, new Error().stack);
            process.exit(1);
        }
    }
}
Ice.Debug = Debug;
module.exports.Ice = Ice;
