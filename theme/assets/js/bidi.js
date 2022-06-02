/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // custom bidi toggle for component previews.
    const bidi = window.document.querySelector('.Pen-bidi-controls');
    const toggles = window.document.querySelectorAll('.Pen-bidi-controls .Pen-bidi-toggle');

    for (let i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener('click', function(e) {
            const id = e.target.name;
            const preview = document.querySelector('#' + id + ' .Preview-iframe').contentWindow.document;
            if (preview) {
                preview.documentElement.setAttribute('dir', e.target.value);
            }
        });
    }

    // reset bidi control after page refresh
    bidi.reset();
})();
