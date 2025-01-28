/// <reference no-default-lib="true"/>
/**
 * Support for M0uld K1ng Module 6.0
 */
//% color=#00c300 weight=100 icon="\uf294" block="MK Module 6.0"
namespace mk_module_6_0
{
    /**
     *  Selection of M0uld K1ng Module 6.0
     */
    export enum Module
    {
        //% block="Module 1" enumval=0
        M1 = 0,
        //% block="Module 2" enumval=1
        M2 = 1,
        //% block="Module 3" enumval=2
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
    //% block="MK6.0 %module: init"
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
     * @param value [-100..100], eg: "80"
     */
    //% blockId=mk6_setchannel 
    //% block="MK6.0 %module: set %channel value to %value %"
    //% value.min=-100 value.max=100
    //% shim=mk_module_6_0::setChannel
    //% blockGap=8 weight=60
    export function setChannel(module: Module, channel: Channel, value: number): void
    {
        return;
    }

    /**
     *  set offset value (in percent) of channel
     * @param module module, eg: "Module.M1"
     * @param channel channel, eg: "Channel.A"
     * @param offset [0..100], eg: "0"
     */
    //% blockId=mk6_setchanneloffset
    //% block="MK6.0 %module: set %channel offset to %offset %"
    //% offset.min=0 offset.max=100
    //% shim=mk_module_6_0::setChannelOffset
    //% blockGap=8 weight=60
    export function setChannelOffset(moduleNo: Module, channel: Channel, offset: number = 0): void
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
    //% block="MK6.0 %module: set %channel maximum to %maximum %"
    //% maximum.min=0 maximum.max=100
    //% shim=mk_module_6_0::setChannelMax
    //% blockGap=8 weight=60
    export function setChannelMax(moduleNo: Module, channel: Channel, maximum: number = 100): void
    {
        return;
    }

    /**
     *  Take over data to send
     * @param module module, eg: "Module.M1"
     */
    //% blockId=mk6_setdata 
    //% block="MK6.0 %module: take over data to send"
    //% shim=mk_module_6_0::setData
    //% blockGap=8 weight=60
    export function setdata(module: Module): void
    {
        return;
    }

    /**
     * stop advertising
     * @param module module, eg: "Module.M1"
     */
    //% blockId=mk6_stop
    //% block="MK6.0 %module: stop"
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
    //% block="MK6.0 %module: get Version"
    //% shim=mk_module_6_0::getVersion
    //% blockGap=8 weight=60 advanced=true
    export function getversion(moduleNo: Module): number
    {
        return 0;
    }
}