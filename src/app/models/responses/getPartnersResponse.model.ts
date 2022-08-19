import { JsonConverter, JsonObject, JsonProperty } from "json2typescript";

@JsonObject("GetPartnersResponse")
export class GetPartnersResponse {
  @JsonProperty("cuit", String, true)
  cuit: string = "";
  @JsonProperty("id", String, true)
  id: string = "";
  @JsonProperty("externalid", String, true)
  externalid: string = "";
  @JsonProperty("nombre", String, true)
  nombre: string = "";
  @JsonProperty("apellido", String, true)
  apellido: string = "";
  @JsonProperty("activo", Boolean, true)
  activo: boolean = true;
  @JsonProperty("acuerdocredito", Number, true)
  acuerdoCredito: number = 0;
  @JsonProperty("numeroCuenta", String, true)
  numeroCuenta: string = "";
  @JsonProperty("esccc", Number, true)
  esccc: number = 0;
  @JsonProperty("feccre", String, true)
  fechaCreacion: string = "";
  @JsonProperty("xstatus", Object, true)
  xstatus: any = null;
  @JsonProperty("cooperativa", Object, true)
  cooperativa: any = null;
  @JsonProperty("cuentacontable", Object, true)
  cuentacontable: any = null;
}
