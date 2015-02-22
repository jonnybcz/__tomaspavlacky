/**
 * @author: Tomas Pavlacky
 * @email: tomas.pavlacky@gmail.com
 *
 * @description: Wysiwyg radius
 */
class Radius {

    /**
     * @param  {{{}}} dom
     */
    constructor(dom) {
        this._dom = dom;

        for (var input in this._dom.textInputs) { this._dom.textInputs[input].addEventListener("keyup", this); }

        this._dom.range.addEventListener("change", this);

        this.setRadius();
    }

    isKeyCodeNumber(keyCode) {
        return (keyCode >= 48 && keyCode <= 57 || keyCode == 8);
    }

    setRadius() {
        let radius = `${this._dom.textInputs.leftCornerTop.value}px ${this._dom.textInputs.rightCornerTop.value}px ${this._dom.textInputs.rightCornerBottom.value}px ${this._dom.textInputs.leftCornerBottom.value}px`;

        this._dom.radius.style.borderRadius = radius; // w3c
        this._dom.radius.style.MozBorderRadius = radius; // mozilla

        this.printCSS();
    }

    /**
     * @param {Number} size
     */
    setRadiusInput(size) {
        for (var input in this._dom.textInputs) { this._dom.textInputs[input].value = size; }
    }

    printCSS() {
        this._dom.output.innerHTML = `border-radius: ${this._dom.textInputs.leftCornerTop.value}px ${this._dom.textInputs.rightCornerTop.value}px ${this._dom.textInputs.rightCornerBottom.value}px ${this._dom.textInputs.leftCornerBottom.value}px;`;
    }

    /**
     * @param  {Event} e
     */
    handleEvent(e) {
        if (e.target.nodeType == 1 && e.target.id in this._dom.textInputs) {
            if (!this.isKeyCodeNumber(e.keyCode)) { e.preventDefault(); }
        }else{
            this.setRadiusInput(e.target.value);
        }

        this.setRadius();
    }
}
