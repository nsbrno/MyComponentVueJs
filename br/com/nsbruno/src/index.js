import MyTextField from './components/MyTextField.vue';
import MyUserAuthentication from './components/MyUserAuthentication.vue';

const Components = {
  MyTextField,
  MyUserAuthentication
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;