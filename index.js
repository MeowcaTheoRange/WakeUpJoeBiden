var taskbar = document.querySelector("#taskbarButtons");
var screen = document.querySelector("#screen");

function openWindow(sel, title) {
  for (windowObj of document.querySelectorAll(".floating:not(.close):not(.aot)")) {
    windowObj.style.zIndex -= 1;
    if (windowObj.style.zIndex <= 1) 
      windowObj.style.zIndex = 1;
  }
  document.querySelector(sel).style.zIndex = 9;
  if (document.querySelector(sel).classList.contains("close"))
    taskbar.innerHTML += `<button id='${sel.replace("#", "")}TAB' onclick=\"openWindow('${sel}', '');\">${title}</button>`;
  document.querySelector(sel).classList.remove("close");
}

function closeWindow(sel) {
  document.querySelector(sel).classList.add("close");
  document.querySelector(sel + "TAB").remove();
}

function openExecutable(exe) {
  screen.innerHTML += `<div class="window aot floating popup" style="width: 300px;top: 50%; left: 50%; transform: translate(-50%, -50%);">
  <div class="title-bar">
    <div class="title-bar-text">Confirm</div>
    <div class="title-bar-controls">
      <button aria-label="Close" onclick="this.parentElement.parentElement.parentElement.remove();"></button>
    </div>
  </div>
  <div class="window-body">
    <p>Are you sure you want to run ${exe}.exe?</p><br />
    <div style="text-align:right;">
      <button onclick="this.parentElement.parentElement.parentElement.remove();${exe}();">Yes</button>
      <button onclick="this.parentElement.parentElement.parentElement.remove();">No</button>
    </div>
  </div>
</div>`;
}