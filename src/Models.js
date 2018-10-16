import {types} from "mobx-state-tree";

export const Product = types.model({
    title:types.optional(types.string, ""),
    canImport:types.optional(types.boolean, false)
});

export const MetaInfo = types.model({
    key:types.optional(types.string, ""),
    value:types.optional(types.string, "")
});