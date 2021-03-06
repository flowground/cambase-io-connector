/**
 * Auto-generated action file for "Cambase.io" API.
 *
 * Generated at: 2019-05-07T14:39:53.273Z
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
 * Operation: undefined
 * Endpoint Path: '/api/v1/models/{id}.json'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "vendor_id": "vendor_id",
    "model_model_": "model[model]",
    "model_shape_": "model[shape]",
    "model_resolution_": "model[resolution]",
    "model_onvif_": "model[onvif]",
    "model_psia_": "model[psia]",
    "model_ptz_": "model[ptz]",
    "model_infrared_": "model[infrared]",
    "model_varifocal_": "model[varifocal]",
    "model_sd_card_": "model[sd_card]",
    "model_upnp_": "model[upnp]",
    "model_audio_in_": "model[audio_in]",
    "model_audio_out_": "model[audio_out]",
    "model_default_username_": "model[default_username]",
    "model_default_password_": "model[default_password]",
    "model_jpeg_url_": "model[jpeg_url]",
    "model_h264_url_": "model[h264_url]",
    "model_mjpeg_url_": "model[mjpeg_url]",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/x-www-form-urlencoded';

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
        operationId: undefined,
        pathName: '/api/v1/models/{id}.json',
        method: 'patch',
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