const timeLine = new TimelineMax({paused: true});
const pathRazor = MorphSVGPlugin.pathDataToBezier("#pathRazor", {align: "relative"});
const pathRazorFinish = MorphSVGPlugin.pathDataToBezier("#pathRazorFinish", {align: "relative"});

timeLine.set("#razor", {scaleX: .7, scaleY: .7, x: 80});
timeLine.to("#razor", 1, {delay: 1, bezier: {values: pathRazor, type: "soft"}, rotation: -150}, "first");
timeLine.to("#ice1", 1, {delay: .2, display: "none"}, "first");

timeLine.set("#razor", {yPercent: -10, rotation: -90});
timeLine.to("#razor", 1.5, {delay: 0, rotation: 180, bezier: {values: pathRazorFinish, type: "soft"}}, "second");
timeLine.to("#ice2", .4, {delay: .2, display: "none" }, "second");

timeLine.set("#razor", {yPercent: -5, rotation: -90});
timeLine.to("#razor", 1.5, {delay: 0, rotation: -120, bezier: {values: pathRazor, type: "soft"}}, "third");
timeLine.to("#iceTop", .4, { delay: .1, display: "none"}, "third");

timeLine.set("#razor", {yPercent: 10, rotation: 90});
timeLine.to("#razor", 1.5, {delay: 0, rotation: 180, bezier: {values: pathRazorFinish, type: "soft"}}, "fourth");
timeLine.to("#ice3", .4, {delay: .1, display: "none"}, "fourth");
timeLine.to("#razor-ending", .4, {xPercent: 105, ease: Back.easeOut}, "five");

(function() {
  timeLine.play();
})();
