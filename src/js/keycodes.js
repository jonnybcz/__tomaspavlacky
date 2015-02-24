/**
 * @author: Tomas Pavlacky
 * @email: tomas.pavlacky@gmail.com
 *
 * @description: Show keycodes from key event
 */
class Keycodes {

    /**
     * @param  {{{}}} dom
     */
    constructor(dom) {
        this._dom = dom;

        document.body.addEventListener("keydown", this);
    }

    /**
     * @param  {Event} e
     */
    handleEvent(e) {
        this._dom.output.innerHTML = `event.keyCode = ${e.keyCode}`;
    }
}
