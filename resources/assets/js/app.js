// function escapeKeyListener(evt) {
//     if(evt.keyCode === 27 && app.modalOpen){
//         app.modalOpen = false;
//     }
// }
import 'core-js/fn/object/assign';
import Vue from "vue";
import { populateAmenitiesAndPrices } from './helpers';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

var app = new Vue({
    el: '#app',
    data: Object.assign(model,{
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
        },
        contracted: true,
        modalOpen: false
    }),
    methods: {
        escapeKeyListener(evt) {
            if(evt.keyCode === 27 && app.modalOpen){
                app.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            if (this.modalOpen){
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created: function() {
        document.addEventListener('keyup', this.escapeKeyListener)
    }
});