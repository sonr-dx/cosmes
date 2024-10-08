// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vault/v1/query.proto (package vault.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message vault.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.QueryParamsRequest";
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
 * @generated from message vault.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: vault.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.QueryParamsResponse";
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
 * QueryIPFSRequest is the request type for the Query/IPFS RPC method.
 *
 * @generated from message vault.v1.QueryIPFSRequest
 */
export class QueryIPFSRequest extends Message<QueryIPFSRequest> {
  constructor(data?: PartialMessage<QueryIPFSRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.QueryIPFSRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIPFSRequest {
    return new QueryIPFSRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIPFSRequest {
    return new QueryIPFSRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIPFSRequest {
    return new QueryIPFSRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryIPFSRequest | PlainMessage<QueryIPFSRequest> | undefined, b: QueryIPFSRequest | PlainMessage<QueryIPFSRequest> | undefined): boolean {
    return proto3.util.equals(QueryIPFSRequest, a, b);
  }
}

/**
 * QueryIPFSResponse is the response type for the Query/IPFS RPC method.
 *
 * @generated from message vault.v1.QueryIPFSResponse
 */
export class QueryIPFSResponse extends Message<QueryIPFSResponse> {
  /**
   * IPFS is the IPFS client status.
   *
   * @generated from field: bool ipfs = 1;
   */
  ipfs = false;

  constructor(data?: PartialMessage<QueryIPFSResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.QueryIPFSResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ipfs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIPFSResponse {
    return new QueryIPFSResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIPFSResponse {
    return new QueryIPFSResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIPFSResponse {
    return new QueryIPFSResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryIPFSResponse | PlainMessage<QueryIPFSResponse> | undefined, b: QueryIPFSResponse | PlainMessage<QueryIPFSResponse> | undefined): boolean {
    return proto3.util.equals(QueryIPFSResponse, a, b);
  }
}

/**
 * SyncRequest is the request type for the Sync RPC method.
 *
 * @generated from message vault.v1.SyncRequest
 */
export class SyncRequest extends Message<SyncRequest> {
  /**
   * @generated from field: string did = 1;
   */
  did = "";

  constructor(data?: PartialMessage<SyncRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.SyncRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "did", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SyncRequest {
    return new SyncRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SyncRequest {
    return new SyncRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SyncRequest {
    return new SyncRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SyncRequest | PlainMessage<SyncRequest> | undefined, b: SyncRequest | PlainMessage<SyncRequest> | undefined): boolean {
    return proto3.util.equals(SyncRequest, a, b);
  }
}

/**
 * SyncResponse is the response type for the Sync RPC method.
 *
 * @generated from message vault.v1.SyncResponse
 */
export class SyncResponse extends Message<SyncResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  constructor(data?: PartialMessage<SyncResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.SyncResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SyncResponse {
    return new SyncResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SyncResponse {
    return new SyncResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SyncResponse {
    return new SyncResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SyncResponse | PlainMessage<SyncResponse> | undefined, b: SyncResponse | PlainMessage<SyncResponse> | undefined): boolean {
    return proto3.util.equals(SyncResponse, a, b);
  }
}

/**
 * BuildTxRequest is the request type for the BuildTx RPC method.
 *
 * @generated from message vault.v1.BuildTxRequest
 */
export class BuildTxRequest extends Message<BuildTxRequest> {
  /**
   * @generated from field: string did = 1;
   */
  did = "";

  /**
   * @generated from field: string pkl = 2;
   */
  pkl = "";

  constructor(data?: PartialMessage<BuildTxRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.BuildTxRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "did", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pkl", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildTxRequest {
    return new BuildTxRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildTxRequest {
    return new BuildTxRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildTxRequest {
    return new BuildTxRequest().fromJsonString(jsonString, options);
  }

  static equals(a: BuildTxRequest | PlainMessage<BuildTxRequest> | undefined, b: BuildTxRequest | PlainMessage<BuildTxRequest> | undefined): boolean {
    return proto3.util.equals(BuildTxRequest, a, b);
  }
}

/**
 * BuildTxResponse is the response type for the BuildTx RPC method.
 *
 * @generated from message vault.v1.BuildTxResponse
 */
export class BuildTxResponse extends Message<BuildTxResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  /**
   * @generated from field: string tx = 2;
   */
  tx = "";

  constructor(data?: PartialMessage<BuildTxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.BuildTxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "tx", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildTxResponse {
    return new BuildTxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildTxResponse {
    return new BuildTxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildTxResponse {
    return new BuildTxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: BuildTxResponse | PlainMessage<BuildTxResponse> | undefined, b: BuildTxResponse | PlainMessage<BuildTxResponse> | undefined): boolean {
    return proto3.util.equals(BuildTxResponse, a, b);
  }
}

