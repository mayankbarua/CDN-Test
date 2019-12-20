const data = {
  ID: '184368c8-e2b6-2f8b-ff74-cb2ed5ad831c',
  l2Style: false,
  docType: 'Page',
  netMapType: 1,
  width: 500,
  heigh: 400,
  bkColor: 'white',
  readOnly: false,
  title: 'Page 1',
  active: true,
  description: '',
  mapViewOption: {
    options: [
      {
        posName: 'devHostName',
        displayName: 'Device Hostname',
        scaleThreshold: 0.6,
        display: true
      },
      {
        posName: 'devPos1',
        displayName: 'Device Position 1',
        scaleThreshold: 1,
        display: true
      },
      {
        posName: 'devPos2',
        displayName: 'Device Position 2',
        scaleThreshold: 1,
        display: true
      },
      {
        posName: 'devPos3',
        displayName: 'Device Position 3',
        scaleThreshold: 1,
        display: true
      },
      {
        posName: 'devPos4',
        displayName: 'Device Position 4',
        scaleThreshold: 1,
        display: true
      },
      {
        posName: 'intfPos0',
        displayName: 'Interface Name',
        scaleThreshold: 0.6,
        display: true
      },
      {
        posName: 'intfPos1',
        displayName: 'Link Position 1',
        scaleThreshold: 1.2,
        display: true
      },
      {
        posName: 'intfPos2',
        displayName: 'Link Position 2',
        scaleThreshold: 1.2,
        display: true
      },
      {
        posName: 'intfPos3',
        displayName: 'Link Position 3',
        scaleThreshold: 1.4,
        display: true
      },
      {
        posName: 'intfPos4',
        displayName: 'Link Position 4',
        scaleThreshold: 1.4,
        display: true
      },
      {
        posName: 'intfPos5',
        displayName: 'Link Position 5',
        scaleThreshold: 1.6,
        display: true
      },
      {
        posName: 'intfPos6',
        displayName: 'Link Position 6',
        scaleThreshold: 1.6,
        display: true
      },
      {
        posName: 'intfPos7',
        displayName: 'Link Position 7',
        scaleThreshold: 1.8,
        display: true
      },
      {
        posName: 'intfPos8',
        displayName: 'Link Position 8',
        scaleThreshold: 1.8,
        display: true
      },
      {
        posName: 'devNote',
        displayName: 'Device Note',
        scaleThreshold: 0.8,
        display: true
      },
      {
        posName: 'overflowPos',
        displayName: 'Overflow Position',
        scaleThreshold: 0.6,
        display: true
      },
      {
        posName: 'otherDrawShapes',
        displayName: 'Other Draw Shapes',
        scaleThreshold: 0.6,
        display: true
      }
    ],
    step: 0.2,
    isNeatUp: false
  },
  mapAutoLinkOptionDict: {
    '00000000-0000-0000-0000-000000000000': ['L3_Topo_Type']
  },
  mapAutoLinkOptionExcluedeMip: true,
  mapAutoLinkOptionList: null,
  l3StyleInExpandedStyle: [
    '1000',
    '1030',
    '1036',
    '1004',
    '1005',
    '1002',
    '1049',
    '1028',
    '1021',
    '1027',
    '1024'
  ],
  highlightMode: 0,
  layoutStyle: 1,
  topologyType: 1,
  nodeDataArray: [
    {
      category: 'Media',
      hostName: ['192.168.48.0/22'],
      key: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      devType: 'Lan',
      devCategory: 'Lan',
      status: 1,
      topoType: 'L3_Topo_Type',
      dataViewData: {
        devGraphicInfo: {
          imageList: [
            {
              name: '00000000-0000-0000-0000-000000000082.png',
              size: '102 62',
              scale: 0.22,
              status: 1
            }
          ]
        },
        intfInfoList: [],
        highlightDataList: []
      },
      location: '642 -27',
      eventHandle: null,
      compModels: { isEditableModel: true },
      isLocked: true
    },
    {
      devCategory: 1001,
      devType: 2001,
      dataViewData: {
        devGraphicInfo: {
          font: { faceName: 'Calibri', fontSize: '9' },
          imageList: [
            {
              name: '00000000-0000-0000-0000-00000000002e.png',
              status: 1,
              scale: 0.22,
              size: '236 145'
            },
            {
              name: '00000000-0000-0000-0000-00000000002f.png',
              status: 256,
              scale: 0.22,
              size: '240 150'
            },
            {
              name: '00000000-0000-0000-0000-000000000030.png',
              status: 512,
              scale: 0.22,
              size: '240 150'
            },
            {
              name: '00000000-0000-0000-0000-000000000032.png',
              status: 64,
              scale: 0.22,
              size: '240 150'
            },
            {
              name: '00000000-0000-0000-0000-000000000031.png',
              status: 1024,
              scale: 0.22,
              size: '240 150'
            }
          ]
        },
        dataViewInfo: {
          dataViewTaskInfoId: '00000000-0000-0000-0000-000000000000',
          dataViewGroupId: '00000000-0000-0000-0000-000000000000',
          dataViewType: 'dvDefault',
          name: 'Default Data View',
          time: '2019-12-10T11:31:58.9525241-05:00'
        },
        devPosList: [
          {
            posName: 'devPos1',
            posInfo: {
              displayInfo: '192.168.48.150',
              isLock: false,
              displayTemplate: '',
              dataUnitList: [
                {
                  uId: 'mgmtIP',
                  value: '192.168.48.150',
                  valueType: 'string',
                  type: 'uSrcGDR',
                  displayName: 'Management IP',
                  generateTime: '0001-01-01T00:00:00',
                  intfTmpl: null,
                  definedDrillDownAction: false
                }
              ],
              isCustomize: false
            }
          },
          {
            posName: 'devPos2',
            posInfo: {
              displayInfo: 'Cisco IOS Switch',
              isLock: false,
              displayTemplate: '',
              dataUnitList: [
                {
                  uId: 'subTypeName',
                  value: 'Cisco IOS Switch',
                  valueType: 'string',
                  type: 'uSrcGDR',
                  displayName: 'Device Type',
                  generateTime: '0001-01-01T00:00:00',
                  intfTmpl: null,
                  definedDrillDownAction: false
                }
              ],
              isCustomize: false
            }
          }
        ],
        intfInfoList: [
          {
            intfGraphicInfo: {
              colorList: [
                { color: 9687377, status: 256 },
                { color: 14965321, status: 512 },
                { color: 16565862, status: 1024 }
              ]
            },
            intfPosList: [
              {
                posName: 'intfPos1',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.routingProtocol',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Routing Protocol',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos3',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.multicastMode',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Multicasting Mode',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos4',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.mplsVrf',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'MPLS VRF',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos5',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.inAclName',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Inbound ACL',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos6',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.outAclName',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Outbound ACL',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos7',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.descr',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Description',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              }
            ],
            intf: {
              intfKeyObj: {
                schema: 'ipIntfs._id',
                value: '0f699256-21b0-41b8-ab4a-1f5b0937d2a3'
              },
              intfDisplaySchemaObj: {
                schema: 'ipIntfs.name',
                value: 'e1/0 192.168.48.150/22'
              },
              isIpUnnumberedIntf: false,
              devId: null,
              intfNodeData: {
                isRealIntf: true,
                nodeIdentify: {
                  nbPathSchema: 'Legacy.ipIntfs',
                  nbPathValue: '0f699256-21b0-41b8-ab4a-1f5b0937d2a3'
                },
                id: '0f699256-21b0-41b8-ab4a-1f5b0937d2a3',
                visualSpaceInfo: {
                  visualSpaceName: 'Default Visual Space',
                  visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
                }
              },
              intfExtendData: {
                'intfs.isTunnelMultipoint': false,
                'intfs.isChannel': false,
                'intfs.isTunnel': false
              }
            }
          }
        ],
        intfCount: 0,
        highlightDataList: []
      },
      operateInfo: {
        opTime: '2019-12-10T11:31:58.9525241-05:00',
        operateTime: '2019-12-10T11:31:58.9525241-05:00'
      },
      key: '5c01b1a7-0422-4131-ae16-e9bafd0d0927',
      hostName: 'GW-SWITCH',
      category: 'NetworkDevice',
      devNodeData: {
        category: 'NetworkDevice',
        isRealDev: true,
        nodeIdentify: {
          nbPathSchema: 'Legacy',
          nbPathValue: '5c01b1a7-0422-4131-ae16-e9bafd0d0927'
        },
        id: '5c01b1a7-0422-4131-ae16-e9bafd0d0927',
        visualSpaceInfo: {
          visualSpaceName: 'Default Visual Space',
          visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
        },
        role: '',
        isGroup: false,
        group: '',
        name: null
      },
      noPrivilege: false,
      location: '556.1798957943172 220.10680925516004',
      eventHandle: null,
      compModels: { isEditableModel: true },
      isLocked: true,
      layerName: 'DeviceLayer'
    },
    {
      devCategory: 1001,
      devType: 2001,
      dataViewData: {
        devGraphicInfo: {
          font: { faceName: 'Calibri', fontSize: '9' },
          imageList: [
            {
              name: '00000000-0000-0000-0000-00000000002e.png',
              status: 1,
              scale: 0.22,
              size: '236 145'
            },
            {
              name: '00000000-0000-0000-0000-00000000002f.png',
              status: 256,
              scale: 0.22,
              size: '240 150'
            },
            {
              name: '00000000-0000-0000-0000-000000000030.png',
              status: 512,
              scale: 0.22,
              size: '240 150'
            },
            {
              name: '00000000-0000-0000-0000-000000000032.png',
              status: 64,
              scale: 0.22,
              size: '240 150'
            },
            {
              name: '00000000-0000-0000-0000-000000000031.png',
              status: 1024,
              scale: 0.22,
              size: '240 150'
            }
          ]
        },
        dataViewInfo: {
          dataViewTaskInfoId: '00000000-0000-0000-0000-000000000000',
          dataViewGroupId: '00000000-0000-0000-0000-000000000000',
          dataViewType: 'dvDefault',
          name: 'Default Data View',
          time: '2019-12-10T11:31:58.9492256-05:00'
        },
        devPosList: [
          {
            posName: 'devPos1',
            posInfo: {
              displayInfo: '192.168.50.11',
              isLock: false,
              displayTemplate: '',
              dataUnitList: [
                {
                  uId: 'mgmtIP',
                  value: '192.168.50.11',
                  valueType: 'string',
                  type: 'uSrcGDR',
                  displayName: 'Management IP',
                  generateTime: '0001-01-01T00:00:00',
                  intfTmpl: null,
                  definedDrillDownAction: false
                }
              ],
              isCustomize: false
            }
          },
          {
            posName: 'devPos2',
            posInfo: {
              displayInfo: 'Cisco IOS Switch',
              isLock: false,
              displayTemplate: '',
              dataUnitList: [
                {
                  uId: 'subTypeName',
                  value: 'Cisco IOS Switch',
                  valueType: 'string',
                  type: 'uSrcGDR',
                  displayName: 'Device Type',
                  generateTime: '0001-01-01T00:00:00',
                  intfTmpl: null,
                  definedDrillDownAction: false
                }
              ],
              isCustomize: false
            }
          }
        ],
        intfInfoList: [
          {
            intfGraphicInfo: {
              colorList: [
                { color: 9687377, status: 256 },
                { color: 14965321, status: 512 },
                { color: 16565862, status: 1024 }
              ]
            },
            intfPosList: [
              {
                posName: 'intfPos1',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.routingProtocol',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Routing Protocol',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos3',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.multicastMode',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Multicasting Mode',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos4',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.mplsVrf',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'MPLS VRF',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos5',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.inAclName',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Inbound ACL',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos6',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.outAclName',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Outbound ACL',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              },
              {
                posName: 'intfPos7',
                posInfo: {
                  isLock: false,
                  displayTemplate: '',
                  dataUnitList: [
                    {
                      uId: 'intfs.descr',
                      valueType: 'string',
                      type: 'uSrcGDR',
                      displayName: 'Description',
                      generateTime: '0001-01-01T00:00:00',
                      intfTmpl: null,
                      definedDrillDownAction: false
                    }
                  ],
                  isCustomize: false
                }
              }
            ],
            intf: {
              intfKeyObj: {
                schema: 'ipIntfs._id',
                value: 'af677e49-ef16-46f1-9dcb-079593fd9417'
              },
              intfDisplaySchemaObj: {
                schema: 'ipIntfs.name',
                value: 'g0/1 192.168.50.11/22'
              },
              isIpUnnumberedIntf: false,
              devId: null,
              intfNodeData: {
                isRealIntf: true,
                nodeIdentify: {
                  nbPathSchema: 'Legacy.ipIntfs',
                  nbPathValue: 'af677e49-ef16-46f1-9dcb-079593fd9417'
                },
                id: 'af677e49-ef16-46f1-9dcb-079593fd9417',
                visualSpaceInfo: {
                  visualSpaceName: 'Default Visual Space',
                  visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
                }
              },
              intfExtendData: {
                'intfs.isTunnelMultipoint': false,
                'intfs.isChannel': false,
                'intfs.isTunnel': false
              }
            }
          }
        ],
        intfCount: 0,
        highlightDataList: []
      },
      operateInfo: {
        opTime: '2019-12-10T11:31:58.9492256-05:00',
        operateTime: '2019-12-10T11:31:58.9492256-05:00'
      },
      key: '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1b',
      hostName: 'L3out5011',
      category: 'NetworkDevice',
      devNodeData: {
        category: 'NetworkDevice',
        isRealDev: true,
        nodeIdentify: {
          nbPathSchema: 'Legacy',
          nbPathValue: '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1b'
        },
        id: '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1b',
        visualSpaceInfo: {
          visualSpaceName: 'Default Visual Space',
          visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
        },
        role: '',
        isGroup: false,
        group: '',
        name: null
      },
      noPrivilege: false,
      location: '429.9337491122159 -253.14495836596078',
      eventHandle: null,
      compModels: { isEditableModel: true },
      isLocked: true,
      layerName: 'DeviceLayer'
    }
  ],
  linkDataArray: [
    {
      category: 'VirtualTopoLink',
      from: '5c01b1a7-0422-4131-ae16-e9bafd0d0927',
      to: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      topoType: 'L3_Topo_Type',
      isP2P: false,
      curve: 0,
      viewInfo: {},
      lineColor: 'black',
      lineWidth: 1,
      visible: true,
      intfSrc: {
        dataViewInfo: {
          dataViewType: 'dvDefault',
          time: '2019-12-10T11:31:59.1182673-05:00'
        },
        intfInfo: {
          intfGraphicInfo: {
            colorList: [
              { color: 9687377, status: 256 },
              { color: 14965321, status: 512 },
              { color: 16565862, status: 1024 }
            ]
          },
          intfPosList: [
            {
              posName: 'intfPos1',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.routingProtocol',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Routing Protocol',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos3',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.multicastMode',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Multicasting Mode',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos4',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.mplsVrf',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'MPLS VRF',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos5',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.inAclName',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Inbound ACL',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos6',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.outAclName',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Outbound ACL',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos7',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.descr',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Description',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            }
          ],
          intf: {
            intfKeyObj: {
              schema: 'ipIntfs._id',
              value: '0f699256-21b0-41b8-ab4a-1f5b0937d2a3'
            },
            intfDisplaySchemaObj: {
              schema: 'ipIntfs.name',
              value: 'e1/0 192.168.48.150/22'
            },
            isIpUnnumberedIntf: false,
            devId: null,
            intfNodeData: {
              isRealIntf: true,
              nodeIdentify: {
                nbPathSchema: 'Legacy.ipIntfs',
                nbPathValue: '0f699256-21b0-41b8-ab4a-1f5b0937d2a3'
              },
              id: '0f699256-21b0-41b8-ab4a-1f5b0937d2a3',
              visualSpaceInfo: {
                visualSpaceName: 'Default Visual Space',
                visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
              }
            },
            intfExtendData: {
              'intfs.isTunnelMultipoint': false,
              'intfs.isChannel': false,
              'intfs.isTunnel': false
            }
          },
          intfHighlightList: null
        }
      },
      intfDest: null,
      fromPort: '0f699256-21b0-41b8-ab4a-1f5b0937d2a3',
      toPort: '',
      devIdSrc: '5c01b1a7-0422-4131-ae16-e9bafd0d0927',
      devIdDest: null,
      mediaId: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      mediaInfo: {
        mediaId: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
        mediaName: '192.168.48.0/22',
        mediaType: 'Lan',
        topoType: 'L3_Topo_Type',
        neat: false,
        vrf: '',
        hsrp: ''
      },
      policyStyle: {
        src: {
          line: {
            stroke: '#000000',
            strokeWidth: 1,
            strokeDashArray: [0],
            isCreateLegend: false,
            name: 'Default'
          }
        },
        dest: {
          line: {
            stroke: '#000000',
            strokeWidth: 1,
            strokeDashArray: [0],
            isCreateLegend: false,
            name: 'Default'
          }
        }
      },
      isL2LinkStyle: false,
      points: [
        '561.719324943221 204.15680925516006',
        '639.631416501848 -20.18'
      ],
      eventHandle: null,
      key: '69c30e1e-045b-2726-4b39-593d6a67ff42',
      compModels: { isEditableModel: true },
      pointsL2: null,
      isP2PForce: false
    },
    {
      category: 'VirtualTopoLink',
      from: '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1b',
      to: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      topoType: 'L3_Topo_Type',
      isP2P: false,
      curve: 0,
      viewInfo: {},
      lineColor: 'black',
      lineWidth: 1,
      visible: true,
      intfSrc: {
        dataViewInfo: {
          dataViewType: 'dvDefault',
          time: '2019-12-10T11:31:59.1172919-05:00'
        },
        intfInfo: {
          intfGraphicInfo: {
            colorList: [
              { color: 9687377, status: 256 },
              { color: 14965321, status: 512 },
              { color: 16565862, status: 1024 }
            ]
          },
          intfPosList: [
            {
              posName: 'intfPos1',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.routingProtocol',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Routing Protocol',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos3',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.multicastMode',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Multicasting Mode',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos4',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.mplsVrf',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'MPLS VRF',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos5',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.inAclName',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Inbound ACL',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos6',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.outAclName',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Outbound ACL',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos7',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.descr',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Description',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            }
          ],
          intf: {
            intfKeyObj: {
              schema: 'ipIntfs._id',
              value: 'af677e49-ef16-46f1-9dcb-079593fd9417'
            },
            intfDisplaySchemaObj: {
              schema: 'ipIntfs.name',
              value: 'g0/1 192.168.50.11/22'
            },
            isIpUnnumberedIntf: false,
            devId: null,
            intfNodeData: {
              isRealIntf: true,
              nodeIdentify: {
                nbPathSchema: 'Legacy.ipIntfs',
                nbPathValue: 'af677e49-ef16-46f1-9dcb-079593fd9417'
              },
              id: 'af677e49-ef16-46f1-9dcb-079593fd9417',
              visualSpaceInfo: {
                visualSpaceName: 'Default Visual Space',
                visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
              }
            },
            intfExtendData: {
              'intfs.isTunnelMultipoint': false,
              'intfs.isChannel': false,
              'intfs.isTunnel': false
            }
          },
          intfHighlightList: null
        }
      },
      intfDest: null,
      fromPort: 'af677e49-ef16-46f1-9dcb-079593fd9417',
      toPort: '',
      devIdSrc: '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1b',
      devIdDest: null,
      mediaId: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      mediaInfo: {
        mediaId: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
        mediaName: '192.168.48.0/22',
        mediaType: 'Lan',
        topoType: 'L3_Topo_Type',
        neat: false,
        vrf: '',
        hsrp: ''
      },
      policyStyle: {
        src: {
          line: {
            stroke: '#000000',
            strokeWidth: 1,
            strokeDashArray: [0],
            isCreateLegend: false,
            name: 'Default'
          }
        },
        dest: {
          line: {
            stroke: '#000000',
            strokeWidth: 1,
            strokeDashArray: [0],
            isCreateLegend: false,
            name: 'Default'
          }
        }
      },
      isL2LinkStyle: false,
      points: [
        '444.89077811741913 -237.1949583659608',
        '635.6045807012234 -33.82'
      ],
      eventHandle: null,
      key: '15a290ed-629a-d728-e46d-8b67fb3604c3',
      compModels: { isEditableModel: true },
      pointsL2: null,
      isP2PForce: false
    },
    {
      pathId: '3fc87bbe-416f-4d09-95c4-61440c6c935e',
      taskId: '4898852a-3f8a-6555-0cfc-9498d69f8816',
      orientation: 3,
      protocol: 4,
      protocolKeyWord: 'IPv4',
      source: '158.7.23.34',
      realSource: '',
      dest: '172.25.117.7',
      realDest: '',
      dataSource: { type: 2, around: { direction: 1 } },
      pathAnalysisSet: '',
      pathTime: '2019-12-12T16:34:48.137Z',
      fromDev: {
        devName: 'Multicast-Receive1',
        devType: 2,
        domainId: 'edd0724f-3646-43ed-8fac-b39abe7561f3',
        ID: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79'
      },
      toDev: {
        devName: 'Multicast-Receive1',
        devType: 2,
        domainId: 'edd0724f-3646-43ed-8fac-b39abe7561f3',
        ID: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79'
      },
      isComplete: true,
      isRunning: false,
      mapId: '1ad66ca0-babd-e8c1-a6a3-271b7b15ddf2',
      mapPageId: '184368c8-e2b6-2f8b-ff74-cb2ed5ad831c',
      status: 2,
      drawMapDataList: [],
      hoplist: [
        {
          hops: [
            {
              fromDev: {
                devId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
                devName: 'Multicast-Receive1',
                devType: 2,
                domainId: ''
              },
              fromIntf: {
                intfKeyObj: {
                  schema: 'ipIntfs._id',
                  value: '91838949-7bf6-4f41-b9ef-e7bd6b637623'
                },
                intfDisplaySchemaObj: {
                  schema: 'ipIntfs.name',
                  value: 'Ethernet0/0 172.25.117.7/24'
                },
                PhysicalInftName: 'Ethernet0/0'
              },
              hopId: '6fc8decf-8302-463a-ba44-e8a57ac373e9',
              isComplete: false,
              isP2P: false,
              mediaId: '',
              mediaInfo: {
                mediaName: '',
                mediaType: '',
                neat: false,
                topoType: '',
                mediaId: ''
              },
              preHopId: '00000000-0000-0000-0000-000000000000',
              sequnce: 0,
              toIntf: {
                intfKeyObj: {
                  schema: 'intfs._id',
                  value: '781c5d0d-0e87-453d-bd3a-e388f152d35f'
                },
                intfDisplaySchemaObj: {
                  schema: 'intfs.name',
                  value: 'Ethernet0/0'
                },
                PhysicalInftName: 'Ethernet0/0'
              },
              toDev: {
                devId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
                devName: 'Multicast-Receive1',
                devType: 2,
                domainId: ''
              },
              topoType: 'L3_Topo_Type',
              trafficState: {
                acl: '',
                alg: -1,
                dev_name: 'Multicast-Receive1',
                dev_type: 2,
                in_intf: 'Ethernet0/1',
                in_intf_schema: 'intfs',
                in_intf_topo_type: 'L3_Topo_Type',
                next_dev_in_intf: 'Ethernet0/0',
                next_dev_in_intf_schema: 'intfs',
                next_dev_in_intf_topo_type: 'L3_Topo_Type',
                next_dev_name: 'Multicast-Receive1',
                next_dev_type: 2,
                next_hop_ip: '172.25.117.7',
                next_hop_mac: '',
                out_intf: 'Ethernet0/0 172.25.117.7/24',
                out_intf_schema: 'ipIntfs',
                out_intf_topo_type: 'L3_Topo_Type',
                pbr: '',
                vrf: ''
              },
              parentHopId: ''
            },
            {
              fromDev: {
                devId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
                devName: 'Multicast-Receive1',
                devType: 2,
                domainId: ''
              },
              fromIntf: {
                intfKeyObj: { schema: '', value: '' },
                intfDisplaySchemaObj: { schema: '', value: '' },
                PhysicalInftName: ''
              },
              hopId: '2793c8a5-ea3b-4a86-8ea6-bc4886195fe3',
              isComplete: false,
              isP2P: false,
              mediaId: '',
              mediaInfo: {
                mediaName: '',
                mediaType: '',
                neat: false,
                topoType: '',
                mediaId: ''
              },
              preHopId: '6fc8decf-8302-463a-ba44-e8a57ac373e9',
              sequnce: 1,
              toIntf: {
                intfKeyObj: { schema: '', value: '' },
                intfDisplaySchemaObj: { schema: '', value: '' },
                PhysicalInftName: ''
              },
              toDev: {
                devId: '',
                devName: '',
                devType: 0,
                domainId: ''
              },
              topoType: '',
              trafficState: {
                acl: '',
                alg: -1,
                dev_name: 'Multicast-Receive1',
                dev_type: 2,
                in_intf: 'Ethernet0/0',
                in_intf_schema: 'intfs',
                in_intf_topo_type: 'L3_Topo_Type',
                next_dev_in_intf: '',
                next_dev_in_intf_schema: '',
                next_dev_in_intf_topo_type: '',
                next_dev_name: '',
                next_dev_type: 0,
                next_hop_ip: '',
                next_hop_mac: '',
                out_intf: '',
                out_intf_schema: '',
                out_intf_topo_type: '',
                pbr: '',
                vrf: ''
              },
              parentHopId: ''
            }
          ],
          color: '#333399',
          type: null
        }
      ],
      isA2B: true,
      summary: {
        path_list: [
          {
            branch_list: [
              {
                hop_list: [
                  '6fc8decf-8302-463a-ba44-e8a57ac373e9',
                  '2793c8a5-ea3b-4a86-8ea6-bc4886195fe3'
                ],
                failure_reason: '',
                status: 'Success',
                error_code: -1,
                priority: -1
              }
            ],
            failure_reasons: [],
            path_name: 'L3 Path',
            description: '158.7.23.34 -> 172.25.117.7',
            status: 'Success'
          }
        ],
        failure_reasons: [],
        status: 'Success'
      },
      isLiveUseBaseLineConfig: true,
      routingScheme: 0,
      group: '',
      isFailedPath: false,
      category: 'PathNew',
      from: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
      to: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
      fromPortIntf: 'TracePath',
      toPortIntf: 'TracePath',
      diff: 0.8947528638727069,
      customPoints: [],
      color: '#333399',
      type: null,
      isL2LinkStyle: false,
      shapeData: {
        category: '',
        attachData: '',
        loc: '0,0',
        color: null,
        stroke: 'white',
        strokeWidth: 0,
        geo: null,
        scale: 0,
        angle: 0,
        bound: null,
        lineStyle: null,
        textAlign: 'center',
        fromArrow: '',
        toArrow: ''
      },
      eventHandle: null,
      key: 'bf39c277-1b44-b030-6fb9-1561e1333170'
    },
    {
      pathId: '9ffc3ed8-33d9-4972-8a47-fcf4f7c2fee7',
      taskId: '4898852a-3f8a-6555-0cfc-9498d69f8816',
      orientation: 3,
      protocol: 4,
      protocolKeyWord: 'IPv4',
      source: '158.7.23.34',
      realSource: '',
      dest: '172.25.117.7',
      realDest: '',
      dataSource: { type: 2, around: { direction: 1 } },
      pathAnalysisSet: '',
      pathTime: '2019-12-12T16:34:48.137Z',
      fromDev: {
        devName: 'Multicast-Receive1',
        devType: 2,
        domainId: 'edd0724f-3646-43ed-8fac-b39abe7561f3',
        ID: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79'
      },
      toDev: {
        devName: 'Multicast-Receive1',
        devType: 2,
        domainId: 'edd0724f-3646-43ed-8fac-b39abe7561f3',
        ID: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79'
      },
      isComplete: true,
      isRunning: false,
      mapId: '1ad66ca0-babd-e8c1-a6a3-271b7b15ddf2',
      mapPageId: '184368c8-e2b6-2f8b-ff74-cb2ed5ad831c',
      status: 2,
      drawMapDataList: [],
      hoplist: [
        {
          hops: [
            {
              fromDev: {
                devId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
                devName: 'Multicast-Receive1',
                devType: 2,
                domainId: ''
              },
              fromIntf: {
                intfKeyObj: {
                  schema: 'ipIntfs._id',
                  value: 'ccc7d665-cf5c-4127-a76c-5705c0373196'
                },
                intfDisplaySchemaObj: {
                  schema: 'ipIntfs.name',
                  value: 'Ethernet0/1 158.7.23.34/29'
                },
                PhysicalInftName: 'Ethernet0/1'
              },
              hopId: '9d49a47a-be68-4c03-881c-3a79a1c81bf8',
              isComplete: false,
              isP2P: false,
              mediaId: '',
              mediaInfo: {
                mediaName: '',
                mediaType: '',
                neat: false,
                topoType: '',
                mediaId: ''
              },
              preHopId: '00000000-0000-0000-0000-000000000000',
              sequnce: 0,
              toIntf: {
                intfKeyObj: {
                  schema: 'intfs._id',
                  value: 'edbd994d-aa7a-47fb-86ac-d5121b944718'
                },
                intfDisplaySchemaObj: {
                  schema: 'intfs.name',
                  value: 'Ethernet0/1'
                },
                PhysicalInftName: 'Ethernet0/1'
              },
              toDev: {
                devId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
                devName: 'Multicast-Receive1',
                devType: 2,
                domainId: ''
              },
              topoType: 'L3_Topo_Type',
              trafficState: {
                acl: '',
                alg: -1,
                dev_name: 'Multicast-Receive1',
                dev_type: 2,
                in_intf: 'Ethernet0/0',
                in_intf_schema: 'intfs',
                in_intf_topo_type: 'L3_Topo_Type',
                next_dev_in_intf: 'Ethernet0/1',
                next_dev_in_intf_schema: 'intfs',
                next_dev_in_intf_topo_type: 'L3_Topo_Type',
                next_dev_name: 'Multicast-Receive1',
                next_dev_type: 2,
                next_hop_ip: '158.7.23.34',
                next_hop_mac: '',
                out_intf: 'Ethernet0/1 158.7.23.34/29',
                out_intf_schema: 'ipIntfs',
                out_intf_topo_type: 'L3_Topo_Type',
                pbr: '',
                vrf: ''
              },
              parentHopId: ''
            },
            {
              fromDev: {
                devId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
                devName: 'Multicast-Receive1',
                devType: 2,
                domainId: ''
              },
              fromIntf: {
                intfKeyObj: { schema: '', value: '' },
                intfDisplaySchemaObj: { schema: '', value: '' },
                PhysicalInftName: ''
              },
              hopId: '89909c8b-e04b-4ebf-b73e-c420c108a3bb',
              isComplete: false,
              isP2P: false,
              mediaId: '',
              mediaInfo: {
                mediaName: '',
                mediaType: '',
                neat: false,
                topoType: '',
                mediaId: ''
              },
              preHopId: '9d49a47a-be68-4c03-881c-3a79a1c81bf8',
              sequnce: 1,
              toIntf: {
                intfKeyObj: { schema: '', value: '' },
                intfDisplaySchemaObj: { schema: '', value: '' },
                PhysicalInftName: ''
              },
              toDev: {
                devId: '',
                devName: '',
                devType: 0,
                domainId: ''
              },
              topoType: '',
              trafficState: {
                acl: '',
                alg: -1,
                dev_name: 'Multicast-Receive1',
                dev_type: 2,
                in_intf: 'Ethernet0/1',
                in_intf_schema: 'intfs',
                in_intf_topo_type: 'L3_Topo_Type',
                next_dev_in_intf: '',
                next_dev_in_intf_schema: '',
                next_dev_in_intf_topo_type: '',
                next_dev_name: '',
                next_dev_type: 0,
                next_hop_ip: '',
                next_hop_mac: '',
                out_intf: '',
                out_intf_schema: '',
                out_intf_topo_type: '',
                pbr: '',
                vrf: ''
              },
              parentHopId: ''
            }
          ],
          color: '#339933',
          type: null
        }
      ],
      isA2B: false,
      summary: {
        path_list: [
          {
            branch_list: [
              {
                hop_list: [
                  '9d49a47a-be68-4c03-881c-3a79a1c81bf8',
                  '89909c8b-e04b-4ebf-b73e-c420c108a3bb'
                ],
                failure_reason: '',
                status: 'Success',
                error_code: -1,
                priority: -1
              }
            ],
            failure_reasons: [],
            path_name: 'L3 Path',
            description: '172.25.117.7 -> 158.7.23.34',
            status: 'Success'
          }
        ],
        failure_reasons: [],
        status: 'Success'
      },
      isLiveUseBaseLineConfig: true,
      routingScheme: 0,
      group: '',
      isFailedPath: false,
      category: 'PathNew',
      from: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
      to: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
      fromPortIntf: 'TracePath',
      toPortIntf: 'TracePath',
      diff: 0.10186142712968493,
      customPoints: [],
      color: '#339933',
      type: null,
      isL2LinkStyle: false,
      shapeData: {
        category: '',
        attachData: '',
        loc: '0,0',
        color: null,
        stroke: 'white',
        strokeWidth: 0,
        geo: null,
        scale: 0,
        angle: 0,
        bound: null,
        lineStyle: null,
        textAlign: 'center',
        fromArrow: '',
        toArrow: ''
      },
      eventHandle: null,
      key: 'bf39c277-1b44-b030-6fb9-1561e1333170'
    }
  ],
  modelData: { space: 0.88 },
  MultiPathObjs: {},
  createTm: '2019-12-10T16:32:46.6512354Z',
  modifyTm: '2019-12-12T19:36:49.8358909Z',
  lastUpdateTime: '2019-12-10T16:32:46.6512354Z',
  creator: 'admin',
  updatedBy: 'admin',
  displayMode: 'switchMode',
  isNeatUp: false,
  extendData: {
    extendRunbookData: {
      runbookId: '',
      runbookNodeName: '',
      runbookNodeId: '',
      runbookNodeResultName: '',
      runbookNodeResultId: '',
      lastUpdateTime: '2019-12-10T16:31:10.926Z'
    },
    extendDataViewTemplateData: {
      dataViewTemplatePath: '',
      dataViewTemplateId: ''
    },
    extendDataViewData: {
      dataViewName: '',
      dataViewId: '',
      dataViewGroupScope: '',
      lastUpdateTime: '2019-12-10T16:31:10.926Z'
    }
  },
  pageExtraData: {
    image:
      'data:image/png;base64,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X3xhUtEWK1ZMHnjgAendu7e59sUXX5SXX37Z3KPjaz312rVry4oVK2L7uf3222Xfvn2yceNGqV+/vkRERMj3339vcsTr7xJqW7dulQoVKsj+/ftN//Pnzzc2q3/a38iRI2XBggXSsmVL498NN9wQ283rr78uAwYMkNOnT8f66IBQ4wIEIGBTAgi7TQMXCLOHDh0qffr0kVq1akmnTp2kcOHCsmfPHpMH/qWXXjKiO3jwYPNvFdP/t3c/oVpWWxyAN15MEkwHKSmEVGaTTGrSpBAMdFJpaSlEDeyPpmI1KDBHKSUFglmUUSIoZBSEoTQICzJJFEkRk7KCJoEiCTqIssLb2nAO3o733hZRLvN5R+FZ53zrPOuL3/vuvT89ceJEGzduXP972d955502e/bs3nYE5bFjx9q+ffuG/BoR+HHj8Pzzz7eJEye2CNy4IVi2bFm75ZZb+r+fHiEd13vvvdfmzp3b/w76gZuEX3/9tYf9ww8/3Hs5O9j37NnTwzduGO6999726KOPtrvvvrv/rPhnXONrN954Y/vpp5/aU0891a699tr29ddf9xuIZ555psVNjWA/H+88r0mAQEZAsGe0LuLa7777rl199dU9AHfs2PHbv6/+ryEaO3fubNOmTWsfffRRf4rfsmVLD9h4ao8n79dff/23f+Htlx68S5YsaatXrx7yM26//fb+tH3gwIEhX1u5cmV77rnnejBfeumlbeHChe3bb79tn376aVu/fn2777772t69e9vNN9/cQ3jmzJn/EewDP/Do0aNt/Pjx/Qbi8ccfH3ydxYsXt9dee6199tlnberUqUNeX7BfxP8D+NUJXEACgv0CGtb5bHXjxo1twYIFg4EZT8k//PDDYEsjR45sA0/LTzzxRIsQvv/++/uT+fTp09tLL73UAzuCN56iP/zww/7nv78ioONJOp7Q46k5VgUGrt27d/cbi4HvjZuFRYsWtbihiJuFN998sz/px1J6rBZET2c/sf+/YL/qqqv66+3ateuc1APB/v7777dbb711sOaFF15oq1atshR/Pt+gXpsAgUEBwe7N8IcEIjBjmfzIkSN9iTrC7+xw279/f9/DvuOOO/pS/Mcff9yuuOKKtnz58h7g8bXYa//ggw966MdT9/Dhw9vp06f768dy/YgRI/p/v/HGGz0oY787lszXrl3bxo4d228cLr/8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',
    imageSize: { width: 501.0445223721591, height: 665.4620970657686 }
  },
  viewportPosition: '-115.29930786335467 -518.1573232879687',
  mapLegend: {
    devHighlightLegend: { name: 'device', list: [] },
    linkHighlightLegend: { name: 'link', list: [] },
    interfaceHighlightLegend: { name: 'interface', list: [] },
    intfMonitorLegend: [],
    devMonitorLegend: [],
    dataUnitMonitorLegend: []
  },
  isFirstView: false,
  isFrom6X: false,
  visualSpaceInfo: {
    visualSpaceName: 'Default Visual Space',
    visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
  },
  changedToDefaultDataview: [],
  deviceRemovedNote: [],
  currVersion: '8.0.1',
  visioInfos: [
    {
      type: 'node',
      infos: [
        {
          type: 'picture',
          source:
            '/ServicesAPI/DeviceIcon/27a60d01-bd53-d200-0a42-cd8c64cd60f3/00000000-0000-0000-0000-000000000082.png',
          width: 22.44,
          height: 13.64,
          bounds: {
            left: 630.78,
            top: -33.82,
            right: 653.22,
            bottom: -20.18,
            width: 22.440000000000055,
            height: 13.64
          },
          connectId: 'default'
        },
        {
          type: 'text',
          text: '192.168.48.0/22',
          font: "normal normal 400 11px 'open sans'",
          textAlign: 'center',
          stroke: 'black',
          background: 'white',
          isMultiline: true,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 600.9970703125,
            top: -12.18,
            right: 683.0029296875,
            bottom: 0.7304980468750006,
            width: 82.005859375,
            height: 12.910498046875
          }
        }
      ],
      layerIndex: 8,
      key: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      location: '642 -27',
      bounds: {
        left: 600.9970703125,
        top: -35.82,
        right: 683.0029296875,
        bottom: 0.7304980468749989,
        width: 82.005859375,
        height: 36.550498046875
      }
    },
    {
      type: 'node',
      infos: [
        {
          type: 'picture',
          source:
            '/ServicesAPI/DeviceIcon/27a60d01-bd53-d200-0a42-cd8c64cd60f3/00000000-0000-0000-0000-00000000002e.png',
          width: 51.92,
          height: 31.9,
          bounds: {
            left: 530.2198957943172,
            top: 204.15680925516006,
            right: 582.1398957943171,
            bottom: 236.05680925516006,
            width: 51.91999999999996,
            height: 31.900000000000006
          },
          connectId: 'default'
        },
        {
          type: 'shape',
          fill: '#CC3333',
          geometryString:
            'F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z',
          stroke: null,
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 1,
          angle: 0,
          bounds: {
            left: 569.6398957943171,
            top: 201.65680925516006,
            right: 584.6398957943171,
            bottom: 216.64655417278513,
            width: 15,
            height: 14.989744917625075
          }
        },
        {
          type: 'text',
          text: 'GW-SWITCH',
          font: "normal normal 600 13px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: false,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 518.5866340755672,
            top: 241.05680925516006,
            right: 593.2731575130672,
            bottom: 256.65300066141003,
            width: 74.6865234375,
            height: 15.59619140625
          }
        }
      ],
      layerIndex: 8,
      key: '5c01b1a7-0422-4131-ae16-e9bafd0d0927',
      location: '556.1798957943172 220.10680925516004',
      bounds: {
        left: 503.5866340755672,
        top: 200.65680925516006,
        right: 609.2731575130672,
        bottom: 259.65300066141003,
        width: 105.6865234375,
        height: 58.99619140625
      }
    },
    {
      type: 'node',
      infos: [
        {
          type: 'picture',
          source:
            '/ServicesAPI/DeviceIcon/27a60d01-bd53-d200-0a42-cd8c64cd60f3/00000000-0000-0000-0000-00000000002e.png',
          width: 51.92,
          height: 31.9,
          bounds: {
            left: 403.9737491122159,
            top: -269.0949583659608,
            right: 455.8937491122159,
            bottom: -237.1949583659608,
            width: 51.920000000000016,
            height: 31.900000000000006
          },
          connectId: 'default'
        },
        {
          type: 'shape',
          fill: '#CC3333',
          geometryString:
            'F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z',
          stroke: null,
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 1,
          angle: 0,
          bounds: {
            left: 443.3937491122159,
            top: -271.5949583659608,
            right: 458.3937491122159,
            bottom: -256.6052134483357,
            width: 15,
            height: 14.989744917625103
          }
        },
        {
          type: 'text',
          text: 'L3out5011',
          font: "normal normal 600 13px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: false,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 396.9584073153409,
            top: -232.1949583659608,
            right: 462.4090909090909,
            bottom: -216.5987669597108,
            width: 65.45068359375,
            height: 15.59619140625
          }
        }
      ],
      layerIndex: 8,
      key: '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1b',
      location: '429.9337491122159 -253.14495836596078',
      bounds: {
        left: 381.9584073153409,
        top: -272.5949583659608,
        right: 478.4090909090909,
        bottom: -213.5987669597108,
        width: 96.45068359375,
        height: 58.99619140625
      }
    },
    {
      type: 'link',
      infos: [
        {
          type: 'text',
          text: 'e1/0 192.168.48.150/22',
          font: "normal normal 600 11px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: true,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 552.0359109155992,
            top: 179.62192299538353,
            right: 604.2101432126225,
            bottom: 69.61826722361795,
            width: 121.0322265625,
            height: 13.19677734375
          },
          angle: 289.15209547954146,
          connectId:
            '5c01b1a7-0422-4131-ae16-e9bafd0d09270f699256-21b0-41b8-ab4a-1f5b0937d2a3',
          isFrom: true
        },
        {
          type: 'shape',
          fill: 'black',
          geometryString: 'M0 224.33680925516006 L77.912092 0',
          stroke: '#000000',
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 1,
          angle: 0,
          bounds: {
            left: 561.219324943221,
            top: -20.68,
            right: 640.131416943221,
            bottom: 204.65680925516006,
            width: 78.91209200000003,
            height: 225.33680925516006
          },
          isFrom: true,
          layerName: 1
        }
      ],
      layerIndex: 6,
      from: '5c01b1a7-0422-4131-ae16-e9bafd0d0927',
      fromConnectedId:
        '5c01b1a7-0422-4131-ae16-e9bafd0d09270f699256-21b0-41b8-ab4a-1f5b0937d2a3',
      to: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      toConnectedId: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      points: ['561.719324943221 204.15680925516006', '639.631416501848 -20.18']
    },
    {
      type: 'link',
      infos: [
        {
          type: 'text',
          text: 'g0/1 192.168.50.11/22',
          font: "normal normal 600 11px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: true,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 477.95601932931004,
            top: -227.07473235020487,
            right: 546.6745061350407,
            bottom: -134.50163084947928,
            width: 114.533203125,
            height: 13.19677734375
          },
          angle: 46.840147253255154,
          connectId:
            '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1baf677e49-ef16-46f1-9dcb-079593fd9417',
          isFrom: true
        },
        {
          type: 'shape',
          fill: 'black',
          geometryString: 'M0 0 L190.713803 203.374958',
          stroke: '#000000',
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 1,
          angle: 0,
          bounds: {
            left: 444.39077811741913,
            top: -237.6949583659608,
            right: 636.1045811174191,
            bottom: -33.320000365960794,
            width: 191.71380299999998,
            height: 204.374958
          },
          isFrom: true,
          layerName: 1
        }
      ],
      layerIndex: 6,
      from: '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1b',
      fromConnectedId:
        '4fa157dc-ccfa-4f81-98f1-c5b971ac8e1baf677e49-ef16-46f1-9dcb-079593fd9417',
      to: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      toConnectedId: 'cb55acc5-e3eb-44ce-880f-210e01e5ab4b',
      points: [
        '444.89077811741913 -237.1949583659608',
        '635.6045807012234 -33.82'
      ]
    },
    {
      type: 'link',
      infos: [],
      layerIndex: 6,
      from: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
      fromConnectedId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79undefined',
      to: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
      toConnectedId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79undefined',
      points: []
    },
    {
      type: 'link',
      infos: [],
      layerIndex: 6,
      from: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
      fromConnectedId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79undefined',
      to: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79',
      toConnectedId: '436a69b4-e18c-4e0f-ab47-1ddf060c8f79undefined',
      points: []
    }
  ]
};

const data2 = {
  ID: 'd7225742-c860-47d1-64ee-863b5bd33a12',
  l2Style: false,
  docType: 'Page',
  netMapType: 1,
  width: 500,
  heigh: 400,
  bkColor: 'white',
  readOnly: false,
  title: 'Page 1',
  active: true,
  description: '',
  mapViewOption: {
    options: [
      {
        posName: 'devHostName',
        displayName: 'Device Hostname',
        scaleThreshold: 0.6,
        display: true
      },
      {
        posName: 'devPos1',
        displayName: 'Device Position 1',
        scaleThreshold: 1,
        display: true
      },
      {
        posName: 'devPos2',
        displayName: 'Device Position 2',
        scaleThreshold: 1,
        display: true
      },
      {
        posName: 'devPos3',
        displayName: 'Device Position 3',
        scaleThreshold: 1,
        display: true
      },
      {
        posName: 'devPos4',
        displayName: 'Device Position 4',
        scaleThreshold: 1,
        display: true
      },
      {
        posName: 'intfPos0',
        displayName: 'Interface Name',
        scaleThreshold: 0.6,
        display: true
      },
      {
        posName: 'intfPos1',
        displayName: 'Link Position 1',
        scaleThreshold: 1.2,
        display: true
      },
      {
        posName: 'intfPos2',
        displayName: 'Link Position 2',
        scaleThreshold: 1.2,
        display: true
      },
      {
        posName: 'intfPos3',
        displayName: 'Link Position 3',
        scaleThreshold: 1.4,
        display: true
      },
      {
        posName: 'intfPos4',
        displayName: 'Link Position 4',
        scaleThreshold: 1.4,
        display: true
      },
      {
        posName: 'intfPos5',
        displayName: 'Link Position 5',
        scaleThreshold: 1.6,
        display: true
      },
      {
        posName: 'intfPos6',
        displayName: 'Link Position 6',
        scaleThreshold: 1.6,
        display: true
      },
      {
        posName: 'intfPos7',
        displayName: 'Link Position 7',
        scaleThreshold: 1.8,
        display: true
      },
      {
        posName: 'intfPos8',
        displayName: 'Link Position 8',
        scaleThreshold: 1.8,
        display: true
      },
      {
        posName: 'devNote',
        displayName: 'Device Note',
        scaleThreshold: 0.8,
        display: true
      },
      {
        posName: 'overflowPos',
        displayName: 'Overflow Position',
        scaleThreshold: 0.6,
        display: true
      },
      {
        posName: 'otherDrawShapes',
        displayName: 'Other Draw Shapes',
        scaleThreshold: 0.6,
        display: true
      }
    ],
    step: 0.2,
    isNeatUp: false
  },
  mapAutoLinkOptionDict: {
    '00000000-0000-0000-0000-000000000000': ['L3_Topo_Type']
  },
  mapAutoLinkOptionExcluedeMip: false,
  mapAutoLinkOptionList: null,
  l3StyleInExpandedStyle: [
    '1000',
    '1030',
    '1036',
    '1004',
    '1005',
    '1002',
    '1049',
    '1028',
    '1021',
    '1027',
    '1024'
  ],
  highlightMode: 0,
  layoutStyle: 1,
  topologyType: 1,
  nodeDataArray: [
    {
      devCategory: 1000,
      devType: 2,
      dataViewData: {
        devGraphicInfo: {
          font: { faceName: 'Calibri', fontSize: '9' },
          imageList: [
            {
              name: '00000000-0000-0000-0000-000000000042.png',
              status: 1,
              size: '240 166'
            },
            {
              name: '00000000-0000-0000-0000-000000000043.png',
              status: 256,
              size: '240 166'
            },
            {
              name: '00000000-0000-0000-0000-000000000044.png',
              status: 512,
              size: '240 166'
            },
            {
              name: '00000000-0000-0000-0000-000000000046.png',
              status: 64,
              size: '240 166'
            },
            {
              name: '00000000-0000-0000-0000-000000000045.png',
              status: 1024,
              size: '240 166'
            }
          ]
        },
        dataViewInfo: {
          dataViewTaskInfoId: '00000000-0000-0000-0000-000000000000',
          dataViewGroupId: '00000000-0000-0000-0000-000000000000',
          dataViewType: 'dvDefault',
          name: 'Default Data View',
          dataViewDefinitionId: '00000000-0000-0000-0000-000000000000',
          time: '2019-10-14T10:51:35.308Z'
        },
        devPosList: [
          {
            posName: 'devPos1',
            posInfo: {
              displayInfo: '172.25.111.12',
              isLock: false,
              displayTemplate: '',
              dataUnitList: [
                {
                  uId: 'mgmtIP',
                  value: '172.25.111.12',
                  valueType: 'string',
                  type: 'uSrcGDR',
                  displayName: 'Management IP',
                  generateTime: '0001-01-01T00:00:00',
                  intfTmpl: null,
                  definedDrillDownAction: false
                }
              ],
              isCustomize: false
            }
          },
          {
            posName: 'devPos2',
            posInfo: {
              displayInfo: 'Cisco Router',
              isLock: false,
              displayTemplate: '',
              dataUnitList: [
                {
                  uId: 'subTypeName',
                  value: 'Cisco Router',
                  valueType: 'string',
                  type: 'uSrcGDR',
                  displayName: 'Device Type',
                  generateTime: '0001-01-01T00:00:00',
                  intfTmpl: null,
                  definedDrillDownAction: false
                }
              ],
              isCustomize: false
            }
          }
        ],
        intfInfoList: [],
        intfCount: 0,
        highlightDataList: []
      },
      operateInfo: {
        opUser: 'shy',
        opUserId: '2da660f0-d5c9-403f-91c4-eb3f0098661c',
        opTime: '2019-10-14T10:51:35.543Z',
        operateUserName: 'shy',
        operateTime: '2019-10-14T10:51:35.543Z'
      },
      key: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
      hostName: 'Host5',
      category: 'NetworkDevice',
      templateInfo: { templateId: '00000000-0000-0000-0000-000000000000' },
      devNodeData: {
        category: 'NetworkDevice',
        isRealDev: true,
        nodeIdentify: {
          nbPathSchema: 'Legacy',
          nbPathValue: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8'
        },
        id: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
        visualSpaceInfo: {
          visualSpaceName: 'Default Visual Space',
          visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
        },
        isGroup: false,
        name: null
      },
      noPrivilege: false,
      location: '241.82259521484377 2.2727194213866824',
      isLocked: true,
      eventHandle: null,
      compModels: { isEditableModel: true },
      layerName: 'DeviceLayer'
    },
    {
      devCategory: 1000,
      devType: 2,
      dataViewData: {
        devGraphicInfo: {
          font: { faceName: 'Calibri', fontSize: '9' },
          imageList: [
            {
              name: '00000000-0000-0000-0000-000000000042.png',
              status: 1,
              size: '240 166'
            },
            {
              name: '00000000-0000-0000-0000-000000000043.png',
              status: 256,
              size: '240 166'
            },
            {
              name: '00000000-0000-0000-0000-000000000044.png',
              status: 512,
              size: '240 166'
            },
            {
              name: '00000000-0000-0000-0000-000000000046.png',
              status: 64,
              size: '240 166'
            },
            {
              name: '00000000-0000-0000-0000-000000000045.png',
              status: 1024,
              size: '240 166'
            }
          ]
        },
        dataViewInfo: {
          dataViewTaskInfoId: '00000000-0000-0000-0000-000000000000',
          dataViewGroupId: '00000000-0000-0000-0000-000000000000',
          dataViewType: 'dvDefault',
          name: 'Default Data View',
          dataViewDefinitionId: '00000000-0000-0000-0000-000000000000',
          time: '2019-10-14T10:51:33.201Z'
        },
        devPosList: [
          {
            posName: 'devPos1',
            posInfo: {
              displayInfo: '172.25.111.1',
              isLock: false,
              displayTemplate: '',
              dataUnitList: [
                {
                  uId: 'mgmtIP',
                  value: '172.25.111.1',
                  valueType: 'string',
                  type: 'uSrcGDR',
                  displayName: 'Management IP',
                  generateTime: '0001-01-01T00:00:00',
                  intfTmpl: null,
                  definedDrillDownAction: false
                }
              ],
              isCustomize: false
            }
          },
          {
            posName: 'devPos2',
            posInfo: {
              displayInfo: 'Cisco Router',
              isLock: false,
              displayTemplate: '',
              dataUnitList: [
                {
                  uId: 'subTypeName',
                  value: 'Cisco Router',
                  valueType: 'string',
                  type: 'uSrcGDR',
                  displayName: 'Device Type',
                  generateTime: '0001-01-01T00:00:00',
                  intfTmpl: null,
                  definedDrillDownAction: false
                }
              ],
              isCustomize: false
            }
          }
        ],
        intfInfoList: [],
        intfCount: 0,
        highlightDataList: []
      },
      operateInfo: {
        opUser: 'shy',
        opUserId: '2da660f0-d5c9-403f-91c4-eb3f0098661c',
        opTime: '2019-10-14T10:51:33.462Z',
        operateUserName: 'shy',
        operateTime: '2019-10-14T10:51:33.462Z'
      },
      key: '15a60076-8b24-431e-ad4e-12a752b89e71',
      hostName: 'Host1',
      category: 'NetworkDevice',
      templateInfo: { templateId: '00000000-0000-0000-0000-000000000000' },
      devNodeData: {
        category: 'NetworkDevice',
        isRealDev: true,
        nodeIdentify: {
          nbPathSchema: 'Legacy',
          nbPathValue: '15a60076-8b24-431e-ad4e-12a752b89e71'
        },
        id: '15a60076-8b24-431e-ad4e-12a752b89e71',
        visualSpaceInfo: {
          visualSpaceName: 'Default Visual Space',
          visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
        },
        isGroup: false,
        name: null
      },
      noPrivilege: false,
      location: '0 219.00000000000003',
      isLocked: true,
      eventHandle: null,
      compModels: { isEditableModel: true }
    },
    {
      category: 'Media',
      hostName: ['172.25.111.0/24', 'VRF: management'],
      key: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      devType: 'Lan',
      devCategory: 'Lan',
      status: 1,
      topoType: 'L3_Topo_Type',
      dataViewData: {
        devGraphicInfo: {
          imageList: [
            {
              name: '00000000-0000-0000-0000-000000000082.png',
              size: '102 62',
              scale: 0.22,
              status: 1
            }
          ]
        },
        intfInfoList: [],
        highlightDataList: []
      },
      location: '286 337',
      isLocked: true,
      eventHandle: null,
      compModels: { isEditableModel: true }
    }
  ],
  linkDataArray: [
    {
      category: 'TopoLink',
      from: '15a60076-8b24-431e-ad4e-12a752b89e71',
      to: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      topoType: 'L3_Topo_Type',
      isP2P: false,
      curve: 0,
      viewInfo: {},
      lineColor: 'black',
      lineWidth: 1,
      visible: true,
      intfSrc: {
        dataViewInfo: {
          dataViewType: 'dvDefault',
          time: '2019-10-14T07:43:04.1560094-04:00'
        },
        intfInfo: {
          intfPosList: [
            {
              posName: 'intfPos1',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.routingProtocol',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Routing Protocol',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos3',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.multicastMode',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Multicasting Mode',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos4',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.mplsVrf',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'MPLS VRF',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos5',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.inAclName',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Inbound ACL',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos6',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.outAclName',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Outbound ACL',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos7',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.descr',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Description',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            }
          ],
          intf: {
            intfKeyObj: {
              schema: 'ipIntfs._id',
              value: '2288c6b2-6395-4150-96f1-9c90db7eafc2'
            },
            intfDisplaySchemaObj: {
              schema: 'ipIntfs.name',
              value: 'e0/0 172.25.111.1/24'
            },
            isIpUnnumberedIntf: false,
            devId: null,
            intfNodeData: {
              isRealIntf: true,
              nodeIdentify: {
                nbPathSchema: 'Legacy.ipIntfs',
                nbPathValue: '2288c6b2-6395-4150-96f1-9c90db7eafc2'
              },
              id: '2288c6b2-6395-4150-96f1-9c90db7eafc2',
              visualSpaceInfo: {
                visualSpaceName: 'Default Visual Space',
                visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
              }
            },
            intfExtendData: {
              'intfs.isChannel': false,
              'intfs.isTunnel': false,
              'intfs.isTunnelMultipoint': false
            }
          },
          intfHighlightList: null
        }
      },
      intfDest: null,
      fromPort: '2288c6b2-6395-4150-96f1-9c90db7eafc2',
      toPort: '',
      devIdSrc: '15a60076-8b24-431e-ad4e-12a752b89e71',
      devIdDest: null,
      mediaId: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      mediaInfo: {
        mediaId: '68aa17ac-e203-442a-9498-f3c24b6eb202',
        mediaName: '172.25.111.0/24',
        mediaType: 'Lan',
        topoType: 'L3_Topo_Type',
        neat: false,
        vrf: 'management',
        hsrp: ''
      },
      policyStyle: {
        src: {
          line: {
            stroke: '#000000',
            strokeWidth: 1,
            strokeDashArray: [0],
            isCreateLegend: false,
            name: 'Default'
          }
        },
        dest: {
          line: {
            stroke: '#000000',
            strokeWidth: 1,
            strokeDashArray: [0],
            isCreateLegend: false,
            name: 'Default'
          }
        }
      },
      isL2LinkStyle: false,
      points: ['26.4 229.89230769230772', '274.78 332.37076923076916'],
      pointsL2: null,
      isP2PForce: false,
      eventHandle: null,
      key: '84fb49f3-ef73-b92d-30dc-a5b7a6e3a27e',
      compModels: { isEditableModel: true }
    },
    {
      category: 'TopoLink',
      from: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
      to: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      topoType: 'L3_Topo_Type',
      isP2P: false,
      curve: 0,
      viewInfo: {},
      lineColor: 'black',
      lineWidth: 1,
      visible: true,
      intfSrc: {
        dataViewInfo: {
          dataViewType: 'dvDefault',
          time: '2019-10-14T07:43:04.1570105-04:00'
        },
        intfInfo: {
          intfPosList: [
            {
              posName: 'intfPos1',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.routingProtocol',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Routing Protocol',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos3',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.multicastMode',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Multicasting Mode',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos4',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.mplsVrf',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'MPLS VRF',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos5',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.inAclName',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Inbound ACL',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos6',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.outAclName',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Outbound ACL',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            },
            {
              posName: 'intfPos7',
              posInfo: {
                isLock: false,
                displayTemplate: '',
                dataUnitList: [
                  {
                    uId: 'intfs.descr',
                    valueType: 'string',
                    type: 'uSrcGDR',
                    displayName: 'Description',
                    generateTime: '0001-01-01T00:00:00',
                    intfTmpl: null,
                    definedDrillDownAction: false
                  }
                ],
                isCustomize: false
              }
            }
          ],
          intf: {
            intfKeyObj: {
              schema: 'ipIntfs._id',
              value: '14bfae5e-b0fe-4a19-8345-72dea9bfe29e'
            },
            intfDisplaySchemaObj: {
              schema: 'ipIntfs.name',
              value: 'e0/0 172.25.111.12/24'
            },
            isIpUnnumberedIntf: false,
            devId: null,
            intfNodeData: {
              isRealIntf: true,
              nodeIdentify: {
                nbPathSchema: 'Legacy.ipIntfs',
                nbPathValue: '14bfae5e-b0fe-4a19-8345-72dea9bfe29e'
              },
              id: '14bfae5e-b0fe-4a19-8345-72dea9bfe29e',
              visualSpaceInfo: {
                visualSpaceName: 'Default Visual Space',
                visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
              }
            },
            intfExtendData: {
              'intfs.isChannel': false,
              'intfs.isTunnel': false,
              'intfs.isTunnelMultipoint': false
            }
          },
          intfHighlightList: null
        }
      },
      intfDest: null,
      fromPort: '14bfae5e-b0fe-4a19-8345-72dea9bfe29e',
      toPort: '',
      devIdSrc: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
      devIdDest: null,
      mediaId: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      mediaInfo: {
        mediaId: '68aa17ac-e203-442a-9498-f3c24b6eb202',
        mediaName: '172.25.111.0/24',
        mediaType: 'Lan',
        topoType: 'L3_Topo_Type',
        neat: false,
        vrf: 'management',
        hsrp: ''
      },
      policyStyle: {
        src: {
          line: {
            stroke: '#000000',
            strokeWidth: 1,
            strokeDashArray: [0],
            isCreateLegend: false,
            name: 'Default'
          }
        },
        dest: {
          line: {
            stroke: '#000000',
            strokeWidth: 1,
            strokeDashArray: [0],
            isCreateLegend: false,
            name: 'Default'
          }
        }
      },
      isL2LinkStyle: false,
      points: [
        '244.23255537698688 20.532719421386684',
        '285.09989439727184 330.18'
      ],
      pointsL2: null,
      isP2PForce: false,
      eventHandle: null,
      key: '8fe4c6ad-283c-e89d-4965-98aee9513369',
      compModels: { isEditableModel: true }
    },
    {
      pathId: '36bbbdbe-6c8b-4cc7-8513-abc866ca443b',
      taskId: '1cabde1b-b6de-aeb6-8888-8c848084416e',
      orientation: 3,
      protocol: 4,
      protocolKeyWord: 'IPv4',
      source: '172.25.111.12',
      realSource: '',
      dest: '172.25.111.1',
      realDest: '',
      dataSource: { type: 2, around: { direction: 1 } },
      pathAnalysisSet: '',
      pathTime: '2019-11-12T17:44:12.599Z',
      fromDev: {
        devName: 'Host5',
        devType: 2,
        domainId: 'edd0724f-3646-43ed-8fac-b39abe7561f3',
        ID: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8'
      },
      toDev: {
        devName: 'Host1',
        devType: 2,
        domainId: 'edd0724f-3646-43ed-8fac-b39abe7561f3',
        ID: '15a60076-8b24-431e-ad4e-12a752b89e71'
      },
      isComplete: true,
      isRunning: false,
      mapId: '52b8cf2c-d5b9-b651-4655-379d41ebb076',
      mapPageId: '624c0bc4-2ebd-9a97-5a2b-1a0df76f5bfd',
      status: 2,
      drawMapDataList: [],
      hoplist: [
        {
          hops: [
            {
              fromDev: {
                devId: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
                devName: 'Host5',
                devType: 2,
                domainId: ''
              },
              fromIntf: {
                intfKeyObj: {
                  schema: 'ipIntfs._id',
                  value: '14bfae5e-b0fe-4a19-8345-72dea9bfe29e'
                },
                intfDisplaySchemaObj: {
                  schema: 'ipIntfs.name',
                  value: 'Ethernet0/0 172.25.111.12/24'
                },
                PhysicalInftName: 'Ethernet0/0'
              },
              hopId: '09adf3a6-3140-4a50-a389-c5511ab77f79',
              isComplete: false,
              isP2P: false,
              mediaId: '68aa17ac-e203-442a-9498-f3c24b6eb202',
              mediaInfo: {
                mediaName: '172.25.111.0/24\r\nVRF:management',
                mediaType: 'Lan',
                neat: false,
                topoType: 'L3_Topo_Type',
                mediaId: '68aa17ac-e203-442a-9498-f3c24b6eb202'
              },
              preHopId: '00000000-0000-0000-0000-000000000000',
              sequnce: 0,
              toIntf: {
                intfKeyObj: {
                  schema: 'ipIntfs._id',
                  value: '2288c6b2-6395-4150-96f1-9c90db7eafc2'
                },
                intfDisplaySchemaObj: {
                  schema: 'ipIntfs.name',
                  value: 'Ethernet0/0 172.25.111.1/24'
                },
                PhysicalInftName: 'Ethernet0/0'
              },
              toDev: {
                devId: '15a60076-8b24-431e-ad4e-12a752b89e71',
                devName: 'Host1',
                devType: 2,
                domainId: ''
              },
              topoType: 'L3_Topo_Type',
              trafficState: {
                acl: '',
                alg: -1,
                dev_name: 'Host5',
                dev_type: 2,
                in_intf: 'Ethernet0/0',
                in_intf_schema: 'intfs',
                in_intf_topo_type: 'L3_Topo_Type',
                next_dev_in_intf: 'Ethernet0/0 172.25.111.1/24',
                next_dev_in_intf_schema: 'ipIntfs',
                next_dev_in_intf_topo_type: 'L3_Topo_Type',
                next_dev_name: 'Host1',
                next_dev_type: 2,
                next_hop_ip: '172.25.111.1',
                next_hop_mac: '',
                out_intf: 'Ethernet0/0 172.25.111.12/24',
                out_intf_schema: 'ipIntfs',
                out_intf_topo_type: 'L3_Topo_Type',
                pbr: '',
                vrf: ''
              },
              parentHopId: ''
            },
            {
              fromDev: {
                devId: '15a60076-8b24-431e-ad4e-12a752b89e71',
                devName: 'Host1',
                devType: 2,
                domainId: ''
              },
              fromIntf: {
                intfKeyObj: { schema: '', value: '' },
                intfDisplaySchemaObj: { schema: '', value: '' },
                PhysicalInftName: ''
              },
              hopId: '207eb3d6-e02a-4868-9564-a26f99865453',
              isComplete: false,
              isP2P: false,
              mediaId: '',
              mediaInfo: {
                mediaName: '',
                mediaType: '',
                neat: false,
                topoType: '',
                mediaId: ''
              },
              preHopId: '09adf3a6-3140-4a50-a389-c5511ab77f79',
              sequnce: 1,
              toIntf: {
                intfKeyObj: { schema: '', value: '' },
                intfDisplaySchemaObj: { schema: '', value: '' },
                PhysicalInftName: ''
              },
              toDev: { devId: '', devName: '', devType: 0, domainId: '' },
              topoType: '',
              trafficState: {
                acl: '',
                alg: -1,
                dev_name: 'Host1',
                dev_type: 2,
                in_intf: 'Ethernet0/0 172.25.111.1/24',
                in_intf_schema: 'ipIntfs',
                in_intf_topo_type: 'L3_Topo_Type',
                next_dev_in_intf: '',
                next_dev_in_intf_schema: '',
                next_dev_in_intf_topo_type: '',
                next_dev_name: '',
                next_dev_type: 0,
                next_hop_ip: '',
                next_hop_mac: '',
                out_intf: '',
                out_intf_schema: '',
                out_intf_topo_type: '',
                pbr: '',
                vrf: ''
              },
              parentHopId: ''
            }
          ],
          color: '#339933',
          type: null,
          isSelected: false
        }
      ],
      isA2B: true,
      summary: {
        path_list: [
          {
            branch_list: [
              {
                hop_list: [
                  '09adf3a6-3140-4a50-a389-c5511ab77f79',
                  '207eb3d6-e02a-4868-9564-a26f99865453'
                ],
                failure_reason: '',
                status: 'Success'
              }
            ],
            failure_reasons: [],
            path_name: 'L3 Path',
            description: '172.25.111.12 -> 172.25.111.1',
            status: 'Success'
          },
          {
            branch_list: [
              {
                hop_list: ['e033efb6-2f43-40ad-8f3e-02e5c405efda'],
                failure_reason: 'No L2 connections were found',
                status: 'Failed'
              }
            ],
            failure_reasons: [],
            path_name: 'L2 Path',
            description: '172.25.111.12 -> 172.25.111.1',
            status: 'Failed'
          }
        ],
        failure_reasons: [],
        status: 'Success'
      },
      isLiveUseBaseLineConfig: true,
      routingScheme: 0,
      group: '',
      isFailedPath: false,
      category: 'PathNew',
      from: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
      to: '15a60076-8b24-431e-ad4e-12a752b89e71',
      fromPortIntf: 'TracePath',
      toPortIntf: 'TracePath',
      diff: 0.8807402435255625,
      customPoints: [],
      color: '#339933',
      type: null,
      isL2LinkStyle: false,
      shapeData: {
        category: '',
        attachData: '',
        loc: '0,0',
        color: null,
        stroke: 'white',
        strokeWidth: 0,
        geo: null,
        scale: 0,
        angle: 0,
        bound: null,
        lineStyle: null,
        textAlign: 'center',
        fromArrow: '',
        toArrow: ''
      },
      eventHandle: null,
      key: 'af01b5a4-3678-b2e7-5504-e10f81ad146e'
    }
  ],
  modelData: { space: 1 },
  MultiPathObjs: {},
  createTm: '2019-10-14T11:43:39.602286Z',
  modifyTm: '2019-11-12T19:09:51.1423838Z',
  lastUpdateTime: '2019-10-23T19:08:27.513468Z',
  creator: 'shy',
  updatedBy: 'admin',
  displayMode: 'switchMode',
  isNeatUp: false,
  extendData: {
    extendRunbookData: {
      runbookId: '',
      runbookNodeName: '',
      runbookNodeId: '',
      runbookNodeResultName: '',
      runbookNodeResultId: '',
      lastUpdateTime: '2019-10-14T10:52:48.142Z'
    },
    extendDataViewTemplateData: {
      dataViewTemplatePath: '',
      dataViewTemplateId: ''
    },
    extendDataViewData: {
      dataViewName: '',
      dataViewId: '',
      dataViewGroupScope: '',
      lastUpdateTime: '2019-10-14T10:52:48.142Z'
    }
  },
  pageExtraData: {
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlwAAAIFCAYAAAAHnSOPAAAgAElEQVR4XuydBXzWVRfHf+sENsaA0d3djQhKDQRUSjEAkTSQUkIQJQRJpV8p6RABaeluaelGutfx/s+FZ257/mP1bHvid993H2TP/d977vf+gd/OPfccu0itgY0ESIAESIAESIAESCDFCNhRcKUYWw5MAhZJ4GlwOILDLPvnMAd7OzhpX3Z2QFhEJELD9dfj4miHdC4OFrlPNJoESMCyCFBwWdZ+0VoSSHECliy4XJ3s4aqJqMAjhxF6+zZC7tyBZ+nS8CxbFoGhEepL019RjYIrxV8nTkACJPCSAAUXXwUSIIEYBCxRcDlq3qx0Lva4MXoUHm3ZgtC7d2OsyTV3bvg0aYIsbdviORwRpAkvaRRcfPlJgARSiwAFV2qR5jwkYCEELE1wybGht5sjLn/dDw83bXolZfciRZDnu+8Qlj23Ojal4LKQl5JmkoAVEKDgsoJN5BJIwJQELE1weTjb4+7Y0bi7eHEMDOUPHlS/vzltGm5pX4bmli8f8o4YgedZclFwmfLF4VgkQAKvJEDBxReEBEggBgFLElzi3fIKD8SxRo0QERiYIMElneRo0avb55BwLgbN8w8ACZBAahCg4EoNypyDBCyIgCUJLldHewSu/h1Xhw83IhyXh0s6OmXMiMJ/rEKIvSMFlwW9mzSVBCyZAAWXJe8ebSeBFCCQUoLr6vNw7L0TikP3QnDxSRgeB4UjKCwc0FI2REREIFL7ctI8Vq72kciVzgkVMruganZ3lPR1jXOV4p26+nl3PNm3T/UxiKy4Hnh66BDOfvqp+rjEihUI8fWj4EqBd4hDkgAJGBOg4OJbQQIkEIOAKQTX/ZBI/HIuBOtvhWhiyiCoIpWoiggXcfXiv9Wv6vfa96N+Hw7Jxyzfl2dffK79GhmB8lnd8OMbOZDHy0XZ7O2mCa5BA/Fg3bpEC65CU6fCvmRZSAwYGwmQAAmkNAEKrpQmzPFJwMIIJFVwSW7Rj46E4MrzFwJKRJJBXEWJqYQKLo2ZCK3Abb+ic9mMmO7SFHYRoTHGzKClgTjzRWk8/nks7ixcqCiLiDK0dOXLq/8Ur1b0ZvBwlVy5EsE+WejhsrD3k+aSgKUSoOCy1J2j3SSQQgQSK7gehwHNDoXF9FolRXCFat6wExsRvnM2+nTrjL6fdnixQs3blWHUCWjqzUjEfVzWFwPubIxxC9GA5VUxXG4FCqDAvAVaaogICq4Ueo84LAmQQEwCFFx8I0iABGIQSIzg+uQ0cCFA00RhJhBcmkgLCQ7B3W6F4ODwX7kdKc2TadRxdaQY22uWwdkB17sXwJmPPkLwtWsx1vEqwZW9e3d4tGmn+vOWIv8AkAAJpAYBCq7UoMw5SMCCCCRUcNX/2w4RCMCNbm8gIEDL354uI9IXrQjnMvXgWKgM7Fy8EREaioiQ4P9iseCAiLAQ3RiuyJunsbJFblQsWVzRchl5HC5SE9EuEuHaeaWe4IrUvj+yQS60ubEd10aNikHZcLwoR4rR83B5liqljh7vh9gxD5cFvZc0lQQsnQAFl6XvIO0nARMTSIjg6viPPa7BHul+/ABbF86JYUGo5u26dvNf9Px+JP7csBGeGdLByckRwcGhqFy2DP5pOgqRQYExguYj9i/G5Ymfw8XZWY2VcfwZ2GserdhB80ZxYZrg8tSuNh77sgzCJo/F3SVL4qVhiN1ipvl4UbEDCZCACQlQcJkQJociAWsgkBDB9eYxByWYAK1QdHAYIh7dRkk8wvsFPFG3YFakd9VSOUhWUp2WsUQ5eH69RguKf3kMKbcQtTgtGeejXKGYd8Xe+JainTbfS89YjEB88XxpdlTK4YFpbxdA5kNbcX3sWIQ9fGg0s0fJksgzeDDC/HKylqI1vKhcAwlYGAEKLgvbMJpLAilNID7BFardRmx8/IXg+s/jFDPVg/YXCwK1FFv3wuxxp4EDXDUBFq7FYp24H4ifjgdi6x07RIYE6KeF0MQVwrSjyGNr8GTrr8jh44WH70zXjieDYqSVUDcfXwquF2klIvFp5SzomDUAeQLvKtEVqn25Fy4M1zx5EJktJwK1otVat6jGWoop/TZxfBIgAQMBCi6+CyRAAjEIxCe4xBtV/7jjKwWXEmOasAk+sQUR+arCzt4BDi9zbb3wUMnlQxFM2s3Dl6JJBFR4hD2Ove2BrL6ZYzjILly9jklz52H2Mi1ZaYbcQKnmCMlUVBNtwUqciU3q+PGlCPuyogv6NigOD08PSNB9qOSs0GkUXHz5SYAEUosABVdqkeY8JGAhBBIiuN44aqcJIs1LFZVrK1Yy01elhdBiv4JGNMaXn3TEz7NmIaLe50DeSlGJT+dWDsGb5Yrh6O0g3Hwaitdye8DdyTg56Z37D9B7+Cis3bwZYZoIe1qmIyIcXLWjxwi85nUb49+rAr9s2V9JnYLLQl5KmkkCVkCAgssKNpFLIAFTEohPcIknKceIoyjZpALCQ8NfJjdNoOBydIPH5NY4sWG1Mvm7bRcx9fyL40lDctRH2lnk15W88fPBezGC5kNDw+CtPfNuuUzoWysrsnq+CLCXtuPiY9SZoqWOkPJAHu6oZneBgsuULwXHIgESSDYBCq5kI+QAJGBdBBIkuEYehbOTA/K/VkIdHUaV6TGU54nm4Yp4pgWwp8uEiKAApJ/bHUdXLVXAhmy7hOmXtKPJRJT2iX1LMTREO4YMCICTm4sSbJ7p0yEoJAzV7Cm4rOut5GpIwPIJUHBZ/h5yBSRgUgLxC64I5Bj5t5bCwQEu2lGfu7sLvMoW1PJtSemdmJ4uidfKdXkHfvYvibG/zsbUHwYrW4fuv4tpZ4ITXUtRLy1EhBYHlt7TFfZastRgLSg+WPO6UXCZ9JXgYCRAAiYgQMFlAogcggSsiUBiBZerlmPLRfN2Obs6wT6vX4ykpipA/uQ2nPum2X+INJeY1xtt4FH1bdjlr5JkD1d4WDj8MnrC3t5eiawQ7fcUXNb0JnItJGBdBCi4rGs/uRoSSDaB+ASXpHfIqR0pGjxcUYLL0T7qe07OTniYLh1C5Ibgo3voVyU7Rh9/rgSRJDQVT1WUNyyBR4rhWi1Fe+34Mn+W9HDVBF5giCaw5EsTWxRcyd52DkACJJDCBCi4UhgwhycBSyNgCsGlPF6OcuTooG4YOmlfgXb2uBsciUfB4Xj2Uigp4aUJrhepIl582WseMHdne3i7OsIvnQsyeEgKCuC5Fkwfot1AVALL4M2i4LK014v2koDNEqDgstmt58JJQJ9AfIJL8lrlisfDZRBc4omSOC9n7Ut+dXl5/Pjiv0WUaZ85O2qJIrScXZqIClExWGEvjgZFTImwki8tOP7FZxRcfG9JgAQskwAFl2XuG60mgRQjEL/g0gLhowXN6x0pJlRwubwUXFIE6L8YLAquFNtcDkwCJJBmBCi40gw9JyYB8yQQn+AKDApG/rGnXhnDRcFlnntLq0iABNKOAAVX2rHnzCRglgTiE1zPAwJRcPwZCi6z3D0aRQIkYK4EKLjMdWdoFwmkEYH4BJckGI2eh8scjxQb2x/D4PfqsrRPGr1DnJYESMCYAAUX3woSIIEYBOITXFIoOvuPxyB1CCX43ewEl5aAdWS2Y6jfsBEyaUWwX9VYS5EvPwmQQGoRoOBKLdKchwQshEB8gkuWceH6v6i36I5ZCq5qocfQvnxm1KhdW0tH8V+9RT38FFwW8lLSTBKwAgIUXFawiVwCCZiSQEIElxwrXrx8FU3Wh8IF4VEpHgzJUNMqaP7t8L2oXigzqlWvhfQZMsSLhYIrXkTsQAIkYCICFFwmAslhSMBaCCREcMlaI7TM77du3sSArXdwKjgDnB20I8aX9RVTV3CFwd0uHO0ddqNAgUIoUbo00qVLn6DtoOBKECZ2IgESMAEBCi4TQOQQJGBNBBIquAxrfvbsGa5dvYw/j1zGX951Yf/87kuPl4MqwfOqxKfJycMV5uCKbNd3oa7XI/j5ZUOhwkWQJaufdozolODtoOBKMCp2JAESSCYBCq5kAuTjJGBtBBIruGT9Ekgf8Pw57t29g1u3buLozac45lYEQS7ecHIIVxnl9TLNJ1hwaRnmQ8PsYB8SiGy3D6Kww0P4+Pgge46cyJY9O7y8M8LBwSHRW0HBlWhkfIAESCCJBCi4kgiOj5GAtRJIiuCKzkLiu4KDgvDkyRM8evQADx88QEBAAJ4FBuPc3ScIzV4UTponyt3bB86u7tpRJGCvpZoPDotEUPAzBAXcx71Lt/DwxAa42T+Fr4cHimYqgvTp0yOjTyZNXHmrL09PTzg6JtybpbdfFFzW+hZzXSRgfgQouMxvT2gRCaQpgeQKrtjGi/crPFyrkxgcjJCQEK0uYjBCtV8NnjFD/8dBj7H3xt6ox+3s7ODk4gx3N3c0KdIEjtpRYVK8WK+CScGVpq8aJycBmyJAwWVT283FkkD8BEwtuOKf8UWP0IhQrPpnlW73BgUawN3JPaFDJbgfBVeCUbEjCZBAMglQcCUTIB8nAWsjkFaCSziu/GclwiLCjJBWz1kdWTyzmBw1BZfJkXJAEiCBOAhQcPHVIAESiEEgLQXXjqs7cFe75Ri7lcpSCgUyFjD5TlFwmRwpByQBEqDg4jtAAiSQEAJpKbj2Xt6Lm4E3jczM45UH5fzKJcT8RPWh4EoULnYmARJIBgF6uJIBj4+SgDUSSEvBdeb2GZx6cMoIq4+7D2rnrm1y3BRcJkfKAUmABOjh4jtAAiRg7gT2Xd+PHmu7G5mZwTUDNrbbaO7m0z4SIAESiJMAPVx8OUiABMyGwJ3nd9BoXiNdeza024CMbhnNxlYaQgIkQAKJIUDBlRha7EsCJJDiBKpMqYIwe+ObilP9p6J8tvIpPj8nIAESIIGUIEDBlRJUOSYJkECSCeilhZDB7O3s1RcbCZAACVgiAQouS9w12kwCJEACJEACJGBRBCi4LGq7aCwJkAAJkAAJkIAlEqDgssRdo80kYEYE+vXrh5EjR0JqJkZv9erV04pXP8LBgweTZW2wVoNxzJgx+Prrr6PG+euvvyDjR28dOnTAjBkzkjUXHyYBEiCBlCJAwZVSZDkuCdgIgZQWXMuXL8cHH3yAZ8+eRRFdsGAB2rZti4ULF8LDw0N9P1euXChVqpSNUOcySYAELI0ABZel7RjtJQEzI5BQwXXt2jV8+eWX2L59O+zs7FC/fn2MHTsWPj4+iIiIgIzz22+/4cGDB8iZMycGDx4MZ2dnfPTRRwgICFCrFnElwmv8+PHK42X4vpkhoTkkQAIkYESAgosvBQmQQLIIGATX06dPY4zTpEkTyPfkSDE8PBzly5eHHA+KyAoJCUGPHj1QsGBBbNq0CWvWrEHjxo0xb948lC1bFocPH1beqrx586JPnz6YPXs2Lly4AHt7e2TOnBn9+/dXx5hubm5q7AoVKmDixIkoXbp0stbCh0mABEggpQhQcKUUWY5LAjZCwCC49JYrIksE1/79+1G5cmUsXrwY7777ruo6bdo0fPrppzh37hwePnyISpUq4Z133sGgQYNQsmTJqOF69eqFKVOmxDhSvHnzJnbv3o1s2bLhypUr+OabbxAaGorz58/D1dXVRshzmSRAApZEgILLknaLtpKAGRIwCK4dO3bEsE6ODyWQXgTX0qVLldDat2+fElbS1q9fjwYNGkAC4F9//XWsXLkSQ4YMUd6tWrVqYe7cuSouS09wxcYwZ84cfPjhhzhw4IDydrGRAAmQgLkRoOAytx2hPSRgYQQSEsO1Z88eVKtWTQW5t2rVSq1w6tSp6Ny5s/JwFShQIGrVItzefvtt1K5dG0uWLEHv3r0xefLkGB6u2IjkduInn3xiNJaFoaS5JEACVkyAgsuKN5dLI4HUIJAQwSVB8RKbFRgYqALew8LC0L17d+TLlw9btmzB3r17cebMGRXnJUeDIsrEUyW3EceNG6eC7WfNmgU/Pz+VDkKOECW+q1ChQrh69WrU70WsSUA+GwmQAAmYGwEKLnPbEdpDAhZGICGCS5Z048YNJbLkCFGC3d944w2VX0uC4CUeq2PHjrh06ZKKwapRo4byauXIkUPFd4nHS/r4+vqq4Pkff/xRxYDdvn1bPf/mm29i2LBhyJIli4XRo7kkQAK2QoCCy1Z2muskARIgARIgARJIMwIUXGmGnhOTAAmQAAmQAAnYCgEKLlvZaa6TBEiABEiABEggzQhQcKUZek5MAiTwKgInT55EmGcYrgRdMerm4uCC+gXqEyAJkAAJWAwBCi6L2SoaSgK2RUBuKN4IuYGFwQt1Fz672WwUz1zctqBwtSRAAhZLgILLYreOhpOAdROQdBGHDh3C+izr8TDwodFi+1Tvg5bFW1o3BK6OBEjAaghQcFnNVnIhJGBdBE6fPo3//e9/CKsXhp1XdxotrnHBxhhSZ4h1LZqrIQESsFoCFFxWu7VcGAlYNoEHDx7gs88+Q80va2L6oelGi8njlQdLWy617EXSehIgAZshQMFlM1vNhZKA5RGQhKddR3ZF3819dY2f//Z8FPIpZHkLo8UkQAI2R4CCy+a2nAsmAcsh8Ouvv+L1Bq9j6umpukb7F/RH9VzVLWdBtJQESMBmCVBw2ezWc+EkQAIkQAIkQAKpRYCCK7VIcx4SMFMCEiv13nvvIXfu3JgyZYqyctKkSerL0J4/f44iRYrgzz//xE8//YTff/9dFYmW2oZz5sxB+vTpY6xu9erVGDVqFMLDw1U/GatkyZKq9mHBggWRK1cu1V9+XbNmjREZKXbdv39/rFixAhI8H70tXrwYHTp0wLlz55A1a9aoj44fP47mzZvj+++/R+vWrXVp661VajVKPUjJ+xUcHKyKYw8fPtxMd4tmkQAJWCoBCi5L3TnaTQImIPD48WNV+Llx48a4efNmlOCKPfQ333yD/PnzK6Ejoqthw4awt7fHkCFD4OjoqMRR9LZ161aUL18e6dKlw7Zt25QI2rhxoxI1P/zwA+bPn/9K61u1aqUKWItQiy64Jk6ciIMHD+Ls2bNK9BkE1759+9C7d28UKlRICSY9wRXXWp8+farST7z22msQoSdFtb/77jtUr86jShO8YhyCBEjgJQEKLr4KJGDjBMTDs3//fiVgDB6u6EjEuyXi6ejRo3B1dY1BS7xbx44dw+jRo+OkePXqVbRo0UIJJRFfy5Ytw4QJE15JXWxyd3dH6dKlcebMmai+8n1vb29UrVo1huASz5SIJRFK8kxcHq741ioTtW/fXtnr7+9v428Gl08CJGBKAhRcpqTJsUjAQgmsW7dOHd/pCS4RR3IUN3jw4Biri4yMRN26ddXxW+XKleNc+bfffgtPT0/lgRIvV9euXdVRogikLl26oGVL/eSlQUFBKFOmTAzBZZikSpUqyt7oR4rymRwNyjNxCS7p86q13r9/X3nWRBx6eHhY6G7SbBIgAXMkQMFljrtCm0gglQnEJUIkBqtEiRKQI8IsWbLEsKpv375wcXFRXqW42qpVqyDHgBKnJUeP0kSoSVzX3bt31fGfeMnEKxW7pbbgkvmaNGmCXr16oX591mlM5VeQ05GA1ROg4LL6LeYCSSB+AnEJLglQl88kPUP0JrFbIph+/vnnOAdfv3698n6J6JJYLr0mXi/xSEnQfloKLjmSlJxfYkebNm3iB8YeJEACJJBIAhRciQTG7iRgjQTiElxyVDh9+nSUKlUqatlDhw5VYit2HJbhGK5o0aLq6HDkyJEqziq62JJbipkzZ1YeLokNq1OnjvJwFShQAEuWLIkhdkzh4bp165YK1BdPmqHFXquILTnWbNu2LSRYn40ESIAEUoIABVdKUOWYJGBhBPQE1/bt29Vx4aZNm6JWc+TIERVAL7cBDU1ineSW35dffqmOHSWOKkOGDPDy8oKbm1tUPwmWl+fHjBmjAuIlhuvzzz9XIufff/9V454/fz7qGVMILhF8M2bMUDcr4xJcY8eOxYABA5AzZ86oPiIEJ0+ebGG7SHNJgATMmQAFlznvDm0jARIgARIgARKwCgIUXFaxjVwECZAACZAACZCAOROg4DLn3aFtJEACJEACJEACVkGAgssqtpGLIAHrJRAYGIidO3eqDPDSnoc8x+pzq1V6idjtzfxvIqNbRuuFwZWRAAlYLAEKLovdOhpOArZD4K233sLSpUvh5OSkFt1jTQ/sub7HCMBnlT/DB6U/sB0wXCkJkIDFEKDgspitoqEkYLsEPv30UwwcOBA5cuRQEOYem4vxe8cbAameszrGNzT+vu2S48pJgATMhQAFl7nsBO0gARKIk4Dk6JK0Efny5VN9bj29hQn7jesxOtk7oU/1PvB09iRNEiABEjArAhRcZrUdNIYESIAESIAESMAaCVBwWeOuck0kkAwCCxYswOjRoyEZ2KWWopS8+f7771Wh6oULF8LX1zcZo+s/milTpqjjQldXVzW/FJFOatu3bx/y588PGZeNBEiABMyBAAWXOewCbSABMyHw22+/qUzwK1asQK5cudRNwHv37imRdefOHVWWJyWaCCOZR5pko2/evDkuX76c5KmkHuK3336LIkWKJHkMPkgCJEACpiRAwWVKmhyLBCycgNRBlNqGFStWNFpJhQoVsHr1anVT8KOPPlK1EOXrs88+U0Wfz5w5g27duuHx48ewt7dXqRzESybfu3TpEkJDQ9GpUye0b9/eaOzogks+9PHxgdRBdHZ2xg8//KDmlfqLYtdPP/0ER0dHZUPr1q3RoEEDNV737t1VzUSZp2vXrihRogQKFiyIadOmqQLa8py0PHnyqPqQso7q1aujR48eGDFiBD7++GNVaoiNBEiABFKCAAVXSlDlmCRggQREHEn9w4CAACVuYjeD4JK6ixcvXlR1FqWJwBHxImJo/PjxqFatmvKMyRi9e/eGn58fevbsCamN+Prrr2PSpEkoU6ZMjOGjC661a9dCCmTv3r1b1UCUWohSh1FEnAgiOSoUkReX4GrWrJkSXj///LPycEmhbTkWlZqQIuD69Omjgu87d+4MWZMcXUo9Rb01W+A20mQSIAEzJUDBZaYbQ7NIILUJiHDKmDEjnjx58krBJXaJqBFhJaJFClk/ffpU3SI8e/ZsDLPLlSunvFPZsmVT3xcvk4ixXr16GQmuAgUK4MGDB8qGP/74QxXCFqEmoqht27aqvxTJlqNCGTOhgku8W+LFMhwviq1vvvmmGkfGnj9/foxi3KnNnfORAAnYBgEKLtvYZ66SBBJEoHDhwli0aJGRB0oeNni4smbNqkSTeIyGDBmCdu3aqaM98XDFFlwlS5bE+vXrEyS4JIbr/v37qFy5sjqOlHlEKFWtWlVXcMkRYKtWraKOFOWosmnTpkoMRvdwrVy5UiVNlaPS2C36mhIEiJ1IgARIIIkEKLiSCI6PkYA1EpDju//9739Yvny5OgqUFhISoo7iDOIkXbp08PDwiPI4yfGfBNnLMaHES1WqVAkRERHqCPCrr75C9uzZladKjizlSHHixIkQz1f0Fv1IUebfsGGDEn7inTLYI+PJOBLM/8UXX6Bfv37qaFDiwsQ7J+JOYrFEcElmejl2lJuVEuwvtu/YsQO5c+dWNy/l2FTWQcFljW8x10QC5kmAgss894VWkUCaEZBbilOmTFGB6SK0OnTooDxNBnEix3oSyC6iKywsDCNHjlQi69ixY6qfCCtpInDkv0UQXblyRX1PjgE/+eQTo7VFF1ziPZO4qm+++QaNGzdWsWJyhCjpIkqXLq1uUUrMmIwpXi45rpTfS4yYeLxEcEkcmMRqSX+5eSleNslUL01snjBhgpqDgivNXjNOTAI2R4CCy+a2nAsmARIgARIgARJIbQIUXKlNnPORAAmQAAmQAAnYHAEKLpvbci6YBEiABEiABEggtQlQcKU2cc5HAiSQJAIS2yWxXE2aNNF9/sCNA7jw8ILRZ3m98qJyjspJmpMPkQAJkICpCFBwmYokxyEBEkhxAhLAL3UdDTcoo0+448oOfLn+SyMbPJ09sbTlUmRyZ13FFN8gTkACJBAnAQouvhwkQAIWQ6B///549913dfOEySJaLmmJiw8vGq2nX41+eKfYOxazThpKAiRgfQQouKxvT7kiErBaApLOQTLbG+onxl7oLwd+wcwjM43WXyVHFfzc6Ger5cKFkQAJmD8BCi7z3yNaSAIk8JLA4sWLVdJSyeel107cOYGPVuh/9luL31AkUxGyJAESIIE0IUDBlSbYOSkJkEBSCGzfvh179uxB375943z809Wf4tDNQ0afdyzXEZ0rdE7KtHyGBEiABJJNgIIr2Qg5AAmQQGoR+Oeff1QW/LFjx8Y55YLjC/DTnp+MPi+QsQAWvrMwtUzlPCRAAiQQgwAFF18IEiABiyHw+PFjdOnSBfPnz4/T5htPbqDFwhYI1/4Xu41rMA41ctWwmPXSUBIgAeshQMFlPXvJlZCATRBo2bIlZs6cGVVAO/aihwwZgkX3FsG9pLsRj2ZFmmFArQE2wYmLJAESMC8CFFzmtR+0hgRIIB4CUiD7iy++QP78+XV7FihQAD3G98DcG3ONPvdy9cKidxfBx82HnEmABEggVQlQcKUqbk5GAiSQXAI//PAD6tSpg2rVqukOlTdvXqxcsxJ9DvbB3cC7Rn0+q/wZPij9QXLN4PMkQAIkkCgCFFyJwsXOJEACaU1gxowZyJgxI1q0aKFrStu2bVG7dm08LvEYi08uNuqTzzsfFry9AA72Dmm9FM5PAiRgQwQouGxos7lUErAGAlJP8erVq+jatavuci5cuIBbt24hQ6EM+HjFx7p9BtYeiLcKv2UNOLgGEiABCyFAwWUhG0UzSYAEXhA4ePAgVq1aBQmOf1XbsGEDRh0ehYcZHxp1K+dXDtOaTCNSEiABEkg1AhRcqYaaE5EACZiCwLVr11QB66lTp8Y5XPv27TFv3jzUfr82HlR+oNvvpzd/Qu08tU1hEl0dx7sAACAASURBVMcgARIggXgJUHDFi4gdSIAEzIlAaGioKmC9YsUKXbMkOWqFChVw7NgxSAB9jzU9sOf6HqO+dfLWwag3RpnT0mgLCZCAFROg4LLizeXSSMBaCUgtxVGjRsHX19doiRcvXkTFihVVnJeHhwfWX1iP/n/110Uxo+kMlMlaxloxcV0kQAJmRICCy4w2g6aQAAkkjIDUUnz//fdRsmRJ3QeaNGmCI0eOoGzZsggKCsLdGnfh6Odo1Ld5keboX0tfjCXMEvYiARIggYQRoOBKGCf2IgESMCMCUktRxFa9evV0rZJjx2XLluHo0aNwcnLCQ7+H2Ou416ivs4Mz5r89H3m88pjR6mgKCZCANRKg4LLGXeWaSMDKCUgtxYiICOXl0ms7d+5EtmzZkC9fPvVxUFgQ3lv2Hq48vmLU/aMyH6F7pe5WTozLIwESSGsCFFxpvQOcnwRIINEENm/ejMOHD6NXr166z/bv31/FeEmC1OrVq6uvZwWfYeWtlUb9fT18lZfL29U70XbwARIgARJIKAEKroSSYj8SIAGzIXDq1ClVwFpEVVwtMDAQBw4cwO7du9XX/pP7kbVbVjh6GsdyfVHlC7xfSt9bZjaLpiEkQAIWTYCCy6K3j8aTgG0SuH//vipgPXeucYHqVxEZvHYwVl9bbdSlYMaCystlZ2dnm0C5ahIggRQnQMGV4og5AQmQQEoQkFqKEsvl6ur6yuFDQkJU8PyNGzdwI+AG5gbMRXhkuNEzg18bDP9C/ilhKsckARIgAVBw8SUgARKwSAJSS1HSQ+TOnVvX/vDwcAwePBgTJkzAkydPkD59epWXy+UNF/hU9zF6pkK2CpjiP8UiWdBoEiAB8ydAwWX+e0QLSYAEdAhILcUGDRqgcuXKunyGDx+OadOmqTJAdevWRdasWVW/zSc3o8+uPrrPjG0wFjVz1SRvEiABEjA5AQoukyPlgCRAAqlBQGop+vn5oWnTprrT+fv7Q44dpa5i9CZHjBX6VYBzEWej5+rlq4cR9UakhvmcgwRIwMYIUHDZ2IZzuSRgLQSkluKdO3fQqVMn3SUNGzYMK1euhPzq5eWl+v79998q7ivULxTuLdx1n5v51kyUzKKfwd5a2HEdJEACqU+Agiv1mXNGEiABExDYu3cvNmzYgEGDBumOFhAQgC5dumD58uV49uwZHB0dUbhwYUjZn969e2PgnoHYd2Of0bPNijTDgFoDTGAhhyABEiCB/whQcPFtIAESsEgCly9fVnm4fvnll1faL8HzUuon9m3GtefWYuCWgbrPTvWfivLZylskFxpNAiRgngQouMxzX2gVCZBAPAQksWm7du2wdOnSJLNq93s7nL572uj51/O+jh/f+DHJ4/JBEiABEohNgIKL7wQJkIDFEpBaipL2QUr4JKX9ceYPDN0+VPdREVwivNhIgARIwBQEKLhMQZFjkAAJpAkBqaXYoUMHFC1aNMHzR0ZGQrxj7u4vguY7rOyAv//92+h5OVKUo0U2EiABEjAFAQouU1DkGCRAAmlCQGK4KlSogDp16iR4/jlz5kBSSqxdu1YlQ113fh0GbNYPkpfgeQmiZyMBEiCB5BKg4EouQT5PAiSQZgSklqKTkxNat26dYBsMsV9XrlzB5s2bkS5dOnT7s5vujcUCGQtgdrPZcHF0SfD47EgCJEACegQouPhekAAJWCwBSQtx6tQpVchar+3YsQObNm3CpUuXcPHiRfXrrVu3IMeKzs7O2LhxI2rVqoUtl7ag98beumP0qNwDH5b+0GIZ0XASIAHzIEDBZR77QCtIgASSQODYsWNYsGABpIyPXhs9erS6xZgvXz6jrxw5csDe3j7qsZ7re2L7le1Gw2T2yIxZzWZBfmUjARIggaQSoOBKKjk+RwIkkOYEJHu8FLCeOXNmsm3ZfW03Plv7me444uESTxcbCZAACSSVAAVXUsnxORIgAbMgILUUJZu8ZJJPTJMjRokB+/bbb6Me+3rT19h4caPRMBLDJbFcEtPFRgIkQAJJIUDBlRRqfIYESMBsCEgtRSnvI0eEiWknT55EpUqV8Pz586jHDt08hE9Xf6o7DEv+JIYu+5IACcQmQMHFd4IESMCiCYjYeuutt1C+vH4pnhkzZqBYsWKoUqVKjJgtqbXo4eGBmzdvws/PL4rB4K2Dsfrsal0mkxpPQqXslSyaF40nARJIGwIUXGnDnbOSAAmYiIDUUsyTJw8aN26sO6IUqh43bhx8fHwgx4/NmjVD3bp14eLigqxZs2LZsmWoXr161LMn7pzARys+0h2rZq6aGNtgrIks5zAkQAK2RICCy5Z2m2slASskIILp8ePHaN++fZyrk8/Xr1+P1atXq4SnwcHBaNCgAXbt2oURI0aomozR28hdI7Hk5BLd8YbWGYqGBRtaIUkuiQRIICUJUHClJF2OTQIkkOIEdu7cie3bt+Obb75J0FwRERHYt2+fEl+So6tr16748MOYebZuPL2B9iva437gfaMxi/oWxay3ZsHB3iFB87ETCZAACQgBCi6+ByRAAhZN4Pz585g4cSLGjx+f6HWEh4fDwUFfOM39ey7G79Mf84sqX+D9Uu8nej4+QAIkYLsEKLhsd++5chKwCgJPnz5Fx44dsWjRIt31PHv2DOvWrVPxW5JdPnqTLPP9+/dH/fr1jZ6NiIxA+z/aQ2K6YjcmQ7WKV4eLIIFUJUDBlaq4ORkJkEBKEJBaitOmTVPFqGM3SY6aJUsWVKxYEYsXL1YB9oY2a9YsSND9gQMHdM3adHET+m3qp/uZeLjE08VGAiRAAgkhQMGVEErsQwIkYNYEpJaixGIVKlRI104pUP3xxx8rwTVp0iS0aNFC9Xv06BG8vb0hBa1dXV11n/3mr2+w4cIGo88khktiuSSmi40ESIAE4iNAwRUfIX5OAiRg9gTkpqGkdqhZs6auraVKlcLIkSOVuHrnnXdU3zZt2mD37t2qLNDt27dj5OiKPsjJuyfV0WJ4RLjR2HJbUW4tspEACZBAfAQouOIjxM9JgATMnoCIJk9PT7z77ru6tkrurXr16qF79+64d++eKucjRa3d3NxUji75/FVt4r6JmP33bN0ukpdL8nOxkQAJkMCrCFBw8f0gARKweAKSW+vChQtKUOk1KXDt7u4eo25iYhb9MPAhPv7jY1x/ct3oMck8Lxno2UiABEiAgovvAAmQgFUTOHz4sCpg/f3336fYOpeeWooRO0fojj+g1gBIrUU2EiABEoiLAD1cfDdIgAQsnoDUQ5RjwunTp+uuZcuWLRAvlyQ61bvJmFAAXf/siv039ht1z5E+B6Y1mQZJF8FGAiRAAnoEKLj4XpAACVg8AUlgKnFYq1at0l3LsWPHVGJUuaEoNRST2nZd24XP136u+/jbxd7G1zW+TurQfI4ESMDKCVBwWfkGc3kkYCsEpJbisGHDVEFqvfbgwQNkyJDBKLO85O/KnDlzvIHzhjGHbh+KP878oTvHj2/8iNfzvm4ryLlOEiCBRBCg4EoELHYlARIwXwJSS7Fly5YoU6aMrpF58+ZVSU8XLFgQQ5RJUeu2bdvi1q1bRpno9Qa6+vgqOqzsAAmkj90KZyqM6U2mw93J3XxB0TISIIE0IUDBlSbYOSkJkICpCUyYMAGFCxfWLdMjc9WtWxcBAQG4du0a5syZg9df/88TVaRIEUydOhW1a9dOkFnzjs3D2L1jdft+WPpD9KjcI0HjsBMJkIDtEKDgsp295kpJwKoJSC3FoKAgfPjhh7rr7NSpE/z8/CD1E8Wj9d5776Fnz54IDg5G5cqV8fvvv8eZOFVvwM6rO+PgzYO6c0maCEkXwUYCJEACBgIUXHwXSIAErILAtm3bsG/fPvTp00d3PZKN/uTJk5g7dy6uXr2KLl26YM2aNaqveLY2b94cZ7Z5vQH3Xt+L7mv0836Vz1YeU/2nWgVXLoIESMA0BCi4TMORo5AACaQxgTNnzqgC1mPGjNG1ROooSlZ5KedjaCK8njx5guLFi8POzi7RKxi1axQWnVyk+1zXil3Rvmz7RI/JB0iABKyTAAWXde4rV0UCNkdAClF369YN8+bN013748ePcffuXeTLl095sp4+fYpdu3YpwSX/LTcVmzRpkihud57fQceVHXHz6U2j51wcXVQAfTHfYokak51JgASskwAFl3XuK1dFAjZJQGopzp49W5Xxid0iIyORJUsWdewoNxbF4/XBBx8gV65cCAkJga+vLw4cOJBobstPL8ewHcN0n6uduzZ+qv9TosfkAyRAAtZHgILL+vaUKyIBmyUgtRQlEF68WLGbBNRLserQ0FA4Ojri0qVLqFatmkoHsWfPHvj7++P+/ftJYvflui+x4+oO3Wf7VO+DlsVbJmlcPkQCJGA9BCi4rGcvuRISsHkCUktR0j2IkNJr4uGS4HpJAyHFrgsVKgTJUn/79m2Vm0uOJSU5amLb0X+PqqNFvebj5oNpTachd4bciR2W/UmABKyIAAWXFW0ml0ICtk5gxowZ8PHxQfPmzXVRfP7559ixYwfatWuHJUuWqJQQhw4dUn3lOFJyeUnqiKS0ifsnYvbR2bqPNirYCN/V+S4pw/IZEiABKyFAwWUlG8llkAAJQNVSvH79ukr5oNck8amkjdi+fbvKOv/TTz+hYMGCJkH3NPip8nJdeHhBd7zBrw2GfyF/k8zFQUiABCyPAAWX5e0ZLSYBEoiDgAS9//nnnxg8eHCaMFpzbg0GbRmkO3eO9DkwtclUZPHIkia2cVISIIG0JUDBlbb8OTsJkIAJCUheLSlgPWXKFN1Rz549Czl2lD4SOJ8S7eu/vsbGCxt1h25epDn61+qfEtNyTBIgATMnQMFl5htE80iABBJOQNI7tGrVSpXp0Wtr166F3GQ8ePAgvL29Ez5wInqevX8Wn67+FHLEqNeG1R2GN/O/mYgR2ZUESMAaCFBwWcMucg0kQAJRBKSWosRmZcqUKcFUJEdXYGCgbv6uBA8SrePCEwsxevdo3UfzeufFNP9p8HZLGcGXFHv5DAmQQMoToOBKecacgQRIIBUJSFC8JDQtUaJEgmedM2cOpk6dCvGApU+fPsHPvapjn419sPnSZt0ukpdL8nOxkQAJ2A4BCi7b2WuulARsgoDUUixVqhTq1auX4PWKd0tSRVy5ckUVsU6XLl2Cn42r4/kH59F5dWc8Cnqk22XUm6NQJ0+dZM/DAUiABCyDAAWXZewTrSQBEkggAUMtxffee0/3CcnDtWnTJpVp/uLFi+pXyTYvx4rOzs7YuHEjatWqlcDZXt1t8cnF+HHXj7qdCvkUwrQm0+Dp7GmSuTgICZCAeROg4DLv/aF1JEACiSTw119/4ejRo/jqq690nxw9ejSWLl2qyv/E/sqRI4cqbG3K1m9TP2y6uEl3yPdKvYcvq3xpyuk4FgmQgJkSoOAy042hWSRAAkkjcPLkSVXA+scf9T1LSRs16U9denQJn676FA8CH+gOMq7BONTIVSPpE/BJEiABiyBAwWUR20QjSYAEEkrg3r17qoC1BMKbS1t2ehmG7xiua06JzCVUQlQXBxdzMZd2kAAJpAABCq4UgMohSYAE0paA1FJcuHAhXFwSLmJ69+6NChUqqDxeKdH6b+6P9efX6w79cZmP0a1St5SYlmOSAAmYCQEKLjPZCJpBAiRgOgJSS/Hrr79Grly5Ejzo8ePH0bBhQ5WFXtJKmLpdfXxVJUS9+/yu7tCTGk9CpeyVTD0txyMBEjATAhRcZrIRNIMESMB0BKSWYqNGjVCpkr6AOXfuHM6fPx91S1FuK16+fFn9XgpcS5oIBwcH0xn0cqQVZ1bg++3f645b1q+sSohqZ2dn8nk5IAmQQNoToOBK+z2gBSRAAiYmILUUs2XLhqZNm+qOXLFiRXWTMWfOnLq3FcuVK2fy24oGQ6S4tRS51mudyneCfLGRAAlYHwEKLuvbU66IBGyegNRSlOD5Tz75RJeFfObl5ZViBaxftQHXn1xXCVH/ffavbrefG/2MKjmq2PweEgAJWBsBCi5r21GuhwRIAHv27FHJTQcOHGiWNFb+sxLfbftO17bimYtjSuMpcHNyM0vbaRQJkEDSCFBwJY0bnyIBEjBjApI9XgpY//zzz4myUrLUly1bFsWKFUvUc0npPHjrYKw+u1r30bYl26Jn1Z5JGZbPkAAJmCkBCi4z3RiaRQIkkHQCEvguNw0lo3xi2ty5c9G3b1+sW7dO1WNMyXb7+W10Wd0FcntRr42oNwL18iW8HmRK2sqxSYAEkk+Agiv5DDkCCZCAGRKQWori4fL29o7TOhFm4g0z1FWUm4qrVq3C48ePcefOnRRflZT8kdI/ei23V251tOjr4ZvidnACEiCBlCdAwZXyjDkDCZBAGhCQWooSNF+kSBHd2V977TVs27ZNfSZFq3Pnzh3jxuLnn38OJyenFLd8zJ4xmH98vu48TQs3xaDag1LcBk5AAiSQ8gQouFKeMWcgARJIAwJSS1HycImw0msSVO/o6KhEVkoUrU7okoPCgtStxRN3Tug+MqDWADQr0iyhw7EfCZCAmRKg4DLTjaFZJEACySMgtRSltE9KlepJnnUxn95/Yz+6/tlVd0gfNx9M9p+MfN75TDklxyIBEkhlAhRcqQyc05EACaQOgfXr1+PMmTOQo0FLaDMOz8CUg1N0Ta2Ttw5GvTHKEpZBG0mABOIgQMHFV4MESMAqCfz9999YtGiRqo2o17Zs2aJuJMrRYvr06c2CwedrP8eua7t0bfmiyhd4v9T7ZmEnjSABEkg8AQquxDPjEyRAAhZA4Pbt26qA9a+//qpr7bFjxzB+/HhMmjRJHT2aQztz7wy6/NkFT4OfGpnj4uCijhZLZUnZdBXmwIE2kIA1EqDgssZd5ZpIgAQUgSZNmmDFihWJKkR94sQJdWMxXbp0aUJxycklGLlrpO7cFbNXxOTGk9PELk5KAiSQPAIUXMnjx6dJgATMmICkhRg8eDCyZ8+eYCt79eqFXbt2qeSnGTJkSPBzpuw4cMtArD23VnfIjuU6onOFzqacjmORAAmkAgEKrlSAzClIgATShoDUUmzevDnKlSsXrwHPnj3DxYsXVRLUfv36qbiuffv2xftcSnS49fSWOlqUQtd6bULDCaiWs1pKTM0xSYAEUogABVcKgeWwJEACaU9AMs1Lnq1GjRrpGtOzZ0/lzRKhde/ePdXHzc0NefLkQf78+bFs2TKVFDUt2voL69H/r/66UxfNVFTFc3k6e6aFaZyTBEggCQQouJIAjY+QAAlYBgGppfj06VN8/PHHugaPGjUKz58/j5Fh3s/PD3Z2dmaxwNG7R2PhiYW6trQs3hJ9qvcxCztpBAmQQPwEKLjiZ8QeJEACFkpgx44d2Llzp7qtaInteehzVeD61N1TuuYPfm0w/Av5W+LSaDMJ2BwBCi6b23IumARsh8C5c+fwyy+/YNy4cYletHjHGjRoAE/PtD2223t9L7qv6a5rfyb3TJjUeBKz0Cd6d/kACaQ+AQqu1GfOGUmABFKJgBwnyk3FhQv1j+Vu3LiB+vXr47vvvkOLFi1iWCUpJXLmzKnydKV1m3ZoGuRLr9XOXRs/1f8prU3k/CRAAvEQoODiK0ICJGDVBKSW4owZM3TzagUHB8Pd3R2ZMmVC27ZtIQWvnZycFA8pC1S1alUVTO/g4JDmjLqt6YZ91/VvTXap0AUdynVIcxtpAAmQQNwEKLj4dpAACVg1Aaml2L17dxQsWFB3neLFmj59OiZPnoybN29i1qxZKF68OC5cuIACBQogKCjILDLRn7hzQsVzBYYF6q5jYqOJqJqjqlXvJRdHApZMgILLknePtpMACcRLYPjw4ahZsyZq1Kih27d27dro1KmT8nCNGDECQ4YMQZEiRXDt2jVUr14dK1eujHeO1Oow//h8jNkzRne6wpkKqyz06V3Moy5kajHhPCRgKQQouCxlp2gnCZBAkghILUVJYvrOO+/oPi8pIyRXlyRJlSZxXSKyJB9Xy5Yt1ZGjObW+m/rir4t/6ZrUomgLfFPzG3Myl7aQAAm8JEDBxVeBBEjAqgmsWbNGZY/v1q2b7jq3b98Oe3v7OD1g5gbn8qPL6Ly6M+4FvEjUGrsNqDUAzYo0MzezaQ8J2DwBCi6bfwUIgASsm8ChQ4dUAeuhQ4fqLnTu3LmQFBByfChfFSpUMIuYrVftyh///IGh2/TX4+XqpVJFFPIpZN0by9WRgIURoOCysA2juSRAAokjIEeEEpc1bZp+WgUJlJ83bx52796NPXv24OHDhyhfvnyUABMR5uvrm7hJU6G3CC4RXnqtVu5aGFNfP9YrFUzjFCRAAjoEKLj4WpAACVg1gbCwMJVjK6HB7+fPn1fiS76kzmLWrFmxceNGs2MkR4pytChHjHrts8qf4YPSH5id3TSIBGyVAAWXre48100CNkRAAuPlBmKWLFkSterw8HCEhobC1dU1Uc+lVmcJnpcger3m5OCEKf5TUDpL6dQyh/OQAAm8ggAFF18PEiABqycgtRRbt26N0qX1xceqVatU7JYUro7e+vXrB2dnZ5WJ3lzb2D1jMe/4PF3zKmavqFJFsJEACaQ9AQqutN8DWkACJJDCBMaPH4+iRYvizTff1J2pWLFiePDgAebPn4/XX389qo8kPy1RogRu3boFLy+vFLYyacMHhwej6+qu+Pv237oDfFLuE3xa4dOkDc6nSIAETEaAgstkKDkQCZCAuRKQWoohISH44AP9mCZ/f38lqLZu3apqLw4YMCCqnE+ZMmUwcuRIVXPRXNuhm4fQ5c8uiIiM0DXxl0a/oHKOyuZqPu0iAZsgQMFlE9vMRZKAbRMQIXXgwAH07t1bF8Rnn32mEp1+8cUXePfdd5U4k+9JrcWuXbuqZ0uVKmXWEGcfnY2J+yfq2lgicwkVz+XqaJ6xaGYNlsaRgIkIUHCZCCSHIQESMF8Cp0+fVgWsf/rpJ10jx40bh507d6p8XHKrcezYsZgyZQoeP36sEqZKWglLaL029MLWy1t1TX2/1Pv4osoXlrAM2kgCVkmAgssqt5WLIgESiE5Acmv16NEDv/32my6Y1atXQ0TXpk2bLBrcpYeX1NFiXFnof3rzJ9TOU9ui10jjScBSCVBwWerO0W4SIIFEEZBainPmzHllbcQrV65Ail1LIetatWolanxz6bzyn5X4bpv+rcqivkUxrck0uDm6mYu5tIMEbIYABZfNbDUXSgK2TUCOBnv16oW8efPGCeLixYuQG4tyo1Gyy3///feoVKmSxYEbtmMYlp9ermv3R2U+QvdK3S1uTTSYBCydAAWXpe8g7ScBEkgQAamlWK9ePVStWjXO/hK/JcHzEru1fv16FbuVO3duVYfR3IPmoy/qUdAjdP2zK87eP6u7VsnNJTm62EiABFKPAAVX6rHmTCRAAmlIYPr06cpr1axZs1daIR4wCZh3cHCAeLzkGFLK/Pz5559o2LBhGq4gcVO/Kgt9+WzlMdV/auIGZG8SIIFkEaDgShY+PkwCJGApBKSWohSq7ty5s67JCxYswMCBA3H58mVISR93d3d1/Chf+fLlUzm8pKi1JbXvt3+PFWdW6JrctWJXtC/b3pKWQ1tJwKIJUHBZ9PbReBIggYQS2L9/P9auXYtvv/1W95GTJ0/iyJEjWLRoEapXrw4p62Pp7ebTm/hk1Se4/ey20VKcHZxVAL3k6GIjARJIeQIUXCnPmDOQAAmYAQG5gSgFrCdPfnVtwXPnzinvVvbs2c3A6uSbsOz0MgzfMVx3oJq5amJsg7HJn4QjkAAJxEuAgiteROxAAiRgDQQka3ybNm2wfLn+7T1rWGNca+i9oTe2XN6i+3Hvar3RqkQra14+10YCZkGAgssstoFGkAAJpAYBicMaM2YMMmXKlBrTmc0cp++eVkeLQWFBRjb5uvtiRtMZyJ7eOjx6ZgOdhpBALAIUXNGAhGgBtY927ECQFjQbevs2nLUjBS8t+WG6irw+zT85JGANBKSW4kcffYTixYtbw3IStYZfj/yKSQcm6T7TvEhz9K/VP1HjsTMJkEDiCFBwveR1UQuQfRhHWQ+PkiWR5b334K3l8GEjARKwXAJSS7FMmTKoW7eu5S4iGZaLl+vIrSO6I7DsTzLA8lESSAABCi4NUmyxlS7a1e+nhw5FYcyp/XScuRVjHRLwXrELCZglgXnz5sHOzk6V7rHFtvf6XnRfo59lvmTmkupo0cHewRbRcM0kkOIEbF5w3daK2V7XitZGb4WmToWILhFbZz/9NMZnBbS+GWrUSPGN4QQkQAKmJyDFqY8dO4aePXuafnALGXH83vGYe2yurrVdKnRBh3IdLGQlNJMELIuAzQuuU9qtpUDtGnhCBVfGBg2QV6uvxkYCJGB5BE6cOIG5c+di5MiRlme8iSx+FvJMBdCfux/z7z0ZXopai5ercKbCJpqNw5AACRgI2LTgerJ3L851f+Fej36M6NepU5SH69a0aVFvi+F4scy2bXDw8OBbRAIkYGEE7t69qwpYz54928IsN625my5uQr9N+oldGxVshO/qfGfaCTkaCZAAzF5wbb8dgun/BODgnRAEh0YgLDwCkRHyFfnfr9r3ItT3IgDt+w6IRHonO7Qp7IUvq2VCBhf9mITbWo206xMmqNeg/MGDr3wdoh8vFlu8GG5aqQ82EiAByyMgtRQXa3+GnZ2dLc94E1r8qrI/Y+qPQa3ctUw4G4ciARIwK8EVHglMOBuEmReCERwWiYgoIfVCXMnvYwgtg/CKJriixJh8D3aIDAuLeiZXeidMa5oH1XJ5qp2/v2oVLg8ZkmjBVWTmTMjNRTYSIAHLIyC1FPv374+cOXNanvEmtPjWs1vo+EdH3H5uXPaHxa1NCJpDkcBLAmYhuDbejcAXRwJjiakkCi5nD0QcXY2Mxxfj9JYNSD/qNJwQkbXReQAAIABJREFUHuUNM4i4zhUz49t0V3Dhq68UCjlGNDQ5XjQEzUe/pWg4Xiy1fj2cfHz4EpEACVggAaml6O/vj4rMr4d5x+dh7B790j59a/TFu8XetcAdpskkYJ4E0lRw/f5vBAadDlXHgBHhIoqiHROq7xmOChPg4VrYEzULZceM0SPglS7df+Jp5HHYR/53DGkYM7+3C/Y3cMEZLQmieMGit1fdUkxXqRIKTdJPHmieW0yrSIAEohOQWoo5cuRAkyZNCEYj8PEfH+P47eNGLHKkz4GZb82Et5s3OZEACZiAQJoJrgo7wxDmHK6JKidEBoQkW3Dh9llsfq8QiuZ/EVt181kosnk6IcPIY0Dkf0Iuuohb2a4wiv05E7e13DwJFVy5Bw1CpqZNTYCeQ5AACaQFAaml+ODBA3Ts2DEtpje7OV8VQN+lopYmoizTRJjdptEgiySQJoKr7C7N4xRyGxmnfY13GtXHnEVL8PfJU0jnmxXOOQrCqVRdOBatAjtvP4Q/e6aFwNsjcNlwODf+UjeGK2L3PJwa0x0ZvTKoTcgw5hQctackwF5bYIxnoguu1/Omw4oGXsrLFar9BWxo0Y8Xo99S9H37beT6+muL3GgaTQIk8ILA7t27sXnzZgwYMIBIXhKQG4sivGK3nOlzYt7b8+Du5E5WJEACySSQ6oKr1d+ROBcciXIrh2HcN1/Cw81dZX6O3sK148W/du/DpN8W4PCJU3jy9Clu7d+BgoMXwb5EvRi3FMPWjsGV336Eq4sLrj4JRfnZF14ILHUcGf2I8kXAfYxjSq3PuCZ50M79Dq5peXkCzp6NE6ejtzdKb9yYTNx8nARIIK0JXLx4EWPHjsXEiRPT2hSzmV+OFOVoUa/1qd4HLYu3NBtbaQgJWCqBVBdc5fZE9zhpoijSDqFh4QgNeIYaDvfRrYAzyubJCicXNyOmKzZsRo/T2g1D72xGaSGCQ8PhaBddYGmhYXb2QOBz7VctUcTLG42xBZd8v1et7Pi+ThaVcf7usmUx5nXRYj3SV62KXH37Wuoe024SIIFoBJ4/f64KWC9ZsoRcohEYvHUwVp9dbcSkqG9RzG2un5meAEmABBJOIO0Fl+Z10guah7M7luW+iKx+2bDu3B3MuBCBA8/ckNHZPs48XGGP7yHk0HJkuLYXNcuXwset2+KTWTvxOG9tRDh7IiI0RAuQ1+LGoqWTMAixTO4O+KSyH1oV9kABx0CEPnwIl2zZ4OTrm3Ca7EkCJGARBKSW4iTt8ouXl5dF2JsaRh68eRCdV3fWnWponaFoWLBhapjBOUjAagmkuuCqcAAIDzHcGnxx7Kd7S9FJS+YQGKwdDf53e1Hl4RJvlea50i4eIjJQi+/SHn9xfBiBE297wjdzVqPNCgoOxvb9B9Bn2I84efEq0pduiOdFWmieLy3xYdDTF2NIni/NlqxeLtjzoR9y5cpldNRptW8BF0YCNkZAail+qtVJLVyYJWyib/1X67/CtivbjN6GStkrYVJj3s62sT8mXK6JCaS64PIccRwFaxZ/6aV6heDSSQsRae+E3Et6YPPCubh28xZqzzqC0KwlogRX8JPHeNS3PIbuuoMx++6iaYH0+LyiD0pncYODfcw4sZDQMCxdtx7jZ8zEcd9GCPEqoOK7fL1dsa2ll/qLOHZsmYnZczgSIIE0IiC1FKtUqYLatWunkQXmOe2WS1vQe2NvXePGNhiLmrlqmqfhtIoELIBAqgsu5wEHkLWQHzLmzRrlVUpIHi44OqP02gH4fdqLQNcmS87i8FOXaAHyL7xmpTI54+i/WhJVnaD5589D4OPhhKlv5ULToj5KhA1adwnDN99Q/Z3SeSC9fSgFlwW8uDSRBJJDQGopurq6olWrVskZxiqflcLWR24dMVpb3bx1MfIN2y36bZWbzUWlKoE0EVzOTvZw93BBtspFEK7FVMUluMLuXEXQyR1wyl8ODf7dgCnff6vgNF1+AYefOOvWUoxR2ieeW4oRUksoQptf+8VDE1uBmtcrg0MYBVeqvoKcjARSn8C6detwVruV/Nlnn6X+5GY+48p/VuK7bfrFq2c0nYEyWcuY+QpoHgmYJ4E0E1wuTg6Qr/R5ssDJO91/gexRhakjcf/uHdzrUAiPtVxcGTxf1D9sNv0vHPKqhMjnj5ItuMJCwpAts5dWFDtMq90YgSDtpiMFl3m+qLSKBExJ4OjRo6qA9bBhw0w5rFWMFaEFyLZd1hbnH5w3Wk+zIs0woBbzl1nFRnMRqU4gzQWXqya6xOPl4ummxWP5qKO9FyV+NMH16AnufZArCsref4PQa8s1XAl1j4oB+y/n1n+B+K/KwyU5vtycHJHV2wMhmndN0kkEh2hfFFyp/vJxQhJIKwL//vuvKmD9v//9L61MMOt5fzv2G8btHWdkY3qX9Fjeajm8XHm706w3kMaZJQGzEVyuzo5wdtSElybAXLVf77m54UmEPe4EhMHHyU7LGK8F2EeJMYMoe/lrVM3F/2omGmK4RGA5aOjzZfKEt3aMGRAcqokszZulia0QEVsUXGb5YtIoEkhJApHa1eSmWomuP/74A/b2Wr4+thgEHgU9Ul6uO8/vGJEZ/Npg+BfyJzESIIFEEjBLwaWEl/OLI0cRX65a7i0nR0doFX7wRKszHaAJpoeBYbDXEp1q/9fiwCLhon3soXnK5CuDq6Mq6xMkwko7NhSBZfiS24kUXIl8S9idBKyQgNRS/O6775BNy7fHZkzgx10/YvHJxUYfvJHvDQyvN5zISIAEEknA7AWXi/J62WvHjo7qVzmCVPFf2vedNVHmqP10qrxU6nhQE1aawAqR40F1TPjCgxVCwZXI14LdScD6CUgtxbe1+qhly5a1/sUmYYWSj0vycsVubk5u6ljR151JoZOAlY/YMAEKLh4p2vDrz6XbMgGppVigQAE0bMgM6nrvQVBYEJotbIZ7AfeMPpbAeQmgZyMBEkg4AQouCq6Evy3sSQJWREBqKRrqKlrRsky6lLjqK76W5zWMfnO0SefiYCRg7QRSVXBJoKrLwIMvbiW+PBo03FKMHjQfPYaLR4rW/gpyfSSQNgS2b9+O3bt3o1+/fmljgAXMuvbcWgzcMtDIUiet6occK/ql87OAVdBEEjAPAqkquGTJzgP2a4LrZRyWBMW/TAthLoIrj/1D/NE6FwoVKpTqpX2ePn2Kffv2IUeOHChSpIh5vCG0ggSslIAkPp08eTLGjh1rpStM/rIeBD5Qx4oBoQFGg/Wt0RfvFns3+ZNwBBKwEQKpLrjKTTyOsw9CzNPDFRKKsdmOwL9xI+TMmTNVXwH5y79evXrIlCkTnmmJXitUqIB58+Yp0SeeQckXdODAAbzxxht45513UtU2TkYC1kjgyZMnqoD1ggULrHF5JluT1FaUGouxW41cNTCugXGuLpNNzIFIwMoIpLrgCgwMRLZfrsM+5PmLtA9m5OFq53gQzSrmQ40aNeDi4pKqWy1i68qVKzh8+LCq8SYervHjx8Pf3x9fffUVZs6ciQ4dOuD333/Hxx9/rJI2spEACSSPQMuWLfHrr7/C82Uli+SNZp1PLzu1DMN36qeB2NBuAzK6ZbTOhXNVJGBiAqkuuMT+u3fvouXSq/jnmZMmuLSEp5LuIVri09SO4QqJcMAA920oXDA/qlatGudfvpcvX0aePHlMvAXA/fv34evri2bNmikvliRkXLVqFUaMGIFixYqhXLlyWL16NRo1aoSlS5eib9++uHDhQgw7wsLC4Ci5ythIgAQSTEBqKcqX3FZk0ydw/cl1dayo1yY1noRK2SsRHQmQQAIIpIngErvkdtCZs+fQeb8LnobZpYngCoUTqgUcxGsZn6NUqVIoWrQo3LQM93E1EUROTk5o3769Sa+SX79+XR1hiocrY8aM+O233zBt2jT8+eefypP1zz//YNeuXcosOVqU+m/RBZcIMAkA3rlzJxwcJK8+GwmQQEIIyJ+l2rVro3r16gnpbrN92ixrg3P3zxmtv2fVnmhbsq3NcuHCSSAxBNJMcImREVqhavHuiOdo4aGr2JOuMhwiw1+U+HmZad6ktxQlGWp4pJa13gnvPF6FLBm9kD9/fuTLlw9eXl7xlvgICQlRR3tyBCGCUY72RHx5e3snhrlu37p16yJDhgzqGNEQPyZlibJmzYpRo0bho48+Us+99dZbar5Zs2ap38tn8iViS/qOGzdOeRA//PBDFQfGRgIkEDcB+QFG/uxLAlS2uAkM2jIIa86tMerQpHATfFv7W6IjARJIAIE0FVwG+0R4iYARoXDz5k1cf/AMOx+54d+MReCsxVI52Ue+rLOYiEzzWnb5EE1chUXYIfzRHeR/dBIFnR7DO0N6VcrDz89PBai7u7sn6TaieJREfM2ZM0cJL/lKzk/JckNRyozMnj0bWbJkwd9//4179+6p/xbPV65cuXD+/HkV27Vy5Up1vCj/WEh81+bNm1GyZEnUrFkTEgjcuHFjzJgxAytWrFA/vbORAAnoExAvsvz56tq1KxG9gsDcY3Mxfu94ox5FfYtibvO5ZEcCJJAAAmYhuKLbKeJLPEkiwEQ8PHr0SH1JgdnHjx/j3pNnCIx0Qmi6THCwgxJLEVpha7vAZ3AKfAw3zTPmnc5T9ZfPJBhWPEfiFUqXLh08PDy0kkDOSRJZejxFJBq8Xj4+PlFer+QUxJWLBXK0GRAQoATXmjVrULlyZSWkhMnevXuxfPly5fWSfzBq1aqFCRMmYNCgQTh9+rQSk927d4eMI6KMjQRIQJ/AwYMH1Q8w8sMOW9wEDtw8gC6ruxh1cHJwws72WiiDHUMZ+P6QQHwEzE5w6RksaRHkeE2+RIzF10RoiaiSeCaD8IrvGVN8LoHuIr62bt0a5fUqUaJEsoYWT1XPnj1V7JiIRfFmyU/kcrS4cOFCdYtRmhyNtm7dGj/88IP6fbt27RQDCq5k4efDVk5A4ieHDh2KqVOnWvlKk7e8wNBA1JxZU3eQ31r8hiKZmDcweYT5tC0QsAjBZWkbIUd/Irzkq0yZMkp8vftu0hME/vvvvzh37hzKly+PEydOqFxckyZNwnvvvafQyPGjzHPx4kXkzZsXcmNR4rlGjx4dFfsl/US4yk/069evV0H24gWTG5FsJGCrBOTPisRv/fHHH7aKIMHrjitwflDtQWhamH+PJBgkO9osAQquFN56uXEowktuFUqAvYiv5CRVlZ/IRXQ1aNAgyvLFixer8iQiuKTJfN26dcO1a9cgx5yGJseR1apVQ+nSpTF//nxs27ZNHUfKLcjjx4+rtBRMLZHCLwSHNzsCcjT/448/InPmzGZnmzkZNGTbEKz6Z5WRSW1KtMFX1b4yJ1NpCwmYJQEKrlTalkOHDkV5vcSrJMLrzTffNMns4q1q0aKFCqqXLPWVKlVS3i+5vajXJI2ExH6JcJO2bt06dOnSBcHBwejYsSM++eSTZIlCkyyKg5BAKhGQH1batm2rUsOwxU0grgSo5bOVx1R/Hsny3SGB+AjYtOA6c+8Mlp5aigG1BsTHyWSfSyC7pJUQL1RoaGiU1yt9+vTJmkOE0pIlS9RxYpUqVZSgkoz1sZuIKqnVOGTIkBg3s+SyggTny1Hlpk2bVMmTiRMnJssmPkwClkBAUqkUL15cHdWzxU3g6L9H0XFlR6MOEr8lcVxsJEACryZgk4LrcdBjzDo6C3LVWdrwesPxRr7U/8t2y5YtSnwtWrQo6naj3EZMajtz5oy6xVixYsU4b2FKGgs5bpT0G3JrM3aTo0bxcEkdx4IFC0JsFIH2+uuvI7miMKnr4nMkkJIEpJai/KAiF03Y4iZw4cEFtFrayqhDjvQ5sKL1CqIjARKIh4DNCS6JQVhwYgHO3j8bhaZ0ltIY33A8PJ090+SFkaB4g9dLUjpIrJch0ampDRLvV9myZTF58mSjocWjJceNIgCbNGmiygiJABP7JAZNjh7lWTYSsCYC8kOFHPn36tXLmpZl8rXceX4HjeY1MhrX29UbGz/YaPL5OCAJWBsBmxJcq8+uxuCtg3X3sFP5TpCvtG6SrFTE1549e6K8XpLs1BTtyJEjqi7jsWPHVKLU6E2OGCXmS+aXQtqxm8SESW40+ZyNBKyJwKlTp9SfObnVyxY3gYDQANSaWcuog7ODM3Z32E10JEAC8RCwKcElLCYfmIy/b/+t+5dGx3IdUSqLeQTOys1BQ0JVOWaUIHsJjE9Ok3qMcmsyundLUkV8/vnnKsO9xHDpZcuXPpKxvlChQiqDPRsJWBOBBw8eqD8Dc+cyY3p8+1p5RmWER4QbdRPBJcKLjQRIIG4CNie44kIRGhEK/3n+GPr6UFTKXsms3hkRQyK+JCWEoYyQlCdKbpO4FTm6lKNCyc0leb5iN/npv3fv3ipthNRrlBJD0ZvUbJQA/WLFiuHLL79E8+bNk2sWnyeBVCcgubjkh5FXFa9PdaPMcMJ6c+rhUdAjI8s2ttsIb7fk15Q1wyXTJBIwGQEKrpcoRXBVnVEVdtr/2pVup74kNsGc2v79+6O8XpJIVcSXFL1OahPB9fvvv6No0aKInhFfbiyuXbtW3VKURKkdOnRQsV0ZM2Y0mko8cTLOgQMH0LlzZyXcWL8xqTvC59KKgNRS7NOnD/LkyZNWJljEvM0XNse1J9eMbJWgeQmeZyMBEoibQJoKLvGsNGzYUN2Ee+2116Ks/P777zFw4EBIQWephZicJiU7JAA8ukdIjsgkXumbb77BiBEjVLCsQXAZ5irsU1iJrgYF/kswmhw7TPmscDFkspfSRQavl5T+SW6TepXi6ZJfJaalVatWuukl9OYRL5d4zOQfLrkNKXm+JL2ElB1iIwFzJiC1FCUvnlwqYYubQLvf2+H03dNGHVjeh28NCcRPwKoF1507d5A9e3YVgF6hQgVFQwphyzHY4cOH1RGdCC89wWVA16RQE7xf+n3k9zZP0bBx40YlvsRTZchkb1hr/Ntv3OPhw4dKaEkNRkkDIV4rEVF63q3oT//888/46quvVJkhKS8kIksyd4vokpQSw4YNUwH7bCRgjgSmTZumCsVLjVK2uAm0/6M9jt0+ZtRBEp9KAlQ2EiCBuAlYhOCSZKGDBg1SiT1FEIigkGSFctNOjr8kU7TEX0jwq5TNGTx4sMpFJf/Q37hxI2r1cuwlha3leGz69OnIly9fvIJLHvb18EW7Uu3QtmRbs32XRDwavF65c+dW4is5eYUkKeuyZctUgL0wlCz2Iu5q1KgRFecixcTl1qIINCkjJCKtfv36GD9+vNqfs2fP4vbt25B/zCRGRkoKsZGAORKQWoqS/kQ8smxxE/Cf749/n/1r1GFlm5XIli75caVkTwLWTMAsBJfcjqtZ879K9FLXbOjQoVFHilJkWQLHxYsiMRbymaQ2kPgh8V41btxYJeqUHFHiuZISHYULF4bUGBTRIUeX8o99pkyZomoFSgkcSfwZn4cr+uZXz1ldebsqZqto1u+E5M8S8SW5hQxeL0limtQmIleEra+vrxJPrVu3xoQJEzBlyhQVRC9esJYtW8LZ+cUtJcna7eLigm+//ZYeg6RC53OpSmDfvn0q/lB+sGOLm0Dl6dotxUjjW4oHPnnxwywbCZBA3ATMQnDFZZ7EKklcksRxybHWL7/8orqK50QElXipREhJ7cB33nlH/WUZPb/U6tWrVfyWeLZiH7MlRXDJ3A72DsrbJV8ZXDOY9btlyC8k4ksErYgvqeOY1GYQs+L5ktpzZcqUUd6tOnXqxBhSvF3iMZBjRCmXImJZr926dUv9IyceTMluz8LZSd0ZPpdcApcvX1YFrKW0FZs+gfuB91F/bn2jD7N6ZsXqtquJjQRIIB4CZiG4xFsSPYO5BFyLmBLBFRQUpDwrI0eOVMHY0qQeoNQJlMB6CXZduXKlqg0ogqBWrVoqn454XlJCcBl4Fs1UVHm76uc3/gvI3N46uSRgyOl19+7dqISqEmOV1Hbp0iXl4ZKEkeI5HDBgANq0aQMJ4jc08RpIEPLFixdVXFf0Jt4v8VjKNXwR1FKWiI0E0oqA/D0jyX3lhwk2fQJSe/b95e8bfVg2a1lMbzqd2EiABCxBcL3qlqIIqwwZMuCDDz6IStgpR4mSfV1EmRRtNrQdO3aoWCFJSyDxXpIfyt/f36Qertg8mxZuqrxdeb1jCgpzffPkCNYgvuQfGPF6JSeNg4hfYS3eKUkPIdnsxbMlR4qrVq1Cs2bNVGyMiOboTY4ppY8E10sMniSeNDQRiEePHlU3SyWQmY0EUoOAhB9I7KGPj09qTGdxc2y/sh091/c0srthwYYYWmeoxa2HBpNAahMwCw9XfGkhevTooUSC5IWSf6DFqyX/IIvwOnfunPKOSCoDCfSWNAZyfCgFaaWPeM4+++wzJcQkU3rWrFkV46QeKeptUBaPLMrb1aZEm9TevyTPJ7c1DcJLvEySWkLEl4igpDYJ3JejRqm7KJcWNm/ejE6dOsVZMsVQKFuC8r28vNS0IrykluP9+/dVbB5LCSV1N/hcYgnIbWX5MyDpTdiMCSw7tQzDdw43+qB92fboWrErkZEACcRDwCIEl3hRvv76axUYL/E+Iq7GjBmjxNTu3buVl0uOuMQbJrfo5GZdjhwvkvB169ZNHTE6ODio0jVVq1Y1ueAyMK6Rq4bydlna9Wi5VCDiS/gYcnolp0i1HO1Kkla5BSq5jSRDvQTwR/diCTOJKzN4Kg0M5SakpKMQr5ukupA8bWwkkBoEJB5RUpfI7WY2YwKTD07G/w7/z+iD/rX6o3kRVpjgO0MC8RFIU8EVn3Gp+XnsxKex55ZgeT9PP2TxzALxaGX2yKzSRWRyzxTjy8Uh6R6i1Fyv3lxXrlyJSi0h3kARX+KxSm6T+DrxVMlxo6FJqSC5TSpCLHZ+LvFgSqC9pKIw3HwSr5kE2MuXeM8kZoyNBExJQFLLyA9mEovIZkzgu21avOw/K40++LnRz6iSgwlj+c6QQHwEKLheEopPcKV3Sa8CQ801AWp8G53Yz+VYT7xekrjU4PUSj1VSm6SViB5Q36VLFyXA9u7dG2NIiQOT1B9yDGy4JCEd5LapxNZIygv5Pq/vJ3Un+FxcBMS7Ku+71ARlMybQfU137L0e88+r9FrWchlye+UmMhIggXgIUHAlUHBJt/oF6uOH13+wqZdK8p0ZEqrWq1dPiS+JrUpuk9uLUr9OLkNEb3JLTIL5JR5Mbj9Gb1LfUdJaXL16FX5+fsk1gc+TQAwC4nWVsAUp98VmTKDGrzUQFBZk9MHuDrvh7PAiBx8bCZBA3AQouBIhuKTr4NcGw7+Qv829U+J5khQQIr6kzqIhoWpybnTF9noJVCnGLeWYJDVI7CY3Tt3d3VVC27ia3H6UPG2Sm42JGG3uNU3WgqUUmHhPZ82alaxxrPHhw7cOo9OqTkZLK+ZbDHOaG/9ZtUYGXBMJJJeATQuuAzcP4PfTv0cx3HBhg/rvLhW7YP359bj48KIR31wZcmF6k+nwcbfdq+MSBG8QX4bbjXJZIblNYsgkX9euXbuiLjcYxpTElHJDddOmTUaJVqWPBOlLUL4cU8olCwncT07gf3LXwuctk4DUUpRjaycnJ8tcQApZ/cv+XzDz6Eyj0XlDMYWAc1irJGDTguuvS3+h78a+MTa2dNbS+F/T/2HtubUYuGWg7qa3Kt4Kvav3tsoXIjGLktQNBuEludIMXq/kZIyX7Ph61/IlV5ckuJXP9Zrk+pLjTwnOl0B8SbrKRgKJJSC1FOVChtRkZfuPwHvL38M/9/4xQjKtyTSU82NRer4rJJAQAjYtuPbf2I+uf8bMHxM9AHTA5gFYd36dLsexDcaiZq7/6j8mBLY195EksyK+/vrrr6icXtHLLCVn7SEhISrNh1QWkJxscTXJrSbJUiVf24cffhijmwix5cuXqyNRuYnGRgJ6BOQyhsQJxi4FZsu0rj25huYLjdM+SNzWjo93qHJnbCRAAvETsGnBdfruabT7vV0UpQ5lO6jjREO78OACOq7qiKfBT41IlsxSUh0tOto7xk/ZhnpIGR9DQlURXHLkKMlok9Ok5qIcF0plAfGkSZPErYZkqYaxJf+aeCckkarkZDM0Sawrtxzl2r943yRGRwSc2GXIy5Yc+/is9RCQWopSFkziBdleEFh+ejmG7RhmhKNW7loYU38MMZEACSSQgE0LLvnJreXilpCUEBKbtbzVciNsc/6egwn7Juji7FS+E+SLTZ+AZJIX8SVB7IbUErlzJ//6uFzfl38QT58+rZKrGprk9ZJEq5LA0tAOHjyoAvHHjx+vCqDLcaPEiMkRpNTwnDFjBlq3bs0tJIEX4kLzgsrFiw4dOpDISwLf/PUNDPGt0aF8VfUrtCnJnGV8UUggoQRsWnA9CnqEtsva4s7zO/itxW8okqmILrfOqzvj4M2DRp+Jd0u8XOLtYoubgASyG7xeklJCxFeDBg2SjOzevXsqMarkSzLk9pI6mpKdXsRdgQIF1NgiyKSYef/+/fHFF18YzSdVCKRCgWTYZyMBISBifOvWreqdYQMCQgPQeH5jXS+/3E6UW4psJEACCSNg04JLiiRvvbIVvv9v70zgbCzbP35ZhrFvDbInZBkZTXitiSylxZqlspQ2lEKR7JUUWoQQfy8KFcm+vSLZ9z0MsjMmYxnLGIP/+d06p5nxnDMzZ56z3Of53e/nfHjN89z3dX+vp5nfXPf1XFfWEAnNH+qUWNTVKFl3cp3h1wtmKyjVilRLGW2LXxUbG+uo6YW/26NeSY8G3cGEuU6fPq0q0WOgVlfNmjVVVOujj+5trIuEf5SOQM0vVLa3j6tXr8qECRNUSyG0HeKwFgF0NEA0FNFPDhFnDasL5ygsc9vOJSISIIFUELC04EoFJ15qMgFEERD1QqFJ+9uNacmnglBC5AtHllFRUaqnJgq1jhkzJpHl165dU9GxTz6o7nR8AAAgAElEQVT5RMLCwlRNL9T2woBYQyQMzdDHjRsneGONw1oE8OIFnkdXtd6sRATNqtG0OulALULUJOQgARJIOQHTBBeKWCIMj7fBcJSDsXnzZhXFSDjwGyQaUC9YsECGDx8ut27dUgUqkaya9K02lABAOYDo6GhBRKR3797SqlUrNV1oaOKIFN6OK1CgwD07xzdO5GNERERIwYIFHV9HVelmzZrJxx9/nCiHx2gfSSc1uib6erTkzZI35eR5pSIQGRnpiHrlz5/fEfVKS9FS1AnDMSFElX0eHB3iGYPIQ2QLbzvaG2Pj+erRo4fs3btXvaGG5xLRsuzZs9NLFiSAXooQ3PYXNCyIQG35xKUT0nZ2W8Pq8mxYbdWngvtOCwHTBBfe+EJUAT/U7IIrqWHLli2TadOmqQ8iHOHh4ZIjRw75/ffflfBBMnTCgR+AeNsMBS+RyIqkaLwFh6KElSpVkp07d7rcO8oDIGkaeT1z5sxxCC7UaHrvvfcEDZoRBUmYNJ2SfRhdM/fAXHnuoefS4gvL3zt37lwliJCPZY96GdXkSi0oFFTFM5QnTx5V1BK5XvaBJGmILfR27NWrlzRo0EDKlSt3T2QstWvyen0JIDfwjTfekIceekjfTZhg+bgt42Titon3zIS+sjNazJAC2e/9BdeEZTkFCQQsAdMEFwQRjmYghHAkYzQaNWokn376qTzySOJCeci3ad68uRJHrgZ+aO7YsUOyZcum6uSgmrirAZvwQxZHVQkFFyqRI0qF3B3Ym1BwpWQfRtd89PtHUrVwVdVvkSNtBBCNtBdUhSiH+GrRooXbkyJXDxXqUTYC9cLwHEJgPf7446o8BI4hBw0apKrcQ9SjgGrSCKrbi/NG7Qigl2KNGjXUCxdWHVfirkjbWW3lzJUz9yBoHWor/FyDhZ+t+mxw3+4TME1wwQQc+yEvxkhw4YcYaimhJlLSMXDgQHV8g6iTs4GIGI568AMzJiZG/faJI0jk7iBKhaKYzgpaolEyjjoTHiliHRxXwt6kZQFc7cNuX9JrILj2nNsj3z37neA3QA5zCCAaCvGFKJW9jRB6Lbo7UKMLSfFoBYRm2JcvX1Z9G3GEdOjQIQkJCVFH4UmfFXfX4336EUCdNvzy+Pzzz+tnvEkW/7jnRxm+brjhbFOaTZEKIRVMWonTkIB1CHhNcLVv315FKdCrLOGYP3++qgyOnBtnLWFwjIhvfhBNiEhgIGqB/BxEq1599VWVl9OtWzdDz3lLcOFY8YWKL8i71d+1zhPkpZ0i+mmPeiH3DlEvCG2zBpKlkQOI/ouYv2fPnmZNzXk0IwAhDvHtqquBZltKtbnt57SXfVH3ttF6ouQTMuyJYamejzeQAAmIeEVwIaqA3Jg9e/Y46iYBPt4KwxEjRBdyuYwGIhtIlEduT4UKxr9VIeoFMYZK5EbDm4IL63/d+GupWawmny8PEEBE017TC6LbHvVKa4I7fsh27txZ0CSbjYs94DiNpkTdOOT64aULK46lh5fKhyuM65ChsjwqzHOQAAmknoBXBNf777+vmsEm/I0RCfKfffaZyq1KKLbQxgXJ8oheILcLCeqTJk1K1NAYbV2QTI8PfugiH6dKlSrqbUSINyTvI3fLPswQXEnnNTpSRIQLo2L+ijLh2QkSlD4o9R7hHSkmgDdTIb7ww9Fe0wuRTncHSkbYS0S4Owfv058AvgchRQFdCKw43l78tqw7cW/dwcoFK6uUCQ4SIAH3CHhccCHfCrlWiG4ljELglWsUvMySJYvD8tmzZ6s3CvGNDlErHD+uW7dO8uXL57gGpSGQMA9xhSNICC60bkFxSxwx4gfuF198oUSXmYIr6byuBBfWfeURW1/GR//ty+iee3hXSgighAOEFz44cob4Stq8OiXz8BoSAAG8UIPyIPglKy3lSXSkuenUJumysIuh6X1r95Xm5ZrruC3aTAJ+QcBUweUXO/KREUiat0e47CaMf2a8hN8f7iOLrLksyjxAeCEp3h71svrr/dZ8EtK2a/xCh1I1999/f9om0uzugSsHysKIhfdYXTRXUVUKIjjjv03hNdsazSUBnxOg4DLJBUaCC2UixjYZa9IKnCY1BFALzh71wiv+EF9NmzZNzRS81sIEUMS5ZcuW6iUKq4zd53ZLp18TF6q27/318Nfl1fBXrYKC+yQBjxCg4DIJq5HgwtTdqnaTjmEdTVqF07hDwC68kJtjL6jKsg/ukLTOPeiliMLIaWmyrhutviv6yrLDy+4xO2tQVhXdKpzT/XIsurGgvSTgCQIUXCZQPXf1nHyz6RtZHLH4ntkQgp/wzAQpH1LehJU4RVoIbNiwwRH1wssYEF8ofspBAkkJoCUYXqJA83MrjFVHV0mvZb0Mt9qyfEvpU6uPFTBwjyTgUQIUXCbhnblnpoxYN8JwNrxGjdepOfyDAIqd2mt6oQSEPeqV8AUO/7CUVviKANqNQaDjJR0rjNfnvy5bz2y9Z6vZgrLJ5KaTpWSeklbAwD2SgEcJUHCZiPedJe/ImuNrDGfsVaOXtAltY+JqnMoMAujvCfGFN9LsNb2Stp4yYx3OoReBAwcOyPjx49Ubz4E+Zu2bJcPWGBczRd4W8rc4SIAE0k6AgivtDB0z7IrcJa/Nf03ib8ffM2vu4NzqaJG/KZoI3MSpTpw44Sioip6dEF8vvviiiStwKp0IXLp0SdX3mz59uk5mp9rWyzcuS6e5neTYxWP33FsidwkV3cqRybgodaoX4w0kYHECFFwmPwATtk4QfIxGowcbySf1rVm92mTMHp3u559/VlGvnTt3OqJeEGEc1iKAdmJ44SJbtmwBu/HxW8fLd1uNi5l+WPtDaVauWcDunRsjAW8TMFVwod/dBx98ICdPnlRFSQsVKqR6JA4aNEhVgkcxQbMHXt3esWOHKqqKgoXop/jaa6+5vczGjRsFP1zvu+8+t+ZAdAtRLkS7jEb/Ov3lubKJ+0m6tRBv8jgBFOu1txFCcj2iXs8884zH1+UC/kEAnTHeeecd9f0gEMdfF/5S0a0rcVfu2R5L2gSix7knXxMwTXChQjwqvv/www9Sp87dXluRkZGqITBa8aBlSqZMmUzfLwQXRFbdunXVOuHh4YK8HHe/SbZt21YGDhwoZcuWddtW5HEhn8to3J/9ftX2B39y6EHg1q1bjrcbo6OjHQVVQ0JC9NgArXSLAHopQmijjlsgjqF/DJVf/vzFcGtfNf5KahX7t1tHIO6feyIBbxMwTXAh36FkyZLy3nvv3bOHXr16qXY8eBX/7bfflt27d0tcXJxUq1ZNvvzyS8FbY126dBEkqt64cUOmTp0qYWFhqnnsggULVHsNRMhGjhypImcJR0LBhX9v3ry5yr1As2y0B8Ic6dOnVxGrcePGCeov4VXvNm3aOGrsQLChd+PNmzeVHaGhoVK6dGmZMGGCsgm/5cJevNGGfytWrJhgT6hgjj6PuHbatGmJ7MIbi3hz0Wg0LdtU+tXp521fcz0TCKxdu9Yhvtq3b6/El/0XDBOm5xR+RAAtxvLmzau+pwTa2HJ6i7yx4A3DbT1d5mkZVHdQoG2Z+yEBnxMwTXBVr15dvdGDP5MOu+BCE2n8kFq9erW6BAIHIgZfhyDq0+durRf0R8RRJL7hob8iBFP37t1V1AqCzZngOnbsmIqy4XVuHC8i6oVejOjZiCbZEEVo/eJMcKESOYTX6NGjHREu/IYLAYjm27AJf585c6ayef369bJ06dJEPSLttkVfj1ZHi0cvHjV08tD6Q6Xhgw19/gDQAPcIINJlL6iK42x7GyFPRHHds5B3pZUAftnDyxT4BS7QRo+lPWT1sbvfhxOOzBkzy+TnJkuZfGUCbcvcDwn4nIBpgqt27doyfPhwgahyJriQhNquXTvBEQ2iSo899pi6FMeAeC0fOV/20aNHDxUVw/UYW7duVUd9+CaYcCDCtW/fPgkODla5Y0uWLBG81j9v3jx1LSJS9oG+aKg2nlLBhcbbhQsXdhwpxMfHq2NRCC8ILlSidpUvtihikQxYOcDQyQ/meVC9tZgrOJfPHwIakDYCeB4gviC+7TW9KlWqlLZJebfPCWzevFl9Dxk8eLDPbTHTgEnbJ8m3m781nLJT5U7StUpXM5fjXCRAAv8QME1wvf7661KuXDl1/OZMcOEYD2Pv3r3y+eefCwQMcr5wfIgfWgkFFxJWES1LieCy53AhGoVChWjHgcgYfgAaCS5EI3C8aW/bgR+SSOhPGuHCUSeOF48fP57snpw9UUN+HyLzDswz/HLbim2lZ/WefBgDhMDRo0cdBVXx3wKeK/szHyBbtNQ2EN1CSgJSEQJlrD2xVrov7m64naI5i6oyEChhw0ECJGA+AdME1/79+9VxHo7skJuFgbwnRITsR4rIhUA+Fo4RIbYQITpy5Ig6JsSRnT3/CxEwCDDkR2E+HCki4oXcqaSCLmEOFxoWQzRt375drly5onJrcLyII0VEvPCq/6+//qqOLpFvhugUjjUrVqwow4YNU/c+99xzyh7sBaNq1arSr18/xxuWFy5ckDx58jj2lNwP1MirkSpX4sSlE4beY3Kq+Q+1P8yIY2c8b3gm7QVVS5Qo4Q+m0YYUEsD3hlatWqnvGYEwkObQZWEXORR9yHA7vWv1llblWwXCVrkHEvBLAqYJLuwOx3n9+/cXiJIcOXLIww8/LFOmTHGIk1q1aqnIEo7/8M3MnveCfBhEyBBJQu7V2LFjVZL8kCFDVEgf1+OIBjliEGsJR9Kk+b59+6q5cbw5d+5cGTp0qLofIgnzIoqGXC+sjb9jvtjYWGUXBNfixYvl/fffV+t9//33cujQIZVIjzcg7TZDkNlFZHKCC7YuPbRUPvztQ8MHIDR/qDpazJTB/Dc4/fKJs5hRqOVlbyPUqFEjFfV68sknLUZB3+126NBBRowYIYHwRurgVYNl/sH5hs5APinySjlIgAQ8R8BUweU5M/WfGa0z0ELDaLxS+RV5s0rgJebq7zXzdoBor72m19WrVx1RL/wiwOG/BJCigI4DiILrPH7c+6MMXzvccAtFchaRsU1sv4zm+DeHVue90nYS8FcCFFxe8szF2IvqaNFZOH/8M+Ml/P5wL1nDZXxJAG/pQnzhjVd7lLdmzZq+NIlrOyGAsjUQW3h7WdeBIsw4SoyNjzXcwrAnhskTJfXdn65+od3WI0DB5UWfrzy6Ut5bdm+dMpjAys5edISfLBUVFeWIeuXLl88R9ULOIod/EEAvRaQ56NpXM+5WnBJbO87uMAT6UqWXpHs14yR6//AArSCBwCFAweVlX365/kv5YfcPhqt2q9pNOoZ19LJFXM4fCKAsCqJeq1atckS98IYsh28J/Pbbb+olnJ499XybeOS6kTJjzwxDiOGFwtVRYoZ0GXwLmauTgEUIUHB52dHXbl5TR4v7ovbds3KWjFlU259y95XzslVczl8I4CUNe0FVlEvBkSPelOPwDQGUsPnvf/+rXsLRbSyMWCgDVw40NBvfayC2KhbQOzdNN5/QXmsToODygf/XnVgnby9OXDHfbsZjJR6TkQ1H+sAqLulvBPCWLMTX4cOHHQVVUT6Fw3sEzp8/L++++67Kt9Np7Dm3R9XbunTjkqHZvWr0kjahd+sicpAACXiHAAWXdzjfs8qYzWNk8vbJhqvzaNFHTvHTZdFlwR71QoFeRL0aNmRbKG+5C/UDkcuF8jI6DIgsiC2ILqPxVOmnZMjjQ3TYCm0kgYAiQMHlI3feun1LHS1uP7v9HgvSp0sv3zb5VpBjwUECdgLXr1931PRCTTh7G6GcOXMSkgcJoJciiiUXL17cg6uYN3X/3/rL4kOLDScskbuEOkrMny2/eQtyJhIggRQRoOBKESbPXLTl9BYluozGwwUeVqILzWQ5SCApgZUrVyrx9eOPPzrebrR3eCAtcwmglyLagOnAd8LWCYKPszGi4QipW6KuuYA4GwmQQIoIUHClCJPnLnL1DbJdxXbSo3oPzy3OmbUncPbsWUdpCTRnt9f10n5jfrSB8ePHC9jiONefB6JaiG45G29Ve0s6VOrgz1ugbSQQ0AQouPzAva8veF22nt5qaAnabaDtBgcJJEcAPf8Q9Vq/fr0j6lW2bNnkbuPXkyEArufOnVO9V/11JJck37RsU+lXp5+/mk+7SMASBCi4/MDNEFsQXUaDbTf8wEGamXDgwAFH1AvHYIh6IfGbwz0CGzZskOXLl6s+sf44kkuSRy7oqMajmJ7gj86jTZYiQMHlJ+52dbTYuFRj+bjex35iKc3QiQCax+MNx5MnTzqOG9G0nSPlBP766y/VwHrMmDEpv8mLV7pKkkdy/KgnR0mpvKW8aBGXIgESMCJAweVHz4Wro0XWzfEjR2loyqZNmxxRLxRSRdSrfv36Gu7E+ybj7dCXXnpJZs0ybj7vfYv+XTG5JPnPG3wu9R6o50sTuTYJkMA/BCi4/OhRcHW0mCUoi3prMTQ/2734kcu0MyUmJsZR0ws9G+1J9tmyZdNuL940GL0UR40aJXnz5vXmsi7XYpK837iChpBAighQcKUIk/cucvUba5XCVZTo4iABMwggLwnHjXPmzHHU9Hr00UfNmDrg5kAvxc6dO0u5cv7Rdmv1sdXy3vL3BPX8jAaT5APuEeSGAoAABZcfOtHV0WKnsE7StWpXP7SaJulK4NSpU46CqijuiYKqOELj+JcAeilCjD7++OM+x7Lh5AZ5f/n7gr6sRoNJ8j53EQ0gAUMCFFx++GC4OlqEuSxe6IdOCxCTkKeEqBfaCdkr2ZcuXTpAduf+NqZNmyZBQUHSpo1v+w+i/MO7S96VC7EXDDfDJHn3fcw7ScDTBCi4PE3YzfldHS2iPQeOFkOyhbg5O28jAdcE9u3b54h61a5dW4kvfy/86UmfLlu2TMDknXfe8eQyLuc+e+WsdJ7XWfCns8EkeZ+5hwuTQLIEKLiSReS7C7ou6iobT240NKBJmSYyuO5g3xnHlS1B4M6dO463G6OiohwFVfPnt1Yvvl27dsmMGTPk008/9Ynfb925Ja1+aiXHLx13uj4KmyJ3i4MESMA/CVBw+adflFUHzx+Urgu7Oj0+eL/m+/J8hef9eAc0LZAIoII9jhtRzf6FF15Q4qtu3bqBtEWne4mMjFQNrLF/X4y2s9tKxPkIp0u/Xe1taV+pvS9M45okQAIpJEDBlUJQvrpswcEFMmjVIMPlswVlk7FPj5UKIRV8ZR7XtSCBixcvOoRXlixZHFGvzJkDu9E6jlR/+eUXyZgxo1e93vHXjoLcLWeDL9J41R1cjATcJkDB5TY67904cv1ImbF7huGCVQtXlbFNxnrPGK5EAgkILFmyRImvRYsWOWp6Va5cOSAZoZfigAEDpEiRIl7b3+vzbX1Wzxj3WYURLcu3lD61+njNHi5EAiTgPgEKLvfZee3O+NvxgnwuZw2u+Ruu11zBhZwQOHbsmKOgapkyZZT4ateuXUDxQi/Fpk2bSnh4uFf29eGKD2Xp4aVO10JTezS35yABEtCDAAWXHn6SvVF7pdvCbhITF2NoMd9O0sSRFjDzxx9/VOJrz549jqhXyZIltd85eimWKFFCmjRp4vG9fLXhK/l+1/dO16lepLp889Q3HreDC5AACZhHgILLPJYen2nO/jnyyepPDNdh/R2P4+cCqSSAN/sgvPB54oknlPjyhlhJpZkpvnz27Nly6dIlVSLDk2Pitokybss4p0tUyF9BpjSd4kkTODcJkIAHCFBweQCqJ6f8bM1n8vO+nw2XYIVpT5Ln3O4SiI+Pd9T0sgsWiK98+fK5O6VP7luzZo2sXr1a+vbt67H1p+ycIt9sdB65KparmPzS+hePrc+JSYAEPEeAgstzbD0y8/X46+pocWfkTsP52UPNI9g5qUkEIFpQVgJRL4guRItq1apl0uyenebQoUPyzTffyNdff+2Rhabvni5frP/C6dx5gvPI8vbLPbI2JyUBEvA8AQouzzM2fYXdkbvlrcVvyZW4K4Zzv1XtLelQqYPp63JCEjCLwPnz5x3CK1euXI42Qt4uuZCa/cTExKgG1shRM3v8tPcn+Xzt506nzZA+g2zsbFwE2WxbOB8JkIBnCFBweYarx2edd2CeDPl9iNN1mETvcRdwAZMILFy4UImvFStWOKJeFStWNGl2c6dBL8UJEyZIzpw5TZvYVW6mfZHNr26WdOnSmbYmJyIBEvA+AQou7zM3bcWvN3wt03ZNM5yPSfSmYeZEXiJw5MgRR0FVCC4cObZu3dpLq6dsGfRS7NKli6D0hRnDVWFj+/zrXlknmTJkMmM5zkECJOBDAhRcPoRvxtLdl3SXtcfXGk7FJHozCHMOXxCYPn26El8HDx50lJYoXry4L0xJtCZ6KSLnDA290zqWHFoi/X7r53Ka1Z1WS9agrGldiveTAAn4AQEKLj9wQlpMOHbpmLy16C05HXPacBom0aeFLu/1NYHt27c7ol4oKYGoV+PGjX1mFkRg9uzZpVWrVmmyYcVfK6T38t4u51jRYYXkypwrTevwZhIgAf8hQMHlP75w25JVR1dJr2W9nN7PJHq30fJGPyEQGxvrqOmFv0N44ZM7d26vWrh48WI5fPiwdOvWze11Vx9bLT2W9nB5/9IXl0q+rHqVzXAbCG8kAYsQoOAKEEdP3j5Zxmwe43Q3TKIPEEdzG7Jq1Solvn744QfH243Vq1f3Cplt27apBtYff/yxW+utP7FevWHsaixot0AKZi/o1vy8iQRIwH8JUHD5r29SbdmAlQNkUcQiw/uYRJ9qnLzBzwmcO3fOUVoif/78jqiXJ9/mO336tAwcOFC+++67VNPZfHqzvLngTZf3zWkzR4rmLJrquXkDCZCA/xOg4PJ/H6XYwguxF1Q+1/6/9xvewyT6FKPkhZoRmDt3rop6/fHHH46oV/ny5U3fxa1bt1QD63nz5qWqTENKjhF/bvWzPJDnAdNt5oQkQAL+QYCCyz/8YJoV285sU0cWN+JvGM7JJHrTUHMiPyQQERHhiHqFh4cr8dWiRQtTLcWcQ4cOlYIFU3bsN3f/XPlo9UcubZjeYrqUyWdOqQlTN8vJSIAETCNAwWUaSv+ZaPa+2fLpmk+dGsQkev/xFS3xHIFp06Yp8XXs2DFHQdXChQuneUH0Unz++eclLCws2bkm77DlVm5ynluJCaY2myrlQ8yPxiVrHC8gARLwKgEKLq/i9t5iI9aNkJl7Zjpd8LMGn0n9B+p7zyCuRAI+IrBlyxZH1KtZs2ZKfDVo0MBta9BLsWzZstKoUSOXc6AvIvojuhqTnp0klQpWctsW3kgCJKAPAQoufXyVKktv37mt8rk2njLuv4ZiiiMajpCqhaumal5eTAK6Erh69aqjptedO3ccUS/U1UrNQC9FlKbo0MF5v9L+v/WXxYcWu5x24rMTJaxg8lGy1NjGa0mABPyXAAWX//omzZYdij6k8rmirkYZzlUgewEZ2XCklL2vbJrX4gQkoBMB9G1Ekv2sWbMcbzdWrWr8y8eV+HiZcegv2ft3tMTHxUvsjZtyIy5OYuNu2j5xcsP2/y9ei5Uu1cKk/aMVbf/NdZONJ103mp7bdq4UzpH2402dmNNWErA6AQquAH8Clh9ZLh/87wOnuyyVt5SMf3q85ApmResAfxS4PQMCKPMA4YVPkSJFVI0v+9gQGSVLzkRKUIb0En/7tsRBYN2wCSyb6Dp9KUau2/6ePUMGh+i68c/Xr8Vdl+BcU+WOxN+zYlCGIFn8wmLJHezdgq10PgmQgO8JUHD53gcet2DC1gmCj7PxyP2PyIRnnH/d4wZyARLwAwIoaNq8eXNlyRsr1kiOLJklS+ZMksEmqjLaRNet23ds0SxEtuJkZK1q6roX5i61CbH4uxEvFfn6J+pl+/PSjeOSL2SJY2eIaP3Y6kcJzhjsB7ulCSRAAt4mQMHlbeI+Wu/ztZ/LT3t/crr6Y8Ufk5GNRvrIOi5LAv5D4MW5yyTYJrQgtoIzBzlEVwab6Lp967bcuHlTPqlSWRn8yuKVEmf7/w6xpSJg/4quczGXpVDhmSpXCzlbHCRAAtYlQMFlId9/uOJDWXp4qdMdP13maRlUd5CFiHCrJJCYQNXxP0ixPLn/EVxB6s9/RVd6Fe26bYt0DahUQd3YxRYJi7tpi3CpyNc/Ea5Eoitewoqflf+26k/UJEACFidAwWWxB6Drwq5O31wEirYV20rP6j0tRoXbJQGROFtyfJMpsyWzEln/fDLdjXBBdOHfcLQI0dWv4t26WT3WbFRHiokT6W3CK4HoQkL9gT6uW/qQPwmQQOAToOAKfB8n2mHcrTjpNLeTHPj7gNOd96jeQ9pVbGcxMtyu1QkcjDovr8xaJMGZMkme7Fnlp9bPpAnJpC27ZOqW3XLNJr42d++Uprl4MwmQgP4EKLj092Gqd3Du6jl5ee7LcvbKWaf3ftn4S6ldrHaq5+YNJKArgZu2CFeN0VNUJCtzUJDEp09ni25lllFP1pXSeXNLh6WrbIn0wbZ/C5IMGTNKxvR3315ENOuL6o+q3ort5i1XbzJetyXR346/pXK+LlyPlS1d2+uKhXaTAAmYRICCyySQuk0TcT5CRbpi42Odmj7r+VlSIncJ3bZGe0nAbQJFB38tBXNlv3ukaIt0BQdnki+ffFxK2QRXx8W/SY7g4ESJ9DhihOga8HAFJbi6/bbWUSYCbzMir2twnWrySNFCbtvEG0mABAKDAAVXYPjRrV1sPr1Z3lzgPLckfbr0sv6V9ZIhfQa35udNJKAjgYc+HSs5bSUh7KJrTNOGtsbSeaTNnKWqVETiRPq7JSP6hpa3CS6RnracLtTpuluv66ZctyXYz2rmugWQjoxoMwmQQOoJUHClnllA3ZFcYVQURF3RfkVA7ZmbIYHkCBQePEoK5cqmxNXElk3koZC80vTHeZI9SxZb5OvfRJG4M2sAABvrSURBVHp7na4BYaFi01vy4ebtjuKoxW15YO9VvVs+goMESIAEKLj4DMisfbNk2JphTkmg9c/3zb8nKRKwFIE1EX9Jt/krbFEtHC/ejWypNxhtR43I40oY6bpmO1ZEna5sGTLKTVvu1qDKobbIcHpL8eJmSYAEXBOg4OIToghM3DZRxm0Z55QGmlyPbTKWtEjAMgR+P/a79FzaUzKmsyXK364vcekekrxZs/xbNiJBpCudLbfrxaIFpWJIiIp0cZAACZBAUgIUXHwmHARGrBshM/fMdEqkRtEatje2RpEYCQQ8AXRlQHcGV+Op0k/JB7U+kCxBWQKeBzdIAiSQdgIUXGlnGFAz9P+tvyw+tNjpntgCKKDczc0YEBi1cZRM3TnVJZuOYR2lW9Vu5EcCJEACKSZAwZViVNa58K1Fb8n6k+udbrj+A/XlswafWQcId2oJAjE3YlQuo6v2VwDRu1ZvaVW+lSWYcJMkQALmEaDgMo9lQM3UeV5n2XF2h9M9NSrVSD6p90lA7ZmbsS6BiOgIJbZ2nt3pFEJI1hD5oPYHUqd4HeuC4s5JgATcJkDB5Ta6wL+x468dZc+5PU43ymbXgf8MWGGHa46vUWLLVeeFCvkrqHwtvLHLQQIkQALuEKDgcoeahe558ZcXZf/f+53uuGnZptKvTj8LEeFWA4nA97u+l682fOVyS/UeqKfEVp4seQJp69wLCZCAlwlQcHkZuI7LtZ7VWg5HH3ZqesvyLaVPrT46bo02W5TApdhLSmjNPzjfJYG2oW2lZ42eFqXEbZMACZhJgILLTJoBPFeLn1rIsYvHnO6QP5gC2PkBtrWtZ7YqsfVn1J8ud9b9P93lpYdfCrDdczskQAK+IkDB5SvyGq773Izn5FTMKaeWv1TpJelerbuGO6PJViGA5/dI9BG5bfufs5ExfUYpnbe05M+W3ypYuE8SIAEvEKDg8gLkQFqiyQ9NJPJqpNMtvVz5ZelSpUsgbZl7IQESIAESIIE0E6DgSjNC603QcFpDib4e7XTjr4W/JvhwkEBaCNy29Sf88MMP5ddff5U//7x7/Ld582bp1KlTomkPHz4s169flwULFsjw4cPl1q1bki5dOhk7dqxUrFgx0bX79u2TPn36SHR0tMTGxkrv3raaWq3u1tQKDQ1NdO2KFSukQIEC92zhp59+kldeeUUiIiKkYMGCjq/v3r1bmjVrJh9//LG0adPG8e9Y64UXXpDixYvLuHHG7bOwx2HDhsmNGzekYcOG8tln/9a5A4cKFSqovX/77bcyZ84ctb8QWxuhqVOnSs6cORPZ2LZtW7lz547MnOm8a0Ra/MJ7SYAE3CNAweUeN8vfVW9KPbl847JTDmh7MuTxIZbnRADuE2jdurXUqlVLCSe74Eo627Jly2TatGnqs2rVKgkPD5ccOXLI77//roTP8uXLE92yd+9eCbb1PXzwwQflwoUL8vDDD8uRI0ckKChIKlWqJDt3Oq/DhYm++eYb2bJlixw8eFAJH7vg2rhxo7z33ntSpkwZeeKJJxyC69KlS0pANWnSRE6fPm0ouP7++2+pWbOmbNq0SXLlyiUtWrSQrl27Sr169ZTt2MP06dNl8uTJsnDhQnnyySclva0x9uDBgyVjxoxKlNrH//3f/8kff/yhBCgFl/vPHu8kAU8QoODyBFWLzFlnch25dvOa091WLFBRJj832SI0uE2zCUAQZc2aVQmh/fuNS5M0atRIPv30U3nkkUcSLX/8+HFp3ry5EkeuBoTXjh07JFu2bPLoo4/Ktm3bXF4Pm/LkySPVq1dPJLgQmUIkasiQIcrehBEu3AMxBYFmFOGaNWuWrFy5UsaMGaPWRrTrf//7n4wePVr9//bt26uo3uOPP57INkS3du3aJSNGjFD/DhH4zjvvKCE2cuRICi6zH0jORwJpJEDBlUaAVr+9+qTqcvPWTacY8gTnkR9a/MAEZKs/KG7uH8d+YWFhhoILYqN79+5KrCQdAwcOlOzZs6uok7OBiBiOIBE1iomJkYceekgdQV69elVFqfr37y8ZMmQwvP0///mPEkYJjxRxIY4rYW9CwYV/X7JkibreSHCNGjVKLl++LP363a1nh6PDoUOHKoEGW6pUqSJ79uxRUS37wJFh/fr1ldisVq2axMXFqSgaIlyRkZFKhDHC5eZDx9tIwEMEKLg8BNZK01b5rorKGXE1Jj07SSoVrGQlLNyrCQRcCS5EfnD89txzzyVaaf78+erob9GiRerIzWjgGPH5559XIqhIkSLqEjzDyI1CtOrVV1+VqlWrSrduxg2qzRRcEGE4VrQLLkTDIKQguHBUiuNUCLCEA7lnmTNnVhE1jJ49e6rjV+SQIapHwWXCw8cpSMBkAhRcJgO16nQtf2opRy8edbn9j+t9LI1LNbYqIu7bDQLOBNepU6ekQYMG90R+li5dqsQKRBdyuYzGsWPHVKI8cqKQjG40EPWCGPvuu+8Mv26m4EKy/+LFixMdKSI3DblryP/6+uuvpVy5cg47cGQYFRXlOHLESwI4GrVH2xAVO3PmjDz11FMqqZ6DBEjAPwhQcPmHHwLCigErB8iiiEUu99K1SlfpVDnxW2YBsXluwiMEnAmu999/X4oWLSpvvfWWY10kl+PtPkSGEootiA8ky+OYELldSMafNGmSlC9f3nHvxYsXVTI9Poh0vfnmm+ooD28jQrwheoTcLftIq+CKj4+Xn3/+WfBG4bVr19Sx4Jo1axxJ8507d1a5YMhD27Bhg2Pdjz76SIktHEM6G4xweeRR5KQkkGYCFFxpRsgJEhKYuWemjFh3N4nX2Wherrn0rtlbMqQ3zo8hURKwEzASXMi3Qq4V8pqQp2UfeMMvd+7ckiVLFse/zZ49WyWTT5w4UeVq4fhx3bp1ki9fPsc1OJ5DwjzEFY4g7flREDc4YsTR4hdffKFEl1mC6+zZs+qNykOHDil7f/nlF5Xsjr8jNwtvWOJYEMeGb7/9tlp2+/bt6h68CWkfSPbfunVrogeGgov//ZCAfxKg4PJPv2ht1aZTm6TLQtfFT6sXqS69a/WWIjnv5s9wkAAJkAAJkEAgE6DgCmTv+nBvRy4ckTcWvOGyQGrx3MWlT80+UqVwFR9ayqVJgARIgARIwPMEKLg8z9iyK8TExUj/3/rLmuNrnDLIlCGT6r/YOrS1ZTlx4yRAAiRAAoFPgIIr8H3s8x1+sf4Lmb57uks7Gj3YSN6s8iaPGH3uLRpAAiRAAiTgCQIUXJ6gyjnvITBt5zT5euPXLsncn/1+JbrQFoiDBEiABEiABAKJAAVXIHnTz/ey5NASGbRqkMTfjndpacvyLZXwypU5l5/viOallQAKi1auXFm9IWgfKPaJ6vE9evQQlF8oVaqUenMQZSAmTJgghQoVUm8o2r9mvw/9BhOWekirbYF2P97SRDV6DhIgAd8QoODyDXfLrrr19FYZ+sdQOXbpmEsGZfKVUaKrdrHalmVlhY2jRMOAAQNU70D7QMFOVE4vUKCAqvSOFjwYX331lSqNMGXKFCW4En7NCqzSsscDBw4I2h2x3U9aKPJeEkgbAQqutPHj3W4QOHX5lIzeNFqWH1me7N0okvrmo29K+nT/9pFL9iZeoBWB0qVLyx9//KEqpaPFDRpRHz16VPbt25dIVKF3IgqSrl271qngQrFSNG6uU6eOg8GVK1ekbt26UqNGDTl//ryqwo4mz6jRhZpeqL0FIYJehaj6jsruiKihGTWuQcHTXr16qa+jfhbuQb2s77//3uU9qP2F+2/evKkidvXq1RNUwo+IiFDro/9hUFCQitoVK1ZMrYF1o6OjlY01a9YUFEhFZXzU6xo0aJAq3oqBlj4QoqhThhZFmA/7RINr7BNz4D7cg0bbKKAKfogmYh3w4CABEvAuAQou7/LmagkITN05VQmv23duu+QSXihcia6wgmHkF4AE+vbtq8QWCnx+++23SpCg0GjCKBaECK7DQOseZxEuHJuhQCmKoNoHhAhEE/on4lhy9OjRSuTs2LFDCSZUnoeQgwiBOIIIwvjkk08kJCREXnvtNSVSUOEd0TUMVIhHv0WIKKN7Xn75ZSlbtqwgsoQG2Oj5iAKrKKIKUYSWO7AF/R7xdwg+rAExN378eEG7nsKFC6uekGhDhH6KsBEiC22AcB++BlGI/aJyPuZD4df9+/erY1isDRtXr16tqthj34xwBeB/QNySNgQouLRxVWAauvn0ZiW69p7b63KDQemD1BFj+0rtAxOEBXeFciE5MueQjH9nFLSyWb9+vdSuXVu+/PJLVfkdogrRGuRlIeL17LPPqv6CiEgZ5XBBQBkNCK7Q0FA1BwZ6JKJdD0QKBoQOImMQXmgPNGPGDMmUKZOKsOF4s0+fPuoa9F3s1OluWyr8G6rdv/DCC4b34EgUggtRJVSDb9SokXz++edSsmRJJaSwLwxEsLAWBBTWgJ0dO3ZUXwsLC1N2QkhhD7ARwgtzI2KWP39+dd25c+dUc2sIL9iIyBYGol+wEQKWgsuC/4Fxy35HgILL71xiPYOuxl2VbzZ9I7P2zUp283WK15F2FdvJo4UeTfZaXuCfBP6M+lNm7Jmh+m6OaDhC6paoq/oGQgC9+OKLKkKDkTCKBYHRr18/JRzQbic1OVwQKxBw9nkhuJYsWSLjxo1zCC58HYIFbXXQGge9GHE0ieiVXXDhmjZt2jgEF8QRomLO7kESP0QWRA+OOBFtunz5shJV6OmYdEBwJVwDggt2IvqXcA94mQBzIIqWcCTdJwQXrsNxJAWXf/63QKusRYCCy1r+9uvdzjswT0W7oq9HJ2tni3ItlPBCtXoOPQhEXolUQgufW7dvKaPtgmvYsGEqf6pBgwYquTup4ML/f+mll1RkCEdrzgSXUaPplAqucuXKyRtvvKEibRBaDRs2VJEpV4ILYsrZPcitwr4Q1Uo4cKwI8YiIHcaFCxcceWIpEVyIhuG4Ey8aIJcM+0PTbQishMIyoeDCywY4skWuHAcJkIBvCFBw+YY7V3VCICI6QkZvHC1rT6xNllHOzDmV6MIna1DWZK/nBb4hcPP2TZmx+67QiroalcgIu+BCxKdEiRIq7whJ9EaCKzIyUqpVq6aaTyMp3OgtRaNG0ykVXDhS7NChgxw+fFjlgEHc4fjSleDCkaKze5DIPnfuXLnvvvvU54MPPlCRLkScunTpIhcvXlTCDseUEEMpjXCBzfDhwwURNNiHHDEk4+NPZ4ILOWEQeFevXlX7ady4sW8eBq5KAhYmQMFlYef789bHbRknE7dNTJGJD+Z5UNpWbCtNyzZN0fW8yDsErsRdkYUHF8r8g/Nl/993jwmTDrvg8o5F3lsFQgsJ/EhsR44W8qiaNm2q8sI4SIAErEmAgsuaftdi16uPrVa5XX9d+CtF9lYrUk1Fu2oWrZmi63mRZwicuHxCCa2FEQvlTMwZl4sEquDCkV++fPnUcSMGBFf79u3VcSUHCZCANQlQcFnT79rsOupalIzfMl5+3f9rim1+uszTSniheCqH9wjsPrf7rtCyfa7HX0/RwiMbjZTHij+Womt1ughvDuLNSyT4o/QEyjegnAUr4evkRdpKAuYSoOAylydn8xCBLae3yMw9M2XV0VUpWiFzhsxKdLUo30IKZi+Yont4kXsE/jj2h4pm/e/Iv9XiUzJTkzJNVJkPHAlzkAAJkECgE6DgCnQPB9j+UJ0ewmvn2Z0p2ln2TNmlUalG0vjBxlL5/sopuocXJU8AxWoXHFyghBbaNaVm1ChaQ9qEthH8yUECJEACViFAwWUVTwfYPn/e97MSXscuuu7JmHDb+AHfuFRjJcAypMsQYES8s53z18878rMORx9O1aLlQ8pL6wqtBZEtDhIgARKwGgEKLqt5PID2G3MjRokufC7duJTinT2Q5wEV8YLwKpKzSIrvs+qFKEy75sQaWXt8rfqkhjWYobDpk6WelPol61sVIfdNAiRAAkLBxYdAewInLp1QNZ5+2vtTqvYSnDHYEfGqUqhKqu4N9Itj42PvCixbPTS04ElJMdqETNCyByILn4oFKgY6Lu6PBEiABJIlQMGVLCJeoAuBXZG7VLRr2eFlqTa5WuFqKuJVvWh1Cckakur7A+GG+NvxSlxBZEFsnbt6LtXbKpW3lBKxT5Z+UgpkK5Dq+3kDCZAACQQqAQquQPWshfcF0bDk0BL1Se3ImD6jhBUMUwn2jxR8RKoUDuzI1x254zgqxLFhcnWznPG058dBaKWz/Y+DBEiABEggMQEKLj4RAUvgUPQhh/A6e+WsW/vMlyWfhN0fJjhyRPSrcI7Cbs3jLzfduXNHdp3bJfuj9suff/+p3vZEoVJ3RuaMmR3HhuGFwt2ZgveQAAmQgGUIUHBZxtXW3ShazNgjXjvO7kgTiJJ5SgqOHyG+dChrgNyrnZE7ZU/kHiWw0GLn8o3LaWKAtw1rFaulxFbRXEXTNBdvJgESIAGrEKDgsoqnuU9FIC3HjUYIi+UqJvhAeKi/57z790I5CvmEOEo1QGDhs/fcXjl68agpdjyY90ElsmoXq62OXDlIgARIgARSR4CCK3W8eHWAEDDjuNEVCuSC2cWYQ5DZxFhwULBkyZhF8Iak+vOf/58cVpRmQJujqKu2D/785+9/X/s70b/dvHUzualS/HWUzIDAgtBCn0oOEiABEiAB9wlQcLnPjncGAAH7ceOGkxtUxfSYuBif7MouwuwCzC7G7ALr+s2U9SZMq/H5s+VXAsv+SZ8ufVqn5P0kQAIkQAI2AhRcfAxI4B8C125ek02nNsnWM1uV+Dp4/qAl2OQKzuUQWIhoIfrGQQIkQAIkYC4BCi5zeXK2ACJw/NJxQeRLiTAfRr/MRloidwkpd185KRtSVsreV1b9PWtQVrOX4XwkQAIkQAIJCFBw8XEggRQS2HZmmxJg+OyL2pfCu3x7Wc7MOe+KqpByUiGkglTIX4EFSX3rEq5OAiRgUQIUXBZ1PLedNgI34m/IycsnnX5QUNTbA/lXBbIXkDL5ykhoSKgSVyhjwUECJEACJOB7AhRcvvcBLQhAAqcun7pHjEXHRgt6FCb9QLwlNxCpgpgqmK3g3T+z//Nngv/PBPfkKPLrJEACJOA7AhRcvmPPlUlAEUD1dyMhhn/LHZxbCSzmWPFhIQESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhCg4NLASTSRBEiABEiABEhAbwIUXHr7j9aTAAmQAAmQAAloQICCSwMn0UQSIAESIAESIAG9CVBw6e0/Wk8CJEACJEACJKABAQouDZxEE0mABEiABEiABPQmQMGlt/9oPQmQAAmQAAmQgAYEKLg0cBJNJAESIAESIAES0JsABZfe/qP1JEACJEACJEACGhD4f8etoCrDJMv+AAAAAElFTkSuQmCC',
    imageSize: { width: 603.1620727539062, height: 516.194201965332 }
  },
  viewportPosition: '-374.8225952148438 -301.2727194213867',
  mapLegend: {
    devHighlightLegend: { name: 'device', list: [] },
    linkHighlightLegend: { name: 'link', list: [] },
    interfaceHighlightLegend: { name: 'interface', list: [] },
    intfMonitorLegend: [],
    devMonitorLegend: [],
    dataUnitMonitorLegend: []
  },
  isFirstView: false,
  isFrom6X: false,
  visualSpaceInfo: {
    visualSpaceName: 'Default Visual Space',
    visualSpaceInstanceId: '00000000-0000-0000-0000-000000000000'
  },
  changedToDefaultDataview: [],
  deviceRemovedNote: [],
  currVersion: '8.0',
  visioInfos: [
    {
      type: 'node',
      infos: [
        {
          type: 'picture',
          source:
            '/ServicesAPI/DeviceIcon/27a60d01-bd53-d200-0a42-cd8c64cd60f3/00000000-0000-0000-0000-000000000042.png',
          width: 52.8,
          height: 36.52,
          bounds: {
            left: 215.42259521484377,
            top: -15.98728057861332,
            right: 268.22259521484375,
            bottom: 20.532719421386684,
            width: 52.79999999999998,
            height: 36.52
          },
          connectId: 'default'
        },
        {
          type: 'shape',
          fill: '#CC3333',
          geometryString:
            'F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z',
          stroke: null,
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 1,
          angle: 0,
          bounds: {
            left: 255.72259521484375,
            top: -18.48728057861332,
            right: 270.72259521484375,
            bottom: -3.497535660988232,
            width: 15,
            height: 14.989744917625087
          }
        },
        {
          type: 'text',
          text: 'Host5',
          font: "normal normal 600 13px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: false,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 223.29134521484377,
            top: 25.532719421386684,
            right: 259.8538452148438,
            bottom: 41.12891082763669,
            width: 36.5625,
            height: 15.59619140625
          }
        },
        {
          type: 'text',
          text: '172.25.111.12',
          font: "normal normal 400 11px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: false,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 206.73397216796877,
            top: 47.173661804199185,
            right: 278.4112182617188,
            bottom: 60.08415985107418,
            width: 71.67724609375,
            height: 12.910498046875
          }
        },
        {
          type: 'text',
          text: 'Cisco Router',
          font: "normal normal 400 11px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: false,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 210.34871826171877,
            top: 63.173661804199185,
            right: 274.7964721679688,
            bottom: 76.08415985107419,
            width: 64.44775390625,
            height: 12.910498046875
          }
        }
      ],
      layerIndex: 8,
      key: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
      location: '241.82259521484377 2.2727194213866824',
      bounds: {
        left: 190.73397216796877,
        top: -19.48728057861332,
        right: 293.4112182617188,
        bottom: 76.12891082763669,
        width: 102.67724609375,
        height: 95.61619140625001
      }
    },
    {
      type: 'node',
      infos: [
        {
          type: 'picture',
          source:
            '/ServicesAPI/DeviceIcon/27a60d01-bd53-d200-0a42-cd8c64cd60f3/00000000-0000-0000-0000-000000000042.png',
          width: 52.8,
          height: 36.52,
          bounds: {
            left: -26.4,
            top: 200.74000000000004,
            right: 26.4,
            bottom: 237.26000000000005,
            width: 52.8,
            height: 36.52000000000001
          },
          connectId: 'default'
        },
        {
          type: 'shape',
          fill: '#CC3333',
          geometryString:
            'F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z',
          stroke: null,
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 1,
          angle: 0,
          bounds: {
            left: 13.899999999999999,
            top: 198.24000000000004,
            right: 28.9,
            bottom: 213.2297449176251,
            width: 15,
            height: 14.989744917625075
          }
        },
        {
          type: 'text',
          text: 'Host1',
          font: "normal normal 600 13px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: false,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: -18.53125,
            top: 242.26000000000005,
            right: 18.03125,
            bottom: 257.85619140625005,
            width: 36.5625,
            height: 15.59619140625
          }
        },
        {
          type: 'text',
          text: '172.25.111.1',
          font: "normal normal 400 11px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: false,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: -31.94384765625,
            top: 263.90094238281256,
            right: 33.44384765625,
            bottom: 276.81144042968754,
            width: 65.3876953125,
            height: 12.910498046875
          }
        },
        {
          type: 'text',
          text: 'Cisco Router',
          font: "normal normal 400 11px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: false,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: -31.473876953125,
            top: 279.90094238281256,
            right: 32.973876953125,
            bottom: 292.81144042968754,
            width: 64.44775390625,
            height: 12.910498046875
          }
        }
      ],
      layerIndex: 8,
      key: '15a60076-8b24-431e-ad4e-12a752b89e71',
      location: '0 219.00000000000003',
      bounds: {
        left: -47.94384765625,
        top: 197.24000000000004,
        right: 48.44384765625,
        bottom: 292.85619140625005,
        width: 96.3876953125,
        height: 95.61619140625001
      }
    },
    {
      type: 'node',
      infos: [
        {
          type: 'picture',
          source:
            '/ServicesAPI/DeviceIcon/27a60d01-bd53-d200-0a42-cd8c64cd60f3/00000000-0000-0000-0000-000000000082.png',
          width: 22.44,
          height: 13.64,
          bounds: {
            left: 274.78,
            top: 330.18,
            right: 297.21999999999997,
            bottom: 343.82,
            width: 22.439999999999998,
            height: 13.639999999999986
          },
          connectId: 'default'
        },
        {
          type: 'text',
          text: '172.25.111.0/24\nVRF: management',
          font: "normal normal 400 11px 'open sans'",
          textAlign: 'center',
          stroke: 'black',
          background: 'white',
          isMultiline: true,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 239.3681640625,
            top: 351.82,
            right: 332.6318359375,
            bottom: 377.64099609375,
            width: 93.263671875,
            height: 25.82099609375
          }
        }
      ],
      layerIndex: 8,
      key: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      location: '286 337',
      bounds: {
        left: 239.3681640625,
        top: 328.18,
        right: 332.6318359375,
        bottom: 377.64099609375,
        width: 93.263671875,
        height: 49.46099609375
      }
    },
    {
      type: 'link',
      infos: [
        {
          type: 'text',
          text: 'e0/0 172.25.111.1/24',
          font: "normal normal 600 11px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: true,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 51.447052747637414,
            top: 221.62343233542987,
            right: 146.68882812260003,
            bottom: 275.19488027875616,
            width: 108.474609375,
            height: 13.19677734375
          },
          angle: 22.420427435973675,
          connectId:
            '15a60076-8b24-431e-ad4e-12a752b89e712288c6b2-6395-4150-96f1-9c90db7eafc2',
          isFrom: true
        },
        {
          type: 'shape',
          fill: 'black',
          geometryString: 'M0 0 L248.38 102.478462',
          stroke: '#000000',
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 1,
          angle: 0,
          bounds: {
            left: 25.9,
            top: 229.39230769230772,
            right: 275.28,
            bottom: 332.8707696923077,
            width: 249.37999999999997,
            height: 103.47846199999998
          },
          isFrom: true,
          layerName: 1
        }
      ],
      layerIndex: 6,
      from: '15a60076-8b24-431e-ad4e-12a752b89e71',
      fromConnectedId:
        '15a60076-8b24-431e-ad4e-12a752b89e712288c6b2-6395-4150-96f1-9c90db7eafc2',
      to: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      toConnectedId: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      points: ['26.4 229.89230769230772', '274.78 332.37076923076916']
    },
    {
      type: 'link',
      infos: [
        {
          type: 'text',
          text: 'e0/0 172.25.111.12/24',
          font: "normal normal 600 11px 'open sans'",
          textAlign: 'start',
          stroke: 'black',
          background: 'white',
          isMultiline: true,
          isStrikethrough: false,
          isUnderline: false,
          spacingAbove: 0,
          spacingBelow: 0,
          bounds: {
            left: 269.57253913842953,
            top: 81.10296973148942,
            right: 271.5042006162329,
            bottom: 196.59656501584413,
            width: 114.75341796875,
            height: 13.19677734375
          },
          angle: 82.48153943168276,
          connectId:
            'a6df3c9b-5e27-4c9e-9879-f09f24e98fa814bfae5e-b0fe-4a19-8345-72dea9bfe29e',
          isFrom: true
        },
        {
          type: 'shape',
          fill: 'black',
          geometryString: 'M0 0 L40.867339 309.647281',
          stroke: '#000000',
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 1,
          angle: 0,
          bounds: {
            left: 243.73255537698685,
            top: 20.032719421386684,
            right: 285.59989437698687,
            bottom: 330.6800004213867,
            width: 41.867339000000015,
            height: 310.647281
          },
          isFrom: true,
          layerName: 1
        }
      ],
      layerIndex: 6,
      from: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
      fromConnectedId:
        'a6df3c9b-5e27-4c9e-9879-f09f24e98fa814bfae5e-b0fe-4a19-8345-72dea9bfe29e',
      to: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      toConnectedId: '68aa17ac-e203-442a-9498-f3c24b6eb202',
      points: [
        '244.23255537698688 20.532719421386684',
        '285.09989439727184 330.18'
      ]
    },
    {
      type: 'link',
      infos: [
        {
          type: 'path',
          color: '#339933',
          lineType: null,
          points: [
            '241.82 2.27',
            '268.43 203.88',
            '437.44 201.28',
            '286 337',
            '147.23 461.37',
            '73.62 340.18',
            '11.09 237.26'
          ],
          lineWidth: 6,
          opacity: 1,
          bounds: {
            top: 2.27,
            right: 348.2182250976562,
            bottom: 389.7069213867187,
            left: 11.09,
            width: 337.12822509765624,
            height: 387.4369213867187
          }
        },
        {
          type: 'shape',
          fill: '#339933',
          geometryString: 'F M0 0 L8 4 L0 8 L2 4z',
          stroke: null,
          strokeCap: 'butt',
          strokeDashArray: null,
          strokeJoin: 'miter',
          strokeWidth: 0,
          angle: 238.71883891600166,
          bounds: {
            left: 15.296160054086155,
            top: 266.0019680991462,
            right: 23.345555228841285,
            bottom: 233.02914235853626,
            width: 8.04939517475513,
            height: 32.97282574060995
          }
        }
      ],
      layerIndex: 6,
      from: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8',
      fromConnectedId: 'a6df3c9b-5e27-4c9e-9879-f09f24e98fa8undefined',
      to: '15a60076-8b24-431e-ad4e-12a752b89e71',
      toConnectedId: '15a60076-8b24-431e-ad4e-12a752b89e71undefined',
      points: []
    }
  ]
};

const data3 = {
        "ID": "9c295e60-6af3-1d8e-3729-4a7a699c472b",
        "changedToDefaultDataview": [],
        "deviceRemovedNote": [],
        "docType": "Page",
        "netMapType": 1,
        "width": 500,
        "heigh": 400,
        "bkColor": "white",
        "viewportPosition": "-787 -450.5",
        "readOnly": false,
        "title": "Page 1",
        "active": true,
        "description": "",
        "mapViewOption": {
          "options": [
            {
              "posName": "devHostName",
              "displayName": "Device Hostname",
              "scaleThreshold": 0.6,
              "display": true
            },
            {
              "posName": "devPos1",
              "displayName": "Device Position 1",
              "scaleThreshold": 1,
              "display": true
            },
            {
              "posName": "devPos2",
              "displayName": "Device Position 2",
              "scaleThreshold": 1,
              "display": true
            },
            {
              "posName": "devPos3",
              "displayName": "Device Position 3",
              "scaleThreshold": 1,
              "display": true
            },
            {
              "posName": "devPos4",
              "displayName": "Device Position 4",
              "scaleThreshold": 1,
              "display": true
            },
            {
              "posName": "intfPos0",
              "displayName": "Interface Name",
              "scaleThreshold": 0.6,
              "display": true
            },
            {
              "posName": "intfPos1",
              "displayName": "Link Position 1",
              "scaleThreshold": 1.2,
              "display": true
            },
            {
              "posName": "intfPos2",
              "displayName": "Link Position 2",
              "scaleThreshold": 1.2,
              "display": true
            },
            {
              "posName": "intfPos3",
              "displayName": "Link Position 3",
              "scaleThreshold": 1.4,
              "display": true
            },
            {
              "posName": "intfPos4",
              "displayName": "Link Position 4",
              "scaleThreshold": 1.4,
              "display": true
            },
            {
              "posName": "intfPos5",
              "displayName": "Link Position 5",
              "scaleThreshold": 1.6,
              "display": true
            },
            {
              "posName": "intfPos6",
              "displayName": "Link Position 6",
              "scaleThreshold": 1.6,
              "display": true
            },
            {
              "posName": "intfPos7",
              "displayName": "Link Position 7",
              "scaleThreshold": 1.8,
              "display": true
            },
            {
              "posName": "intfPos8",
              "displayName": "Link Position 8",
              "scaleThreshold": 1.8,
              "display": true
            },
            {
              "posName": "devNote",
              "displayName": "Device Note",
              "scaleThreshold": 0.8,
              "display": true
            },
            {
              "posName": "overflowPos",
              "displayName": "Overflow Position",
              "scaleThreshold": 0.6,
              "display": true
            },
            {
              "posName": "otherDrawShapes",
              "displayName": "Other Draw Shapes",
              "scaleThreshold": 0.6,
              "display": true
            }
          ],
          "step": 0.2,
          "isNeatUp": false
        },
        "mapAutoLinkOptionDict": {
          "00000000-0000-0000-0000-000000000000": [
            "L3_Topo_Type"
          ]
        },
        "mapAutoLinkOptionExcluedeMip": true,
        "l2Style": false,
        "layoutStyle": 1,
        "topologyType": 1,
        "nodeDataArray": [
          {
            "ID": "f1eb8eaf-7c11-4ab5-971a-c92fe16aa24d",
            "devCategory": 1001,
            "devType": 2001,
            "dataViewData": {
              "devGraphicInfo": {
                "font": {
                  "faceName": "Calibri",
                  "fontSize": "9"
                },
                "imageList": [
                  {
                    "name": "00000000-0000-0000-0000-00000000002e.png",
                    "status": 1,
                    "size": "236 145"
                  },
                  {
                    "name": "00000000-0000-0000-0000-00000000002f.png",
                    "status": 256,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000030.png",
                    "status": 512,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000032.png",
                    "status": 64,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000031.png",
                    "status": 1024,
                    "size": "240 150"
                  }
                ]
              },
              "dataViewInfo": {
                "dataViewTaskInfoId": "00000000-0000-0000-0000-000000000000",
                "dataViewGroupId": "00000000-0000-0000-0000-000000000000",
                "dataViewType": "dvDefault",
                "name": "Default Data View",
                "dataViewDefinitionId": "00000000-0000-0000-0000-000000000000",
                "time": "2019-07-23T17:19:40.589Z"
              },
              "devPosList": [
                {
                  "posName": "devPos1",
                  "posInfo": {
                    "displayInfo": "172.24.101.12",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "mgmtIP",
                        "value": "172.24.101.12",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Management IP",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                },
                {
                  "posName": "devPos2",
                  "posInfo": {
                    "displayInfo": "Cisco IOS Switch",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "subTypeName",
                        "value": "Cisco IOS Switch",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Device Type",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                }
              ],
              "intfInfoList": [],
              "intfCount": 0,
              "highlightDataList": []
            },
            "operateInfo": {
              "opUser": "AutoUser_Bvt_Fvt",
              "opUserId": "84c92a6f-35d8-4ba3-848a-e2679eb622a2",
              "opTime": "2019-07-23T17:19:40.601Z",
              "operateUserName": "AutoUser_Bvt_Fvt",
              "operateTime": "2019-07-23T17:19:40.601Z"
            },
            "key": "e8fae82f-5b06-43b8-aa14-2f121c057489",
            "hostName": "BJ_Dis_SW2",
            "category": "NetworkDevice",
            "templateInfo": {
              "templateId": "00000000-0000-0000-0000-000000000000"
            },
            "devNodeData": {
              "category": "NetworkDevice",
              "isRealDev": true,
              "nodeIdentify": {
                "nbPathSchema": "Legacy",
                "nbPathValue": "e8fae82f-5b06-43b8-aa14-2f121c057489"
              },
              "id": "e8fae82f-5b06-43b8-aa14-2f121c057489",
              "visualSpaceInfo": {
                "visualSpaceName": "Default Visual Space",
                "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
              },
              "isGroup": false,
              "name": null
            },
            "noPrivilege": false,
            "location": "-122 -154.5",
            "layerName": "DeviceLayer",
            "eventHandle": null,
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "category": "Media",
            "hostName": [
              "172.24.101.0/24",
              "HSRP: 100(172.24.101.1)"
            ],
            "key": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "devType": "Lan",
            "devCategory": "Lan",
            "status": 1,
            "topoType": "L3_Topo_Type",
            "dataViewData": {
              "devGraphicInfo": {
                "imageList": [
                  {
                    "name": "00000000-0000-0000-0000-000000000082.png",
                    "size": "102 62",
                    "scale": 0.22,
                    "status": 1
                  }
                ]
              }
            },
            "location": "60 48",
            "eventHandle": null,
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "ID": "c03ee419-9e70-4241-8435-ecd135c820dc",
            "devCategory": 1001,
            "devType": 3333,
            "dataViewData": {
              "devGraphicInfo": {
                "font": {
                  "faceName": "Calibri",
                  "fontSize": "9"
                },
                "imageList": [
                  {
                    "name": "00000000-0000-0000-0000-000000000001.png",
                    "status": 1,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000002.png",
                    "status": 256,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000003.png",
                    "status": 512,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000005.png",
                    "status": 64,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000004.png",
                    "status": 1024,
                    "size": "240 150"
                  }
                ]
              },
              "dataViewInfo": {
                "dataViewTaskInfoId": "00000000-0000-0000-0000-000000000000",
                "dataViewGroupId": "00000000-0000-0000-0000-000000000000",
                "dataViewType": "dvDefault",
                "name": "Default Data View",
                "dataViewDefinitionId": "00000000-0000-0000-0000-000000000000",
                "time": "2019-07-23T17:19:54.274Z"
              },
              "devPosList": [
                {
                  "posName": "devPos1",
                  "posInfo": {
                    "displayInfo": "172.24.101.31",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "mgmtIP",
                        "value": "172.24.101.31",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Management IP",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                },
                {
                  "posName": "devPos2",
                  "posInfo": {
                    "displayInfo": "3Com Switch",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "subTypeName",
                        "value": "3Com Switch",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Device Type",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                }
              ],
              "intfInfoList": [
                {
                  "intfGraphicInfo": {
                    "colorList": [
                      {
                        "color": 9687377,
                        "status": 256
                      },
                      {
                        "color": 14965321,
                        "status": 512
                      },
                      {
                        "color": 16565862,
                        "status": 1024
                      }
                    ]
                  },
                  "intfPosList": [
                    {
                      "posName": "intfPos1",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.routingProtocol",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Routing Protocol",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos3",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.multicastMode",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Multicasting Mode",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos4",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.mplsVrf",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "MPLS VRF",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos5",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.inAclName",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Inbound ACL",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos6",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.outAclName",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Outbound ACL",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos7",
                      "posInfo": {
                        "displayInfo": "Vlan-interface10 Interface ",
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.descr",
                            "value": "Vlan-interface10 Interface",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Description",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    }
                  ],
                  "intf": {
                    "intfKeyObj": {
                      "schema": "ipIntfs._id",
                      "value": "0a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8"
                    },
                    "intfDisplaySchemaObj": {
                      "schema": "ipIntfs.name",
                      "value": "vlan10 172.24.101.31/24"
                    },
                    "isIpUnnumberedIntf": false,
                    "devId": null,
                    "intfNodeData": {
                      "isRealIntf": true,
                      "nodeIdentify": {
                        "nbPathSchema": "Legacy.ipIntfs",
                        "nbPathValue": "0a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8"
                      },
                      "id": "0a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8",
                      "visualSpaceInfo": {
                        "visualSpaceName": "Default Visual Space",
                        "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                      }
                    },
                    "intfExtendData": {
                      "intfs.isChannel": false,
                      "intfs.isTunnel": false,
                      "intfs.isTunnelMultipoint": false
                    }
                  }
                }
              ],
              "intfCount": 0,
              "highlightDataList": []
            },
            "operateInfo": {
              "opUser": "AutoUser_Bvt_Fvt",
              "opUserId": "84c92a6f-35d8-4ba3-848a-e2679eb622a2",
              "opTime": "2019-07-23T17:19:54.299Z",
              "operateUserName": "AutoUser_Bvt_Fvt",
              "operateTime": "2019-07-23T17:19:54.299Z"
            },
            "key": "799e215b-7eec-4662-952f-7632b594d608",
            "hostName": "11",
            "category": "NetworkDevice",
            "templateInfo": {
              "templateId": "00000000-0000-0000-0000-000000000000"
            },
            "devNodeData": {
              "category": "NetworkDevice",
              "isRealDev": true,
              "nodeIdentify": {
                "nbPathSchema": "Legacy",
                "nbPathValue": "799e215b-7eec-4662-952f-7632b594d608"
              },
              "id": "799e215b-7eec-4662-952f-7632b594d608",
              "visualSpaceInfo": {
                "visualSpaceName": "Default Visual Space",
                "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
              },
              "role": "",
              "isGroup": false,
              "group": "",
              "name": null
            },
            "noPrivilege": false,
            "location": "266 -92",
            "eventHandle": null,
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "ID": "2af62087-7bb7-4da1-bcb6-c82160aad83b",
            "devCategory": 1001,
            "devType": 2001,
            "dataViewData": {
              "devGraphicInfo": {
                "font": {
                  "faceName": "Calibri",
                  "fontSize": "9"
                },
                "imageList": [
                  {
                    "name": "00000000-0000-0000-0000-00000000002e.png",
                    "status": 1,
                    "size": "236 145"
                  },
                  {
                    "name": "00000000-0000-0000-0000-00000000002f.png",
                    "status": 256,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000030.png",
                    "status": 512,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000032.png",
                    "status": 64,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000031.png",
                    "status": 1024,
                    "size": "240 150"
                  }
                ]
              },
              "dataViewInfo": {
                "dataViewTaskInfoId": "00000000-0000-0000-0000-000000000000",
                "dataViewGroupId": "00000000-0000-0000-0000-000000000000",
                "dataViewType": "dvDefault",
                "name": "Default Data View",
                "dataViewDefinitionId": "00000000-0000-0000-0000-000000000000",
                "time": "2019-07-23T17:19:47.49Z"
              },
              "devPosList": [
                {
                  "posName": "devPos1",
                  "posInfo": {
                    "displayInfo": "172.24.101.24",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "mgmtIP",
                        "value": "172.24.101.24",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Management IP",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                },
                {
                  "posName": "devPos2",
                  "posInfo": {
                    "displayInfo": "Cisco IOS Switch",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "subTypeName",
                        "value": "Cisco IOS Switch",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Device Type",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                }
              ],
              "intfInfoList": [
                {
                  "intfGraphicInfo": {
                    "colorList": [
                      {
                        "color": 9687377,
                        "status": 256
                      },
                      {
                        "color": 14965321,
                        "status": 512
                      },
                      {
                        "color": 16565862,
                        "status": 1024
                      }
                    ]
                  },
                  "intfPosList": [
                    {
                      "posName": "intfPos1",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.routingProtocol",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Routing Protocol",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos3",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.multicastMode",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Multicasting Mode",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos4",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.mplsVrf",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "MPLS VRF",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos5",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.inAclName",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Inbound ACL",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos6",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.outAclName",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Outbound ACL",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos7",
                      "posInfo": {
                        "displayInfo": "For MGMT ",
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.descr",
                            "value": "For MGMT",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Description",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    }
                  ],
                  "intf": {
                    "intfKeyObj": {
                      "schema": "ipIntfs._id",
                      "value": "c1304757-d18a-4ae1-99b1-20db8b904b9e"
                    },
                    "intfDisplaySchemaObj": {
                      "schema": "ipIntfs.name",
                      "value": "vlan10 172.24.101.24/24"
                    },
                    "isIpUnnumberedIntf": false,
                    "devId": null,
                    "intfNodeData": {
                      "isRealIntf": true,
                      "nodeIdentify": {
                        "nbPathSchema": "Legacy.ipIntfs",
                        "nbPathValue": "c1304757-d18a-4ae1-99b1-20db8b904b9e"
                      },
                      "id": "c1304757-d18a-4ae1-99b1-20db8b904b9e",
                      "visualSpaceInfo": {
                        "visualSpaceName": "Default Visual Space",
                        "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                      }
                    },
                    "intfExtendData": {
                      "intfs.isChannel": false,
                      "intfs.isTunnel": false,
                      "intfs.isTunnelMultipoint": false
                    }
                  }
                }
              ],
              "intfCount": 0,
              "highlightDataList": []
            },
            "operateInfo": {
              "opUser": "AutoUser_Bvt_Fvt",
              "opUserId": "84c92a6f-35d8-4ba3-848a-e2679eb622a2",
              "opTime": "2019-07-23T17:19:47.512Z",
              "operateUserName": "AutoUser_Bvt_Fvt",
              "operateTime": "2019-07-23T17:19:47.512Z"
            },
            "key": "df07648d-7a7a-44be-8101-ce8dc47d47a3",
            "hostName": "BJ_Acc_Sw4",
            "category": "NetworkDevice",
            "templateInfo": {
              "templateId": "00000000-0000-0000-0000-000000000000"
            },
            "devNodeData": {
              "category": "NetworkDevice",
              "isRealDev": true,
              "nodeIdentify": {
                "nbPathSchema": "Legacy",
                "nbPathValue": "df07648d-7a7a-44be-8101-ce8dc47d47a3"
              },
              "id": "df07648d-7a7a-44be-8101-ce8dc47d47a3",
              "visualSpaceInfo": {
                "visualSpaceName": "Default Visual Space",
                "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
              },
              "role": "",
              "isGroup": false,
              "group": "",
              "name": null
            },
            "noPrivilege": false,
            "location": "52 318",
            "eventHandle": null,
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "ID": "492a30f9-bffe-42a7-a454-b0adf8620c01",
            "devCategory": 1001,
            "devType": 2001,
            "dataViewData": {
              "devGraphicInfo": {
                "font": {
                  "faceName": "Calibri",
                  "fontSize": "9"
                },
                "imageList": [
                  {
                    "name": "00000000-0000-0000-0000-00000000002e.png",
                    "status": 1,
                    "size": "236 145"
                  },
                  {
                    "name": "00000000-0000-0000-0000-00000000002f.png",
                    "status": 256,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000030.png",
                    "status": 512,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000032.png",
                    "status": 64,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000031.png",
                    "status": 1024,
                    "size": "240 150"
                  }
                ]
              },
              "dataViewInfo": {
                "dataViewTaskInfoId": "00000000-0000-0000-0000-000000000000",
                "dataViewGroupId": "00000000-0000-0000-0000-000000000000",
                "dataViewType": "dvDefault",
                "name": "Default Data View",
                "dataViewDefinitionId": "00000000-0000-0000-0000-000000000000",
                "time": "2019-07-23T17:19:46.909Z"
              },
              "devPosList": [
                {
                  "posName": "devPos1",
                  "posInfo": {
                    "displayInfo": "172.24.101.21",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "mgmtIP",
                        "value": "172.24.101.21",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Management IP",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                },
                {
                  "posName": "devPos2",
                  "posInfo": {
                    "displayInfo": "Cisco IOS Switch",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "subTypeName",
                        "value": "Cisco IOS Switch",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Device Type",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                }
              ],
              "intfInfoList": [
                {
                  "intfGraphicInfo": {
                    "colorList": [
                      {
                        "color": 9687377,
                        "status": 256
                      },
                      {
                        "color": 14965321,
                        "status": 512
                      },
                      {
                        "color": 16565862,
                        "status": 1024
                      }
                    ]
                  },
                  "intfPosList": [
                    {
                      "posName": "intfPos1",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.routingProtocol",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Routing Protocol",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos3",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.multicastMode",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Multicasting Mode",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos4",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.mplsVrf",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "MPLS VRF",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos5",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.inAclName",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Inbound ACL",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos6",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.outAclName",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Outbound ACL",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos7",
                      "posInfo": {
                        "displayInfo": "MGMT Vlan ",
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.descr",
                            "value": "MGMT Vlan",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Description",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    }
                  ],
                  "intf": {
                    "intfKeyObj": {
                      "schema": "ipIntfs._id",
                      "value": "6d3666b7-6ed1-48fc-8fd2-ffc50934a93b"
                    },
                    "intfDisplaySchemaObj": {
                      "schema": "ipIntfs.name",
                      "value": "vlan10 172.24.101.21/24"
                    },
                    "isIpUnnumberedIntf": false,
                    "devId": null,
                    "intfNodeData": {
                      "isRealIntf": true,
                      "nodeIdentify": {
                        "nbPathSchema": "Legacy.ipIntfs",
                        "nbPathValue": "6d3666b7-6ed1-48fc-8fd2-ffc50934a93b"
                      },
                      "id": "6d3666b7-6ed1-48fc-8fd2-ffc50934a93b",
                      "visualSpaceInfo": {
                        "visualSpaceName": "Default Visual Space",
                        "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                      }
                    },
                    "intfExtendData": {
                      "intfs.isChannel": false,
                      "intfs.isTunnel": false,
                      "intfs.isTunnelMultipoint": false
                    }
                  }
                }
              ],
              "intfCount": 0,
              "highlightDataList": []
            },
            "operateInfo": {
              "opUser": "AutoUser_Bvt_Fvt",
              "opUserId": "84c92a6f-35d8-4ba3-848a-e2679eb622a2",
              "opTime": "2019-07-23T17:19:46.911Z",
              "operateUserName": "AutoUser_Bvt_Fvt",
              "operateTime": "2019-07-23T17:19:46.911Z"
            },
            "key": "192d88e1-1e09-430a-a8d1-54cf064ba7e3",
            "hostName": "BJ_Acc_SW1",
            "category": "NetworkDevice",
            "templateInfo": {
              "templateId": "00000000-0000-0000-0000-000000000000"
            },
            "devNodeData": {
              "category": "NetworkDevice",
              "isRealDev": true,
              "nodeIdentify": {
                "nbPathSchema": "Legacy",
                "nbPathValue": "192d88e1-1e09-430a-a8d1-54cf064ba7e3"
              },
              "id": "192d88e1-1e09-430a-a8d1-54cf064ba7e3",
              "visualSpaceInfo": {
                "visualSpaceName": "Default Visual Space",
                "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
              },
              "role": "",
              "isGroup": false,
              "group": "",
              "name": null
            },
            "noPrivilege": false,
            "location": "-196 180",
            "eventHandle": null,
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "ID": "1f608c33-8f05-4a59-aadc-bcbe7f3841db",
            "devCategory": 1001,
            "devType": 2001,
            "dataViewData": {
              "devGraphicInfo": {
                "font": {
                  "faceName": "Calibri",
                  "fontSize": "9"
                },
                "imageList": [
                  {
                    "name": "00000000-0000-0000-0000-00000000002e.png",
                    "status": 1,
                    "size": "236 145"
                  },
                  {
                    "name": "00000000-0000-0000-0000-00000000002f.png",
                    "status": 256,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000030.png",
                    "status": 512,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000032.png",
                    "status": 64,
                    "size": "240 150"
                  },
                  {
                    "name": "00000000-0000-0000-0000-000000000031.png",
                    "status": 1024,
                    "size": "240 150"
                  }
                ]
              },
              "dataViewInfo": {
                "dataViewTaskInfoId": "00000000-0000-0000-0000-000000000000",
                "dataViewGroupId": "00000000-0000-0000-0000-000000000000",
                "dataViewType": "dvDefault",
                "name": "Default Data View",
                "dataViewDefinitionId": "00000000-0000-0000-0000-000000000000",
                "time": "2019-07-23T17:19:54.132Z"
              },
              "devPosList": [
                {
                  "posName": "devPos1",
                  "posInfo": {
                    "displayInfo": "172.24.101.22",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "mgmtIP",
                        "value": "172.24.101.22",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Management IP",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                },
                {
                  "posName": "devPos2",
                  "posInfo": {
                    "displayInfo": "Cisco IOS Switch",
                    "isLock": false,
                    "displayTemplate": "",
                    "dataUnitList": [
                      {
                        "uId": "subTypeName",
                        "value": "Cisco IOS Switch",
                        "valueType": "string",
                        "type": "uSrcGDR",
                        "displayName": "Device Type",
                        "generateTime": "0001-01-01T00:00:00",
                        "intfTmpl": null,
                        "definedDrillDownAction": false
                      }
                    ],
                    "isCustomize": false
                  }
                }
              ],
              "intfInfoList": [
                {
                  "intfGraphicInfo": {
                    "colorList": [
                      {
                        "color": 9687377,
                        "status": 256
                      },
                      {
                        "color": 14965321,
                        "status": 512
                      },
                      {
                        "color": 16565862,
                        "status": 1024
                      }
                    ]
                  },
                  "intfPosList": [
                    {
                      "posName": "intfPos1",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.routingProtocol",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Routing Protocol",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos3",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.multicastMode",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Multicasting Mode",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos4",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.mplsVrf",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "MPLS VRF",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos5",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.inAclName",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Inbound ACL",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos6",
                      "posInfo": {
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.outAclName",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Outbound ACL",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    },
                    {
                      "posName": "intfPos7",
                      "posInfo": {
                        "displayInfo": "MGMT ",
                        "isLock": false,
                        "displayTemplate": "",
                        "dataUnitList": [
                          {
                            "uId": "intfs.descr",
                            "value": "MGMT",
                            "valueType": "string",
                            "type": "uSrcGDR",
                            "displayName": "Description",
                            "generateTime": "0001-01-01T00:00:00",
                            "intfTmpl": null,
                            "definedDrillDownAction": false
                          }
                        ],
                        "isCustomize": false
                      }
                    }
                  ],
                  "intf": {
                    "intfKeyObj": {
                      "schema": "ipIntfs._id",
                      "value": "7b768a95-1148-4f12-9049-ee77685148a6"
                    },
                    "intfDisplaySchemaObj": {
                      "schema": "ipIntfs.name",
                      "value": "vlan10 172.24.101.22/24"
                    },
                    "isIpUnnumberedIntf": false,
                    "devId": null,
                    "intfNodeData": {
                      "isRealIntf": true,
                      "nodeIdentify": {
                        "nbPathSchema": "Legacy.ipIntfs",
                        "nbPathValue": "7b768a95-1148-4f12-9049-ee77685148a6"
                      },
                      "id": "7b768a95-1148-4f12-9049-ee77685148a6",
                      "visualSpaceInfo": {
                        "visualSpaceName": "Default Visual Space",
                        "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                      }
                    },
                    "intfExtendData": {
                      "intfs.isChannel": false,
                      "intfs.isTunnel": false,
                      "intfs.isTunnelMultipoint": false
                    }
                  }
                }
              ],
              "intfCount": 0,
              "highlightDataList": []
            },
            "operateInfo": {
              "opUser": "AutoUser_Bvt_Fvt",
              "opUserId": "84c92a6f-35d8-4ba3-848a-e2679eb622a2",
              "opTime": "2019-07-23T17:19:54.511Z",
              "operateUserName": "AutoUser_Bvt_Fvt",
              "operateTime": "2019-07-23T17:19:54.511Z"
            },
            "key": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a21",
            "hostName": "BJ_Acc_SW2",
            "category": "NetworkDevice",
            "templateInfo": {
              "templateId": "00000000-0000-0000-0000-000000000000"
            },
            "devNodeData": {
              "category": "NetworkDevice",
              "isRealDev": true,
              "nodeIdentify": {
                "nbPathSchema": "Legacy",
                "nbPathValue": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a21"
              },
              "id": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a21",
              "visualSpaceInfo": {
                "visualSpaceName": "Default Visual Space",
                "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
              },
              "role": "",
              "isGroup": false,
              "group": "",
              "name": null
            },
            "noPrivilege": false,
            "location": "273 178",
            "eventHandle": null,
            "compModels": {
              "isEditableModel": true
            }
          }
        ],
        "linkDataArray": [
          {
            "category": "VirtualTopoLink",
            "from": "e8fae82f-5b06-43b8-aa14-2f121c057489",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "topoType": "L3_Topo_Type",
            "isP2P": false,
            "curve": 0,
            "viewInfo": {},
            "lineColor": "black",
            "lineWidth": 1,
            "visible": true,
            "intfSrc": {
              "dataViewInfo": {
                "dataViewType": "dvDefault",
                "time": "2019-12-19T14:36:41.2081247-05:00"
              },
              "intfInfo": {
                "intfGraphicInfo": {
                  "colorList": [
                    {
                      "color": 9687377,
                      "status": 256
                    },
                    {
                      "color": 14965321,
                      "status": 512
                    },
                    {
                      "color": 16565862,
                      "status": 1024
                    }
                  ]
                },
                "intfPosList": [
                  {
                    "posName": "intfPos1",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.routingProtocol",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Routing Protocol",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos3",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.multicastMode",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Multicasting Mode",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos4",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.mplsVrf",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "MPLS VRF",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos5",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.inAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Inbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos6",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.outAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Outbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos7",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.descr",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Description",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  }
                ],
                "intf": {
                  "intfKeyObj": {
                    "schema": "ipIntfs._id",
                    "value": "1750e3cd-4d55-4a24-9522-af86c03ac6ec"
                  },
                  "intfDisplaySchemaObj": {
                    "schema": "ipIntfs.name",
                    "value": "vlan10 172.24.101.12/24"
                  },
                  "isIpUnnumberedIntf": false,
                  "devId": null,
                  "intfNodeData": {
                    "isRealIntf": true,
                    "nodeIdentify": {
                      "nbPathSchema": "Legacy.ipIntfs",
                      "nbPathValue": "1750e3cd-4d55-4a24-9522-af86c03ac6ec"
                    },
                    "id": "1750e3cd-4d55-4a24-9522-af86c03ac6ec",
                    "visualSpaceInfo": {
                      "visualSpaceName": "Default Visual Space",
                      "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                    }
                  },
                  "intfExtendData": {
                    "intfs.isChannel": false,
                    "intfs.isTunnel": false,
                    "intfs.isTunnelMultipoint": false
                  }
                },
                "intfHighlightList": null
              }
            },
            "intfDest": null,
            "fromPort": "1750e3cd-4d55-4a24-9522-af86c03ac6ec",
            "toPort": "",
            "devIdSrc": "e8fae82f-5b06-43b8-aa14-2f121c057489",
            "devIdDest": null,
            "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "mediaInfo": {
              "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
              "mediaName": "172.24.101.0/24",
              "mediaType": "Lan",
              "topoType": "L3_Topo_Type",
              "neat": false,
              "vrf": "",
              "hsrp": "HSRP: 100(172.24.101.1)"
            },
            "policyStyle": {
              "src": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              },
              "dest": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              }
            },
            "isL2LinkStyle": false,
            "points": [
              "-107.66469135802468 -138.54999999999998",
              "53.87041975308641 41.18"
            ],
            "pointsL2": null,
            "eventHandle": null,
            "key": "fb8e4985-db9e-acc5-bb84-a0d0ddb16414",
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "category": "VirtualTopoLink",
            "from": "799e215b-7eec-4662-952f-7632b594d608",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "topoType": "L3_Topo_Type",
            "isP2P": false,
            "curve": 0,
            "viewInfo": {},
            "lineColor": "black",
            "lineWidth": 1,
            "visible": true,
            "intfSrc": {
              "dataViewInfo": {
                "dataViewType": "dvDefault",
                "time": "2019-12-19T14:36:41.2081247-05:00"
              },
              "intfInfo": {
                "intfGraphicInfo": {
                  "colorList": [
                    {
                      "color": 9687377,
                      "status": 256
                    },
                    {
                      "color": 14965321,
                      "status": 512
                    },
                    {
                      "color": 16565862,
                      "status": 1024
                    }
                  ]
                },
                "intfPosList": [
                  {
                    "posName": "intfPos1",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.routingProtocol",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Routing Protocol",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos3",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.multicastMode",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Multicasting Mode",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos4",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.mplsVrf",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "MPLS VRF",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos5",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.inAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Inbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos6",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.outAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Outbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos7",
                    "posInfo": {
                      "displayInfo": "Vlan-interface10 Interface",
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.descr",
                          "value": "Vlan-interface10 Interface",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Description",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  }
                ],
                "intf": {
                  "intfKeyObj": {
                    "schema": "ipIntfs._id",
                    "value": "0a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8"
                  },
                  "intfDisplaySchemaObj": {
                    "schema": "ipIntfs.name",
                    "value": "vlan10 172.24.101.31/24"
                  },
                  "isIpUnnumberedIntf": false,
                  "devId": null,
                  "intfNodeData": {
                    "isRealIntf": true,
                    "nodeIdentify": {
                      "nbPathSchema": "Legacy.ipIntfs",
                      "nbPathValue": "0a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8"
                    },
                    "id": "0a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8",
                    "visualSpaceInfo": {
                      "visualSpaceName": "Default Visual Space",
                      "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                    }
                  },
                  "intfExtendData": {
                    "intfs.isChannel": false,
                    "intfs.isTunnel": false,
                    "intfs.isTunnelMultipoint": false
                  }
                },
                "intfHighlightList": null
              }
            },
            "intfDest": null,
            "fromPort": "0a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8",
            "toPort": "",
            "devIdSrc": "799e215b-7eec-4662-952f-7632b594d608",
            "devIdDest": null,
            "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "mediaInfo": {
              "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
              "mediaName": "172.24.101.0/24",
              "mediaType": "Lan",
              "topoType": "L3_Topo_Type",
              "neat": false,
              "vrf": "",
              "hsrp": "HSRP: 100(172.24.101.1)"
            },
            "policyStyle": {
              "src": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              },
              "dest": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              }
            },
            "isL2LinkStyle": false,
            "points": [
              "241.72142857142856 -75.5",
              "70.03514285714284 41.18"
            ],
            "eventHandle": null,
            "key": "6b9e5964-2677-89c7-74ce-93bdb381929f",
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "category": "VirtualTopoLink",
            "from": "df07648d-7a7a-44be-8101-ce8dc47d47a3",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "topoType": "L3_Topo_Type",
            "isP2P": false,
            "curve": 0,
            "viewInfo": {},
            "lineColor": "black",
            "lineWidth": 1,
            "visible": true,
            "intfSrc": {
              "dataViewInfo": {
                "dataViewType": "dvDefault",
                "time": "2019-12-19T14:36:41.2081247-05:00"
              },
              "intfInfo": {
                "intfGraphicInfo": {
                  "colorList": [
                    {
                      "color": 9687377,
                      "status": 256
                    },
                    {
                      "color": 14965321,
                      "status": 512
                    },
                    {
                      "color": 16565862,
                      "status": 1024
                    }
                  ]
                },
                "intfPosList": [
                  {
                    "posName": "intfPos1",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.routingProtocol",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Routing Protocol",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos3",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.multicastMode",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Multicasting Mode",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos4",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.mplsVrf",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "MPLS VRF",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos5",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.inAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Inbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos6",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.outAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Outbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos7",
                    "posInfo": {
                      "displayInfo": "For MGMT",
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.descr",
                          "value": "For MGMT",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Description",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  }
                ],
                "intf": {
                  "intfKeyObj": {
                    "schema": "ipIntfs._id",
                    "value": "c1304757-d18a-4ae1-99b1-20db8b904b9e"
                  },
                  "intfDisplaySchemaObj": {
                    "schema": "ipIntfs.name",
                    "value": "vlan10 172.24.101.24/24"
                  },
                  "isIpUnnumberedIntf": false,
                  "devId": null,
                  "intfNodeData": {
                    "isRealIntf": true,
                    "nodeIdentify": {
                      "nbPathSchema": "Legacy.ipIntfs",
                      "nbPathValue": "c1304757-d18a-4ae1-99b1-20db8b904b9e"
                    },
                    "id": "c1304757-d18a-4ae1-99b1-20db8b904b9e",
                    "visualSpaceInfo": {
                      "visualSpaceName": "Default Visual Space",
                      "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                    }
                  },
                  "intfExtendData": {
                    "intfs.isChannel": false,
                    "intfs.isTunnel": false,
                    "intfs.isTunnelMultipoint": false
                  }
                },
                "intfHighlightList": null
              }
            },
            "intfDest": null,
            "fromPort": "c1304757-d18a-4ae1-99b1-20db8b904b9e",
            "toPort": "",
            "devIdSrc": "df07648d-7a7a-44be-8101-ce8dc47d47a3",
            "devIdDest": null,
            "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "mediaInfo": {
              "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
              "mediaName": "172.24.101.0/24",
              "mediaType": "Lan",
              "topoType": "L3_Topo_Type",
              "neat": false,
              "vrf": "",
              "hsrp": "HSRP: 100(172.24.101.1)"
            },
            "policyStyle": {
              "src": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              },
              "dest": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              }
            },
            "isL2LinkStyle": false,
            "points": [
              "52.47259259259259 302.05",
              "59.797925925925924 54.82"
            ],
            "eventHandle": null,
            "key": "d06d80ac-9885-cb1b-926d-6cfef09194eb",
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "category": "VirtualTopoLink",
            "from": "192d88e1-1e09-430a-a8d1-54cf064ba7e3",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "topoType": "L3_Topo_Type",
            "isP2P": false,
            "curve": 0,
            "viewInfo": {},
            "lineColor": "black",
            "lineWidth": 1,
            "visible": true,
            "intfSrc": {
              "dataViewInfo": {
                "dataViewType": "dvDefault",
                "time": "2019-12-19T14:36:41.2081247-05:00"
              },
              "intfInfo": {
                "intfGraphicInfo": {
                  "colorList": [
                    {
                      "color": 9687377,
                      "status": 256
                    },
                    {
                      "color": 14965321,
                      "status": 512
                    },
                    {
                      "color": 16565862,
                      "status": 1024
                    }
                  ]
                },
                "intfPosList": [
                  {
                    "posName": "intfPos1",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.routingProtocol",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Routing Protocol",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos3",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.multicastMode",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Multicasting Mode",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos4",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.mplsVrf",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "MPLS VRF",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos5",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.inAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Inbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos6",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.outAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Outbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos7",
                    "posInfo": {
                      "displayInfo": "MGMT Vlan",
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.descr",
                          "value": "MGMT Vlan",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Description",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  }
                ],
                "intf": {
                  "intfKeyObj": {
                    "schema": "ipIntfs._id",
                    "value": "6d3666b7-6ed1-48fc-8fd2-ffc50934a93b"
                  },
                  "intfDisplaySchemaObj": {
                    "schema": "ipIntfs.name",
                    "value": "vlan10 172.24.101.21/24"
                  },
                  "isIpUnnumberedIntf": false,
                  "devId": null,
                  "intfNodeData": {
                    "isRealIntf": true,
                    "nodeIdentify": {
                      "nbPathSchema": "Legacy.ipIntfs",
                      "nbPathValue": "6d3666b7-6ed1-48fc-8fd2-ffc50934a93b"
                    },
                    "id": "6d3666b7-6ed1-48fc-8fd2-ffc50934a93b",
                    "visualSpaceInfo": {
                      "visualSpaceName": "Default Visual Space",
                      "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                    }
                  },
                  "intfExtendData": {
                    "intfs.isChannel": false,
                    "intfs.isTunnel": false,
                    "intfs.isTunnelMultipoint": false
                  }
                },
                "intfHighlightList": null
              }
            },
            "intfDest": null,
            "fromPort": "6d3666b7-6ed1-48fc-8fd2-ffc50934a93b",
            "toPort": "",
            "devIdSrc": "192d88e1-1e09-430a-a8d1-54cf064ba7e3",
            "devIdDest": null,
            "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "mediaInfo": {
              "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
              "mediaName": "172.24.101.0/24",
              "mediaType": "Lan",
              "topoType": "L3_Topo_Type",
              "neat": false,
              "vrf": "",
              "hsrp": "HSRP: 100(172.24.101.1)"
            },
            "policyStyle": {
              "src": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              },
              "dest": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              }
            },
            "isL2LinkStyle": false,
            "points": [
              "-170.04000000000002 166.614375",
              "48.78 53.785312499999996"
            ],
            "eventHandle": null,
            "key": "d96401dd-12bd-fab5-281c-5ae22ff3325e",
            "compModels": {
              "isEditableModel": true
            }
          },
          {
            "category": "VirtualTopoLink",
            "from": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a21",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "topoType": "L3_Topo_Type",
            "isP2P": false,
            "curve": 0,
            "viewInfo": {},
            "lineColor": "black",
            "lineWidth": 1,
            "visible": true,
            "intfSrc": {
              "dataViewInfo": {
                "dataViewType": "dvDefault",
                "time": "2019-12-19T14:36:41.2081247-05:00"
              },
              "intfInfo": {
                "intfGraphicInfo": {
                  "colorList": [
                    {
                      "color": 9687377,
                      "status": 256
                    },
                    {
                      "color": 14965321,
                      "status": 512
                    },
                    {
                      "color": 16565862,
                      "status": 1024
                    }
                  ]
                },
                "intfPosList": [
                  {
                    "posName": "intfPos1",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.routingProtocol",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Routing Protocol",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos3",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.multicastMode",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Multicasting Mode",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos4",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.mplsVrf",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "MPLS VRF",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos5",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.inAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Inbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos6",
                    "posInfo": {
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.outAclName",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Outbound ACL",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  },
                  {
                    "posName": "intfPos7",
                    "posInfo": {
                      "displayInfo": "MGMT",
                      "isLock": false,
                      "displayTemplate": "",
                      "dataUnitList": [
                        {
                          "uId": "intfs.descr",
                          "value": "MGMT",
                          "valueType": "string",
                          "type": "uSrcGDR",
                          "displayName": "Description",
                          "generateTime": "0001-01-01T00:00:00",
                          "intfTmpl": null,
                          "definedDrillDownAction": false
                        }
                      ],
                      "isCustomize": false
                    }
                  }
                ],
                "intf": {
                  "intfKeyObj": {
                    "schema": "ipIntfs._id",
                    "value": "7b768a95-1148-4f12-9049-ee77685148a6"
                  },
                  "intfDisplaySchemaObj": {
                    "schema": "ipIntfs.name",
                    "value": "vlan10 172.24.101.22/24"
                  },
                  "isIpUnnumberedIntf": false,
                  "devId": null,
                  "intfNodeData": {
                    "isRealIntf": true,
                    "nodeIdentify": {
                      "nbPathSchema": "Legacy.ipIntfs",
                      "nbPathValue": "7b768a95-1148-4f12-9049-ee77685148a6"
                    },
                    "id": "7b768a95-1148-4f12-9049-ee77685148a6",
                    "visualSpaceInfo": {
                      "visualSpaceName": "Default Visual Space",
                      "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
                    }
                  },
                  "intfExtendData": {
                    "intfs.isChannel": false,
                    "intfs.isTunnel": false,
                    "intfs.isTunnelMultipoint": false
                  }
                },
                "intfHighlightList": null
              }
            },
            "intfDest": null,
            "fromPort": "7b768a95-1148-4f12-9049-ee77685148a6",
            "toPort": "",
            "devIdSrc": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a21",
            "devIdDest": null,
            "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "mediaInfo": {
              "mediaId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
              "mediaName": "172.24.101.0/24",
              "mediaType": "Lan",
              "topoType": "L3_Topo_Type",
              "neat": false,
              "vrf": "",
              "hsrp": "HSRP: 100(172.24.101.1)"
            },
            "policyStyle": {
              "src": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              },
              "dest": {
                "line": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "strokeDashArray": [
                    0
                  ],
                  "isCreateLegend": false,
                  "name": "Default"
                }
              }
            },
            "isL2LinkStyle": false,
            "points": [
              "247.04 162.15586854460093",
              "71.1743076923077 54.82"
            ],
            "eventHandle": null,
            "key": "1fc42cb6-f811-4959-6f96-aada1ebd7327",
            "compModels": {
              "isEditableModel": true
            }
          }
        ],
        "modelData": {
          "space": 1
        },
        "MultiPathObjs": {},
        "displayMode": "switchMode",
        "isNeatUp": false,
        "pageExtraData": {
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAK0CAYAAADoJxl9AAAgAElEQVR4XuydCZiN5fvH75kzK2Nfsu9kl4iy9isiopJQKCGEkKVF1iypqL9sISVK1pA9KYksRUihbNll383+v773eMeZcdZZzrznnO9zXXONOed5n+XzvGbe77m3gPj4+HhhIwESIAESIAESIAESIAESIAETEAigQDHBKXAJJEACJEACJEACJEACJEACSoAChTcCCZAACZAACZAACZAACZCAaQhQoJjmKLgQEiABEiABEiABEiABEiABChTeAyRAAiRAAiRAAiRAAiRAAqYhQIFimqPgQkiABEiABEiABEiABEiABChQeA+QAAmQAAmQAAmQAAmQAAmYhgAFimmOggshARIgARIgARIgARIgARKgQOE9QAIkQAIkQAIkQAIkQAIkYBoCFCimOQouhARIgARIgARIgARIgARIgAKF9wAJkAAJkAAJkAAJkAAJkIBpCFCgmOYouBASIAESIAESIAESIAESIAEKFN4DJEACJEACJEACJEACJEACpiFAgWKao+BCSIAESIAESIAESIAESIAEKFB4D5AACZAACZAACZAACZAACZiGAAWKaY6CCyEBEiABEiABEiABEiABEqBA4T1AAiRAAiRAAiRAAiRAAiRgGgIUKKY5Ci6EBEiABEiABEiABEiABEiAAoX3AAmQAAmQAAmQAAmQAAmQgGkIUKCY5ii4EBIgARIgARIgARIgARIgAQoU3gMkQAIkQAIkQAIkQAIkQAKmIUCBYpqj4EJIgARIgARIgARIgARIgAQoUHgPkAAJkAAJkAAJkAAJkAAJmIYABYppjoILIQESIAESIAESIAESIAESoEDhPUACJEACJEACJEACJEACJGAaAhQopjkKLoQESIAESIAESIAESIAESIAChfcACZAACZAACZAACZAACZCAaQhQoJjmKLgQEiABEiABEiABEiABEiABChQT3wORMfEmXl3aLi00KCBtB+RoJEACJEACJEACJEACXkmAAsXEx3b+eox4q0QJsQQIvoIsCcIjOjZeomLj9XvyljkkUMKDA018ElwaCZAACZAACZAACZCApwhQoHiKdArm8UaBAktIpuBAubBooVz8/vvEXUdUqyaZSpeWiPoPy42oOBUrRqNAScHNwUtIgARIgARIgARIwEcJUKCY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pEBJETZeRAIkQAIkQAIkQAI+SYACxcTH6i0CBTExy5cvl3vvvVcqVarkNlEKFLeR8QISIAESIAESIAES8FkCFCgmPlpvEShAePnyZRUpNWrUkNKlS7tFlQLFLVzsTAIkQAIkQAIkQAI+TYACxcTHm7H5udwHs3XLFnnsscdk/vz50qhxY7cGSHmIvVvTsDMJkAAJkAAJkAAJkIDJCVCgmPyAvG15sKK0adNGfvjhB7WmsJEACZAACZAACZAACZCAOwQoUNyhxb4uEZg5c6YMHTpURUrJkiVduoadSIAESIAESIAESIAESAAEKFB4H6QLgZiYGImNjZWQkJBU1UhJl8VxUBIgARIgARIgARIgAdMSoEAx7dFwYSRAAiRAAiRAAiRAAiTgfwQoUPzvzGXixImye/du+eijjyRz5sx+SIBbJgESIAESIAESIAESMCsBChQTnMz58+elbdu2smbNGl1NlixZpHbt2tK9e3dp2rSpBAYGyldffSWzZ8/W77ly5bK5anvjdO7cWZ544gkJDQ3V61IjUOLj42XlypUqbtatW6e1T5566inp3bu3fPDBBzr+mDFj1LUrKipK3nzzTfn999913QUKFND3v/32W3nvvfdkzpw5gvFGjx4tixYt0ve6desm/fr1k5w5c5rgZLgEEiABEiABEiABEiABTxOgQPE0cRvzGcKiWrVq0rdvXzl16pR89tlnMnfuXFm2bJngdXcEijEOqruvXr1apk6dKi+99JI++AcFBaVqxzt37pRWrVrJK6+8Ig899JBg7YcPH9bxlyxZIl9++aUKqdy5c8vJkydVeG3fvl1WrVqloguCZPjw4XL69Gl599135Z133tE1IfMXaqkMHDhQUxUjyN5isaRqrbyYBEiABEiABEiABEjA+whQoJjgzAyBggf4wYMH64r2798vrVu3llGjRqkVxR2BYj0Oxvruu++kS5cuWp8EqX9HjBghJ06cUCsI2vTp02Xy5Mk6Z/369WXAgAE6p60G68fYsWPV+lGoUKEkXeA29sILL8iMGTNUVG3atElFCCwn5cqVk9dee01FCCw6DRo0kK5du0pcXJwG0eMLzXpt4eHhJjgdLoEESIAESIAESIAESMCTBChQPEnbzlzJBQoe2hcvXqyWhq+//loqVKiQKoFiWDJgpYAosBYBu3btko4dO6pIKVOmjOzbt0+K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2K9fP3XjctQaNmwo//vf/wSvbCQQyASQlvvSpUty9epViY2N9SoKiJKwsDDJkCGDV8fBi5MACViDgE8JFO72WOOm4ShJwNMEjHonuM7zzz8vadKkcfmStWvXlrfeektq1arl8jk8kARIgARIgARIwHcI+JRA4W6P79wYHAkJeJsAqsmvWbNGmjZt6rAgo7PxIX3p7NmzNY0pGwmQAAmQAAmQgPUI+JRAsR4+jpgESMDXCJQvX16WLFmi/u5sJEACJEACJEAC1iNAgWK9NeOIScDvCcBffteuXTJ16lTZtm2bHD16VCpWrChw3+rRo4cULlzYKYPixYvLN998I8WKFfN7TpwgCZAACZAACfgjAQoUf1xVzokELE5g69atgkB41DRBVXi0W7duyY8//igrV66UhQsXOrWQFChQQH755RetNs9GAiRAAiRAAiRgPQIUKNZbM46YBPyeAARIdHS0dO3aNc5cYVmZOXOmZMmSRTp37uyQQ65cuWTv3r2SM2dOv+fECZIACZAACZCAPxKgQPHHVeWcSMDiBL788ktZsWKFjB49WiA4jIZMf0OHDtXA+ZYtWzqcJcTLyZMnBXUX2EiABEiABEiABKxHgALFemvGEZOA3xNABq/hw4fLnDlz5N5779WijNeuXZMdO3bIU089pcIlY8aMDjncc889gvNZDM7vbxNOkARIgARIwE8JUKD46cJyWiTgDwQuXrwof/zxh8af7V6zRQAAIABJREFUhISESIkSJSR37twSFBTkcHpwC4NAwSsbCZAACZAACZCANQlQoFhz3ThqEiABBwRQMRsuYbCgsJEACZAACZAACViTAAWKNdeNoyYBvyZw5coVuXHjhs4xODhYwsLC9DWx9s8//6iV5cKFC4kdyvdJwFIEcE8jMQRSaKMhxgppt5Ht7pFHHtHPB5JLLFiwQF9z5MiR4Pwg4p955hnZvn271g0qVapUivNAUotVq1bJO++8I2vXrtVrtG7dWgYOHChvvfWWXm/cuHFq9bx586a89NJLOh6MH66daIhHe/PNN2XRokWC/saMGSNLly7V9/r06SPPP/+8ZM+ePcXHzg5JgAS8S4ACxbv8eXUSIAE7AnDnevXVV20PMPaAUA/F2QPV6dOntYL8qVOnyJUE/IqAIVBwfw8ePFhwr7///vvy8ccfy1dffaX3vTsCZfPmzSpuQkND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IKCkaYVCCBAgQIAAAQIECBAQUIwBAgRWJfD555+X33//vXz99ddlw4YN5eeffy4LCwvl4cOHg/O++OKL5caNG83P9b36u23bti26/l9//VU+/vjjcvHixeb3165dK/v371/0mQcPHpS47vXr18vmzZuX1B/vv/fee8016/nb5+1eu7737LPPlhMnTvR6xPU+/fTT5r3Tp08v+dwff/zR1BnH79q1a1WmDiZAgAABArMsIKDMcvfdO4FVCNQ/yI8cOVIePXpUjh071gSU7isCy507d5rQcenSpbJ3794mVESIuHr16iDY1OPi9/GKP/LjGu+//345efLkIGjE+W7evNl85ujRo0sCSgSJeG3atKns2bNncFyEmXhFiIhzXL58uZw6dao8efKkfPjhh825fv3116bOvnv46aefyvz8fKlh5uDBg4MgEr87e/Zsc82dO3cKKKsYVw4lQIAAAQICijFAgMCqBCJEXLhwYWhAiWCwdevWJX+0L3dcLSpmZmrQqEEgZmG++uqrcubMmd4ZlDi277gaaOI8n332WTl06NCi4FOD1HIg3XuqP9+7d6/s3r1bQFkO0PsECBAgQGCEgIBieBAgsCqBUUFj1HsxU/L48eMly7faxXSPv337dtm+fXuZm5srx48fHzugxHm6n4+ZlnaYaM/0jAKpIamGnTiuzq50z7kqWAcTIECAAIEZFRBQZrTxbpvApARGhZBhsyfjhIFRQaAvcHTvpz2DMsmA0p2ZiWVqsdwrlrcJKJMaVc5DgAABArMsIKDMcvfdO4EJCAwLKMNCRHv/R9+elSipuwSru3G+lj1so3283w0S7SVdK13i1Q0gEcAOHDiwRLFvY/8EqJ2CAAECBAjMhICAMhNtdpME1k5gWEBpb0qvV19JOOmr/N/OoMQ5hm2SryFpuVmdcWZHxvnM2nXCmQkQIECAwHQICCjT0Ud3QeB/E+gLKH1P36pP/bp79+6g1joD8vTp08Fjg2PDfX2cb/1gd0aiHVA2btzYPHnr1VdfXbSfpT2DEucZ9ZjheL8bUOLneLrXuXPnyvfff79kpqTvUcMCyv82DF2YAAECBKZIQECZoma6FQIECBAgQIAAAQLrXUBAWe8dVD8BAgQIECBAgACBKRIQUKaomW6FAAECBAgQIECAwHoXEFDWewfVT4AAAQIECBAgQGCKBASUKWqmWyFAgAABAgQIECCw3gUElPXeQfUTIECAAAECBAgQmCIBAWWKmulWCBAgQIAAAQIECKx3AQFlvXdQ/QQIECBAgAABAgSmSEBAmaJmuhUCaykQX0LY/gLF+PLEl19+uZw8ebJ88803ZfPmzRO9fPdb59tftBgXql/yuG3btua6Dx48KK+88sqghr4vUhznM303EcddvXq1xJc/1m+eH3Wzy30r/UShnIwAAQIECEyZgIAyZQ11OwTWQiDCSbxOnDixFqfvPWc7oMQHut8W3/6m97m5uXL8+PFy5syZoUGp/e3zqwlTEVbitWvXrqEWAsp/NkxciAABAgSmUEBAmcKmuiUCkxSIP7aHzZLEH/0XLlwox44dK0+ePCkLCwvl4cOHzeVjhmX//v2LZjYOHz7czEL8+eefzXt3795tPnv//v0lf/C3A8oPP/xQ7t27tyQgXb9+vTn+zTffXHFAicDx+PHjpp64n/g3glgEkHgvrrtv375y586dsmfPnsE91hmcLVu2NOHp4sWLg3uJwHT58uXy6NGj5h67sz2T7I9zESBAgACBaRMQUKato+6HwIQF6h/pfbMn7YBy9uzZsnv37kVBoy/c1KVaBw8ebD47bGajHVBu3brV3FWEh/arXVtdvlWDUR9D32e6Qej27dtNXfPz8yUC0NatW0sEjggoEUTq7+oMSswuPffcc4tq6973KMMJt8vpCBAgQIDAuhcQUNZ9C90AgbUVGDeg1BmUd955ZzDT0Z6dqFW2Q03dzxF/5PeFm5iFOHXqVBknoNTzR4A4cOBA76xM32deeumlEuHq6NGj5cqVK2Xnzp3NrEn8/OWXX5ZDhw41h/UFlAhb9dj2srHuEi9LvtZ2jDo7AQIECEyXgIAyXf10NwQmLjDuEq8aNuosRSzbilddPrWagLLcEq/uzEp3g30fSvszETJ27NjRLMmK5WrffvvtIKjU5WsCysSHlhMSIECAAIFeAQHFwCBAYFmBYZvk+2ZD4mR15qTvKV8rWeIV5xy1Sb4+yaveyDhP3Wp/JgJQe2lXvHf+/Pny9ttvN0u32jMgdd9LDUXDlnjVQBM1mUFZdoj5AAECBAgQGAgIKAYDAQJjCXQfMxwzJNu3bx9sko9ZiPoY4jfeeKPZqxHLntqP9l3pJvmYnRn1mOEIAO0N+u3r15sb9Znu5vjuz+2AUc8T571x40YZtkleQBlrWPkQAQIECBBYIiCgGBQECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEZAQEnTCoUQIECAAAECBAgQICCgGAMECBAgQIAAAQIECKQREFDStEIhBAgQIECAAAECBAgIKMYAAQIECBAgQIAAAQJpBASUNK1QCAECBAgQIECAAAECAooxQIAAAQIECBAgQIBAGgEBJU0rFEKAAAECBAgQIECAgIBiDBAgQIAAAQIECBAgkEbgHz3IA94NyEn0AAAAAElFTkSuQmCC",
          "imageSize": {
            "width": 807.9306457149173,
            "height": 691.1300411281552
          }
        },
        "isFirstView": false,
        "isFrom6X": false,
        "l3StyleInExpandedStyle": [
          "1000",
          "1030",
          "1036",
          "1004",
          "1005",
          "1002",
          "1049",
          "1028",
          "1021",
          "1027",
          "1024"
        ],
        "highlightMode": 0,
        "mapLegend": {
          "devHighlightLegend": {
            "name": "device",
            "list": []
          },
          "linkHighlightLegend": {
            "name": "link",
            "list": []
          },
          "interfaceHighlightLegend": {
            "name": "interface",
            "list": []
          },
          "intfMonitorLegend": [],
          "devMonitorLegend": [],
          "dataUnitMonitorLegend": []
        },
        "creator": "mbarua",
        "createTm": null,
        "lastUpdateTime": null,
        "updatedBy": "mbarua",
        "extendData": {
          "extendRunbookData": {
            "runbookId": "",
            "runbookNodeName": "",
            "runbookNodeId": "",
            "runbookNodeResultName": "",
            "runbookNodeResultId": "",
            "lastUpdateTime": "2019-12-19T19:36:23.430Z"
          },
          "extendDataViewTemplateData": {
            "dataViewTemplatePath": "",
            "dataViewTemplateId": ""
          },
          "extendDataViewData": {
            "dataViewName": "",
            "dataViewId": "",
            "dataViewGroupScope": "",
            "lastUpdateTime": "2019-12-19T19:36:23.430Z"
          }
        },
        "visualSpaceInfo": {
          "visualSpaceName": "Default Visual Space",
          "visualSpaceInstanceId": "00000000-0000-0000-0000-000000000000"
        },
        "visioInfos": [
          {
            "type": "node",
            "infos": [
              {
                "type": "picture",
                "source": "/ServicesAPI/DeviceIcon/86dc5405-7db1-570e-1a2c-3bc546d289bd/00000000-0000-0000-0000-00000000002e.png",
                "width": 51.92,
                "height": 31.9,
                "bounds": {
                  "left": -147.96,
                  "top": -170.45,
                  "right": -96.04,
                  "bottom": -138.54999999999998,
                  "width": 51.92,
                  "height": 31.900000000000006
                },
                "connectId": "default"
              },
              {
                "type": "shape",
                "fill": "#CC3333",
                "geometryString": "F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z",
                "stroke": null,
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": -108.54,
                  "top": -172.95,
                  "right": -93.54,
                  "bottom": -157.9602550823749,
                  "width": 15,
                  "height": 14.989744917625075
                }
              },
              {
                "type": "text",
                "text": "BJ_Dis_SW2",
                "font": "normal normal 600 13px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -157.241455078125,
                  "top": -133.54999999999998,
                  "right": -87.258544921875,
                  "bottom": -117.95380859374998,
                  "width": 69.98291015625,
                  "height": 15.59619140625
                }
              },
              {
                "type": "text",
                "text": "172.24.101.12",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -157.088623046875,
                  "top": -111.90905761718749,
                  "right": -85.411376953125,
                  "bottom": -98.99855957031248,
                  "width": 71.67724609375,
                  "height": 12.910498046875
                }
              },
              {
                "type": "text",
                "text": "Cisco IOS Switch",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -162.991455078125,
                  "top": -95.90905761718749,
                  "right": -79.508544921875,
                  "bottom": -82.99855957031248,
                  "width": 83.48291015625,
                  "height": 12.910498046875
                }
              }
            ],
            "layerIndex": 8,
            "key": "e8fae82f-5b06-43b8-aa14-2f121c057489",
            "location": "-122 -154.5",
            "bounds": {
              "left": -178.991455078125,
              "top": -173.95,
              "right": -64.508544921875,
              "bottom": -82.95380859374998,
              "width": 114.48291015625,
              "height": 90.99619140625
            }
          },
          {
            "type": "node",
            "infos": [
              {
                "type": "picture",
                "source": "/ServicesAPI/DeviceIcon/86dc5405-7db1-570e-1a2c-3bc546d289bd/00000000-0000-0000-0000-000000000082.png",
                "width": 22.44,
                "height": 13.64,
                "bounds": {
                  "left": 48.78,
                  "top": 41.18,
                  "right": 71.22,
                  "bottom": 54.82,
                  "width": 22.439999999999998,
                  "height": 13.64
                },
                "connectId": "default"
              },
              {
                "type": "text",
                "text": "172.24.101.0/24\nHSRP: 100(172.24.101.1)",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "center",
                "stroke": "black",
                "background": "white",
                "isMultiline": true,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -2.06298828125,
                  "top": 62.82,
                  "right": 122.06298828125,
                  "bottom": 88.64099609375,
                  "width": 124.1259765625,
                  "height": 25.82099609375
                }
              }
            ],
            "layerIndex": 8,
            "key": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "location": "60 48",
            "bounds": {
              "left": -2.06298828125,
              "top": 39.18,
              "right": 122.06298828125,
              "bottom": 88.64099609375,
              "width": 124.1259765625,
              "height": 49.46099609375
            }
          },
          {
            "type": "node",
            "infos": [
              {
                "type": "picture",
                "source": "/ServicesAPI/DeviceIcon/86dc5405-7db1-570e-1a2c-3bc546d289bd/00000000-0000-0000-0000-000000000001.png",
                "width": 52.8,
                "height": 33,
                "bounds": {
                  "left": 239.6,
                  "top": -108.5,
                  "right": 292.4,
                  "bottom": -75.5,
                  "width": 52.79999999999998,
                  "height": 33
                },
                "connectId": "default"
              },
              {
                "type": "shape",
                "fill": "#CC3333",
                "geometryString": "F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z",
                "stroke": null,
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": 279.9,
                  "top": -111,
                  "right": 294.9,
                  "bottom": -96.01025508237491,
                  "width": 15,
                  "height": 14.989744917625089
                }
              },
              {
                "type": "text",
                "text": "11",
                "font": "normal normal 600 13px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 258.32958984375,
                  "top": -70.5,
                  "right": 273.17041015625,
                  "bottom": -54.90380859375,
                  "width": 14.8408203125,
                  "height": 15.59619140625
                }
              },
              {
                "type": "text",
                "text": "172.24.101.31",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 230.911376953125,
                  "top": -48.8590576171875,
                  "right": 302.588623046875,
                  "bottom": -35.948559570312504,
                  "width": 71.67724609375,
                  "height": 12.910498046875
                }
              },
              {
                "type": "text",
                "text": "3Com Switch",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 233.645263671875,
                  "top": -32.8590576171875,
                  "right": 299.854736328125,
                  "bottom": -19.948559570312504,
                  "width": 66.20947265625,
                  "height": 12.910498046875
                }
              }
            ],
            "layerIndex": 8,
            "key": "799e215b-7eec-4662-952f-7632b594d608",
            "location": "266 -92",
            "bounds": {
              "left": 214.911376953125,
              "top": -112,
              "right": 317.588623046875,
              "bottom": -19.90380859375,
              "width": 102.67724609375,
              "height": 92.09619140625
            }
          },
          {
            "type": "node",
            "infos": [
              {
                "type": "picture",
                "source": "/ServicesAPI/DeviceIcon/86dc5405-7db1-570e-1a2c-3bc546d289bd/00000000-0000-0000-0000-00000000002e.png",
                "width": 51.92,
                "height": 31.9,
                "bounds": {
                  "left": 26.04,
                  "top": 302.05,
                  "right": 77.96000000000001,
                  "bottom": 333.95,
                  "width": 51.92000000000001,
                  "height": 31.899999999999977
                },
                "connectId": "default"
              },
              {
                "type": "shape",
                "fill": "#CC3333",
                "geometryString": "F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z",
                "stroke": null,
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": 65.46000000000001,
                  "top": 299.55,
                  "right": 80.46000000000001,
                  "bottom": 314.5397449176251,
                  "width": 15,
                  "height": 14.989744917625103
                }
              },
              {
                "type": "text",
                "text": "BJ_Acc_Sw4",
                "font": "normal normal 600 13px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 16.609375,
                  "top": 338.95,
                  "right": 86.890625,
                  "bottom": 354.54619140625,
                  "width": 70.28125,
                  "height": 15.59619140625
                }
              },
              {
                "type": "text",
                "text": "172.24.101.24",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 16.911376953125,
                  "top": 360.5909423828125,
                  "right": 88.588623046875,
                  "bottom": 373.5014404296875,
                  "width": 71.67724609375,
                  "height": 12.910498046875
                }
              },
              {
                "type": "text",
                "text": "Cisco IOS Switch",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 11.008544921875,
                  "top": 376.5909423828125,
                  "right": 94.491455078125,
                  "bottom": 389.5014404296875,
                  "width": 83.48291015625,
                  "height": 12.910498046875
                }
              }
            ],
            "layerIndex": 8,
            "key": "df07648d-7a7a-44be-8101-ce8dc47d47a3",
            "location": "52 318",
            "bounds": {
              "left": -4.991455078125,
              "top": 298.55,
              "right": 109.491455078125,
              "bottom": 389.54619140625005,
              "width": 114.48291015625,
              "height": 90.99619140625
            }
          },
          {
            "type": "node",
            "infos": [
              {
                "type": "picture",
                "source": "/ServicesAPI/DeviceIcon/86dc5405-7db1-570e-1a2c-3bc546d289bd/00000000-0000-0000-0000-00000000002e.png",
                "width": 51.92,
                "height": 31.9,
                "bounds": {
                  "left": -221.96,
                  "top": 164.05,
                  "right": -170.04000000000002,
                  "bottom": 195.95000000000002,
                  "width": 51.91999999999999,
                  "height": 31.900000000000006
                },
                "connectId": "default"
              },
              {
                "type": "shape",
                "fill": "#CC3333",
                "geometryString": "F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z",
                "stroke": null,
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": -182.54000000000002,
                  "top": 161.55,
                  "right": -167.54000000000002,
                  "bottom": 176.5397449176251,
                  "width": 15,
                  "height": 14.989744917625075
                }
              },
              {
                "type": "text",
                "text": "BJ_Acc_SW1",
                "font": "normal normal 600 13px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -232.228515625,
                  "top": 200.95000000000002,
                  "right": -160.271484375,
                  "bottom": 216.54619140625002,
                  "width": 71.95703125,
                  "height": 15.59619140625
                }
              },
              {
                "type": "text",
                "text": "172.24.101.21",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -231.088623046875,
                  "top": 222.59094238281253,
                  "right": -159.411376953125,
                  "bottom": 235.50144042968753,
                  "width": 71.67724609375,
                  "height": 12.910498046875
                }
              },
              {
                "type": "text",
                "text": "Cisco IOS Switch",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -236.991455078125,
                  "top": 238.59094238281253,
                  "right": -153.508544921875,
                  "bottom": 251.50144042968753,
                  "width": 83.48291015625,
                  "height": 12.910498046875
                }
              }
            ],
            "layerIndex": 8,
            "key": "192d88e1-1e09-430a-a8d1-54cf064ba7e3",
            "location": "-196 180",
            "bounds": {
              "left": -252.991455078125,
              "top": 160.55,
              "right": -138.508544921875,
              "bottom": 251.54619140625002,
              "width": 114.48291015625,
              "height": 90.99619140625
            }
          },
          {
            "type": "node",
            "infos": [
              {
                "type": "picture",
                "source": "/ServicesAPI/DeviceIcon/86dc5405-7db1-570e-1a2c-3bc546d289bd/00000000-0000-0000-0000-00000000002e.png",
                "width": 51.92,
                "height": 31.9,
                "bounds": {
                  "left": 247.04,
                  "top": 162.05,
                  "right": 298.96,
                  "bottom": 193.95000000000002,
                  "width": 51.91999999999999,
                  "height": 31.900000000000006
                },
                "connectId": "default"
              },
              {
                "type": "shape",
                "fill": "#CC3333",
                "geometryString": "F M4.65035876275954 13.693339956079184 C0.16309187724480814 12.02782636263078 -1.435496950719815 6.579620878977524 1.4531811068302936 2.7404709008591683 C3.3883149512085216 0.14339885683792766 7.006173877654774 -0.7317015058214035 9.92289735323935 0.6515216480594748 C15.335663033891496 3.220364648123963 15.363708451925962 10.616374164793148 9.978988189308284 13.439278560468411 C8.7730352138262 14.060317527516968 5.968493410379493 14.20146274730073 4.65035876275954 13.693339956079184z M8.380399361343661 9.713044758177064 L8.380399361343661 8.16044734055567 L9.92289735323935 8.16044734055567 L11.46539534513504 8.16044734055567 L11.46539534513504 6.890140362501803 L11.46539534513504 5.619833384447936 L9.92289735323935 5.619833384447936 L8.380399361343661 5.619833384447936 L8.380399361343661 4.067235966826542 L8.380399361343661 2.5146385492051473 L7.118355549792643 2.5146385492051473 L5.856311738241624 2.5146385492051473 L5.856311738241624 4.067235966826542 L5.856311738241624 5.619833384447936 L4.313813746345935 5.619833384447936 L2.7713157544502462 5.619833384447936 L2.7713157544502462 6.890140362501803 L2.7713157544502462 8.16044734055567 L4.313813746345935 8.16044734055567 L5.856311738241624 8.16044734055567 L5.856311738241624 9.713044758177064 L5.856311738241624 11.265642175798458 L7.118355549792643 11.265642175798458 L8.380399361343661 11.265642175798458 L8.380399361343661 9.713044758177064z",
                "stroke": null,
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": 286.46,
                  "top": 159.55,
                  "right": 301.46,
                  "bottom": 174.5397449176251,
                  "width": 15,
                  "height": 14.989744917625075
                }
              },
              {
                "type": "text",
                "text": "BJ_Acc_SW2",
                "font": "normal normal 600 13px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 236.771484375,
                  "top": 198.95000000000002,
                  "right": 308.728515625,
                  "bottom": 214.54619140625002,
                  "width": 71.95703125,
                  "height": 15.59619140625
                }
              },
              {
                "type": "text",
                "text": "172.24.101.22",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 237.911376953125,
                  "top": 220.59094238281253,
                  "right": 309.588623046875,
                  "bottom": 233.50144042968753,
                  "width": 71.67724609375,
                  "height": 12.910498046875
                }
              },
              {
                "type": "text",
                "text": "Cisco IOS Switch",
                "font": "normal normal 400 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": false,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 232.008544921875,
                  "top": 236.59094238281253,
                  "right": 315.491455078125,
                  "bottom": 249.50144042968753,
                  "width": 83.48291015625,
                  "height": 12.910498046875
                }
              }
            ],
            "layerIndex": 8,
            "key": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a21",
            "location": "273 178",
            "bounds": {
              "left": 216.008544921875,
              "top": 158.55,
              "right": 330.491455078125,
              "bottom": 249.54619140625002,
              "width": 114.48291015625,
              "height": 90.99619140625
            }
          },
          {
            "type": "link",
            "infos": [
              {
                "type": "text",
                "text": "vlan10 172.24.101.12/24",
                "font": "normal normal 600 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": true,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -54.767142259033946,
                  "top": -105.4202784447201,
                  "right": 19.93809918887831,
                  "bottom": -2.558295335070625,
                  "width": 126.44091796875,
                  "height": 13.19677734375
                },
                "angle": 48.05189190673371,
                "connectId": "e8fae82f-5b06-43b8-aa14-2f121c0574891750e3cd-4d55-4a24-9522-af86c03ac6ec",
                "isFrom": true
              },
              {
                "type": "shape",
                "fill": "black",
                "geometryString": "M0 0 L161.535111 179.73",
                "stroke": "#000000",
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": -108.16469135802467,
                  "top": -139.04999999999998,
                  "right": 54.37041964197533,
                  "bottom": 41.68000000000001,
                  "width": 162.535111,
                  "height": 180.73
                },
                "isFrom": true,
                "layerName": 1
              }
            ],
            "layerIndex": 6,
            "from": "e8fae82f-5b06-43b8-aa14-2f121c057489",
            "fromConnectedId": "e8fae82f-5b06-43b8-aa14-2f121c0574891750e3cd-4d55-4a24-9522-af86c03ac6ec",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "toConnectedId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "points": [
              "-107.66469135802468 -138.54999999999998",
              "53.87041975308641 41.18"
            ]
          },
          {
            "type": "link",
            "infos": [
              {
                "type": "text",
                "text": "vlan10 172.24.101.31/24",
                "font": "normal normal 600 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": true,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 99.15910686138587,
                  "top": 26.223330700198943,
                  "right": 211.15311479462815,
                  "bottom": -33.93315570060025,
                  "width": 126.44091796875,
                  "height": 13.19677734375
                },
                "angle": 325.79951586973147,
                "connectId": "799e215b-7eec-4662-952f-7632b594d6080a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8",
                "isFrom": true
              },
              {
                "type": "shape",
                "fill": "black",
                "geometryString": "M171.6862857142857 0 L0 116.68",
                "stroke": "#000000",
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": 69.53514285714284,
                  "top": -76,
                  "right": 242.22142857142853,
                  "bottom": 41.68000000000001,
                  "width": 172.6862857142857,
                  "height": 117.68
                },
                "isFrom": true,
                "layerName": 1
              }
            ],
            "layerIndex": 6,
            "from": "799e215b-7eec-4662-952f-7632b594d608",
            "fromConnectedId": "799e215b-7eec-4662-952f-7632b594d6080a91e6ea-4ef0-4afc-8fbe-1af1c86cbdc8",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "toConnectedId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "points": [
              "241.72142857142856 -75.5",
              "70.03514285714284 41.18"
            ]
          },
          {
            "type": "link",
            "infos": [
              {
                "type": "text",
                "text": "vlan10 172.24.101.24/24",
                "font": "normal normal 600 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": true,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 35.87569157693993,
                  "top": 281.5494627463781,
                  "right": 52.81143405026879,
                  "bottom": 155.55485454460714,
                  "width": 126.44091796875,
                  "height": 13.19677734375
                },
                "angle": 271.69715618960026,
                "connectId": "df07648d-7a7a-44be-8101-ce8dc47d47a3c1304757-d18a-4ae1-99b1-20db8b904b9e",
                "isFrom": true
              },
              {
                "type": "shape",
                "fill": "black",
                "geometryString": "M0 247.23000000000002 L7.325333 0",
                "stroke": "#000000",
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": 51.97259259259259,
                  "top": 54.32,
                  "right": 60.29792559259259,
                  "bottom": 302.55,
                  "width": 8.325333,
                  "height": 248.23000000000002
                },
                "isFrom": true,
                "layerName": 1
              }
            ],
            "layerIndex": 6,
            "from": "df07648d-7a7a-44be-8101-ce8dc47d47a3",
            "fromConnectedId": "df07648d-7a7a-44be-8101-ce8dc47d47a3c1304757-d18a-4ae1-99b1-20db8b904b9e",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "toConnectedId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "points": [
              "52.47259259259259 302.05",
              "59.797925925925924 54.82"
            ]
          },
          {
            "type": "link",
            "infos": [
              {
                "type": "text",
                "text": "vlan10 172.24.101.21/24",
                "font": "normal normal 600 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": true,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": -160.1450328344448,
                  "top": 142.1640421637563,
                  "right": -41.71600480394761,
                  "bottom": 95.94688097018678,
                  "width": 126.44091796875,
                  "height": 13.19677734375
                },
                "angle": 332.7232366168863,
                "connectId": "192d88e1-1e09-430a-a8d1-54cf064ba7e36d3666b7-6ed1-48fc-8fd2-ffc50934a93b",
                "isFrom": true
              },
              {
                "type": "shape",
                "fill": "black",
                "geometryString": "M0 112.82906249999999 L218.82 0",
                "stroke": "#000000",
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": -170.54000000000002,
                  "top": 53.2853125,
                  "right": 49.27999999999997,
                  "bottom": 167.114375,
                  "width": 219.82,
                  "height": 113.82906249999999
                },
                "isFrom": true,
                "layerName": 1
              }
            ],
            "layerIndex": 6,
            "from": "192d88e1-1e09-430a-a8d1-54cf064ba7e3",
            "fromConnectedId": "192d88e1-1e09-430a-a8d1-54cf064ba7e36d3666b7-6ed1-48fc-8fd2-ffc50934a93b",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "toConnectedId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "points": [
              "-170.04000000000002 166.614375",
              "48.78 53.785312499999996"
            ]
          },
          {
            "type": "link",
            "infos": [
              {
                "type": "text",
                "text": "vlan10 172.24.101.22/24",
                "font": "normal normal 600 11px 'open sans'",
                "textAlign": "start",
                "stroke": "black",
                "background": "white",
                "isMultiline": true,
                "isStrikethrough": false,
                "isUnderline": false,
                "spacingAbove": 0,
                "spacingBelow": 0,
                "bounds": {
                  "left": 119.95727160624087,
                  "top": 89.2797915403589,
                  "right": 221.0095269363111,
                  "bottom": 166.4154017456783,
                  "width": 126.44091796875,
                  "height": 13.19677734375
                },
                "angle": 31.396912248590468,
                "connectId": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a217b768a95-1148-4f12-9049-ee77685148a6",
                "isFrom": true
              },
              {
                "type": "shape",
                "fill": "black",
                "geometryString": "M175.86569230769229 107.33586854460094 L0 0",
                "stroke": "#000000",
                "strokeCap": "butt",
                "strokeDashArray": null,
                "strokeJoin": "miter",
                "strokeWidth": 1,
                "angle": 0,
                "bounds": {
                  "left": 70.6743076923077,
                  "top": 54.32,
                  "right": 247.54,
                  "bottom": 162.65586854460093,
                  "width": 176.86569230769229,
                  "height": 108.33586854460094
                },
                "isFrom": true,
                "layerName": 1
              }
            ],
            "layerIndex": 6,
            "from": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a21",
            "fromConnectedId": "c6c556ea-5c0c-4b2e-a0b0-3ec7b50f7a217b768a95-1148-4f12-9049-ee77685148a6",
            "to": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "toConnectedId": "207b99d8-5dd6-439a-b12b-902d99ccd313",
            "points": [
              "247.04 162.15586854460093",
              "71.1743076923077 54.82"
            ]
          }
        ]
 };

document.getElementById('pageDataInput').value = JSON.stringify(data2);
document.getElementById('pageDataInput2').value = JSON.stringify(data3);
