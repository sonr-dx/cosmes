// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vault/v1/genesis.proto (package vault.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GenesisState defines the module genesis state
 *
 * @generated from message vault.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * Params defines all the parameters of the module.
   *
   * @generated from field: vault.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * Params defines the set of module parameters.
 *
 * @generated from message vault.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: bool ipfs_active = 1;
   */
  ipfsActive = false;

  /**
   * @generated from field: bool local_registration_enabled = 2;
   */
  localRegistrationEnabled = false;

  /**
   * @generated from field: vault.v1.Schema schema = 4;
   */
  schema?: Schema;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ipfs_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "local_registration_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "schema", kind: "message", T: Schema },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * @generated from message vault.v1.Schema
 */
export class Schema extends Message<Schema> {
  /**
   * @generated from field: int32 version = 1;
   */
  version = 0;

  /**
   * @generated from field: string account = 2;
   */
  account = "";

  /**
   * @generated from field: string asset = 3;
   */
  asset = "";

  /**
   * @generated from field: string chain = 4;
   */
  chain = "";

  /**
   * @generated from field: string credential = 5;
   */
  credential = "";

  /**
   * @generated from field: string did = 6;
   */
  did = "";

  /**
   * @generated from field: string jwk = 7;
   */
  jwk = "";

  /**
   * @generated from field: string grant = 8;
   */
  grant = "";

  /**
   * @generated from field: string keyshare = 9;
   */
  keyshare = "";

  /**
   * @generated from field: string profile = 10;
   */
  profile = "";

  constructor(data?: PartialMessage<Schema>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.Schema";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "credential", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "did", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "jwk", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "grant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "keyshare", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "profile", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Schema {
    return new Schema().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Schema {
    return new Schema().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Schema {
    return new Schema().fromJsonString(jsonString, options);
  }

  static equals(a: Schema | PlainMessage<Schema> | undefined, b: Schema | PlainMessage<Schema> | undefined): boolean {
    return proto3.util.equals(Schema, a, b);
  }
}

