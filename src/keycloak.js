import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "http://192.168.1.249:8080/auth/",
  realm: "MyApp",
  clientId: "ChatSphereAPI",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
