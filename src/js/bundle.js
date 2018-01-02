(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.skill-tabs').addEventListener('click', e => {
    const targetIcons = document.querySelector(e.target.dataset.target);
    const priorActive = document.querySelector('.tab-active').dataset.target;

    document.querySelectorAll('.skill-tabs a').forEach(a => {
      a.classList.remove('tab-active');
    });

    e.target.classList.add('tab-active');

    if (
      e.target.tagName === 'A' &&
      document.querySelector(`${priorActive}`) !== targetIcons
    ) {
      document.querySelector(`${priorActive}`).classList.remove('visible-tile');
      setTimeout(() => {
        targetIcons.classList.add('visible-tile');
      }, 500);
    }
  });

  document.querySelectorAll('.tab-expand').forEach(tabs => {
    tabs.addEventListener('click', e => {
      const targetTile = document.querySelector(e.target.dataset.target);

      document.getElementById('live-menu').checked = false;
      document.getElementById('wip-menu').checked = false;

      document.querySelectorAll('.project-tile').forEach(tile => {
        tile.classList.remove('project-active');
      });

      targetTile.classList.add('project-active');
    });
  });
});

},{}]},{},[1]);
