/// <reference no-default-lib="true"/>
/**
 * Support for M0uld K1ng Module 6.0.
 */
//% color=#00c300 weight=100 icon="\uf294" block="MK Module 6.0"
namespace mk_module_6_0
{

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
    *  M0uld K1ng Module 6.0 init
    * @param moduleNo moduleNo, eg: "Module 1"
    */
    //% blockId=mk6_init
    //% block="MK6.0 %moduleNo init"
    //% shim=mk_module_6_0::init
    //% blockGap=8 weight=60
    export function init(moduleNo: Module): void
    {
        return;
    }

    /**
    *  M0uld K1ng Module 6.0 SetChannel
    * @param moduleNo moduleNo, eg: "Module 1"
    * @param channel channel, eg: "Channel A"
    * @param value -127..127, eg: "value 0"
    */
    //% blockId=mk6_setchannel 
    //% block="MK6.0 %moduleNo set %channel to value %value"
    //% shim=mk_module_6_0::setChannel
    //% blockGap=8 weight=60
    export function setChannel(moduleNo: Module, channel: Channel, value: number): void
    {
        return;
    }

    /**
    *  M0uld K1ng Module 6.0 SetChannelOffset
    * @param moduleNo moduleNo, eg: "Module 1"
    * @param channel channel, eg: "Channel A"
    * @param offset -127..127, eg: "value 0"
    */
    //% blockId=mk6_setchanneloffset
    //% block="MK6.0 %moduleNo set %channel offset to value %offset"
    //% shim=mk_module_6_0::setChannelOffset
    //% blockGap=8 weight=60
    export function setChannelOffset(moduleNo: Module, channel: Channel, offset: number): void
    {
        return;
    }

    /**
    *  M0uld K1ng Module 6.0 SendData
    * @param moduleNo moduleNo, eg: "Module 1"
    */
    //% blockId=mk6_senddata 
    //% block="MK6.0 %moduleNo send data"
    //% shim=mk_module_6_0::sendData
    //% blockGap=8 weight=60
    export function senddata(moduleNo: Module): void
    {
        return;
    }

    /**
     * M0uld K1ng Module 6.0 stop advertising
     * @param moduleNo moduleNo, eg: "Module 1"
     */
    //% blockId=mk6_stop
    //% block="MK6.0 %moduleNo stop"
    //% shim=mk_module_6_0::stop
    //% weight=10 blockGap=8
    export function stop(moduleNo: Module): void
    {
        return;
    };


    /**
    *  M0uld K1ng Module 6.0 get Version
    * @param moduleNo moduleNo, eg: "Module 1"
    */
    //% blockId=mk6_getversion 
    //% block="MK6.0 %moduleNo get Version"
    //% shim=mk_module_6_0::getVersion
    //% blockGap=8 weight=60 advanced=true
    export function getversion(moduleNo: Module): number
    {
        return 0;
    }
}