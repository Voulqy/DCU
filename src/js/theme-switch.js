// const STORAGE_KEY = 'theme';
// const THEME_ATTRIBUTE = 'data-theme';
// const THEME_BTN_CLASS = '.js-theme-btn';

// function setTheme() {
// 	// Are we using the "light" or "dark" theme?
// 	let theme = localStorage.getItem(STORAGE_KEY); // Either "light" or "dark"

// 	// Set the data attribute to the theme
// 	document.body.setAttribute(THEME_ATTRIBUTE, theme);
// }

// function handleThemeBtnClick() {
// 	// figure what do we need to change the theme to?
// 	const currentTheme = document.body.getAttribute(THEME_ATTRIBUTE);

// 	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	
// 	localStorage.setItem(STORAGE_KEY, newTheme);

// 	setTheme();
// }

// document.querySelector(THEME_BTN_CLASS).addEventListener('click', handleThemeBtnClick);

// setTheme();


function $(el){
    return document.querySelector(el);
  }
  
  let container = $('.container');
  let toggle = $('#toggle-theme'); 
  
  toggle.addEventListener('click', () => {
    let list = container.classList;
    
    if(list.contains('default')){
      list.replace('default','light');
      toggle.textContent = 'Dark';
    }else{
      list.replace('light','default');
      toggle.textContent = 'Light'; 
    }
    
  })