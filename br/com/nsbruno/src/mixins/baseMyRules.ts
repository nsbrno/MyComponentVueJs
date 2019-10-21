import Vue from 'vue';

export default Vue.extend({
    methods: {
        /**
         * Funcao para retorna uma mensagem caso o campo seja obrigatorio.
         * @param {type} value
         * @returns {String|Boolean}
         */
        requiredRules: function (value) {
            if (this.myrequired &&
                // null or undefined
                ((value == null) ||
                    // has length and it's zero
                    (value.hasOwnProperty('length') && value.length === 0) ||
                    // is an Object and has no keys
                    (value.constructor === Object && Object.keys(value).length === 0))) {
                //console.log('requiredRules ' + this.myrequired + ' ' + value);
                return "Campo é obrigatório!";
            } else {
                return false;
            }
        },
        /**
         * Valida se o email passado por parametro eh valido. Se nao for valido
         *  retorna uma mensagem(String), mas se for valido entao retorna false(Boolean).
         * @param {type} value
         * @returns {String|Boolean}
         */
        emailRules: function (value) {
            if (this.myisemail && !!value) {
                //console.log('emailRules ' + th.myisemail + ' ' + value);
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return (pattern.test(value)) || 'E-mail invalido!';
            } else {
                return false;
            }
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value)
                return '';
            value = value.toString();
            return value.toUpperCase();
        }
    }
});