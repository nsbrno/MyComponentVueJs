/*
 * Document   : webservice
 * Created on : 04/11/2019, 14:20:11
 * Author     : Bruno Nogueira Silva
 */
import axios from "axios";
import DefaultMessege from "../environments/DefaultMessege";

export default {
  data: {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT"
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
    returnWebserviceJsonPromise: function(url, method, authentication, data, parametersUrl) {
      data = data ? data : {};
      parametersUrl = parametersUrl ? parametersUrl : null;
      authentication = authentication ? authentication : null;

      let configuration = {
        headers: {
          Accept: "application/json"
        }
      };
      // Checa se foi passado alguma identificação de usuário e senha
      if (authentication) {
        configuration += {
          auth: {
            username: authentication.username,
            password: authentication.password
          }
        };
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
        } else if (method && (method.toUpperCase() === "POST" || method === "post")) {
          axios
            .post(url, data, configuration)
            .then(function(response) {
              //console.log('log webservice do then axios response: ' + JSON.stringify(response));
              // Checa o status do header do rest
              if (response.status === 200) {
                resolve({
                  idReturn: response.status,
                  object: response.data.object,
                  page: response.data.page
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
              var msgRetorno = "";
              // Verifica se tem mais algum dado importate para mostrar na mensagem de erro
              if (error.response) {
                msgRetorno =
                  msgRetorno + "\n response.data: " + error.response.data;
                msgRetorno =
                  msgRetorno +
                  "\n response.headers: " +
                  JSON.stringify(error.response.headers);
              } else if (error.request) {
                msgRetorno = msgRetorno + "\n request: " + error.request;
              } else {
                msgRetorno = msgRetorno + "\n message: " + error.message;
              }
              reject({
                statusReturn: {
                  idReturn: 0,
                  msg: error.toString(),
                  msgExtra: msgRetorno
                }
              });
            });
        } else {
          reject({
            statusReturn: {
              idReturn: 0,
              msg: DefaultMessege.METHOD_NOT_DEFINED,
              msgExtra:
                "O nome do method(metodo) que foi enviado é: " + method
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
    conectWebserviceJson: async function(url, method, authentication, data, parametersUrl ) {
      try {
        return await this.returnWebserviceJsonPromise(url, method, authentication, data, parametersUrl);
      } catch (error) {
        throw error;
      }
    }
  }
};