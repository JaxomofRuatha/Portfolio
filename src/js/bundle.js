(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  // document.querySelector('.skills__menu').addEventListener('click', e => {
  //   const targetIcons = document.querySelector(e.target.dataset.target);
  //   const priorActive = document.querySelector('.skills__tab--active').dataset
  //     .target;

  //   document.querySelectorAll('.skills__tab').forEach(a => {
  //     a.classList.remove('skills__tab--active');
  //   });

  //   e.target.classList.add('skills__tab--active');

  //   if (
  //     e.target.tagName === 'A' &&
  //     document.querySelector(`${priorActive}`) !== targetIcons
  //   ) {
  //     document
  //       .querySelector(`${priorActive}`)
  //       .classList.remove('skills__group--visible');
  //     setTimeout(() => {
  //       targetIcons.classList.add('skills__group--visible');
  //     }, 500);
  //   }
  // });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixHQUE1QixFQUFpQyxPQUFqQyxFQUEwQztBQUN4QyxXQUFTLGFBQVQsT0FBMkIsTUFBM0IsRUFBcUMsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELGFBQUs7QUFDbEUsUUFBTSxnQkFBZ0IsU0FBUyxhQUFULENBQXVCLEVBQUUsTUFBRixDQUFTLE9BQVQsQ0FBaUIsTUFBeEMsQ0FBdEI7QUFDQSxRQUFNLGNBQWMsU0FBUyxhQUFULE9BQTJCLEdBQTNCLGVBQTBDLE9BQTFDLENBQ2pCLE1BREg7QUFFQSxZQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLENBQXJCOztBQUVBLGFBQVMsZ0JBQVQsT0FBOEIsR0FBOUIsRUFBcUMsT0FBckMsQ0FBNkMsYUFBSztBQUNoRCxRQUFFLFNBQUYsQ0FBWSxNQUFaLENBQXNCLEdBQXRCO0FBQ0EsY0FBUSxHQUFSLENBQVksS0FBWixFQUFtQixDQUFuQjtBQUNELEtBSEQ7O0FBS0EsTUFBRSxNQUFGLENBQVMsU0FBVCxDQUFtQixHQUFuQixDQUEwQixHQUExQjs7QUFFQSxRQUNFLEVBQUUsTUFBRixDQUFTLE9BQVQsS0FBcUIsR0FBckIsSUFDQSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsTUFBd0MsYUFGMUMsRUFHRTtBQUNBLGVBQ0csYUFESCxDQUNpQixXQURqQixFQUVHLFNBRkgsQ0FFYSxNQUZiLENBRXVCLE9BRnZCO0FBR0EsaUJBQVcsWUFBTTtBQUNmLHNCQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBK0IsT0FBL0I7QUFDRCxPQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0YsR0F4QkQ7QUF5QkQ7O0FBRUQsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxhQUFXLGNBQVgsRUFBMkIsYUFBM0IsRUFBMEMsZUFBMUM7O0FBRUEsYUFDRSxvQkFERixFQUVFLG1CQUZGLEVBR0UsdUJBSEY7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVMsZ0JBQVQsQ0FBMEIscUJBQTFCLEVBQWlELE9BQWpELENBQXlELGdCQUFRO0FBQy9ELFNBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsYUFBSztBQUNsQyxVQUFNLGNBQWMsRUFBRSxNQUFGLENBQVMsT0FBVCxDQUFpQixNQUFyQztBQUNBLFVBQU0sWUFBWSxTQUFTLGdCQUFULG1CQUNBLFdBREEsUUFBbEI7O0FBSUEsZUFBUyxjQUFULENBQXdCLFdBQXhCLEVBQXFDLE9BQXJDLEdBQStDLEtBQS9DO0FBQ0EsZUFBUyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLE9BQXBDLEdBQThDLEtBQTlDOztBQUVBOztBQUVBLGVBQVMsYUFBVCxDQUF1QixzQkFBdkIsRUFBK0MsU0FBL0MsR0FDRSxFQUFFLE1BQUYsQ0FBUyxTQURYOztBQUdBOztBQUVBLFVBQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWxCO0FBQ0EsVUFBSSxTQUFKLEVBQWU7QUFDYixrQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLDRCQUEzQjtBQUNEO0FBQ0QsVUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBbkI7QUFDQSxVQUFJLFVBQUosRUFBZ0I7QUFDZCxtQkFBVyxTQUFYLENBQXFCLE1BQXJCLENBQTRCLDZCQUE1QjtBQUNEO0FBQ0QsVUFBTSxZQUFZLFNBQVMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBbEI7QUFDQSxVQUFJLFNBQUosRUFBZTtBQUNiLGtCQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsNEJBQTNCO0FBQ0Q7O0FBRUQ7O0FBRUEsZ0JBQVUsT0FBVixDQUFrQixpQkFBUztBQUN6QixjQUFNLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBdUIsTUFBTSxTQUFOLENBQWdCLENBQWhCLENBQXZCO0FBQ0QsT0FGRDtBQUdELEtBbENEO0FBbUNELEdBcENEO0FBcUNELENBckVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHRhYnNTZWxlY3QocGFyZW50LCB0YWIsIGNvbnRlbnQpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwYXJlbnR9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGNvbnN0IHRhcmdldENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUudGFyZ2V0LmRhdGFzZXQudGFyZ2V0KTtcclxuICAgIGNvbnN0IHByaW9yQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFifS0tYWN0aXZlYCkuZGF0YXNldFxyXG4gICAgICAudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGFifWApLmZvckVhY2goYSA9PiB7XHJcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShgJHt0YWJ9LS1hY3RpdmVgKTtcclxuICAgICAgY29uc29sZS5sb2coJ3RhYicsIGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChgJHt0YWJ9LS1hY3RpdmVgKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGUudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJlxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByaW9yQWN0aXZlKSAhPT0gdGFyZ2V0Q29udGVudFxyXG4gICAgKSB7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IocHJpb3JBY3RpdmUpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y29udGVudH0tLXZpc2libGVgKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0Q29udGVudC5jbGFzc0xpc3QuYWRkKGAke2NvbnRlbnR9LS12aXNpYmxlYCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgdGFic1NlbGVjdCgnc2tpbGxzX19tZW51JywgJ3NraWxsc19fdGFiJywgJ3NraWxsc19fZ3JvdXAnKTtcclxuXHJcbiAgdGFic1NlbGVjdChcclxuICAgICdwcm9maWxlLWluZm9fX21lbnUnLFxyXG4gICAgJ3Byb2ZpbGUtaW5mb19fdGFiJyxcclxuICAgICdwcm9maWxlLWluZm9fX2NvbnRlbnQnXHJcbiAgKTtcclxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbGxzX19tZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAvLyAgIGNvbnN0IHRhcmdldEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnRhcmdldC5kYXRhc2V0LnRhcmdldCk7XHJcbiAgLy8gICBjb25zdCBwcmlvckFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2lsbHNfX3RhYi0tYWN0aXZlJykuZGF0YXNldFxyXG4gIC8vICAgICAudGFyZ2V0O1xyXG5cclxuICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbHNfX3RhYicpLmZvckVhY2goYSA9PiB7XHJcbiAgLy8gICAgIGEuY2xhc3NMaXN0LnJlbW92ZSgnc2tpbGxzX190YWItLWFjdGl2ZScpO1xyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2tpbGxzX190YWItLWFjdGl2ZScpO1xyXG5cclxuICAvLyAgIGlmIChcclxuICAvLyAgICAgZS50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmXHJcbiAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cHJpb3JBY3RpdmV9YCkgIT09IHRhcmdldEljb25zXHJcbiAgLy8gICApIHtcclxuICAvLyAgICAgZG9jdW1lbnRcclxuICAvLyAgICAgICAucXVlcnlTZWxlY3RvcihgJHtwcmlvckFjdGl2ZX1gKVxyXG4gIC8vICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdza2lsbHNfX2dyb3VwLS12aXNpYmxlJyk7XHJcbiAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICAgIHRhcmdldEljb25zLmNsYXNzTGlzdC5hZGQoJ3NraWxsc19fZ3JvdXAtLXZpc2libGUnKTtcclxuICAvLyAgICAgfSwgNTAwKTtcclxuICAvLyAgIH1cclxuICAvLyB9KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtdmlld19fbWVudScpLmZvckVhY2godGFicyA9PiB7XHJcbiAgICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEdyb3VwID0gZS50YXJnZXQuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgYFtkYXRhLWdyb3VwPVwiJHt0YXJnZXRHcm91cH1cIl1gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1tZW51JykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lwLW1lbnUnKS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyBDaGFuZ2UgdGhlIHRpdGxlIG9mIHRoZSB2aWV3ZXJcclxuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXZpZXdfX3RpdGxlJykuaW5uZXJIVE1MID1cclxuICAgICAgICBlLnRhcmdldC5pbm5lckhUTUw7XHJcblxyXG4gICAgICAvLyBIaWRlIHByZXZpb3VzbHkgdmlzaWJsZSBncm91cCBjb250ZW50XHJcblxyXG4gICAgICBjb25zdCBwcmlvclRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3X190aWxlLS1hY3RpdmUnKTtcclxuICAgICAgaWYgKHByaW9yVGlsZSkge1xyXG4gICAgICAgIHByaW9yVGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LXZpZXdfX3RpbGUtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByaW9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3X19saW5rcy0tYWN0aXZlJyk7XHJcbiAgICAgIGlmIChwcmlvckxpbmtzKSB7XHJcbiAgICAgICAgcHJpb3JMaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LXZpZXdfX2xpbmtzLS1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwcmlvclRlY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3X190ZWNoLS1hY3RpdmUnKTtcclxuICAgICAgaWYgKHByaW9yVGVjaCkge1xyXG4gICAgICAgIHByaW9yVGVjaC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LXZpZXdfX3RlY2gtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVbmhpZGUgc2VsZWN0ZWQgZ3JvdXAgY29udGVudFxyXG5cclxuICAgICAgbmV3QWN0aXZlLmZvckVhY2gocGllY2UgPT4ge1xyXG4gICAgICAgIHBpZWNlLmNsYXNzTGlzdC5hZGQoYCR7cGllY2UuY2xhc3NMaXN0WzBdfS0tYWN0aXZlYCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=
