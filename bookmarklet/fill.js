// Body of the MDAC bookmarklet. Plain ES5, no dependencies.
// build.js wraps this in (function (PROFILE) { ... })(<profile json>) and
// turns it into a javascript: URL.
//
// Dropdown values can be given either as the option's value attribute
// (e.g. "65", "01") or as its visible text (e.g. "MALE", "LAND", "JOHOR").
// Matching order: exact value, exact text, text starts with, text contains.

(function () {
  function $(id) { return document.getElementById(id); }

  function log(msg) {
    if (window.console && console.log) { console.log('[MDAC autofill] ' + msg); }
  }

  function fire(el, type) {
    var evt = document.createEvent('HTMLEvents');
    evt.initEvent(type, true, false);
    el.dispatchEvent(evt);
  }

  function setText(id, value) {
    var el = $(id);
    if (!el) { log('missing field ' + id); return; }
    if (value === undefined || value === null) { return; }
    el.value = String(value);
    fire(el, 'input');
    fire(el, 'change');
  }

  // Returns index of the option that best matches `want`, or -1.
  function findOption(sel, want) {
    if (want === undefined || want === null || want === '') { return -1; }
    var w = String(want).replace(/^\s+|\s+$/g, '').toUpperCase();
    var opts = sel.options, i, t;
    for (i = 0; i < opts.length; i++) {
      if (String(opts[i].value).toUpperCase() === w) { return i; }
    }
    for (i = 0; i < opts.length; i++) {
      t = opts[i].text.replace(/^\s+|\s+$/g, '').toUpperCase();
      if (t === w) { return i; }
    }
    for (i = 0; i < opts.length; i++) {
      t = opts[i].text.replace(/^\s+|\s+$/g, '').toUpperCase();
      if (t.indexOf(w) === 0) { return i; }
    }
    for (i = 0; i < opts.length; i++) {
      t = opts[i].text.toUpperCase();
      if (t.indexOf(w) !== -1) { return i; }
    }
    return -1;
  }

  function setSelect(id, want) {
    var el = $(id);
    if (!el) { log('missing select ' + id); return -1; }
    var i = findOption(el, want);
    if (i < 0) { log('no option matching "' + want + '" in ' + id); return -1; }
    el.selectedIndex = i;
    fire(el, 'change');
    return i;
  }

  // Wait until the city dropdown has been populated by the state's AJAX call.
  function waitForCities(cb) {
    var city = $('accommodationCity'), tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (city && city.options.length > 1) { clearInterval(timer); cb(true); }
      else if (tries > 40) { clearInterval(timer); cb(false); }
    }, 250);
  }

  function ddmmyyyy(d) {
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear();
  }

  if (location.pathname.indexOf('/mdac') === -1) {
    alert('Open the MDAC registration page first.');
    return;
  }

  var p = PROFILE;

  setText('name', p.name);
  setSelect('sex', p.sex);
  setSelect('nationality', p.nationality);
  setSelect('pob', p.pob);
  setText('passNo', p.passNo);
  setText('dob', p.dob);
  setText('email', p.email);
  setText('confirmEmail', p.email);
  setText('passExpDte', p.passExpDte);
  setSelect('region', p.region);
  setText('mobile', p.mobile);
  setSelect('trvlMode', p.trvlMode);
  setSelect('accommodationStay', p.accommodationStay);
  setText('accommodationAddress1', p.accommodationAddress1);
  setSelect('embark', p.embark);
  setText('vesselNm', p.vesselNm || 'NA');
  setText('accommodationPostcode', p.accommodationPostcode);

  // Travel dates are always computed from the current date when the bookmarklet runs.
  // Departure is today + STAY_DAYS (the form allows trips within 3 days, so 2 is safe).
  var STAY_DAYS = 2;
  var today = new Date(), dep = new Date();
  dep.setDate(today.getDate() + STAY_DAYS);
  setText('arrDt', ddmmyyyy(today));
  setText('depDt', ddmmyyyy(dep));

  // State change triggers an AJAX call that fills the city list, so city goes last.
  setSelect('accommodationState', p.accommodationState);
  waitForCities(function (ok) {
    if (ok) {
      setSelect('accommodationCity', p.accommodationCity);
      alert('MDAC fields filled. Check them, solve the slider and submit.');
    } else {
      alert('Filled everything except City (list did not load). Pick the city manually, then solve the slider and submit.');
    }
  });
})();
