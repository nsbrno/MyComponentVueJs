//import MyTextField from "./components/MyTextField.vue";
/*module.exports = {
    install: function (Vue, options) {
      Vue.component('my-text-field', MyTextField);
    }
  };*/

import MyTextField from "./components/MyTextField/MyTextField";
import MyUserAuthentication from './components/MyUserAuthentication/MyUserAuthentication';

const Components = {
  MyTextField,
  MyUserAuthentication
}

const ComponentLibrary = {
  install(Vue, options = {}) {
    // Registra o component
    //Vue.component(MyTextField.name, MyTextField);
    Object.keys(Components).forEach(name => {
      Vue.component(name, Components[name]);
    });
  }
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
