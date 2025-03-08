#!/bin/bash

DEBUG="${DEBUG:-@modernpoacher/gremlins*}"

node -e 'import("./.storybook/transform.mjs").then(({ default: transform }) => transform())'
