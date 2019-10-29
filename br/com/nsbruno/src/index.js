import MyTextField from './components/MyTextField.vue';

const Components = {
  MyTextField
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;