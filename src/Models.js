import {types} from "mobx-state-tree";

export const Product = types.model({
    id:types.string,
    title:types.optional(types.string, ""),
    descr:types.optional(types.string, ""),
    priceFrom: types.optional(types.string, ""),
    canImport:types.optional(types.boolean, false),
    photoUrl: types.optional(types.string, ""),
    bokunId: types.optional(types.integer, -1),
    isBeeingImported: types.optional(types.boolean, false)

});

export const MetaInfo = types.model({
    key:types.optional(types.string, ""),
    value:types.optional(types.string, "")
});