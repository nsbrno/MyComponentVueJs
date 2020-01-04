<template>
  <v-app>
    <v-container>
      <v-flex>
        <v-col cols="12">
          <my-text-field label="URL Get" :uppercase="false" v-model="url"></my-text-field>
          <v-col cols="12" sm="6" md="3">
            <my-text-field label="User" :uppercase="false" v-model="user"></my-text-field>
            <my-text-field label="Password" :uppercase="false" v-model="password"></my-text-field>
            <my-text-field label="Device" :uppercase="false" v-model="device"></my-text-field>
          </v-col>
          <v-btn @click="getUrl">Carregar GET</v-btn>
        </v-col>

      </v-flex>
    </v-container>
  </v-app>
</template>
<script>
import Webservices from "mixins/Webservices";
import MyBaseRules from "mixins/MyBaseRules";

export default {
  mixins: [Webservices, MyBaseRules],
  data() {
    return {
      url: "",
      user: "",
      password: "",
      device: "",
      returnWebserviceStatus: {
        idReturn: 0,
        msg: "",
        msgExtra: ""
      }
    };
  },
  methods: {
    getUrl() {
      // Conecta no servidor webservice
      this.conectWebserviceJson(
        this.url, // URL
        this.GET, // Metodo
        { username: this.user, password: this.password }, // {username: user, password: pass}
        { device: this.device }, // Headers
        null, // Dados
        { where: "NOME = '" + this.user + "'" } // Parametros URL
      )
        .then(retorno => {
          console.log(retorno);
        })
        .catch(error => {
          if (error.statusReturn) {
            if (error.statusReturn.idReturn != 0) {
              this.returnWebservice.idReturn = error.statusReturn.idReturn;
            }
            if (error.statusReturn.msg) {
              this.returnWebservice.msg = error.statusReturn.msg;
            } else {
              this.returnWebservice.msg = JSON.stringify(error);
            }
            if (error.statusReturn.msgExtra) {
              this.returnWebservice.msgExtra = error.statusReturn.msgExtra;
            }
          } else {
            if (error.message) {
              this.returnWebservice.msg = error.message;
            }
            if (error.stack) {
              this.returnWebservice.msgExtra = error.stack;
            }
          }
          this.dialogError = true;
        });
    }
  }
};
</script>
