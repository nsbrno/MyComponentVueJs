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
          <h2>Usuário: {{usuario}}</h2>
          <br />
          <h1>Senha: {{senha}}</h1>
        </v-flex>
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
      senha: ""
    };
  },
  methods: {
    getUser(user, password) {
      //console.log('Usage - getUser - usuario: ' + user + " | Senha: " + password);
      this.usuario = user;
      this.senha = password;
    }
  }
};
</script>