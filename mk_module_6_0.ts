/// <reference no-default-lib="true"/>
/**
 * Support for M0uld K1ng Module 6.0
 */
//% block="MK Modules"
//% icon="\uf294"
//% weight=100
//% color=#00c300
namespace MK6
{
    /**
     *  Selection of M0uld K1ng Module 6.0
     */
    export enum Module
    {
        //% block="MK6 1" enumval=0
        M1 = 0,
        //% block="MK6 2" enumval=1
        M2 = 1,
        //% block="MK6 3" enumval=2
        M3 = 2,
    }

    /**
     *  Channel on M0uld K1ng Module 6.0
     */
    export enum Channel
    {
        //% block="Channel A" enumval=0
        A = 0,
        //% block="Channel B" enumval=1
        B = 1,
        //% block="Channel C" enumval=2
        C = 2,
        //% block="Channel D" enumval=3
        D = 3,
        //% block="Channel E" enumval=4
        E = 4,
        //% block="Channel F" enumval=5
        F = 5
    }

    /**
     *  initialisation of the module
     * @param module module, eg: "Module.M1"
     */
    //% blockId=mk6_init
    //% block="$module: init"
    //% group="M0uld K1ng Module 6.0"
    //% shim=mk_module_6_0::init
    //% blockGap=8 weight=60
    export function init(module: Module): void
    {
        return;
    }

    /**
     *  set value (in percent) of channel
     * @param module module, eg: "Module.M1"
     * @param channel channel, eg: "Channel.A"
     * @param value [-100..100], eg: "0"
     */
    //% blockId=mk6_setchannel 
    //% block="$module: set value $channel to $value"
    //% group="M0uld K1ng Module 6.0"
    //% value.min=-100 value.max=100 value.defl=0
    //% shim=mk_module_6_0::setChannel
    //% blockGap=8 weight=60
    export function setChannel(module: Module, channel: Channel, value: number = 0): void
    {
        return;
    }

    /**
     *  set value (in percent) of channel and take over data
     * @param module module, eg: "Module.M1"
     * @param channel channel, eg: "Channel.A"
     * @param value [-100..100], eg: "0"
     */
    //% blockId=mk6_setandsendchannel 
    //% block="$module: set value $channel to $value and send"
    //% group="M0uld K1ng Module 6.0"
    //% value.min=-100 value.max=100 value.defl=0
    //% shim=mk_module_6_0::setChannel
    //% blockGap=8 weight=60
    export function setAndSendChannel(module: Module, channel: Channel, value: number = 0): void
    {
        setChannel(module, channel, value);
        setData(module);
        return;
    }

    /**
     *  set offset value (in percent) of channel
     * @param module module, eg: "Module.M1"
     * @param channel channel, eg: "Channel.A"
     * @param offset [0..100], eg: "0"
     */
    //% blockId=mk6_setchanneloffset
    //% block="$module: set offset $channel to $offset"
    //% group="M0uld K1ng Module 6.0"
    //% offset.min=0 offset.max=100 offset.defl=0
    //% shim=mk_module_6_0::setChannelOffset
    //% blockGap=8 weight=60
    export function setChannelOffset(module: Module, channel: Channel, offset: number = 0): void
    {
        return;
    }

    /**
     *  set maximum value (in percent) of channel
     * @param module module, eg: "Module.M1"
     * @param channel channel, eg: "Channel.A"
     * @param maximum [0..100], eg: "100"
     */
    //% blockId=mk6_setchannelmax
    //% block="$module: set maximum $channel to $maximum"
    //% group="M0uld K1ng Module 6.0"
    //% maximum.min=0 maximum.max=100 maximum.defl=100
    //% shim=mk_module_6_0::setChannelMax
    //% blockGap=8 weight=60
    export function setChannelMax(module: Module, channel: Channel, maximum: number = 100): void
    {
        return;
    }

    /**
     *  take over data to send
     * @param module module, eg: "Module.M1"
     */
    //% blockId=mk6_setdata 
    //% block="$module: take over data to send"
    //% group="M0uld K1ng Module 6.0"
    //% shim=mk_module_6_0::setData
    //% blockGap=8 weight=60
    export function setData(module: Module): void
    {
        return;
    }

    /**
     * stop advertising
     * @param module module, eg: "Module.M1"
     */
    //% blockId=mk6_stop
    //% block="$module: stop"
    //% group="M0uld K1ng Module 6.0"
    //% shim=mk_module_6_0::stop
    //% weight=10 blockGap=8
    export function stop(module: Module): void
    {
        return;
    };


    /**
     *  get Version
     * @param module module, eg: "Module.M1"
     */
    //% blockId=mk6_getversion 
    //% block="$module: get Version"
    //% group="M0uld K1ng Module 6.0"
    //% shim=mk_module_6_0::getVersion
    //% blockGap=8 weight=60 advanced=true
    export function getVersion(module: Module): number
    {
        return 0;
    }
}