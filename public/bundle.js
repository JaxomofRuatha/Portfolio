(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

function tabsSelect(parent, tab, content) {
  document.querySelector('.' + parent).addEventListener('click', function (e) {
    var targetContent = document.querySelector(e.target.dataset.target);
    var priorActive = document.querySelector('.' + tab + '--active').dataset.target;
    console.log('event', e);

    document.querySelectorAll('.' + tab).forEach(function (a) {
      a.classList.remove(tab + '--active');
      console.log('tab', a);
    });

    e.target.classList.add(tab + '--active');

    if (e.target.tagName === 'A' && document.querySelector(priorActive) !== targetContent) {
      document.querySelector(priorActive).classList.remove(content + '--visible');
      setTimeout(function () {
        targetContent.classList.add(content + '--visible');
      }, 500);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  tabsSelect('skills__menu', 'skills__tab', 'skills__group');

  tabsSelect('profile-info__menu', 'profile-info__tab', 'profile-info__content');

  document.querySelectorAll('.project-view__menu').forEach(function (tabs) {
    tabs.addEventListener('click', function (e) {
      var targetGroup = e.target.dataset.target;
      var newActive = document.querySelectorAll('[data-group="' + targetGroup + '"]');

      document.getElementById('live-menu').checked = false;
      document.getElementById('wip-menu').checked = false;

      // Change the title of the viewer

      document.querySelector('.project-view__title').innerHTML = e.target.innerHTML;

      // Hide previously visible group content

      var priorTile = document.querySelector('.project-view__tile--active');
      if (priorTile) {
        priorTile.classList.remove('project-view__tile--active');
      }
      var priorLinks = document.querySelector('.project-view__links--active');
      if (priorLinks) {
        priorLinks.classList.remove('project-view__links--active');
      }
      var priorTech = document.querySelector('.project-view__tech--active');
      if (priorTech) {
        priorTech.classList.remove('project-view__tech--active');
      }

      // Unhide selected group content

      newActive.forEach(function (piece) {
        piece.classList.add(piece.classList[0] + '--active');
      });
    });
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixHQUE1QixFQUFpQyxPQUFqQyxFQUEwQztBQUN4QyxXQUFTLGFBQVQsT0FBMkIsTUFBM0IsRUFBcUMsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELGFBQUs7QUFDbEUsUUFBTSxnQkFBZ0IsU0FBUyxhQUFULENBQXVCLEVBQUUsTUFBRixDQUFTLE9BQVQsQ0FBaUIsTUFBeEMsQ0FBdEI7QUFDQSxRQUFNLGNBQWMsU0FBUyxhQUFULE9BQTJCLEdBQTNCLGVBQTBDLE9BQTFDLENBQ2pCLE1BREg7QUFFQSxZQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLENBQXJCOztBQUVBLGFBQVMsZ0JBQVQsT0FBOEIsR0FBOUIsRUFBcUMsT0FBckMsQ0FBNkMsYUFBSztBQUNoRCxRQUFFLFNBQUYsQ0FBWSxNQUFaLENBQXNCLEdBQXRCO0FBQ0EsY0FBUSxHQUFSLENBQVksS0FBWixFQUFtQixDQUFuQjtBQUNELEtBSEQ7O0FBS0EsTUFBRSxNQUFGLENBQVMsU0FBVCxDQUFtQixHQUFuQixDQUEwQixHQUExQjs7QUFFQSxRQUNFLEVBQUUsTUFBRixDQUFTLE9BQVQsS0FBcUIsR0FBckIsSUFDQSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsTUFBd0MsYUFGMUMsRUFHRTtBQUNBLGVBQ0csYUFESCxDQUNpQixXQURqQixFQUVHLFNBRkgsQ0FFYSxNQUZiLENBRXVCLE9BRnZCO0FBR0EsaUJBQVcsWUFBTTtBQUNmLHNCQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBK0IsT0FBL0I7QUFDRCxPQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0YsR0F4QkQ7QUF5QkQ7O0FBRUQsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxhQUFXLGNBQVgsRUFBMkIsYUFBM0IsRUFBMEMsZUFBMUM7O0FBRUEsYUFDRSxvQkFERixFQUVFLG1CQUZGLEVBR0UsdUJBSEY7O0FBTUEsV0FBUyxnQkFBVCxDQUEwQixxQkFBMUIsRUFBaUQsT0FBakQsQ0FBeUQsZ0JBQVE7QUFDL0QsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixhQUFLO0FBQ2xDLFVBQU0sY0FBYyxFQUFFLE1BQUYsQ0FBUyxPQUFULENBQWlCLE1BQXJDO0FBQ0EsVUFBTSxZQUFZLFNBQVMsZ0JBQVQsbUJBQ0EsV0FEQSxRQUFsQjs7QUFJQSxlQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsT0FBckMsR0FBK0MsS0FBL0M7QUFDQSxlQUFTLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsT0FBcEMsR0FBOEMsS0FBOUM7O0FBRUE7O0FBRUEsZUFBUyxhQUFULENBQXVCLHNCQUF2QixFQUErQyxTQUEvQyxHQUNFLEVBQUUsTUFBRixDQUFTLFNBRFg7O0FBR0E7O0FBRUEsVUFBTSxZQUFZLFNBQVMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBbEI7QUFDQSxVQUFJLFNBQUosRUFBZTtBQUNiLGtCQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsNEJBQTNCO0FBQ0Q7QUFDRCxVQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLDhCQUF2QixDQUFuQjtBQUNBLFVBQUksVUFBSixFQUFnQjtBQUNkLG1CQUFXLFNBQVgsQ0FBcUIsTUFBckIsQ0FBNEIsNkJBQTVCO0FBQ0Q7QUFDRCxVQUFNLFlBQVksU0FBUyxhQUFULENBQXVCLDZCQUF2QixDQUFsQjtBQUNBLFVBQUksU0FBSixFQUFlO0FBQ2Isa0JBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQiw0QkFBM0I7QUFDRDs7QUFFRDs7QUFFQSxnQkFBVSxPQUFWLENBQWtCLGlCQUFTO0FBQ3pCLGNBQU0sU0FBTixDQUFnQixHQUFoQixDQUF1QixNQUFNLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBdkI7QUFDRCxPQUZEO0FBR0QsS0FsQ0Q7QUFtQ0QsR0FwQ0Q7QUFxQ0QsQ0E5Q0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImZ1bmN0aW9uIHRhYnNTZWxlY3QocGFyZW50LCB0YWIsIGNvbnRlbnQpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwYXJlbnR9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGNvbnN0IHRhcmdldENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUudGFyZ2V0LmRhdGFzZXQudGFyZ2V0KTtcclxuICAgIGNvbnN0IHByaW9yQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFifS0tYWN0aXZlYCkuZGF0YXNldFxyXG4gICAgICAudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGFifWApLmZvckVhY2goYSA9PiB7XHJcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShgJHt0YWJ9LS1hY3RpdmVgKTtcclxuICAgICAgY29uc29sZS5sb2coJ3RhYicsIGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChgJHt0YWJ9LS1hY3RpdmVgKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGUudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJlxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByaW9yQWN0aXZlKSAhPT0gdGFyZ2V0Q29udGVudFxyXG4gICAgKSB7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IocHJpb3JBY3RpdmUpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y29udGVudH0tLXZpc2libGVgKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0Q29udGVudC5jbGFzc0xpc3QuYWRkKGAke2NvbnRlbnR9LS12aXNpYmxlYCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgdGFic1NlbGVjdCgnc2tpbGxzX19tZW51JywgJ3NraWxsc19fdGFiJywgJ3NraWxsc19fZ3JvdXAnKTtcclxuXHJcbiAgdGFic1NlbGVjdChcclxuICAgICdwcm9maWxlLWluZm9fX21lbnUnLFxyXG4gICAgJ3Byb2ZpbGUtaW5mb19fdGFiJyxcclxuICAgICdwcm9maWxlLWluZm9fX2NvbnRlbnQnXHJcbiAgKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtdmlld19fbWVudScpLmZvckVhY2godGFicyA9PiB7XHJcbiAgICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEdyb3VwID0gZS50YXJnZXQuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgYFtkYXRhLWdyb3VwPVwiJHt0YXJnZXRHcm91cH1cIl1gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1tZW51JykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lwLW1lbnUnKS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyBDaGFuZ2UgdGhlIHRpdGxlIG9mIHRoZSB2aWV3ZXJcclxuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXZpZXdfX3RpdGxlJykuaW5uZXJIVE1MID1cclxuICAgICAgICBlLnRhcmdldC5pbm5lckhUTUw7XHJcblxyXG4gICAgICAvLyBIaWRlIHByZXZpb3VzbHkgdmlzaWJsZSBncm91cCBjb250ZW50XHJcblxyXG4gICAgICBjb25zdCBwcmlvclRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3X190aWxlLS1hY3RpdmUnKTtcclxuICAgICAgaWYgKHByaW9yVGlsZSkge1xyXG4gICAgICAgIHByaW9yVGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LXZpZXdfX3RpbGUtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByaW9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3X19saW5rcy0tYWN0aXZlJyk7XHJcbiAgICAgIGlmIChwcmlvckxpbmtzKSB7XHJcbiAgICAgICAgcHJpb3JMaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LXZpZXdfX2xpbmtzLS1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwcmlvclRlY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3X190ZWNoLS1hY3RpdmUnKTtcclxuICAgICAgaWYgKHByaW9yVGVjaCkge1xyXG4gICAgICAgIHByaW9yVGVjaC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LXZpZXdfX3RlY2gtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVbmhpZGUgc2VsZWN0ZWQgZ3JvdXAgY29udGVudFxyXG5cclxuICAgICAgbmV3QWN0aXZlLmZvckVhY2gocGllY2UgPT4ge1xyXG4gICAgICAgIHBpZWNlLmNsYXNzTGlzdC5hZGQoYCR7cGllY2UuY2xhc3NMaXN0WzBdfS0tYWN0aXZlYCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=
