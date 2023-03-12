function gotoFullscreen() {
  const button = document.querySelector("#fullscreen-btn");
  if (document.fullscreenElement) {
    document.exitFullscreen();
    button.innerHTML = "Zen";
  } else {
    button.innerHTML = "Exit";
    editor.requestFullscreen({ navigationUI: "show" });
  }
}

function gotoFullscreenInWindow() {
  const button = document.querySelector("#fullscreen-btn");
  const editor = document.querySelector(".Box-sc-1gh2r6s-0 .gKSNvd");
  if(editor.classList.contains('fullscreen')) {
    button.innerHTML = "Zen";
    editor.classList.remove('fullscreen');
  } else {
    button.innerHTML = "Exit";
    editor.classList.add('fullscreen');
  }
}

function fullscreenChanged(event) {
  const button = document.querySelector("#fullscreen-btn");
  if (document.fullscreenElement) {
    console.log(
      `Element: ${document.fullscreenElement.id} entered fullscreen mode.`
    );
  } else {
    button.innerHTML = "Zen";
  }
}

function addBtn() {
  const btnList = document.querySelector(".Box-sc-1gh2r6s-0 .biGaqR");
  if (btnList != undefined) {
    let fullscreenBtn = document.createElement("div");
    fullscreenBtn.innerHTML = `<div class="Box-sc-1gh2r6s-0 kqWOGg" style="margin-left: 12px; margin-top: 1px">
  <span class="_TextInputWrapper__TextInputBaseWrapper-sc-apywy2-0 _TextInputWrapper__TextInputWrapper-sc-apywy2-1 gfKFFS biECZD">
  <span id="fullscreen-btn" class="Select__StyledSelect-sc-li6bhs-0 siQqA" style="padding: 0 12px; cursor: pointer;">Zen</span></span></div>`;
    fullscreenBtn.addEventListener("click", gotoFullscreenInWindow);
    if (!document.querySelector("#fullscreen-btn")) {
      btnList.appendChild(fullscreenBtn);
    }
  }
}

// editor.addEventListener("fullscreenchange", fullscreenChanged)
window.addEventListener('popstate', (ev) => {
  console.log('route changed')
  addBtn()
})

addBtn();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		switch (request.action){
			case "github-tab-active":
        console.log('message received')
        addBtn()
				return true;
    }})
