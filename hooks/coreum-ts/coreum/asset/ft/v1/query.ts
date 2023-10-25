/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Token, TokenUpgradeStatuses } from "./token";

export const protobufPackage = "coreum.asset.ft.v1";

/** QueryParamsRequest defines the request type for querying x/asset/ft parameters. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse defines the response type for querying x/asset/ft parameters. */
export interface QueryParamsResponse {
  params?: Params | undefined;
}

export interface QueryTokenRequest {
  denom: string;
}

export interface QueryTokenResponse {
  token?: Token | undefined;
}

export interface QueryTokenUpgradeStatusesRequest {
  denom: string;
}

export interface QueryTokenUpgradeStatusesResponse {
  statuses?: TokenUpgradeStatuses | undefined;
}

export interface QueryTokensRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
  issuer: string;
}

export interface QueryTokensResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
  tokens: Token[];
}

export interface QueryBalanceRequest {
  /** account specifies the account onto which we query balances */
  account: string;
  /** denom specifies balances on a specific denom */
  denom: string;
}

export interface QueryBalanceResponse {
  /** balance contains the balance with the queried account and denom */
  balance: string;
  /** whitelisted is the whitelisted amount of the denom on the account. */
  whitelisted: string;
  /** frozen is the frozen amount of the denom on the account. */
  frozen: string;
  /** locked is the balance locked by vesting. */
  locked: string;
}

export interface QueryFrozenBalancesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** account specifies the account onto which we query frozen balances */
  account: string;
}

export interface QueryFrozenBalancesResponse {
  /** pagination defines the pagination in the response. */
  pagination?:
    | PageResponse
    | undefined;
  /** balances contains the frozen balances on the queried account */
  balances: Coin[];
}

export interface QueryFrozenBalanceRequest {
  /** account specifies the account onto which we query frozen balances */
  account: string;
  /** denom specifies frozen balances on a specific denom */
  denom: string;
}

export interface QueryFrozenBalanceResponse {
  /** balance contains the frozen balance with the queried account and denom */
  balance?: Coin | undefined;
}

export interface QueryWhitelistedBalancesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** account specifies the account onto which we query whitelisted balances */
  account: string;
}

export interface QueryWhitelistedBalancesResponse {
  /** pagination defines the pagination in the response. */
  pagination?:
    | PageResponse
    | undefined;
  /** balances contains the whitelisted balances on the queried account */
  balances: Coin[];
}

export interface QueryWhitelistedBalanceRequest {
  /** account specifies the account onto which we query whitelisted balances */
  account: string;
  /** denom specifies whitelisted balances on a specific denom */
  denom: string;
}

export interface QueryWhitelistedBalanceResponse {
  /** balance contains the whitelisted balance with the queried account and denom */
  balance?: Coin | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenRequest(): QueryTokenRequest {
  return { denom: "" };
}

export const QueryTokenRequest = {
  encode(message: QueryTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryTokenRequest): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTokenRequest>, I>>(base?: I): QueryTokenRequest {
    return QueryTokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTokenRequest>, I>>(object: I): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryTokenResponse(): QueryTokenResponse {
  return { token: undefined };
}

export const QueryTokenResponse = {
  encode(message: QueryTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenResponse {
    return { token: isSet(object.token) ? Token.fromJSON(object.token) : undefined };
  },

  toJSON(message: QueryTokenResponse): unknown {
    const obj: any = {};
    if (message.token !== undefined) {
      obj.token = Token.toJSON(message.token);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTokenResponse>, I>>(base?: I): QueryTokenResponse {
    return QueryTokenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTokenResponse>, I>>(object: I): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    return message;
  },
};

function createBaseQueryTokenUpgradeStatusesRequest(): QueryTokenUpgradeStatusesRequest {
  return { denom: "" };
}

export const QueryTokenUpgradeStatusesRequest = {
  encode(message: QueryTokenUpgradeStatusesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenUpgradeStatusesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenUpgradeStatusesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenUpgradeStatusesRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryTokenUpgradeStatusesRequest): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTokenUpgradeStatusesRequest>, I>>(
    base?: I,
  ): QueryTokenUpgradeStatusesRequest {
    return QueryTokenUpgradeStatusesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTokenUpgradeStatusesRequest>, I>>(
    object: I,
  ): QueryTokenUpgradeStatusesRequest {
    const message = createBaseQueryTokenUpgradeStatusesRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryTokenUpgradeStatusesResponse(): QueryTokenUpgradeStatusesResponse {
  return { statuses: undefined };
}

export const QueryTokenUpgradeStatusesResponse = {
  encode(message: QueryTokenUpgradeStatusesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statuses !== undefined) {
      TokenUpgradeStatuses.encode(message.statuses, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenUpgradeStatusesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenUpgradeStatusesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.statuses = TokenUpgradeStatuses.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenUpgradeStatusesResponse {
    return { statuses: isSet(object.statuses) ? TokenUpgradeStatuses.fromJSON(object.statuses) : undefined };
  },

  toJSON(message: QueryTokenUpgradeStatusesResponse): unknown {
    const obj: any = {};
    if (message.statuses !== undefined) {
      obj.statuses = TokenUpgradeStatuses.toJSON(message.statuses);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTokenUpgradeStatusesResponse>, I>>(
    base?: I,
  ): QueryTokenUpgradeStatusesResponse {
    return QueryTokenUpgradeStatusesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTokenUpgradeStatusesResponse>, I>>(
    object: I,
  ): QueryTokenUpgradeStatusesResponse {
    const message = createBaseQueryTokenUpgradeStatusesResponse();
    message.statuses = (object.statuses !== undefined && object.statuses !== null)
      ? TokenUpgradeStatuses.fromPartial(object.statuses)
      : undefined;
    return message;
  },
};

function createBaseQueryTokensRequest(): QueryTokensRequest {
  return { pagination: undefined, issuer: "" };
}

export const QueryTokensRequest = {
  encode(message: QueryTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.issuer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokensRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
    };
  },

  toJSON(message: QueryTokensRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.issuer !== "") {
      obj.issuer = message.issuer;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTokensRequest>, I>>(base?: I): QueryTokensRequest {
    return QueryTokensRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTokensRequest>, I>>(object: I): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.issuer = object.issuer ?? "";
    return message;
  },
};

function createBaseQueryTokensResponse(): QueryTokensResponse {
  return { pagination: undefined, tokens: [] };
}

export const QueryTokensResponse = {
  encode(message: QueryTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokens.push(Token.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokensResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryTokensResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.tokens?.length) {
      obj.tokens = message.tokens.map((e) => Token.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTokensResponse>, I>>(base?: I): QueryTokensResponse {
    return QueryTokensResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTokensResponse>, I>>(object: I): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return { account: "", denom: "" };
}

export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    if (message.account !== "") {
      obj.account = message.account;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(base?: I): QueryBalanceRequest {
    return QueryBalanceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(object: I): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return { balance: "", whitelisted: "", frozen: "", locked: "" };
}

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.whitelisted !== "") {
      writer.uint32(18).string(message.whitelisted);
    }
    if (message.frozen !== "") {
      writer.uint32(26).string(message.frozen);
    }
    if (message.locked !== "") {
      writer.uint32(34).string(message.locked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balance = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.whitelisted = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.frozen = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.locked = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: isSet(object.balance) ? String(object.balance) : "",
      whitelisted: isSet(object.whitelisted) ? String(object.whitelisted) : "",
      frozen: isSet(object.frozen) ? String(object.frozen) : "",
      locked: isSet(object.locked) ? String(object.locked) : "",
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    if (message.balance !== "") {
      obj.balance = message.balance;
    }
    if (message.whitelisted !== "") {
      obj.whitelisted = message.whitelisted;
    }
    if (message.frozen !== "") {
      obj.frozen = message.frozen;
    }
    if (message.locked !== "") {
      obj.locked = message.locked;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(base?: I): QueryBalanceResponse {
    return QueryBalanceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance ?? "";
    message.whitelisted = object.whitelisted ?? "";
    message.frozen = object.frozen ?? "";
    message.locked = object.locked ?? "";
    return message;
  },
};

function createBaseQueryFrozenBalancesRequest(): QueryFrozenBalancesRequest {
  return { pagination: undefined, account: "" };
}

export const QueryFrozenBalancesRequest = {
  encode(message: QueryFrozenBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFrozenBalancesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: QueryFrozenBalancesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.account !== "") {
      obj.account = message.account;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFrozenBalancesRequest>, I>>(base?: I): QueryFrozenBalancesRequest {
    return QueryFrozenBalancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFrozenBalancesRequest>, I>>(object: I): QueryFrozenBalancesRequest {
    const message = createBaseQueryFrozenBalancesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseQueryFrozenBalancesResponse(): QueryFrozenBalancesResponse {
  return { pagination: undefined, balances: [] };
}

export const QueryFrozenBalancesResponse = {
  encode(message: QueryFrozenBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.balances.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFrozenBalancesResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryFrozenBalancesResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.balances?.length) {
      obj.balances = message.balances.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFrozenBalancesResponse>, I>>(base?: I): QueryFrozenBalancesResponse {
    return QueryFrozenBalancesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFrozenBalancesResponse>, I>>(object: I): QueryFrozenBalancesResponse {
    const message = createBaseQueryFrozenBalancesResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFrozenBalanceRequest(): QueryFrozenBalanceRequest {
  return { account: "", denom: "" };
}

export const QueryFrozenBalanceRequest = {
  encode(message: QueryFrozenBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFrozenBalanceRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryFrozenBalanceRequest): unknown {
    const obj: any = {};
    if (message.account !== "") {
      obj.account = message.account;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFrozenBalanceRequest>, I>>(base?: I): QueryFrozenBalanceRequest {
    return QueryFrozenBalanceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFrozenBalanceRequest>, I>>(object: I): QueryFrozenBalanceRequest {
    const message = createBaseQueryFrozenBalanceRequest();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryFrozenBalanceResponse(): QueryFrozenBalanceResponse {
  return { balance: undefined };
}

export const QueryFrozenBalanceResponse = {
  encode(message: QueryFrozenBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balance = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFrozenBalanceResponse {
    return { balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined };
  },

  toJSON(message: QueryFrozenBalanceResponse): unknown {
    const obj: any = {};
    if (message.balance !== undefined) {
      obj.balance = Coin.toJSON(message.balance);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFrozenBalanceResponse>, I>>(base?: I): QueryFrozenBalanceResponse {
    return QueryFrozenBalanceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFrozenBalanceResponse>, I>>(object: I): QueryFrozenBalanceResponse {
    const message = createBaseQueryFrozenBalanceResponse();
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

function createBaseQueryWhitelistedBalancesRequest(): QueryWhitelistedBalancesRequest {
  return { pagination: undefined, account: "" };
}

export const QueryWhitelistedBalancesRequest = {
  encode(message: QueryWhitelistedBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryWhitelistedBalancesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: QueryWhitelistedBalancesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.account !== "") {
      obj.account = message.account;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryWhitelistedBalancesRequest>, I>>(base?: I): QueryWhitelistedBalancesRequest {
    return QueryWhitelistedBalancesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryWhitelistedBalancesRequest>, I>>(
    object: I,
  ): QueryWhitelistedBalancesRequest {
    const message = createBaseQueryWhitelistedBalancesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseQueryWhitelistedBalancesResponse(): QueryWhitelistedBalancesResponse {
  return { pagination: undefined, balances: [] };
}

export const QueryWhitelistedBalancesResponse = {
  encode(message: QueryWhitelistedBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.balances.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryWhitelistedBalancesResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryWhitelistedBalancesResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.balances?.length) {
      obj.balances = message.balances.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryWhitelistedBalancesResponse>, I>>(
    base?: I,
  ): QueryWhitelistedBalancesResponse {
    return QueryWhitelistedBalancesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryWhitelistedBalancesResponse>, I>>(
    object: I,
  ): QueryWhitelistedBalancesResponse {
    const message = createBaseQueryWhitelistedBalancesResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryWhitelistedBalanceRequest(): QueryWhitelistedBalanceRequest {
  return { account: "", denom: "" };
}

export const QueryWhitelistedBalanceRequest = {
  encode(message: QueryWhitelistedBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryWhitelistedBalanceRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryWhitelistedBalanceRequest): unknown {
    const obj: any = {};
    if (message.account !== "") {
      obj.account = message.account;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryWhitelistedBalanceRequest>, I>>(base?: I): QueryWhitelistedBalanceRequest {
    return QueryWhitelistedBalanceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryWhitelistedBalanceRequest>, I>>(
    object: I,
  ): QueryWhitelistedBalanceRequest {
    const message = createBaseQueryWhitelistedBalanceRequest();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryWhitelistedBalanceResponse(): QueryWhitelistedBalanceResponse {
  return { balance: undefined };
}

export const QueryWhitelistedBalanceResponse = {
  encode(message: QueryWhitelistedBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balance = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryWhitelistedBalanceResponse {
    return { balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined };
  },

  toJSON(message: QueryWhitelistedBalanceResponse): unknown {
    const obj: any = {};
    if (message.balance !== undefined) {
      obj.balance = Coin.toJSON(message.balance);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryWhitelistedBalanceResponse>, I>>(base?: I): QueryWhitelistedBalanceResponse {
    return QueryWhitelistedBalanceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryWhitelistedBalanceResponse>, I>>(
    object: I,
  ): QueryWhitelistedBalanceResponse {
    const message = createBaseQueryWhitelistedBalanceResponse();
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/asset/ft module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Tokens queries the fungible tokens of the module. */
  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
  /** Token queries the fungible token of the module. */
  Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /** TokenUpgradeStatuses returns token upgrades info. */
  TokenUpgradeStatuses(request: QueryTokenUpgradeStatusesRequest): Promise<QueryTokenUpgradeStatusesResponse>;
  /** Balance returns balance of the denom for the account. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** FrozenBalances returns all the frozen balances for the account. */
  FrozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse>;
  /** FrozenBalance returns frozen balance of the denom for the account. */
  FrozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse>;
  /** WhitelistedBalances returns all the whitelisted balances for the account. */
  WhitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse>;
  /** WhitelistedBalance returns whitelisted balance of the denom for the account. */
  WhitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse>;
}

export const QueryServiceName = "coreum.asset.ft.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Tokens = this.Tokens.bind(this);
    this.Token = this.Token.bind(this);
    this.TokenUpgradeStatuses = this.TokenUpgradeStatuses.bind(this);
    this.Balance = this.Balance.bind(this);
    this.FrozenBalances = this.FrozenBalances.bind(this);
    this.FrozenBalance = this.FrozenBalance.bind(this);
    this.WhitelistedBalances = this.WhitelistedBalances.bind(this);
    this.WhitelistedBalance = this.WhitelistedBalance.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
    const data = QueryTokensRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Tokens", data);
    return promise.then((data) => QueryTokensResponse.decode(_m0.Reader.create(data)));
  }

  Token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Token", data);
    return promise.then((data) => QueryTokenResponse.decode(_m0.Reader.create(data)));
  }

  TokenUpgradeStatuses(request: QueryTokenUpgradeStatusesRequest): Promise<QueryTokenUpgradeStatusesResponse> {
    const data = QueryTokenUpgradeStatusesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenUpgradeStatuses", data);
    return promise.then((data) => QueryTokenUpgradeStatusesResponse.decode(_m0.Reader.create(data)));
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(_m0.Reader.create(data)));
  }

  FrozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse> {
    const data = QueryFrozenBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FrozenBalances", data);
    return promise.then((data) => QueryFrozenBalancesResponse.decode(_m0.Reader.create(data)));
  }

  FrozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse> {
    const data = QueryFrozenBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FrozenBalance", data);
    return promise.then((data) => QueryFrozenBalanceResponse.decode(_m0.Reader.create(data)));
  }

  WhitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse> {
    const data = QueryWhitelistedBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WhitelistedBalances", data);
    return promise.then((data) => QueryWhitelistedBalancesResponse.decode(_m0.Reader.create(data)));
  }

  WhitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse> {
    const data = QueryWhitelistedBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WhitelistedBalance", data);
    return promise.then((data) => QueryWhitelistedBalanceResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
