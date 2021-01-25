// ==UserScript==
// @name         IH Spam Removal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes posts that contain chinese characters from the 'newest' tab in IndieHackers.
// @author       Robi
// @match        https://www.indiehackers.com/newest
// @match        https://indiehackers.com/newest
// @grant        none
// ==/UserScript==

window.onload = (event) => {
    setInterval(()=>{
    for (let doc of document.getElementsByClassName('feed-item')){
        if (/[\u4e00-\u9FFF]/.test(doc.innerText)){
            doc.remove()
            console.log("Removed spam.")

        }
    }
    },500)
};
