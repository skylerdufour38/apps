const apps = [
  {
    name: "Animal Sounds",
    version: "2.0",
    bundleId: "com.smartbabyapps.animalsounds",
    platform: "iOS",
    minIos: "3.1",
    fileSize: "19.8 MB",
    bundlePath: "Payload/Animal Sounds.app",
    ipaFile: "Animal Sounds 2.0.ipa",
  },
  {
    name: "SoundTouch",
    version: "1.4",
    bundleId: "com.yourcompany.SoundTouch",
    platform: "iOS",
    minIos: "3.0",
    fileSize: "155.5 MB",
    bundlePath: "Payload/SoundTouch.app",
    ipaFile: "SoundTouch 1.4.ipa",
  },
  {
    name: "Tozzle",
    version: "3.7",
    bundleId: "com.nodeflexion.Tozzle",
    platform: "iOS",
    minIos: "3.1.3",
    fileSize: "112.6 MB",
    bundlePath: "Payload/Tozzle.app",
    ipaFile: "Tozzle 3.7.ipa",
  },
  {
    name: "AutismXpress",
    version: "1.0",
    bundleId: "X7WS995LSR.com.StudioEmotion.AutismXpress",
    platform: "iOS",
    minIos: "3.1.2",
    fileSize: "7.4 MB",
    bundlePath: "Payload/AutismXpress.app",
    ipaFile: "AutismXpress 1.0.ipa",
  },
  {
    name: "Lunchbox",
    version: "1.4",
    bundleId: "com.thup.MonkeyPreschool",
    platform: "iOS",
    minIos: "3.0",
    fileSize: "13.7 MB",
    bundlePath: "Payload/Lunchbox.app",
    ipaFile: "Lunchbox 1.4.ipa",
  },
  {
    name: "Peek-a-Zoo",
    version: "1.1.1",
    bundleId: "com.duckduckmoosedesign.peekazoo",
    platform: "iOS",
    minIos: "3.0",
    fileSize: "19.1 MB",
    bundlePath: "Payload/Peek-a-Zoo.app",
    ipaFile: "Peek-a-Zoo 1.1.1.ipa",
  },
  {
    name: "Michigan Nature Sounds",
    version: "1.0",
    bundleId: "com.yourcompany.MichiganNatureSounds",
    platform: "iOS",
    minIos: "3.0",
    fileSize: "24.6 MB",
    bundlePath: "Payload/Michigan Nature Sounds.app",
    ipaFile: "Michigan Nature Sounds 1.0.ipa",
  },
  {
    name: "Peek-a-Zoo",
    version: "1.0",
    bundleId: "com.tbd.pazCLL",
    platform: "iOS",
    minIos: "3.0",
    fileSize: "24.6 MB",
    bundlePath: "Payload/Peek-a-Zoo.app",
    ipaFile: "Peek-a-Zoo 1.0.ipa",
  },
  {
    name: "Artsee",
    version: "1.1",
    bundleId: "com.britejar.artsee",
    platform: "iOS",
    minIos: "2.2",
    fileSize: "12.4 MB",
    bundlePath: "Payload/Artsee.app",
    ipaFile: "Artsee 1.1.ipa",
  },
  {
    name: "Angry Birds",
    version: "1.5.3",
    bundleId: "com.rovio.AngryBirdsHalloween",
    platform: "iOS",
    minIos: "3.0",
    fileSize: "16.8 MB",
    bundlePath: "Payload/Angry Birds.app",
    ipaFile: "Angry Birds 1.5.3.ipa",
  },
  {
    name: "Farm Flip Fun",
    version: "1.0",
    bundleId: "lv.yapp.farmflipfun",
    platform: "iOS",
    minIos: "3.0",
    fileSize: "10.6 MB",
    bundlePath: "Payload/Farm Flip Fun.app",
    ipaFile: "Farm Flip Fun 1.0.ipa",
  },
  {
    name: "Farm Story",
    version: "1.2",
    bundleId: "com.teamlava.farmstory",
    platform: "iOS",
    minIos: "3.0",
    fileSize: "19.9 MB",
    bundlePath: "Payload/Farm Story.app",
    ipaFile: "Farm Story 1.2.ipa",
  },
  {
    name: "Stickers",
    version: "1.0",
    bundleId: "com.nightanddaystudios.ericcarlestickers",
    platform: "iOS",
    minIos: "5.0",
    fileSize: "206.1 MB",
    bundlePath: "Payload/Stickers.app",
    ipaFile: "Stickers 1.0.ipa",
  },
  {
    name: "Forest",
    version: "1.1.0",
    bundleId: "com.nightanddaystudios.peekabooforest",
    platform: "iOS",
    minIos: "3.1.3",
    fileSize: "25.6 MB",
    bundlePath: "Payload/Forest.app",
    ipaFile: "Forest 1.1.0.ipa",
  },
  {
    name: "Virtuoso",
    version: "3.1.2",
    bundleId: "com.peterb.virtuosopianofree",
    platform: "iOS",
    minIos: "4.0",
    fileSize: "19.9 MB",
    bundlePath: "Payload/Virtuoso.app",
    ipaFile: "Virtuoso 3.1.2.ipa",
  },
  {
    name: "ABC Tracer",
    version: "1.8",
    bundleId: "com.appzoo.ABCTracer",
    platform: "iOS",
    minIos: "2.2.1",
    fileSize: "20.9 MB",
    bundlePath: "Payload/ABC Tracer.app",
    ipaFile: "ABC Tracer 1.8.ipa",
  },
  {
    name: "Peek Wild",
    version: "2.0.1",
    bundleId: "com.nightanddaystudios.peekaboowild",
    platform: "iOS",
    minIos: "3.1.3",
    fileSize: "9.8 MB",
    bundlePath: "Payload/Peek Wild.app",
    ipaFile: "Peek Wild 2.0.1.ipa",
  },
  {
    name: "Peekaboo",
    version: "2.0",
    bundleId: "com.nightanddaystudios.peekaboobarn",
    platform: "iOS",
    minIos: "2.2",
    fileSize: "3.6 MB",
    bundlePath: "Payload/Peekaboo.app",
    ipaFile: "Peekaboo 2.0.ipa",
  },
  {
    name: "Finding Sight",
    version: "2.1",
    bundleId: "my.finding3",
    platform: "iOS",
    minIos: "3.2",
    fileSize: "34 MB",
    bundlePath: "Payload/Finding Sight.app",
    ipaFile: "Finding Sight 2.1.ipa",
  },
  {
    name: "ArtikPix",
    version: "1.2.4",
    bundleId: "com.rinnapps.artikpix.iap",
    platform: "iOS",
    minIos: "3.1",
    fileSize: "41.4 MB",
    bundlePath: "Payload/ArtikPix.app",
    ipaFile: "ArtikPix 1.2.4.ipa",
  },
];

const appGrid = document.getElementById("app-grid");

function fileHref(filename) {
  return `downloads/${encodeURI(filename)}`;
}

function createAppCard(app) {
  const card = document.createElement("article");
  card.className = "app-card";

  card.innerHTML = `
    <div class="app-header">
      <h3 class="app-name">${app.name}</h3>
      <span class="meta-badge">${app.platform}</span>
    </div>

    <div class="app-meta">
      <div class="meta-row">
        <span class="meta-label">Version</span>
        <span class="meta-value">${app.version}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Bundle ID</span>
        <span class="meta-value">${app.bundleId}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Min iOS</span>
        <span class="meta-value">${app.minIos}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Size</span>
        <span class="meta-value">${app.fileSize}</span>
      </div>
    </div>

    <div class="file-info">
      <strong>IPA file:</strong> ${app.ipaFile}<br />
      <strong>App bundle:</strong> ${app.bundlePath}
    </div>

    <a class="download-button" href="${fileHref(app.ipaFile)}" download>
      Download App
    </a>
  `;

  return card;
}

apps.forEach((app) => {
  appGrid.appendChild(createAppCard(app));
});
