function broSurePopup() {
  screen.innerHTML += `<div class="window aot floating popup" style="width: 300px;top: 20px; left: 20px;">
  <div class="title-bar">
    <div class="title-bar-text">GO TO SHIP TRAP ISLAND TODAY!</div>
    <div class="title-bar-controls">
      <button aria-label="Close" onclick="this.parentElement.parentElement.parentElement.remove();"></button>
    </div>
  </div>
  <div class="window-body" style="background-color: black;margin: 0;color: white;">
    <img src="imgs/GZSI.png" />
    <div style="padding-left: 8px;">
      <b>DON'T CLOSE THIS POPUP! YOU'LL MISS THE OPPORTUNITY OF A <i>LIFETIME!</i></b>
      <p>Hello, traveller! Are you looking for a trip that is 100% free of boredom?</p>
      <p>Come to General Zaroff's Shiptrap Island! You'll never run out of things to do.</p>
      <button style="margin: 8px 0;" onclick="broSurePopupSWYG()">See What You're Getting</button>
      <button style="margin: 8px 0;" onclick="broSurePopupCYFT()">Claim your FREE trip!</button>
    </div>
  </div>
</div>`;
  return true;
}

function broSurePopupSWYG() {
  screen.innerHTML += `<div class="window aot floating popup" style="width: 300px;height: 300px;overflow: hidden;top: 20px; left: 320px;">
  <div class="title-bar">
    <div class="title-bar-text">WHAT ARE YOU GETTING</div>
    <div class="title-bar-controls">
      <button aria-label="Close" onclick="this.parentElement.parentElement.parentElement.remove();"></button>
    </div>
  </div>
  <div class="window-body" style="background-color: black;overflow-y: scroll;height:calc(100% - 20px);margin: 0;color: white;">
    <div style="padding: 8px;">
      "WHAT AM I GETTING OUT OF THIS?" You might ask.<br />
      Here's what you'll get!
    </div>
    <img src="imgs/brochureImage1.png" width="300" />
    <div style="padding: 8px;">
      A great Dining Room with "free" food...
    </div>
    <img src="imgs/zaroff.webp" width="200" />
    <div style="padding: 8px;">
      You'll get to meet our great general, Gl. Zaroff
    </div>
    <div style="padding: 8px;color:black;">
      You'll get <b>Death</b>
    </div>
  </div>
</div>`;
  return true;
}

function broSurePopupCYFT() {
  screen.innerHTML += `<div class="window aot floating popup" style="width: 300px;height: 300px;overflow: hidden;top: 100px; left: 150px;">
  <div class="title-bar">
    <div class="title-bar-text">CLAIM YOUR FREE TRIP</div>
    <div class="title-bar-controls">
      <button aria-label="Close" onclick="this.parentElement.parentElement.parentElement.remove();"></button>
    </div>
  </div>
  <div class="window-body" style="background-color: black;overflow-y: scroll;height:calc(100% - 20px);margin: 0;color: white;">
    <div style="padding: 8px;">
      <form>
        <label for="3digits">Please type in "the 3 digits on the back of your card"</label>
        <input id="3digits" type="text" pattern="(?:the 3 digits on the back of your card){1}" title="Please type in 'the 3 digits on the back of your card'" style="width:38.5ch;font-family: monospace;" /><br /><br />
      </form>
      <button onclick="errorlolwoo()">OK</button>
    </div>
  </div>
</div>`;
  return true;
}

function errorlolwoo() {
  var i = 0;
  var si = setInterval(() => {
    var rand = Math.random() >= 0.99;
    var text = rand ? "Fart lol poop fart" : "Enjoy your trip!";
    var color = rand ? "style=\"background:red;\"" : "";
    screen.innerHTML += `<div class="window aot floating popup" style="width: 200px;top: ${Math.round(Math.random() * 452)}px; left: ${Math.round(Math.random() * 440)}px;">
  <div class="title-bar" ${color}>
    <div class="title-bar-text">${text}</div>
  </div>
  <div class="window-body">
    <p>${text}</p>
  </div>
</div>`;
    i++;
    if (i >= 500) {
      clearInterval(si);
      document.querySelector("#screen").remove();
      window.location.reload();
    }
  }, 0)
  screen.innerHTML += `<div class="window aot floating popup" style="z-index:999;width: 200px;top: 50%; left: 50%; transform: translate(-50%, -50%);">
  <div class="title-bar">
    <div class="title-bar-text">You fool.</div>
    <div class="title-bar-controls">
      <button aria-label="Close" onclick="this.parentElement.parentElement.parentElement.remove();"></button>
    </div>
  </div>
  <div class="window-body">
    <p>You did not need to do that</p>
    <p>Here's the location:</p>
    <p>.̵̟̥̘͉̖̓̔̓̇̍̂̓̓͂͠.̷̢̨̺͔͉͈͓̰̬̳̮̤͙̮͍̃̾̏͋̊͛̋/̶͈̞͎̠͙̩͙̖͌́͐,̶͖̹̲͙͇̰̫̻̹̻̽̈́̇̂̐͛̈́̅̈̋̉̈́͘͘͜͝.̴͚͖͈̟͓̱̫͒̐̉̓̔͆̏̾͒̒̎̍̿͑̓̚/̷̢̡̢̛̲͖̰̼͎̩̯́̔̈́̎̈́̏́̊̀̑̄͋̓̍̚͜͝.̷̧̫͓̘͔͖̝̪͔͋́͂̂̂̂́͋̈́̂,̵̨̠̤͕̲̻̺̺̋.̵̡̮̻͇͖̯͌̇̑̃̿̇͝ͅ/̴̨͚̩̜̹̮͚̋͋̍͋͒̽ͅ.̷̧̧̧̡̫͈̘̝̻̭̻̘̖̈́́̂̌́̊̇̌̑̃̏̐̽̾͝/̶̧̡̲̹͚̱̪̞̖̣̳̼̪̩̰̣͍̐̈́̉́͂̃̈́̉̏̚͝͠͠[̴̯̃̔̉̾̈́̈̉̾͐̈́]̵̨̡̰̬͍͖̯̙̭͚͒̃̐̃̃̕͠]̷̯̙̦͕̜͈̘̳̙̣̳̹͂̇̈́̀̒̚[̶̧̢̝̙͙̤̪͛̃̿̄̅̈̆̆̋̀͗̒͘͜͝/̵̡̝̬̠̪̱̳̞̬͆̈́͌́̆̈́̅͗͆͐̂̃̚̕͠͝,̴̛̛̯̪̝̭̠͉̍͒̊̈́̿̀̈́̎̆̐̈́̇̕̕͠;̷̨̢̻̻̥̺͍̮͙̝̬̦̙̘̞̊͐͐͛̉̂̓̌̌̃͒͗̓͒̚͘͜/̷̩̳̭̜̘̝̼̺͍̥̖̜͖̗̲̬̬̓̔̃̒̉̿͘[̷̬̭̙̩̊́]̷̧̧̢̖͍̺͍̰͈̞̰̭̘͚͔̗̈̈͗̂̃̋͒͛̋͘͝,̶̡̢̛̛̑͊͐̆̉̔̋̇̿͝͝]̸̢̺͇̥̍̽̈́̈́̾̕̕;̴̡̤̟͍̝̦͍̞̭̐̿̀̄͂͐̀ͅ'̸̛̙͌̍̈̅͑̉̚͝/̷̱̙͛̆͒̿̈́̈́̃͊̐̏̒̀̒̕,̷̡͖̥̖̹̗̤̬̖̦̓͐͒̎͛̿̏̇͘͝͝;̸͎͓͎̘͍̥̦̀̑̈́̋̿̎̄͆͠͠[̵̧̹̝̦̯̩̖̔̄̌̑̆̋̕'̷̧̗̗̾͊̇̿̏͌́̐́̅̒͝[̵̡̩͎͎̲̱̹̭̹̲̩͚̣̄,̵̛̫͕̤̖͇͔̝̺̈́̀́͊̔̇̈́̏̃͊͐̐͋́͘͠]̷̥̖͎͔̪̤̩̘̦̫̣͍̍̀̾̒̈̏̂̓̾̚/̷̛̠̻͙͓̫̗̦̱̝̳̇̓͑́̆̎͑̃́̀͝͠'̷͚̗͖̻̼̩̥͍̩͎̬̫͍̗̬͊́͜͝;̶̙͈̘̻͈̭͖̯̔͘͜/̸̛̪̈́̏̾̈́̈́̿͝,̷̧̢̡̟̺̪̠͈͖̻͓͔̥͍̤͊́́̐͊͒̋̐͋̒̋̐͊̌̈́̚͝ͅ]̶̲͚͖̯̠̮̖̯͍̭̦̭̪͓͈̥̹͛͆̉̂͗̃̈́̍'̷̧̬̦͙͍̟̘̘̯͇͍̐̓̌͛́̽͌̿̑'̵̢̡̧͚͎̬̘̫̪̱͍̯̤̦̮̲̉̋̈́͗͠;̴̡̣̘̀̇̈͑́́̓͑͘̚͜,̸̫̓̆͑̄̏͌͂͆̿̈́̆̈͆̅̋͂̄'̶̘̤̥̣̬̬̫̪̙̜̝͇̘̱̺͔͐͛̃̀͑̍̄͜]̵̧̧̨͓̠̤̞̻̰̦̮̫̻̻͕̲̋̏̓̓̾͗͋͑̍͊̚̕ͅ[̷̡̛̥̺̫̺͇̭̭̜͔̀̏̅̓̅̓͐̓̈́̒͛̐̓̚͝͝/̷̤̰̱͒̉͐̔;̸̢̳̩̳͈̰͈͕̜̫̈̀̽͗̅̽̾̎̈́̃̑̃͒̀̚̚.̶̛̫̓̾͑̽͋̈́͠/̵̢͚̼̺̻̱̝̱͕̳͔͙̓̓]̷̪̦̈́͊̆͝[̸̜̆̇/̴̛͎͍̫̝̰̟̼̩͊͊̾̾͗̅͑̀̅͘̕͜͠͝,̴̢̨͉͔̺̜͈̣̲̞̞̜̞̗̻̬̥̓̓̆̀̓͆.̷̡̘̥͚̝̙̘͓̲͖̳͆̊́̄̀̄̽̾͊̕̕͜'̵̧͙̯̜̩͌̃̕]̸̡̭̖̰̟̯͚͖̖̰̥̼̻̀̃̒͒̆́̅̋͜;̵̺̠̲̰̻̓'̸͎̘́̐/̵̟͙͕̳̯̦̳̺̫͖̤͉͚͚̤͑͌̉̍͋͑̔̀̍̔̐͜,̴̧̧̢̝͚̼̦̹̲̗̫͎͓̓̇̍̏̀̉̄͌̓̋̒͌̑̚̕'̶̫͙̭̗͚͙̭̹͝]̷̧̩̤̜̻̩̠̍͆̈́̀͂̈́̍̈́̎̏̈́̕͠͠ͅ/̴̤͚̙̼͍̺͔̝̜͉̮̯͔͇̪̖̓̽͐̀͒̂͜͝;̷͚̮̯̰̺̫̫̤̈̿̈̎͐́̕͝'̵̼̠̪̜̭̦̻̠͙̩̲̲̘̼̘̥̎͌̍͋̈̈́̇̍̓̈́̽̀̀̀̀͗͜͠;̸̢̛̛͖͈͚̫̠̺̥͕̜̊̐̄̎̔̀̄̅̐̑̔̓͐̚,̴̡̧̮̥̥͉͉̜̰̼̜̫̠͍̄̅͑͠]̵̨̲̭͎͍͛̏̓[̵̧̦̞̥̳͖͍̭̞̼̳̮̤͚͎̈́͊́̔̈̄̓͛̄͘͝͝,̸̛̖̺̩̖̝̭͖̤̥̹̉͆̓̅̾̌̊̔̄̽ͅ[̷̢̡͕̥̫̼̻̟̱̰̻̖̬͍̟̬̅̒͒͛̌̈̆̃͗̈̾̀̕̚̕]̶̖̬̹̺͔͙̾̈́̍̀͗̊̇́̄̐̽̃͊͘͠,̸̹̘̭̳̮̲̣̈́̂̓͋̒͊̊̉̚͝;̶͖̬̓̑́̐̄̌̂̍̕͘͜͝͝/̷̡̧̨̝͓̙͖̣͕͖̳̦͍̳̈́͑́̃̆̽̽͆̕͠</p>
  </div>
</div>`;
  return true;
}

function helloWorld() {
  screen.innerHTML += `<div class="window aot floating popup" style="width: 200px;top: 50%; left: 50%; transform: translate(-50%, -50%);">
  <div class="title-bar">
    <div class="title-bar-text">Hello, world!</div>
    <div class="title-bar-controls">
      <button aria-label="Close" onclick="this.parentElement.parentElement.parentElement.remove();"></button>
    </div>
  </div>
  <div class="window-body">
    <p>Hello, world!</p>
  </div>
</div>`;
  return true;
}

broSurePopup()