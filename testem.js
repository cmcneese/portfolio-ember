<<<<<<< HEAD
/* eslint-env node */
=======
'use strict';

>>>>>>> 9097a7f (message)
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome'],
  browser_start_timeout: 120,
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=0',
<<<<<<< HEAD
        '--window-size=1440,900'
      ]
    }
  }
=======
        '--window-size=1440,900',
      ].filter(Boolean),
    },
  },
>>>>>>> 9097a7f (message)
};
