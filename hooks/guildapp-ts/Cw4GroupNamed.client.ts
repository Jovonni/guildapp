/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { InstantiateMsg, MemberNamed, ExecuteMsg, QueryMsg, AdminResponse, HooksResponse, MemberNamedListResponse, LookUpResponse, MemberResponse, ReverseLookUpResponse, TotalWeightResponse } from "./Cw4GroupNamed.types";
export interface Cw4GroupNamedReadOnlyInterface {
  contractAddress: string;
  admin: () => Promise<AdminResponse>;
  totalWeight: ({
    atHeight
  }: {
    atHeight?: number;
  }) => Promise<TotalWeightResponse>;
  listMembers: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<MemberNamedListResponse>;
  member: ({
    addr,
    atHeight
  }: {
    addr: string;
    atHeight?: number;
  }) => Promise<MemberResponse>;
  lookUp: ({
    addr
  }: {
    addr: string;
  }) => Promise<LookUpResponse>;
  reverseLookUp: ({
    name
  }: {
    name: string;
  }) => Promise<ReverseLookUpResponse>;
  hooks: () => Promise<HooksResponse>;
}
export class Cw4GroupNamedQueryClient implements Cw4GroupNamedReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.admin = this.admin.bind(this);
    this.totalWeight = this.totalWeight.bind(this);
    this.listMembers = this.listMembers.bind(this);
    this.member = this.member.bind(this);
    this.lookUp = this.lookUp.bind(this);
    this.reverseLookUp = this.reverseLookUp.bind(this);
    this.hooks = this.hooks.bind(this);
  }

  admin = async (): Promise<AdminResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin: {}
    });
  };
  totalWeight = async ({
    atHeight
  }: {
    atHeight?: number;
  }): Promise<TotalWeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_weight: {
        at_height: atHeight
      }
    });
  };
  listMembers = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<MemberNamedListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_members: {
        limit,
        start_after: startAfter
      }
    });
  };
  member = async ({
    addr,
    atHeight
  }: {
    addr: string;
    atHeight?: number;
  }): Promise<MemberResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      member: {
        addr,
        at_height: atHeight
      }
    });
  };
  lookUp = async ({
    addr
  }: {
    addr: string;
  }): Promise<LookUpResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      look_up: {
        addr
      }
    });
  };
  reverseLookUp = async ({
    name
  }: {
    name: string;
  }): Promise<ReverseLookUpResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_look_up: {
        name
      }
    });
  };
  hooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      hooks: {}
    });
  };
}
export interface Cw4GroupNamedInterface extends Cw4GroupNamedReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateAdmin: ({
    admin
  }: {
    admin?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateMembers: ({
    add,
    remove
  }: {
    add: MemberNamed[];
    remove: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addHook: ({
    addr
  }: {
    addr: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeHook: ({
    addr
  }: {
    addr: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class Cw4GroupNamedClient extends Cw4GroupNamedQueryClient implements Cw4GroupNamedInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateAdmin = this.updateAdmin.bind(this);
    this.updateMembers = this.updateMembers.bind(this);
    this.addHook = this.addHook.bind(this);
    this.removeHook = this.removeHook.bind(this);
  }

  updateAdmin = async ({
    admin
  }: {
    admin?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_admin: {
        admin
      }
    }, fee, memo, _funds);
  };
  updateMembers = async ({
    add,
    remove
  }: {
    add: MemberNamed[];
    remove: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_members: {
        add,
        remove
      }
    }, fee, memo, _funds);
  };
  addHook = async ({
    addr
  }: {
    addr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_hook: {
        addr
      }
    }, fee, memo, _funds);
  };
  removeHook = async ({
    addr
  }: {
    addr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_hook: {
        addr
      }
    }, fee, memo, _funds);
  };
}