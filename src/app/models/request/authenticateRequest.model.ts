import { JsonConverter, JsonObject, JsonProperty } from "json2typescript";

@JsonObject("AuthenticateRequest")
export class AuthenticateRequest {
  @JsonProperty("Username", String, true)
  username: string = "";
  @JsonProperty("Password", String, true)
  password: string = "";
  @JsonProperty("Domain", String, true)
  domain: string = "AL2";
  @JsonProperty("Pack", String, true)
  pack: string = "AL2";
}
