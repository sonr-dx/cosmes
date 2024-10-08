// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file macaroon/v1/query.proto (package macaroon.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message macaroon.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message macaroon.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: macaroon.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * QueryRefreshTokenRequest is the request type for the Query/RefreshToken RPC
 * method.
 *
 * @generated from message macaroon.v1.QueryRefreshTokenRequest
 */
export class QueryRefreshTokenRequest extends Message<QueryRefreshTokenRequest> {
  /**
   * The macaroon token to refresh
   *
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<QueryRefreshTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.QueryRefreshTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRefreshTokenRequest {
    return new QueryRefreshTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRefreshTokenRequest {
    return new QueryRefreshTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRefreshTokenRequest {
    return new QueryRefreshTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRefreshTokenRequest | PlainMessage<QueryRefreshTokenRequest> | undefined, b: QueryRefreshTokenRequest | PlainMessage<QueryRefreshTokenRequest> | undefined): boolean {
    return proto3.util.equals(QueryRefreshTokenRequest, a, b);
  }
}

/**
 * QueryRefreshTokenResponse is the response type for the Query/RefreshToken
 * RPC method.
 *
 * @generated from message macaroon.v1.QueryRefreshTokenResponse
 */
export class QueryRefreshTokenResponse extends Message<QueryRefreshTokenResponse> {
  /**
   * The macaroon token
   *
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<QueryRefreshTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.QueryRefreshTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRefreshTokenResponse {
    return new QueryRefreshTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRefreshTokenResponse {
    return new QueryRefreshTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRefreshTokenResponse {
    return new QueryRefreshTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRefreshTokenResponse | PlainMessage<QueryRefreshTokenResponse> | undefined, b: QueryRefreshTokenResponse | PlainMessage<QueryRefreshTokenResponse> | undefined): boolean {
    return proto3.util.equals(QueryRefreshTokenResponse, a, b);
  }
}

/**
 * QueryValidateTokenRequest is the request type for the Query/ValidateToken
 * RPC method.
 *
 * @generated from message macaroon.v1.QueryValidateTokenRequest
 */
export class QueryValidateTokenRequest extends Message<QueryValidateTokenRequest> {
  /**
   * The macaroon token to validate
   *
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<QueryValidateTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.QueryValidateTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidateTokenRequest {
    return new QueryValidateTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidateTokenRequest {
    return new QueryValidateTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidateTokenRequest {
    return new QueryValidateTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidateTokenRequest | PlainMessage<QueryValidateTokenRequest> | undefined, b: QueryValidateTokenRequest | PlainMessage<QueryValidateTokenRequest> | undefined): boolean {
    return proto3.util.equals(QueryValidateTokenRequest, a, b);
  }
}

/**
 * QueryValidateTokenResponse is the response type for the Query/ValidateToken
 * RPC method.
 *
 * @generated from message macaroon.v1.QueryValidateTokenResponse
 */
export class QueryValidateTokenResponse extends Message<QueryValidateTokenResponse> {
  /**
   * The macaroon token
   *
   * @generated from field: bool valid = 1;
   */
  valid = false;

  constructor(data?: PartialMessage<QueryValidateTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.QueryValidateTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "valid", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidateTokenResponse {
    return new QueryValidateTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidateTokenResponse {
    return new QueryValidateTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidateTokenResponse {
    return new QueryValidateTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidateTokenResponse | PlainMessage<QueryValidateTokenResponse> | undefined, b: QueryValidateTokenResponse | PlainMessage<QueryValidateTokenResponse> | undefined): boolean {
    return proto3.util.equals(QueryValidateTokenResponse, a, b);
  }
}

