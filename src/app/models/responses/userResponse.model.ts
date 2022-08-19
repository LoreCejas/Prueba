import { JsonConverter, JsonObject, JsonProperty } from "json2typescript";

@JsonObject("UserResponse")
export class UserResponse {
  @JsonProperty("id", String, true)
  id: string = "";
  @JsonProperty("nombre", String, true)
  nombre: string = "";
  @JsonProperty("apellido", String, true)
  apellido: string = "";
  @JsonProperty("user", String, true)
  user: string = "";
  @JsonProperty("cuit", String, true)
  cuit: string = "";
  @JsonProperty("xstatus", Number, true)
  xstatus: number = 0;
  @JsonProperty("cargo", String, true)
  cargo: string = "";
  @JsonProperty("cooperativaid", String, true)
  cooperativaid: string = "";
  @JsonProperty("acceso", String, true)
  acceso: string = "";
}
