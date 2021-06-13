var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _selfNum;
var Demo = /** @class */ (function () {
    function Demo() {
        _selfNum.set(this, void 0);
        this.num = 20;
        __classPrivateFieldSet(this, _selfNum, 13);
    }
    return Demo;
}());
_selfNum = new WeakMap();
var s = new Demo();
console.log(s.num);
// console.log((s as any).#selfNum);
