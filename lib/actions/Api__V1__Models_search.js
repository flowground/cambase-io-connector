/**
 * Auto-generated action file for "Cambase.io" API.
 *
 * Generated at: 2019-05-07T14:39:53.272Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / cambase-io-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Api::V1::Models#search'
 * Endpoint Path: '/api/v1/models/search.json'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "page",
    "q[model_cont]",
    "q[manufacturer_name_cont]",
    "q[shape_eq]",
    "q[resolution_eq]",
    "q[onvif_true]",
    "q[psia_true]",
    "q[ptz_true]",
    "q[infrared_true]",
    "q[varifocal_true]",
    "q[sd_card_true]",
    "q[upnp_true]",
    "q[audio_in_true]",
    "q[audio_out_true]"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "page": "page",
    "q_model_cont_": "q[model_cont]",
    "q_manufacturer_name_cont_": "q[manufacturer_name_cont]",
    "q_shape_eq_": "q[shape_eq]",
    "q_resolution_eq_": "q[resolution_eq]",
    "q_onvif_true_": "q[onvif_true]",
    "q_psia_true_": "q[psia_true]",
    "q_ptz_true_": "q[ptz_true]",
    "q_infrared_true_": "q[infrared_true]",
    "q_varifocal_true_": "q[varifocal_true]",
    "q_sd_card_true_": "q[sd_card_true]",
    "q_upnp_true_": "q[upnp_true]",
    "q_audio_in_true_": "q[audio_in_true]",
    "q_audio_out_true_": "q[audio_out_true]"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'Api::V1::Models#search',
        pathName: '/api/v1/models/search.json',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}