<<<<<<< HEAD
import Application from '../app';
=======
import Application from 'my-app/app';
import config from 'my-app/config/environment';
import * as QUnit from 'qunit';
>>>>>>> 9097a7f (message)
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create({ autoboot: false }));

setup(QUnit.assert);

start();
