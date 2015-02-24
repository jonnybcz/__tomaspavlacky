/**
 * @author: Tomas Pavlacky
 * @email: tomas.pavlacky@gmail.com
 *
 * @description: Navigation
 */
class Navigation {

    constructor() {
        this._pages = {};
    }

    /**
     * @param  {String} name
     */
    go(name) {
        this.handleEvent({target: this._pages[name].item})
    }

    /**
     * @param {String}      name
     * @param {HTMLElement} item    item in menu
     * @param {HTMLElement} place   place for unhide
     */
    addPage(name, item, place) {
        this._pages[name] = {item: item, place: place};

        place.classList.add("hide");
        item.setAttribute("data-name", name);
        item.addEventListener("click", this);
    }

    hideAll() {
        for (var key in this._pages) { this._pages[key].place.classList.add("hide"); }
    }

    deActiveAll() {
        for (var key in this._pages) { this._pages[key].item.classList.remove("active"); }
    }

    /**
     * @param  {Event} e
     */
    handleEvent(e){
        this.hideAll();
        this.deActiveAll();

        e.target.classList.add("active");
        this._pages[e.target.getAttribute("data-name")].place.classList.remove("hide");

        e.target.classList.add("active");
    }
}
