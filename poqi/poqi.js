let cubism4Model = window.location.href + "poqi/character/model.json";
// if (window.screen.width > 1000) {
(async function main() {
  const body = document.querySelector('body')
  body.insertAdjacentHTML('beforeend', '<div id="live2d-wripe" style="background-color: transparent"><canvas id="canvas" style="background-color: transparent"><canvas></div>')
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resolution: window.devicePixelRatio || 1,
    antialias: true,
    transparent: true
  });
  const wriper = document.getElementById("live2d-wripe");
  app.renderer.autoResize = true;
  app.renderer.resize(wriper.clientWidth, wriper.clientWidth);
  const model4 = await PIXI.live2d.Live2DModel.from(cubism4Model);
  app.stage.addChild(model4);
  app.stage.width = wriper.clientWidth;
  app.stage.height = wriper.clientWidth;
  model4.scale.set(1.0);
  // 允许拖拽
  model4.draggable = true;
  model4.on('hit', async (hitAreas) => {
    console.log(hitAreas)
    if (hitAreas.length == 1) {
      if (hitAreas[0] == '脑袋') {
        model4.motion('Tap摸头')
      } else if (hitAreas[0] == '身体') {
        model4.motion('Tap身体')
      } else if (hitAreas[0] == '辫子') {
        model4.motion('Tap摇头')
      } else {
        model4.motion('Idle')
      }
    } else {
      let random = Math.floor(Math.random() * hitAreas.length)
      let hitArea = hitAreas[random]
      console.log(hitArea)
      if (hitArea === '脑袋') {
        model4.motion('Tap摸头')
      } else if (hitArea === '身体') {
        model4.motion('Tap身体')
      }
    }
  })
})();

