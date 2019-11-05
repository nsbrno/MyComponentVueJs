export default {
  data() {
    return {
      dialogError: false,
      returnWebserviceStatus: {
        idReturn: 0,
        msg: "",
        msgExtra: ""
      }
    };
  },
  methods: {
    /**
     * Recebe a comunicacao do component MyDialogReturnWebservice.vue onde
     * indica se eh pra fechar o dialog ou nao.
     * @param {type} dialogError
     * @returns {undefined}
     */
    closeDialogError: function(dialogError) {
      if (!dialogError) {
        this.dialogError = false;
        this.returnWebserviceStatus = {
          codigoRetorno: 0,
          msg: "",
          msgExtra: ""
        };
      }
    }
  }
};
