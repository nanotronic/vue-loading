import './style.css';

export default {
    params: ['loadingOptions'],
    handleShow () {
        let position = window.getComputedStyle(this.el).position;

        if (position === 'static' || position === '') {
            this.static = true;
            this.el.style.position = 'relative';
        }

        let box = document.createElement('div');
        box.className = 'vue-loading';
        box.style.backgroundColor = this.options.bg;
        this.el.appendChild(box);

        let msg = document.createElement('div');
        msg.className = 'vue-loading-msg';
        msg.textContent = this.options.text;
        box.appendChild(msg);

        window.requestAnimationFrame(() => {
            box.style.opacity = 1;
        });

        this.loadingBox = box;
    },
    handleHide () {
        let t = this;
        let lb = t.loadingBox;

        window.setTimeout(() => {
            lb.parentNode.removeChild(lb);

            if (this.static) {
                this.el.style.removeProperty('position');
            }
        }, 400);

        lb.style.opacity = 0;
    },
    bind () {
        // is static
        this.static = false;
        // vue-loading dom
        this.loadingBox = null;
        // is first call update
        this.first = true;
        // default options
        this.options = {
            text: 'Loading ...',
            bg: 'rgba(230, 233, 236, 0.8)'
        };

        if (this.params.loadingOptions) {
            Object.assign(this.options, this.params.loadingOptions);
        }
    },
    update (value) {
        if (value) {
            this.first = false;
            this.handleShow();
        } else {
            if (this.first) {
                this.first = false;
                return;
            }
            this.handleHide();
        }
    }
};
