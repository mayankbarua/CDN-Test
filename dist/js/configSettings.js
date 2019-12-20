
(function (window) {
    'use strict';

    var NetBrain = window.NetBrain || {};
    window.NetBrain = NetBrain;

    NetBrain.NG = NetBrain.NG || {};
    NetBrain.NG.ConfigSettings = {
        FATAL_ERROR: false,
        DEBUG_MODE: true,
        API_ROOT: '/ServicesAPI/',
        CLIENT_ID: 'ngAuthApp',
        IDLE_TIMEOUT: 4 * 60 * 60 * 1000, 
        TOUCH_SESSION_TIMEOUT: 10 * 60 * 1000,
        KEEP_ALIVE_INTERVAL: 1 * 60 * 1000,
        SERVICE_MONITOR_REFRESH_INTERVAL: 5 * 60 * 1000,
        LICENSE_ACTIVATE_FILE_NAME: 'netbrain.Identity',
        LICENSE_REFRESH_FILE_NAME: 'netbrain.license_update',
        LICENSE_UNBIND_FILE_NAME: 'netbrain.Unbind',
        IS_ITE_VERSION: false,
        IS_CLOUD_MODE: false,
        PathOverallHealthMonitor: 'Built-in Qapps/Monitoring/Path Overall Health Monitor [SNMP]',
        SMART_CLI_DOWNLOAD_PATH: '/download/netbrain-smartcli-windows-x86_64-8.0.2.zip',
        ENABLE_EXPORT_RESOURCE: false,
        RUNBOOK_NODE_MAXSIZE: 1000
    };

    NetBrain.NG.HelpLink = {
        ServiceMonitor: '/monitor.html#/other',
        HelpIndex: 'https://www.netbraintech.com/docs/ie80/help/index.html?welcome.htm',
        Manage_Disk_Alert_Rules: 'https://www.netbraintech.com/docs/ie80/help/index.html?manage-disk-alert-rules.htm',
        Support: 'https://www.netbraintech.com/netbrain-support/',
        MaintenanceAndSupport: 'https://www.netbraintech.com/ftp/support/NetBrain_Maintenance_and_Support.pdf',
        CreateDomain: 'https://www.netbraintech.com/docs/ie80/help/index.html?creating-a-domain.htm',
        DeviceSettings: 'https://www.netbraintech.com/docs/ie80/help/index.html?configuring-shared-device-settings.htm',
        AdvancedDeviceSettings: 'https://www.netbraintech.com/docs/ie80/help/index.html?advanced-device-settings.htm',
        MplsCloud: 'https://www.netbraintech.com/docs/ie80/help/index.html?mpls-cloud.htm',
        QappAPIHelpUrl: 'https://www.netbraintech.com/docs/ie80/help/index.html?qapp-api-list.htm',
        RolesAndPrivileges: 'https://www.netbraintech.com/docs/ie80/help/index.html?roles-and-privileges.htm',
        SharePolicy: 'https://www.netbraintech.com/docs/ie80/help/index.html?share-policy.htm',
        creatingApiParser: 'https://www.netbraintech.com/docs/ie80/help/index.html?creating-an-api-parser.htm',
        Define_DDA_Input: 'https://www.netbraintech.com/docs/ie80/help/index.html?syntax-for-defining-action-input.htm',
        Define_DDA_Target_Device: 'https://www.netbraintech.com/docs/ie80/help/index.html?syntax-for-defining-target-devices.htm',
        Define_Compound_Variable: 'https://www.netbraintech.com/docs/ie80/help/index.html?compound-variable.htm'
    };
})(window);
