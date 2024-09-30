#!/bin/bash

DEBUG=@modernpoacher/gremlins*
node -e 'import("./build/transform.mjs").then(({ default: transform }) => transform())'
