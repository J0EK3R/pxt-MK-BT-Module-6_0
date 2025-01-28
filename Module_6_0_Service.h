#ifndef MODULE_6_0_SERVICE_H
#define MODULE_6_0_SERVICE_H

#include "MicroBitConfig.h"
#include "pxt.h"
#include "BLEAdvManager.h"

class Module_6_0_Service : public IBLEAdvClient
{
    public:
    /**
      * Constructor.
      * Create a representation of the MK6ModuleService
      * @param bleAdvManager The instance of a BLEAdvManager that we're running on.
      * @param moduleNo Number of the MK6 Module.
      */
    Module_6_0_Service(BLEAdvManager &bleAdvManager, uint8_t moduleNo);

    /**
      *  connect to bleAdvManager
      */
    void connect();

    /**
      *  stop advertising
      */
    void stop();

    /**
     *  set value (in percent) of channel
     * @param channelNo [0..5]
     * @param value_pct [-100..100], eg: "80"
     */
    void setChannel(uint8_t channelNo, float value_pct);

    /**
     *  set offset value (in percent) of channel
     * @param channelNo [0..5]
     * @param offset_pct [0..100], eg: "80"
     */
    void setChannelOffset(uint8_t channelNo, float offset_pct);

    /**
     *  set offset value (in percent) of channel
     * @param channelNo [0..5]
     * @param maximum_pct [0..100], eg: "80"
     */
    void setChannelMax(uint8_t channelNo, float maximum_pct);

    /**
     *  Take over data to send
     */
    void setData();

    /**
     *  get Version
     */
    uint8_t getVersion();

  private:

    // advertising manager
    BLEAdvManager &m_bleAdvManager;

    // number of module [0..2]
    uint8_t m_moduleNo;
    
    // handle from bleAdvManager returned on registration
    uint8_t m_bleAdvManager_handle;
    
    float m_channelOffsets_pct[6] = {
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    float m_channelMaximums_pct[6] = {
        100.0, 100.0, 100.0, 100.0, 100.0, 100.0 };

    uint8_t m_channelValues[6] = {
        0x80, 0x80, 0x80, 0x80, 0x80, 0x80 };

    uint8_t m_pPayload[31] = {
        0x02, // length: 0x2 (2)
        0x01, // type:   flags (0x01)
        0x06, // 0x06,

        0x1b, // length: 0x1b (27)
        0xff, // type:   manufacturer specific (0xff)
        0xf0, 0xff, // company Id: unkown 0xfff0
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
      };
      
      uint8_t m_telegram_Data[10] = { 
        0x61, 0x7B, 0xA7, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x9E };
};

#endif // MODULE_6_0_SERVICE_H