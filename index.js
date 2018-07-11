// ==UserScript==
// @name         GitHub API JSON Tokenify Links
// @version      1.0.0
// @include      /^https?:\/\/(git(hub)?.[^.]*.[^.]*|github.com)\/.*/
// @grant        none
// ==/UserScript==

(() => {
document.body.innerHTML = document.body.innerHTML.replace(
  /"(https?:\/\/[^"]*api[^"]*)"/g,
  `"<a href="$1?access_token=${new URLSearchParams(window.location.search).get('access_token')}">$1</a>"`
)
})()
