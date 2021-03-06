export default {
  data() {
    return {
      rules: {
        required: value => !!value || "Campo é obrigatório!",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido!";
        },
        noSpaceAllowed: value => (value || "").indexOf(" ") < 0 || "Não é permitido espaço!"
      }
    };
  }
};
