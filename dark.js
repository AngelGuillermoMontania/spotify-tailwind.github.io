// On page load or when changing themes, best to add inline in `head` to avoid FOUC

// Whenever the user explicitly chooses light mode

// Whenever the user explicitly chooses dark mode

// Whenever the user explicitly chooses to respect the OS preference



window.addEventListener("load", () => {
  localStorage.removeItem('theme')
  
  const dark = document.querySelector("#default-toggle")
  dark.addEventListener('click', (e) => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      }
    console.log(localStorage.theme)
  })
    
})