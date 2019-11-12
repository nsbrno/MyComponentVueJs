<template>
  <v-dialog v-bind:value="value" scrollable persistent>
    <v-card>
      <v-card-title v-bind:class="classObject">
        <p class="font-weight-black">Código do Retorno: {{myDataDialog.idReturn}}</p>
      </v-card-title>

      <v-card-text>
        <p class="mt-5 mb-12 body-1 black--text">{{myDataDialog.msg}}</p>

        <v-expansion-panels focusable>
          <v-expansion-panel v-if="myDataDialog.msgExtra">
            <v-expansion-panel-header class="font-weight-black">Extra</v-expansion-panel-header>
            <v-expansion-panel-content class="mt-5">{{myDataDialog.msgExtra}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined color="primary" @click="emitMyClickClose(false)">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "my-dialog-message",
  data() {
    return {
      //
    };
  },
  props: {
    value: {},
    myDataDialog: {
      type: Object,
      default: function() {
        return {
          idReturn: 0,
          msg: "",
          msgExtra: ""
        };
      }
    },
    type: {
      type: String,
      default: "dialog",
      validator: function(value) {
        // O valor precisa corresponder a alguma dessas Strings
        return ["dialog", "success", "info", "error"].indexOf(value) !== -1;
      }
    }
  },
  watch: {},
  computed: {
    /**
     * Checa qual é o tipo do dialog para colorir o titulo
     */
    classObject: function() {
      var classDefine = "headline white--text ";

      if (this.type === "success") {
        return (classDefine += "success");
      } else if (this.type === "info") {
        return (classDefine += "info");
      } else if (this.type === "error") {
        return (classDefine += "error");
      } else {
        return classDefine.replace("white--text", "grey lighten-1");
      }
    }
  },
  methods: {
    emitMyClickClose(dialogError) {
      this.$emit("click-close-my-dialog-message", dialogError);
    }
  }
};
</script>