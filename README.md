# ![LOGO](logo.png) Cambase.io **flow**ground Connector

## Description

A generated **flow**ground connector for the Cambase.io API (version 1.0).

Generated from: https://api.apis.guru/v2/specs/cambase.io/1.0/swagger.json<br/>
Generated at: 2019-05-07T17:39:53+03:00

## API Description

Cambase.io is a project by Evercam.io in order to make it easier for software developers to have a reliable, up to date source of model hardware information available via a public API.

## Authorization

This API does not require authorization.

## Actions

### Fetches all Models

*Tags:* `models`

#### Input Parameters
* `page` - _optional_ - Page number
* `order` - _optional_ - Sort order

### Creates a new Model

*Tags:* `models`

### Searches all Models

*Tags:* `models`

#### Input Parameters
* `page` - _optional_ - Page number
* `q[model_cont]` - _optional_ - Model
* `q[manufacturer_name_cont]` - _optional_ - Vendor
* `q[shape_eq]` - _optional_ - Shape
* `q[resolution_eq]` - _optional_ - Resolution
* `q[onvif_true]` - _optional_ - ONVIF
* `q[psia_true]` - _optional_ - PSIA
* `q[ptz_true]` - _optional_ - PTZ
* `q[infrared_true]` - _optional_ - Infrared
* `q[varifocal_true]` - _optional_ - Varifocal
* `q[sd_card_true]` - _optional_ - SD Card
* `q[upnp_true]` - _optional_ - UPnP
* `q[audio_in_true]` - _optional_ - Audio In
* `q[audio_out_true]` - _optional_ - Audio Out

### Fetches a single Model

*Tags:* `models`

#### Input Parameters
* `id` - _required_ - Model ID

### Updates an existing Model

*Tags:* `models`

#### Input Parameters
* `id` - _required_ - Model ID

### Updates an existing Model

*Tags:* `models`

#### Input Parameters
* `id` - _required_ - Model ID

### Fetches all Recorders

*Tags:* `recorders`

#### Input Parameters
* `page` - _optional_ - Page number
* `order` - _optional_ - Sort order

### Creates a new Recorder

*Tags:* `recorders`

### Searches all Recorders

*Tags:* `recorders`

#### Input Parameters
* `page` - _optional_ - Page number
* `q[model_cont]` - _optional_ - Model
* `q[vendor_name_cont]` - _optional_ - Vendor
* `q[sdhc_eq]` - _optional_ - SD Card (GB)
* `q[type_eq]` - _optional_ - Type
* `q[resolution_eq]` - _optional_ - Resolution
* `q[input_channels_eq]` - _optional_ - Input Channels
* `q[playback_channels_eq]` - _optional_ - Playback Channels
* `q[onvif_true]` - _optional_ - ONVIF
* `q[psia_true]` - _optional_ - PSIA
* `q[ptz_true]` - _optional_ - PTZ
* `q[sd_card_true]` - _optional_ - SD Card
* `q[upnp_true]` - _optional_ - UPnP
* `q[audio_in_true]` - _optional_ - Audio In
* `q[audio_out_true]` - _optional_ - Audio Out
* `q[hdmi_true]` - _optional_ - HDMI Support
* `q[hot_swap_true]` - _optional_ - Hot Swap
* `q[support_3rdparty_true]` - _optional_ - 3rd pparty Camera Support
* `q[digital_io_true]` - _optional_ - Digital I/O

### Fetches a single Recorder

*Tags:* `recorders`

#### Input Parameters
* `id` - _required_ - Recorder ID

### Updates an existing Recorder

*Tags:* `recorders`

#### Input Parameters
* `id` - _required_ - Recorder ID

### Updates an existing Recorder

*Tags:* `recorders`

#### Input Parameters
* `id` - _required_ - Recorder ID

### Fetches all Vendors

*Tags:* `vendors`

#### Input Parameters
* `page` - _optional_ - Page number
* `order` - _optional_ - Sort order

### Creates a new Vendor

*Tags:* `vendors`

### Fetches a single Vendor

*Tags:* `vendors`

#### Input Parameters
* `id` - _required_ - Vendor ID
* `order` - _optional_ - Sort order

### Updates an existing Vendor

*Tags:* `vendors`

#### Input Parameters
* `id` - _required_ - Vendor ID

### Updates an existing Vendor

*Tags:* `vendors`

#### Input Parameters
* `id` - _required_ - Vendor ID

## License

**flow**ground :- Telekom iPaaS / cambase-io-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
