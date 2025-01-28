#include "pxt.h"
#include <stdio.h>
#include <ctype.h>
#include "MicroBitConfig.h"
#include "Module_6_0_Service.h"
#include "BLEAdvManager.h"

using namespace pxt;

/**
 * Support for M0uld K1ng Module 6.0.
 */
namespace mk 
{
    Module_6_0_Service* _pService[3] = 
    {
        NULL,
        NULL,
        NULL
    };


    /**
     *  get or create instance of Module_6_0_Service for moduleNo
     * @param moduleNo [0..2]
     */
    Module_6_0_Service* getService(uint8_t moduleNo) 
    {
        // no range check of moduleNo is done because it's an enum value
        Module_6_0_Service *pService = _pService[moduleNo];

        if (NULL == pService)
        {
            BLEAdvManager *p_BLEAdvManager = BLEAdvManager::getInstance();

            pService = new Module_6_0_Service(*p_BLEAdvManager, moduleNo);
            _pService[moduleNo] = pService;
        }

        return pService;
    }


    /**
     *  initialisation of the module
     * @param moduleNo [0..2]
     */
    void init(uint8_t moduleNo) 
    {
        // no range check of moduleNo is done because it's an enum value
        Module_6_0_Service *pService = getService(moduleNo);

        pService->connect();
    }


    /**
     *  set value (in percent) of channel
     * @param moduleNo [0..2]
     * @param channelNo [0..5]
     * @param value [-100..100], eg: "0"
     */
    void setChannel(uint8_t moduleNo, uint8_t channelNo, float value) 
    {
        // no range check of moduleNo is done because it's an enum value
        // no range check of channelNo is done because it's an enum value
        Module_6_0_Service *pService = getService(moduleNo);

        pService->setChannel(channelNo, value);
    }   


    /**
     *  set offset value (in percent) of channel
     * @param moduleNo [0..2]
     * @param channelNo [0..5]
     * @param offset [0..100], eg: "0"
     */
    void setChannelOffset(uint8_t moduleNo, uint8_t channelNo, float offset) 
    {
        // no range check of moduleNo is done because it's an enum value
        // no range check of channelNo is done because it's an enum value
        Module_6_0_Service *pService = getService(moduleNo);

        pService->setChannelOffset(channelNo, offset);
    }   


    /**
     *  set maximum value (in percent) of channel
     * @param moduleNo [0..2]
     * @param channelNo [0..5]
     * @param maximum [0..100], eg: "100"
     */
    void setChannelMax(uint8_t moduleNo, uint8_t channelNo, float maximum) 
    {
        // no range check of moduleNo is done because it's an enum value
        // no range check of channelNo is done because it's an enum value
        Module_6_0_Service *pService = getService(moduleNo);

        pService->setChannelMax(channelNo, maximum);
    }   


    /**
     *  take over data to send
     * @param moduleNo [0..2]
     */
    void setData(uint8_t moduleNo) 
    {
        // no range check of moduleNo is done because it's an enum value
        Module_6_0_Service *pService = getService(moduleNo);

        pService->setData();
    }   


    /**
     * stop advertising
     * @param moduleNo [0..2]
     */
    void stop(uint8_t moduleNo) 
    {
        // no range check of moduleNo is done because it's an enum value
        Module_6_0_Service *pService = getService(moduleNo);

        if (NULL != pService) 
        {
            pService->stop();
        }        
    }   


    /**
     *  get Version
     * @param moduleNo [0..2]
     */
    uint8_t getVersion(uint8_t moduleNo) 
    {
        // no range check of moduleNo is done because it's an enum value
        Module_6_0_Service *pService = getService(moduleNo);

        return pService->getVersion();
    }   
}