#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkAppsyncStack } from '../lib/cdk-appsync-stack';

const app = new cdk.App();
new CdkAppsyncStack(app, 'CdkAppsyncStack', {
});