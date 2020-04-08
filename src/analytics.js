// import $ from "jquery";
function clickAnalytics() {
    let counter = 0;
    let destroyed = false;

    const listener = () => ++counter;

    document.addEventListener("click", listener);

    return {
        destroy() {
            document.removeEventListener("click", listener);
            destroyed = true;
        },
        getClicks() {
            // $("body").css("background-color", "red");
            if (destroyed) {
                return "События аналитики удаленно"
            }
            return `Всего сделанно кликов на сайте ${counter}`;
        }
    }
}

window.analytics = clickAnalytics();