import MyTextField from "./components/MyTextField";

module.exports = {
    install: function (Vue, options) {
      Vue.component('my-text-field', MyTextField);
    }
  };