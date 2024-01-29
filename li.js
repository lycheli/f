function togAt(togell, oldAt, newAt) {
togthisEl = document.querySelector(togell);
if (togthisEl.getAttribute(oldAt)) {
togthisEl.removeAttribute(oldAt);
} else {
togthisEl.setAttribute(newAt, '');
}
}
function hide(hideell) {
hidethisEl = document.querySelector(hideell);
hidethisEl.setAttribute("hide","");
}

function into(toell) {
intothisEl = document.querySelector(toell);
intothisEl.removeAttribute("hide");
}
