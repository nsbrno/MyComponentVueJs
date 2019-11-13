/*
 * Document   : webservice
 * Created on : 04/11/2019, 14:20:11
 * Author     : Bruno Nogueira Silva
 */
import axios from "axios";
import DefaultMessage from "../environments/DefaultMessage";

export default {
  data() {
    return {
      GET: "GET",
      POST: "POST",
      DELETE: "DELETE",
      PUT: "PUT"
    };
  },
  methods: {
    /**
     * Funcao para buscar os data na API rest (webservice).
     * Foi criado essa funcao com uma Promise (promessa) de returnar os data do servidor
     * ou retornar uma rejeição(erro).
     *
     * @param {String} url
     * @param {String} method - 'GET', 'POST', 'DELETE', 'PUT'
     * @param {JSON} authentication - Exemplo: {username: user, password: pass}
     * @param {type} data
     * @param {JSON} parametersUrl - Tem que ser passado no formato JSON. Exemplo: {resume: true, colunns: 'id, nome'}
     * @returns {Promise} {
                  statusReturn: {
                    idReturn: response.status,
                    msg: response.statusText,
                    msgExtra: ''
                  }
                }
     */
    returnWebserviceJsonPromise: function(
      url,
      method,
      authentication,
      data,
      parametersUrl
    ) {
      data = data ? data : {};
      parametersUrl = parametersUrl ? parametersUrl : null;
      authentication = authentication ? authentication : null;
      let configuration = {};

      let configHeaders = {
        headers: {
          Accept: "application/json"
        }
      };
      // Checa se foi passado alguma identificação de usuário e senha
      if (authentication) {
        let configAuth = {
          auth: {
            username: authentication.username,
            password: authentication.password
          }
        };
        configuration = Object.assign({}, configHeaders, configAuth);
      }
      if (parametersUrl) {
        var size = 0;
        for (var key in parametersUrl) {
          // Pega o valor da authentication
          var value = parametersUrl[key];
          // Checa se realmente tem algum valor no elemento
          if (value || typeof value === "number") {
            // Checa se é o primeiro parametro
            if (size === 0) {
              url = url + "?";
            } else {
              url = url + "&";
            }
            url += key + "=" + value;
            size++;
          }
        }
      }
      // Codifica a url, substituindo os caracteres especiais
      url = encodeURI(url);
      // Cria uma nova promessa de retorno
      return new Promise((resolve, reject) => {
        // Checa se o que esta sendo solicidade é o metodo GET
        if (method && (method === "GET" || method === "get")) {
          // Checa se o que esta sendo solicidade é o metodo POST
        } else if (
          method &&
          (method.toUpperCase() === "POST" || method === "post")
        ) {
          axios
            .post(url, data, configuration)
            .then(function(response) {
              console.log('log webservice do then axios response: ' + JSON.stringify(response));
              // Checa o status do header do rest
              if (response.status === 200) {
                resolve({
                  idReturn: response.status,
                  object: (response.data.content ? response.data.content : response.data.object),
                  pageable: response.data.pageable,
                  last: response.data.last,
                  totalElements: response.data.totalElements,
                  totalPages: response.data.totalPages,
                  size: response.data.size,
                  number: response.data.number,
                  sort: response.data.sort,
                  numberOfElements: response.data.numberOfElements,
                  first: response.data.first,
                  empty: response.data.empty
                });
              } else {
                reject({ 
                  statusReturn: {
                    idReturn: response.status,
                    msg: response.statusText,
                    msgExtra: ""
                  }
                });
              }
            })
            .catch(function(error) {
              //console.log('log webservice do catch axios response: ' + error);
              var msgReturn = "";
              var msgReturnExtra = "";
              var idStatus = 0;
              // Verifica se tem mais algum dado importate para mostrar na mensagem de erro
              if (error.response) {
                if (error.response.status) {
                  idStatus = error.response.status;
                  msgReturn = msgReturn + " Código: " + idStatus;
                } else {
                  idStatus = 0;
                }
                if (error.response.statusText) {
                  msgReturn =
                    msgReturn + " Status: " + error.response.statusText;
                }
                msgReturnExtra =
                  msgReturnExtra +
                  "\n response.data: " +
                  JSON.stringify(error.response.data);
                msgReturnExtra =
                  msgReturnExtra +
                  "\n response.headers: " +
                  JSON.stringify(error.response.headers);
              } else if (error.request) {
                msgReturnExtra =
                  msgReturnExtra + "\n request: " + error.request;
              } else {
                msgReturnExtra =
                  msgReturnExtra + "\n message: " + error.message;
              }
              msgReturn = msgReturn + " | " + error.toString();
              reject({
                statusReturn: {
                  idReturn: idStatus,
                  msg: msgReturn,
                  msgExtra: msgReturnExtra
                }
              });
            });
        } else {
          reject({
            statusReturn: {
              idReturn: 0,
              msg: DefaultMessage.METHOD_NOT_DEFINED,
              msgExtra: "O nome do method(metodo) que foi enviado é: " + method
            }
          });
        }
      });
    },
    /**
     * Essa funcao foi criada com assyncrona para o codigo js parar e aguardar
     * a execucao da funcao returnWebserviceJsonPromise que pega os data do webservice (API Rest)
     * quando os data de sucesso ou erro eh retornado entao o javascript continua a sua sequencia
     * de execucao.
     *
     * @param {Stirng} url
     * @param {String} method - 'GET', 'POST', 'DELETE', 'PUT'
     * @param {JSON} authentication - Exemplo: {username: user, password: pass}
     * @param {type} data
     * @param {JSON} parametersUrl  - Tem que ser passado no formato JSON. Exemplo: {resume: true, colunns: 'id, nome'}
     * @returns {Promise} {
                  statusReturn: {
                    idReturn: response.status,
                    msg: response.statusText,
                    msgExtra: ""
                  }
                }
     */
    conectWebserviceJson: async function(
      url,
      method,
      authentication,
      data,
      parametersUrl
    ) {
      try {
        return await this.returnWebserviceJsonPromise(
          url,
          method,
          authentication,
          data,
          parametersUrl
        );
      } catch (error) {
        throw error;
      }
    }
  }
};
