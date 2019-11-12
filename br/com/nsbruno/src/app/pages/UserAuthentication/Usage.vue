<template>
  <v-app>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <my-user-authentication @input-my-user-authentication="getUser"></my-user-authentication>
        </v-flex>
      </v-layout>

      <br />
      <v-layout align-button justify-center>
        <v-flex xs12 sm8 md4>
          <my-text-field label="URL" v-model="url" :uppercase="false"></my-text-field>
          <h2>Usuário: {{usuario}}</h2>
          <br />
          <h1>Senha: {{senha}}</h1>
        </v-flex>

        <my-dialog-message
          v-model="dialogError"
          @click-close-my-dialog-message="dialogError = false"
          :myDataDialog="returnWebservice"
          type="error"
        ></my-dialog-message>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import MyUserAuthentication from "components/MyUserAuthentication/MyUserAuthentication";
import MyBaseRules from "mixins/MyBaseRules";

export default {
  components: {
    MyUserAuthentication
  },
  mixins: [MyBaseRules],
  data() {
    return {
      usuario: "",
      senha: "",
      url: "",
      returnWebservice: {
        idReturn: 0,
        msg: "",
        msgExtra: ""
      }
    };
  },
  methods: {
    getUser(user, password) {
      //console.log('Usage - getUser - usuario: ' + user + " | Senha: " + password);
      this.usuario = user;
      this.senha = password;
      try {
        this.conectWebserviceJson(
          this.url, // URL
          this.POST, // Metodo
          { username: user, password: password }, // {username: user, password: pass}
          null, // Dados
          null // Parametros URL
        )
          .then(retorno => {
            console.log("Vai para outra tela");
            this.returnWebservice = retorno.object;
            console.log(this.returnWebservice);
            sessionStorage.setItem("usuarios", this.returnWebservice);
          })
          .catch(error => {
            //console.log('log encription do catch response: ' + JSON.stringify(error));
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
              this.returnWebservice.msg = error.toString();
            }
            this.dialogError = true;
          });
      } catch (error) {
        if (error.message) {
          this.returnWebservice.msg = error.message;
        } else {
          this.returnWebservice.msg = error.toString();
        }
        if (error.stack) {
          this.returnWebservice.msgExtra = error.stack;
        }
        this.dialogError = true;
      }
    }
  }
};
</script>