import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("CooperativaResponse")
export class CooperativaResponse {
  @JsonProperty("id", String, true)
  id: string = "";
  @JsonProperty("nombre", String, true)
  nombre: string = "";
  @JsonProperty("cuit", String, true)
  cuit: string = "##-########-#";
  @JsonProperty("tipo", Number, true)
  tipo: number = 0;
  @JsonProperty("activo", Number, true)
  activo: number = 1;
  @JsonProperty("contrato", String, true)
  contrato: string = "";
  @JsonProperty("localidad", String, true)
  localidad: string = "";
  @JsonProperty("provincia", String, true)
  provincia: string = "";
  @JsonProperty("telefono", String, true)
  telefono: string = "";
  @JsonProperty("mail", String, true)
  mail: string = "";
  @JsonProperty("cuentaCorriente", String, true)
  cuentaCorriente: string = "";
  @JsonProperty("customerSap", String, true)
  customerSap: string = "";
}
