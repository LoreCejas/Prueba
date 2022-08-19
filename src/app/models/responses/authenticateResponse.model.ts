import { JsonConverter, JsonObject, JsonProperty } from "json2typescript";

@JsonObject("AuthenticateResponse")
export class AuthenticateResponse {
  @JsonProperty("roles", [String], true)
  roles: Array<string> = [];
  @JsonProperty("token_type", String, true)
  token_type: string = "";
  @JsonProperty("expires_in", String, true)
  expires_in: string = "";
  @JsonProperty("user_name", String, true)
  user_name: string = "";
  @JsonProperty("access_token", String, true)
  access_token: string = "";
  @JsonProperty("refresh_token", String, true)
  refresh_token: string = "";
}
