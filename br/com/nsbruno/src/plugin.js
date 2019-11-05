import MyTextField from "./components/MyTextField/MyTextField";
import MyUserAuthentication from './components/MyUserAuthentication/MyUserAuthentication';
import MyDialogMessage from './components/MyDialogMessage/MyDialogMessage';
import MyBaseMixins from './mixins/MyBaseMixins';
import Webservices from './mixins/Webservices'

const Components = {
  MyTextField,
  MyUserAuthentication,
  MyDialogMessage
}

const Mixins = {
  MyBaseMixins,
  Webservices
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