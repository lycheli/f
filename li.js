function togAt(ell, oldAt, newAt) {
thisEl = document.querySelector(ell);
if (thisEl.getAttribute(oldAt)) {
thisEl.removeAttribute(oldAt);
} else {
thisEl.setAttribute(newAt, '');
}
}
function hide(ell) {
thisEl = document.querySelector(ell);
thisEl.setAttribute("hide","");
}

function into(ell) {
thisEl = document.querySelector(ell);
thisEl.removeAttribute("hide");
}
