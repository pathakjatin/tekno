// Copyright 2012 Google Inc. All rights reserved.

(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");

(function () {
  var data = {
    resource: {
      version: "28",

      macros: [
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "OnetrustActiveGroups",
        },
        { function: "__e" },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__c", vtp_value: "us.astrolighting.com" },
        { function: "__c", vtp_value: "www.astrolighting.com" },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 3],
          vtp_defaultValue: "164407585753729",
          vtp_map: [
            "list",
            ["map", "key", ["macro", 4], "value", "1469366410106184"],
            ["map", "key", ["macro", 5], "value", "299653757143485"],
          ],
        },
        { function: "__cvt_50275930_89" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "userId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "siteVersion",
        },
        { function: "__k", vtp_decodeCookie: true, vtp_name: "d3raag" },
        {
          function: "__u",
          convert_undefined_to: ["macro", 10],
          vtp_component: "QUERY",
          vtp_queryKey: "aag",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return{site_version:",
            ["escape", ["macro", 9], 8, 16],
            ",audience_group:",
            ["escape", ["macro", 11], 8, 16],
            "}})();",
          ],
        },
        { function: "__e" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return OneTrust.getGeolocationData()})();",
          ],
        },
        {
          function: "__cvt_50275930_69",
          convert_case_to: 2,
          vtp_path: "country",
          vtp_obj: ["macro", 14],
          vtp_stringify: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "experimentVariation",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "experimentId",
        },
        {
          function: "__v",
          convert_true_to: "yes",
          convert_false_to: "no",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "no",
          vtp_name: "loggedIn",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "customerType",
        },
        { function: "__k", vtp_decodeCookie: true, vtp_name: "d3rj" },
        {
          function: "__cvt_50275930_69",
          convert_null_to: "no",
          convert_undefined_to: "no",
          convert_true_to: "yes",
          convert_false_to: "no",
          vtp_path: "customer",
          vtp_obj: ["macro", 20],
          vtp_stringify: false,
        },
        { function: "__c", vtp_value: "UA-52255263-4" },
        { function: "__c", vtp_value: "UA-52255263-1" },
        { function: "__c", vtp_value: "UA-52255263-2" },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 3],
          vtp_defaultValue: ["macro", 22],
          vtp_map: [
            "list",
            ["map", "key", ["macro", 5], "value", ["macro", 23]],
            ["map", "key", ["macro", 4], "value", ["macro", 24]],
          ],
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_useEcommerceDataLayer: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "expVar", "value", ["macro", 16]],
            ["map", "fieldName", "expId", "value", ["macro", 17]],
            ["map", "fieldName", "userId", "value", ["macro", 8]],
          ],
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_dimension: [
            "list",
            ["map", "index", "1", "dimension", ["macro", 18]],
            ["map", "index", "2", "dimension", ["macro", 9]],
            ["map", "index", "3", "dimension", ["macro", 19]],
            ["map", "index", "4", "dimension", ["macro", 9]],
            ["map", "index", "5", "dimension", ["macro", 21]],
          ],
          vtp_enableEcommerce: true,
          vtp_trackingId: ["macro", 25],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_ecommerceIsEnabled: true,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventValue",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventCategory",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventAction",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventLabel",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "trackingUrl",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "webVitalsMeasurement.deltaRounded",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "webVitalsMeasurement.name",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "webVitalsMeasurement.id",
        },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 3],
          vtp_defaultValue: "G-8WF5X8Z97W",
          vtp_map: [
            "list",
            ["map", "key", ["macro", 5], "value", "G-VX1PPMY0KW"],
          ],
        },
        { function: "__c", vtp_value: "https://gtm.astrolighting.com" },
        {
          function: "__gtcs",
          vtp_configSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "first_party_collection",
              "parameterValue",
              "true",
            ],
            ["map", "parameter", "logged_in", "parameterValue", ["macro", 18]],
            [
              "map",
              "parameter",
              "site_version",
              "parameterValue",
              ["macro", 9],
            ],
            [
              "map",
              "parameter",
              "consent_country",
              "parameterValue",
              ["macro", 15],
            ],
            [
              "map",
              "parameter",
              "server_container_url",
              "parameterValue",
              ["macro", 36],
            ],
          ],
        },
        {
          function: "__gtes",
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "consent_country",
              "parameterValue",
              ["macro", 15],
            ],
          ],
          vtp_userProperties: [
            "list",
            ["map", "name", "user_id", "value", ["macro", 8]],
            ["map", "name", "customer_type", "value", ["macro", 19]],
            ["map", "name", "is_customer", "value", ["macro", 21]],
            ["map", "name", "crm_id", "value", ["macro", 8]],
            ["map", "name", "audience_group", "value", ["macro", 11]],
          ],
        },
        { function: "__cvt_50275930_86", vtp_option: "auto" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.currencyCode",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "hashed_firstname",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "hashed_email",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "hashed_lastname",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.purchase.actionField.shipping",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.purchase.actionField.id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.purchase.actionField.revenue",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.purchase.actionField.tax",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.purchase.actionField.shipping",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "contact.subject",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 28], 8, 16],
            '+"_"+',
            ["escape", ["macro", 29], 8, 16],
            ';return a.toLowerCase().replaceAll(" ","_")})();',
          ],
        },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 50],
          vtp_defaultValue: ["macro", 50],
          vtp_map: [
            "list",
            ["map", "key", "where_to_buy_popup", "value", "find_location"],
            ["map", "key", "where_to_buy_page", "value", "find_location"],
          ],
        },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 3],
          vtp_defaultValue: "4111970",
          vtp_map: ["list", ["map", "key", ["macro", 4], "value", "4005860"]],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventId",
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!0})();"],
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!1})();"],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 0],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_defaultValue: ["macro", 55],
          vtp_ignoreCase: true,
          vtp_map: ["list", ["map", "key", ",C0004,", "value", ["macro", 54]]],
        },
        { function: "__k", vtp_decodeCookie: true, vtp_name: "OptanonConsent" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
      ],
      tags: [
        {
          function: "__googtag",
          priority: 100,
          metadata: ["map"],
          once_per_load: true,
          vtp_tagId: ["macro", 35],
          vtp_configSettingsVariable: ["macro", 37],
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "false"],
          ],
          vtp_eventSettingsVariable: ["macro", 38],
          tag_id: 80,
        },
        {
          function: "__paused",
          vtp_originalTagType: "cvt_50275930_8",
          tag_id: 11,
        },
        {
          function: "__cvt_50275930_8",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: ["macro", 6],
          vtp_eventId: ["macro", 7],
          vtp_disableAutoConfig: false,
          vtp_eecEventName: "eec",
          vtp_enhancedEcommerce: true,
          vtp_dpoLDU: false,
          vtp_advancedMatchingList: [
            "list",
            ["map", "name", "external_id", "value", ["macro", 8]],
          ],
          vtp_objectPropertiesFromVariable: ["macro", 12],
          vtp_consent: true,
          vtp_advancedMatching: true,
          tag_id: 20,
        },
        {
          function: "__ua",
          metadata: ["map"],
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Ecommerce",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 26],
          vtp_eventAction: "Remove From Cart",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 32,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 35 },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_load: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 26],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 36,
        },
        {
          function: "__ua",
          metadata: ["map"],
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Ecommerce",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 26],
          vtp_eventAction: "Add To Cart",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 42,
        },
        {
          function: "__cvt_50275930_8",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: ["macro", 6],
          vtp_eventId: ["macro", 7],
          vtp_standardEventName: "PageView",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_advancedMatchingList: [
            "list",
            ["map", "name", "external_id", "value", ["macro", 8]],
          ],
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: ["macro", 12],
          vtp_consent: true,
          vtp_advancedMatching: true,
          tag_id: 43,
        },
        {
          function: "__cvt_50275930_44",
          metadata: ["map"],
          once_per_event: true,
          vtp_expiry: 1,
          vtp_key: "t",
          tag_id: 45,
        },
        {
          function: "__hjtc",
          metadata: ["map"],
          once_per_event: true,
          vtp_hotjar_site_id: "1179769",
          tag_id: 49,
        },
        {
          function: "__okt",
          metadata: ["map"],
          once_per_event: true,
          vtp_trackType: "pageView",
          vtp_oktopostAccountId: "001rgaajtu4g0sy",
          tag_id: 50,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventValue: ["macro", 27],
          vtp_eventCategory: ["macro", 28],
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 26],
          vtp_eventAction: ["macro", 29],
          vtp_eventLabel: ["macro", 30],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 61,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "page", "value", ["macro", 31]],
          ],
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 26],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 68,
        },
        {
          function: "__cvt_50275930_73",
          metadata: ["map"],
          once_per_event: true,
          vtp_namespace: false,
          tag_id: 74,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 0, 0]],
          once_per_load: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "event_id", "parameterValue", ["macro", 7]],
          ],
          vtp_eventName: "page_view",
          vtp_measurementIdOverride: ["macro", 35],
          vtp_eventSettingsVariable: ["macro", 38],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 84,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 39]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 40]],
            ["map", "parameter", "event_id", "parameterValue", ["macro", 7]],
          ],
          vtp_eventName: "view_item",
          vtp_measurementIdOverride: ["macro", 35],
          vtp_eventSettingsVariable: ["macro", 38],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 88,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 39]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 40]],
            ["map", "parameter", "event_id", "parameterValue", ["macro", 7]],
          ],
          vtp_eventName: "begin_checkout",
          vtp_measurementIdOverride: ["macro", 35],
          vtp_eventSettingsVariable: ["macro", 38],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 94,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "event_id", "parameterValue", ["macro", 7]],
            [
              "map",
              "parameter",
              "hashed_firstname",
              "parameterValue",
              ["macro", 41],
            ],
            [
              "map",
              "parameter",
              "hashed_email",
              "parameterValue",
              ["macro", 42],
            ],
            [
              "map",
              "parameter",
              "hashed_lastname",
              "parameterValue",
              ["macro", 43],
            ],
          ],
          vtp_eventName: "contact",
          vtp_measurementIdOverride: ["macro", 35],
          vtp_eventSettingsVariable: ["macro", 38],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 98,
        },
        {
          function: "__cvt_50275930_8",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: ["macro", 6],
          vtp_eventId: ["macro", 7],
          vtp_standardEventName: "Contact",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_advancedMatchingList: [
            "list",
            ["map", "name", "external_id", "value", ["macro", 8]],
            ["map", "name", "em", "value", ["macro", 42]],
            ["map", "name", "fn", "value", ["macro", 41]],
            ["map", "name", "ln", "value", ["macro", 43]],
          ],
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: ["macro", 12],
          vtp_consent: true,
          vtp_advancedMatching: true,
          tag_id: 99,
        },
        {
          function: "__cvt_50275930_8",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: ["macro", 6],
          vtp_eventId: ["macro", 7],
          vtp_standardEventName: "Search",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_advancedMatchingList: [
            "list",
            ["map", "name", "external_id", "value", ["macro", 8]],
          ],
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: ["macro", 12],
          vtp_consent: true,
          vtp_advancedMatching: true,
          tag_id: 107,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "event_id", "parameterValue", ["macro", 7]],
            [
              "map",
              "parameter",
              "search_term",
              "parameterValue",
              ["macro", 30],
            ],
          ],
          vtp_eventName: "search",
          vtp_measurementIdOverride: ["macro", 35],
          vtp_eventSettingsVariable: ["macro", 38],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 108,
        },
        {
          function: "__cvt_50275930_8",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: ["macro", 6],
          vtp_eventId: ["macro", 7],
          vtp_standardEventName: "FindLocation",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_advancedMatchingList: [
            "list",
            ["map", "name", "external_id", "value", ["macro", 8]],
          ],
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: ["macro", 12],
          vtp_consent: true,
          vtp_advancedMatching: true,
          tag_id: 109,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 39]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 40]],
            ["map", "parameter", "event_id", "parameterValue", ["macro", 7]],
            ["map", "parameter", "coupon", "parameterValue", ["macro", 44]],
            [
              "map",
              "parameter",
              "transaction_id",
              "parameterValue",
              ["macro", 45],
            ],
            ["map", "parameter", "value", "parameterValue", ["macro", 46]],
            ["map", "parameter", "tax", "parameterValue", ["macro", 47]],
            ["map", "parameter", "shipping", "parameterValue", ["macro", 48]],
          ],
          vtp_eventName: "purchase",
          vtp_measurementIdOverride: ["macro", 35],
          vtp_eventSettingsVariable: ["macro", 38],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 113,
        },
        {
          function: "__hjtc",
          metadata: ["map"],
          once_per_event: true,
          vtp_hotjar_site_id: "2874026",
          tag_id: 120,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Contact",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 26],
          vtp_eventAction: "Submission",
          vtp_eventLabel: ["macro", 49],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 122,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "event_id", "parameterValue", ["macro", 7]],
            ["map", "parameter", "label", "parameterValue", ["macro", 30]],
            ["map", "parameter", "value", "parameterValue", ["macro", 27]],
          ],
          vtp_eventName: ["macro", 51],
          vtp_measurementIdOverride: ["macro", 35],
          vtp_eventSettingsVariable: ["macro", 38],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 124,
        },
        {
          function: "__cvt_50275930_129",
          metadata: ["map"],
          once_per_event: true,
          vtp_customUrl: "",
          vtp_partnerId: ["macro", 52],
          vtp_conversionId: "",
          tag_id: 128,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 39]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 40]],
            ["map", "parameter", "event_id", "parameterValue", ["macro", 7]],
          ],
          vtp_eventName: "add_to_cart",
          vtp_measurementIdOverride: ["macro", 35],
          vtp_eventSettingsVariable: ["macro", 38],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 139,
        },
        {
          function: "__paused",
          vtp_originalTagType: "cvt_50275930_141",
          tag_id: 142,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "50275930_97_102", "50275930_97_135"],
          vtp_uniqueTriggerId: "50275930_97",
          tag_id: 143,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_97_102",
          tag_id: 144,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_97_135",
          tag_id: 146,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "50275930_110_91", "50275930_110_135"],
          vtp_uniqueTriggerId: "50275930_110",
          tag_id: 147,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_110_91",
          tag_id: 148,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_110_135",
          tag_id: 150,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "50275930_111_93", "50275930_111_135"],
          vtp_uniqueTriggerId: "50275930_111",
          tag_id: 151,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_111_93",
          tag_id: 152,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_111_135",
          tag_id: 154,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "50275930_112_33", "50275930_112_135"],
          vtp_uniqueTriggerId: "50275930_112",
          tag_id: 155,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_112_33",
          tag_id: 156,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_112_135",
          tag_id: 158,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "50275930_136_135", "50275930_136_106"],
          vtp_uniqueTriggerId: "50275930_136",
          tag_id: 159,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_136_135",
          tag_id: 160,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_136_106",
          tag_id: 162,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "50275930_137_135", "50275930_137_58"],
          vtp_uniqueTriggerId: "50275930_137",
          tag_id: 163,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_137_135",
          tag_id: 164,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_137_58",
          tag_id: 166,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "50275930_138_13", "50275930_138_135"],
          vtp_uniqueTriggerId: "50275930_138",
          tag_id: 167,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_138_13",
          tag_id: 168,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "50275930_138_135",
          tag_id: 170,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://analytics-eu.clickdimensions.com/ts.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Evar cdAnalytics=new clickdimensions.Analytics("analytics-eu.clickdimensions.com");cdAnalytics.setAccountKey("a2mhaM5XqEW3PNzelXbO5A");cdAnalytics.setDomain("astrolighting.com");cdAnalytics.setScore("undefined"==typeof cdScore?0:0==cdScore?null:cdScore);cdAnalytics.trackPage();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 51,
        },
        {
          function: "__ua",
          priority: -100,
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventValue: ["macro", 32],
          vtp_eventCategory: "core-web-vitals",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 26],
          vtp_eventAction: ["macro", 33],
          vtp_eventLabel: ["macro", 34],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 78,
        },
      ],
      predicates: [
        { function: "_re", arg0: ["macro", 0], arg1: ",C0004," },
        { function: "_re", arg0: ["macro", 1], arg1: "OneTrustGroupsUpdated" },
        { function: "_eq", arg0: ["macro", 1], arg1: "addToCart" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.triggerGroup" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)50275930_110($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)50275930_111($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)50275930_112($|,)))",
        },
        { function: "_re", arg0: ["macro", 1], arg1: ".*" },
        { function: "_eq", arg0: ["macro", 13], arg1: "removeFromCart" },
        { function: "_eq", arg0: ["macro", 1], arg1: "removeFromCart" },
        { function: "_re", arg0: ["macro", 0], arg1: ",C0002," },
        { function: "_re", arg0: ["macro", 15], arg1: "^(AT|FR|IT)$" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.js" },
        { function: "_ew", arg0: ["macro", 3], arg1: "astrolighting.com" },
        { function: "_eq", arg0: ["macro", 1], arg1: "d3r.event" },
        { function: "_eq", arg0: ["macro", 1], arg1: "d3r.pageview" },
        { function: "_eq", arg0: ["macro", 1], arg1: "coreWebVitals" },
        { function: "_eq", arg0: ["macro", 0], arg1: ",C0001," },
        { function: "_eq", arg0: ["macro", 1], arg1: "OneTrustGroupsUpdated" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)50275930_97($|,)))",
        },
        {
          function: "_eq",
          arg0: ["macro", 28],
          arg1: "Product Search - Header",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)50275930_136($|,)))",
        },
        { function: "_eq", arg0: ["macro", 28], arg1: "Where to buy" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)50275930_138($|,)))",
        },
        { function: "_re", arg0: ["macro", 1], arg1: "OptanonLoaded" },
        { function: "_eq", arg0: ["macro", 1], arg1: "contact" },
        { function: "_eq", arg0: ["macro", 1], arg1: "productDetail" },
        { function: "_eq", arg0: ["macro", 1], arg1: "checkout" },
        {
          function: "_eq",
          arg0: ["macro", 1],
          arg1: "transactionConfirmation",
        },
      ],
      rules: [
        [
          ["if", 0, 1],
          ["add", 1, 7, 26],
        ],
        [
          ["if", 2],
          ["add", 2, 6, 48],
        ],
        [
          ["if", 3, 4],
          ["add", 2, 15],
        ],
        [
          ["if", 3, 5],
          ["add", 2, 16],
        ],
        [
          ["if", 3, 6],
          ["add", 2, 22],
        ],
        [
          ["if", 8, 9],
          ["add", 3],
        ],
        [
          ["if", 12],
          ["add", 4, 29, 32, 35, 38, 41, 44, 47],
        ],
        [
          ["if", 1, 10],
          ["add", 5, 8, 9, 10, 13, 23, 50],
        ],
        [
          ["if", 14],
          ["add", 11, 25, 46],
        ],
        [
          ["if", 15],
          ["add", 12],
        ],
        [
          ["if", 16],
          ["add", 51],
        ],
        [
          ["if", 18],
          ["unless", 17],
          ["add", 0, 14, 31, 34, 37, 40, 42, 45, 49],
        ],
        [
          ["if", 3, 19],
          ["add", 17, 18, 24],
        ],
        [
          ["if", 14, 20],
          ["add", 19, 43],
        ],
        [
          ["if", 3, 21],
          ["add", 20],
        ],
        [
          ["if", 14, 22],
          ["add", 21],
        ],
        [
          ["if", 3, 23],
          ["add", 27],
        ],
        [
          ["if", 0, 24],
          ["add", 28],
        ],
        [
          ["if", 25],
          ["add", 30],
        ],
        [
          ["if", 26],
          ["add", 33],
        ],
        [
          ["if", 27],
          ["add", 36],
        ],
        [
          ["if", 28],
          ["add", 39],
        ],
        [
          ["if", 7],
          ["unless", 0],
          ["block", 2, 18, 19, 21],
        ],
        [
          ["if", 7],
          ["unless", 10],
          ["block", 3, 6, 11, 12, 51, 24],
        ],
        [
          ["if", 7, 11],
          ["block", 3, 5, 6, 11, 12, 51, 24],
        ],
        [
          ["if", 7],
          ["unless", 13],
          ["block", 9, 10, 50],
        ],
        [
          ["if", 7, 17],
          ["block", 25],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_50275930_129",
        [46, "a"],
        [
          50,
          "p",
          [46, "u"],
          [52, "v", ["j", [2, [15, "l"], "join", [7, ","]]]],
          [41, "w"],
          [3, "w", [0, "pid=", [15, "v"]]],
          [3, "w", [0, [15, "w"], "&tm=gtmv2"]],
          [
            3,
            "w",
            [
              0,
              [15, "w"],
              [39, [15, "u"], [0, "&conversionId=", ["j", [15, "u"]]], ""],
            ],
          ],
          [3, "w", [0, [15, "w"], [0, "&url=", ["j", [15, "m"]]]]],
          [3, "w", [0, [15, "w"], [0, "&v=2&fmt=js&time=", ["g"]]]],
          [36, [15, "w"]],
        ],
        [50, "q", [46], ["t"], [2, [15, "a"], "gtmOnSuccess", [7]]],
        [50, "r", [46], ["s"], [2, [15, "a"], "gtmOnFailure", [7]]],
        [
          50,
          "s",
          [46],
          [
            22,
            [1, [17, [15, "k"], "length"], [24, [17, [15, "k"], "length"], 3]],
            [
              46,
              [
                2,
                [15, "k"],
                "forEach",
                [
                  7,
                  [
                    51,
                    "",
                    [7, "u"],
                    [
                      52,
                      "v",
                      [
                        0,
                        "https://px.ads.linkedin.com/collect?",
                        ["p", [15, "u"]],
                      ],
                    ],
                    [
                      "d",
                      [15, "v"],
                      [17, [15, "a"], "gtmOnSuccess"],
                      [17, [15, "a"], "gtmOnFailure"],
                    ],
                  ],
                ],
              ],
            ],
            [
              46,
              [
                "d",
                [0, "https://px.ads.linkedin.com/collect?", ["p"]],
                [17, [15, "a"], "gtmOnSuccess"],
                [17, [15, "a"], "gtmOnFailure"],
              ],
            ],
          ],
        ],
        [
          50,
          "t",
          [46],
          [
            22,
            ["n"],
            [
              46,
              [
                53,
                [52, "u", ["i", "lintrk"]],
                [52, "v", [8, "tmsource", "gtmv2"]],
                [43, [15, "v"], "conversion_url", [15, "m"]],
                [
                  22,
                  [
                    1,
                    [17, [15, "k"], "length"],
                    [24, [17, [15, "k"], "length"], 3],
                  ],
                  [
                    46,
                    [
                      2,
                      [15, "k"],
                      "forEach",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "w"],
                          [43, [15, "v"], "conversion_id", [15, "w"]],
                          ["u", "track", [15, "v"]],
                        ],
                      ],
                    ],
                  ],
                  [46, ["u", "track", [15, "v"]]],
                ],
              ],
            ],
            [
              46,
              ["f", "_already_called_lintrk", true, true],
              [
                "h",
                "https://snap.licdn.com/li.lms-analytics/insight.min.js",
                [15, "q"],
                [15, "r"],
              ],
            ],
          ],
        ],
        [52, "b", ["require", "getUrl"]],
        [52, "c", ["require", "logToConsole"]],
        [52, "d", ["require", "sendPixel"]],
        [52, "e", ["require", "assertThat"]],
        [52, "f", ["require", "setInWindow"]],
        [52, "g", ["require", "getTimestamp"]],
        [52, "h", ["require", "injectScript"]],
        [52, "i", ["require", "copyFromWindow"]],
        [52, "j", ["require", "encodeUriComponent"]],
        [
          52,
          "k",
          [
            39,
            [17, [15, "a"], "conversionId"],
            [
              2,
              [
                2,
                [2, [17, [15, "a"], "conversionId"], "split", [7, ","]],
                "slice",
                [7, 0, 3],
              ],
              "map",
              [7, [51, "", [7, "u"], [36, [2, [15, "u"], "trim", [7]]]]],
            ],
            "",
          ],
        ],
        [52, "l", [7]],
        [
          52,
          "m",
          [
            39,
            [17, [15, "a"], "customUrl"],
            [17, [15, "a"], "customUrl"],
            ["b"],
          ],
        ],
        [52, "n", [51, "", [7], [36, [20, [40, ["i", "lintrk"]], "function"]]]],
        [
          52,
          "o",
          [
            13,
            [41, "$0"],
            [
              3,
              "$0",
              [
                51,
                "",
                [7],
                [52, "u", [8]],
                [52, "v", ["i", "_bizo_data_partner_id"]],
                [52, "w", [30, ["i", "_bizo_data_partner_ids"], [7]]],
                [52, "x", ["i", "_linkedin_data_partner_id"]],
                [52, "y", [30, ["i", "_linkedin_data_partner_ids"], [7]]],
                [
                  52,
                  "z",
                  [
                    51,
                    "",
                    [7, "bb"],
                    [
                      22,
                      [1, [15, "bb"], [28, [16, [15, "u"], [15, "bb"]]]],
                      [
                        46,
                        [43, [15, "u"], [15, "bb"], true],
                        [2, [15, "l"], "push", [7, [15, "bb"]]],
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "ba",
                  [2, [17, [15, "a"], "partnerId"], "split", [7, ","]],
                ],
                [
                  2,
                  [15, "ba"],
                  "forEach",
                  [
                    7,
                    [
                      51,
                      "",
                      [7, "bb"],
                      [36, ["z", [2, [15, "bb"], "trim", [7]]]],
                    ],
                  ],
                ],
                ["z", [15, "x"]],
                [
                  2,
                  [15, "y"],
                  "forEach",
                  [7, [51, "", [7, "bb"], [36, ["z", [15, "bb"]]]]],
                ],
                ["z", [15, "v"]],
                [
                  2,
                  [15, "w"],
                  "forEach",
                  [7, [51, "", [7, "bb"], [36, ["z", [15, "bb"]]]]],
                ],
                ["f", "_linkedin_data_partner_ids", [15, "l"], true],
              ],
            ],
            ["$0"],
          ],
        ],
        ["t"],
      ],
      [
        50,
        "__cvt_50275930_44",
        [46, "a"],
        [52, "b", ["require", "logToConsole"]],
        [52, "c", ["require", "getReferrerUrl"]],
        [52, "d", ["require", "encodeUriComponent"]],
        [52, "e", ["require", "getCookieValues"]],
        [52, "f", ["require", "setCookie"]],
        [52, "g", ["require", "getUrl"]],
        [52, "h", ["require", "getQueryParameters"]],
        [52, "i", ["require", "getTimestamp"]],
        [52, "j", ["require", "Math"]],
        ["b", "data =", [15, "a"]],
        [
          52,
          "k",
          [
            51,
            "",
            [7, "u"],
            [41, "v"],
            [3, "v", [8]],
            [41, "w"],
            [3, "w", [2, [15, "u"], "split", [7, "&"]]],
            [
              2,
              [15, "w"],
              "forEach",
              [
                7,
                [
                  51,
                  "",
                  [7, "x"],
                  [
                    43,
                    [15, "v"],
                    [16, [15, "x"], 0],
                    [2, [15, "x"], "substring", [7, 2]],
                  ],
                ],
              ],
            ],
            [36, [15, "v"]],
          ],
        ],
        [
          52,
          "l",
          [
            51,
            "",
            [7, "u"],
            [41, "w"],
            [41, "v"],
            [3, "v", [7]],
            [
              47,
              "w",
              [15, "u"],
              [
                46,
                [
                  2,
                  [15, "v"],
                  "push",
                  [7, [0, [0, [15, "w"], "/"], [16, [15, "u"], [15, "w"]]]],
                ],
              ],
            ],
            [36, [2, [15, "v"], "join", [7, "&"]]],
          ],
        ],
        [
          52,
          "m",
          [
            51,
            "",
            [7],
            [52, "u", ["c"]],
            [
              22,
              [
                1,
                [
                  1,
                  [15, "u"],
                  [20, [2, [15, "u"], "indexOf", [7, ["g", "host"]]], [27, 1]],
                ],
                [
                  20,
                  [2, ["g", "query"], "indexOf", [7, "utm_nooverride=1"]],
                  [27, 1],
                ],
              ],
              [46, [36, [2, [15, "u"], "substring", [7, 0, 64]]]],
            ],
            [36, false],
          ],
        ],
        [
          52,
          "n",
          [
            51,
            "",
            [7],
            [52, "u", ["m"]],
            ["b", [0, "Referrer = ", [15, "u"]]],
            [
              36,
              [
                0,
                [
                  0,
                  [
                    0,
                    [0, ["d", [0, ["g", "path"], ["g", "query"]]], "|"],
                    ["d", [39, [15, "u"], [15, "u"], "Direct"]],
                  ],
                  "|",
                ],
                [2, [15, "j"], "floor", [7, [10, ["i"], 1000]]],
              ],
            ],
          ],
        ],
        [52, "o", ["e", "d3rt"]],
        [41, "p"],
        [
          3,
          "p",
          [
            39,
            [17, [15, "o"], "length"],
            ["k", [2, [15, "o"], "shift", [7]]],
            [8],
          ],
        ],
        [52, "q", ["n"]],
        [41, "r"],
        [3, "r", true],
        [
          22,
          [28, [17, [15, "o"], "f"]],
          [46, [43, [15, "p"], "f", [15, "q"]], [3, "r", false]],
        ],
        [52, "s", ["h", [17, [15, "a"], "key"], false]],
        [22, [15, "s"], [46, [3, "r", false], [43, [15, "p"], "c", [15, "q"]]]],
        [22, [1, [15, "r"], ["m"]], [46, [43, [15, "p"], "r", [15, "q"]]]],
        ["b", "Tracking Data", [15, "p"]],
        [41, "t"],
        [3, "t", ["l", [15, "p"]]],
        ["b", [0, "Encoded = ", [15, "t"]]],
        [
          "f",
          "d3rt",
          [15, "t"],
          [
            8,
            "max-age",
            [26, [17, [15, "a"], "expiry"], 3.1556952e7],
            "secure",
            true,
            "path",
            "/",
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__cvt_50275930_69",
        [46, "a"],
        [41, "c", "d", "e"],
        [52, "b", ["require", "JSON"]],
        [3, "c", [30, [17, [15, "a"], "path"], ""]],
        [3, "d", [30, [17, [15, "a"], "obj"], [8]]],
        [
          22,
          [20, [40, [15, "d"]], "string"],
          [46, [3, "d", [2, [15, "b"], "parse", [7, [15, "d"]]]]],
        ],
        [
          3,
          "e",
          [
            2,
            [2, [15, "c"], "split", [7, "."]],
            "reduce",
            [
              7,
              [
                51,
                "",
                [7, "f", "g"],
                [41, "h", "i", "j", "k"],
                [3, "h", [2, [15, "g"], "indexOf", [7, "["]]],
                [3, "i", [2, [15, "g"], "indexOf", [7, "]"]]],
                [
                  22,
                  [1, [19, [15, "h"], 0], [18, [15, "i"], [15, "h"]]],
                  [
                    46,
                    [3, "j", [15, "g"]],
                    [3, "g", [2, [15, "j"], "substring", [7, 0, [15, "h"]]]],
                    [
                      3,
                      "k",
                      [
                        2,
                        [15, "j"],
                        "substring",
                        [7, [0, [15, "h"], 1], [15, "i"]],
                      ],
                    ],
                    [
                      22,
                      [29, [15, "g"], ""],
                      [
                        46,
                        [
                          36,
                          [
                            1,
                            [15, "f"],
                            [16, [16, [15, "f"], [15, "g"]], [15, "k"]],
                          ],
                        ],
                      ],
                      [46, [36, [1, [15, "f"], [16, [15, "f"], [15, "k"]]]]],
                    ],
                  ],
                  [46, [36, [1, [15, "f"], [16, [15, "f"], [15, "g"]]]]],
                ],
              ],
              [15, "d"],
            ],
          ],
        ],
        [
          22,
          [1, [20, [40, [15, "e"]], "object"], [17, [15, "a"], "stringify"]],
          [46, [3, "e", [2, [15, "b"], "stringify", [7, [15, "e"]]]]],
        ],
        [36, [15, "e"]],
      ],
      [
        50,
        "__cvt_50275930_73",
        [46, "a"],
        [52, "b", ["require", "copyFromWindow"]],
        [52, "c", ["require", "createQueue"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "logToConsole"]],
        [52, "f", ["require", "Math"]],
        [52, "g", ["c", "dataLayer"]],
        [
          52,
          "h",
          [
            51,
            "",
            [7, "k"],
            ["e", [15, "k"]],
            [2, [15, "a"], "gtmOnFailure", [7]],
          ],
        ],
        [
          52,
          "i",
          [
            51,
            "",
            [7, "k"],
            [
              52,
              "l",
              [8, "event", "coreWebVitals", "webVitalsMeasurement", [8]],
            ],
            [
              52,
              "m",
              [
                8,
                "name",
                [17, [15, "k"], "name"],
                "id",
                [17, [15, "k"], "id"],
                "value",
                [17, [15, "k"], "value"],
                "delta",
                [17, [15, "k"], "delta"],
                "valueRounded",
                [
                  2,
                  [15, "f"],
                  "round",
                  [
                    7,
                    [
                      39,
                      [20, [17, [15, "k"], "name"], "CLS"],
                      [26, [17, [15, "k"], "value"], 1000],
                      [17, [15, "k"], "value"],
                    ],
                  ],
                ],
                "deltaRounded",
                [
                  2,
                  [15, "f"],
                  "round",
                  [
                    7,
                    [
                      39,
                      [20, [17, [15, "k"], "name"], "CLS"],
                      [26, [17, [15, "k"], "delta"], 1000],
                      [17, [15, "k"], "delta"],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [17, [15, "a"], "namespace"],
              [
                46,
                [
                  43,
                  [17, [15, "l"], "webVitalsMeasurement"],
                  [17, [15, "k"], "name"],
                  [15, "m"],
                ],
              ],
              [46, [43, [15, "l"], "webVitalsMeasurement", [15, "m"]]],
            ],
            ["g", [15, "l"]],
          ],
        ],
        [
          52,
          "j",
          [
            51,
            "",
            [7],
            [52, "k", ["b", "webVitals"]],
            [
              22,
              [28, [15, "k"]],
              [
                46,
                [
                  36,
                  [
                    "h",
                    "[GTM / Core Web Vitals]: window.webVitals failed to load.",
                  ],
                ],
              ],
            ],
            [2, [15, "k"], "getFID", [7, [15, "i"]]],
            [2, [15, "k"], "getCLS", [7, [15, "i"]]],
            [2, [15, "k"], "getLCP", [7, [15, "i"]]],
            [
              22,
              [17, [15, "a"], "allMetrics"],
              [
                46,
                [2, [15, "k"], "getFCP", [7, [15, "i"]]],
                [2, [15, "k"], "getINP", [7, [15, "i"]]],
                [2, [15, "k"], "getTTFB", [7, [15, "i"]]],
              ],
            ],
            [2, [15, "a"], "gtmOnSuccess", [7]],
          ],
        ],
        [
          "d",
          "https://unpkg.com/web-vitals/dist/web-vitals.iife.js",
          [15, "j"],
          [17, [15, "a"], "gtmOnFailure"],
          "web-vitals",
        ],
      ],
      [
        50,
        "__cvt_50275930_8",
        [46, "a"],
        [52, "b", ["require", "createQueue"]],
        [52, "c", ["require", "callInWindow"]],
        [52, "d", ["require", "aliasInWindow"]],
        [52, "e", ["require", "copyFromWindow"]],
        [52, "f", ["require", "setInWindow"]],
        [52, "g", ["require", "injectScript"]],
        [52, "h", ["require", "makeTableMap"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "getType"]],
        [52, "k", ["require", "copyFromDataLayer"]],
        [52, "l", ["require", "Math"]],
        [52, "m", ["require", "logToConsole"]],
        [52, "n", [30, ["e", "_fbq_gtm_ids"], [7]]],
        [52, "o", [17, [15, "a"], "pixelId"]],
        [
          52,
          "p",
          [
            7,
            "AddPaymentInfo",
            "AddToCart",
            "AddToWishlist",
            "CompleteRegistration",
            "Contact",
            "CustomizeProduct",
            "Donate",
            "FindLocation",
            "InitiateCheckout",
            "Lead",
            "PageView",
            "Purchase",
            "Schedule",
            "Search",
            "StartTrial",
            "SubmitApplication",
            "Subscribe",
            "ViewContent",
          ],
        ],
        [52, "q", ["k", "ecommerce", 1]],
        [
          52,
          "r",
          [
            51,
            "",
            [7, "bg"],
            ["m", [15, "bg"]],
            [2, [15, "a"], "gtmOnFailure", [7]],
          ],
        ],
        [
          52,
          "s",
          [
            51,
            "",
            [7, "bg", "bh"],
            [
              55,
              "bi",
              [15, "bh"],
              [
                46,
                [
                  22,
                  [2, [15, "bh"], "hasOwnProperty", [7, [15, "bi"]]],
                  [
                    46,
                    [43, [15, "bg"], [15, "bi"], [16, [15, "bh"], [15, "bi"]]],
                  ],
                ],
              ],
            ],
            [36, [15, "bg"]],
          ],
        ],
        [
          52,
          "t",
          [
            51,
            "",
            [7, "bg"],
            [
              36,
              [
                8,
                "id",
                [17, [15, "bg"], "id"],
                "quantity",
                [17, [15, "bg"], "quantity"],
              ],
            ],
          ],
        ],
        [41, "u", "v", "w"],
        [
          22,
          [17, [15, "a"], "enhancedEcommerce"],
          [
            46,
            [
              22,
              [28, [15, "q"]],
              [
                46,
                [
                  36,
                  [
                    "r",
                    'Facebook Pixel: No valid "ecommerce" object found in dataLayer',
                  ],
                ],
              ],
            ],
            [
              22,
              [17, [15, "q"], "detail"],
              [46, [3, "u", "ViewContent"], [3, "v", "detail"]],
              [
                46,
                [
                  22,
                  [17, [15, "q"], "add"],
                  [46, [3, "u", "AddToCart"], [3, "v", "add"]],
                  [
                    46,
                    [
                      22,
                      [17, [15, "q"], "checkout"],
                      [46, [3, "u", "InitiateCheckout"], [3, "v", "checkout"]],
                      [
                        46,
                        [
                          22,
                          [17, [15, "q"], "purchase"],
                          [46, [3, "u", "Purchase"], [3, "v", "purchase"]],
                          [
                            46,
                            [
                              36,
                              [
                                "r",
                                'Facebook Pixel: Most recently pushed "ecommerce" object must be one of types "detail", "add", "checkout" or "purchase".',
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [
                30,
                [28, [17, [16, [15, "q"], [15, "v"]], "products"]],
                [
                  21,
                  ["j", [17, [16, [15, "q"], [15, "v"]], "products"]],
                  "array",
                ],
              ],
              [
                46,
                [
                  36,
                  [
                    "r",
                    'Facebook pixel: Most recently pushed "ecommerce" object did not have a valid "products" array.',
                  ],
                ],
              ],
            ],
            [
              3,
              "w",
              [
                8,
                "content_type",
                "product",
                "contents",
                [
                  2,
                  [17, [16, [15, "q"], [15, "v"]], "products"],
                  "map",
                  [7, [15, "t"]],
                ],
                "value",
                [
                  2,
                  [17, [16, [15, "q"], [15, "v"]], "products"],
                  "reduce",
                  [
                    7,
                    [
                      51,
                      "",
                      [7, "bg", "bh"],
                      [
                        52,
                        "bi",
                        [
                          10,
                          [
                            2,
                            [15, "l"],
                            "round",
                            [
                              7,
                              [
                                26,
                                [
                                  26,
                                  ["i", [30, [17, [15, "bh"], "price"], 0]],
                                  [30, [17, [15, "bh"], "quantity"], 1],
                                ],
                                100,
                              ],
                            ],
                          ],
                          100,
                        ],
                      ],
                      [36, [0, [15, "bg"], [15, "bi"]]],
                    ],
                    0,
                  ],
                ],
                "currency",
                [30, [17, [15, "q"], "currencyCode"], "USD"],
              ],
            ],
            [
              22,
              [
                18,
                [
                  2,
                  [7, "InitiateCheckout", "Purchase"],
                  "indexOf",
                  [7, [15, "u"]],
                ],
                [27, 1],
              ],
              [
                46,
                [
                  43,
                  [15, "w"],
                  "num_items",
                  [
                    2,
                    [17, [16, [15, "q"], [15, "v"]], "products"],
                    "reduce",
                    [
                      7,
                      [
                        51,
                        "",
                        [7, "bg", "bh"],
                        [
                          36,
                          [
                            0,
                            [15, "bg"],
                            ["i", [30, [17, [15, "bh"], "quantity"], 1]],
                          ],
                        ],
                      ],
                      0,
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          52,
          "x",
          [
            39,
            [
              1,
              [17, [15, "a"], "advancedMatchingList"],
              [17, [17, [15, "a"], "advancedMatchingList"], "length"],
            ],
            ["h", [17, [15, "a"], "advancedMatchingList"], "name", "value"],
            [8],
          ],
        ],
        [
          52,
          "y",
          [
            39,
            [
              1,
              [17, [15, "a"], "objectPropertyList"],
              [17, [17, [15, "a"], "objectPropertyList"], "length"],
            ],
            ["h", [17, [15, "a"], "objectPropertyList"], "name", "value"],
            [8],
          ],
        ],
        [
          52,
          "z",
          [
            39,
            [
              20,
              ["j", [17, [15, "a"], "objectPropertiesFromVariable"]],
              "object",
            ],
            [17, [15, "a"], "objectPropertiesFromVariable"],
            [8],
          ],
        ],
        [52, "ba", ["s", [15, "z"], [15, "y"]]],
        [52, "bb", ["s", [30, [15, "w"], [8]], [15, "ba"]]],
        [
          3,
          "u",
          [
            30,
            [15, "u"],
            [
              39,
              [20, [17, [15, "a"], "eventName"], "custom"],
              [17, [15, "a"], "customEventName"],
              [
                39,
                [20, [17, [15, "a"], "eventName"], "variable"],
                [17, [15, "a"], "variableEventName"],
                [17, [15, "a"], "standardEventName"],
              ],
            ],
          ],
        ],
        [
          52,
          "bc",
          [
            39,
            [20, [2, [15, "p"], "indexOf", [7, [15, "u"]]], [27, 1]],
            "trackSingleCustom",
            "trackSingle",
          ],
        ],
        [
          52,
          "bd",
          [39, [20, [17, [15, "a"], "consent"], false], "revoke", "grant"],
        ],
        [
          52,
          "be",
          [
            51,
            "",
            [7],
            [41, "bg"],
            [3, "bg", ["e", "fbq"]],
            [22, [15, "bg"], [46, [36, [15, "bg"]]]],
            [
              "f",
              "fbq",
              [
                51,
                "",
                [7],
                [52, "bh", ["e", "fbq.callMethod.apply"]],
                [
                  22,
                  [15, "bh"],
                  [46, ["c", "fbq.callMethod.apply", [45], [15, "arguments"]]],
                  [46, ["c", "fbq.queue.push", [15, "arguments"]]],
                ],
              ],
            ],
            ["d", "_fbq", "fbq"],
            ["b", "fbq.queue"],
            [36, ["e", "fbq"]],
          ],
        ],
        [52, "bf", ["be"]],
        ["bf", "consent", [15, "bd"]],
        [
          22,
          [17, [15, "a"], "dpoLDU"],
          [
            46,
            [
              "bf",
              "dataProcessingOptions",
              [7, "LDU"],
              ["i", [17, [15, "a"], "dpoCountry"]],
              ["i", [17, [15, "a"], "dpoState"]],
            ],
          ],
        ],
        [
          2,
          [2, [15, "o"], "split", [7, ","]],
          "forEach",
          [
            7,
            [
              51,
              "",
              [7, "bg"],
              [
                22,
                [20, [2, [15, "n"], "indexOf", [7, [15, "bg"]]], [27, 1]],
                [
                  46,
                  [
                    22,
                    [17, [15, "a"], "disableAutoConfig"],
                    [46, ["bf", "set", "autoConfig", false, [15, "bg"]]],
                  ],
                  [
                    22,
                    [17, [15, "a"], "disablePushState"],
                    [46, ["f", "fbq.disablePushState", true]],
                  ],
                  ["bf", "init", [15, "bg"], [15, "x"]],
                  ["bf", "set", "agent", "tmSimo-GTM-WebTemplate", [15, "bg"]],
                  [2, [15, "n"], "push", [7, [15, "bg"]]],
                  ["f", "_fbq_gtm_ids", [15, "n"], true],
                ],
              ],
              [
                22,
                [17, [15, "a"], "eventId"],
                [
                  46,
                  [
                    "bf",
                    [15, "bc"],
                    [15, "bg"],
                    [15, "u"],
                    [15, "bb"],
                    [8, "eventID", [17, [15, "a"], "eventId"]],
                  ],
                ],
                [46, ["bf", [15, "bc"], [15, "bg"], [15, "u"], [15, "bb"]]],
              ],
            ],
          ],
        ],
        [
          "g",
          "https://connect.facebook.net/en_US/fbevents.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          "fbPixel",
        ],
      ],
      [
        50,
        "__cvt_50275930_86",
        [46, "a"],
        [52, "b", ["require", "copyFromDataLayer"]],
        [52, "c", ["require", "getType"]],
        [52, "d", ["require", "makeNumber"]],
        [52, "e", ["require", "makeTableMap"]],
        [52, "f", ["require", "Math"]],
        [
          52,
          "g",
          [
            39,
            [17, [15, "a"], "customDims"],
            ["e", [17, [15, "a"], "customDims"], "cdindex", "cdparam"],
            [8],
          ],
        ],
        [
          52,
          "h",
          [
            39,
            [17, [15, "a"], "customMets"],
            ["e", [17, [15, "a"], "customMets"], "cmindex", "cmparam"],
            [8],
          ],
        ],
        [
          52,
          "i",
          [
            51,
            "",
            [7, "l"],
            [
              52,
              "m",
              [
                39,
                [17, [15, "l"], "category"],
                [2, [17, [15, "l"], "category"], "split", [7, "/"]],
                [7],
              ],
            ],
            [
              52,
              "n",
              [
                8,
                "item_id",
                [17, [15, "l"], "id"],
                "item_name",
                [17, [15, "l"], "name"],
                "price",
                [17, [15, "l"], "price"],
                "item_brand",
                [17, [15, "l"], "brand"],
                "item_variant",
                [17, [15, "l"], "variant"],
                "quantity",
                [
                  39,
                  [17, [15, "l"], "quantity"],
                  [2, [15, "f"], "round", [7, [17, [15, "l"], "quantity"]]],
                  [17, [15, "l"], "quantity"],
                ],
              ],
            ],
            [
              2,
              [15, "m"],
              "forEach",
              [
                7,
                [
                  51,
                  "",
                  [7, "o", "p"],
                  [
                    22,
                    [20, [15, "p"], 0],
                    [46, [43, [15, "n"], "item_category", [15, "o"]]],
                    [
                      46,
                      [
                        43,
                        [15, "n"],
                        [0, "item_category", [0, [15, "p"], 1]],
                        [15, "o"],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              55,
              "o",
              [15, "l"],
              [
                46,
                [
                  22,
                  [16, [15, "g"], [15, "o"]],
                  [
                    46,
                    [
                      43,
                      [15, "n"],
                      [16, [15, "g"], [15, "o"]],
                      [16, [15, "l"], [15, "o"]],
                    ],
                  ],
                ],
                [
                  22,
                  [16, [15, "h"], [15, "o"]],
                  [
                    46,
                    [
                      43,
                      [15, "n"],
                      [16, [15, "h"], [15, "o"]],
                      [16, [15, "l"], [15, "o"]],
                    ],
                  ],
                ],
                [
                  22,
                  [20, [2, [15, "o"], "indexOf", [7, "dimension"]], 0],
                  [
                    46,
                    [
                      53,
                      [41, "p"],
                      [
                        3,
                        "p",
                        [
                          16,
                          [15, "g"],
                          [16, [2, [15, "o"], "split", [7, "dimension"]], 1],
                        ],
                      ],
                      [
                        43,
                        [15, "n"],
                        [30, [15, "p"], [15, "o"]],
                        [16, [15, "l"], [15, "o"]],
                      ],
                    ],
                  ],
                ],
                [
                  22,
                  [20, [2, [15, "o"], "indexOf", [7, "metric"]], 0],
                  [
                    46,
                    [
                      53,
                      [41, "p"],
                      [
                        3,
                        "p",
                        [
                          16,
                          [15, "h"],
                          [16, [2, [15, "o"], "split", [7, "metric"]], 1],
                        ],
                      ],
                      [
                        43,
                        [15, "n"],
                        [30, [15, "p"], [15, "o"]],
                        [30, ["d", [16, [15, "l"], [15, "o"]]], 0],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [36, [15, "n"]],
          ],
        ],
        [
          52,
          "j",
          [
            51,
            "",
            [7, "l"],
            [52, "m", ["i", [15, "l"]]],
            [43, [15, "m"], "item_list_name", [17, [15, "l"], "list"]],
            [43, [15, "m"], "index", [17, [15, "l"], "position"]],
            [36, [15, "m"]],
          ],
        ],
        [
          52,
          "k",
          [
            51,
            "",
            [7, "l"],
            [
              36,
              [
                8,
                "promotion_name",
                [17, [15, "l"], "name"],
                "promotion_id",
                [17, [15, "l"], "id"],
                "creative_name",
                [17, [15, "l"], "creative"],
                "creative_slot",
                [17, [15, "l"], "position"],
              ],
            ],
          ],
        ],
        [
          22,
          [20, [17, [15, "a"], "option"], "auto"],
          [
            46,
            [
              53,
              [52, "l", [30, ["b", "ecommerce", 1], [8]]],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "click"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "click"], "products"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "click"], "products"],
                      "map",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "m"],
                          [52, "n", ["i", [15, "m"]]],
                          [
                            43,
                            [15, "n"],
                            "item_list_name",
                            [
                              39,
                              [17, [17, [15, "l"], "click"], "actionField"],
                              [
                                17,
                                [17, [17, [15, "l"], "click"], "actionField"],
                                "list",
                              ],
                              [44],
                            ],
                          ],
                          [43, [15, "n"], "index", [17, [15, "m"], "position"]],
                          [36, [15, "n"]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "detail"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "detail"], "products"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "detail"], "products"],
                      "map",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "m"],
                          [52, "n", ["i", [15, "m"]]],
                          [
                            43,
                            [15, "n"],
                            "item_list_name",
                            [
                              39,
                              [17, [17, [15, "l"], "detail"], "actionField"],
                              [
                                17,
                                [17, [17, [15, "l"], "detail"], "actionField"],
                                "list",
                              ],
                              [44],
                            ],
                          ],
                          [36, [15, "n"]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "add"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "add"], "products"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "add"], "products"],
                      "map",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "m"],
                          [52, "n", ["i", [15, "m"]]],
                          [
                            43,
                            [15, "n"],
                            "item_list_name",
                            [
                              39,
                              [17, [17, [15, "l"], "add"], "actionField"],
                              [
                                17,
                                [17, [17, [15, "l"], "add"], "actionField"],
                                "list",
                              ],
                              [44],
                            ],
                          ],
                          [36, [15, "n"]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "remove"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "remove"], "products"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "remove"], "products"],
                      "map",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "m"],
                          [52, "n", ["i", [15, "m"]]],
                          [
                            43,
                            [15, "n"],
                            "item_list_name",
                            [
                              39,
                              [17, [17, [15, "l"], "remove"], "actionField"],
                              [
                                17,
                                [17, [17, [15, "l"], "remove"], "actionField"],
                                "list",
                              ],
                              [44],
                            ],
                          ],
                          [36, [15, "n"]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "checkout"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "checkout"], "products"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "checkout"], "products"],
                      "map",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "m"],
                          [52, "n", ["i", [15, "m"]]],
                          [
                            43,
                            [15, "n"],
                            "item_list_name",
                            [
                              39,
                              [17, [17, [15, "l"], "checkout"], "actionField"],
                              [
                                17,
                                [
                                  17,
                                  [17, [15, "l"], "checkout"],
                                  "actionField",
                                ],
                                "list",
                              ],
                              [44],
                            ],
                          ],
                          [36, [15, "n"]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "purchase"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "purchase"], "products"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "purchase"], "products"],
                      "map",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "m"],
                          [52, "n", ["i", [15, "m"]]],
                          [
                            43,
                            [15, "n"],
                            "item_list_name",
                            [
                              39,
                              [17, [17, [15, "l"], "purchase"], "actionField"],
                              [
                                17,
                                [
                                  17,
                                  [17, [15, "l"], "purchase"],
                                  "actionField",
                                ],
                                "list",
                              ],
                              [44],
                            ],
                          ],
                          [36, [15, "n"]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "refund"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "refund"], "products"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "refund"], "products"],
                      "map",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "m"],
                          [52, "n", ["i", [15, "m"]]],
                          [
                            43,
                            [15, "n"],
                            "item_list_name",
                            [
                              39,
                              [17, [17, [15, "l"], "refund"], "actionField"],
                              [
                                17,
                                [17, [17, [15, "l"], "refund"], "actionField"],
                                "list",
                              ],
                              [44],
                            ],
                          ],
                          [36, [15, "n"]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "impressions"]],
                  [20, ["c", [17, [15, "l"], "impressions"]], "array"],
                ],
                [
                  46,
                  [
                    36,
                    [2, [17, [15, "l"], "impressions"], "map", [7, [15, "j"]]],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "promoView"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "promoView"], "promotions"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "promoView"], "promotions"],
                      "map",
                      [7, [15, "k"]],
                    ],
                  ],
                ],
              ],
              [
                22,
                [
                  1,
                  [2, [15, "l"], "hasOwnProperty", [7, "promoClick"]],
                  [
                    20,
                    ["c", [17, [17, [15, "l"], "promoClick"], "promotions"]],
                    "array",
                  ],
                ],
                [
                  46,
                  [
                    36,
                    [
                      2,
                      [17, [17, [15, "l"], "promoClick"], "promotions"],
                      "map",
                      [7, [15, "k"]],
                    ],
                  ],
                ],
              ],
              [36, [7]],
            ],
          ],
        ],
        [
          22,
          [
            1,
            [20, [17, [15, "a"], "option"], "products"],
            [20, ["c", [17, [15, "a"], "productsVar"]], "array"],
          ],
          [
            46,
            [36, [2, [17, [15, "a"], "productsVar"], "map", [7, [15, "i"]]]],
          ],
        ],
        [
          22,
          [
            1,
            [20, [17, [15, "a"], "option"], "impressions"],
            [20, ["c", [17, [15, "a"], "impressionsVar"]], "array"],
          ],
          [
            46,
            [36, [2, [17, [15, "a"], "impressionsVar"], "map", [7, [15, "j"]]]],
          ],
        ],
        [
          22,
          [20, [17, [15, "a"], "option"], "promotions"],
          [
            46,
            [36, [2, [17, [15, "a"], "promotionsVar"], "map", [7, [15, "k"]]]],
          ],
        ],
      ],
      [
        50,
        "__cvt_50275930_89",
        [46, "a"],
        [50, "h", [46], [36, [30, ["b", "gtm.uniqueEventId"], "0"]]],
        [
          50,
          "i",
          [46],
          [41, "k"],
          [3, "k", [2, [15, "g"], "getItem", [7, "gtmBrowserId"]]],
          [
            22,
            [28, [15, "k"]],
            [
              46,
              [3, "k", [0, ["e"], ["f", 100000, 999999]]],
              [2, [15, "g"], "setItem", [7, "gtmBrowserId", [15, "k"]]],
            ],
          ],
          [36, [15, "k"]],
        ],
        [
          50,
          "j",
          [46],
          [41, "k"],
          [3, "k", ["d", "gtmPageLoadId"]],
          [
            22,
            [28, [15, "k"]],
            [
              46,
              [3, "k", [0, ["e"], ["f", 100000, 999999]]],
              ["c", "gtmPageLoadId", [15, "k"], false],
            ],
          ],
          [36, [15, "k"]],
        ],
        [52, "b", ["require", "copyFromDataLayer"]],
        [52, "c", ["require", "setInWindow"]],
        [52, "d", ["require", "copyFromWindow"]],
        [52, "e", ["require", "getTimestampMillis"]],
        [52, "f", ["require", "generateRandom"]],
        [52, "g", ["require", "localStorage"]],
        [36, [0, [0, [0, ["i"], "_"], ["j"]], ["h"]]],
      ],
      [50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__gtcs",
        [46, "a"],
        [52, "b", ["require", "makeTableMap"]],
        [
          36,
          [
            30,
            [
              "b",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
      ],
      [
        50,
        "__gtes",
        [46, "a"],
        [
          50,
          "f",
          [46, "h", "i"],
          [
            66,
            "j",
            [2, [15, "b"], "keys", [7, [15, "i"]]],
            [46, [43, [15, "h"], [15, "j"], [16, [15, "i"], [15, "j"]]]],
          ],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "getType"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "makeTableMap"]],
        [
          52,
          "g",
          [
            30,
            [
              "e",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        [
          22,
          [17, [15, "a"], "userProperties"],
          [
            46,
            [
              53,
              [41, "h"],
              [
                3,
                "h",
                [
                  30,
                  [
                    16,
                    [15, "g"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [22, [29, ["c", [15, "h"]], "object"], [46, [3, "h", [8]]]],
              [
                "f",
                [15, "h"],
                [
                  30,
                  [
                    "e",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "g"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "h"],
              ],
            ],
          ],
        ],
        [36, [15, "g"]],
      ],
      [
        50,
        "__hjtc",
        [46, "a"],
        [52, "b", ["require", "createArgumentsQueue"]],
        [52, "c", ["require", "encodeUriComponent"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "setInWindow"]],
        ["b", "hj", "hj.q"],
        [52, "g", [17, [15, "a"], "hotjar_site_id"]],
        [
          "f",
          "_hjSettings",
          [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"],
        ],
        [
          "d",
          [
            0,
            [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]],
            ".js?sv=7",
          ],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__html",
        [46, "a"],
        [52, "b", ["require", "internal.injectHtml"]],
        [
          "b",
          [17, [15, "a"], "html"],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          [17, [15, "a"], "useIframe"],
          [17, [15, "a"], "supportDocumentWrite"],
        ],
      ],
      [
        50,
        "__jsm",
        [46, "a"],
        [52, "b", ["require", "internal.executeJavascriptString"]],
        [22, [20, [17, [15, "a"], "javascript"], [44]], [46, [36]]],
        [36, ["b", [17, [15, "a"], "javascript"]]],
      ],
      [
        50,
        "__okt",
        [46, "a"],
        [52, "b", ["require", "copyFromWindow"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", ["require", "encodeUriComponent"]],
        [52, "e", ["require", "getTimestamp"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "injectScript"]],
        [52, "h", ["require", "makeString"]],
        [52, "i", ["require", "sendPixel"]],
        [52, "j", ["require", "setInWindow"]],
        [52, "k", "_oktrk"],
        [52, "l", "OktopostTrackerObject"],
        [
          22,
          [20, [16, [15, "a"], "trackType"], "pageView"],
          [
            46,
            [
              53,
              [52, "m", ["b", [15, "k"]]],
              [
                22,
                [20, ["f", [15, "m"]], "undefined"],
                [
                  46,
                  [
                    53,
                    ["j", [15, "l"], [15, "k"]],
                    [52, "n", ["c", [15, "k"], [0, [15, "k"], ".q"]]],
                    ["n", "create", [16, [15, "a"], "oktopostAccountId"]],
                    [
                      52,
                      "o",
                      [
                        51,
                        "",
                        [7],
                        ["j", [15, "l"], [44], true],
                        ["j", [15, "k"], [44], true],
                        [2, [15, "a"], "gtmOnFailure", [7]],
                      ],
                    ],
                    [
                      "g",
                      "https://static.oktopost.com/oktrk.js",
                      [17, [15, "a"], "gtmOnSuccess"],
                      [15, "o"],
                    ],
                  ],
                ],
                [46, [2, [15, "a"], "gtmOnSuccess", [7]]],
              ],
            ],
          ],
          [
            46,
            [
              22,
              [20, [16, [15, "a"], "trackType"], "conversion"],
              [
                46,
                [
                  53,
                  [
                    52,
                    "m",
                    [
                      0,
                      [
                        0,
                        [
                          0,
                          [
                            0,
                            [
                              0,
                              "https://okt.to/c/",
                              [
                                "d",
                                ["h", [16, [15, "a"], "oktopostAccountId"]],
                              ],
                            ],
                            "/global?tag=",
                          ],
                          ["d", ["h", [16, [15, "a"], "conversionType"]]],
                        ],
                        "&ts=",
                      ],
                      ["e"],
                    ],
                  ],
                  [
                    "i",
                    [15, "m"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"],
                  ],
                ],
              ],
              [46, [2, [15, "a"], "gtmOnSuccess", [7]]],
            ],
          ],
        ],
      ],
      [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __c: { 2: true, 4: true },
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
    },
    blob: { 1: "28" },
    permissions: {
      __cvt_50275930_129: {
        logging: { environments: "debug" },
        send_pixel: {
          allowedUrls: "specific",
          urls: ["https://*.linkedin.com/*"],
        },
        access_globals: {
          keys: [
            {
              key: "_bizo_data_partner_id",
              read: true,
              write: false,
              execute: false,
            },
            {
              key: "_bizo_data_partner_ids",
              read: true,
              write: false,
              execute: false,
            },
            {
              key: "_linkedin_data_partner_id",
              read: true,
              write: false,
              execute: false,
            },
            {
              key: "_linkedin_data_partner_ids",
              read: true,
              write: true,
              execute: false,
            },
            { key: "lintrk", read: true, write: false, execute: false },
            {
              key: "_already_called_lintrk",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        get_url: { urlParts: "any" },
        inject_script: { urls: ["https://snap.licdn.com/*"] },
      },
      __cvt_50275930_44: {
        logging: { environments: "debug" },
        get_cookies: { cookieAccess: "specific", cookieNames: ["d3rt"] },
        get_referrer: { urlParts: "any" },
        set_cookies: {
          allowedCookies: [
            {
              name: "d3rt",
              domain: "*",
              path: "*",
              secure: "secure",
              session: "any",
            },
          ],
        },
        get_url: { urlParts: "any" },
      },
      __cvt_50275930_69: {},
      __cvt_50275930_73: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "webVitals", read: true, write: false, execute: false },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        inject_script: {
          urls: ["https://unpkg.com/web-vitals/dist/web-vitals.iife.js"],
        },
      },
      __cvt_50275930_8: {
        access_globals: {
          keys: [
            { key: "fbq", read: true, write: true, execute: false },
            { key: "_fbq_gtm", read: true, write: true, execute: false },
            { key: "_fbq", read: false, write: true, execute: false },
            { key: "_fbq_gtm_ids", read: true, write: true, execute: false },
            {
              key: "fbq.callMethod.apply",
              read: true,
              write: false,
              execute: true,
            },
            { key: "fbq.queue.push", read: false, write: false, execute: true },
            { key: "fbq.queue", read: true, write: true, execute: false },
            {
              key: "fbq.disablePushState",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://connect.facebook.net/en_US/fbevents.js"],
        },
        logging: { environments: "debug" },
        read_data_layer: { keyPatterns: ["ecommerce"] },
      },
      __cvt_50275930_86: { read_data_layer: { keyPatterns: ["ecommerce"] } },
      __cvt_50275930_89: {
        read_data_layer: { keyPatterns: ["gtm.uniqueEventId"] },
        access_globals: {
          keys: [
            { key: "gtmPageLoadId", read: true, write: true, execute: false },
          ],
        },
        access_local_storage: {
          keys: [{ key: "gtmBrowserId", read: true, write: true }],
        },
      },
      __c: {},
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __gtcs: {},
      __gtes: {},
      __hjtc: {
        access_globals: {
          keys: [
            { key: "hj", read: true, write: true, execute: false },
            { key: "hj.q", read: true, write: true, execute: false },
            { key: "_hjSettings", read: true, write: true, execute: false },
          ],
        },
        inject_script: { urls: ["https://static.hotjar.com/c/hotjar-*"] },
      },
      __html: { unsafe_inject_arbitrary_html: {} },
      __jsm: { unsafe_run_arbitrary_javascript: {} },
      __okt: {
        access_globals: {
          keys: [
            { key: "_oktrk", read: true, write: true, execute: true },
            {
              key: "OktopostTrackerObject",
              read: true,
              write: true,
              execute: false,
            },
            { key: "_oktrk.q", read: true, write: true, execute: false },
          ],
        },
        send_pixel: { urls: ["https://okt.to/c/*"] },
        inject_script: { urls: ["https://static.oktopost.com/oktrk.js"] },
      },
      __paused: {},
    },

    sandboxed_scripts: [
      "__cvt_50275930_129",
      "__cvt_50275930_44",
      "__cvt_50275930_69",
      "__cvt_50275930_73",
      "__cvt_50275930_8",
      "__cvt_50275930_86",
      "__cvt_50275930_89",
    ],

    security_groups: {
      customScripts: ["__html", "__jsm"],
      google: ["__c", "__e", "__googtag", "__gtcs", "__gtes"],
      nonGoogleScripts: ["__hjtc", "__okt"],
    },
  };

  var h,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ha = fa(this),
    ja = function (a, b) {
      if (b)
        a: {
          for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ca(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ja("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ca(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ka =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if (typeof Object.setPrototypeOf == "function") ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma,
    ra = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.oo = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ta = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ua = function (a) {
      return a instanceof Array ? a : ta(l(a));
    },
    wa = function (a) {
      return va(a, a);
    },
    va = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    xa =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ja("Object.assign", function (a) {
    return a || xa;
  });
  var ya = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self;
  var Ba = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ca = function () {
    this.map = {};
    this.j = {};
  };
  h = Ca.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.oi = function (a, b) {
    this.set(a, b);
    this.j["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ca.prototype.ka = function () {
    return Da(this, 1);
  };
  Ca.prototype.Vb = function () {
    return Da(this, 2);
  };
  Ca.prototype.Cb = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Fa = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.sc = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ca();
  };
  Fa.prototype.add = function (a, b) {
    Ga(this, a, b, !1);
  };
  var Ga = function (a, b, c, d) {
    a.sc || (d ? a.values.oi(b, c) : a.values.set(b, c));
  };
  Fa.prototype.set = function (a, b) {
    this.sc ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Fa.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Fa.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ha = function (a) {
    var b = new Fa(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Fa.prototype.Fd = function () {
    return this.K;
  };
  Fa.prototype.Ia = function () {
    this.sc = !0;
  };
  function Ia(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ja(a, e.value)), c instanceof Ba);
      e = d.next()
    );
    return c;
  }
  function Ja(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = ta(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ua(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var Ka = function () {
    this.C = new Ea();
    this.j = new Fa(this.C);
  };
  h = Ka.prototype;
  h.Fd = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.ni([a].concat(ua(ya.apply(1, arguments))));
  };
  h.ni = function () {
    for (
      var a, b = l(ya.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ja(this.j, c.value);
    return a;
  };
  h.rl = function (a) {
    var b = ya.apply(1, arguments),
      c = Ha(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ja(c, f.value);
    return d;
  };
  h.Ia = function () {
    this.j.Ia();
  };
  var La = function () {
    this.la = !1;
    this.R = new Ca();
  };
  h = La.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.oi = function (a, b) {
    this.la || this.R.oi(a, b);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Cb = function () {
    return this.R.Cb();
  };
  h.Ia = function () {
    this.la = !0;
  };
  h.sc = function () {
    return this.la;
  };
  function Na() {
    for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Pa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Oa, Qa;
  function Ra(a) {
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Oa[m], Oa[n], Oa[p], Oa[q]);
    }
    return b.join("");
  }
  function Ta(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Qa[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Ua = {};
  function Va(a, b) {
    Ua[a] = Ua[a] || [];
    Ua[a][b] = !0;
  }
  function Wa(a) {
    var b = Ua[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Ra(c.join("")).replace(/\.+$/, "");
  }
  function Xa() {
    for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  var Ya = [],
    Za = {};
  function $a(a) {
    return Ya[a] === void 0 ? !1 : Ya[a];
  }
  function ab() {}
  function bb(a) {
    return typeof a === "function";
  }
  function z(a) {
    return typeof a === "string";
  }
  function cb(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function db(a) {
    return Array.isArray(a) ? a : [a];
  }
  function eb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function fb(a, b) {
    if (!cb(a) || !cb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function gb(a, b) {
    for (var c = new hb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function ib(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function kb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function lb(a) {
    return Math.round(Number(a)) || 0;
  }
  function mb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function nb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function ob(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function pb() {
    return new Date(Date.now());
  }
  function qb() {
    return pb().getTime();
  }
  var hb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  hb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  hb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  hb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function rb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function sb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function tb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function ub(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function vb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function wb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function xb(a, b) {
    var c = B;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function yb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var zb = /^\w{1,9}$/;
  function Ab(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    ib(a, function (d, e) {
      zb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Bb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Cb(a) {
    if (!a) return a;
    var b = a;
    if ($a(3))
      try {
        b = decodeURIComponent(a);
      } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Db(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Eb = globalThis.trustedTypes,
    Fb;
  function Gb() {
    var a = null;
    if (!Eb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Eb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Hb() {
    Fb === void 0 && (Fb = Gb());
    return Fb;
  }
  var Ib = function (a) {
    this.j = a;
  };
  Ib.prototype.toString = function () {
    return this.j + "";
  };
  function Jb(a) {
    var b = a,
      c = Hb();
    return new Ib(c ? c.createScriptURL(b) : b);
  }
  function Kb(a) {
    if (a instanceof Ib) return a.j;
    throw Error("");
  }
  var Lb = wa([""]),
    Mb = va(["\x00"], ["\\0"]),
    Nb = va(["\n"], ["\\n"]),
    Ob = va(["\x00"], ["\\u0000"]);
  function Pb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Pb(function (a) {
    return a(Lb);
  }) ||
    Pb(function (a) {
      return a(Mb);
    }) ||
    Pb(function (a) {
      return a(Nb);
    }) ||
    Pb(function (a) {
      return a(Ob);
    });
  var Qb = function (a) {
    this.j = a;
  };
  Qb.prototype.toString = function () {
    return this.j;
  };
  var Rb = new Qb("about:invalid#zClosurez");
  var Sb = function (a) {
    this.Hm = a;
  };
  function Tb(a) {
    return new Sb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Ub = [
    Tb("data"),
    Tb("http"),
    Tb("https"),
    Tb("mailto"),
    Tb("ftp"),
    new Sb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Vb(a, b) {
    b = b === void 0 ? Ub : b;
    if (a instanceof Qb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Sb && d.Hm(a)) return new Qb(a);
    }
  }
  function Wb(a) {
    var b;
    b = b === void 0 ? Ub : b;
    return Vb(a, b) || Rb;
  }
  var Xb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Yb(a) {
    var b;
    if (a instanceof Qb)
      if (a instanceof Qb) b = a.j;
      else throw Error("");
    else b = Xb.test(a) ? a : void 0;
    return b;
  }
  var $b = function () {
    this.j = Zb[0].toLowerCase();
  };
  $b.prototype.toString = function () {
    return this.j;
  };
  var ac = function (a) {
    this.j = a;
  };
  ac.prototype.toString = function () {
    return this.j + "";
  };
  function bc(a, b) {
    var c = [new $b()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof $b) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function cc(a, b) {
    var c = Yb(b);
    c !== void 0 && (a.action = c);
  }
  var dc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function ec(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var B = window,
    fc = window.history,
    E = document,
    gc = navigator;
  function hc() {
    var a;
    try {
      a = gc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var ic = E.currentScript,
    jc = ic && ic.src;
  function kc(a, b) {
    var c = B[a];
    B[a] = c === void 0 ? b : c;
    return B[a];
  }
  function mc(a) {
    return (gc.userAgent || "").indexOf(a) !== -1;
  }
  var nc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    oc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function pc(a, b, c) {
    b &&
      ib(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function qc(a, b, c, d, e) {
    var f = E.createElement("script");
    pc(f, d, nc);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Jb(ec(a));
    f.src = Kb(g);
    var k,
      m = (f.ownerDocument && f.ownerDocument.defaultView) || window;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = "document" in m ? m.document : m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = E.getElementsByTagName("script")[0] || E.body || E.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function rc() {
    if (jc) {
      var a = jc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function sc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = E.createElement("iframe")), (k = !0));
    pc(g, c, oc);
    d &&
      ib(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (E.body && E.body.lastChild) || E.body || E.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function tc(a, b, c, d) {
    uc(a, b, c, d);
  }
  function vc(a, b, c, d) {
    a.addEventListener
      ? a.addEventListener(b, c, !!d)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function wc(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function F(a) {
    B.setTimeout(a, 0);
  }
  function xc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function yc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function zc(a) {
    var b = E.createElement("div"),
      c = b,
      d,
      e = ec("A<div>" + a + "</div>"),
      f = Hb();
    d = new ac(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof ac) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function Ac(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function Bc(a) {
    var b;
    try {
      b = gc.sendBeacon && gc.sendBeacon(a);
    } catch (c) {
      Va("TAGGING", 15);
    }
    b || uc(a);
  }
  function Cc(a, b) {
    try {
      return gc.sendBeacon(a, b);
    } catch (c) {
      Va("TAGGING", 15);
    }
    return !1;
  }
  var Dc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Ec(a, b, c) {
    if (Fc()) {
      var d = Object.assign({}, Dc);
      b && (d.body = b);
      c &&
        (c.attributionReporting &&
          (d.attributionReporting = c.attributionReporting),
        c.browsingTopics && (d.browsingTopics = c.browsingTopics));
      try {
        var e = B.fetch(a, d);
        if (e) return e.then(function () {}).catch(function () {}), !0;
      } catch (f) {}
    }
    if (c && c.noFallback) return !1;
    if (b) return Cc(a, b);
    Bc(a);
    return !0;
  }
  function Fc() {
    return typeof B.fetch === "function";
  }
  function Gc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Hc() {
    var a = B.performance;
    if (a && bb(a.now)) return a.now();
  }
  function Ic() {
    var a,
      b = B.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Jc() {
    return B.performance || void 0;
  }
  function Kc() {
    var a = B.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var uc = function (a, b, c, d) {
    var e = new Image(1, 1);
    pc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Lc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Mc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Nc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Oc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Pc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Qc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = B.location.href;
        b instanceof La &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Rc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Sc = function (a) {
      if (a == null) return String(a);
      var b = Rc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Tc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Uc = function (a) {
      if (!a || Sc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Tc(a, "constructor") &&
          !Tc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Tc(a, b);
    },
    Vc = function (a, b) {
      var c = b || (Sc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Tc(a, d)) {
          var e = a[d];
          Sc(e) == "array"
            ? (Sc(c[d]) != "array" && (c[d] = []), (c[d] = Vc(e, c[d])))
            : Uc(e)
            ? (Uc(c[d]) || (c[d] = {}), (c[d] = Vc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Wc(a) {
    if (a == void 0 || Array.isArray(a) || Uc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Xc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Yc = function (a) {
    a = a === void 0 ? [] : a;
    this.R = new Ca();
    this.values = [];
    this.la = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Xc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.R.set(b, a[b]));
  };
  h = Yc.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Yc
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.la)
      if (a === "length") {
        if (!Xc(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else Xc(a) ? (this.values[Number(a)] = b) : this.R.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Xc(a)
      ? this.values[Number(a)]
      : this.R.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.ka = function () {
    for (var a = this.R.ka(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Vb = function () {
    for (var a = this.R.Vb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Cb = function () {
    for (var a = this.R.Cb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Xc(a) ? delete this.values[Number(a)] : this.la || this.R.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, ua(ya.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = ya.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new Yc(this.values.splice(a))
      : new Yc(
          this.values.splice.apply(this.values, [a, b || 0].concat(ua(c)))
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, ua(ya.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Xc(a) && this.values.hasOwnProperty(a)) || this.R.has(a);
  };
  h.Ia = function () {
    this.la = !0;
    Object.freeze(this.values);
  };
  h.sc = function () {
    return this.la;
  };
  function Zc(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var $c = function (a, b) {
    this.functionName = a;
    this.Ed = b;
    this.R = new Ca();
    this.la = !1;
  };
  h = $c.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.invoke = function (a) {
    return this.Ed.call.apply(
      this.Ed,
      [new ad(this, a)].concat(ua(ya.apply(1, arguments)))
    );
  };
  h.nb = function (a) {
    var b = ya.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(ua(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Cb = function () {
    return this.R.Cb();
  };
  h.Ia = function () {
    this.la = !0;
  };
  h.sc = function () {
    return this.la;
  };
  var ad = function (a, b) {
    this.Ed = a;
    this.D = b;
  };
  ad.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ja(b, a) : a;
  };
  ad.prototype.getName = function () {
    return this.Ed.getName();
  };
  ad.prototype.Fd = function () {
    return this.D.Fd();
  };
  var bd = function () {
    this.map = new Map();
  };
  bd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  bd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var cd = function () {
    this.keys = [];
    this.values = [];
  };
  cd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  cd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function dd() {
    try {
      return Map ? new bd() : new cd();
    } catch (a) {
      return new cd();
    }
  }
  var ed = function (a) {
    if (a instanceof ed) return a;
    if (Wc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  ed.prototype.getValue = function () {
    return this.value;
  };
  ed.prototype.toString = function () {
    return String(this.value);
  };
  var gd = function (a) {
    this.promise = a;
    this.la = !1;
    this.R = new Ca();
    this.R.set("then", fd(this));
    this.R.set("catch", fd(this, !0));
    this.R.set("finally", fd(this, !1, !0));
  };
  h = gd.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Cb = function () {
    return this.R.Cb();
  };
  var fd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new $c("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof $c || (d = void 0);
      e instanceof $c || (e = void 0);
      var f = Ha(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new gd(k);
    });
  };
  gd.prototype.Ia = function () {
    this.la = !0;
  };
  gd.prototype.sc = function () {
    return this.la;
  };
  function G(a, b, c) {
    var d = dd(),
      e = function (g, k) {
        for (var m = g.ka(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Yc) {
          var m = [];
          d.set(g, m);
          for (var n = g.ka(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof gd) return g.promise;
        if (g instanceof La) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof $c) {
          var r = function () {
            for (var v = ya.apply(0, arguments), t = 0; t < v.length; t++)
              v[t] = hd(v[t], b, c);
            var w = new Fa(b ? b.Fd() : new Ea());
            b && (w.j = b.j);
            return f(g.invoke.apply(g, [w].concat(ua(v))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var u = !1;
        switch (c) {
          case 1:
            u = !0;
            break;
          case 2:
            u = !1;
            break;
          case 3:
            u = !1;
            break;
          default:
        }
        if (g instanceof ed && u) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function hd(a, b, c) {
    var d = dd(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || kb(g)) {
          var m = new Yc([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Uc(g)) {
          var p = new La();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new $c("", function () {
            for (var x = ya.apply(0, arguments), y = 0; y < x.length; y++)
              x[y] = G(this.evaluate(x[y]), b, c);
            return f((0, this.D.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var t = typeof g;
        if (g === null || t === "string" || t === "number" || t === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new ed(g);
      };
    return f(a);
  }
  function id() {
    var a = !1;
    return a;
  }
  var jd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Yc)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Yc(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Yc(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Yc(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, ua(ya.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Zc(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Yc(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Zc(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(ua(ya.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, ua(ya.apply(1, arguments)));
    },
  };
  var kd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ra(kd, Error);
  var ld = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    md = new Ba("break"),
    nd = new Ba("continue");
  function od(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function pd(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function qd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof Yc))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (id()) throw new kd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = G(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (id()) throw new kd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (ld.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = G(c, void 0, k);
        return hd(a[b].apply(a, m), this.D);
      }
      var n = "TypeError: " + b + " is not a function";
      if (id()) throw new kd(n);
      throw Error(n);
    }
    if (a instanceof Yc) {
      if (a.has(b)) {
        var p = a.get(String(b));
        if (p instanceof $c) {
          var q = Zc(c);
          return p.invoke.apply(p, [this.D].concat(ua(q)));
        }
        var r = "TypeError: " + b + " is not a function";
        if (id()) throw new kd(r);
        throw Error(r);
      }
      if (jd.supportedMethods.indexOf(b) >= 0) {
        var u = Zc(c);
        return jd[b].call.apply(jd[b], [a, this.D].concat(ua(u)));
      }
    }
    if (a instanceof $c || a instanceof La || a instanceof gd) {
      if (a.has(b)) {
        var v = a.get(b);
        if (v instanceof $c) {
          var t = Zc(c);
          return v.invoke.apply(v, [this.D].concat(ua(t)));
        }
        var w = "TypeError: " + b + " is not a function";
        if (id()) throw new kd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof $c ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has(c.get(0));
    }
    if (a instanceof ed && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (id()) throw new kd(x);
    throw Error(x);
  }
  function rd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function sd() {
    var a = ya.apply(0, arguments),
      b = Ha(this.D),
      c = Ia(b, a);
    if (c instanceof Ba) return c;
  }
  function td() {
    return md;
  }
  function ud(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ba) return d;
    }
  }
  function vd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ga(a, c, d, !0);
      }
    }
  }
  function wd() {
    return nd;
  }
  function xd(a, b) {
    return new Ba(a, this.evaluate(b));
  }
  function yd(a, b) {
    var c = ya.apply(2, arguments),
      d = new Yc();
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var f = [51, a, d].concat(ua(c));
    this.D.add(a, this.evaluate(f));
  }
  function zd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function Ad(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof ed,
      d = b instanceof ed;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function Bd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function Cd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ia(f, d);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function Dd(a, b, c) {
    if (typeof b === "string")
      return Cd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (
      b instanceof La ||
      b instanceof gd ||
      b instanceof Yc ||
      b instanceof $c
    ) {
      var d = b.ka(),
        e = d.length;
      return Cd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c
      );
    }
  }
  function Ed(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Dd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Dd(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Dd(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Hd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Id(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Jd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Id(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Kd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Id(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Id(a, b, c) {
    if (typeof b === "string")
      return Cd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Yc)
      return Cd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (id()) throw new kd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Ld(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var u = f.get(r);
        q.add(u, p.get(u));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Yc))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D;
    d = this.evaluate(d);
    var k = Ha(g);
    for (e(g, k); Ja(k, b); ) {
      var m = Ia(k, d);
      if (m instanceof Ba) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Ha(g);
      e(k, n);
      Ja(n, c);
      k = n;
    }
  }
  function Md(a, b) {
    var c = ya.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof Yc))
      throw Error("Error: non-List value given for Fn argument names.");
    return new $c(
      a,
      (function () {
        return function () {
          var f = ya.apply(0, arguments),
            g = Ha(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = 0; k < f.length; k++)
            if (((f[k] = this.evaluate(f[k])), f[k] instanceof Ba)) return f[k];
          for (var m = e.get("length"), n = 0; n < m; n++)
            n < f.length ? g.add(e.get(n), f[n]) : g.add(e.get(n), void 0);
          g.add("arguments", new Yc(f));
          var p = Ia(g, c);
          if (p instanceof Ba) return p.type === "return" ? p.data : p;
        };
      })()
    );
  }
  function Nd(a) {
    a = this.evaluate(a);
    var b = this.D;
    if (Od && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Pd(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (id()) throw new kd(d);
      throw Error(d);
    }
    if (
      a instanceof La ||
      a instanceof gd ||
      a instanceof Yc ||
      a instanceof $c
    )
      c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Xc(b) && (c = a[b]);
    else if (a instanceof ed) return;
    return c;
  }
  function Qd(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Rd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Sd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof ed && (a = a.getValue());
    b instanceof ed && (b = b.getValue());
    return a === b;
  }
  function Td(a, b) {
    return !Sd.call(this, a, b);
  }
  function Ud(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ia(this.D, d);
    if (e instanceof Ba) return e;
  }
  var Od = !1;
  function Vd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Wd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Xd() {
    for (var a = new Yc(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Yd() {
    for (var a = new La(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Zd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function $d(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function ae(a) {
    return -this.evaluate(a);
  }
  function be(a) {
    return !this.evaluate(a);
  }
  function ce(a, b) {
    return !Ad.call(this, a, b);
  }
  function de() {
    return null;
  }
  function ee(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function fe(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function he(a) {
    return this.evaluate(a);
  }
  function ie() {
    return ya.apply(0, arguments);
  }
  function je(a) {
    return new Ba("return", this.evaluate(a));
  }
  function ke(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (id()) throw new kd(d);
      throw Error(d);
    }
    (a instanceof $c || a instanceof Yc || a instanceof La) &&
      a.set(String(b), c);
    return c;
  }
  function le(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function me(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Ba)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ba && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function ne(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function oe(a) {
    a = this.evaluate(a);
    return a instanceof $c ? "function" : typeof a;
  }
  function pe() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function qe(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ia(this.D, e);
      if (f instanceof Ba) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ia(this.D, e);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function re(a) {
    return ~Number(this.evaluate(a));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function ue(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function ve(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function we(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function xe(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ye() {}
  function ze(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ba) return g;
    } catch (r) {
      if (!(r instanceof kd && a)) throw ((f = r instanceof kd), r);
      var k = Ha(this.D),
        m = new ed(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ia(k, n);
      if (p instanceof Ba) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ba) return q;
      }
    }
  }
  var Be = function () {
    this.j = new Ka();
    Ae(this);
  };
  Be.prototype.execute = function (a) {
    return this.j.ni(a);
  };
  var Ae = function (a) {
    var b = function (c, d) {
      var e = new $c(String(c), d);
      e.Ia();
      a.j.j.set(String(c), e);
    };
    b("map", Yd);
    b("and", Lc);
    b("contains", Oc);
    b("equals", Mc);
    b("or", Nc);
    b("startsWith", Pc);
    b("variable", Qc);
  };
  var De = function () {
    this.C = !1;
    this.j = new Ka();
    Ce(this);
    this.C = !0;
  };
  De.prototype.execute = function (a) {
    return Ee(this.j.ni(a));
  };
  var Fe = function (a, b, c) {
    return Ee(a.j.rl(b, c));
  };
  De.prototype.Ia = function () {
    this.j.Ia();
  };
  var Ce = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new $c(e, d);
      f.Ia();
      a.j.j.set(e, f);
    };
    b(0, od);
    b(1, pd);
    b(2, qd);
    b(3, rd);
    b(56, ve);
    b(57, se);
    b(58, re);
    b(59, xe);
    b(60, te);
    b(61, ue);
    b(62, we);
    b(53, sd);
    b(4, td);
    b(5, ud);
    b(52, vd);
    b(6, wd);
    b(49, xd);
    b(7, Xd);
    b(8, Yd);
    b(9, ud);
    b(50, yd);
    b(10, zd);
    b(12, Ad);
    b(13, Bd);
    b(51, Md);
    b(47, Ed);
    b(54, Fd);
    b(55, Gd);
    b(63, Ld);
    b(64, Hd);
    b(65, Jd);
    b(66, Kd);
    b(15, Nd);
    b(16, Pd);
    b(17, Pd);
    b(18, Qd);
    b(19, Rd);
    b(20, Sd);
    b(21, Td);
    b(22, Ud);
    b(23, Vd);
    b(24, Wd);
    b(25, Zd);
    b(26, $d);
    b(27, ae);
    b(28, be);
    b(29, ce);
    b(45, de);
    b(30, ee);
    b(32, fe);
    b(33, fe);
    b(34, he);
    b(35, he);
    b(46, ie);
    b(36, je);
    b(43, ke);
    b(37, le);
    b(38, me);
    b(39, ne);
    b(67, ze);
    b(40, oe);
    b(44, ye);
    b(41, pe);
    b(42, qe);
  };
  De.prototype.Fd = function () {
    return this.j.Fd();
  };
  function Ee(a) {
    if (
      a instanceof Ba ||
      a instanceof $c ||
      a instanceof Yc ||
      a instanceof La ||
      a instanceof gd ||
      a instanceof ed ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Ge = function (a) {
    this.message = a;
  };
  function He(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Ge(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ie(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Je = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ke(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + He(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + He(a | b) + c);
  }
  var Le = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      Ok: a("consent"),
      Ai: a("convert_case_to"),
      Bi: a("convert_false_to"),
      Ci: a("convert_null_to"),
      Di: a("convert_true_to"),
      Ei: a("convert_undefined_to"),
      Dn: a("debug_mode_metadata"),
      oa: a("function"),
      rh: a("instance_name"),
      vl: a("live_only"),
      wl: a("malware_disabled"),
      METADATA: a("metadata"),
      zl: a("original_activity_id"),
      Nn: a("original_vendor_template_id"),
      Mn: a("once_on_load"),
      yl: a("once_per_event"),
      Nj: a("once_per_load"),
      Pn: a("priority_override"),
      Qn: a("respected_consent_types"),
      Vj: a("setup_tags"),
      Fe: a("tag_id"),
      bk: a("teardown_tags"),
    };
  })();
  var Ne = function (a) {
      return Me[a];
    },
    Pe = function (a) {
      return Oe[a];
    },
    Re = function (a) {
      return Qe[a];
    },
    Se = [],
    Qe = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    Te = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Xe = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Oe = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\v": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    };
  Se[8] = function (a) {
    if (a == null) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Xe, Pe) + "'";
    }
  };
  var ef =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Me = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    };
  Se[16] = function (a) {
    return a;
  };
  var gf;
  var hf = [],
    jf = [],
    kf = [],
    lf = [],
    mf = [],
    nf = {},
    of,
    pf;
  function qf(a) {
    pf = pf || a;
  }
  function rf(a) {}
  var sf,
    tf = [],
    uf = [];
  function vf(a, b) {
    var c = {};
    c[Le.oa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function wf(a, b, c) {
    try {
      return of(xf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function yf(a) {
    var b = a[Le.oa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!nf[b];
  }
  var xf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = zf(a[e], b, c));
      return d;
    },
    zf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(zf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = hf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Le.rh]);
            try {
              var m = xf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Af(m, { event: b, index: f, type: 2, name: k });
              sf && (d = sf.Ol(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[zf(a[n], b, c)] = zf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = zf(a[q], b, c);
              pf && (p = p || pf.Em(r));
              d.push(r);
            }
            return pf && p ? pf.Rl(d) : d.join("");
          case "escape":
            d = zf(a[1], b, c);
            if (pf && Array.isArray(a[1]) && a[1][0] === "macro" && pf.Fm(a))
              return pf.Ym(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Se[a[u]] && (d = Se[a[u]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!lf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { ik: a[2], index: v };
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t[Le.oa] = a[1];
            var w = wf(t, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Af = function (a, b) {
      var c = a[Le.oa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = nf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          tf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          vb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = hf[q];
                  break;
                case 1:
                  r = lf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var u = r && r[Le.rh];
              n = u ? String(u) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, t, w;
      if (f && uf.indexOf(c) === -1) {
        uf.push(c);
        var x = qb();
        v = e(g);
        var y = qb() - x,
          A = qb();
        t = gf(c, k, b);
        w = y - (qb() - A);
      } else if ((e && (v = e(g)), !e || f)) t = gf(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Wc(v)
          ? (Array.isArray(v)
              ? Array.isArray(t)
              : Uc(v)
              ? Uc(t)
              : typeof v === "function"
              ? typeof t === "function"
              : v === t) || d.reportMacroDiscrepancy(d.id, c)
          : v !== t && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : t;
    };
  var Bf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ra(Bf, Error);
  Bf.prototype.getMessage = function () {
    return this.message;
  };
  function Cf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Cf(a[c], b[c]);
    }
  }
  var Df = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Sm = a;
    this.j = [];
    this.C = b;
  };
  ra(Df, Error);
  function Ef() {
    return function (a, b) {
      a instanceof Df || (a = new Df(a, Ff));
      b && a instanceof Df && a.j.push(b);
      throw a;
    };
  }
  function Ff(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) cb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Gf(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }
    for (var c = [], d = [], e = Hf(a), f = 0; f < jf.length; f++) {
      var g = jf[f],
        k = If(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < lf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function If(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Hf(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = wf(kf[c], a));
      return b[c];
    };
  }
  var Jf = {
    Ol: function (a, b) {
      b[Le.Ai] &&
        typeof a === "string" &&
        (a = b[Le.Ai] === 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Le.Ci) && a === null && (a = b[Le.Ci]);
      b.hasOwnProperty(Le.Ei) && a === void 0 && (a = b[Le.Ei]);
      b.hasOwnProperty(Le.Di) && a === !0 && (a = b[Le.Di]);
      b.hasOwnProperty(Le.Bi) && a === !1 && (a = b[Le.Bi]);
      return a;
    },
  };
  var Kf = function () {
      this.j = {};
    },
    Mf = function (a, b) {
      var c = Lf.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ua(ya.apply(0, arguments)));
      });
    };
  function Nf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new Bf(c, d, g);
      }
  }
  function Of(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Nf(e, b, d, g);
          Nf(f, b, d, g);
        }
      }
    };
  }
  var Sf = function () {
      var a = data.permissions || {},
        b = Pf.ctid,
        c = this;
      this.C = {};
      this.j = new Kf();
      var d = {},
        e = {},
        f = Of(this.j, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      ib(a, function (g, k) {
        function m(p) {
          var q = ya.apply(1, arguments);
          if (!n[p])
            throw Qf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ua(q)));
        }
        var n = {};
        ib(k, function (p, q) {
          var r = Rf(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.ek && !e[p] && (e[p] = r.ek);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Qf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, u);
          f.apply(void 0, u);
          var v = e[p];
          v && v.apply(null, [m].concat(ua(u.slice(1))));
        };
      });
    },
    Tf = function (a) {
      return Lf.C[a] || function () {};
    };
  function Rf(a, b) {
    var c = vf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Qf;
    try {
      return Af(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Bf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new Bf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Qf(a, b, c) {
    return new Bf(a, b, c);
  }
  var Vf = !1;
  var Wf = {};
  Wf.Fk = mb("");
  Wf.Vl = mb("");
  var bg = {},
    cg =
      ((bg.uaa = !0),
      (bg.uab = !0),
      (bg.uafvl = !0),
      (bg.uamb = !0),
      (bg.uam = !0),
      (bg.uap = !0),
      (bg.uapv = !0),
      (bg.uaw = !0),
      bg);
  var kg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!ig.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!jg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? vb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    jg = /^[a-z$_][\w$]*$/i,
    ig = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var lg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function mg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var ng = new hb();
  function og(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = ng.get(e);
      f || ((f = new RegExp(b, d)), ng.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function pg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function qg(a, b) {
    return String(a) === String(b);
  }
  function rg(a, b) {
    return Number(a) >= Number(b);
  }
  function sg(a, b) {
    return Number(a) <= Number(b);
  }
  function tg(a, b) {
    return Number(a) > Number(b);
  }
  function ug(a, b) {
    return Number(a) < Number(b);
  }
  function vg(a, b) {
    return vb(String(a), String(b));
  }
  var wg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    xg = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      wg(b, "/*") && (b = b.slice(0, -2));
      wg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    yg = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    Bg = function (a, b) {
      var c;
      if (!(c = !yg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!zg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!Ag.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var u = m.hostname,
          v = q;
        if (v.indexOf("*.") !== 0) r = u.toLowerCase() === v.toLowerCase();
        else {
          v = v.slice(2);
          var t = u.toLowerCase().indexOf(v.toLowerCase());
          r =
            t === -1
              ? !1
              : u.length === v.length
              ? !0
              : u.length !== v.length + t
              ? !1
              : u[t - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = xg(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    zg = /^[a-z0-9-]+$/i,
    Ag = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var Cg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Dg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = Cg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof $c
          ? (n = "Fn")
          : m instanceof Yc
          ? (n = "List")
          : m instanceof La
          ? (n = "PixieMap")
          : m instanceof gd
          ? (n = "PixiePromise")
          : m instanceof ed && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Dg[n] || n) + ", which does not match required type ") +
              ((Dg[k] || k) + ".")
          );
      }
    }
  }
  function Eg(a) {
    return "" + a;
  }
  function Fg(a, b) {
    var c = [];
    return c;
  }
  function Gg(a, b) {
    var c = new $c(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (id()) throw new kd(g.message);
        throw g;
      }
    });
    c.Ia();
    return c;
  }
  function Hg(a, b) {
    var c = new La(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        bb(e)
          ? c.set(d, Gg(a + "_" + d, e))
          : Uc(e)
          ? c.set(d, Hg(a + "_" + d, e))
          : (cb(e) || z(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ia();
    return c;
  }
  function Ig(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new La();
    return (d = Hg("AssertApiSubject", c));
  }
  function Jg(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof gd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new La();
    var e = function (k, m, n) {};
    c.isEqualTo = function (k) {
      K(this.getName(), ["expected:?*"], arguments);
      var m = Fg(a, k);
      m.length > 0 && e("Expected values to be the same.", k, m);
      return d;
    };
    c.isNotEqualTo = function (k) {
      K(this.getName(), ["expected:?*"], arguments);
      Fg(a, k).length === 0 && e("Expected values to be different.", k);
      return d;
    };
    c.isStrictlyEqualTo = function (k) {
      K(this.getName(), ["expected:?*"], arguments);
      a !== k && e("Expected values to be equal.", k);
      return d;
    };
    c.isNotStrictlyEqualTo = function (k) {
      K(this.getName(), ["expected:?*"], arguments);
      a === k && e("Expected values to be different.", k);
      return d;
    };
    c.isAnyOf = function () {
      for (var k = 0; k < arguments.length; k++)
        if (Fg(a, arguments[k]).length === 0) return d;
      e(
        "Expected value to be the same as at least one other value, but it was not.",
        new Yc(Array.prototype.slice.call(arguments))
      );
      return d;
    };
    c.isNoneOf = function () {
      for (var k = 0; k < arguments.length; k++)
        Fg(a, arguments[k]).length === 0 &&
          e(
            "Expected value to be different from all other values, but was the same as value " +
              (k + ".")
          );
      return d;
    };
    c.isDefined = function () {
      K(this.getName(), [], arguments);
      a === void 0 && e("Expected value to be defined.");
      return d;
    };
    c.isUndefined = function () {
      K(this.getName(), [], arguments);
      a !== void 0 && e("Expected value to be undefined.");
      return d;
    };
    c.isNull = function () {
      K(this.getName(), [], arguments);
      a !== null && e("Expected value to be null.");
      return d;
    };
    c.isNotNull = function () {
      K(this.getName(), [], arguments);
      a === null && e("Expected value to not be null.");
      return d;
    };
    c.isTrue = function () {
      K(this.getName(), [], arguments);
      a !== !0 && e("Expected value to be true.");
      return d;
    };
    c.isFalse = function () {
      K(this.getName(), [], arguments);
      a !== !1 && e("Expected value to be false.");
      return d;
    };
    c.isTruthy = function () {
      K(this.getName(), [], arguments);
      a || e("Expected value to be truthy.");
      return d;
    };
    c.isFalsy = function () {
      K(this.getName(), [], arguments);
      a && e("Expected value to be falsy.");
      return d;
    };
    c.isArray = function () {
      K(this.getName(), [], arguments);
      a instanceof Yc || e("Expected value to be an array.");
      return d;
    };
    c.isBoolean = function () {
      K(this.getName(), [], arguments);
      typeof a === "boolean" || e("Expected value to be a boolean.");
      return d;
    };
    c.isFunction = function () {
      K(this.getName(), [], arguments);
      a instanceof $c || e("Expected value to be a function.");
      return d;
    };
    c.isNumber = function () {
      K(this.getName(), [], arguments);
      cb(a) || e("Expected value to be a number.");
      return d;
    };
    c.isObject = function () {
      K(this.getName(), [], arguments);
      a instanceof La || e("Expected value to be an object.");
      return d;
    };
    c.isString = function () {
      K(this.getName(), [], arguments);
      z(a) || e("Expected value to be a string.");
      return d;
    };
    c.isGreaterThan = function (k) {
      K(this.getName(), ["expected:?*"], arguments);
      a > k || e("Expected value to be greater than another.", k);
      return d;
    };
    c.isGreaterThanOrEqualTo = function (k) {
      K(this.getName(), ["expected:?*"], arguments);
      a >= k || e("Expected value to be greater than or equal to another.", k);
      return d;
    };
    c.isLessThan = function (k) {
      K(this.getName(), ["expected:?*"], arguments);
      a < k || e("Expected value to be less than another.", k);
      return d;
    };
    c.isLessThanOrEqualTo = function (k) {
      K(this.getName(), ["expected:?*"], arguments);
      a <= k || e("Expected value to be less than or equal to another.", k);
      return d;
    };
    c.isNaN = function () {
      K(this.getName(), [], arguments);
      a === a && e("Expected value to be NaN.");
      return d;
    };
    c.isNotNaN = function () {
      K(this.getName(), [], arguments);
      a !== a && e("Expected value to not be NaN.");
      return d;
    };
    c.isInfinity = function () {
      K(this.getName(), [], arguments);
      a !== Infinity && a !== -Infinity && e("Expected value to be infinite.");
      return d;
    };
    c.isNotInfinity = function () {
      K(this.getName(), [], arguments);
      (a !== Infinity && a !== -Infinity) ||
        e("Expected value to not be infinite.");
      return d;
    };
    c.isEmpty = function () {
      K(this.getName(), [], arguments);
      if (z(a)) {
        var k = a;
        k.length !== 0 &&
          e(
            "Expected value to be empty, but it had " +
              (k.length === 1 ? "1 character" : k.length + " characters") +
              "."
          );
      } else
        a instanceof Yc
          ? a.length() !== 0 &&
            e(
              "Expected value to be empty, but it had " +
                (a.length() === 1 ? "1 item" : a.length() + " items") +
                "."
            )
          : e(
              "Could not assert that value was empty, it was not a string or array."
            );
      return d;
    };
    c.isNotEmpty = function () {
      K(this.getName(), [], arguments);
      z(a)
        ? a.length === 0 &&
          e("Expected value to be non-empty, but it was the empty string.")
        : a instanceof Yc
        ? a.length() === 0 &&
          e("Expected value to be non-empty, but it had no items.")
        : e(
            "Could not assert that value was non-empty, it was not a string or array."
          );
      return d;
    };
    c.hasLength = function (k) {
      K(this.getName(), ["length:!number"], arguments);
      if (z(a)) {
        var m = a;
        m.length !== k &&
          e(
            "Expected value to have a length of " +
              k +
              ", but it actually had a length of " +
              (m.length + ".")
          );
      } else
        a instanceof Yc
          ? a.length() !== k &&
            e(
              "Expected value to have a length of " +
                k +
                ", but it actually had a length of " +
                (a.length() + ".")
            )
          : e(
              "Could not assert that value had a specific length, it was not a string or array."
            );
      return d;
    };
    var f = function (k, m) {
      for (var n = 0; n < k.length(); n++)
        if (Fg(k.get(n), m).length === 0) return !0;
      return !1;
    };
    c.contains = function () {
      z(a) ||
        a instanceof Yc ||
        e(
          "Could not assert that value contained another value, it was not a string or array."
        );
      for (var k = 0; k < arguments.length; k++) {
        var m = arguments[k];
        z(a)
          ? a.indexOf(m) === -1 &&
            e(
              "Expected that value would contain " + Eg(m) + ", but it did not."
            )
          : a instanceof Yc &&
            (f(a, m) ||
              e(
                "Expected that value would contain " +
                  Eg(m) +
                  ", but it did not."
              ));
      }
      return d;
    };
    c.doesNotContain = function () {
      z(a) ||
        a instanceof Yc ||
        e(
          "Could not assert that value contained another value, it was not a string or array."
        );
      for (var k = 0; k < arguments.length; k++) {
        var m = arguments[k];
        z(a)
          ? a.indexOf(m) !== -1 &&
            e(
              "Expected that value would not contain " + Eg(m) + ", but it did."
            )
          : a instanceof Yc &&
            f(a, m) &&
            e(
              "Expected that value would not contain " + Eg(m) + ", but it did."
            );
      }
      return d;
    };
    var g = function (k, m) {
      if (k.length() !== m.length) return !1;
      for (var n = {}, p = 0; p < k.length(); p++) {
        var q = k.get(p);
        (n[String(q)] = n[String(q)] || []).push(q);
      }
      for (var r = 0; r < m.length; r++) {
        var u;
        a: {
          var v = m[r],
            t = n[v];
          if (t)
            for (var w = 0; w < t.length; w++)
              if (Fg(t[w], v).length === 0) {
                t[w] = t[t.length - 1];
                t.pop();
                u = !0;
                break a;
              }
          u = !1;
        }
        if (!u) return !1;
      }
      return !0;
    };
    c.containsExactly = function () {
      if (a instanceof Yc) {
        var k = Array.prototype.slice.call(arguments);
        g(a, k) ||
          e(
            "Expected value to contain a specific set of values, but it did not.",
            new Yc(k)
          );
      } else
        e(
          "Could not assert value contained a specific set of values, it was not an array."
        );
      return d;
    };
    c.doesNotContainExactly = function () {
      if (a instanceof Yc) {
        var k = Array.prototype.slice.call(arguments);
        g(a, k) &&
          e(
            "Expected value not to contain a specific set of values, but it did.",
            new Yc(k)
          );
      } else
        e(
          "Could not assert value contained a specific set of values, it was not an array."
        );
      return d;
    };
    return (d = Hg("AssertThatSubject", c));
  }
  function Kg(a) {
    return function () {
      for (var b = [], c = this.D, d = 0; d < arguments.length; ++d)
        b.push(G(arguments[d], c));
      return hd(a.apply(null, b));
    };
  }
  function Lg() {
    for (var a = Math, b = Mg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Kg(a[e].bind(a)));
    }
    return c;
  }
  function Ng(a) {
    var b;
    return b;
  }
  function Og(a) {
    var b;
    return b;
  }
  function Pg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function Qg(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function Vg(a) {
    K(this.getName(), ["message:?string"], arguments);
  }
  function Wg(a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return fb(a, b);
  }
  function Xg() {
    return new Date().getTime();
  }
  function Yg(a) {
    if (a === null) return "null";
    if (a instanceof Yc) return "array";
    if (a instanceof $c) return "function";
    if (a instanceof ed) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function Zg(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Vf || Wf.Fk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return hd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(G(c));
      }),
    };
  }
  function $g(a) {
    return lb(G(a, this.D));
  }
  function ah(a) {
    return Number(G(a, this.D));
  }
  function bh(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function ch(a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new La();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof La &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Mg = "floor ceil round max min abs pow sqrt".split(" ");
  function dh() {
    var a = {};
    return {
      gm: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Bk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function eh(a, b) {
    return function () {
      var c = Array.prototype.slice.call(ya.apply(0, arguments), 0);
      c.unshift(b);
      return $c.prototype.invoke.apply(a, c);
    };
  }
  function fh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function gh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var hh = {};
  var ih = function (a) {
    var b = new La();
    if (a instanceof Yc)
      for (var c = a.ka(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof $c)
      for (var f = a.ka(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  hh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Yc || a instanceof $c || typeof a === "string") a = ih(a);
    if (a instanceof La || a instanceof gd) return new Yc(a.ka());
    return new Yc();
  };
  hh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Yc || a instanceof $c || typeof a === "string") a = ih(a);
    if (a instanceof La || a instanceof gd) return new Yc(a.Vb());
    return new Yc();
  };
  hh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Yc || a instanceof $c || typeof a === "string") a = ih(a);
    if (a instanceof La || a instanceof gd)
      return new Yc(
        a.Cb().map(function (b) {
          return new Yc(b);
        })
      );
    return new Yc();
  };
  hh.freeze = function (a) {
    (a instanceof La ||
      a instanceof gd ||
      a instanceof Yc ||
      a instanceof $c) &&
      a.Ia();
    return a;
  };
  hh.delete = function (a, b) {
    if (a instanceof La && !a.sc()) return a.remove(b), !0;
    return !1;
  };
  function L(a, b) {
    var c = ya.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.hn) {
      try {
        d.fk.apply(null, [b].concat(ua(c)));
      } catch (e) {
        throw (Va("TAGGING", 21), e);
      }
      return;
    }
    d.fk.apply(null, [b].concat(ua(c)));
  }
  var jh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  jh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  jh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  jh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : bb(b) ? Gg(a, b) : Hg(a, b);
  };
  function kh(a, b) {
    var c = void 0;
    return c;
  }
  function lh() {
    var a = {};
    return a;
  }
  var O = {
      g: {
        za: "ad_personalization",
        O: "ad_storage",
        N: "ad_user_data",
        U: "analytics_storage",
        Jb: "region",
        Yb: "consent_updated",
        tf: "wait_for_update",
        Gi: "app_remove",
        Hi: "app_store_refund",
        Ii: "app_store_subscription_cancel",
        Ji: "app_store_subscription_convert",
        Ki: "app_store_subscription_renew",
        Rk: "consent_update",
        wg: "add_payment_info",
        xg: "add_shipping_info",
        wc: "add_to_cart",
        xc: "remove_from_cart",
        yg: "view_cart",
        Zb: "begin_checkout",
        yc: "select_item",
        pb: "view_item_list",
        Kb: "select_promotion",
        qb: "view_promotion",
        Ma: "purchase",
        zc: "refund",
        Qa: "view_item",
        zg: "add_to_wishlist",
        Sk: "exception",
        Li: "first_open",
        Mi: "first_visit",
        ba: "gtag.config",
        Ya: "gtag.get",
        Ni: "in_app_purchase",
        ac: "page_view",
        Tk: "screen_view",
        Oi: "session_start",
        Uk: "timing_complete",
        Vk: "track_social",
        Uc: "user_engagement",
        Wk: "user_id_update",
        Rd: "gclid_link_decoration_source",
        Sd: "gclid_storage_source",
        rb: "gclgb",
        Za: "gclid",
        wf: "gclgs",
        xf: "gcllp",
        yf: "gclst",
        ia: "ads_data_redaction",
        Pi: "gad_source",
        Qi: "gad_source_src",
        Ri: "ndclid",
        Si: "ngad_source",
        Ti: "ngbraid",
        Ui: "ngclid",
        Vi: "ngclsrc",
        Td: "gclid_url",
        Wi: "gclsrc",
        Ag: "gbraid",
        zf: "wbraid",
        ma: "allow_ad_personalization_signals",
        Af: "allow_custom_scripts",
        Ud: "allow_direct_google_requests",
        Bf: "allow_display_features",
        Vd: "allow_enhanced_conversions",
        sb: "allow_google_signals",
        Ea: "allow_interest_groups",
        Xk: "app_id",
        Yk: "app_installer_id",
        Zk: "app_name",
        al: "app_version",
        Lb: "auid",
        Xi: "auto_detection_enabled",
        bc: "aw_remarketing",
        Cf: "aw_remarketing_only",
        Wd: "discount",
        Xd: "aw_feed_country",
        Yd: "aw_feed_language",
        da: "items",
        Zd: "aw_merchant_id",
        Bg: "aw_basket_type",
        Vc: "campaign_content",
        Wc: "campaign_id",
        Xc: "campaign_medium",
        Yc: "campaign_name",
        Zc: "campaign",
        bd: "campaign_source",
        dd: "campaign_term",
        tb: "client_id",
        Yi: "rnd",
        Cg: "consent_update_type",
        Zi: "content_group",
        aj: "content_type",
        eb: "conversion_cookie_prefix",
        ed: "conversion_id",
        ra: "conversion_linker",
        bj: "conversion_linker_disabled",
        fc: "conversion_api",
        Df: "cookie_deprecation",
        Ra: "cookie_domain",
        Sa: "cookie_expires",
        ab: "cookie_flags",
        Ac: "cookie_name",
        vb: "cookie_path",
        Na: "cookie_prefix",
        hc: "cookie_update",
        Bc: "country",
        Aa: "currency",
        Dg: "customer_buyer_stage",
        ae: "customer_lifetime_value",
        Eg: "customer_loyalty",
        Fg: "customer_ltv_bucket",
        fd: "custom_map",
        Gg: "gcldc",
        be: "dclid",
        Hg: "debug_mode",
        fa: "developer_id",
        cj: "disable_merchant_reported_purchases",
        gd: "dc_custom_params",
        dj: "dc_natural_search",
        Ig: "dynamic_event_settings",
        Jg: "affiliation",
        ce: "checkout_option",
        Ef: "checkout_step",
        Kg: "coupon",
        hd: "item_list_name",
        Ff: "list_name",
        ej: "promotions",
        jd: "shipping",
        Gf: "tax",
        de: "engagement_time_msec",
        ee: "enhanced_client_id",
        fe: "enhanced_conversions",
        Lg: "enhanced_conversions_automatic_settings",
        he: "estimated_delivery_date",
        Hf: "euid_logged_in_state",
        kd: "event_callback",
        bl: "event_category",
        fb: "event_developer_id_string",
        fl: "event_label",
        Cc: "event",
        ie: "event_settings",
        je: "event_timeout",
        il: "description",
        jl: "fatal",
        fj: "experiments",
        If: "firebase_id",
        Dc: "first_party_collection",
        ke: "_x_20",
        wb: "_x_19",
        gj: "fledge_drop_reason",
        Mg: "fledge",
        Ng: "flight_error_code",
        Og: "flight_error_message",
        ij: "fl_activity_category",
        jj: "fl_activity_group",
        Pg: "fl_advertiser_id",
        kj: "fl_ar_dedupe",
        Qg: "match_id",
        lj: "fl_random_number",
        mj: "tran",
        nj: "u",
        me: "gac_gclid",
        Ec: "gac_wbraid",
        Rg: "gac_wbraid_multiple_conversions",
        Sg: "ga_restrict_domain",
        Tg: "ga_temp_client_id",
        kl: "ga_temp_ecid",
        ic: "gdpr_applies",
        Ug: "geo_granularity",
        Mb: "value_callback",
        xb: "value_key",
        Fc: "_google_ng",
        Gc: "google_signals",
        Vg: "google_tld",
        ne: "groups",
        Wg: "gsa_experiment_id",
        oj: "gtm_up",
        Nb: "iframe_state",
        ld: "ignore_referrer",
        Jf: "internal_traffic_results",
        jc: "is_legacy_converted",
        Ob: "is_legacy_loaded",
        oe: "is_passthrough",
        md: "_lps",
        Ta: "language",
        pe: "legacy_developer_id_string",
        sa: "linker",
        Hc: "accept_incoming",
        yb: "decorate_forms",
        X: "domains",
        Pb: "url_position",
        Kf: "merchant_feed_label",
        Lf: "merchant_feed_language",
        Mf: "merchant_id",
        Xg: "method",
        ml: "name",
        pj: "navigation_type",
        nd: "new_customer",
        Yg: "non_interaction",
        qj: "optimize_id",
        Zg: "page_hostname",
        od: "page_path",
        Fa: "page_referrer",
        ib: "page_title",
        ah: "passengers",
        bh: "phone_conversion_callback",
        rj: "phone_conversion_country_code",
        eh: "phone_conversion_css_class",
        sj: "phone_conversion_ids",
        fh: "phone_conversion_number",
        gh: "phone_conversion_options",
        hh: "_protected_audience_enabled",
        pd: "quantity",
        qe: "redact_device_info",
        Nf: "referral_exclusion_definition",
        Qb: "restricted_data_processing",
        tj: "retoken",
        nl: "sample_rate",
        Of: "screen_name",
        Rb: "screen_resolution",
        uj: "_script_source",
        vj: "search_term",
        Oa: "send_page_view",
        kc: "send_to",
        rd: "server_container_url",
        sd: "session_duration",
        se: "session_engaged",
        Pf: "session_engaged_time",
        zb: "session_id",
        te: "session_number",
        Qf: "_shared_user_id",
        ud: "delivery_postal_code",
        ol: "temporary_client_id",
        Rf: "topmost_url",
        wj: "tracking_id",
        Sf: "traffic_type",
        Ba: "transaction_id",
        Sb: "transport_url",
        ih: "trip_type",
        nc: "update",
        cb: "url_passthrough",
        xj: "uptgs",
        Tf: "_user_agent_architecture",
        Uf: "_user_agent_bitness",
        Vf: "_user_agent_full_version_list",
        Wf: "_user_agent_mobile",
        Xf: "_user_agent_model",
        Yf: "_user_agent_platform",
        Zf: "_user_agent_platform_version",
        cg: "_user_agent_wow64",
        Ga: "user_data",
        jh: "user_data_auto_latency",
        kh: "user_data_auto_meta",
        lh: "user_data_auto_multi",
        mh: "user_data_auto_selectors",
        nh: "user_data_auto_status",
        vd: "user_data_mode",
        ue: "user_data_settings",
        Ca: "user_id",
        jb: "user_properties",
        yj: "_user_region",
        wd: "us_privacy_string",
        na: "value",
        oh: "wbraid_multiple_conversions",
        xd: "_fpm_parameters",
        Fj: "_host_name",
        Gj: "_in_page_command",
        Hj: "_ip_override",
        Ij: "_is_passthrough_cid",
        Tb: "non_personalized_ads",
        De: "_sst_parameters",
        ub: "conversion_label",
        wa: "page_location",
        hb: "global_developer_id_string",
        mc: "tc_privacy_string",
      },
    },
    mh = {},
    nh = Object.freeze(
      ((mh[O.g.ma] = 1),
      (mh[O.g.Bf] = 1),
      (mh[O.g.Vd] = 1),
      (mh[O.g.sb] = 1),
      (mh[O.g.da] = 1),
      (mh[O.g.Ra] = 1),
      (mh[O.g.Sa] = 1),
      (mh[O.g.ab] = 1),
      (mh[O.g.Ac] = 1),
      (mh[O.g.vb] = 1),
      (mh[O.g.Na] = 1),
      (mh[O.g.hc] = 1),
      (mh[O.g.fd] = 1),
      (mh[O.g.fa] = 1),
      (mh[O.g.Ig] = 1),
      (mh[O.g.kd] = 1),
      (mh[O.g.ie] = 1),
      (mh[O.g.je] = 1),
      (mh[O.g.Dc] = 1),
      (mh[O.g.Sg] = 1),
      (mh[O.g.Gc] = 1),
      (mh[O.g.Vg] = 1),
      (mh[O.g.ne] = 1),
      (mh[O.g.Jf] = 1),
      (mh[O.g.jc] = 1),
      (mh[O.g.Ob] = 1),
      (mh[O.g.sa] = 1),
      (mh[O.g.Nf] = 1),
      (mh[O.g.Qb] = 1),
      (mh[O.g.Oa] = 1),
      (mh[O.g.kc] = 1),
      (mh[O.g.rd] = 1),
      (mh[O.g.sd] = 1),
      (mh[O.g.Pf] = 1),
      (mh[O.g.ud] = 1),
      (mh[O.g.Sb] = 1),
      (mh[O.g.nc] = 1),
      (mh[O.g.ue] = 1),
      (mh[O.g.jb] = 1),
      (mh[O.g.De] = 1),
      mh)
    );
  Object.freeze([
    O.g.wa,
    O.g.Fa,
    O.g.ib,
    O.g.Ta,
    O.g.Of,
    O.g.Ca,
    O.g.If,
    O.g.Zi,
  ]);
  var oh = {},
    ph = Object.freeze(
      ((oh[O.g.Gi] = 1),
      (oh[O.g.Hi] = 1),
      (oh[O.g.Ii] = 1),
      (oh[O.g.Ji] = 1),
      (oh[O.g.Ki] = 1),
      (oh[O.g.Li] = 1),
      (oh[O.g.Mi] = 1),
      (oh[O.g.Ni] = 1),
      (oh[O.g.Oi] = 1),
      (oh[O.g.Uc] = 1),
      oh)
    ),
    qh = {},
    rh = Object.freeze(
      ((qh[O.g.wg] = 1),
      (qh[O.g.xg] = 1),
      (qh[O.g.wc] = 1),
      (qh[O.g.xc] = 1),
      (qh[O.g.yg] = 1),
      (qh[O.g.Zb] = 1),
      (qh[O.g.yc] = 1),
      (qh[O.g.pb] = 1),
      (qh[O.g.Kb] = 1),
      (qh[O.g.qb] = 1),
      (qh[O.g.Ma] = 1),
      (qh[O.g.zc] = 1),
      (qh[O.g.Qa] = 1),
      (qh[O.g.zg] = 1),
      qh)
    ),
    sh = Object.freeze([
      O.g.ma,
      O.g.Ud,
      O.g.sb,
      O.g.hc,
      O.g.Dc,
      O.g.ld,
      O.g.Oa,
      O.g.nc,
    ]),
    th = Object.freeze([].concat(ua(sh))),
    uh = Object.freeze([O.g.Sa, O.g.je, O.g.sd, O.g.Pf, O.g.de]),
    vh = Object.freeze([].concat(ua(uh))),
    xh = {},
    Ah =
      ((xh[O.g.O] = "1"),
      (xh[O.g.U] = "2"),
      (xh[O.g.N] = "3"),
      (xh[O.g.za] = "4"),
      xh),
    Bh = {},
    Ch = Object.freeze(
      ((Bh[O.g.Rd] = 1),
      (Bh[O.g.Sd] = 1),
      (Bh[O.g.ma] = 1),
      (Bh[O.g.Ud] = 1),
      (Bh[O.g.Vd] = 1),
      (Bh[O.g.Ea] = 1),
      (Bh[O.g.bc] = 1),
      (Bh[O.g.Cf] = 1),
      (Bh[O.g.Wd] = 1),
      (Bh[O.g.Xd] = 1),
      (Bh[O.g.Yd] = 1),
      (Bh[O.g.da] = 1),
      (Bh[O.g.Zd] = 1),
      (Bh[O.g.eb] = 1),
      (Bh[O.g.ra] = 1),
      (Bh[O.g.Ra] = 1),
      (Bh[O.g.Sa] = 1),
      (Bh[O.g.ab] = 1),
      (Bh[O.g.Na] = 1),
      (Bh[O.g.Aa] = 1),
      (Bh[O.g.Dg] = 1),
      (Bh[O.g.ae] = 1),
      (Bh[O.g.Eg] = 1),
      (Bh[O.g.Fg] = 1),
      (Bh[O.g.fa] = 1),
      (Bh[O.g.cj] = 1),
      (Bh[O.g.fe] = 1),
      (Bh[O.g.he] = 1),
      (Bh[O.g.If] = 1),
      (Bh[O.g.Dc] = 1),
      (Bh[O.g.jc] = 1),
      (Bh[O.g.Ob] = 1),
      (Bh[O.g.Ta] = 1),
      (Bh[O.g.Kf] = 1),
      (Bh[O.g.Lf] = 1),
      (Bh[O.g.Mf] = 1),
      (Bh[O.g.nd] = 1),
      (Bh[O.g.wa] = 1),
      (Bh[O.g.Fa] = 1),
      (Bh[O.g.bh] = 1),
      (Bh[O.g.eh] = 1),
      (Bh[O.g.fh] = 1),
      (Bh[O.g.gh] = 1),
      (Bh[O.g.Qb] = 1),
      (Bh[O.g.Oa] = 1),
      (Bh[O.g.kc] = 1),
      (Bh[O.g.rd] = 1),
      (Bh[O.g.ud] = 1),
      (Bh[O.g.Ba] = 1),
      (Bh[O.g.Sb] = 1),
      (Bh[O.g.nc] = 1),
      (Bh[O.g.cb] = 1),
      (Bh[O.g.Ga] = 1),
      (Bh[O.g.Ca] = 1),
      (Bh[O.g.na] = 1),
      Bh)
    ),
    Dh = {},
    Eh = Object.freeze(
      ((Dh.search = "s"),
      (Dh.youtube = "y"),
      (Dh.playstore = "p"),
      (Dh.shopping = "h"),
      (Dh.ads = "a"),
      (Dh.maps = "m"),
      Dh)
    );
  Object.freeze(O.g);
  var P = {},
    Fh =
      ((P[O.g.Yb] = "gcu"),
      (P[O.g.rb] = "gclgb"),
      (P[O.g.Za] = "gclaw"),
      (P[O.g.wf] = "gclgs"),
      (P[O.g.xf] = "gcllp"),
      (P[O.g.yf] = "gclst"),
      (P[O.g.Ri] = "ndclid"),
      (P[O.g.Si] = "ngad_source"),
      (P[O.g.Ti] = "ngbraid"),
      (P[O.g.Ui] = "ngclid"),
      (P[O.g.Vi] = "ngclsrc"),
      (P[O.g.Lb] = "auid"),
      (P[O.g.Wd] = "dscnt"),
      (P[O.g.Xd] = "fcntr"),
      (P[O.g.Yd] = "flng"),
      (P[O.g.Zd] = "mid"),
      (P[O.g.Bg] = "bttype"),
      (P[O.g.ub] = "label"),
      (P[O.g.fc] = "capi"),
      (P[O.g.Df] = "pscdl"),
      (P[O.g.Aa] = "currency_code"),
      (P[O.g.Dg] = "clobs"),
      (P[O.g.ae] = "vdltv"),
      (P[O.g.Eg] = "clolo"),
      (P[O.g.Fg] = "clolb"),
      (P[O.g.Hg] = "_dbg"),
      (P[O.g.he] = "oedeld"),
      (P[O.g.fb] = "edid"),
      (P[O.g.gj] = "fdr"),
      (P[O.g.Mg] = "fledge"),
      (P[O.g.me] = "gac"),
      (P[O.g.Ec] = "gacgb"),
      (P[O.g.Rg] = "gacmcov"),
      (P[O.g.ic] = "gdpr"),
      (P[O.g.hb] = "gdid"),
      (P[O.g.Fc] = "_ng"),
      (P[O.g.Wg] = "gsaexp"),
      (P[O.g.Nb] = "frm"),
      (P[O.g.oe] = "gtm_up"),
      (P[O.g.md] = "lps"),
      (P[O.g.pe] = "did"),
      (P[O.g.Kf] = "fcntr"),
      (P[O.g.Lf] = "flng"),
      (P[O.g.Mf] = "mid"),
      (P[O.g.nd] = void 0),
      (P[O.g.ib] = "tiba"),
      (P[O.g.Qb] = "rdp"),
      (P[O.g.zb] = "ecsid"),
      (P[O.g.Qf] = "ga_uid"),
      (P[O.g.ud] = "delopc"),
      (P[O.g.mc] = "gdpr_consent"),
      (P[O.g.Ba] = "oid"),
      (P[O.g.xj] = "uptgs"),
      (P[O.g.Tf] = "uaa"),
      (P[O.g.Uf] = "uab"),
      (P[O.g.Vf] = "uafvl"),
      (P[O.g.Wf] = "uamb"),
      (P[O.g.Xf] = "uam"),
      (P[O.g.Yf] = "uap"),
      (P[O.g.Zf] = "uapv"),
      (P[O.g.cg] = "uaw"),
      (P[O.g.jh] = "ec_lat"),
      (P[O.g.kh] = "ec_meta"),
      (P[O.g.lh] = "ec_m"),
      (P[O.g.mh] = "ec_sel"),
      (P[O.g.nh] = "ec_s"),
      (P[O.g.vd] = "ec_mode"),
      (P[O.g.Ca] = "userId"),
      (P[O.g.wd] = "us_privacy"),
      (P[O.g.na] = "value"),
      (P[O.g.oh] = "mcov"),
      (P[O.g.Fj] = "hn"),
      (P[O.g.Gj] = "gtm_ee"),
      (P[O.g.Tb] = "npa"),
      (P[O.g.ed] = null),
      (P[O.g.Rb] = null),
      (P[O.g.Ta] = null),
      (P[O.g.da] = null),
      (P[O.g.wa] = null),
      (P[O.g.Fa] = null),
      (P[O.g.Rf] = null),
      (P[O.g.xd] = null),
      (P[O.g.Rd] = null),
      (P[O.g.Sd] = null),
      P);
  function Gh(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Hh(b, "u_w", c[0]), Hh(b, "u_h", c[1]));
    }
  }
  function Ih(a, b) {
    a &&
      (a.length === 2
        ? Hh(b, "hl", a)
        : a.length === 5 &&
          (Hh(b, "hl", a.substring(0, 2)), Hh(b, "gl", a.substring(3, 5))));
  }
  function Jh(a) {
    var b = Kh;
    b = b === void 0 ? Lh : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push(Mh(q.value)),
          r.push(Mh(q.quantity)),
          r.push(Mh(q.item_id)),
          r.push(Mh(q.start_date)),
          r.push(Mh(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Lh(a) {
    return Nh(a.item_id, a.id, a.item_name);
  }
  function Nh() {
    for (
      var a = l(ya.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function Oh(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Hh(a, b, c) {
    c === void 0 || c === null || (c === "" && !cg[b]) || (a[b] = c);
  }
  function Mh(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function Ph(a) {
    return Qh ? E.querySelectorAll(a) : null;
  }
  function Rh(a, b) {
    if (!Qh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!E.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var Sh = !1;
  if (E.querySelectorAll)
    try {
      var Th = E.querySelectorAll(":root");
      Th && Th.length == 1 && Th[0] == E.documentElement && (Sh = !0);
    } catch (a) {}
  var Qh = Sh;
  function Uh(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var Vh = /^[0-9A-Fa-f]{64}$/;
  function Wh(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function Xh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = B.crypto) == null ? 0 : b.subtle) {
      if (Vh.test(a)) return Promise.resolve(a);
      try {
        var c = Wh(a);
        return B.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return B.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function Yh(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Zh = [];
  function $h(a) {
    switch (a) {
      case 0:
        return 0;
      case 45:
        return 1;
      case 46:
        return 2;
      case 47:
        return 9;
      case 52:
        return 3;
      case 67:
        return 4;
      case 92:
        return 5;
      case 94:
        return 6;
      case 111:
        return 7;
      case 112:
        return 11;
      case 113:
        return 8;
    }
  }
  function ai(a, b) {
    Zh[a] = b;
    var c = $h(a);
    c !== void 0 && (Ya[c] = b);
  }
  function Q(a) {
    ai(a, !0);
  }
  Q(34);
  Q(30);
  Q(31);
  Q(32);
  Q(33);
  Q(48);
  Q(84);
  Q(16);
  Q(120);
  Q(15);
  Q(126);
  Q(119);
  Q(68);
  Q(95);
  Q(6);
  Q(49);
  Q(4);
  Q(82);
  Q(88);
  Q(115);
  Q(80);
  Q(74);
  Q(93);
  Q(131);
  Q(106);
  Q(107);

  Q(127);
  Q(94);
  Q(5);
  ai(19, !1), Q(20);
  Q(111);
  Q(70);
  Za[1] = Yh("1", 6e4);
  Za[3] = Yh("10", 1);
  Za[2] = Yh("", 50);
  Q(25);
  Q(13);
  Q(73);
  Q(116);
  var ci = !1;
  Q(8);
  Q(99);
  Q(61);
  Q(130);
  Q(51);
  Q(113);
  Q(102);
  Q(23);
  Q(52);
  Q(103);
  Q(50);
  Q(64);
  Q(112);
  Q(76);
  Q(79);
  Q(90);
  Q(55);
  Q(53);
  Q(110);
  function R(a) {
    return !!Zh[a];
  }
  function bi(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? Q(b) : Q(a);
  }
  function V(a) {
    Va("GTM", a);
  }
  var Hi = { An: "101925629~102067555~102077855" };
  var Ii = {},
    Ji = (B.google_tag_manager = B.google_tag_manager || {});
  Ii.th = "4bc0";
  Ii.Ce = Number("0") || 0;
  Ii.ob = "dataLayer";
  Ii.Cn =
    "ChAIgNzWuQYQ9q/q3M/Wvb9AEiQAZPhIlenitJKdMTEPA7jmVjyUgKDXAjOH+AUftlUimqkiJ6YaAl2I";
  var Ki = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Li = { __paused: 1, __tg: 1 },
    Mi;
  for (Mi in Ki) Ki.hasOwnProperty(Mi) && (Li[Mi] = 1);
  var Ni = mb(""),
    Oi = !1,
    Pi,
    Qi = !1;
  Pi = Qi;
  var Ri,
    Si = !1;
  Si = !0;
  Ri = Si;
  var Ti,
    Ui = !1;
  Ti = Ui;
  Ii.vf = "www.googletagmanager.com";
  var Vi = "" + Ii.vf + (Pi ? "/gtag/js" : "/gtm.js"),
    Wi = null,
    Xi = null,
    Yi = {},
    Zi = {};
  function $i() {
    var a = Ji.sequence || 1;
    Ji.sequence = a + 1;
    return a;
  }
  Ii.Pk = "";
  var aj = "";
  aj =
    "334a69aaaac0bf012668a15b30668998f8f1db9b733fcf16b63e4d708a37ac0a_20241114";
  Ii.uh = aj;
  var bj = function () {
      this.j = new Set();
    },
    dj = function () {
      return Array.from(cj.aa.j).join("~");
    },
    cj = new (function () {
      this.aa = new bj();
      this.C = !1;
      this.j = 0;
      this.K = this.P = this.Ua = this.H = "";
    })();
  function ej() {
    var a = cj.H.length;
    return cj.H[a - 1] === "/" ? cj.H.substring(0, a - 1) : cj.H;
  }
  function fj() {
    return cj.C ? (R(71) ? cj.j === 0 : cj.j !== 1) : !1;
  }
  function gj(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var hj = new hb(),
    ij = {},
    jj = {},
    mj = {
      name: Ii.ob,
      set: function (a, b) {
        Vc(yb(a, b), ij);
        kj();
      },
      get: function (a) {
        return lj(a, 2);
      },
      reset: function () {
        hj = new hb();
        ij = {};
        kj();
      },
    };
  function lj(a, b) {
    return b != 2 ? hj.get(a) : nj(a);
  }
  function nj(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = ij, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function oj(a, b) {
    jj.hasOwnProperty(a) || (hj.set(a, b), Vc(yb(a, b), ij), kj());
  }
  function pj() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = lj(c, 1);
      if (Array.isArray(d) || Uc(d)) d = Vc(d, null);
      jj[c] = d;
    }
  }
  function kj(a) {
    ib(jj, function (b, c) {
      hj.set(b, c);
      Vc(yb(b), ij);
      Vc(yb(b, c), ij);
      a && delete jj[b];
    });
  }
  function qj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? nj(a) : hj.get(a);
    Sc(d) === "array" || Sc(d) === "object" ? (c = Vc(d, null)) : (c = d);
    return c;
  }
  var vj = /:[0-9]+$/,
    wj = /^\d+\.fls\.doubleclick\.net$/;
  function xj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = ta(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function yj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = zj(a.protocol) || zj(B.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : B.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || B.location.hostname)
          .replace(vj, "")
          .toLowerCase());
    return Aj(a, b, c, d, e);
  }
  function Aj(a, b, c, d, e) {
    var f,
      g = zj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Bj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(vj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || Va("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = xj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function zj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Bj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Cj = {},
    Dj = 0;
  function Ej(a) {
    var b = Cj[a];
    if (!b) {
      var c = E.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(vj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Dj < 5 && ((Cj[a] = b), Dj++);
    }
    return b;
  }
  function Fj(a) {
    var b = Ej(B.location.href),
      c = yj(b, "host", !1);
    if (c && c.match(wj)) {
      var d = yj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  function Gj(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  }
  var Hj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Ij(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Ej("" + c + b).href;
    }
  }
  function Jj(a, b) {
    if (fj() || Ri) return Ij(a, b);
  }
  function Kj() {
    return !!Ii.uh && Ii.uh.split("@@").join("") !== "SGTM_TOKEN";
  }
  function Lj(a) {
    for (var b = l([O.g.rd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = W(a, c.value);
      if (d) return d;
    }
  }
  function Mj(a, b) {
    return fj() ? "" + ej() + (b ? Hj[a] || "" : "") : a;
  }
  function Nj(a) {
    var b = String(a[Le.oa] || "").replace(/_/g, "");
    return vb(b, "cvt") ? "cvt" : b;
  }
  var Oj =
    B.location.search.indexOf("?gtm_latency=") >= 0 ||
    B.location.search.indexOf("&gtm_latency=") >= 0;
  var Pj = { sampleRate: "0.005000", Lk: "", zn: "0.01" },
    Qj = Math.random(),
    Rj;
  if (!(Rj = Oj)) {
    var Sj = Pj.sampleRate;
    Rj = Qj < Number(Sj);
  }
  var Tj = Rj,
    Uj =
      (jc == null ? void 0 : jc.includes("gtm_debug=d")) ||
      Oj ||
      Qj >= 1 - Number(Pj.zn);
  var Vj = /gtag[.\/]js/,
    Wj = /gtm[.\/]js/,
    Yj = !1;
  function Zj(a) {
    if (Yj) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (Vj.test(c)) return "3";
      if (Wj.test(c)) return "2";
    }
    return "0";
  }
  function ak(a, b) {
    var c = bk();
    c.pending || (c.pending = []);
    eb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function ck() {
    var a = B.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var dk = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = ck();
  };
  function bk() {
    var a = kc("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new dk()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = ck());
    return c;
  }
  var ek = {},
    fk = !1,
    Pf = {
      ctid: "GTM-P4X2874",
      canonicalContainerId: "50275930",
      rk: "GTM-P4X2874",
      sk: "GTM-P4X2874",
    };
  ek.ze = mb("");
  function gk() {
    return (
      ek.ze &&
      hk().some(function (a) {
        return a === Pf.ctid;
      })
    );
  }
  function ik() {
    var a = jk();
    return fk ? a.map(kk) : a;
  }
  function lk() {
    var a = hk();
    return fk ? a.map(kk) : a;
  }
  function mk() {
    return nk(Pf.ctid);
  }
  function ok() {
    return nk(Pf.canonicalContainerId || "_" + Pf.ctid);
  }
  function jk() {
    return Pf.rk ? Pf.rk.split("|") : [Pf.ctid];
  }
  function hk() {
    return Pf.sk ? Pf.sk.split("|") : [];
  }
  function pk() {
    var a = qk(rk()),
      b = a && a.parent;
    if (b) return qk(b);
  }
  function qk(a) {
    var b = bk();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function nk(a) {
    return fk ? kk(a) : a;
  }
  function kk(a) {
    return "siloed_" + a;
  }
  function sk(a) {
    return fk ? tk(a) : a;
  }
  function tk(a) {
    a = String(a);
    return vb(a, "siloed_") ? a.substring(7) : a;
  }
  function uk() {
    var a = !1;
    if (a) {
      var b = bk();
      if (b.siloed) {
        for (
          var c = [], d = jk().map(kk), e = hk().map(kk), f = {}, g = 0;
          g < b.siloed.length;
          f = { hg: void 0 }, g++
        )
          (f.hg = b.siloed[g]),
            !fk &&
            eb(
              f.hg.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.hg.ctid;
                };
              })(f)
            )
              ? (fk = !0)
              : c.push(f.hg);
        b.siloed = c;
      }
    }
  }
  function vk() {
    var a = bk();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = ik(), f = lk(), g = {}, k = 0;
        k < a.pending.length;
        g = { ff: void 0 }, k++
      )
        (g.ff = a.pending[k]),
          eb(
            g.ff.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.ff.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.ff.onLoad), (d = !0))
            : c.push(g.ff);
      a.pending = c;
      if (b)
        try {
          b(ok());
        } catch (m) {}
    }
  }
  function wk() {
    for (
      var a = Pf.ctid,
        b = ik(),
        c = lk(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Pf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          ic && (q.scriptElement = ic);
          jc && (q.scriptSource = jc);
          if (pk() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var u;
                b: {
                  var v,
                    t = (v = q.scriptElement) == null ? void 0 : v.src;
                  if (t) {
                    for (
                      var w = cj.C,
                        x = Ej(t),
                        y = w ? x.pathname : "" + x.hostname + x.pathname,
                        A = E.scripts,
                        C = "",
                        D = 0;
                      D < A.length;
                      ++D
                    ) {
                      var I = A[D];
                      if (
                        !(
                          I.innerHTML.length === 0 ||
                          (!w &&
                            I.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          I.innerHTML.indexOf(y) < 0
                        )
                      ) {
                        if (I.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          u = String(D);
                          break b;
                        }
                        C = String(D);
                      }
                    }
                    if (C) {
                      u = C;
                      break b;
                    }
                  }
                  u = void 0;
                }
                var J = u;
                if (J) {
                  Yj = !0;
                  r = J;
                  break a;
                }
              }
              var H = [].slice.call(document.scripts);
              r = q.scriptElement ? String(H.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = Zj(q);
          }
          var U = p ? e.destination : e.container,
            M = U[n];
          M ? (p && M.state === 0 && V(93), Object.assign(M, q)) : (U[n] = q);
        },
        e = bk(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[ok()] = {};
    vk();
  }
  function xk(a) {
    return !!bk().container[a];
  }
  function yk(a) {
    var b = bk().destination[a];
    return !!b && !!b.state;
  }
  function rk() {
    return { ctid: mk(), isDestination: ek.ze };
  }
  function zk(a) {
    var b = bk();
    (b.siloed = b.siloed || []).push(a);
  }
  function Ak() {
    var a = bk().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Bk() {
    var a = {};
    ib(bk().destination, function (b, c) {
      c.state === 0 && (a[tk(b)] = c);
    });
    return a;
  }
  function Ck(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var Dk = "/td?id=" + Pf.ctid,
    Ek = ["v", "t", "pid", "dl", "tdp"],
    Fk = ["mcc"],
    Gk = {},
    Hk = {};
  function Ik(a, b, c) {
    Hk[a] = b;
    (c === void 0 || c) && Jk(a);
  }
  function Jk(a, b) {
    if (Gk[a] === void 0 || (b === void 0 ? 0 : b)) Gk[a] = !0;
  }
  function Kk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Gk)
      .filter(function (c) {
        return Gk[c] === !0 && Hk[c] !== void 0 && (a || !Fk.includes(c));
      })
      .map(function (c) {
        var d = Hk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + Mj("https://www.googletagmanager.com") + Dk + ("" + b + "&z=0");
  }
  function Lk() {
    Object.keys(Gk).forEach(function (a) {
      Ek.indexOf(a) < 0 && (Gk[a] = !1);
    });
  }
  function Mk(a) {
    a = a === void 0 ? !1 : a;
    if (Uj && Pf.ctid) {
      var b = Kk(a);
      a ? Ec(b) : uc(b);
      Lk();
    }
  }
  function Nk() {
    Object.keys(Gk).filter(function (a) {
      return Gk[a] && !Ek.includes(a);
    }).length > 0 && Mk(!0);
  }
  var Ok = fb();
  function Pk() {
    Ok = fb();
  }
  function Qk() {
    Ik("v", "3");
    Ik("t", "t");
    Ik("pid", function () {
      return String(Ok);
    });
    vc(B, "pagehide", Nk);
    B.setInterval(Pk, 864e5);
  }
  function Rk() {
    var a = kc("google_tag_data", {});
    return (a.ics = a.ics || new Sk());
  }
  var Sk = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Sk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Va("TAGGING", 19);
    b == null ? Va("TAGGING", 18) : Tk(this, a, b === "granted", c, d, e, f, g);
  };
  Sk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Tk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Tk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && z(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        u = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = u;
      r &&
        B.setTimeout(function () {
          m[b] === u &&
            u.quiet &&
            (Va("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = Sk.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) Uk(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) Uk(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && z(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Ed: b });
  };
  var Uk = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.tk = !0);
    }
  };
  Sk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.tk) {
        d.tk = !1;
        try {
          d.Ed({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Vk = !1,
    Wk = !1,
    Xk = {},
    Yk = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((Xk.ad_storage = 1),
        (Xk.analytics_storage = 1),
        (Xk.ad_user_data = 1),
        (Xk.ad_personalization = 1),
        Xk),
      usedContainerScopedDefaults: !1,
    };
  function Zk(a) {
    var b = Rk();
    b.accessedAny = !0;
    return (z(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, Yk)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function $k(a) {
    var b = Rk();
    b.accessedAny = !0;
    return b.getConsentState(a, Yk);
  }
  function al(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = Yk.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function bl(a) {
    var b = Rk();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function cl() {
    if (!$a(10)) return !1;
    var a = Rk();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!Yk.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(Yk.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (Yk.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function dl(a, b) {
    Rk().addListener(a, b);
  }
  function el(a, b) {
    Rk().notifyListeners(a, b);
  }
  function fl(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!bl(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      dl(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function gl(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        Zk(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = z(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      dl(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : B.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var hl = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    il = !1,
    jl = !1;
  function kl() {
    !jl &&
      il &&
      (hl.some(function (a) {
        return Yk.containerScopedDefaults[a] !== 1;
      }) ||
        ll("mbc"));
    jl = !0;
  }
  function ll(a) {
    Uj && (Ik(a, "1"), Mk());
  }
  function ml(a) {
    Va("HEALTH", a);
  }
  var nl;
  try {
    nl = JSON.parse(Ta("e30"));
  } catch (a) {
    V(123), ml(2), (nl = {});
  }
  function ol() {
    return nl["0"] || "";
  }
  function pl() {
    return nl["1"] || "";
  }
  function ql() {
    var a = !1;
    return a;
  }
  function rl() {
    return nl["6"] !== !1;
  }
  function sl() {
    var a = "";
    return a;
  }
  function tl() {
    var a = !1;
    return a;
  }
  function ul() {
    var a = "";
    return a;
  }
  var vl = [O.g.O, O.g.U, O.g.N, O.g.za],
    wl,
    xl;
  function yl(a) {
    for (
      var b = a[O.g.Jb], c = Array.isArray(b) ? b : [b], d = { Ue: 0 };
      d.Ue < c.length;
      d = { Ue: d.Ue }, ++d.Ue
    )
      ib(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== O.g.Jb) {
              var k = c[e.Ue],
                m = ol(),
                n = pl();
              Wk = !0;
              Vk && Va("TAGGING", 20);
              Rk().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function zl(a) {
    kl();
    !xl && wl && ll("crc");
    xl = !0;
    var b = a[O.g.Jb];
    b && V(40);
    var c = a[O.g.tf];
    c && V(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { Ve: 0 };
      e.Ve < d.length;
      e = { Ve: e.Ve }, ++e.Ve
    )
      ib(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== O.g.Jb && g !== O.g.tf) {
              var m = d[f.Ve],
                n = Number(c),
                p = ol(),
                q = pl();
              n = n === void 0 ? 0 : n;
              Vk = !0;
              Wk && Va("TAGGING", 20);
              Rk().default(g, k, m, p, q, n, Yk);
            }
          };
        })(e)
      );
  }
  function Al(a) {
    Yk.usedContainerScopedDefaults = !0;
    var b = a[O.g.Jb];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(pl()) && !c.includes(ol())) return;
    }
    ib(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      Yk.usedContainerScopedDefaults = !0;
      Yk.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function Bl(a, b) {
    kl();
    wl = !0;
    ib(a, function (c, d) {
      Vk = !0;
      Wk && Va("TAGGING", 20);
      Rk().update(c, d, Yk);
    });
    el(b.eventId, b.priorityId);
  }
  function Cl(a) {
    a.hasOwnProperty("all") &&
      ((Yk.selectedAllCorePlatformServices = !0),
      ib(Eh, function (b) {
        Yk.corePlatformServices[b] = a.all === "granted";
        Yk.usedCorePlatformServices = !0;
      }));
    ib(a, function (b, c) {
      b !== "all" &&
        ((Yk.corePlatformServices[b] = c === "granted"),
        (Yk.usedCorePlatformServices = !0));
    });
  }
  function X(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return Zk(b);
    });
  }
  function Dl(a, b) {
    dl(a, b);
  }
  function El(a, b) {
    gl(a, b);
  }
  function Fl(a, b) {
    fl(a, b);
  }
  function Gl() {
    var a = [O.g.O, O.g.za, O.g.N];
    Rk().waitForUpdate(a, 500, Yk);
  }
  function Hl(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Rk().clearTimeout(d, void 0, Yk);
    }
    el();
  }
  var Il = !1,
    Jl = [];
  var Kl = {
      Uj: "service_worker_endpoint",
      vh: "shared_user_id",
      wh: "shared_user_id_requested",
      Ee: "shared_user_id_source",
      uf: "cookie_deprecation_label",
    },
    Ll;
  function Ml(a) {
    if (!Ll) {
      Ll = {};
      for (var b = l(Object.keys(Kl)), c = b.next(); !c.done; c = b.next())
        Ll[Kl[c.value]] = !0;
    }
    return !!Ll[a];
  }
  function Nl(a, b) {
    b = b === void 0 ? !1 : b;
    if (Ml(a)) {
      var c,
        d,
        e =
          (d = (c = kc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function Ol(a, b) {
    var c = Nl(a, !0);
    c && c.set(b);
  }
  function Pl(a) {
    var b;
    return (b = Nl(a)) == null ? void 0 : b.get();
  }
  function Ql(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = Nl(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function Rl(a, b) {
    var c = Nl(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function Sl() {
    if (Ji.pscdl !== void 0) Pl(Kl.uf) === void 0 && Ol(Kl.uf, Ji.pscdl);
    else {
      var a = function (c) {
          Ji.pscdl = c;
          Ol(Kl.uf, c);
        },
        b = function () {
          a("error");
        };
      try {
        gc.cookieDeprecationLabel
          ? (a("pending"),
            gc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function Tl(a, b) {
    b &&
      ib(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var Ul = /[A-Z]+/,
    Vl = /\s/;
  function Wl(a, b) {
    if (z(a)) {
      a = ob(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (Ul.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Vl.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function Xl(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Wl(a[d], b);
      e && (c[e.id] = e);
    }
    Yl(c);
    var f = [];
    ib(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function Yl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[Zl[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var $l = {},
    Zl =
      (($l[0] = 0),
      ($l[1] = 0),
      ($l[2] = 1),
      ($l[3] = 0),
      ($l[4] = 1),
      ($l[5] = 2),
      ($l[6] = 0),
      ($l[7] = 0),
      ($l[8] = 0),
      $l);
  var am = Number("") || 500,
    bm = {},
    cm = {},
    dm = { initialized: 11, complete: 12, interactive: 13 },
    em = {},
    fm = Object.freeze(((em[O.g.Oa] = !0), em)),
    gm =
      E.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      E.location.search.indexOf("&gtm_diagnostics=") >= 0,
    hm = void 0;
  function im(a, b) {
    if (b.length && Uj) {
      var c;
      (c = bm)[a] != null || (c[a] = []);
      cm[a] != null || (cm[a] = []);
      var d = b.filter(function (e) {
        return !cm[a].includes(e);
      });
      bm[a].push.apply(bm[a], ua(d));
      cm[a].push.apply(cm[a], ua(d));
      !hm &&
        d.length > 0 &&
        (Jk("tdc", !0),
        (hm = B.setTimeout(function () {
          Mk();
          bm = {};
          hm = void 0;
        }, am)));
    }
  }
  function jm(a, b, c) {
    if (Uj && a === "config") {
      var d,
        e = (d = Wl(b)) == null ? void 0 : d.ids;
      if (!(e && e.length > 1)) {
        var f,
          g = kc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = Vc(c.K);
        Vc(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = km(f[n], k);
            p.length && (gm && console.log(p), m.push(n));
          }
        m.length && (im(b, m), Va("TAGGING", dm[E.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function lm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function km(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, u) {
        var v;
        Sc(u) === "object" ? (v = u[r]) : Sc(u) === "array" && (v = u[r]);
        return v === void 0 ? fm[r] : v;
      },
      f = lm(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Sc(m) === "object" || Sc(m) === "array",
          q = Sc(n) === "object" || Sc(n) === "array";
        if (p && q) km(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function mm() {
    Ik(
      "tdc",
      function () {
        hm && (B.clearTimeout(hm), (hm = void 0));
        var a = [],
          b;
        for (b in bm) bm.hasOwnProperty(b) && a.push(b + "*" + bm[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var nm = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    om = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    W = function (a, b, c, d) {
      for (
        var e = l(om(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    pm = function (a) {
      for (
        var b = {}, c = om(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    qm = function (a, b, c) {
      function d(n) {
        Uc(n) &&
          ib(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = om(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    rm = function (a) {
      for (
        var b = [O.g.Zc, O.g.Vc, O.g.Wc, O.g.Xc, O.g.Yc, O.g.bd, O.g.dd],
          c = om(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    sm = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.aa = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    tm = function (a, b) {
      a.C = b;
      return a;
    },
    um = function (a, b) {
      a.P = b;
      return a;
    },
    vm = function (a, b) {
      a.j = b;
      return a;
    },
    wm = function (a, b) {
      a.H = b;
      return a;
    },
    xm = function (a, b) {
      a.aa = b;
      return a;
    },
    ym = function (a, b) {
      a.K = b;
      return a;
    },
    zm = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Am = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Bm = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Cm = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Dm = function (a) {
      return new nm(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var Em = { Kk: Number("5"), po: Number("") },
    Fm = [];
  function Gm(a) {
    Fm.push(a);
  }
  var Hm = "?id=" + Pf.ctid,
    Im = void 0,
    Jm = {},
    Km = void 0,
    Lm = new (function () {
      var a = 5;
      Em.Kk > 0 && (a = Em.Kk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    Mm = 1e3;
  function Nm(a, b) {
    var c = Im;
    if (c === void 0)
      if (b) c = $i();
      else return "";
    for (
      var d = [Mj("https://www.googletagmanager.com"), "/a", Hm],
        e = l(Fm),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, Tc: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Om() {
    Km && (B.clearTimeout(Km), (Km = void 0));
    if (Im !== void 0 && Pm) {
      var a;
      (a = Jm[Im]) || (a = Lm.j < Lm.C ? !1 : qb() - Lm.H[Lm.j % Lm.C] < 1e3);
      if (a || Mm-- <= 0) V(1), (Jm[Im] = !0);
      else {
        var b = Lm.j++ % Lm.C;
        Lm.H[b] = qb();
        var c = Nm(!0);
        uc(c);
        Pm = !1;
      }
    }
  }
  var Pm = !1;
  function Qm(a) {
    Jm[a] ||
      (a !== Im && (Om(), (Im = a)),
      (Pm = !0),
      Km || (Km = B.setTimeout(Om, 500)),
      Nm().length >= 2022 && Om());
  }
  var Rm = fb();
  function Sm() {
    Rm = fb();
  }
  function Tm() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(Rm)],
    ];
  }
  var Um = {};
  function Vm(a, b, c) {
    Tj && a !== void 0 && ((Um[a] = Um[a] || []), Um[a].push(c + b), Qm(a));
  }
  function Wm(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = Um[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete Um[b];
    return d;
  }
  function Xm(a, b) {
    var c = Wl(nk(a), !0);
    c && Ym.register(c, b);
  }
  function Zm(a, b, c, d) {
    var e = Wl(c, d.isGtmEvent);
    e && (R(50) && Oi && (d.deferrable = !0), Ym.push("event", [b, a], e, d));
  }
  function $m(a, b, c, d) {
    var e = Wl(c, d.isGtmEvent);
    e && Ym.push("get", [a, b], e, d);
  }
  function an(a) {
    var b = Wl(nk(a), !0),
      c;
    b ? (c = bn(Ym, b).j) : (c = {});
    return c;
  }
  function cn(a, b) {
    var c = Wl(nk(a), !0);
    if (c) {
      var d = Ym,
        e = Vc(b, null);
      Vc(bn(d, c).j, e);
      bn(d, c).j = e;
    }
  }
  var dn = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.aa = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    en = function (a, b, c, d) {
      this.C = qb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    fn = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    bn = function (a, b) {
      var c = b.destinationId;
      return (a.destinations[c] = a.destinations[c] || new dn());
    },
    gn = function (a, b, c, d) {
      if (d.j) {
        var e = bn(a, d.j),
          f = e.aa;
        if (f) {
          var g = Vc(c, null),
            k = Vc(e.P[d.j.id], null),
            m = Vc(e.K, null),
            n = Vc(e.j, null),
            p = Vc(a.j, null),
            q = {};
          if (Tj)
            try {
              q = Vc(ij, null);
            } catch (t) {
              V(72);
            }
          var r = d.j.prefix,
            u = function (t) {
              Vm(d.messageContext.eventId, r, t);
            },
            v = Dm(
              Cm(
                Bm(
                  Am(
                    zm(
                      xm(
                        wm(
                          ym(
                            vm(
                              um(
                                tm(
                                  new sm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (u) {
                        var t = u;
                        u = void 0;
                        t("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (u) {
                      var t = u;
                      u = void 0;
                      t("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Vm(d.messageContext.eventId, r, "1"),
              jm(d.type, d.j.id, v),
              f(d.j.id, b, d.C, v);
          } catch (t) {
            Vm(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  fn.prototype.register = function (a, b, c) {
    var d = bn(this, a);
    d.status !== 3 &&
      ((d.aa = b), (d.status = 3), c && (Vc(d.j, c), (d.j = c)), this.flush());
  };
  fn.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (bn(this, c).status === 1 &&
        ((bn(this, c).status = 2), this.push("require", [{}], c, {})),
      bn(this, c).H && (d.deferrable = !1));
    this.commands.push(new en(a, c, b, d));
    d.deferrable || this.flush();
  };
  fn.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { Jc: void 0, Kh: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || bn(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (bn(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            ib(f.args[0], function (r, u) {
              Vc(yb(r, u), b.j);
            });
            break;
          case "config":
            var k = bn(this, g);
            e.Jc = {};
            ib(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Vc(yb(u, v), r.Jc);
                };
              })(e)
            );
            var m = !!e.Jc[O.g.nc];
            delete e.Jc[O.g.nc];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || gn(this, O.g.ba, e.Jc, f);
            k.H = !0;
            n ? Vc(e.Jc, k.K) : (Vc(e.Jc, k.P[g.id]), V(70));
            d = !0;
            break;
          case "event":
            e.Kh = {};
            ib(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Vc(yb(u, v), r.Kh);
                };
              })(e)
            );
            gn(this, f.args[1], e.Kh, f);
            break;
          case "get":
            var p = {},
              q = ((p[O.g.xb] = f.args[0]), (p[O.g.Mb] = f.args[1]), p);
            gn(this, O.g.Ya, q, f);
        }
        this.commands.shift();
        hn(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var hn = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = bn(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    Ym = new fn();
  var jn = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    kn = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var ln = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    mn = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var nn, on;
  a: {
    for (var pn = ["CLOSURE_FLAGS"], qn = Aa, rn = 0; rn < pn.length; rn++)
      if (((qn = qn[pn[rn]]), qn == null)) {
        on = null;
        break a;
      }
    on = qn;
  }
  var sn = on && on[610401301];
  nn = sn != null ? sn : !1;
  function tn() {
    var a = Aa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var un,
    vn = Aa.navigator;
  un = vn ? vn.userAgentData || null : null;
  function wn(a) {
    return nn
      ? un
        ? un.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function xn(a) {
    return tn().indexOf(a) != -1;
  }
  function yn() {
    return nn ? !!un && un.brands.length > 0 : !1;
  }
  function zn() {
    return yn() ? !1 : xn("Opera");
  }
  function An() {
    return xn("Firefox") || xn("FxiOS");
  }
  function Bn() {
    return yn()
      ? wn("Chromium")
      : ((xn("Chrome") || xn("CriOS")) && !(yn() ? 0 : xn("Edge"))) ||
          xn("Silk");
  }
  var Cn = function (a) {
    Cn[" "](a);
    return a;
  };
  Cn[" "] = function () {};
  var Dn = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    En = /#|$/,
    Fn = function (a, b) {
      var c = a.search(En),
        d = Dn(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Gn = /[?&]($|#)/,
    Hn = function (a, b, c) {
      for (
        var d, e = a.search(En), f = 0, g, k = [];
        (g = Dn(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Gn, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var u = d.indexOf("?"),
          v;
        u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
        q = [d.slice(0, u), v, d.slice(r)];
        var t = q[1];
        q[1] = p ? (t ? t + "&" + p : p) : t;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function In() {
    return nn ? !!un && !!un.platform : !1;
  }
  function Jn() {
    return xn("iPhone") && !xn("iPod") && !xn("iPad");
  }
  function Kn() {
    Jn() || xn("iPad") || xn("iPod");
  }
  zn();
  yn() || xn("Trident") || xn("MSIE");
  xn("Edge");
  !xn("Gecko") ||
    (tn().toLowerCase().indexOf("webkit") != -1 && !xn("Edge")) ||
    xn("Trident") ||
    xn("MSIE") ||
    xn("Edge");
  tn().toLowerCase().indexOf("webkit") != -1 && !xn("Edge") && xn("Mobile");
  In() || xn("Macintosh");
  In() || xn("Windows");
  (In() ? un.platform === "Linux" : xn("Linux")) || In() || xn("CrOS");
  In() || xn("Android");
  Jn();
  xn("iPad");
  xn("iPod");
  Kn();
  tn().toLowerCase().indexOf("kaios");
  var Ln = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Cn(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Mn = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Nn = function (a) {
      if (B.top == B) return 0;
      if (a === void 0 ? 0 : a) {
        var b = B.location.ancestorOrigins;
        if (b) return b[b.length - 1] == B.location.origin ? 1 : 2;
      }
      return Ln(B.top) ? 1 : 2;
    },
    On = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    Pn = function () {
      for (var a = B, b = a; a && a != a.parent; )
        (a = a.parent), Ln(a) && (b = a);
      return b;
    };
  function Qn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = On(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = dc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        mn(e, "load", f);
        mn(e, "error", f);
      };
      ln(e, "load", f);
      ln(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Sn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Mn(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Rn(c, b);
    },
    Rn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Qn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var Tn = function () {
    this.P = this.P;
    this.C = this.C;
  };
  Tn.prototype.P = !1;
  Tn.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Ua());
  };
  Tn.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  Tn.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  Tn.prototype.Ua = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function Un(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  var Vn = function (a, b) {
    b = b === void 0 ? {} : b;
    Tn.call(this);
    this.j = null;
    this.aa = {};
    this.dg = 0;
    this.K = null;
    this.H = a;
    var c;
    this.xe = (c = b.un) != null ? c : 500;
    var d;
    this.Ic = (d = b.Xn) != null ? d : !1;
  };
  ra(Vn, Tn);
  Vn.prototype.Ua = function () {
    this.aa = {};
    this.K && (mn(this.H, "message", this.K), delete this.K);
    delete this.aa;
    delete this.H;
    delete this.j;
    Tn.prototype.Ua.call(this);
  };
  var Xn = function (a) {
    return typeof a.H.__tcfapi === "function" || Wn(a) != null;
  };
  Vn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Ic },
      d = kn(function () {
        return a(c);
      }),
      e = 0;
    this.xe !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.xe));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Un(c)),
          (c.internalBlockOnErrors = b.Ic),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Yn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Vn.prototype.removeEventListener = function (a) {
    a && a.listenerId && Yn(this, "removeEventListener", null, a.listenerId);
  };
  var $n = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = Zn(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && Zn(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? Zn(a.purpose.legitimateInterests, b) &&
                Zn(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Zn = function (a, b) {
      return !(!a || !a[b]);
    },
    Yn = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (Wn(a)) {
        io(a);
        var g = ++a.dg;
        a.aa[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*"
          );
        }
      } else c({}, !1);
    },
    Wn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    io = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.aa[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        ln(a.H, "message", b);
      }
    },
    jo = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Un(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (Sn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var ko = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function lo() {
    var a = Ji.tcf || {};
    return (Ji.tcf = a);
  }
  var mo = function () {
    return new Vn(B, { un: -1 });
  };
  function no() {
    var a = lo(),
      b = mo();
    Xn(b) && !oo() && !po() && V(124);
    if (!a.active && Xn(b)) {
      oo() &&
        ((a.active = !0),
        (a.uc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (Rk().active = !0),
        (a.tcString = "tcunavailable"));
      Gl();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            qo(a), Hl([O.g.O, O.g.za, O.g.N]), (Rk().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            po() && (a.active = !0),
            !ro(c) || oo() || po())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in ko) ko.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (ro(c)) {
              var g = {},
                k;
              for (k in ko)
                if (ko.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { fm: !0 };
                    p = p === void 0 ? {} : p;
                    m = jo(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.nk
                        : (p.nk || n.gdprApplies !== void 0 || p.fm) &&
                          (p.nk ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? $n(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = $n(c, k, ko[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.uc = d;
              var q = {},
                r = ((q[O.g.O] = a.uc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (Hl([O.g.O, O.g.za, O.g.N]), (Rk().active = !0))
                : ((r[O.g.za] = a.uc["3"] && a.uc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[O.g.N] = a.uc["1"] && a.uc["7"] ? "granted" : "denied")
                    : Hl([O.g.N]),
                  Bl(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: so() || "",
                    }
                  ));
            }
          } else Hl([O.g.O, O.g.za, O.g.N]);
        });
      } catch (c) {
        qo(a), Hl([O.g.O, O.g.za, O.g.N]), (Rk().active = !0);
      }
    }
  }
  function qo(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function ro(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function oo() {
    return B.gtag_enable_tcf_support === !0;
  }
  function po() {
    return lo().enableAdvertiserConsentMode === !0;
  }
  function so() {
    var a = lo();
    if (a.active) return a.tcString;
  }
  function to() {
    var a = lo();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function uo(a) {
    if (!ko.hasOwnProperty(String(a))) return !0;
    var b = lo();
    return b.active && b.uc ? !!b.uc[String(a)] : !0;
  }
  var vo = [O.g.O, O.g.U, O.g.N, O.g.za],
    wo = {},
    xo = ((wo[O.g.O] = 1), (wo[O.g.U] = 2), wo);
  function yo(a) {
    if (a === void 0) return 0;
    switch (W(a, O.g.ma)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function zo(a) {
    if (pl() === "US-CO" && gc.globalPrivacyControl === !0) return !1;
    var b = yo(a);
    if (b === 3) return !1;
    switch ($k(O.g.za)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Ao() {
    return cl() || !Zk(O.g.O) || !Zk(O.g.U);
  }
  function Bo() {
    var a = {},
      b;
    for (b in xo) xo.hasOwnProperty(b) && (a[xo[b]] = $k(b));
    return "G1" + Ie(a[1] || 0) + Ie(a[2] || 0);
  }
  var Co = {},
    Do =
      ((Co[O.g.O] = 0), (Co[O.g.U] = 1), (Co[O.g.N] = 2), (Co[O.g.za] = 3), Co);
  function Eo(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Fo(a) {
    for (var b = "1", c = 0; c < vo.length; c++) {
      var d = b,
        e,
        f = vo[c],
        g = Yk.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Do.hasOwnProperty(g) ? 12 | Do[g] : 8;
      var k = Rk();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | Eo(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (Eo(m.declare) << 4) | (Eo(m.default) << 2) | Eo(m.update)
          ]);
    }
    var n = b,
      p = (pl() === "US-CO" && gc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (cl() ? 1 : 0) << 2,
      r = yo(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (Yk.containerScopedDefaults.ad_storage << 4) |
          (Yk.containerScopedDefaults.analytics_storage << 2) |
          Yk.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((Yk.usedContainerScopedDefaults ? 1 : 0) << 2) |
          Yk.containerScopedDefaults.ad_personalization
      ]);
  }
  function Go() {
    if (!Zk(O.g.N)) return "-";
    for (
      var a = Object.keys(Eh), b = al(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += Eh[f]);
    }
    (Yk.usedCorePlatformServices ? Yk.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Ho() {
    return rl() || ((oo() || po()) && to() === "1") ? "1" : "0";
  }
  function Io() {
    return (rl() ? !0 : !(!oo() && !po()) && to() === "1") || !Zk(O.g.N);
  }
  function Jo() {
    var a = "0",
      b = "0",
      c;
    var d = lo();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = lo();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    rl() && (k |= 1);
    to() === "1" && (k |= 2);
    oo() && (k |= 4);
    var m;
    var n = lo();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    Rk().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Ko() {
    return pl() === "US-CO";
  }
  function Lo() {
    var a = !1;
    return a;
  }
  var Mo = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function No(a) {
    a = a === void 0 ? {} : a;
    var b = Pf.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Pf.ctid,
        gn: Ii.Ce,
        jn: Ii.th,
        Im: ek.ze ? 2 : 1,
        pn: a.Ak,
        Je: Pf.canonicalContainerId,
      };
    c.Je !== a.ya && (c.ya = a.ya);
    var d = pk();
    c.Tm = d ? d.canonicalContainerId : void 0;
    Pi ? ((c.og = Mo[b]), c.og || (c.og = 0)) : (c.og = Ti ? 13 : 10);
    cj.C
      ? ((c.mg = 0), (c.Kl = 2))
      : Ri
      ? (c.mg = 1)
      : Lo()
      ? (c.mg = 2)
      : (c.mg = 3);
    var e = {};
    e[6] = fk;
    cj.j === 2 ? (e[7] = !0) : cj.j === 1 && (e[2] = !0);
    if (jc) {
      var f = yj(Ej(jc), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.Nl = e;
    var g = a.fg,
      k;
    var m = c.og,
      n = c.mg;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Ke(1, 1) + He((m << 2) | n)));
    var p = c.Kl,
      q = "4" + k + (p ? "" + Ke(2, 1) + He(p) : ""),
      r,
      u = c.jn;
    r = u && Je.test(u) ? "" + Ke(3, 2) + u : "";
    var v,
      t = c.gn;
    v = t ? "" + Ke(4, 1) + He(t) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        A = y[0].toUpperCase();
      if (A !== "GTM" && A !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Ke(5, 3) + He(1 + C.length) + (c.Im || 0) + C;
      }
    } else w = "";
    var D = c.pn,
      I = c.Je,
      J = c.ya,
      H = c.mo,
      U =
        q +
        r +
        v +
        w +
        (D ? "" + Ke(6, 1) + He(D) : "") +
        (I ? "" + Ke(7, 3) + He(I.length) + I : "") +
        (J ? "" + Ke(8, 3) + He(J.length) + J : "") +
        (H ? "" + Ke(9, 3) + He(H.length) + H : ""),
      M;
    var aa = c.Nl;
    aa = aa === void 0 ? {} : aa;
    for (
      var da = [], T = l(Object.keys(aa)), S = T.next();
      !S.done;
      S = T.next()
    ) {
      var N = S.value;
      da[Number(N)] = aa[N];
    }
    if (da.length) {
      var la = Ke(10, 3),
        ia;
      if (da.length === 0) ia = He(0);
      else {
        for (var ea = [], sa = 0, Ma = !1, za = 0; za < da.length; za++) {
          Ma = !0;
          var Sa = za % 6;
          da[za] && (sa |= 1 << Sa);
          Sa === 5 && (ea.push(He(sa)), (sa = 0), (Ma = !1));
        }
        Ma && ea.push(He(sa));
        ia = ea.join("");
      }
      var jb = ia;
      M = "" + la + He(jb.length) + jb;
    } else M = "";
    var lc = c.Tm;
    return U + M + (lc ? "" + Ke(11, 3) + He(lc.length) + lc : "");
  }
  function Oo(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function Po(a) {
    return a.origin !== "null";
  }
  function Qo(a, b, c, d) {
    var e;
    if (Ro(d)) {
      for (
        var f = [], g = String(b || So()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function To(a, b, c, d, e) {
    if (Ro(e)) {
      var f = Uo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Vo(
          f,
          function (g) {
            return g.Tl;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Vo(
          f,
          function (g) {
            return g.Vm;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Wo(a, b, c, d) {
    var e = So(),
      f = window;
    Po(f) && (f.document.cookie = a);
    var g = So();
    return e !== g || (c !== void 0 && Qo(b, g, !1, d).indexOf(c) >= 0);
  }
  function Xo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!Ro(c.Hb)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Yo(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Mm);
    g = e(g, "samesite", c.kn);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Zo(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var v = p[u] !== "none" ? p[u] : void 0,
          t = e(g, "domain", v);
        t = f(t, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!$o(v, c.path) && Wo(t, a, b, c.Hb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return $o(n, c.path) ? 1 : Wo(g, a, b, c.Hb) ? 0 : 1;
  }
  function ap(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Xo(a, b, c);
  }
  function Vo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Uo(a, b, c) {
    for (var d = [], e = Qo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            Tl: Number(n[0]) || 1,
            Vm: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Yo(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var bp = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    cp = /(^|\.)doubleclick\.net$/i;
  function $o(a, b) {
    return (
      a !== void 0 &&
      (cp.test(window.document.location.hostname) || (b === "/" && bp.test(a)))
    );
  }
  function dp(a) {
    if (!a) return 1;
    var b = a;
    $a(9) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function ep(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function fp(a, b) {
    var c = "" + dp(a),
      d = ep(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var So = function () {
      return Po(window) ? window.document.cookie : "";
    },
    Ro = function (a) {
      return a && $a(10)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return bl(b) && Zk(b);
          })
        : !0;
    },
    Zo = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      cp.test(e) || bp.test(e) || a.push("none");
      return a;
    };
  function gp(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (Oo(a) & 2147483647)) : String(b);
  }
  function hp(a) {
    return [gp(a), Math.round(qb() / 1e3)].join(".");
  }
  function ip(a, b, c, d, e) {
    var f = dp(b);
    return To(a, f, ep(c), d, e);
  }
  function jp(a, b, c, d) {
    return [b, fp(c, d), a].join(".");
  }
  function kp(a, b, c, d) {
    var e,
      f = Number(a.Fb != null ? a.Fb : void 0);
    f !== 0 && (e = new Date((b || qb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Hb: d,
    };
  }
  var lp;
  function mp() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = np,
      d = op,
      e = pp();
    if (!e.init) {
      vc(E, "mousedown", a);
      vc(E, "keyup", a);
      vc(E, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function qp(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    pp().decorators.push(f);
  }
  function rp(a, b, c) {
    for (var d = pp().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && tb(e, g.callback());
      }
    }
    return e;
  }
  function pp() {
    var a = kc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var sp = /(.*?)\*(.*?)\*(.*)/,
    tp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    up = /^(?:www\.|m\.|amp\.)+/,
    vp = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function wp(a) {
    var b = vp.exec(a);
    if (b) return { ei: b[1], query: b[2], fragment: b[3] };
  }
  function xp(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function yp(a, b) {
    var c = [
        gc.userAgent,
        new Date().getTimezoneOffset(),
        gc.userLanguage || gc.language,
        Math.floor(qb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = lp)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    lp = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ lp[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function zp(a) {
    return function (b) {
      var c = Ej(B.location.href),
        d = c.search.replace("?", ""),
        e = xj(d, "_gl", !1, !0) || "";
      b.query = Ap(e) || {};
      var f = yj(c, "fragment"),
        g;
      var k = -1;
      if (vb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = Ap(g || "") || {};
      a && Bp(c, d, f);
    };
  }
  function Cp(a, b) {
    var c = xp(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function Bp(a, b, c) {
    function d(g, k) {
      var m = Cp("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (fc && fc.replaceState) {
      var e = xp("_gl");
      if (e.test(b) || e.test(c)) {
        var f = yj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        fc.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function Dp(a, b) {
    var c = zp(!!b),
      d = pp();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (tb(e, f.query), a && tb(e, f.fragment));
    return e;
  }
  var Ap = function (a) {
    try {
      var b = Ep(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Ta(d[e + 1]);
          c[f] = g;
        }
        Va("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Va("TAGGING", 8);
    }
  };
  function Ep(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = sp.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === yp(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Va("TAGGING", 7);
      }
    }
  }
  function Fp(a, b, c, d, e) {
    function f(p) {
      p = Cp(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = wp(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.ei + k + m;
  }
  function Gp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var u in n)
          if (n.hasOwnProperty(u)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          t = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (t.push(w), t.push(Ra(String(x))));
          }
        var y = t.join("*");
        v = ["1", yp(y), y].join("*");
        d
          ? ($a(4) || $a(1) || !p) && Hp("_gl", v, a, p, q)
          : Ip("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = rp(b, 1, d),
      f = rp(b, 2, d),
      g = rp(b, 4, d),
      k = rp(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    $a(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Jp(m, k[m], a);
  }
  function Jp(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Ip(a, b, c)
      : c.tagName.toLowerCase() === "form" && Hp(a, b, c);
  }
  function Ip(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !$a(6) || d)) {
        var k = B.location.href,
          m = wp(c.href),
          n = wp(k);
        g = !(m && n && m.ei === n.ei && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Fp(a, b, c.href, d, e);
      Xb.test(p) && (c.href = p);
    }
  }
  function Hp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Fp(a, b, c.action, d, e);
          Xb.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function np(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Gp(e, e.hostname);
      }
    } catch (g) {}
  }
  function op(a) {
    try {
      if (a.action) {
        var b = yj(Ej(a.action), "host");
        Gp(a, b);
      }
    } catch (c) {}
  }
  function Kp(a, b, c, d) {
    mp();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    qp(a, b, e, d, !1);
    e === 2 && Va("TAGGING", 23);
    d && Va("TAGGING", 24);
  }
  function Lp(a, b) {
    mp();
    qp(a, [Aj(B.location, "host", !0)], b, !0, !0);
  }
  function Mp() {
    var a = E.location.hostname,
      b = tp.exec(E.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(up, ""),
      m = e.replace(up, "");
    return k === m || wb(k, "." + m);
  }
  function Np(a, b) {
    return a === !1 ? !1 : a || b || Mp();
  }
  var Op = ["1"],
    Pp = {},
    Qp = {};
  function Rp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = Sp(a.prefix);
    if (!Pp[c])
      if (Tp(c, a.path, a.domain)) {
        var d = Qp[Sp(a.prefix)];
        Up(a, d ? d.id : void 0, d ? d.Yh : void 0);
      } else {
        var e = Fj("auiddc");
        if (e) Va("TAGGING", 17), (Pp[c] = e);
        else if (b) {
          var f = Sp(a.prefix),
            g = hp();
          Vp(f, g, a);
          Tp(c, a.path, a.domain);
        }
      }
  }
  function Up(a, b, c) {
    var d = Sp(a.prefix),
      e = Pp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(qb() / 1e3)));
          Vp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function Vp(a, b, c, d) {
    var e = jp(b, "1", c.domain, c.path),
      f = kp(c, d);
    f.Hb = Wp();
    ap(a, e, f);
  }
  function Tp(a, b, c) {
    var d = ip(a, b, c, Op, Wp());
    if (!d) return !1;
    Xp(a, d);
    return !0;
  }
  function Xp(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((Pp[a] = c.slice(0, 2).join(".")),
        (Qp[a] = { id: c.slice(2, 4).join("."), Yh: Number(c[4]) || 0 }))
      : c.length === 3
      ? (Qp[a] = { id: c.slice(0, 2).join("."), Yh: Number(c[2]) || 0 })
      : (Pp[a] = b);
  }
  function Sp(a) {
    return (a || "_gcl") + "_au";
  }
  function Yp(a) {
    function b() {
      Zk(c) && a();
    }
    var c = Wp();
    fl(function () {
      b();
      Zk(c) || gl(b, c);
    }, c);
  }
  function Zp(a) {
    var b = Dp(!0),
      c = Sp(a.prefix);
    Yp(function () {
      var d = b[c];
      if (d) {
        Xp(c, d);
        var e = Number(Pp[c].split(".")[1]) * 1e3;
        if (e) {
          Va("TAGGING", 16);
          var f = kp(a, e);
          f.Hb = Wp();
          var g = jp(d, "1", a.domain, a.path);
          ap(c, g, f);
        }
      }
    });
  }
  function $p(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = ip(a, e.path, e.domain, Op, Wp());
      k && (g[a] = k);
      return g;
    };
    Yp(function () {
      Kp(f, b, c, d);
    });
  }
  function Wp() {
    return ["ad_storage", "ad_user_data"];
  }
  var aq = {},
    bq =
      ((aq.k = { La: /^[\w-]+$/ }),
      (aq.b = { La: /^[\w-]+$/, li: !0 }),
      (aq.i = { La: /^[1-9]\d*$/ }),
      (aq.u = { La: /^[1-9]\d*$/ }),
      aq);
  var cq = {},
    fq =
      ((cq[5] = { Mk: { 2: dq }, Ch: ["k", "i", "b", "u"] }),
      (cq[4] = { Mk: { 2: dq, GCL: eq }, Ch: ["k", "i", "b"] }),
      cq);
  function gq(a) {
    var b = fq[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.Mk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function dq(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = fq[b];
      if (e) {
        for (
          var f = e.Ch, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = bq[n];
              q && (q.li ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function hq(a, b) {
    var c = fq[5];
    if (c) {
      for (var d = [], e = l(c.Ch), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = bq[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.li && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function eq(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var iq = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function jq(a) {
    if (fq[5]) {
      for (
        var b = [],
          c = Qo(a, void 0, void 0, iq.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = gq(e.value);
        f && (kq(f), b.push(f));
      }
      return b;
    }
  }
  function lq(a, b, c, d) {
    c = c || {};
    var e = fp(c.domain, c.path),
      f = hq(b, e);
    if (f) {
      var g = kp(c, d, void 0, iq.get(5));
      ap(a, f, g);
    }
  }
  function mq(a, b) {
    var c = b.La;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function kq(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Le: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Le = bq[e];
      d.Le
        ? d.Le.li
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return mq(k, g.Le);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && mq(f, d.Le)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function nq(a) {
    for (
      var b = [],
        c = E.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          si: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function oq(a, b) {
    var c = nq(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].si] || (d[c[e].si] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, W: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].si].push(g);
      }
    }
    return d;
  }
  var pq = ["ad_storage", "ad_user_data"];
  function qq() {
    var a = rq();
    if (a.error) return a;
    if (!a.value) return { error: 2 };
    var b;
    try {
      b = a.value.gclid;
    } catch (c) {
      return { error: 11 };
    }
    return b ? { value: b } : { value: void 0 };
  }
  function rq() {
    if (!Zk(pq)) return { error: 3 };
    try {
      if (!B.localStorage) return { error: 1 };
    } catch (d) {
      return { error: 14 };
    }
    var a = { schema: "gcl", version: 1 },
      b = void 0;
    try {
      b = B.localStorage.getItem("_gcl_ls");
    } catch (d) {
      return { error: 13 };
    }
    try {
      if (b) {
        var c = JSON.parse(b);
        if (c && typeof c === "object") a = c;
        else return { error: 12 };
      }
    } catch (d) {
      return { error: 8 };
    }
    if (a.schema !== "gcl") return { error: 4 };
    if (a.version !== 1) return { error: 5 };
    try {
      sq(a);
    } catch (d) {
      return { error: 8 };
    }
    return { value: a, error: 0 };
  }
  function sq(a) {
    if (a && typeof a === "object")
      if ("expires" in a && "value" in a) {
        var b;
        typeof a.expires === "number"
          ? (b = a.expires)
          : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
        (!isNaN(b) && Date.now() <= b) || ((a.value = null), (a.error = 9));
      } else
        for (var c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
          sq(a[d.value]);
  }
  var tq = /^\w+$/,
    uq = /^[\w-]+$/,
    vq = {},
    wq =
      ((vq.aw = "_aw"),
      (vq.dc = "_dc"),
      (vq.gf = "_gf"),
      (vq.gp = "_gp"),
      (vq.gs = "_gs"),
      (vq.ha = "_ha"),
      (vq.ag = "_ag"),
      (vq.gb = "_gb"),
      vq);
  function xq() {
    return ["ad_storage", "ad_user_data"];
  }
  function yq(a) {
    return !$a(10) || Zk(a);
  }
  function zq(a, b) {
    function c() {
      var d = yq(b);
      d && a();
      return d;
    }
    fl(function () {
      c() || gl(c, b);
    }, b);
  }
  function Aq(a) {
    return Bq(a).map(function (b) {
      return b.W;
    });
  }
  function Cq(a) {
    return Dq(a)
      .filter(function (b) {
        return b.W;
      })
      .map(function (b) {
        return b.W;
      });
  }
  function Dq(a) {
    var b = Eq(a.prefix),
      c = Fq("gb", b),
      d = Fq("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Bq(c).map(e("gb")),
      g = Gq(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Hq(a, b, c, d, e, f) {
    var g = eb(a, function (k) {
      return k.W === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Jd = f)),
        (g.labels = Iq(g.labels || [], e || [])))
      : a.push({ version: b, W: c, timestamp: d, labels: e, Jd: f });
  }
  function Gq(a) {
    for (
      var b = jq(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = Jq(f);
      if (n) {
        var p = void 0;
        $a(11) && (p = f.u);
        Hq(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function Bq(a) {
    for (
      var b = [], c = Qo(a, E.cookie, void 0, xq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Kq(e.value);
      if (f != null) {
        var g = f;
        Hq(b, g.version, g.W, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Lq(b);
  }
  function Mq(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function Nq(a, b) {
    var c = eb(a, function (d) {
      return d.W === b.W;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Jd = b.Jd)),
        (c.Pa = c.Pa
          ? b.Pa
            ? c.timestamp < b.timestamp
              ? b.Pa
              : c.Pa
            : c.Pa || 0
          : b.Pa || 0),
        (c.labels = Mq(c.labels || [], b.labels || [])),
        (c.Sc = Mq(c.Sc || [], b.Sc || [])))
      : a.push(b);
  }
  function Oq() {
    var a = qq();
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(uq)
        ? {
            version: "",
            W: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Pa: c.linkDecorationSource || 0,
            Sc: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function Pq(a) {
    for (
      var b = [], c = Qo(a, E.cookie, void 0, xq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Kq(e.value);
      f != null && ((f.Jd = void 0), (f.Pa = 0), (f.Sc = [1]), Nq(b, f));
    }
    var g = Oq();
    g && ((g.Jd = void 0), (g.Pa = g.Pa || 0), (g.Sc = g.Sc || [2]), Nq(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Lq(b);
  }
  function Iq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Eq(a) {
    return a && typeof a === "string" && a.match(tq) ? a : "_gcl";
  }
  function Qq(a, b, c) {
    var d = Ej(a),
      e = yj(d, "query", !1, void 0, "gclsrc"),
      f = { value: yj(d, "query", !1, void 0, "gclid"), Pa: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = xj(g, "gclid", !1)), (f.Pa = 3));
      e || (e = xj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function Rq(a, b) {
    var c = Ej(a),
      d = yj(c, "query", !1, void 0, "gclid"),
      e = yj(c, "query", !1, void 0, "gclsrc"),
      f = yj(c, "query", !1, void 0, "wbraid");
    f = Cb(f);
    var g = yj(c, "query", !1, void 0, "gbraid"),
      k = yj(c, "query", !1, void 0, "gad_source"),
      m = yj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || xj(n, "gclid", !1);
      e = e || xj(n, "gclsrc", !1);
      f = f || xj(n, "wbraid", !1);
      g = g || xj(n, "gbraid", !1);
      k = k || xj(n, "gad_source", !1);
    }
    return Sq(d, e, m, f, g, k);
  }
  function Tq() {
    return Rq(B.location.href, !0);
  }
  function Sq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(uq))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && uq.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && uq.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && uq.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function Uq(a) {
    var b = Tq();
    if ($a(7)) {
      for (
        var c = !0, d = l(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && ((b = Rq(B.document.referrer, !1)), (b.gad_source = void 0));
    }
    Vq(b, !1, a);
  }
  function Wq(a) {
    Uq(a);
    var b = Qq(B.location.href, !0, !1);
    $a(7) && !b.length && (b = Qq(B.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = qb(),
        e = kp(a, d, !0),
        f = xq(),
        g = function () {
          if (yq(f) && e.expires !== void 0) {
            var k = {
                value: {
                  value: c.value,
                  creationTimeMs: d,
                  linkDecorationSource: c.Pa,
                },
                expires: Number(e.expires),
              },
              m = rq();
            if (!m.error && m.value)
              a: if (((m.value.gclid = k), !m.error && m.value)) {
                var n = m.value,
                  p;
                try {
                  p = JSON.stringify(n);
                } catch (q) {
                  break a;
                }
                try {
                  B.localStorage.setItem("_gcl_ls", p);
                } catch (q) {}
              }
          }
        };
      fl(function () {
        g();
        yq(f) || gl(g, f);
      }, f);
    }
  }
  function Vq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Eq(c.prefix),
      g = d || qb(),
      k = Math.round(g / 1e3),
      m = xq(),
      n = !1,
      p = !1,
      q = function () {
        if (yq(m)) {
          var r = kp(c, g, !0);
          r.Hb = m;
          for (
            var u = function (H, U) {
                var M = Fq(H, f);
                M && (ap(M, U, r), H !== "gb" && (n = !0));
              },
              v = function (H) {
                var U = ["GCL", k, H];
                e.length > 0 && U.push(e.join("."));
                return U.join(".");
              },
              t = l(["aw", "dc", "gf", "ha", "gp"]),
              w = t.next();
            !w.done;
            w = t.next()
          ) {
            var x = w.value;
            a[x] && u(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              A = Fq("gb", f);
            (!b &&
              Bq(A).some(function (H) {
                return H.W === y && H.labels && H.labels.length > 0;
              })) ||
              u("gb", v(y));
          }
        }
        if (!p && a.gbraid && yq("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = Fq("ag", f);
          if (
            b ||
            !Gq(D).some(function (H) {
              return H.W === C && H.labels && H.labels.length > 0;
            })
          ) {
            var I = {},
              J = ((I.k = C), (I.i = "" + k), (I.b = e), I);
            lq(D, J, c, g);
          }
        }
        Xq(a, f, g, c);
      };
    fl(function () {
      q();
      yq(m) || gl(q, m);
    }, m);
  }
  function Xq(a, b, c, d) {
    if (a.gad_source !== void 0 && yq("ad_storage")) {
      if ($a(5)) {
        var e = Ic();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = Fq("gs", b);
      if (g) {
        var k = Math.round((qb() - (Hc() || 0)) / 1e3),
          m;
        if ($a(11)) {
          var n,
            p = String,
            q = B.location.hostname,
            r = B.location.pathname,
            u = (q = Gj(q));
          u.split(".").length > 2 &&
            (u = u.replace(
              /^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./,
              ""
            ));
          q = u;
          r = Gj(r);
          var v = r.split(";")[0];
          v = v.replace(/\/(ar|slp|web|index)?\/?$/, "");
          n = p(Oo(("" + q + v).toLowerCase()));
          var t = {};
          m = ((t.k = f), (t.i = "" + k), (t.u = n), t);
        } else {
          var w = {};
          m = ((w.k = f), (w.i = "" + k), w);
        }
        lq(g, m, d, c);
      }
    }
  }
  function Yq(a, b) {
    var c = Dp(!0);
    zq(function () {
      for (var d = Eq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (wq[f] !== void 0) {
          var g = Fq(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(Zq(k), qb()),
              n;
            b: {
              for (
                var p = m, q = Qo(g, E.cookie, void 0, xq()), r = 0;
                r < q.length;
                ++r
              )
                if (Zq(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var u = kp(b, m, !0);
              u.Hb = xq();
              ap(g, k, u);
            }
          }
        }
      }
      Vq(Sq(c.gclid, c.gclsrc), !1, b);
    }, xq());
  }
  function $q(a) {
    var b = ["ag"],
      c = Dp(!0),
      d = Eq(a.prefix);
    zq(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = Fq(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = gq(g);
              if (k) {
                var m = Jq(k);
                m || (m = qb());
                var n;
                a: {
                  for (var p = m, q = jq(f), r = 0; r < q.length; ++r)
                    if (Jq(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                lq(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"]
    );
  }
  function Fq(a, b) {
    var c = wq[a];
    if (c !== void 0) return b + c;
  }
  function Zq(a) {
    return ar(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Jq(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Kq(a) {
    var b = ar(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          W: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function ar(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !uq.test(a[2])
      ? []
      : a;
  }
  function br(a, b, c, d, e) {
    if (Array.isArray(b) && Po(B)) {
      var f = Eq(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Fq(a[m], f);
            if (n) {
              var p = Qo(n, E.cookie, void 0, xq());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      zq(function () {
        Kp(g, b, c, d);
      }, xq());
    }
  }
  function cr(a, b, c, d) {
    if (Array.isArray(a) && Po(B)) {
      var e = ["ag"],
        f = Eq(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = Fq(e[m], f);
            if (!n) return {};
            var p = jq(n);
            if (p.length) {
              var q = p.sort(function (r, u) {
                return Jq(u) - Jq(r);
              })[0];
              k[n] = hq(q);
            }
          }
          return k;
        };
      zq(
        function () {
          Kp(g, a, b, c);
        },
        ["ad_storage"]
      );
    }
  }
  function Lq(a) {
    return a.filter(function (b) {
      return uq.test(b.W);
    });
  }
  function dr(a, b) {
    if (Po(B)) {
      for (var c = Eq(b.prefix), d = {}, e = 0; e < a.length; e++)
        wq[a[e]] && (d[a[e]] = wq[a[e]]);
      zq(function () {
        ib(d, function (f, g) {
          var k = Qo(c + g, E.cookie, void 0, xq());
          k.sort(function (u, v) {
            return Zq(v) - Zq(u);
          });
          if (k.length) {
            var m = k[0],
              n = Zq(m),
              p = ar(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = ar(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            Vq(q, !0, b, n, p);
          }
        });
      }, xq());
    }
  }
  function er(a) {
    var b = ["ag"],
      c = ["gbraid"];
    zq(
      function () {
        for (var d = Eq(a.prefix), e = 0; e < b.length; ++e) {
          var f = Fq(b[e], d);
          if (!f) break;
          var g = jq(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return Jq(r) - Jq(q);
              })[0],
              m = Jq(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            Vq(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"]
    );
  }
  function fr(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function gr(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (cl()) {
      var c = Tq(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : Dp(!1)._gs);
      if (fr(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        Lp(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        Lp(function () {
          return g;
        }, 1);
      }
    }
  }
  function hr(a) {
    if (!$a(1)) return null;
    var b = Dp(!0).gad_source;
    if (b != null) return (B.location.hash = ""), b;
    if ($a(2)) {
      var c = Ej(B.location.href);
      b = yj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = Tq();
      if (fr(d, a)) return "0";
    }
    return null;
  }
  function ir(a) {
    var b = hr(a);
    b != null &&
      Lp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function jr(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function kr(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!yq(xq())) return e;
    var f = Bq(a),
      g = jr(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.W]
            .concat(n.labels || [], [b])
            .join("."),
          r = kp(c, p, !0);
        r.Hb = xq();
        ap(a, q, r);
      }
    return e;
  }
  function lr(a, b) {
    var c = [];
    b = b || {};
    var d = Dq(b),
      e = jr(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Eq(b.prefix),
          n = Fq(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.W,
          u = p.labels,
          v = p.timestamp,
          t = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
          lq(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, t, r].concat(u || [], [a]).join("."),
            A = kp(b, v, !0);
          A.Hb = xq();
          ap(n, y, A);
        }
      }
    return c;
  }
  function mr(a, b) {
    var c = Eq(b),
      d = Fq(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Gq(d) : Bq(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function nr(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function or(a) {
    var b = Math.max(mr("aw", a), nr(yq(xq()) ? oq() : {})),
      c = Math.max(mr("gb", a), nr(yq(xq()) ? oq("_gac_gb", !0) : {}));
    c = Math.max(c, mr("ag", a));
    return c > b;
  }
  function Er() {
    Ji.dedupe_gclid || (Ji.dedupe_gclid = hp());
    return Ji.dedupe_gclid;
  }
  var Fr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Gr = /^www.googleadservices.com$/;
  function Hr(a) {
    a || (a = Ir());
    return a.yn
      ? !1
      : a.tm || a.vm || a.ym || a.wm || a.Re || a.dm || a.xm || a.im
      ? !0
      : !1;
  }
  function Ir() {
    var a = {},
      b = Dp(!0);
    a.yn = !!b._up;
    var c = Tq();
    a.tm = c.aw !== void 0;
    a.vm = c.dc !== void 0;
    a.ym = c.wbraid !== void 0;
    a.wm = c.gbraid !== void 0;
    a.xm = c.gclsrc === "aw.ds";
    a.Re = rr().Re;
    var d = E.referrer ? yj(Ej(E.referrer), "host") : "";
    a.im = Fr.test(d);
    a.dm = Gr.test(d);
    return a;
  }
  var Jr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Kr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Lr = /^\d+\.fls\.doubleclick\.net$/,
    Mr = /;gac=([^;?]+)/,
    Nr = /;gacgb=([^;?]+)/;
  function Or(a, b) {
    if (Lr.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && c.length === 2 && c[1].match(Jr)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].W);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Pr(a, b, c) {
    for (
      var d = yq(xq()) ? oq("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = kr("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { bm: f ? e.join(";") : "", am: Or(d, Nr) };
  }
  function Qr(a) {
    var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Kr) ? b[1] : void 0;
  }
  function Rr(a) {
    var b = $a(11),
      c = {},
      d,
      e,
      f;
    Lr.test(E.location.host) &&
      ((d = Qr("gclgs")), (e = Qr("gclst")), b && (f = Qr("gcllp")));
    if (d && e && (!b || f)) (c.Mh = d), (c.Oh = e), (c.Nh = f);
    else {
      var g = qb(),
        k = Gq((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.W;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Jd;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.Mh = m.join(".")),
        (c.Oh = n.join(".")),
        b && p.length > 0 && (c.Nh = p.join(".")));
    }
    return c;
  }
  function Sr(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (Lr.test(E.location.host)) {
      var e = Qr(c);
      if (e) return [{ W: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? Pq(f) : Bq(f);
      }
      if (b === "wbraid") return Bq((a || "_gcl") + "_gb");
      if (b === "braids") return Dq({ prefix: a });
    }
    return [];
  }
  function Tr(a) {
    return Sr(a, "gclid", "gclaw")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Ur(a) {
    var b = Sr(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.W;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Pa || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.Sc || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { W: c, kk: d, lk: e };
  }
  function Vr(a) {
    return Sr(a, "braids", "gclgb")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Wr(a) {
    return Lr.test(E.location.host) ? !(Qr("gclaw") || Qr("gac")) : or(a);
  }
  function Xr(a, b, c) {
    var d;
    d = c ? lr(a, b) : kr(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function Yr() {
    var a = B.__uspapi;
    if (bb(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  function hs(a) {
    var b = W(a.m, O.g.Ob),
      c = W(a.m, O.g.jc);
    b && !c
      ? (a.eventName !== O.g.ba && a.eventName !== O.g.Uc && V(131),
        (a.isAborted = !0))
      : !b && c && (V(132), (a.isAborted = !0));
  }
  function is(a) {
    var b = X(O.g.O) ? Ji.pscdl : "denied";
    b != null && (a.j[O.g.Df] = b);
  }
  function js(a) {
    var b = Nn(!0);
    a.j[O.g.Nb] = b;
  }
  function ks(a) {
    Ko() && (a.j[O.g.Fc] = 1);
  }
  function as() {
    var a = E.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function ls(a) {
    ms(a, "ce", W(a.m, O.g.Sa));
  }
  function ms(a, b, c) {
    a.j[O.g.xd] || (a.j[O.g.xd] = {});
    a.j[O.g.xd][b] = c;
  }
  function ss(a, b, c, d) {
    var e = rc(),
      f;
    if (e === 1)
      a: {
        var g = Vi;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = E.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== B.location.protocol ? a : b) + c;
  }
  var xs = function (a, b) {
      if (a)
        if (Lo()) {
        } else if ((a = z(a) ? Wl(sk(a)) : Wl(sk(a.id)))) {
          var c = void 0,
            d = !1,
            e = W(b, O.g.sj);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = Wl(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id ||
                  (a.id === a.destinationId &&
                    a.destinationId === g.destinationId)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var k = W(b, O.g.fh),
              m;
            if (k) {
              Array.isArray(k) ? (m = k) : (m = [k]);
              var n = W(b, O.g.bh),
                p = W(b, O.g.eh),
                q = W(b, O.g.gh),
                r = W(b, O.g.rj),
                u = n || p,
                v = 1;
              a.prefix !== "UA" || c || (v = 5);
              for (var t = 0; t < m.length; t++)
                if (t < v)
                  if (c) ts(c, m[t], r, b, { Wb: u, options: q });
                  else if (a.prefix === "AW" && a.ids[Zl[2]])
                    R(128)
                      ? ts([a], m[t], r || "US", b, { Wb: u, options: q })
                      : us(a.ids[Zl[1]], a.ids[Zl[2]], m[t], b, {
                          Wb: u,
                          options: q,
                        });
                  else if (a.prefix === "UA")
                    if (R(128)) ts([a], m[t], r || "US", b, { Wb: u });
                    else {
                      var w = a.destinationId,
                        x = m[t],
                        y = { Wb: u };
                      V(23);
                      if (x) {
                        y = y || {};
                        var A = vs(ws, y, w),
                          C = {};
                        y.Wb !== void 0 ? (C.receiver = y.Wb) : (C.replace = x);
                        C.ga_wpid = w;
                        C.destination = x;
                        A(2, pb(), C);
                      }
                    }
            }
          }
        }
    },
    ts = function (a, b, c, d, e) {
      V(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: pb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var k = a[g];
          ys[k.id] ||
            (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2
              ? ((f.adData = { ak: k.ids[Zl[1]], cl: k.ids[Zl[2]] }),
                zs(f.adData, d),
                (ys[k.id] = !0))
              : k &&
                k.prefix === "UA" &&
                !f.gaData &&
                ((f.gaData = { gaWpid: k.destinationId }), (ys[k.id] = !0)));
        }
        (f.gaData || f.adData) && vs(As, e)(e.Wb, f, e.options);
      }
    },
    us = function (a, b, c, d, e) {
      V(22);
      if (c) {
        e = e || {};
        var f = vs(Bs, e, a),
          g = { ak: a, cl: b };
        e.Wb === void 0 && (g.autoreplace = c);
        zs(g, d);
        f(2, e.Wb, g, c, 0, pb(), e.options);
      }
    },
    zs = function (a, b) {
      R(5) &&
        ((a.dma = Ho()),
        Io() && (a.dmaCps = Go()),
        zo(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    vs = function (a, b, c) {
      if (B[a.functionName]) return b.di && F(b.di), B[a.functionName];
      var d = Cs();
      B[a.functionName] = d;
      if (a.additionalQueues)
        for (var e = 0; e < a.additionalQueues.length; e++)
          B[a.additionalQueues[e]] = B[a.additionalQueues[e]] || Cs();
      a.idKey && B[a.idKey] === void 0 && (B[a.idKey] = c);
      qc(ss("https://", "http://", a.scriptUrl), b.di, b.Rm);
      return d;
    },
    Cs = function () {
      function a() {
        a.q = a.q || [];
        a.q.push(arguments);
      }
      return a;
    },
    Bs = {
      functionName: "_googWcmImpl",
      idKey: "_googWcmAk",
      scriptUrl: "www.gstatic.com/wcm/loader.js",
    },
    ws = {
      functionName: "_gaPhoneImpl",
      idKey: "ga_wpid",
      scriptUrl: "www.gstatic.com/gaphone/loader.js",
    },
    Ds = { Nk: "9", Bl: "5" },
    As = {
      functionName: "_googCallTrackingImpl",
      additionalQueues: [ws.functionName, Bs.functionName],
      scriptUrl:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Ds.Nk || Ds.Bl) +
        ".js",
    },
    ys = {};
  function Es(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return W(a.m, b);
      },
      Ub: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  function Ls(a) {
    var b,
      c = B,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  var Ms,
    Ns = !1;
  function Os() {
    Ns = !0;
    Ms = Ms || {};
  }
  function Ps(a) {
    Ns || Os();
    return Ms[a];
  }
  function Qs() {
    var a = B.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function Rs(a) {
    if (E.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !B.getComputedStyle)
      return !0;
    var c = B.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = B.getComputedStyle(d, null));
    }
    return !1;
  }
  var Lf;
  var St = Number("") || 5,
    Tt = Number("") || 50,
    Ut = fb();
  var Zt = {
    El: Number("") || 500,
    ql: Number("") || 5e3,
    Kj: Number("20") || 10,
    Qk: Number("") || 5e3,
  };
  function $t(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var au = function (a, b) {
    var c;
    return c;
  };
  var bu;
  function iu() {
    var a = Of(Lf.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function ju(a, b, c) {
    c = c === void 0 ? !1 : c;
  }
  var ku = function (a, b, c, d) {};
  function lu(a, b, c, d, e) {}
  function mu(a, b, c, d) {}
  var nu = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  An();
  Jn() || xn("iPod");
  xn("iPad");
  !xn("Android") || Bn() || An() || zn() || xn("Silk");
  Bn();
  !xn("Safari") ||
    Bn() ||
    (yn() ? 0 : xn("Coast")) ||
    zn() ||
    (yn() ? 0 : xn("Edge")) ||
    (yn() ? wn("Microsoft Edge") : xn("Edg/")) ||
    (yn() ? wn("Opera") : xn("OPR")) ||
    An() ||
    xn("Silk") ||
    xn("Android") ||
    Kn();
  var ou = {},
    pu = null,
    qu = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!pu) {
        pu = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          ou[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            pu[q] === void 0 && (pu[q] = p);
          }
        }
      }
      for (
        var r = ou[f],
          u = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          t = 0,
          w = 0;
        t < b.length - 2;
        t += 3
      ) {
        var x = b[t],
          y = b[t + 1],
          A = b[t + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          I = r[((y & 15) << 2) | (A >> 6)],
          J = r[A & 63];
        u[w++] = "" + C + D + I + J;
      }
      var H = 0,
        U = v;
      switch (b.length - t) {
        case 2:
          (H = b[t + 1]), (U = r[(H & 15) << 2] || v);
        case 1:
          var M = b[t];
          u[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (H >> 4)] + U + v;
      }
      return u.join("");
    };
  var ru =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function su(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function tu() {
    var a = B.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function uu() {
    var a, b;
    return (b = (a = B.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function vu(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function wu() {
    var a = B;
    if (!vu(a)) return null;
    var b = su(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(ru)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var yu = function (a, b) {
      if (a) {
        var c = xu(a);
        Object.assign(b.j, c);
      }
    },
    xu = function (a) {
      var b = {};
      b[O.g.Tf] = a.architecture;
      b[O.g.Uf] = a.bitness;
      a.fullVersionList &&
        (b[O.g.Vf] = a.fullVersionList
          .map(function (c) {
            return (
              encodeURIComponent(c.brand || "") +
              ";" +
              encodeURIComponent(c.version || "")
            );
          })
          .join("|"));
      b[O.g.Wf] = a.mobile ? "1" : "0";
      b[O.g.Xf] = a.model;
      b[O.g.Yf] = a.platform;
      b[O.g.Zf] = a.platformVersion;
      b[O.g.cg] = a.wow64 ? "1" : "0";
      return b;
    },
    Au = function (a) {
      var b = zu.xn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = tu();
      if (d) c(d);
      else {
        var e = uu();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = B.setTimeout(function () {
            c.Ze || ((c.Ze = !0), V(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Ze || ((c.Ze = !0), V(104), B.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Ze || ((c.Ze = !0), V(105), B.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Cu = function () {
      if (vu(B) && ((Bu = qb()), !uu())) {
        var a = wu();
        a &&
          (a.then(function () {
            V(95);
          }),
          a.catch(function () {
            V(96);
          }));
      }
    },
    Bu;
  function Du(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Eu() {
    return Du("join-ad-interest-group") && bb(gc.joinAdInterestGroup);
  }
  function Fu(a, b) {
    var c = Za[3] === void 0 ? 1 : Za[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = E.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(E.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = E.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (Za[2] === void 0 ? 50 : Za[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && qb() - p < (Za[1] === void 0 ? 6e4 : Za[1])
        ? (Va("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Gu(e[0]);
        else {
          if (m) {
            Va("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Gu(e[0]) : m && Gu(k[0]);
      sc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: qb() }
      );
    }
  }
  function Gu(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Hu() {
    return "https://td.doubleclick.net";
  }
  function Iu(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Gm: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Gm: c };
  }
  var Dv = {
    J: {
      vi: "ads_conversion_hit",
      Qd: "container_execute_start",
      yi: "container_setup_end",
      rg: "container_setup_start",
      wi: "container_blocking_end",
      xi: "container_execute_end",
      zi: "container_yield_end",
      sg: "container_yield_start",
      Aj: "event_execute_end",
      zj: "event_evaluation_end",
      ph: "event_evaluation_start",
      Bj: "event_setup_end",
      ve: "event_setup_start",
      Dj: "ga4_conversion_hit",
      Ae: "page_load",
      On: "pageview",
      oc: "snippet_load",
      Wj: "tag_callback_error",
      Xj: "tag_callback_failure",
      Yj: "tag_callback_success",
      Zj: "tag_execute_end",
      yd: "tag_execute_start",
    },
  };
  function Ev() {
    function a(c, d) {
      var e = Wa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Fv = !1;
  function nw(a, b) {}
  function ow(a, b) {}
  function pw(a, b) {}
  function qw(a, b) {}
  function rw() {
    var a = {};
    return a;
  }
  function fw(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function sw() {}
  function tw(a, b) {}
  function uw(a, b, c) {}
  function vw() {}
  function ww(a, b) {
    var c = B,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function xw(a, b, c, d) {
    var e = Fn(a, "fmt");
    if (b) {
      var f = Fn(a, "random"),
        g = Fn(a, "label") || "";
      if (!f) return !1;
      var k = qu(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!ww(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Hn(a, "rfmt", e));
    var m = Hn(a, "fmt", 4);
    qc(
      m,
      function () {
        B.google_noFurtherRedirects &&
          b &&
          ((B.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      E.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  function Nw(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function Ow(a, b, c) {
    c = c === void 0 ? !1 : c;
    Pw().addRestriction(0, a, b, c);
  }
  function Qw(a, b, c) {
    c = c === void 0 ? !1 : c;
    Pw().addRestriction(1, a, b, c);
  }
  function Rw() {
    var a = ok();
    return Pw().getRestrictions(1, a);
  }
  var Sw = function () {
      this.container = {};
      this.j = {};
    },
    Tw = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  Sw.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = Tw(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  Sw.prototype.getRestrictions = function (a, b) {
    var c = Tw(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ua(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        ua(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ua(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        ua(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  Sw.prototype.getExternalRestrictions = function (a, b) {
    var c = Tw(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  Sw.prototype.removeExternalRestrictions = function (a) {
    var b = Tw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function Pw() {
    var a = Ji.r;
    a || ((a = new Sw()), (Ji.r = a));
    return a;
  }
  var Uw = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Vw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Ww = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Xw =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function Yw() {
    var a = lj("gtm.allowlist") || lj("gtm.whitelist");
    a && V(9);
    Pi && (a = ["google", "gtagfl", "lcl", "zone"]);
    Uw.test(B.location && B.location.hostname) &&
      (Pi
        ? V(116)
        : (V(117),
          Zw &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && ub(nb(a), Vw),
      c = lj("gtm.blocklist") || lj("gtm.blacklist");
    c || ((c = lj("tagTypeBlacklist")) && V(3));
    c ? V(8) : (c = []);
    Uw.test(B.location && B.location.hostname) &&
      ((c = nb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    nb(c).indexOf("google") >= 0 && V(2);
    var d = c && ub(nb(c), Ww),
      e = {};
    return function (f) {
      var g = f && f[Le.oa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = Zi[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    V(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var u = gb(d, k || []);
          u && V(10);
          q = u;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = gb(d, Xw));
      return (e[g] = v);
    };
  }
  var Zw = !1;
  Zw = !0;
  function $w() {
    fk &&
      Ow(ok(), function (a) {
        var b = vf(a.entityId),
          c;
        if (yf(b)) {
          var d = b[Le.oa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = nf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Nw(b[Le.oa], 4);
        return c;
      });
  }
  function ax(a, b, c, d, e) {
    if (!bx()) {
      var f = d.siloed ? kk(a) : a;
      if (!xk(f)) {
        d.siloed && zk({ ctid: f, isDestination: !1 });
        var g = rk();
        bk().container[f] = { state: 1, context: d, parent: g };
        ak({ ctid: f, isDestination: !1 }, e);
        var k = cx(a);
        if (R(70) && fj()) qc(ej() + "/" + k);
        else {
          var m = vb(a, "GTM-"),
            n = Kj(),
            p = c ? "/gtag/js" : "/gtm.js",
            q = Jj(b, p + k);
          if (!q) {
            var r = Ii.vf + p;
            n && jc && m
              ? ((r = jc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (q = ss("https://", "http://", r + k)))
              : (q = fj() ? ej() + "/" + k : ss("https://", "http://", r + k));
          }
          qc(q);
        }
      }
    }
  }
  function dx(a, b, c, d) {
    if (!bx()) {
      var e = c.siloed ? kk(a) : a;
      if (!yk(e))
        if (!c.siloed && Ak())
          (bk().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: rk(),
          }),
            ak({ ctid: e, isDestination: !0 }, d),
            V(91);
        else if (
          (c.siloed && zk({ ctid: e, isDestination: !0 }),
          (bk().destination[e] = { state: 1, context: c, parent: rk() }),
          ak({ ctid: e, isDestination: !0 }, d),
          R(70) && fj())
        )
          qc(ej() + ("/gtd" + cx(a, !0)));
        else {
          var f = "/gtag/destination" + cx(a, !0),
            g = Jj(b, f);
          g ||
            (fj()
              ? ((f = "/gtd" + cx(a, !0)), (g = ej() + f))
              : (g = ss("https://", "http://", Ii.vf + f)));
          qc(g);
        }
    }
  }
  function cx(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + Ii.ob;
    if (!vb(a, "GTM-") || b) c += "&cx=c";
    R(82) && (c += "&gtm=" + No());
    Kj() && (c += "&sign=" + Ii.uh);
    var d = cj.j;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function bx() {
    if (Lo()) {
      return !0;
    }
    return !1;
  }
  var ex = !1,
    fx = 0,
    gx = [];
  function hx(a) {
    if (!ex) {
      var b = E.createEventObject,
        c = E.readyState === "complete",
        d = E.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        ex = !0;
        for (var e = 0; e < gx.length; e++) F(gx[e]);
      }
      gx.push = function () {
        for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) F(f[g]);
        return 0;
      };
    }
  }
  function ix() {
    if (!ex && fx < 140) {
      fx++;
      try {
        var a, b;
        (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
        hx();
      } catch (c) {
        B.setTimeout(ix, 50);
      }
    }
  }
  function jx(a) {
    ex ? a() : gx.push(a);
  }
  function lx(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: mk(),
    };
  }
  var nx = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      mx(this, a, b);
    },
    ox = function (a, b, c, d) {
      if (Li.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Uc(d) && (e = Vc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    px = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    qx = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    mx = function (a, b, c) {
      b !== void 0 && a.Ge(b);
      c &&
        B.setTimeout(function () {
          qx(a);
        }, Number(c));
    };
  nx.prototype.Ge = function (a) {
    var b = this,
      c = sb(function () {
        F(function () {
          a(mk(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var rx = function (a) {
      a.H++;
      return sb(function () {
        a.C++;
        a.P && a.C >= a.H && qx(a);
      });
    },
    sx = function (a) {
      a.P = !0;
      a.C >= a.H && qx(a);
    };
  var tx = {};
  function ux() {
    return B[vx()];
  }
  var wx = function (a) {
      if (cl()) {
        var b = ux();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    },
    xx = function (a) {
      B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
      var b = B.GoogleAnalyticsObject;
      if (B[b]) B.hasOwnProperty(b);
      else {
        var c = function () {
          var d = ya.apply(0, arguments);
          c.q = c.q || [];
          c.q.push(d);
        };
        c.l = Number(pb());
        B[b] = c;
      }
      return B[b];
    };
  function vx() {
    return B.GoogleAnalyticsObject || "ga";
  }
  function yx() {
    var a = mk();
  }
  function zx(a, b) {
    return function () {
      var c = ux(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var Ex = ["es", "1"],
    Fx = {},
    Gx = {};
  function Hx(a, b) {
    if (Tj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Fx[a] = [
        ["e", c],
        ["eid", a],
      ];
      Qm(a);
    }
  }
  function Ix(a) {
    var b = a.eventId,
      c = a.Tc;
    if (!Fx[b]) return [];
    var d = [];
    Gx[b] || d.push(Ex);
    d.push.apply(d, ua(Fx[b]));
    c && (Gx[b] = !0);
    return d;
  }
  var Jx = {},
    Kx = {},
    Lx = {};
  function Mx(a, b, c, d) {
    Tj &&
      R(95) &&
      ((d === void 0 ? 0 : d)
        ? ((Lx[b] = Lx[b] || 0), ++Lx[b])
        : c !== void 0
        ? ((Kx[a] = Kx[a] || {}), (Kx[a][b] = Math.round(c)))
        : ((Jx[a] = Jx[a] || {}), (Jx[a][b] = (Jx[a][b] || 0) + 1)));
  }
  function Nx(a) {
    var b = a.eventId,
      c = a.Tc,
      d = Jx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Jx[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function Ox(a) {
    var b = a.eventId,
      c = a.Tc,
      d = Kx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Kx[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function Px() {
    for (
      var a = [], b = l(Object.keys(Lx)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Lx[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var Qx = {},
    Rx = {};
  function Sx(a, b, c) {
    if (Tj && b) {
      var d = Nj(b);
      Qx[a] = Qx[a] || [];
      Qx[a].push(c + d);
      var e = (yf(b) ? "1" : "2") + d;
      Rx[a] = Rx[a] || [];
      Rx[a].push(e);
      Qm(a);
    }
  }
  function Tx(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = Qx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = Rx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete Qx[b], delete Rx[b]);
    return d;
  }
  function Ux(a, b, c, d) {
    var e = lf[a],
      f = Vx(a, b, c, d);
    if (!f) return null;
    var g = zf(e[Le.Vj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Ux(
        k.index,
        {
          onSuccess: f,
          onFailure: k.ik === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Vx(a, b, c, d) {
    function e() {
      function w() {
        ml(3);
        var J = qb() - I;
        Sx(c.id, f, "7");
        px(c.qc, C, "exception", J);
        R(83) && uw(c, f, Dv.J.Wj);
        D || ((D = !0), k());
      }
      if (f[Le.wl]) k();
      else {
        var x = xf(f, c, []),
          y = x[Le.Ok];
        if (y != null)
          for (var A = 0; A < y.length; A++)
            if (!X(y[A])) {
              k();
              return;
            }
        var C = ox(c.qc, String(f[Le.oa]), Number(f[Le.Fe]), x[Le.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var J = qb() - I;
            Sx(c.id, lf[a], "5");
            px(c.qc, C, "success", J);
            R(83) && uw(c, f, Dv.J.Yj);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var J = qb() - I;
            Sx(c.id, lf[a], "6");
            px(c.qc, C, "failure", J);
            R(83) && uw(c, f, Dv.J.Xj);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        Sx(c.id, f, "1");
        R(83) && tw(c, f);
        var I = qb();
        try {
          Af(x, { event: c, index: a, type: 1 });
        } catch (J) {
          w(J);
        }
        R(83) && uw(c, f, Dv.J.Zj);
      }
    }
    var f = lf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = zf(f[Le.bk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Ux(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.ik === 2 ? m : q;
    }
    if (f[Le.Nj] || f[Le.yl]) {
      var r = f[Le.Nj] ? mf : c.qn,
        u = g,
        v = k;
      if (!r[a]) {
        var t = Wx(a, r, sb(e));
        g = t.onSuccess;
        k = t.onFailure;
      }
      return function () {
        r[a](u, v);
      };
    }
    return e;
  }
  function Wx(a, b, c) {
    var d = [],
      e = [];
    b[a] = Xx(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Yx;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Zx;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Xx(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Yx(a) {
    a();
  }
  function Zx(a, b) {
    b();
  }
  var by = function (a, b) {
    for (var c = [], d = 0; d < lf.length; d++)
      if (a[d]) {
        var e = lf[d];
        var f = rx(b.qc);
        try {
          var g = Ux(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Le.oa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = nf[k];
            c.push({
              Dk: d,
              uk: (m ? m.priorityOverride || 0 : 0) || Nw(e[Le.oa], 1) || 0,
              execute: g,
            });
          } else $x(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(ay);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function ay(a, b) {
    var c,
      d = b.uk,
      e = a.uk;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Dk,
        k = b.Dk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function $x(a, b) {
    if (Tj) {
      var c = function (d) {
        var e = b.isBlocked(lf[d]) ? "3" : "4",
          f = zf(lf[d][Le.Vj], b, []);
        f && f.length && c(f[0].index);
        Sx(b.id, lf[d], e);
        var g = zf(lf[d][Le.bk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var ey = !1,
    cy;
  function gy(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (R(83)) {
    }
    if (d === "gtm.js") {
      if (ey) return !1;
      ey = !0;
    }
    var e = !1,
      f = Rw(),
      g = Vc(a, null);
    if (
      !f.every(function (u) {
        return u({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    Hx(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: hy(g, e),
        qn: [],
        logMacroError: function () {
          V(6);
          ml(0);
        },
        cachedModelValues: iy(),
        qc: new nx(function () {
          if (R(83)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    R(95) && Tj && (n.reportMacroDiscrepancy = Mx);
    R(83) && pw(n.id, n.name);
    var p = Gf(n);
    R(83) && qw(n.id, n.name);
    e && (p = jy(p));
    if (R(83)) {
    }
    var q = by(p, n),
      r = !1;
    sx(n.qc);
    (d !== "gtm.js" && d !== "gtm.sync") || yx();
    return ky(p, q) || r;
  }
  function iy() {
    var a = {};
    a.event = qj("event", 1);
    a.ecommerce = qj("ecommerce", 1);
    a.gtm = qj("gtm");
    a.eventModel = qj("eventModel");
    return a;
  }
  function hy(a, b) {
    var c = Yw();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Le.oa];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = ok();
      f = Pw().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Vc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = Zi[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function jy(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(lf[c][Le.oa]);
        if (Ki[d] || lf[c][Le.zl] !== void 0 || Nw(d, 2)) b[c] = !0;
      }
    return b;
  }
  function ky(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && lf[c] && !Li[String(lf[c][Le.oa])]) return !0;
    return !1;
  }
  var ly = 0;
  function my(a, b) {
    return arguments.length === 1 ? ny("set", a) : ny("set", a, b);
  }
  function oy(a, b) {
    return arguments.length === 1 ? ny("config", a) : ny("config", a, b);
  }
  function py(a, b, c) {
    c = c || {};
    c[O.g.kc] = a;
    return ny("event", b, c);
  }
  function ny() {
    return arguments;
  }
  var qy = function () {
    this.messages = [];
    this.j = [];
  };
  qy.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  qy.prototype.listen = function (a) {
    this.j.push(a);
  };
  qy.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  qy.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function ry(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Pf.canonicalContainerId;
    sy().enqueue(a, b, c);
  }
  function ty() {
    var a = uy;
    sy().listen(a);
  }
  function sy() {
    var a = Ji.mb;
    a || ((a = new qy()), (Ji.mb = a));
    return a;
  }
  var vy = {},
    wy = {};
  function xy(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { gi: void 0, Qh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.gi = Wl(g, b)), e.gi)) {
          var k = lk();
          eb(
            k,
            (function (r) {
              return function (u) {
                return r.gi.destinationId === u;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = vy[g] || [];
        e.Qh = {};
        m.forEach(
          (function (r) {
            return function (u) {
              r.Qh[u] = !0;
            };
          })(e)
        );
        for (var n = ik(), p = 0; p < n.length; p++)
          if (e.Qh[n[p]]) {
            c = c.concat(lk());
            break;
          }
        var q = wy[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { Km: c, Nm: d };
  }
  function Py(a) {
    ib(vy, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function Qy(a) {
    ib(wy, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var Ry = "HA GF G UA AW DC MC".split(" "),
    Sy = !1,
    Ty = !1,
    Uy = !1,
    Vy = !1;
  function Wy(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: $i() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Xy = void 0,
    Yy = void 0;
  function Zy(a, b, c) {
    var d = Vc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && V(136);
    var e = Vc(b, null);
    Vc(c, e);
    ry(oy(ik()[0], e), a.eventId, d);
  }
  function $y(a) {
    for (var b = l([O.g.rd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Ym.j[d];
      if (e) return e;
    }
  }
  var az = [
      O.g.rd,
      O.g.Sb,
      O.g.Dc,
      O.g.tb,
      O.g.zb,
      O.g.Ca,
      O.g.sa,
      O.g.Na,
      O.g.Ra,
      O.g.vb,
    ],
    bz = {
      config: function (a, b) {
        var c = Wy(a, b);
        if (!(a.length < 2) && z(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Uc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = Wl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!ek.ze) {
                var m = qk(rk());
                if (Ck(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { Um: qk(n), Jm: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.Um), (g = q.Jm));
            Hx(c.eventId, "gtag.config");
            var r = e.destinationId,
              u = e.id !== r;
            if (u ? lk().indexOf(r) === -1 : ik().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[O.g.Ob]) {
                var v = $y(d);
                if (u)
                  dx(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var t = d;
                  Xy ? Zy(b, t, Xy) : Yy || (Yy = Vc(t, null));
                } else
                  ax(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (V(128), g && V(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                Yy
                  ? (Zy(b, Yy, x), (w = !1))
                  : ((!x[O.g.nc] && Ni && Xy) || (Xy = Vc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!Uy && ((Uy = !0), Ty))
                for (var A = l(az), C = A.next(); !C.done; C = A.next())
                  if (y.hasOwnProperty(C.value)) {
                    ll("erc");
                    break;
                  }
              Uj && !fk && (ly === 1 && (Gk.mcc = !1), (ly = 2));
              il = !0;
              if (Ni && !u && !d[O.g.nc]) {
                var D = Vy;
                Vy = !0;
                if (D) return;
              }
              Sy || V(43);
              if (!b.noTargetGroup)
                if (u) {
                  Qy(e.id);
                  var I = e.id,
                    J = d[O.g.ne] || "default";
                  J = String(J).split(",");
                  for (var H = 0; H < J.length; H++) {
                    var U = wy[J[H]] || [];
                    wy[J[H]] = U;
                    U.indexOf(I) < 0 && U.push(I);
                  }
                } else {
                  Py(e.id);
                  var M = e.id,
                    aa = d[O.g.ne] || "default";
                  aa = aa.toString().split(",");
                  for (var da = 0; da < aa.length; da++) {
                    var T = vy[aa[da]] || [];
                    vy[aa[da]] = T;
                    T.indexOf(M) < 0 && T.push(M);
                  }
                }
              delete d[O.g.ne];
              var S = b.eventMetadata || {};
              S.hasOwnProperty("is_external_event") ||
                (S.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = S;
              delete d[O.g.kd];
              for (var N = u ? [e.id] : lk(), la = 0; la < N.length; la++) {
                var ia = d,
                  ea = N[la],
                  sa = Vc(b, null),
                  Ma = Wl(ea, sa.isGtmEvent);
                Ma && Ym.push("config", [ia], Ma, sa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          V(39);
          var c = Wy(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[O.g.N] && V(139), e[O.g.za] && V(140));
          d === "default"
            ? zl(e)
            : d === "update"
            ? Bl(e, c)
            : d === "declare" && b.fromContainerExecution && yl(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && z(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Uc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Vc(e, null)),
            e[O.g.kd] && (g.eventCallback = e[O.g.kd]),
            e[O.g.je] && (g.eventTimeout = e[O.g.je]));
          var k = Wy(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[O.g.kc];
          r === void 0 &&
            ((r = lj(O.g.kc, 2)), r === void 0 && (r = "default"));
          if (z(r) || Array.isArray(r)) {
            var u;
            u = b.isGtmEvent
              ? z(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = xy(u, b.isGtmEvent),
              t = v.Km,
              w = v.Nm;
            if (w.length)
              for (var x = $y(q), y = 0; y < w.length; y++) {
                var A = Wl(w[y], b.isGtmEvent);
                A &&
                  dx(A.destinationId, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Xl(t, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            var D;
            !C.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              (Ty = !0);
            Hx(m, c);
            for (var I = [], J = 0; J < C.length; J++) {
              var H = C[J],
                U = Vc(b, null);
              if (Ry.indexOf(sk(H.prefix)) !== -1) {
                var M = Vc(d, null),
                  aa = U.eventMetadata || {};
                aa.hasOwnProperty("is_external_event") ||
                  (aa.is_external_event = !U.fromContainerExecution);
                U.eventMetadata = aa;
                delete M[O.g.kd];
                Zm(c, M, H.id, U);
                Uj && !fk && ly === 0 && (Ik("mcc", "1"), (ly = 1));
                il = !0;
              }
              I.push(H.id);
            }
            g.eventModel = g.eventModel || {};
            C.length > 0
              ? (g.eventModel[O.g.kc] = I.join())
              : delete g.eventModel[O.g.kc];
            Sy || V(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[O.g.jc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        V(53);
        if (a.length === 4 && z(a[1]) && z(a[2]) && bb(a[3])) {
          var c = Wl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Sy || V(43);
            var f = $y();
            if (
              !eb(lk(), function (k) {
                return c.destinationId === k;
              })
            )
              dx(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (Ry.indexOf(sk(c.prefix)) !== -1) {
              il = !0;
              Wy(a, b);
              var g = {};
              Vc(((g[O.g.xb] = d), (g[O.g.Mb] = e), g), null);
              $m(
                d,
                function (k) {
                  F(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          Sy = !0;
          var c = Wy(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && z(a[1]) && bb(a[2])) {
          if ((Mf(a[1], a[2]), V(74), a[1] === "all")) {
            V(75);
            var b = !1;
            try {
              b = a[2](mk(), "unknown", {});
            } catch (c) {}
            b || V(76);
          }
        } else V(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Uc(a[1])
          ? (c = Vc(a[1], null))
          : a.length === 3 &&
            z(a[1]) &&
            ((c = {}),
            Uc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Vc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = Wy(a, b),
            e = d.eventId,
            f = d.priorityId;
          Vc(c, null);
          var g = Vc(c, null);
          Ym.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    cz = { policy: !0 };
  var ez = function (a) {
    if (dz(a)) return a;
    this.value = a;
  };
  ez.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var dz = function (a) {
    return !a || Sc(a) !== "object" || Uc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  ez.prototype.getUntrustedMessageValue = ez.prototype.getUntrustedMessageValue;
  var fz = !1,
    gz = [];
  function hz() {
    if (!fz) {
      fz = !0;
      for (var a = 0; a < gz.length; a++) F(gz[a]);
    }
  }
  function iz(a) {
    fz ? F(a) : gz.push(a);
  }
  var jz = 0,
    kz = {},
    lz = [],
    mz = [],
    nz = !1,
    oz = !1;
  function pz(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function qz(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return rz(a);
  }
  function sz(a, b) {
    if (!cb(b) || b < 0) b = 0;
    var c = Ji[Ii.ob],
      d = 0,
      e = !1,
      f = void 0;
    f = B.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (B.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function tz(a, b) {
    var c = a._clear || b.overwriteModelFields;
    ib(a, function (e, f) {
      e !== "_clear" && (c && oj(e), oj(e, f));
    });
    Wi || (Wi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = $i()), (a["gtm.uniqueEventId"] = d), oj("gtm.uniqueEventId", d));
    return gy(a);
  }
  function uz(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (kb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function vz() {
    var a;
    if (mz.length) a = mz.shift();
    else if (lz.length) a = lz.shift();
    else return;
    var b;
    var c = a;
    if (nz || !uz(c.message)) b = c;
    else {
      nz = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = $i());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      lz.unshift(k, c);
      Uj && Mk();
      b = f;
    }
    return b;
  }
  function wz() {
    for (var a = !1, b; !oz && (b = vz()); ) {
      oz = !0;
      delete ij.eventModel;
      kj();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) oz = !1;
      else {
        e.fromContainerExecution && pj();
        try {
          if (bb(d))
            try {
              d.call(mj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (z(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = lj(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (kb(d))
              a: {
                if (d.length && z(d[0])) {
                  var p = bz[d[0]];
                  if (p && (!e.fromContainerExecution || !cz[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = tz(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && kj(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = kz[String(q)] || [], u = 0; u < r.length; u++)
              mz.push(xz(r[u]));
            r.length && mz.sort(pz);
            delete kz[String(q)];
            q > jz && (jz = q);
          }
          oz = !1;
        }
      }
    }
    return !a;
  }
  function yz() {
    if (R(83)) {
      var a = zz();
    }
    var b = wz();
    if (R(83)) {
    }
    try {
      var c = mk(),
        d = B[Ii.ob].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function uy(a) {
    if (jz < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      kz[b] = kz[b] || [];
      kz[b].push(a);
    } else
      mz.push(xz(a)),
        mz.sort(pz),
        F(function () {
          oz || wz();
        });
  }
  function xz(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function Az() {
    function a(f) {
      var g = {};
      if (dz(f)) {
        var k = f;
        f = dz(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = kc(Ii.ob, []),
      c = (Ji[Ii.ob] = Ji[Ii.ob] || {});
    c.pruned === !0 && V(83);
    kz = sy().get();
    ty();
    jx(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    iz(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (Ji.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new ez(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      lz.push.apply(lz, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (V(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return wz() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    lz.push.apply(lz, e);
    if (zz()) {
      if (R(83)) {
      }
      F(yz);
    }
  }
  var zz = function () {
      var a = !0;
      return a;
    },
    rz = function (a) {
      return B[Ii.ob].push(a);
    };
  function Bz(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = qb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Cz(a) {
    return a && a.indexOf("pending:") === 0 ? Bz(a.substr(8)) : !1;
  }
  function Xz() {}
  var Yz = function () {};
  Yz.prototype.toString = function () {
    return "undefined";
  };
  var Zz = new Yz();
  var aA = function () {
      (Ji.rm = Ji.rm || {})[ok()] = function (a) {
        if ($z.hasOwnProperty(a)) return $z[a];
      };
    },
    dA = function (a, b, c) {
      if (a instanceof bA) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String($i());
        cA[g] = [f, c];
        a = e.call(d, g);
        b = ab;
      }
      return { mk: a, onSuccess: b };
    },
    eA = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        V(a ? 134 : 135);
        var d = cA[c];
        if (d && typeof d[b] === "function") d[b]();
        cA[c] = void 0;
      };
    },
    bA = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === Zz ? b : a[d]);
        return c.join("");
      };
    };
  bA.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var $z = {},
    cA = {};
  function fA(a, b) {
    function c(g) {
      var k = Ej(g),
        m = yj(k, "protocol"),
        n = yj(k, "host", !0),
        p = yj(k, "port"),
        q = yj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function gA(a) {
    return hA(a) ? 1 : 0;
  }
  function hA(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Vc(a, {});
        Vc({ arg1: c[d], any_of: void 0 }, e);
        if (gA(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return pg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < lg.length; g++) {
                var k = lg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return mg(b, c);
      case "_eq":
        return qg(b, c);
      case "_ge":
        return rg(b, c);
      case "_gt":
        return tg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return sg(b, c);
      case "_lt":
        return ug(b, c);
      case "_re":
        return og(b, c, a.ignore_case);
      case "_sw":
        return vg(b, c);
      case "_um":
        return fA(b, c);
    }
    return !1;
  }
  function iA() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function jA() {
    var a = [
      ["cv", R(116) ? iA() : "28"],
      ["rv", Ii.th],
      [
        "tc",
        lf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Ii.Ce && a.push(["x", Ii.Ce]);
    dj() && a.push(["tag_exp", dj()]);
    return a;
  }
  var kA = {},
    lA = {};
  function mA() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function nA(a, b, c, d) {
    if (Tj) {
      var e = String(c) + b;
      kA[a] = kA[a] || [];
      kA[a].push(e);
      lA[a] = lA[a] || [];
      lA[a].push(d + b);
    }
  }
  function oA(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = kA[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = lA[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete kA[b], delete lA[b]);
    return d;
  }
  function pA() {
    return !1;
  }
  function qA() {
    var a = {};
    return function (b, c, d) {};
  }
  function rA() {
    var a = sA;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && R(87)) || tA(c);
      var f = vb(b, "__cvt_") ? void 0 : 1,
        g = new La();
      ib(c, function (r, u) {
        var v = hd(u, void 0, f);
        v === void 0 && u !== void 0 && V(44);
        g.set(r, v);
      });
      a.j.j.C = Ef();
      var k = {
        fk: Tf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Ge:
          e !== void 0
            ? function (r) {
                e.qc.Ge(r);
              }
            : void 0,
        kb: function () {
          return b;
        },
        log: function () {},
        Zl: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        hn: !!Nw(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (pA()) {
        var m = qA(),
          n,
          p;
        k.Xa = {
          ri: [],
          He: {},
          Db: function (r, u, v) {
            u === 1 && (n = r);
            u === 7 && (p = v);
            m(r, u, v);
          },
          ng: dh(),
        };
        k.log = function (r) {
          var u = ya.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: u });
        };
      }
      var q = Fe(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Ba && q.type === "return" && (q = q.data);
      return G(q, void 0, f);
    };
  }
  function tA(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    bb(b) &&
      (a.gtmOnSuccess = function () {
        F(b);
      });
    bb(c) &&
      (a.gtmOnFailure = function () {
        F(c);
      });
  }
  function uA(a) {}
  uA.F = "internal.addAdsClickIds";
  function vA(a, b) {
    var c = this;
  }
  vA.T = "addConsentListener";
  var wA = !1;
  function xA(a) {
    for (var b = 0; b < a.length; ++b)
      if (wA)
        try {
          a[b]();
        } catch (c) {
          V(77);
        }
      else a[b]();
  }
  function yA(a, b, c) {
    var d = this,
      e;
    return e;
  }
  yA.F = "internal.addDataLayerEventListener";
  function zA(a, b, c) {}
  zA.T = "addDocumentEventListener";
  function AA(a, b, c, d) {}
  AA.T = "addElementEventListener";
  function BA(a) {
    return a.D.j;
  }
  function CA(a) {}
  CA.T = "addEventCallback";
  function SA(a) {}
  SA.F = "internal.addFormAbandonmentListener";
  function TA(a, b, c, d) {}
  TA.F = "internal.addFormData";
  var UA = {},
    VA = [],
    WA = {},
    XA = 0,
    YA = 0;
  function eB(a, b) {}
  eB.F = "internal.addFormInteractionListener";
  function lB(a, b) {}
  lB.F = "internal.addFormSubmitListener";
  function qB(a) {}
  qB.F = "internal.addGaSendListener";
  function rB(a) {
    if (!a) return {};
    var b = a.Zl;
    return lx(b.type, b.index, b.name);
  }
  function sB(a) {
    return a ? { originatingEntity: rB(a) } : {};
  }
  var uB = function (a, b, c) {
      tB().updateZone(a, b, c);
    },
    wB = function (a, b, c, d, e, f) {
      var g = tB();
      c = c && ub(c, vB);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, mk(), k)) {
          var p = n,
            q = a,
            r = d,
            u = e,
            v = f;
          if (vb(p, "GTM-"))
            ax(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var t = ny("js", pb());
            ax(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: u, inheritParentConfig: v };
            R(122) || ry(t, q, w);
            ry(oy(p, r), q, w);
          }
        }
      }
      return k;
    },
    tB = function () {
      var a = Ji.zones;
      a || (a = Ji.zones = new xB());
      return a;
    },
    yB = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    vB = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    xB = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = xB.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.fi], b)) return !1;
    for (var e = 0; e < c.rf.length; e++) if (this.C[c.rf[e]].Gd(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.rf.length; f++) {
      var g = this.C[c.rf[f]];
      g.Gd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.fi], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new zB(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && Ji[a]) || (!d && xk(a)) || (d && d.fi !== b)) return !1;
    if (d) return d.rf.push(c), !1;
    this.j[a] = { fi: b, rf: [c] };
    return !0;
  };
  var zB = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Gd: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  zB.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Gd !== b && this.j.push({ eventId: a, Gd: b }));
  };
  zB.prototype.Gd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Gd;
    return !1;
  };
  zB.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || yB[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function AB(a) {
    var b = Ji.zones;
    return b
      ? b.getIsAllowedFn(ik(), a)
      : function () {
          return !0;
        };
  }
  function BB() {
    Qw(ok(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = Ji.zones;
      return c ? c.isActive(ik(), b) : !0;
    });
    Ow(ok(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return AB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var CB = function (a, b) {
    this.tagId = a;
    this.Je = b;
  };
  function DB(a, b) {
    var c = this,
      d;
    var e = function (v) {
      Ow(
        v,
        function (t) {
          for (
            var w = Pw().getExternalRestrictions(0, ok()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(t)) return !1;
          }
          return !0;
        },
        !0
      );
      Qw(
        v,
        function (t) {
          for (
            var w = Pw().getExternalRestrictions(1, ok()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(t)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new CB(a, v));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = G(b, this.D, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    xA([
      function () {
        return L(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (yk(a)) return;
    } else if (xk(a)) return;
    var q = 6,
      r = BA(this);
    n && (q = 7);
    r.kb() === "__zone" && (q = 1);
    var u = { source: q, fromContainerExecution: !0, siloed: p };
    m ? dx(a, g, u, e) : ax(a, g, !vb(a, "GTM-"), u, e);
    k &&
      r.kb() === "__zone" &&
      wB(Number.MIN_SAFE_INTEGER, [a], null, {}, rB(BA(this)));
    d = p ? kk(a) : a;
    return d;
  }
  DB.F = "internal.loadGoogleTag";
  function EB(a) {
    return new $c("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof $c)
        return new $c("", function () {
          var d = ya.apply(0, arguments),
            e = this,
            f = Vc(BA(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ha(this.D);
          k.j = f;
          return c.nb.apply(c, [k].concat(ua(g)));
        });
    });
  }
  function FB(a, b, c) {
    var d = this;
  }
  FB.F = "internal.addGoogleTagRestriction";
  var GB = {},
    HB = [];
  function OB(a, b) {}
  OB.F = "internal.addHistoryChangeListener";
  function PB(a, b, c) {}
  PB.T = "addWindowEventListener";
  function QB(a, b) {
    K(this.getName(), ["toPath:!string", "fromPath:!string"], arguments);
    L(this, "access_globals", "write", a);
    L(this, "access_globals", "read", b);
    var c = a.split("."),
      d = b.split("."),
      e = [B, E],
      f = xb(c, e),
      g = xb(d, e);
    if (f === void 0 || g === void 0) return !1;
    f[c[c.length - 1]] = g[d[d.length - 1]];
    return !0;
  }
  QB.T = "aliasInWindow";
  function RB(a, b, c) {}
  RB.F = "internal.appendRemoteConfigParameter";
  function SB(a) {
    var b;
    K(this.getName(), ["path:!string"], [a]);
    L(this, "access_globals", "execute", a);
    for (
      var c = a.split("."), d = B, e = d[c[0]], f = 1;
      e && f < c.length;
      f++
    )
      if (((d = e), (e = e[c[f]]), d === B || d === E)) return;
    if (Sc(e) !== "function") return;
    for (var g = [], k = 1; k < arguments.length; k++)
      g.push(G(arguments[k], this.D, 2));
    var m = (0, this.D.H)(e, d, g);
    b = hd(m, this.D, 2);
    b === void 0 && m !== void 0 && V(45);
    return b;
  }
  SB.T = "callInWindow";
  function TB(a) {}
  TB.T = "callLater";
  function UB(a) {}
  UB.F = "callOnDomReady";
  function VB(a) {}
  VB.F = "callOnWindowLoad";
  function WB(a, b) {
    var c;
    return c;
  }
  WB.F = "internal.computeGtmParameter";
  function XB(a, b) {
    var c = this;
  }
  XB.F = "internal.consentScheduleFirstTry";
  function YB(a, b) {
    var c = this;
  }
  YB.F = "internal.consentScheduleRetry";
  function ZB(a) {
    var b;
    return b;
  }
  ZB.F = "internal.copyFromCrossContainerData";
  function $B(a, b) {
    var c;
    K(this.getName(), ["key:!string", "dataLayerVersion:?number"], arguments),
      L(this, "read_data_layer", a),
      (c = (b || 2) !== 2 ? lj(a, 1) : nj(a, [B, E]));
    var d = hd(c, this.D, vb(BA(this).kb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && V(45);
    return d;
  }
  $B.T = "copyFromDataLayer";
  function aC(a) {
    var b = void 0;
    return b;
  }
  aC.F = "internal.copyFromDataLayerCache";
  function bC(a) {
    var b;
    K(this.getName(), ["path:!string"], arguments);
    L(this, "access_globals", "read", a);
    var c = a.split("."),
      d = xb(c, [B, E]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = hd(e, this.D, 2);
    b === void 0 && e !== void 0 && V(45);
    return b;
  }
  bC.T = "copyFromWindow";
  function cC(a) {
    var b = void 0;
    return hd(b, this.D, 1);
  }
  cC.F = "internal.copyKeyFromWindow";
  var dC = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.j = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = Vc(c.eventMetadata || {}, {});
  };
  dC.prototype.copyToHitData = function (a, b, c) {
    var d = W(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && z(d) && R(74))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var Nt = function (a, b, c) {
    var d = Ps(a.target.destinationId);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function eC(a, b) {
    var c;
    return c;
  }
  eC.F = "internal.copyPreHit";
  function fC(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var d = [B, E],
      e = a.split("."),
      f = xb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !bb(k)) return null;
    if (k) return hd(k, this.D, 2);
    var m;
    k = function () {
      if (!bb(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = xb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return hd(c, this.D, 2);
  }
  fC.T = "createArgumentsQueue";
  function gC(a) {
    return hd(
      function (c) {
        var d = ux();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = ux(),
                n = m && m.getByName && m.getByName(f);
              return jn(B.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  gC.F = "internal.createGaCommandQueue";
  function hC(a) {
    K(this.getName(), ["path:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    var b = a.split("."),
      c = xb(b, [B, E]),
      d = b[b.length - 1];
    if (!c) throw Error("Path " + a + " does not exist.");
    var e = c[d];
    e === void 0 && ((e = []), (c[d] = e));
    return hd(
      function () {
        if (!bb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      vb(BA(this).kb(), "__cvt_") ? 2 : 1
    );
  }
  hC.T = "createQueue";
  function iC(a, b) {
    var c = null;
    return c;
  }
  iC.F = "internal.createRegex";
  function jC() {
    var a = {};
    return a;
  }
  function kC(a) {}
  kC.F = "internal.declareConsentState";
  function lC(a) {
    var b = "";
    return b;
  }
  lC.F = "internal.decodeUrlHtmlEntities";
  function mC(a, b, c) {
    var d;
    return d;
  }
  mC.F = "internal.decorateUrlWithGaCookies";
  function nC() {}
  nC.F = "internal.deferCustomEvents";
  function oC(a) {
    var b;
    return b;
  }
  oC.F = "internal.detectUserProvidedData";
  function sC(a, b) {
    return b;
  }
  sC.F = "internal.enableAutoEventOnClick";
  function AC(a, b) {
    return b;
  }
  AC.F = "internal.enableAutoEventOnElementVisibility";
  function BC() {}
  BC.F = "internal.enableAutoEventOnError";
  var CC = {},
    DC = [],
    EC = {},
    FC = 0,
    GC = 0;
  function MC(a, b) {
    var c = this;
    return b;
  }
  MC.F = "internal.enableAutoEventOnFormInteraction";
  function RC(a, b) {
    var c = this;
    return b;
  }
  RC.F = "internal.enableAutoEventOnFormSubmit";
  function WC() {
    var a = this;
  }
  WC.F = "internal.enableAutoEventOnGaSend";
  var XC = {},
    YC = [];
  function eD(a, b) {
    var c = this;
    return b;
  }
  eD.F = "internal.enableAutoEventOnHistoryChange";
  var fD = ["http://", "https://", "javascript:", "file://"];
  function jD(a, b) {
    var c = this;
    return b;
  }
  jD.F = "internal.enableAutoEventOnLinkClick";
  var kD, lD;
  function wD(a, b) {
    var c = this;
    return b;
  }
  wD.F = "internal.enableAutoEventOnScroll";
  function xD(a) {
    return function () {
      if (a.limit && a.ai >= a.limit) a.lg && B.clearInterval(a.lg);
      else {
        a.ai++;
        var b = qb();
        rz({
          event: a.eventName,
          "gtm.timerId": a.lg,
          "gtm.timerEventNumber": a.ai,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Ck,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Ck,
          "gtm.triggers": a.wn,
        });
      }
    };
  }
  function yD(a, b) {
    return b;
  }
  yD.F = "internal.enableAutoEventOnTimer";
  var Zb = wa(["data-gtm-yt-inspected-"]),
    AD = ["www.youtube.com", "www.youtube-nocookie.com"],
    BD,
    CD = !1;
  function MD(a, b) {
    var c = this;
    return b;
  }
  MD.F = "internal.enableAutoEventOnYouTubeActivity";
  function ND(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? G(b) : {},
      d = a,
      e = !1;
    return e;
  }
  ND.F = "internal.evaluateBooleanExpression";
  var OD;
  function PD(a) {
    var b = !1;
    return b;
  }
  PD.F = "internal.evaluateMatchingRules";
  function wE() {
    return uo(7) && uo(9) && uo(10);
  }
  var AE = function (a, b) {
      if (!b.isGtmEvent) {
        var c = W(b, O.g.xb),
          d = W(b, O.g.Mb),
          e = W(b, c);
        if (e === void 0) {
          var f = void 0;
          xE.hasOwnProperty(c)
            ? (f = xE[c])
            : yE.hasOwnProperty(c) && (f = yE[c]);
          f === 1 && (f = zE(c));
          z(f)
            ? ux()(function () {
                var g,
                  k,
                  m,
                  n =
                    (m =
                      (g = ux()) == null
                        ? void 0
                        : (k = g.getByName) == null
                        ? void 0
                        : k.call(g, a)) == null
                      ? void 0
                      : m.get(f);
                d(n);
              })
            : d(void 0);
        } else d(e);
      }
    },
    BE = function (a, b) {
      var c = a[O.g.Pb],
        d = b + ".",
        e = a[O.g.X] || "",
        f = c === void 0 ? !!a.use_anchor : c === "fragment",
        g = !!a[O.g.yb];
      e = String(e).replace(/\s+/g, "").split(",");
      var k = ux();
      k(d + "require", "linker");
      k(d + "linker:autoLink", e, f, g);
    },
    FE = function (a, b, c) {
      if (!c.isGtmEvent || !CE[a]) {
        var d = !X(O.g.U),
          e = function (f) {
            var g = "gtm" + String($i()),
              k,
              m = ux(),
              n = DE(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || EE(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((k = n.createOnlyFields), n.gtmTrackerName && (k.name = g));
              m(function () {
                var u,
                  v =
                    m == null
                      ? void 0
                      : (u = m.getByName) == null
                      ? void 0
                      : u.call(m, b);
                v && (p = v.get("clientId"));
                if (!c.isGtmEvent) {
                  var t;
                  m == null || (t = m.remove) == null || t.call(m, b);
                }
              });
              m("create", a, c.isGtmEvent ? k : n.createOnlyFields);
              d &&
                X(O.g.U) &&
                ((d = !1),
                m(function () {
                  var u,
                    v,
                    t =
                      (u = ux()) == null
                        ? void 0
                        : (v = u.getByName) == null
                        ? void 0
                        : v.call(u, c.isGtmEvent ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&sst.gcut"] = Ah[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&sst.gcut"] = Ah[f])),
                    t.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                m(function () {
                  var u;
                  m == null || (u = m.remove) == null || u.call(m, g);
                });
            }
          };
        El(function () {
          return void e(O.g.U);
        }, O.g.U);
        El(function () {
          return void e(O.g.O);
        }, O.g.O);
        El(function () {
          return void e(O.g.N);
        }, O.g.N);
        c.isGtmEvent && (CE[a] = !0);
      }
    },
    GE = function (a, b) {
      Kj() && b && (a[O.g.wb] = b);
    },
    PE = function (a, b, c) {
      function d() {
        var M = ya.apply(0, arguments);
        M[0] = v ? v + "." + M[0] : "" + M[0];
        r.apply(window, M);
      }
      function e(M) {
        function aa(ia, ea) {
          for (var sa = 0; ea && sa < ea.length; sa++) d(ia, ea[sa]);
        }
        var da = c.isGtmEvent,
          T = da ? HE(t) : IE(b, c);
        if (T) {
          var S = {};
          GE(S, M);
          d("require", "ec", "ec.js", S);
          da && T.Eh && d("set", "&cu", T.Eh);
          var N = T.action;
          if (da || N === "impressions")
            if ((aa("ec:addImpression", T.pk), !da)) return;
          if (N === "promo_click" || N === "promo_view" || (da && T.kf)) {
            var la = T.kf;
            aa("ec:addPromo", la);
            if (la && la.length > 0 && N === "promo_click") {
              da ? d("ec:setAction", N, T.Ab) : d("ec:setAction", N);
              return;
            }
            if (!da) return;
          }
          N !== "promo_view" &&
            N !== "impressions" &&
            (aa("ec:addProduct", T.Pc), d("ec:setAction", N, T.Ab));
        }
      }
      function f(M) {
        if (M) {
          var aa = {};
          if (Uc(M))
            for (var da in JE)
              JE.hasOwnProperty(da) && KE(JE[da], da, M[da], aa);
          GE(aa, y);
          d("require", "linkid", aa);
        }
      }
      function g() {
        if (Lo()) {
        } else {
          var M = W(c, O.g.qj);
          M && (d("require", M, { dataLayer: Ii.ob }), d("require", "render"));
        }
      }
      function k() {
        var M = W(c, O.g.fd);
        r(function () {
          if (!c.isGtmEvent && Uc(M)) {
            var aa = t.fieldsToSend,
              da,
              T,
              S =
                (da = u()) == null
                  ? void 0
                  : (T = da.getByName) == null
                  ? void 0
                  : T.call(da, v),
              N;
            for (N in M)
              if (M[N] != null && /^(dimension|metric)\d+$/.test(N)) {
                var la = void 0,
                  ia = (la = S) == null ? void 0 : la.get(zE(M[N]));
                LE(aa, N, ia);
              }
          }
        });
      }
      function m(M, aa, da) {
        da && (aa = String(aa));
        t.fieldsToSend[M] = aa;
      }
      function n() {
        if (t.displayfeatures) {
          var M = "_dc_gtm_" + p.replace(/[^A-Za-z0-9-]/g, "");
          d("require", "displayfeatures", void 0, { cookieName: M });
        }
      }
      var p = a,
        q,
        r = c.isGtmEvent ? xx(W(c, "gaFunctionName")) : xx();
      if (bb(r)) {
        var u = ux,
          v;
        c.isGtmEvent
          ? (v = W(c, "name") || W(c, "gtmTrackerName"))
          : (v = "gtag_" + p.split("-").join("_"));
        var t = DE(v, b, c);
        !c.isGtmEvent &&
          EE(v, t.createOnlyFields) &&
          (r(function () {
            var M, aa;
            u() &&
              ((M = u()) == null || (aa = M.remove) == null || aa.call(M, v));
          }),
          (ME[v] = !1));
        r("create", p, t.createOnlyFields);
        var w = c.isGtmEvent && t.fieldsToSet[O.g.wb];
        if ((!c.isGtmEvent && t.createOnlyFields[O.g.wb]) || w) {
          var x = Jj(
            c.isGtmEvent ? t.fieldsToSet[O.g.wb] : t.createOnlyFields[O.g.wb],
            "/analytics.js"
          );
          x && (q = x);
        }
        var y = c.isGtmEvent
          ? t.fieldsToSet[O.g.wb]
          : t.createOnlyFields[O.g.wb];
        if (y) {
          var A = c.isGtmEvent
            ? t.fieldsToSet[O.g.ke]
            : t.createOnlyFields[O.g.ke];
          A && !ME[v] && ((ME[v] = !0), r(zx(v, A)));
        }
        c.isGtmEvent
          ? t.enableRecaptcha && d("require", "recaptcha", "recaptcha.js")
          : (k(), f(t.linkAttribution));
        var C = t[O.g.sa];
        C && C[O.g.X] && BE(C, v);
        d("set", t.fieldsToSet);
        if (c.isGtmEvent) {
          if (t.enableLinkId) {
            var D = {};
            GE(D, y);
            d("require", "linkid", "linkid.js", D);
          }
          FE(p, v, c);
        }
        if (b === O.g.ac)
          if (c.isGtmEvent) {
            n();
            if (t.remarketingLists) {
              var I = "_dc_gtm_" + p.replace(/[^A-Za-z0-9-]/g, "");
              d("require", "adfeatures", { cookieName: I });
            }
            e(y);
            d("send", "pageview");
            t.createOnlyFields._useUp && wx(v + ".");
          } else g(), d("send", "pageview", t.fieldsToSend);
        else
          b === O.g.ba
            ? (g(),
              xs(p, c),
              W(c, O.g.cb) && (gr(["aw", "dc"]), wx(v + ".")),
              ir(["aw", "dc"]),
              t.sendPageView != 0 && d("send", "pageview", t.fieldsToSend),
              FE(p, v, c))
            : b === O.g.Ya
            ? AE(v, c)
            : b === "screen_view"
            ? d("send", "screenview", t.fieldsToSend)
            : b === "timing_complete"
            ? ((t.fieldsToSend.hitType = "timing"),
              m("timingCategory", t.eventCategory, !0),
              c.isGtmEvent
                ? m("timingVar", t.timingVar, !0)
                : m("timingVar", t.name, !0),
              m("timingValue", lb(t.value)),
              t.eventLabel !== void 0 && m("timingLabel", t.eventLabel, !0),
              d("send", t.fieldsToSend))
            : b === "exception"
            ? d("send", "exception", t.fieldsToSend)
            : (b === "" && c.isGtmEvent) ||
              (b === "track_social" && c.isGtmEvent
                ? ((t.fieldsToSend.hitType = "social"),
                  m("socialNetwork", t.socialNetwork, !0),
                  m("socialAction", t.socialAction, !0),
                  m("socialTarget", t.socialTarget, !0))
                : ((c.isGtmEvent || NE[b]) && e(y),
                  c.isGtmEvent && n(),
                  (t.fieldsToSend.hitType = "event"),
                  m("eventCategory", t.eventCategory, !0),
                  m("eventAction", t.eventAction || b, !0),
                  t.eventLabel !== void 0 && m("eventLabel", t.eventLabel, !0),
                  t.value !== void 0 && m("eventValue", lb(t.value))),
              d("send", t.fieldsToSend));
        var J = q && !c.eventMetadata.suppress_script_load;
        if (!OE && (!c.isGtmEvent || J)) {
          q = q || "https://www.google-analytics.com/analytics.js";
          OE = !0;
          var H = function () {
              c.onFailure();
            },
            U = function () {
              var M;
              ((M = u()) == null ? 0 : M.loaded) || H();
            };
          Lo() ? F(U) : qc(q, U, H);
        }
      } else F(c.onFailure);
    },
    QE = function (a, b, c, d) {
      Fl(
        function () {
          PE(a, b, d);
        },
        [O.g.U, O.g.O]
      );
    },
    EE = function (a, b) {
      var c = RE[a];
      RE[a] = Vc(b, null);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    },
    IE = function (a, b) {
      function c(v) {
        return {
          id: d(O.g.Ba),
          affiliation: d(O.g.Jg),
          revenue: d(O.g.na),
          tax: d(O.g.Gf),
          shipping: d(O.g.jd),
          coupon: d(O.g.Kg),
          list: d(O.g.Ff) || d(O.g.hd) || v,
        };
      }
      for (
        var d = function (v) {
            return W(b, v);
          },
          e = d(O.g.da),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][O.g.Ff] || e[g][O.g.hd]);
        g++
      );
      var k = d(O.g.fd);
      if (Uc(k))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in k)
            k.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              k[p] != null &&
              LE(n, p, n[k[p]]);
        }
      var q = null,
        r = d(O.g.ej);
      if (a === O.g.Ma || a === O.g.zc) q = { action: a, Ab: c(), Pc: SE(e) };
      else if (a === O.g.wc) q = { action: "add", Ab: c(), Pc: SE(e) };
      else if (a === O.g.xc) q = { action: "remove", Ab: c(), Pc: SE(e) };
      else if (a === O.g.Qa) q = { action: "detail", Ab: c(f), Pc: SE(e) };
      else if (a === O.g.pb) q = { action: "impressions", pk: SE(e) };
      else if (a === O.g.qb) q = { action: "promo_view", kf: SE(r) || SE(e) };
      else if ((a === "select_content" && r && r.length > 0) || a === O.g.Kb)
        q = { action: "promo_click", kf: SE(r) || SE(e) };
      else if (a === "select_content" || a === O.g.yc)
        q = {
          action: "click",
          Ab: { list: d(O.g.Ff) || d(O.g.hd) || f },
          Pc: SE(e),
        };
      else if (a === O.g.Zb || a === "checkout_progress") {
        var u = { step: a === O.g.Zb ? 1 : d(O.g.Ef), option: d(O.g.ce) };
        q = { action: "checkout", Pc: SE(e), Ab: Vc(c(), u) };
      } else
        a === "set_checkout_option" &&
          (q = {
            action: "checkout_option",
            Ab: { step: d(O.g.Ef), option: d(O.g.ce) },
          });
      q && (q.Eh = d(O.g.Aa));
      return q;
    },
    HE = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Eh = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.pk = b.translateIfKeyEquals === "impressions" ? SE(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.kf = b.translateIfKeyEquals === "promoView" ? SE(e) : e;
      }
      if (b.promoClick) {
        var f = b.promoClick;
        c.action = "promo_click";
        var g = f.promotions;
        c.kf = b.translateIfKeyEquals === "promoClick" ? SE(g) : g;
        c.Ab = f.actionField;
        return c;
      }
      for (var k in b)
        if (
          b[k] !== void 0 &&
          k !== "translateIfKeyEquals" &&
          k !== "impressions" &&
          k !== "promoView" &&
          k !== "promoClick" &&
          k !== "currencyCode"
        ) {
          c.action = k;
          var m = b[k].products;
          c.Pc = b.translateIfKeyEquals === "products" ? SE(m) : m;
          c.Ab = b[k].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    SE = function (a) {
      function b(e) {
        function f(k, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              g[k] = e[p];
              break;
            }
          }
        }
        var g = Vc(e, null);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;
          else {
            for (var k = "", m = 0; m < TE.length; m++)
              e[TE[m]] !== void 0 && (k && (k += "/"), (k += e[TE[m]]));
            k && (g.category = k);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Uc(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    DE = function (a, b, c) {
      var d = function (M) {
          return W(c, M);
        },
        e = {},
        f = {},
        g = {},
        k = {},
        m = UE(d(O.g.fj));
      !c.isGtmEvent && m && LE(f, "exp", m);
      g["&gtm"] = No({ ya: c.eventMetadata.source_canonical_id, fg: !0 });
      c.isGtmEvent || (g._no_slc = !0);
      cl() && (k._cs = VE);
      var n = d(O.g.fd);
      if (!c.isGtmEvent && Uc(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            n[p] != null
          ) {
            var q = d(String(n[p]));
            q !== void 0 && LE(f, p, q);
          }
      for (var r = !c.isGtmEvent, u = pm(c), v = 0; v < u.length; ++v) {
        var t = u[v];
        if (c.isGtmEvent) {
          var w = d(t);
          WE.hasOwnProperty(t)
            ? (e[t] = w)
            : XE.hasOwnProperty(t)
            ? (k[t] = w)
            : (g[t] = w);
        } else {
          var x = void 0;
          t !== O.g.fa ? (x = d(t)) : (x = qm(c, t));
          if (YE.hasOwnProperty(t)) KE(YE[t], t, x, e);
          else if (ZE.hasOwnProperty(t)) KE(ZE[t], t, x, g);
          else if (yE.hasOwnProperty(t)) KE(yE[t], t, x, f);
          else if (xE.hasOwnProperty(t)) KE(xE[t], t, x, k);
          else if (/^(dimension|metric|content_group)\d+$/.test(t))
            KE(1, t, x, f);
          else if (t === O.g.fa) {
            if (!$E) {
              var y = Ab(x);
              y && (f["&did"] = y);
            }
            var A = void 0,
              C = void 0;
            b === O.g.ba
              ? (A = Ab(qm(c, t), "."))
              : ((A = Ab(qm(c, t, 1), ".")), (C = Ab(qm(c, t, 2), ".")));
            A && (f["&gdid"] = A);
            C && (f["&edid"] = C);
          } else
            t === O.g.Na &&
              u.indexOf(O.g.Ac) < 0 &&
              (k.cookieName = String(x) + "_ga");
          R(126) &&
            aF[t] &&
            (c.H.hasOwnProperty(t) ||
              (b === O.g.ba && c.j.hasOwnProperty(t))) &&
            (r = !1);
        }
      }
      R(126) && r && (f["&jsscut"] = "1");
      (d(O.g.Bf) !== !1 && d(O.g.sb) !== !1 && wE()) ||
        (g.allowAdFeatures = !1);
      g.allowAdPersonalizationSignals = zo(c);
      !c.isGtmEvent && d(O.g.cb) && (k._useUp = !0);
      if (c.isGtmEvent) {
        k.name = k.name || e.gtmTrackerName;
        var D = g.hitCallback;
        g.hitCallback = function () {
          bb(D) && D();
          c.onSuccess();
        };
      } else {
        LE(k, "cookieDomain", "auto");
        LE(g, "forceSSL", !0);
        LE(e, "eventCategory", bF(b));
        cF[b] && LE(f, "nonInteraction", !0);
        b === "login" || b === "sign_up" || b === "share"
          ? LE(e, "eventLabel", d(O.g.Xg))
          : b === "search" || b === "view_search_results"
          ? LE(e, "eventLabel", d(O.g.vj))
          : b === "select_content" && LE(e, "eventLabel", d(O.g.aj));
        var I = e[O.g.sa] || {},
          J = I[O.g.Hc];
        J || (J != 0 && I[O.g.X])
          ? (k.allowLinker = !0)
          : J === !1 && LE(k, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        k.name = a;
      }
      Ao() && (g["&gcs"] = Bo());
      g["&gcd"] = Fo(c);
      cl() &&
        (X(O.g.U) || (k.storage = "none"),
        X([O.g.O, O.g.N]) || ((g.allowAdFeatures = !1), (k.storeGac = !1)));
      Io() && (g["&dma_cps"] = Go());
      g["&dma"] = Ho();
      Xn(mo()) && (g["&tcfd"] = Jo());
      dj() && (g["&tag_exp"] = dj());
      var H = Lj(c) || d(O.g.wb),
        U = d(O.g.ke);
      H && (c.isGtmEvent || (k[O.g.wb] = H), (k._cd2l = !0));
      U && !c.isGtmEvent && (k[O.g.ke] = U);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = k;
      return e;
    },
    VE = function (a) {
      return X(a);
    },
    UE = function (a) {
      if (Array.isArray(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (d != null) {
            var e = d.id,
              f = d.variant;
            e != null && f != null && b.push(String(e) + "." + String(f));
          }
        }
        return b.length > 0 ? b.join("!") : void 0;
      }
    },
    LE = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    bF = function (a) {
      var b = "general";
      dF[a]
        ? (b = "ecommerce")
        : eF[a]
        ? (b = "engagement")
        : a === "exception" && (b = "error");
      return b;
    },
    zE = function (a) {
      return a && z(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    KE = function (a, b, c, d) {
      if (c !== void 0)
        if (
          (fF[b] && (c = mb(c)),
          b !== "anonymize_ip" || c || (c = void 0),
          a === 1)
        )
          d[zE(b)] = c;
        else if (z(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && c[e] !== void 0 && (d[a[e]] = c[e]);
    },
    $E = !1;
  var OE = !1,
    ME = {},
    CE = {},
    gF = {},
    aF =
      ((gF[O.g.ma] = 1),
      (gF[O.g.sb] = 1),
      (gF[O.g.Ra] = 1),
      (gF[O.g.Sa] = 1),
      (gF[O.g.ab] = 1),
      (gF[O.g.Ac] = 1),
      (gF[O.g.vb] = 1),
      (gF[O.g.Na] = 1),
      (gF[O.g.hc] = 1),
      (gF[O.g.Zg] = 1),
      (gF[O.g.wa] = 1),
      (gF[O.g.od] = 1),
      (gF[O.g.Fa] = 1),
      (gF[O.g.ib] = 1),
      gF),
    hF = {},
    xE =
      ((hF.client_storage = "storage"),
      (hF.sample_rate = 1),
      (hF.site_speed_sample_rate = 1),
      (hF.store_gac = 1),
      (hF.use_amp_client_id = 1),
      (hF[O.g.tb] = 1),
      (hF[O.g.ra] = "storeGac"),
      (hF[O.g.Ra] = 1),
      (hF[O.g.Sa] = 1),
      (hF[O.g.ab] = 1),
      (hF[O.g.Ac] = 1),
      (hF[O.g.vb] = 1),
      (hF[O.g.hc] = 1),
      hF),
    iF = {},
    XE =
      ((iF._cs = 1),
      (iF._useUp = 1),
      (iF.allowAnchor = 1),
      (iF.allowLinker = 1),
      (iF.alwaysSendReferrer = 1),
      (iF.clientId = 1),
      (iF.cookieDomain = 1),
      (iF.cookieExpires = 1),
      (iF.cookieFlags = 1),
      (iF.cookieName = 1),
      (iF.cookiePath = 1),
      (iF.cookieUpdate = 1),
      (iF.legacyCookieDomain = 1),
      (iF.legacyHistoryImport = 1),
      (iF.name = 1),
      (iF.sampleRate = 1),
      (iF.siteSpeedSampleRate = 1),
      (iF.storage = 1),
      (iF.storeGac = 1),
      (iF.useAmpClientId = 1),
      (iF._cd2l = 1),
      iF),
    ZE = { anonymize_ip: 1 },
    jF = {},
    yE =
      ((jF.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (jF.app_id = 1),
      (jF.app_installer_id = 1),
      (jF.app_name = 1),
      (jF.app_version = 1),
      (jF.description = "exDescription"),
      (jF.fatal = "exFatal"),
      (jF.language = 1),
      (jF.page_hostname = "hostname"),
      (jF.transport_type = "transport"),
      (jF[O.g.Aa] = "currencyCode"),
      (jF[O.g.Yg] = 1),
      (jF[O.g.wa] = "location"),
      (jF[O.g.od] = "page"),
      (jF[O.g.Fa] = "referrer"),
      (jF[O.g.ib] = "title"),
      (jF[O.g.Of] = 1),
      (jF[O.g.Ca] = 1),
      jF),
    kF = {},
    YE =
      ((kF.content_id = 1),
      (kF.event_action = 1),
      (kF.event_category = 1),
      (kF.event_label = 1),
      (kF.link_attribution = 1),
      (kF.name = 1),
      (kF[O.g.sa] = 1),
      (kF[O.g.Xg] = 1),
      (kF[O.g.Oa] = 1),
      (kF[O.g.na] = 1),
      kF),
    WE = {
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    },
    TE = [
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ],
    lF = {},
    JE = ((lF.levels = 1), (lF[O.g.Sa] = "duration"), (lF[O.g.Ac] = 1), lF),
    mF = {},
    fF =
      ((mF.anonymize_ip = 1),
      (mF.fatal = 1),
      (mF.send_page_view = 1),
      (mF.store_gac = 1),
      (mF.use_amp_client_id = 1),
      (mF[O.g.ra] = 1),
      (mF[O.g.Yg] = 1),
      mF),
    nF = {},
    NE =
      ((nF.checkout_progress = 1),
      (nF.select_content = 1),
      (nF.set_checkout_option = 1),
      (nF[O.g.wc] = 1),
      (nF[O.g.xc] = 1),
      (nF[O.g.Zb] = 1),
      (nF[O.g.yc] = 1),
      (nF[O.g.pb] = 1),
      (nF[O.g.Kb] = 1),
      (nF[O.g.qb] = 1),
      (nF[O.g.Ma] = 1),
      (nF[O.g.zc] = 1),
      (nF[O.g.Qa] = 1),
      nF),
    oF = {},
    dF =
      ((oF.checkout_progress = 1),
      (oF.set_checkout_option = 1),
      (oF[O.g.wg] = 1),
      (oF[O.g.xg] = 1),
      (oF[O.g.wc] = 1),
      (oF[O.g.xc] = 1),
      (oF[O.g.yg] = 1),
      (oF[O.g.Zb] = 1),
      (oF[O.g.Ma] = 1),
      (oF[O.g.zc] = 1),
      (oF[O.g.zg] = 1),
      oF),
    pF = {},
    eF =
      ((pF.generate_lead = 1),
      (pF.login = 1),
      (pF.search = 1),
      (pF.select_content = 1),
      (pF.share = 1),
      (pF.sign_up = 1),
      (pF.view_search_results = 1),
      (pF[O.g.yc] = 1),
      (pF[O.g.pb] = 1),
      (pF[O.g.Kb] = 1),
      (pF[O.g.qb] = 1),
      (pF[O.g.Qa] = 1),
      pF),
    qF = {},
    cF =
      ((qF.view_search_results = 1),
      (qF[O.g.pb] = 1),
      (qF[O.g.qb] = 1),
      (qF[O.g.Qa] = 1),
      qF),
    RE = {};
  function rF(a, b, c, d) {}
  rF.F = "internal.executeEventProcessor";
  function sF(a) {
    var b;
    K(this.getName(), ["javascript:!string"], arguments);
    L(this, "unsafe_run_arbitrary_javascript");
    try {
      var c = B.google_tag_manager;
      c && typeof c.e === "function" && (b = c.e(a));
    } catch (d) {}
    return hd(b, this.D, 1);
  }
  sF.F = "internal.executeJavascriptString";
  function tF(a) {
    var b;
    return b;
  }
  function uF(a) {
    var b = {};
    return hd(b);
  }
  uF.F = "internal.getAdsCookieWritingOptions";
  function vF(a) {
    var b = !1;
    return b;
  }
  vF.F = "internal.getAllowAdPersonalization";
  function wF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  wF.F = "internal.getAuid";
  var xF = null;
  function yF() {
    var a = new La();
    return a;
  }
  yF.T = "getContainerVersion";
  function zF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    K(this.getName(), ["name:!string", "decode:?boolean"], arguments),
      L(this, "get_cookies", a),
      (c = hd(Qo(a, void 0, !!b), this.D));
    return c;
  }
  zF.T = "getCookieValues";
  function AF() {
    return ol();
  }
  AF.F = "internal.getCountryCode";
  function BF() {
    var a = [];
    return hd(a);
  }
  BF.F = "internal.getDestinationIds";
  function CF(a) {
    var b = new La();
    return b;
  }
  CF.F = "internal.getDeveloperIds";
  function DF(a, b) {
    var c = null;
    return c;
  }
  DF.F = "internal.getElementAttribute";
  function EF(a) {
    var b = null;
    return b;
  }
  EF.F = "internal.getElementById";
  function FF(a) {
    var b = "";
    return b;
  }
  FF.F = "internal.getElementInnerText";
  function GF(a, b) {
    var c = null;
    return c;
  }
  GF.F = "internal.getElementProperty";
  function HF(a) {
    var b;
    return b;
  }
  HF.F = "internal.getElementValue";
  function IF(a) {
    var b = 0;
    return b;
  }
  IF.F = "internal.getElementVisibilityRatio";
  function JF(a) {
    var b = null;
    return b;
  }
  JF.F = "internal.getElementsByCssSelector";
  function KF(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    L(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = BA(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
            for (var v = r[u].split("."), t = 0; t < v.length; t++)
              n.push(v[t]), t !== v.length - 1 && n.push(m);
            u !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), A = y.next();
          !A.done;
          A = y.next()
        ) {
          var C = A.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), I = D.next(); !I.done; I = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[I.value];
        }
        c = f;
      } else c = void 0;
    }
    b = hd(c, this.D, 1);
    return b;
  }
  KF.F = "internal.getEventData";
  var LF = {};
  LF.enableAWFledge = R(30);
  LF.enableAdsConversionValidation = R(15);
  LF.enableAutoPhoneAndAddressDetection = R(28);
  LF.enableAutoPiiOnPhoneAndAddress = R(29);
  LF.enableCachedEcommerceData = R(36);
  LF.enableCloudRecommentationsErrorLogging = R(37);
  LF.enableCloudRecommentationsSchemaIngestion = R(38);
  LF.enableCloudRetailInjectPurchaseMetadata = R(40);
  LF.enableCloudRetailLogging = R(39);
  LF.enableCloudRetailPageCategories = R(41);
  LF.enableConsentDisclosureActivity = R(43);
  LF.enableDCFledge = R(48);
  LF.enableDecodeUri = R(74);
  LF.enableDeferAllEnhancedMeasurement = R(49);
  LF.enableDmaBlockDisclosure = R(51);
  LF.enableFormSkipValidation = R(68);
  LF.enableGa4OutboundClicksFix = R(77);
  LF.enableGaAdsConversions = R(96);
  LF.enableMerchantRenameForBasketData = R(91);
  LF.enableUrlDecodeEventUsage = R(115);
  LF.enableZoneConfigInChildContainers = R(118);
  LF.useEnableAutoEventOnFormApis = R(129);
  LF.autoPiiEligible = tl();
  function MF() {
    return hd(LF);
  }
  MF.F = "internal.getFlags";
  function NF() {
    return new ed(Zz);
  }
  NF.F = "internal.getHtmlId";
  function OF(a) {
    var b;
    return b;
  }
  OF.F = "internal.getIframingState";
  function PF(a, b) {
    var c = {};
    return hd(c);
  }
  PF.F = "internal.getLinkerValueFromLocation";
  function QF() {
    var a = new La();
    return a;
  }
  QF.F = "internal.getPrivacyStrings";
  function RF(a, b) {
    var c;
    return c;
  }
  RF.F = "internal.getProductSettingsParameter";
  function SF(a, b) {
    var c;
    K(this.getName(), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    L(this, "get_url", "query", a);
    var d = yj(Ej(B.location.href), "query"),
      e = xj(d, a, b);
    c = hd(e, this.D);
    return c;
  }
  SF.T = "getQueryParameters";
  function TF(a, b) {
    var c;
    return c;
  }
  TF.T = "getReferrerQueryParameters";
  function UF(a) {
    var b = "";
    K(this.getName(), ["component:?string"], arguments),
      L(this, "get_referrer", a),
      (b = Aj(Ej(E.referrer), a));
    return b;
  }
  UF.T = "getReferrerUrl";
  function VF() {
    return pl();
  }
  VF.F = "internal.getRegionCode";
  function WF(a, b) {
    var c;
    return c;
  }
  WF.F = "internal.getRemoteConfigParameter";
  function XF() {
    var a = new La();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  XF.F = "internal.getScreenDimensions";
  function YF() {
    var a = "";
    return a;
  }
  YF.F = "internal.getTopSameDomainUrl";
  function ZF() {
    var a = "";
    return a;
  }
  ZF.F = "internal.getTopWindowUrl";
  function $F(a) {
    var b = "";
    K(this.getName(), ["component:?string"], arguments),
      L(this, "get_url", a),
      (b = yj(Ej(B.location.href), a));
    return b;
  }
  $F.T = "getUrl";
  function aG() {
    L(this, "get_user_agent");
    return gc.userAgent;
  }
  aG.F = "internal.getUserAgent";
  function bG() {
    var a;
    return hd(a ? xu(a) : null);
  }
  bG.F = "internal.getUserAgentClientHints";
  function jG() {
    return (B.gaGlobal = B.gaGlobal || {});
  }
  function kG() {
    var a = jG();
    a.hid = a.hid || fb();
    return a.hid;
  }
  function lG(a, b) {
    var c = jG();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function HG(a) {
    if (Qt(a) || fj()) a.j[O.g.yj] = pl() || ol();
    !Qt(a) && fj() && (a.j[O.g.Hj] = "::");
  }
  function IG(a) {
    if (R(69) && fj()) {
      ls(a);
      ms(a, "cpf", W(a.m, O.g.Na));
      var b = W(a.m, O.g.hc);
      ms(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      ms(a, "cf", W(a.m, O.g.ab));
      ms(a, "cd", fp(W(a.m, O.g.Ra), W(a.m, O.g.vb)));
    }
  }
  var YG = function (a) {
      this.H = a;
      this.j = "";
    },
    ZG = function (a, b) {
      a.C = b;
      return a;
    },
    $G = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (H) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var u = p || [];
            if (Array.isArray(u))
              for (
                var v = Uc(q) ? q : {}, t = l(u), w = t.next();
                !w.done;
                w = t.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            A = m.C;
          if (x && A) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Uc(y) ? y : {}, I = l(C), J = I.next();
                !J.done;
                J = I.next()
              )
                A(J.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function aH(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var NH = window,
    OH = document,
    PH = function (a) {
      var b = NH._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        OH.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && NH["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = NH.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(OH.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return OH.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function $H(a) {
    ib(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[O.g.jb] || {};
    ib(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function DI(a, b) {}
  function EI(a, b) {
    var c = function () {};
    return c;
  }
  function FI(a, b, c) {}
  var GI = EI;
  var HI = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function II(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? G(b) : {};
    xA([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? G(c) : {},
      g = BA(this);
    f.originatingEntity = rB(g);
    ry(oy(a, e), g.eventId, f);
  }
  II.F = "internal.gtagConfig";
  function JI() {
    var a = {};
    return a;
  }
  function LI(a, b) {}
  LI.T = "gtagSet";
  function MI() {
    var a = {};
    return a;
  }
  function NI(a, b) {}
  NI.T = "injectHiddenIframe";
  var OI = mA();
  function PI(a, b, c, d, e) {
    var f = this;
    K(
      this.getName(),
      [
        "html:!*",
        "onSuccess:!Fn",
        "onFailure:!Fn",
        "useIframe:?boolean",
        "supportDocumentWrite:?boolean",
      ],
      arguments
    );
    var g = BA(this);
    d && OI(3), e && (OI(1), OI(2)), nA(g.eventId, g.kb(), OI(void 0), "p");
    if (d && e)
      throw Error("useIframe and supportDocumentWrite cannot both be true.");
    L(this, "unsafe_inject_arbitrary_html", d, e);
    var k = R(87)
        ? function () {
            return void b.invoke(f.D);
          }
        : G(b, this.D),
      m = R(87)
        ? function () {
            return void c.invoke(f.D);
          }
        : G(c, this.D),
      n = G(a, this.D, 1);
    QI(n, k, m, d, e, g);
  }
  var RI = function (a, b, c, d) {
      return function () {
        try {
          if (b.length > 0) {
            var e = b.shift(),
              f = RI(a, b, c, d),
              g = e;
            if (
              String(g.nodeName).toUpperCase() === "SCRIPT" &&
              g.type === "text/gtmscript"
            ) {
              var k = g.text || g.textContent || g.innerHTML || "",
                m = g.getAttribute("data-gtmsrc"),
                n = g.charset || "";
              m
                ? qc(m, f, d, { async: !1, id: e.id, text: k, charset: n }, a)
                : ((g = E.createElement("script")),
                  (g.async = !1),
                  (g.type = "text/javascript"),
                  (g.id = e.id),
                  (g.text = k),
                  (g.charset = n),
                  f && (g.onload = f),
                  a.insertBefore(g, null));
              m || f();
            } else if (
              e.innerHTML &&
              e.innerHTML.toLowerCase().indexOf("<script") >= 0
            ) {
              for (var p = []; e.firstChild; )
                p.push(e.removeChild(e.firstChild));
              a.insertBefore(e, null);
              RI(e, p, f, d)();
            } else a.insertBefore(e, null), f();
          } else c();
        } catch (q) {
          d();
        }
      };
    },
    QI = function (a, b, c, d, e, f) {
      if (E.body) {
        var g = dA(a, b, c);
        a = g.mk;
        b = g.onSuccess;
        if (d) {
        } else e ? SI(a, b, c) : RI(E.body, zc(a), b, c)();
      } else
        B.setTimeout(function () {
          QI(a, b, c, d, e, f);
        });
    };
  PI.F = "internal.injectHtml";
  var TI = {};
  var UI = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          qc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) F(g[k]);
              g.push = function (m) {
                F(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) F(g[k]);
              e[f] = null;
            },
            b
          ))
      : qc(a, c, d, b);
  };
  function VI(a, b, c, d) {
    if (!Lo()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      L(this, "inject_script", a);
      var e = this.D;
      UI(
        a,
        void 0,
        function () {
          b && b.nb(e);
        },
        function () {
          c && c.nb(e);
        },
        TI,
        d
      );
    }
  }
  var WI = { dl: 1, id: 1 },
    XI = {};
  function YI(a, b, c, d) {}
  VI.T = "injectScript";
  YI.F = "internal.injectScript";
  function ZI(a) {
    var b = !0;
    return b;
  }
  ZI.T = "isConsentGranted";
  function $I(a) {
    var b = !1;
    return b;
  }
  $I.F = "internal.isDebugMode";
  function aJ() {
    return rl();
  }
  aJ.F = "internal.isDmaRegion";
  function bJ(a) {
    var b = !1;
    return b;
  }
  bJ.F = "internal.isEntityInfrastructure";
  function cJ() {
    var a = !1;
    return a;
  }
  cJ.F = "internal.isLandingPage";
  function dJ() {
    var a = Zg(function (b) {
      BA(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function eJ(a) {
    var b = void 0;
    return hd(b);
  }
  eJ.F = "internal.legacyParseUrl";
  function fJ() {
    try {
      var a = B.localStorage;
      a.setItem("localstorage.test", "localstorage.test");
      a.removeItem("localstorage.test");
      return !0;
    } catch (b) {}
    return !1;
  }
  var gJ = {
    getItem: function (a) {
      var b = null;
      (a = String(a)),
        L(this, "access_local_storage", "read", a),
        (b = B.localStorage.getItem(a));
      return b;
    },
    setItem: function (a, b) {
      a = String(a);
      L(this, "access_local_storage", "write", a);
      try {
        return B.localStorage.setItem(a, String(b)), !0;
      } catch (c) {}
      return !1;
    },
    removeItem: function (a) {
      (a = String(a)),
        L(this, "access_local_storage", "write", a),
        B.localStorage.removeItem(a);
    },
  };
  function hJ() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = G(a[b], this.D);
    console.log.apply(console, a);
  }
  hJ.T = "logToConsole";
  function iJ(a, b) {}
  iJ.F = "internal.mergeRemoteConfig";
  function jJ(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return hd(d);
  }
  jJ.F = "internal.parseCookieValuesFromString";
  function kJ(a) {
    var b = void 0;
    return b;
  }
  kJ.T = "parseUrl";
  function lJ(a) {}
  lJ.F = "internal.processAsNewEvent";
  function mJ(a, b, c) {
    var d;
    return d;
  }
  mJ.F = "internal.pushToDataLayer";
  function nJ(a) {
    var b = !1;
    return b;
  }
  nJ.T = "queryPermission";
  function oJ() {
    var a = "";
    return a;
  }
  oJ.T = "readCharacterSet";
  function pJ() {
    return Ii.ob;
  }
  pJ.F = "internal.readDataLayerName";
  function qJ() {
    var a = "";
    return a;
  }
  qJ.T = "readTitle";
  function rJ(a, b) {
    var c = this;
  }
  rJ.F = "internal.registerCcdCallback";
  function sJ(a) {
    return !0;
  }
  sJ.F = "internal.registerDestination";
  var tJ = ["config", "event", "get", "set"];
  function uJ(a, b, c) {}
  uJ.F = "internal.registerGtagCommandListener";
  function vJ(a, b) {
    var c = !1;
    return c;
  }
  vJ.F = "internal.removeDataLayerEventListener";
  function wJ(a, b) {}
  wJ.F = "internal.removeFormData";
  function xJ() {}
  xJ.T = "resetDataLayer";
  function yJ(a, b, c) {
    var d = void 0;
    return d;
  }
  yJ.F = "internal.scrubUrlParams";
  function zJ(a) {}
  zJ.F = "internal.sendAdsHit";
  function AJ(a, b, c, d) {}
  AJ.F = "internal.sendGtagEvent";
  function BJ(a, b, c) {
    K(
      this.getName(),
      ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"],
      arguments
    );
    L(this, "send_pixel", a);
    var d = this.D;
    tc(
      a,
      function () {
        b instanceof $c && b.nb(d);
      },
      function () {
        c instanceof $c && c.nb(d);
      }
    );
  }
  BJ.T = "sendPixel";
  function CJ(a, b) {}
  CJ.F = "internal.setAnchorHref";
  function DJ(a) {}
  DJ.F = "internal.setContainerConsentDefaults";
  function EJ(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    K(
      this.getName(),
      ["name:!string", "value:?string", "options:?PixieMap", "encode:?boolean"],
      arguments
    );
    var g = c ? G(c, this.D) : void 0,
      k = {};
    k.encode = !!d;
    g &&
      ((k.path = g.path),
      (k.domain = g.domain),
      (k.expires = g.expires),
      (k.kn = g.samesite),
      (k.Mm = g["max-age"]),
      (k.secure = g.secure));
    f =
      Xo(a, b, k, function (m, n) {
        L(e, "set_cookies", m, n);
      }) === 0;
    return f;
  }
  EJ.T = "setCookie";
  function FJ(a) {}
  FJ.F = "internal.setCorePlatformServices";
  function GJ(a, b) {}
  GJ.F = "internal.setDataLayerValue";
  function HJ(a) {}
  HJ.T = "setDefaultConsentState";
  function IJ(a, b) {}
  IJ.F = "internal.setDelegatedConsentType";
  function JJ(a, b) {}
  JJ.F = "internal.setFormAction";
  function KJ(a, b, c) {}
  KJ.F = "internal.setInCrossContainerData";
  function LJ(a, b, c) {
    K(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    L(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = xb(d, [B, E]),
      f = d.pop();
    if (e && (e[f] === void 0 || c)) return (e[f] = G(b, this.D, 2)), !0;
    return !1;
  }
  LJ.T = "setInWindow";
  function MJ(a, b, c) {}
  MJ.F = "internal.setProductSettingsParameter";
  function NJ(a, b, c) {}
  NJ.F = "internal.setRemoteConfigParameter";
  function OJ(a, b, c, d) {
    var e = this;
  }
  OJ.T = "sha256";
  function PJ(a, b, c) {}
  PJ.F = "internal.sortRemoteConfigParameters";
  function QJ(a, b) {
    var c = void 0;
    return c;
  }
  QJ.F = "internal.subscribeToCrossContainerData";
  var RJ = {},
    SJ = {};
  RJ.getItem = function (a) {
    var b = null;
    return b;
  };
  RJ.setItem = function (a, b) {};
  RJ.removeItem = function (a) {};
  RJ.clear = function () {};
  RJ.T = "templateStorage";
  function TJ(a, b) {
    var c = !1;
    return c;
  }
  TJ.F = "internal.testRegex";
  function UJ(a) {
    var b;
    return b;
  }
  function VJ(a) {
    var b;
    return b;
  }
  VJ.F = "internal.unsiloId";
  function WJ(a, b) {
    var c;
    return c;
  }
  WJ.F = "internal.unsubscribeFromCrossContainerData";
  function XJ(a) {}
  XJ.T = "updateConsentState";
  var YJ;
  function ZJ(a, b, c) {
    YJ = YJ || new jh();
    YJ.add(a, b, c);
  }
  function $J(a, b) {
    var c = (YJ = YJ || new jh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = bb(b) ? Gg(a, b) : Hg(a, b);
  }
  function aK() {
    return function (a) {
      var b;
      var c = YJ;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.kb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function bK() {
    var a = function (c) {
        return void $J(c.F, c);
      },
      b = function (c) {
        return void ZJ(c.T, c);
      };
    b(vA);
    b(CA);
    b(QB);
    b(SB);
    b(TB);
    b($B);
    b(bC);
    b(fC);
    b(dJ());
    b(hC);
    b(yF);
    b(zF);
    b(SF);
    b(TF);
    b(UF);
    b($F);
    b(LI);
    b(NI);
    b(VI);
    b(ZI);
    b(hJ);
    b(kJ);
    b(nJ);
    b(oJ);
    b(qJ);
    b(BJ);
    b(EJ);
    b(HJ);
    b(LJ);
    b(OJ);
    b(RJ);
    b(XJ);
    ZJ("Math", Lg());
    ZJ("Object", hh);
    ZJ("TestHelper", lh());
    ZJ("assertApi", Ig);
    ZJ("assertThat", Jg);
    ZJ("decodeUri", Ng);
    ZJ("decodeUriComponent", Og);
    ZJ("encodeUri", Pg);
    ZJ("encodeUriComponent", Qg);
    ZJ("fail", Vg);
    ZJ("generateRandom", Wg);
    ZJ("getTimestamp", Xg);
    ZJ("getTimestampMillis", Xg);
    ZJ("getType", Yg);
    ZJ("makeInteger", $g);
    ZJ("makeNumber", ah);
    ZJ("makeString", bh);
    ZJ("makeTableMap", ch);
    ZJ("mock", fh);
    ZJ("fromBase64", tF, !("atob" in B));
    ZJ("localStorage", gJ, !fJ());
    ZJ("toBase64", UJ, !("btoa" in B));
    a(uA);
    a(yA);
    a(TA);
    a(eB);
    a(lB);
    a(qB);
    a(FB);
    a(OB);
    a(RB);
    a(UB);
    a(VB);
    a(WB);
    a(XB);
    a(YB);
    a(ZB);
    a(aC);
    a(cC);
    a(eC);
    a(gC);
    a(iC);
    a(kC);
    a(lC);
    a(mC);
    a(nC);
    a(oC);
    a(sC);
    a(AC);
    a(BC);
    a(MC);
    a(RC);
    a(WC);
    a(eD);
    a(jD);
    a(wD);
    a(yD);
    a(MD);
    a(ND);
    a(PD);
    a(rF);
    a(sF);
    a(uF);
    a(vF);
    a(wF);
    a(AF);
    a(BF);
    a(CF);
    a(DF);
    a(EF);
    a(FF);
    a(GF);
    a(HF);
    a(IF);
    a(JF);
    a(KF);
    a(MF);
    a(NF);
    a(OF);
    a(PF);
    a(QF);
    a(RF);
    a(VF);
    a(WF);
    a(XF);
    a(YF);
    a(ZF);
    a(bG);
    a(II);
    a(PI);
    a(YI);
    a($I);
    a(aJ);
    a(bJ);
    a(cJ);
    a(eJ);
    a(DB);
    a(iJ);
    a(jJ);
    a(lJ);
    a(mJ);
    a(pJ);
    a(rJ);
    a(sJ);
    a(uJ);
    a(vJ);
    a(wJ);
    a(yJ);
    a(zJ);
    a(AJ);
    a(CJ);
    a(DJ);
    a(FJ);
    a(GJ);
    a(IJ);
    a(JJ);
    a(KJ);
    a(MJ);
    a(NJ);
    a(PJ);
    a(QJ);
    a(TJ);
    a(VJ);
    a(WJ);
    $J("internal.CrossContainerSchema", jC());
    $J("internal.GtagSchema", JI());
    $J("internal.IframingStateSchema", MI());
    ZJ("mockObject", gh);
    return aK();
  }
  var sA;
  function cK() {
    sA.j.j.H = function (a, b, c) {
      Ji.SANDBOXED_JS_SEMAPHORE = Ji.SANDBOXED_JS_SEMAPHORE || 0;
      Ji.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Ji.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function dK(a) {
    a &&
      ib(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Zi[e] = Zi[e] || [];
          Zi[e].push(b);
        }
      });
  }
  function eK(a) {
    ry(my("developer_id." + a, !0), 0, {});
  }
  var fK = Array.isArray;
  function gK(a, b) {
    return Vc(a, b || null);
  }
  function Y(a) {
    return window.encodeURIComponent(a);
  }
  function hK(a, b, c) {
    uc(a, b, c);
  }
  function iK(a, b) {
    if (!a) return !1;
    var c = yj(Ej(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function jK(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var sK = B.clearTimeout,
    tK = B.setTimeout;
  function uK(a, b, c) {
    if (Lo()) {
      b && F(b);
    } else return qc(a, b, c);
  }
  function vK() {
    return B.location.href;
  }
  function wK(a, b) {
    return lj(a, b || 2);
  }
  function xK(a, b) {
    B[a] = b;
  }
  function yK(a, b, c) {
    b && (B[a] === void 0 || (c && !B[a])) && (B[a] = b);
    return B[a];
  }
  function zK(a, b) {
    if (Lo()) {
      b && F(b);
    } else sc(a, b);
  }
  var AK = {};
  var Z = { securityGroups: {} };
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = wK("gtm.referrer", 1) || E.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? yj(
              Ej(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Bj(Ej(String(b)))
        : String(b);
    }),
    (Z.__f.o = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.k = ["google"]),
    (Z.__k = function (a) {
      var b = a.vtp_name,
        c = wK("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return Qo(b, c, d === void 0 ? !0 : !!d)[0];
    }),
    (Z.__k.o = "k"),
    (Z.__k.isVendorTemplate = !0),
    (Z.__k.priorityOverride = 0),
    (Z.__k.isInfrastructure = !0),
    (Z.__k.runInSiloedMode = !1);
  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.o = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!z(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.o = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : wK("gtm.url", 1)) || vK();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Bj(Ej(String(c)));
        var e = Ej(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = yj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = yj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = wK(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Z.__v.o = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.get_referrer = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_referrer = b;
        Z.__get_referrer.o = "get_referrer";
        Z.__get_referrer.isVendorTemplate = !0;
        Z.__get_referrer.priorityOverride = 0;
        Z.__get_referrer.isInfrastructure = !1;
        Z.__get_referrer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urlParts === "any" ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"));
        var d =
            c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (g) {
              if (!z(g)) throw e(f, {}, "URL component must be a string.");
              if (c && c.indexOf(g) < 0)
                throw e(f, {}, "Prohibited URL component: " + g);
              if (g === "query" && d) {
                if (!k)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!z(k)) throw e(f, {}, "Query key must be a string.");
                if (d.indexOf(k) < 0)
                  throw e(f, {}, "Prohibited query key: " + k);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.access_local_storage = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_local_storage = b;
        Z.__access_local_storage.o = "access_local_storage";
        Z.__access_local_storage.isVendorTemplate = !0;
        Z.__access_local_storage.priorityOverride = 0;
        Z.__access_local_storage.isInfrastructure = !1;
        Z.__access_local_storage.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = 0;
          g < c.length;
          g++
        ) {
          var k = c[g],
            m = k.key;
          k.read && e.push(m);
          k.write && f.push(m);
        }
        return {
          assert: function (n, p, q) {
            if (!z(q)) throw d(n, {}, "Key must be a string.");
            if (p === "read") {
              if (e.indexOf(q) > -1) return;
            } else if (p === "write") {
              if (f.indexOf(q) > -1) return;
            } else if (p === "readwrite") {
              if (f.indexOf(q) > -1 && e.indexOf(q) > -1) return;
            } else
              throw d(
                n,
                {},
                "Operation must be either 'read', 'write', or 'readwrite', was " +
                  p
              );
            throw d(
              n,
              {},
              "Prohibited " + p + " on local storage key: " + q + "."
            );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.o = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !z(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && kg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.read_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_data_layer = b;
        Z.__read_data_layer.o = "read_data_layer";
        Z.__read_data_layer.isVendorTemplate = !0;
        Z.__read_data_layer.priorityOverride = 0;
        Z.__read_data_layer.isInfrastructure = !1;
        Z.__read_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedKeys || "specific",
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Keys must be strings.");
            if (c !== "any") {
              try {
                if (kg(g, d)) return;
              } catch (k) {
                throw e(f, {}, "Invalid key filter.");
              }
              throw e(
                f,
                {},
                "Prohibited read from data layer variable: " + g + "."
              );
            }
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.smm = ["google"]),
    (Z.__smm = function (a) {
      var b = a.vtp_input,
        c = jK(a.vtp_map, "key", "value") || {};
      return c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
    }),
    (Z.__smm.o = "smm"),
    (Z.__smm.isVendorTemplate = !0),
    (Z.__smm.priorityOverride = 0),
    (Z.__smm.isInfrastructure = !0),
    (Z.__smm.runInSiloedMode = !1);

  (Z.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (v, t) {
            m[v] = m[v] || t;
          },
          p = function (v, t, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (v) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < v.length; x = { ef: void 0 }, y++)
                (x.ef = {}),
                  ib(
                    v[y],
                    (function (C) {
                      return function (D, I) {
                        w && D === "id"
                          ? (C.ef.promotion_id = I)
                          : w && D === "name"
                          ? (C.ef.promotion_name = I)
                          : (C.ef[D] = I);
                      };
                    })(x)
                  ),
                  m.items.push(x.ef);
            }
            if (t)
              for (var A in t) d.hasOwnProperty(A) ? n(d[A], t[A]) : n(A, t[A]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Uc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Uc(q)) {
          var r = !1,
            u;
          for (u in q)
            q.hasOwnProperty(u) &&
              (r || (c.push(5), (r = !0)),
              u === "currencyCode"
                ? n("currency", q.currencyCode)
                : u === "impressions" && g === O.g.pb
                ? p(q.impressions, null)
                : u === "promoClick" && g === O.g.Kb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : u === "promoView" && g === O.g.qb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(u)
                ? g === e[u] && p(q[u].products, q[u].actionField)
                : (m[u] = q[u]));
          gK(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Z.__gaawe = f;
        Z.__gaawe.o = "gaawe";
        Z.__gaawe.isVendorTemplate = !0;
        Z.__gaawe.priorityOverride = 0;
        Z.__gaawe.isInfrastructure = !1;
        Z.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (z(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (rh.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = jK(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var u = jK(f.vtp_eventParameters, "name", "value"),
            v;
          for (v in u) u.hasOwnProperty(v) && (m[v] = u[v]);
          var t = f.vtp_userDataVariable;
          t && (m[O.g.Ga] = t);
          if (m.hasOwnProperty(O.g.jb) || f.vtp_userProperties) {
            var w = m[O.g.jb] || {};
            gK(jK(f.vtp_userProperties, "name", "value"), w);
            m[O.g.jb] = w;
          }
          var x = {
            originatingEntity: lx(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, sh, function (C) {
            return mb(C);
          });
          a(m, uh, function (C) {
            return Number(C);
          });
          var A = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          ry(py(g, k, m), A, x);
          F(f.vtp_gtmOnSuccess);
        } else F(f.vtp_gtmOnFailure);
      });
    })();

  (Z.securityGroups.send_pixel = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__send_pixel = b;
        Z.__send_pixel.o = "send_pixel";
        Z.__send_pixel.isVendorTemplate = !0;
        Z.__send_pixel.priorityOverride = 0;
        Z.__send_pixel.isInfrastructure = !1;
        Z.__send_pixel.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedUrls || "specific",
          d = b.vtp_urls || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "URL must be a string.");
            try {
              if (
                (c === "any" && yg(Ej(g))) ||
                (c === "specific" && Bg(Ej(g), d))
              )
                return;
            } catch (k) {
              throw e(f, {}, "Invalid URL filter.");
            }
            throw e(f, {}, "Prohibited URL: " + g + ".");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.o = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (Bg(Ej(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.tg = ["google"]),
    (function () {
      function a(k) {
        g.push(k);
        g.length > 1 ||
          F(function () {
            var m = g.join(",");
            g = [];
            rz({ event: "gtm.triggerGroup", "gtm.triggers": m });
          });
      }
      function b(k, m) {
        var n = d[m],
          p = n.indexOf(k);
        p !== -1 && (n.splice(p, 1), n.length || a(m));
      }
      function c(k) {
        F(k.vtp_gtmOnSuccess);
        var m = k.vtp_uniqueTriggerId,
          n = k.vtp_triggerIds,
          p = k.vtp_firingId;
        if (k.vtp_isListeningTag) {
          var q = e[p];
          q ? b(p, q) : f.push(p);
        } else {
          d[m] = n;
          for (var r = 0, u; (u = n[r]); r++) e[u] = m;
          for (var v = 0; v < f.length; v++) b(f[v], m);
        }
      }
      var d = {},
        e = {},
        f = [],
        g = [];
      Z.__tg = c;
      Z.__tg.o = "tg";
      Z.__tg.isVendorTemplate = !0;
      Z.__tg.priorityOverride = 0;
      Z.__tg.isInfrastructure = !1;
      Z.__tg.runInSiloedMode = !1;
    })();

  (Z.securityGroups.ua = ["google"]),
    (function () {
      function a(n, p) {
        for (var q in n)
          if (!k[q] && n.hasOwnProperty(q)) {
            var r = g[q] ? mb(n[q]) : n[q];
            q != "anonymizeIp" || r || (r = void 0);
            p[q] = r;
          }
      }
      function b(n) {
        var p = {};
        n.vtp_gaSettings &&
          gK(jK(n.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), p);
        gK(jK(n.vtp_fieldsToSet, "fieldName", "value"), p);
        mb(p.urlPassthrough) && (p._useUp = !0);
        n.vtp_transportUrl && (p._x_19 = n.vtp_transportUrl);
        return p;
      }
      function c(n, p) {
        return p === void 0 ? p : n(p);
      }
      function d(n, p, q) {
        var r = function (M, aa, da) {
            for (var T in M)
              if (u.hasOwnProperty(T)) {
                var S = da[aa] || {};
                S.actionField = S.actionField || {};
                S.actionField[u[T]] = M[T];
                da[aa] = S;
              }
          },
          u = {
            transaction_id: "id",
            affiliation: "affiliation",
            value: "revenue",
            tax: "tax",
            shipping: "shipping",
            coupon: "coupon",
            item_list_name: "list",
          },
          v = {},
          t =
            ((v[O.g.yc] = "click"),
            (v[O.g.Qa] = "detail"),
            (v[O.g.wc] = "add"),
            (v[O.g.xc] = "remove"),
            (v[O.g.Zb] = "checkout"),
            (v[O.g.Ma] = "purchase"),
            (v[O.g.zc] = "refund"),
            v),
          w;
        if (n.vtp_useEcommerceDataLayer) {
          var x = !1;
          n.vtp_useGA4SchemaForEcommerce &&
            ((w = n.vtp_gtmCachedValues.eventModel), (x = !!w));
          x || (w = wK("ecommerce", 1));
        } else
          n.vtp_ecommerceMacroData &&
            ((w = n.vtp_ecommerceMacroData.ecommerce),
            !w &&
              n.vtp_useGA4SchemaForEcommerce &&
              (w = n.vtp_ecommerceMacroData));
        if (!Uc(w)) return;
        w = Object(w);
        var y = {},
          A = w.currencyCode;
        n.vtp_useGA4SchemaForEcommerce && (A = A || w.currency);
        var C = rb(p, "currencyCode", A);
        C && (y.currencyCode = C);
        w.impressions && (y.impressions = w.impressions);
        w.promoView && (y.promoView = w.promoView);
        if (n.vtp_useGA4SchemaForEcommerce) {
          if (q === O.g.pb && !w.impressions)
            w.items &&
              ((y.impressions = w.items),
              (y.translateIfKeyEquals = "impressions"));
          else if (q === O.g.qb && !w.promoView)
            (w.promoView = {}),
              w.items &&
                ((y.promoView = {}),
                (y.promoView.promotions = w.items),
                (y.translateIfKeyEquals = "promoView"));
          else if (q === O.g.Kb && !w.promoClick)
            (w.promoClick = {}),
              w.items &&
                ((y.promoClick = {}),
                (y.promoClick.promotions = w.items),
                (y.translateIfKeyEquals = "promoClick"),
                r(w, "promoClick", y));
          else if (t.hasOwnProperty(q)) {
            var D = t[q];
            !w[D] &&
              w.items &&
              ((y[D] = {}),
              (y[D].products = w.items),
              (y.translateIfKeyEquals = "products"),
              r(w, D, y));
          }
          var I = y.translateIfKeyEquals;
          if (I === "promoClick" || I === "products") return y;
        }
        if (w.promoClick) return (y.promoClick = w.promoClick), y;
        for (
          var J =
              "detail checkout checkout_option click add remove purchase refund".split(
                " "
              ),
            H = 0;
          H < J.length;
          H++
        ) {
          var U = w[J[H]];
          if (U) return (y[J[H]] = U), y;
        }
        n.vtp_useGA4SchemaForEcommerce && t.hasOwnProperty(q) && r(w, t[q], y);
        return y;
      }
      function e(n, p) {
        if (
          !f &&
          ((!fj() && !Ri) ||
            !p._x_19 ||
            n.vtp_useDebugVersion ||
            n.vtp_useInternalVersion)
        ) {
          var q = n.vtp_useDebugVersion
            ? "u/analytics_debug.js"
            : "analytics.js";
          n.vtp_useInternalVersion &&
            !n.vtp_useDebugVersion &&
            (q = "internal/" + q);
          f = !0;
          var r = n.vtp_gtmOnFailure,
            u = Jj(p._x_19, "/analytics.js"),
            v = ss(
              "https:",
              "http:",
              "//www.google-analytics.com/" + q,
              p && !!p.forceSSL
            );
          uK(
            q === "analytics.js" && u ? u : v,
            function () {
              var t = ux();
              (t && t.loaded) || r();
            },
            r
          );
        }
      }
      var f,
        g = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        k = { urlPassthrough: !0 },
        m = function (n) {
          function p() {
            if (
              n.vtp_doubleClick ||
              n.vtp_advertisingFeaturesType == "DISPLAY_FEATURES"
            )
              w.displayfeatures = !0;
          }
          var q = {},
            r = {},
            u = {};
          if (n.vtp_gaSettings) {
            var v = n.vtp_gaSettings;
            gK(jK(v.vtp_contentGroup, "index", "group"), q);
            gK(jK(v.vtp_dimension, "index", "dimension"), r);
            gK(jK(v.vtp_metric, "index", "metric"), u);
            var t = gK(v);
            t.vtp_fieldsToSet = void 0;
            t.vtp_contentGroup = void 0;
            t.vtp_dimension = void 0;
            t.vtp_metric = void 0;
            n = gK(n, t);
          }
          gK(jK(n.vtp_contentGroup, "index", "group"), q);
          gK(jK(n.vtp_dimension, "index", "dimension"), r);
          gK(jK(n.vtp_metric, "index", "metric"), u);
          var w = b(n),
            x = String(n.vtp_trackingId || ""),
            y = "",
            A = "",
            C = "";
          n.vtp_setTrackerName && typeof n.vtp_trackerName == "string"
            ? n.vtp_trackerName !== "" &&
              ((C = n.vtp_trackerName), (A = C + "."))
            : ((C = "gtm" + $i()), (A = C + "."));
          var D = function (ia, ea) {
            for (var sa in ea) ea.hasOwnProperty(sa) && (w[ia + sa] = ea[sa]);
          };
          D("contentGroup", q);
          D("dimension", r);
          D("metric", u);
          n.vtp_enableEcommerce &&
            ((y = n.vtp_gtmCachedValues.event),
            (w.gtmEcommerceData = d(n, w, y)));
          if (n.vtp_trackType === "TRACK_EVENT")
            (y = "track_event"),
              p(),
              (w.eventCategory = String(n.vtp_eventCategory)),
              (w.eventAction = String(n.vtp_eventAction)),
              (w.eventLabel = c(String, n.vtp_eventLabel)),
              (w.value = c(lb, n.vtp_eventValue));
          else if (n.vtp_trackType == "TRACK_PAGEVIEW") {
            if (
              ((y = O.g.ac),
              p(),
              n.vtp_advertisingFeaturesType ==
                "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" &&
                (w.remarketingLists = !0),
              n.vtp_autoLinkDomains)
            ) {
              var I = {};
              I[O.g.X] = n.vtp_autoLinkDomains;
              I.use_anchor = n.vtp_useHashAutoLink;
              I[O.g.yb] = n.vtp_decorateFormsAutoLink;
              w[O.g.sa] = I;
            }
          } else
            n.vtp_trackType === "TRACK_SOCIAL"
              ? ((y = "track_social"),
                (w.socialNetwork = String(n.vtp_socialNetwork)),
                (w.socialAction = String(n.vtp_socialAction)),
                (w.socialTarget = String(n.vtp_socialActionTarget)))
              : n.vtp_trackType == "TRACK_TIMING" &&
                ((y = "timing_complete"),
                (w.eventCategory = String(n.vtp_timingCategory)),
                (w.timingVar = String(n.vtp_timingVar)),
                (w.value = lb(n.vtp_timingValue)),
                (w.eventLabel = c(String, n.vtp_timingLabel)));
          n.vtp_enableRecaptcha && (w.enableRecaptcha = !0);
          n.vtp_enableLinkId && (w.enableLinkId = !0);
          var J = {};
          a(w, J);
          w.name || (J.gtmTrackerName = C);
          J.gaFunctionName = n.vtp_functionName;
          n.vtp_nonInteraction !== void 0 &&
            (J.nonInteraction = n.vtp_nonInteraction);
          var H = Dm(
            Cm(
              Bm(
                Am(
                  tm(new sm(n.vtp_gtmEventId, n.vtp_gtmPriorityId), J),
                  n.vtp_gtmOnSuccess
                ),
                n.vtp_gtmOnFailure
              ),
              !0
            )
          );
          n.vtp_useDebugVersion &&
            n.vtp_useInternalVersion &&
            (H.eventMetadata.suppress_script_load = !0);
          QE(x, y, Date.now(), H);
          var U = xx(n.vtp_functionName);
          if (bb(U)) {
            var M = function (ia) {
              var ea = [].slice.call(arguments, 0);
              ea[0] = A + ea[0];
              U.apply(window, ea);
            };
            if (n.vtp_trackType == "TRACK_TRANSACTION") {
            } else if (n.vtp_trackType == "DECORATE_LINK") {
            } else if (n.vtp_trackType == "DECORATE_FORM") {
            } else if (n.vtp_trackType == "TRACK_DATA") {
            }
            e(n, w);
          } else F(n.vtp_gtmOnFailure);
        };
      Z.__ua = m;
      Z.__ua.o = "ua";
      Z.__ua.isVendorTemplate = !0;
      Z.__ua.priorityOverride = 0;
      Z.__ua.isInfrastructure = !1;
      Z.__ua.runInSiloedMode = !1;
    })();
  (Z.securityGroups.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_url = b;
        Z.__get_url.o = "get_url";
        Z.__get_url.isVendorTemplate = !0;
        Z.__get_url.priorityOverride = 0;
        Z.__get_url.isInfrastructure = !1;
        Z.__get_url.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urlParts === "any" ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (g) {
              if (!z(g)) throw e(f, {}, "URL component must be a string.");
              if (c && c.indexOf(g) < 0)
                throw e(f, {}, "Prohibited URL component: " + g);
              if (g === "query" && d) {
                if (!k)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!z(k)) throw e(f, {}, "Query key must be a string.");
                if (d.indexOf(k) < 0)
                  throw e(f, {}, "Prohibited query key: " + k);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.o = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
        Z.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (Bg(Ej(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.unsafe_run_arbitrary_javascript = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__unsafe_run_arbitrary_javascript = b;
        Z.__unsafe_run_arbitrary_javascript.o =
          "unsafe_run_arbitrary_javascript";
        Z.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
        Z.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
        Z.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
        Z.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Z.securityGroups.gas = ["google"]),
    (Z.__gas = function (a) {
      var b = gK(a),
        c = b;
      c[Le.oa] = null;
      c[Le.rh] = null;
      var d = (b = c);
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      e !== void 0 &&
        (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
        delete d.vtp_cookieDomain);
      return b;
    }),
    (Z.__gas.o = "gas"),
    (Z.__gas.isVendorTemplate = !0),
    (Z.__gas.priorityOverride = 0),
    (Z.__gas.isInfrastructure = !1),
    (Z.__gas.runInSiloedMode = !1);

  (Z.securityGroups.unsafe_inject_arbitrary_html = ["google"]),
    (function () {
      function a(b, c, d) {
        return { useIframe: c, supportDocumentWrite: d };
      }
      (function (b) {
        Z.__unsafe_inject_arbitrary_html = b;
        Z.__unsafe_inject_arbitrary_html.o = "unsafe_inject_arbitrary_html";
        Z.__unsafe_inject_arbitrary_html.isVendorTemplate = !0;
        Z.__unsafe_inject_arbitrary_html.priorityOverride = 0;
        Z.__unsafe_inject_arbitrary_html.isInfrastructure = !1;
        Z.__unsafe_inject_arbitrary_html.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e && f)
              throw c(
                d,
                {},
                "Only one of useIframe and supportDocumentWrite can be true."
              );
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "useIframe must be a boolean.");
            if (f !== void 0 && typeof f !== "boolean")
              throw c(d, {}, "supportDocumentWrite must be a boolean.");
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.remm = ["google"]),
    (Z.__remm = function (a) {
      for (
        var b = a.vtp_input,
          c = a.vtp_map || [],
          d = a.vtp_fullMatch,
          e = a.vtp_ignoreCase ? "gi" : "g",
          f = a.vtp_defaultValue,
          g = 0;
        g < c.length;
        g++
      ) {
        var k = c[g].key || "";
        d && (k = "^" + k + "$");
        var m = new RegExp(k, e);
        if (m.test(b)) {
          var n = c[g].value;
          a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
          f = n;
          break;
        }
      }
      return f;
    }),
    (Z.__remm.o = "remm"),
    (Z.__remm.isVendorTemplate = !0),
    (Z.__remm.priorityOverride = 0),
    (Z.__remm.isInfrastructure = !0),
    (Z.__remm.runInSiloedMode = !1);

  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.o = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.o = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.set_cookies = ["google"]),
    (function () {
      function a(c, d, e) {
        var f = c.name;
        if (f !== "*" && f !== d) return !1;
        var g = c.domain;
        if (g !== "*") {
          var k = (e || {}).domain;
          if (g === "") {
            if (k != null && k !== "") return !1;
          } else if (g !== k) return !1;
        }
        var m = c.path;
        if (m !== "*") {
          var n = (e || {}).path;
          if (m === "") {
            if (n != null && n !== "") return !1;
          } else if (m !== n) return !1;
        }
        switch (c.secure) {
          case "any":
            break;
          case "secure":
            if (!(e || {}).secure) return !1;
            break;
          case "non_secure":
            if ((e || {}).secure) return !1;
            break;
          default:
            throw Error(
              "Unexpected cookie secure configuration setting: " + c.secure
            );
        }
        var p = (e || {}).expires !== void 0 || (e || {})["max-age"] !== void 0;
        switch (c.session) {
          case "any":
            break;
          case "session":
            if (p) return !1;
            break;
          case "non_session":
            if (!p) return !1;
            break;
          default:
            throw Error(
              "Unexpected cookie session configuration value: " + c.session
            );
        }
        return !0;
      }
      function b(c, d, e) {
        e = e === void 0 ? {} : e;
        return { name: d, options: e };
      }
      (function (c) {
        Z.__set_cookies = c;
        Z.__set_cookies.o = "set_cookies";
        Z.__set_cookies.isVendorTemplate = !0;
        Z.__set_cookies.priorityOverride = 0;
        Z.__set_cookies.isInfrastructure = !1;
        Z.__set_cookies.runInSiloedMode = !1;
      })(function (c) {
        var d = c.vtp_allowedCookies || [],
          e = c.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (!z(g)) throw e(f, {}, "Cookie name must be a string.");
            for (var m = 0; m < d.length; ++m) if (a(d[m], g, k)) return;
            throw e(
              f,
              {},
              "Prohibited from setting cookie " +
                g +
                " with options: " +
                JSON.stringify(k)
            );
          },
          M: b,
        };
      });
    })();

  (Z.securityGroups.get_cookies = ["google"]),
    (function () {
      function a(b, c) {
        return { name: c };
      }
      (function (b) {
        Z.__get_cookies = b;
        Z.__get_cookies.o = "get_cookies";
        Z.__get_cookies.isVendorTemplate = !0;
        Z.__get_cookies.priorityOverride = 0;
        Z.__get_cookies.isInfrastructure = !1;
        Z.__get_cookies.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_cookieAccess || "specific",
          d = b.vtp_cookieNames || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Cookie name must be a string.");
            if (c !== "any" && !(c === "specific" && d.indexOf(g) >= 0))
              throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
          },
          M: a,
        };
      });
    })();
  var BK = {
    dataLayer: mj,
    callback: function (a) {
      Yi.hasOwnProperty(a) && bb(Yi[a]) && Yi[a]();
      delete Yi[a];
    },
    bootstrap: 0,
    _spx: !1,
  };
  (BK.onHtmlSuccess = eA(!0)), (BK.onHtmlFailure = eA(!1));
  function CK() {
    Ji[mk()] = Ji[mk()] || BK;
    wk();
    Ak() ||
      ib(Bk(), function (d, e) {
        dx(d, e.transportUrl, e.context);
        V(92);
      });
    tb(Zi, Z.securityGroups);
    var a = qk(rk()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || V(142);
    aA(),
      qf({
        Em: function (d) {
          return d === Zz;
        },
        Rl: function (d) {
          return new bA(d);
        },
        Fm: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        Ym: function (d) {
          var e;
          if (d === Zz) e = d;
          else {
            var f = $i();
            $z[f] = d;
            e = 'google_tag_manager["rm"]["' + ok() + '"](' + f + ")";
          }
          return e;
        },
      });
    sf = Jf;
  }
  var DK = !1;
  (function (a) {
    function b() {
      n = E.documentElement.getAttribute("data-tag-assistant-present");
      Bz(n) && (m = k.Cj);
    }
    function c() {
      m && jc ? g(m) : a();
    }
    if (!B["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (E.referrer) {
        var e = Ej(E.referrer);
        d = Aj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = Qo("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((B["__TAGGY_INSTALLED"] = !0),
        qc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var t = "GTM",
          w = "GTM";
        Pi && ((t = "OGT"), (w = "GTAG"));
        var x = B["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (B["google.tagmanager.debugui2.queue"] = x),
          qc(
            "https://" +
              Ii.vf +
              "/debug/bootstrap?id=" +
              Pf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              No()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: jc,
            containerProduct: t,
            debug: !1,
            id: Pf.ctid,
            targetRef: { ctid: Pf.ctid, isDestination: gk() },
            aliases: jk(),
            destinations: hk(),
          },
        };
        y.data.resume = function () {
          a();
        };
        Ii.Pk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { pl: 1, Ej: 2, Sj: 3, Fi: 4, Cj: 5 };
    k[k.pl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Ej] = "GTM_DEBUG_PARAM";
    k[k.Sj] = "REFERRER";
    k[k.Fi] = "COOKIE";
    k[k.Cj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = yj(B.location, "query", !1, void 0, "gtm_debug");
    Bz(p) && (m = k.Ej);
    if (!m && E.referrer) {
      var q = Ej(E.referrer);
      Aj(q, "host") === "tagassistant.google.com" && (m = k.Sj);
    }
    if (!m) {
      var r = Qo("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Fi);
    }
    m || b();
    if (!m && Cz(n)) {
      var u = !1;
      vc(
        E,
        "TADebugSignal",
        function () {
          u || ((u = !0), b(), c());
        },
        !1
      );
      B.setTimeout(function () {
        u || ((u = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = DK)) {
        var b;
        a: {
          for (var c = bk(), d = l(ik()), e = d.next(); !e.done; e = d.next())
            if (c.injectedFirstPartyContainers[e.value]) {
              b = !0;
              break a;
            }
          b = !1;
        }
        a = !b;
      }
      if (a) {
        uk();
        if (R(83)) {
        }
        Ya[10] = !0;
        gk();
        if (!Il) {
          Il = !0;
          for (var f = Jl.length - 1; f >= 0; f--) Jl[f]();
          Jl = [];
        }
        no();
        Sl();
        var g = ok();
        if (bk().canonical[g]) {
          var k = Ji.zones;
          k && k.unregisterChild(ik());
          Pw().removeExternalRestrictions(ok());
        } else {
          Cu();
          var m = cj.aa,
            n = Hi.An;
          m.j = new Set();
          if (n !== "")
            for (var p = l(n.split("~")), q = p.next(); !q.done; q = p.next()) {
              var r = Number(q.value);
              isNaN(r) || m.j.add(r);
            }
          cj.H = "";
          cj.Ua =
            "ad_storage|analytics_storage|ad_user_data|ad_personalization";
          cj.P = "ad_storage|analytics_storage|ad_user_data";
          cj.K = "4a90";
          cj.K = "4al0";
          $w();
          for (
            var u = data.resource || {}, v = u.macros || [], t = 0;
            t < v.length;
            t++
          )
            hf.push(v[t]);
          for (var w = u.tags || [], x = 0; x < w.length; x++) lf.push(w[x]);
          for (var y = u.predicates || [], A = 0; A < y.length; A++)
            kf.push(y[A]);
          for (var C = u.rules || [], D = 0; D < C.length; D++) {
            for (var I = C[D], J = {}, H = 0; H < I.length; H++) {
              var U = I[H][0];
              J[U] = Array.prototype.slice.call(I[H], 1);
              (U !== "if" && U !== "unless") || rf(J[U]);
            }
            jf.push(J);
          }
          nf = Z;
          of = gA;
          Lf = new Sf();
          var M = data.sandboxed_scripts,
            aa = data.security_groups;
          a: {
            var da = data.runtime || [],
              T = data.runtime_lines;
            sA = new De();
            cK();
            gf = rA();
            var S = sA,
              N = bK(),
              la = new $c("require", N);
            la.Ia();
            S.j.j.set("require", la);
            for (var ia = [], ea = 0; ea < da.length; ea++) {
              var sa = da[ea];
              if (!Array.isArray(sa) || sa.length < 3) {
                if (sa.length === 0) continue;
                break a;
              }
              T && T[ea] && T[ea].length && Cf(sa, T[ea]);
              try {
                sA.execute(sa), R(95) && Tj && sa[0] === 50 && ia.push(sa[1]);
              } catch (ao) {}
            }
            R(95) && (tf = ia);
          }
          if (M && M.length)
            for (var Ma = ["sandboxedScripts"], za = 0; za < M.length; za++) {
              var Sa = M[za].replace(/^_*/, "");
              Zi[Sa] = Ma;
            }
          dK(aa);
          CK();
          if (!Ti)
            for (
              var jb = rl() ? gj(cj.P) : gj(cj.Ua), lc = 0;
              lc < vl.length;
              lc++
            ) {
              var ge = vl[lc],
                wh = ge,
                EK = jb[ge] ? "granted" : "denied";
              Rk().implicit(wh, EK);
            }
          Az();
          ex = !1;
          fx = 0;
          if (
            (E.readyState === "interactive" && !E.createEventObject) ||
            E.readyState === "complete"
          )
            hx();
          else {
            vc(E, "DOMContentLoaded", hx);
            vc(E, "readystatechange", hx);
            if (E.createEventObject && E.documentElement.doScroll) {
              var yy = !0;
              try {
                yy = !B.frameElement;
              } catch (ao) {}
              yy && ix();
            }
            vc(B, "load", hx);
          }
          fz = !1;
          E.readyState === "complete" ? hz() : vc(B, "load", hz);
          Tj &&
            (Gm(Tm),
            B.setInterval(Sm, 864e5),
            Gm(jA),
            Gm(Ix),
            Gm(Ev),
            Gm(Wm),
            Gm(oA),
            Gm(Tx),
            R(95) && (Gm(Nx), Gm(Ox), Gm(Px)));
          if (Uj) {
            Qk();
            mm();
            var zy,
              Ay = Ej(B.location.href);
            (zy = Ay.hostname + Ay.pathname) &&
              Ik("dl", encodeURIComponent(zy));
            var bo;
            var By = Pf.ctid;
            if (By) {
              var GK = ek.ze ? 1 : 0,
                yh,
                Cy = qk(rk());
              yh = Cy && Cy.context;
              bo =
                By +
                ";" +
                Pf.canonicalContainerId +
                ";" +
                (yh && yh.fromContainerExecution ? 1 : 0) +
                ";" +
                ((yh && yh.source) || 0) +
                ";" +
                GK;
            } else bo = void 0;
            var Dy = bo;
            Dy && Ik("tdp", Dy);
            var Ey = Nn(!0);
            Ey !== void 0 && Ik("frm", String(Ey));
            var co;
            var zh = qk(rk());
            if (zh) {
              for (; zh.parent; ) {
                var Fy = qk(zh.parent);
                if (!Fy) break;
                zh = Fy;
              }
              co = zh;
            } else co = void 0;
            var Uf = co;
            if (!Uf) V(144);
            else if (Uf.canonicalContainerId) {
              var eo;
              a: {
                var Gy,
                  Hy = (Gy = Uf.scriptElement) == null ? void 0 : Gy.src;
                if (Hy) {
                  var fo;
                  try {
                    var Iy;
                    fo =
                      (Iy = Jc()) == null
                        ? void 0
                        : Iy.getEntriesByType("resource");
                  } catch (ao) {}
                  if (fo) {
                    for (
                      var Jy = -1, Ky = l(fo), go = Ky.next();
                      !go.done;
                      go = Ky.next()
                    ) {
                      var Ly = go.value;
                      if (
                        Ly.initiatorType === "script" &&
                        ((Jy += 1), Ly.name === Hy)
                      ) {
                        eo = Jy;
                        break a;
                      }
                    }
                    V(146);
                  } else V(145);
                }
                eo = void 0;
              }
              var My = eo;
              My !== void 0 &&
                (Ik("rtg", String(Uf.canonicalContainerId)),
                Ik("slo", String(My)),
                Ik("hlo", Uf.htmlLoadOrder || "-1"),
                Ik("lst", String(Uf.loadScriptType || "0")));
            }
            var ho;
            var Xj = pk();
            if (Xj) {
              var Ny;
              ho =
                Xj.canonicalContainerId ||
                "_" +
                  (Xj.scriptContainerId ||
                    ((Ny = Xj.destinations) == null ? void 0 : Ny[0]));
            } else ho = void 0;
            var Oy = ho;
            Oy && Ik("pcid", Oy);
            R(35) &&
              (Ik("bt", String(cj.C ? 2 : Ri ? 1 : 0)),
              Ik("ct", String(cj.C ? 0 : Ri ? 1 : Lo() ? 2 : 3)));
          }
          Xz();
          ml(1);
          BB();
          Xi = qb();
          BK.bootstrap = Xi;
          if (R(83)) {
          }
          R(110) &&
            (typeof B.name === "string" &&
            vb(B.name, "web-pixel-sandbox-CUSTOM") &&
            Kc()
              ? eK("dMDg0Yz")
              : B.Shopify && Kc() && eK("dNTU0Yz"));
        }
      }
    } catch (ao) {
      if ((ml(4), Tj)) {
        var HK = Nm(!0, !0);
        uc(HK);
      }
    }
  });
})();
