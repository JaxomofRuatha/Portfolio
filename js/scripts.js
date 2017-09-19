/*
$(document).ready(() => {

  //TODO: make black if starting lower than the pixScrolled
  $(window).scroll(() => {
    let pixScrolled = window.innerHeight * 0.3;
    let activeBar = false;

    if (document.body.scrollTop > pixScrolled || document.documentElement.scrollTop > pixScrolled) {
      $("nav").addClass("scrolledNav")
      activeBar = true;
    }
    else if (document.body.scrollTop < pixScrolled || document.documentElement.scrollTop < pixScrolled && activeBar == true) {
      $("nav").removeClass("scrolledNav");
    }
  })

  //TODO: Toggle selected style
  //TODO: Make disappear without making shrink?
  $(".skill-icons__buttons button").click((e) => {
    
    const targetClass = $(event.target).attr("class");

    $(".skill-icons__display").find(`div.${targetClass} *`).slideToggle(500);
    e.stopPropagation();
  })
})*/
(() => {

  let tabWindow = [].slice.call(document.querySelectorAll('.project-view')) || [];

  const handleTabClick = (tabLink, tabLinks, tabPanels, linkIndex, e) => {

    tabLinks.forEach((link) => {
      link.setAttribute('tabindex', '-1');
      link.setAttribute('tab-selected', 'false');
      link.parentNode.removeAttribute('tab-active');
      link.removeAttribute('tab-active');

      tabLink.setAttribute('tabindex', '0');
      tabLink.setAttribute('tab-selected', 'true');
      tabLink.parentNode.setAttribute('tab-active', '');
      tabLink.setAttribute('tab-active', '');

      tabPanels.forEach((panel, index) => {
        if (index != linkIndex) {
          panel.setAttribute('tab-hidden', 'true');
          panel.removeAttribute('tab-active');
        } else {
          panel.setAttribute('tab-hidden', 'false');
          panel.setAttribute('tab-active', '');
        }
      });

    });
  }
  tabWindow.forEach((tabWindowInstance, i) => {
    let tabList = tabWindowInstance.getElementsByTagName('ul')[0],
      tabItems = [].slice.call(tabList.getElementsByTagName('li')),
      tabLinks = [],
      tabPanels = [].slice.call(tabWindowInstance.querySelectorAll('.project-tile'));

    // Add accessibility roles and labels
    tabList.setAttribute('role', 'tablist');
    tabItems.forEach((item, index) => {
      let link = item.getElementsByTagName('a')[0];

      tabLinks.push(link);
      item.setAttribute('role', 'presentation');

      if (index == 0) {
        item.setAttribute('tab-active', '');
      }
    });

    tabLinks.forEach((link, i) => {
      let anchor = link.getAttribute('href').split('#')[1];
      let attributes = {
        'id': 'tab-link-' + i,
        'role': 'tab',
        'tabIndex': '-1',
        'tab-selected': 'false',
        'tab-controls': anchor
      };

      // if it's the first element update the attributes
      if (i == 0) {
        attributes['tab-selected'] = 'true';
        attributes.tabIndex = '0';
        link.setAttribute('tab-active', '');
      };

      // Add the various accessibility roles and labels to the links
      for (let key in attributes) {
        link.setAttribute(key, attributes[key]);
      }

      // Click Event Listener
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });

      // Click Event Listener
      link.addEventListener('focus', (e) => {
        tabClickEvent(this, tabLinks, tabPanels, i, e);
      });

      // Keyboard event listener
      link.addEventListener('keydown', (e) => {
        handleTabClick(link, tabLinks, tabPanels, tabItems, i, e);
      });
    });

    // set up tab panels
    tabPanels.forEach((panel, i) => {
      let nextTabLink = document.createElement('a'),
        nextTabLinkIndex = (i < tabPanels.length - 1) ? i + 1 : 0;

      let attributes = {
        'role': 'tabpanel',
        'tab-hidden': 'true',
        'tab-labelledby': 'tab-link-' + i
      };

      // set up next tab link
      nextTabLink.setAttribute('href', '#tab-link-' + nextTabLinkIndex);
      nextTabLink.textContent = 'Next Tab';
      panel.appendChild(nextTabLink);

      if (i == 0) {
        attributes['tab-hidden'] = 'false';
        panel.setAttribute('tab-active', '');
      }

      for (let key in attributes) {
        panel.setAttribute(key, attributes[key]);
      }
    });
  });
})();


/*
*  Project display
*/

//TODO: Default selection is Portfolio project summary, no actual button.