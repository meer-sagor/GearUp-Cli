#!/usr/bin/env node

// eslint-disable-next-line n/shebang
import {execute} from '@oclif/core'
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// Register the ts-node/esm loader
register('ts-node/esm', pathToFileURL('./'));

// Execute the CLI
await execute({ development: true, dir: import.meta.url });