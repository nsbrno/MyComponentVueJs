import MyTextField from "./components/MyTextField/MyTextField";
import MyUserAuthentication from './components/MyUserAuthentication/MyUserAuthentication';
import MyBaseMixins from './mixins/MyBaseMixins';

const Components = {
  MyTextField,
  MyUserAuthentication
}

const Mixins = {
  MyBaseMixins
}

const ComponentLibrary = {
  install(Vue, options = {}) {
    // Registra o component
    //Vue.component(MyTextField.name, MyTextField);
    Object.keys(Components).forEach(name => {
      Vue.component(name, Components[name]);
    });

    Object.keys(Mixins).forEach(name => {
      Vue.mixin(Mixins[name]);
    });
  }
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}