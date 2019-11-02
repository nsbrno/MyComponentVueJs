import { VTextField } from "vuetify/lib";

export default {
  name: "my-text-field",
  extends: VTextField,
  data() {
    return {};
  },
  props: {
    counter: {
      type: Boolean | Number | String,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    uppercase: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    isemail: {
      type: Boolean,
      default: false
    },
    // Permite espaco
    allowspaces: {
      type: Boolean,
      default: true
    }
  },
  computed: {
  },
  watch: {
    value: function(newValue, oldValue) {
      //console.log("Novo: " + newQuestion + " - Antigo: " + oldQuestion);
      if (
        this.uppercase &&
        (this.type === "text" ||
          this.type === "password" ||
          this.type === "email") &&
        this.value
      ) {
        // Transforma tudo em maiuscula
        this.$emit("input", "" + this.value.toString().toUpperCase());
        //console.log("Resultado Final: " + this.value);
      }
    },
    change: function(value, field){
        console.log("Value: " + value + " - Field: " + field);
    }
  }
};
