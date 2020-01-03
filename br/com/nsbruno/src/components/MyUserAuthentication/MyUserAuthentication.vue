<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Autenticação de Usuário</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn :href="source" icon large target="_blank" v-on="on">
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
        </template>
        <span>Source</span>
      </v-tooltip>
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            href="https://codepen.io/johnjleider/pen/pMvGQO"
            target="_blank"
            v-on="on"
          >
            <v-icon>mdi-codepen</v-icon>
          </v-btn>
        </template>
        <span>Codepen</span>
      </v-tooltip>-->
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid">
        <my-text-field
          v-if="withDevice"
          label="Dispositivo"
          prepend-icon="devices"
          :append-icon="showDevice ? 'visibility_off' : 'visibility'"
          :maxlength="40"
          :type="showDevice ? 'text' : 'password'"
          v-model="device"
          @click:append="showDevice = !showDevice"
          :rules="[rules.required, rules.noSpaceAllowed]"
        ></my-text-field>

        <my-text-field
          label="Usuário"
          prepend-icon="person"
          :maxlength="60"
          v-model="user"
          :rules="[rules.required, rules.noSpaceAllowed]"
        ></my-text-field>

        <my-text-field
          label="Senha"
          prepend-icon="lock"
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
          :maxlength="20"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          @click:append="showPassword = !showPassword"
          :rules="[rules.required]"
        ></my-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="emitClick()"
        color="primary"
        :disabled="!valid"
        :loading="myloading"
        >Entrar</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import MyTextField from "components/MyTextField/MyTextField";
import MyBaseRules from "mixins/MyBaseRules";

export default {
  name: "my-user-authentication",
  components: {
    MyTextField
  },
  mixins: [MyBaseRules],
  data() {
    return {
      valid: false,
      showPassword: false,
      showDevice: false,
      user: this.myuser,
      password: this.mypassword,
      device: this.mydevice,
    };
  },
  props: {
    myuser: {
      type: String,
      default: undefined
    },
    mypassword: {
      type: String,
      default: undefined
    },
    mydevice: {
      type: String,
      default: undefined
    },
    withDevice: {
      type: Boolean,
      default: false
    },
    myloading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick() {
      this.$emit(
        "input-my-user-authentication",
        this.user,
        this.password,
        this.device
      );
    }
  }
};
</script>
