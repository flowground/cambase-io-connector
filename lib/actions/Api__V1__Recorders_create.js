/**
 * Auto-generated action file for "Cambase.io" API.
 *
 * Generated at: 2019-05-07T14:39:53.275Z
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
 * Operation: 'Api::V1::Recorders#create'
 * Endpoint Path: '/api/v1/recorders.json'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "vendor_id": "vendor_id",
    "recorder_model_": "recorder[model]",
    "recorder_name_": "recorder[name]",
    "recorder_recorder_type_": "recorder[recorder_type]",
    "recorder_resolution_": "recorder[resolution]",
    "recorder_onvif_": "recorder[onvif]",
    "recorder_psia_": "recorder[psia]",
    "recorder_ptz_": "recorder[ptz]",
    "recorder_discontinued_": "recorder[discontinued]",
    "recorder_support_3rdparty_": "recorder[support_3rdparty]",
    "recorder_sd_card_": "recorder[sd_card]",
    "recorder_upnp_": "recorder[upnp]",
    "recorder_hot_swap_": "recorder[hot_swap]",
    "recorder_hdmi_": "recorder[hdmi]",
    "recorder_digital_io_": "recorder[digital_io]",
    "recorder_audio_in_": "recorder[audio_in]",
    "recorder_audio_out_": "recorder[audio_out]",
    "recorder_input_channels_": "recorder[input_channels]",
    "recorder_playback_channels_": "recorder[playback_channels]",
    "recorder_usb_": "recorder[usb]",
    "recorder_sdhc_": "recorder[sdhc]",
    "recorder_mobile_access_": "recorder[mobile_access]",
    "recorder_alarms_": "recorder[alarms]",
    "recorder_raid_support_": "recorder[raid_support]",
    "recorder_storage_": "recorder[storage]",
    "recorder_additional_information_": "recorder[additional_information]",
    "recorder_default_username_": "recorder[default_username]",
    "recorder_default_password_": "recorder[default_password]",
    "recorder_jpeg_url_": "recorder[jpeg_url]",
    "recorder_h264_url_": "recorder[h264_url]",
    "recorder_mjpeg_url_": "recorder[mjpeg_url]",
    "recorder_official_url_": "recorder[official_url]",
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
        operationId: 'Api::V1::Recorders#create',
        pathName: '/api/v1/recorders.json',
        method: 'post',
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