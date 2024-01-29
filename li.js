function togAt(togell, oldAt, newAt) {
togthisEl = document.getElementById(togell.id);
if (togthisEl.getAttribute(oldAt)) {
togthisEl.removeAttribute(oldAt);
} else {
togthisEl.setAttribute(newAt, '');
}
}
function hide(hideell) {
hidethisEl = document.getElementById(hideell.id);
hidethisEl.setAttribute("hide","");
}

function into(toell) {
intothisEl = document.getElementById(toell.id);
intothisEl.removeAttribute("hide");
}
