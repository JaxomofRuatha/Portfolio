(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";document.addEventListener("DOMContentLoaded",function(){document.querySelector(".skills__menu").addEventListener("click",function(e){var t=document.querySelector(e.target.dataset.target),c=document.querySelector(".skills__tab--active").dataset.target;document.querySelectorAll(".skills__tab").forEach(function(e){e.classList.remove("skills__tab--active")}),e.target.classList.add("skills__tab--active"),"A"===e.target.tagName&&document.querySelector(""+c)!==t&&(document.querySelector(""+c).classList.remove("skills__group--visible"),setTimeout(function(){t.classList.add("skills__group--visible")},500))}),document.querySelectorAll(".project-view__menu").forEach(function(e){e.addEventListener("click",function(e){var t=e.target.dataset.target,c=document.querySelectorAll('[data-group="'+t+'"]');document.getElementById("live-menu").checked=!1,document.getElementById("wip-menu").checked=!1,document.querySelector(".project-view__title").innerHTML=e.target.innerHTML;var r=document.querySelector(".project-view__tile--active");r&&r.classList.remove("project-view__tile--active");var i=document.querySelector(".project-view__links--active");i&&i.classList.remove("project-view__links--active");var a=document.querySelector(".project-view__tech--active");a&&a.classList.remove("project-view__tech--active"),c.forEach(function(e){e.classList.add(e.classList[0]+"--active")})})})});

},{}]},{},[1]);