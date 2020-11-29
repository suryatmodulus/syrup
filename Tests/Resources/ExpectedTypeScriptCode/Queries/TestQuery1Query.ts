
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery1Response } from "../Responses/TestQuery1Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export class TestQuery1Query extends Query<TestQuery1Response> {
    constructor() {
      super(
        "query TestQuery1 { __typename shop { __typename id name currencyCode weightUnit billingAddress { __typename city company latitude longitude } alerts { __typename description } shipsToCountries paymentSettings { __typename supportedDigitalWallets } } }",
        {
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "shop",
type: "Shop",
cacheKey: `shop`,
passedGID: null,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "name",
type: "String",
cacheKey: `name`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "currencyCode",
type: "CurrencyCode",
cacheKey: `currencyCode`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "weightUnit",
type: "WeightUnit",
cacheKey: `weightUnit`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "billingAddress",
type: "MailingAddress",
cacheKey: `billingAddress`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "city",
type: "String",
cacheKey: `city`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "company",
type: "String",
cacheKey: `company`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "latitude",
type: "Float",
cacheKey: `latitude`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "longitude",
type: "Float",
cacheKey: `longitude`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "alerts",
type: "ShopAlert",
cacheKey: `alerts`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "description",
type: "String",
cacheKey: `description`,
passedGID: null,
typeCondition: "ShopAlert",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "shipsToCountries",
type: "CountryCode",
cacheKey: `shipsToCountries`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "paymentSettings",
type: "PaymentSettings",
cacheKey: `paymentSettings`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "supportedDigitalWallets",
type: "DigitalWallet",
cacheKey: `supportedDigitalWallets`,
passedGID: null,
typeCondition: "PaymentSettings",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery1Response {
      return TestQuery1Response.fromJson(jsonObject)
    }
}