const questionHeader = document.getElementById('question-header')
const codeblocks = document.querySelectorAll('pre')
const posts = document.querySelectorAll(['div.answer', '#question'])
const clipboardIcon = `
    <svg height="25" viewBox="0 0 21 21" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)"><path d="m3.5 1.5c-.42139382 0-1.08806048 0-2 0-.55228475 0-1 .44771525-1 1v11c0 .5522848.44771525 1 1 1h10c.5522847 0 1-.4477152 1-1v-11c0-.55228475-.4477153-1-1-1-.8888889 0-1.55555556 0-2 0"/><path d="m4.5.5h4c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-4c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z"/><path d="m6.5 5.5v6.056"/><path d="m6.5 5.5v6" transform="matrix(0 1 -1 0 15 2)"/></g></svg>`
const clipboardIcon2 = `
    <svg height="25" viewBox="0 0 21 21" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)"><path d="m3.5 1.5c-.42139382 0-1.08806048 0-2 0-.55228475 0-1 .44771525-1 1v11c0 .5522848.44771525 1 1 1h10c.5522847 0 1-.4477152 1-1v-11c0-.55228475-.4477153-1-1-1-.8888889 0-1.55555556 0-2 0"/><path d="m4.5.5h4c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-4c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z"/><path d="m3.5 8.5 2 2 5-5"/></g></svg>`
const collapseIcon = `
    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke-width="2" fill-rule="evenodd" stroke="black" stroke-linecap="round" stroke-linejoin="round" transform="translate(7 5)"><path d="m.5 3.5 3-3 3 3"/><path d="m.5 8.5 3 3 3-3"/></g></svg>`

let timeout

questionHeader.classList.value = ''
for (let c of questionHeader.children) {c.classList.value = ''}

codeblocks.forEach(codeblock => {
    const button = document.createElement('div')
    button.classList.add('__so-extension-copy-button__')
    codeblock.insertAdjacentElement('afterend', button)

    button.innerHTML = clipboardIcon

    button.onpointerdown = () => {
        clearTimeout(timeout)
        navigator.clipboard.writeText(codeblock.textContent)
        button.innerHTML = clipboardIcon2

        timeout = setTimeout(() => {
            button.innerHTML = clipboardIcon
        }, 1000)
    }
})

posts.forEach(post => {
    const button = document.createElement('div')
    button.classList.add('__so-extension-collapse-button__')
    post.prepend(button)

    button.innerHTML = `
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke-width="2" fill-rule="evenodd" stroke="black" stroke-linecap="round" stroke-linejoin="round" transform="translate(7 5)"><path d="m.5 3.5 3-3 3 3"/><path d="m.5 8.5 3 3 3-3"/></g></svg>`

    button.onpointerdown = () => {
        post.classList.toggle('__so-extension-collapsed__')
    }
})